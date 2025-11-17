// buyFirstCrypto_step5.module.js
// Simulation: "Buy Your First Crypto" – Step 5

export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = window.gsap || null;

    if (!rootEl) return;

    // ----- Helpers -----
    const COOKIE_NAME = "nca_sim_buyFirstCrypto";

    const getCookie = (name) => {
      if (typeof document === "undefined") return null;
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
      return null;
    };

    const loadStore = () => {
      try {
        const raw = getCookie(COOKIE_NAME);
        if (!raw) return null;
        return JSON.parse(raw);
      } catch (e) {
        console.warn("[buyFirstCrypto_step5] Failed to parse cookie", e);
        return null;
      }
    };

    const formatUsd = (amount) => {
      if (isNaN(amount)) return "$0.00";
      return `$${Number(amount).toFixed(2)}`;
    };

    const formatNumber = (amount, decimals = 4) => {
      if (isNaN(amount)) {
        return (0).toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
      }
      return Number(amount).toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
    };

    // ----- Inject styles (once) -----
    const STYLE_ID = "nca-buy-first-crypto-step5-styles";
    if (!document.getElementById(STYLE_ID)) {
      const styleEl = document.createElement("style");
      styleEl.id = STYLE_ID;
      styleEl.textContent = `
        .canvas-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 854px;
          overflow: hidden;
        }

        .sim-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width: 100%;
          max-width: 530px;
          padding: 40px;
          background-color: #ffffff;
          border-radius: 20px;
          box-shadow: 0 4px 20px #0000001a;
        }

        .sim-heading {
          margin: 0;
          width: 100%;
          color: #2f2f30;
          font-size: 2rem;
          font-weight: 500;
          line-height: 130%;
          letter-spacing: -0.04em;
        }

        .sim-order-layout {
          display: flex;
          flex-direction: column;
          gap: 40px;
          width: 100%;
          align-items: stretch;
        }

        .sim-order-panel {
          display: flex;
          flex-direction: column;
          gap: 8px;
          background-color: #f9f9f9;
          border: 1px solid #ebebeb;
          border-radius: 8px;
          padding: 24px;
        }

        .sim-order-main {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
        }

        .sim-order-main-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 434px;
        }

        .sim-crypto-amount-main {
          margin: 0;
          color: #2f2f30;
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 130%;
          letter-spacing: -0.04em;
        }

        .sim-buy-pill {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 8px 24px;
          flex: 0 0 auto;
          background-color: #36ac6933;
          border-radius: 1000px;
        }

        .sim-buy-pill-text {
          margin: 0;
          color: #36ac69;
          font-size: 1rem;
          font-weight: 500;
          line-height: 130%;
          letter-spacing: -0.04em;
        }

        .sim-usd-amount-main {
          margin: 0;
          color: #686868;
          font-size: 1.25rem;
          font-weight: 500;
          line-height: 130%;
          letter-spacing: -0.04em;
        }

        .sim-fee-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
        }

        .sim-fee-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .sim-fee-label {
          margin: 0;
          color: #7a7a7a;
          font-size: 1.25rem;
          font-weight: 500;
          line-height: 130%;
          letter-spacing: -0.04em;
        }

        .sim-fee-value {
          margin: 0;
          color: #1f1f1f;
          font-size: 1.25rem;
          font-weight: 500;
          line-height: 130%;
          letter-spacing: -0.04em;
        }

        .sim-button-primary {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          width: 100%;
          height: 56px;
          padding: 0 24px;
          background-color: #f64c07;
          border-radius: 8px;
          border: 2px solid #f64c07;
          box-shadow: 0 4px 10px #eb855c40;
          cursor: pointer;
        }

        .sim-button-primary-label {
          margin: 0;
          color: #ffffff;
          font-size: 1.125rem;
          font-weight: 500;
          line-height: 140%;
          letter-spacing: -0.02em;
        }

        /* Result view */
        .sim-result-panel {
          position: absolute;
          inset: 0;
          display: none;
          flex-direction: column;
          gap: 40px;
          padding: 40px;
          background-color: #ffffff;
          border-radius: 20px;
          align-items: stretch;
        }

        .sim-result-panel.is-visible {
          display: flex;
        }

        .sim-result-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
          width: 100%;
          align-items: stretch;
        }

        .sim-result-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 64px;
          height: 64px;
          background-color: #36AC69;
          border-radius: 100%;
          align-self: center;
          margin-bottom: -1rem;
        }

        .sim-result-icon-img {
          width: 36px;
          height: 36px;
          object-fit: cover;
        }

        .sim-result-title {
          margin: 0;
          width: 100%;
          text-align: center;
          color: #2f2f30;
          font-size: 2.25rem;
          font-weight: 500;
          line-height: 130%;
          letter-spacing: -0.04em;
        }

        .sim-result-transaction {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 8px;
          padding: 24px;
          background-color: #f9f9f9;
          border-radius: 8px;
          border: 1px solid #ebebeb;
        }

        .sim-result-transaction-text {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .sim-result-amount {
          margin: 0;
          color: #2f2f30;
          font-size: 2rem;
          font-weight: 700;
          line-height: 130%;
          letter-spacing: -0.04em;
        }

        .sim-result-subtitle {
          margin: 0;
          color: #686868;
          font-size: 1.25rem;
          font-weight: 500;
          line-height: 130%;
          letter-spacing: -0.04em;
        }

        .sim-result-breakdown {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
        }

        .sim-result-breakdown-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .sim-result-breakdown-label {
          margin: 0;
          color: #1f1f1f;
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 130%;
          letter-spacing: -0.04em;
        }

        .sim-result-breakdown-value {
          margin: 0;
          color: #7a7a7a;
          font-size: 1.25rem;
          font-weight: 500;
          line-height: 130%;
          letter-spacing: -0.04em;
        }
      `;
      document.head.appendChild(styleEl);
    }

    // ----- Inject HTML -----
    const html = `
      <div class="canvas-wrap">
        <div class="sim-card">
          <div class="sim-heading">Order details</div>
          <div class="sim-order-layout">
            <div class="sim-order-panel">
              <div class="sim-order-main">
                <div class="sim-order-main-row">
                  <div data-sim-user-crypto class="sim-crypto-amount-main">99.95 USDC</div>
                  <div class="sim-buy-pill">
                    <div class="sim-buy-pill-text">Buy</div>
                  </div>
                </div>
                <div data-sim-user-usd class="sim-usd-amount-main">$100.00</div>
              </div>
              <div class="sim-fee-list">
                <div class="sim-fee-row">
                  <div class="sim-fee-label">Trading fee</div>
                  <div data-sim-trading-fee class="sim-fee-value">0.04%</div>
                </div>
                <div class="sim-fee-row">
                  <div class="sim-fee-label">Slippage </div>
                  <div data-sim-slippage class="sim-fee-value">0.01%</div>
                </div>
              </div>
            </div>
            <button type="button" data-sim-trigger class="sim-button-primary">
              <span class="sim-button-primary-label">Place order</span>
            </button>
          </div>

          <!-- Result view -->
          <div data-sim-view-2 class="sim-result-panel">
            <div class="sim-result-header">
              <div class="sim-result-icon">
                <svg class="sim-result-icon-img" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.0647 10.8148C27.9252 10.6742 27.7593 10.5626 27.5765 10.4865C27.3938 10.4103 27.1977 10.3711 26.9997 10.3711C26.8017 10.3711 26.6056 10.4103 26.4228 10.4865C26.24 10.5626 26.0741 10.6742 25.9347 10.8148L14.7597 22.0048L10.0647 17.2948C9.9199 17.1549 9.74899 17.045 9.5617 16.9712C9.37442 16.8974 9.17444 16.8612 8.97316 16.8646C8.77189 16.8681 8.57328 16.9112 8.38866 16.9915C8.20404 17.0717 8.03704 17.1875 7.89718 17.3323C7.75732 17.4771 7.64735 17.648 7.57355 17.8353C7.49974 18.0226 7.46354 18.2225 7.46703 18.4238C7.47051 18.6251 7.5136 18.8237 7.59384 19.0083C7.67408 19.1929 7.7899 19.3599 7.93468 19.4998L13.6947 25.2598C13.8341 25.4004 14 25.512 14.1828 25.5881C14.3656 25.6643 14.5617 25.7035 14.7597 25.7035C14.9577 25.7035 15.1538 25.6643 15.3365 25.5881C15.5193 25.512 15.6852 25.4004 15.8247 25.2598L28.0647 13.0198C28.2169 12.8793 28.3385 12.7089 28.4216 12.5191C28.5047 12.3294 28.5476 12.1244 28.5476 11.9173C28.5476 11.7101 28.5047 11.5052 28.4216 11.3155C28.3385 11.1257 28.2169 10.9553 28.0647 10.8148V10.8148Z" fill="white"/>
</svg>
              </div>
              <div class="sim-result-title">Buy order</div>
              <div class="sim-result-transaction">
                <div class="sim-result-transaction-text">
                  <div data-sim-user-usd class="sim-result-amount">$100.00</div>
                  <div class="sim-result-subtitle">Transaction completed</div>
                </div>
              </div>
            </div>
            <div class="sim-result-breakdown">
              <div class="sim-result-breakdown-row">
                <div class="sim-result-breakdown-label">
                  Buy price (1 <span data-sim-user-crypto>USDC</span>)
                </div>
                <div data-sim-crypto-price class="sim-result-breakdown-value">1.00 USD</div>
              </div>
              <div class="sim-result-breakdown-row">
                <div class="sim-result-breakdown-label">Amount</div>
                <div data-sim-user-crypto-received class="sim-result-breakdown-value">99.95 USDC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    rootEl.innerHTML = html;

    // ----- Hook up elements -----
    const triggerEl = rootEl.querySelector("[data-sim-trigger]");
    const resultView = rootEl.querySelector("[data-sim-view-2]");
    const usdEls = rootEl.querySelectorAll("[data-sim-user-usd]");
    const cryptoMainEl = rootEl.querySelector(
      ".sim-crypto-amount-main[data-sim-user-crypto]"
    );
    const cryptoTickerEls = rootEl.querySelectorAll(
      "[data-sim-view-2] [data-sim-user-crypto]"
    );
    const cryptoPriceEl = rootEl.querySelector("[data-sim-crypto-price]");
    const cryptoReceivedEl = rootEl.querySelector(
      "[data-sim-user-crypto-received]"
    );
    const tradingFeeEls = rootEl.querySelectorAll("[data-sim-trading-fee]");
    const slippageEls = rootEl.querySelectorAll("[data-sim-slippage]");

    if (!triggerEl || !resultView) {
      console.warn("[buyFirstCrypto_step5] Missing required elements.");
    }

    // ----- Populate from cookie -----
    const store = loadStore() || {};
    const usdAmount = Number(store.usdAmount) || 0;
    const symbol = store.symbol || store.cryptoSymbol || "USDC";
    const priceUsd = Number(store.priceUsd) || 0;

    const FEE_RATE =
      typeof store.tradingFeeRate === "number" ? store.tradingFeeRate : 0.0004;
    const SLIPPAGE_RATE =
      typeof store.slippageRate === "number" ? store.slippageRate : 0.0001;
    const totalRate = FEE_RATE + SLIPPAGE_RATE;

    const grossCrypto = Number(store.cryptoAmount) || 0;
    const netCrypto =
      typeof store.cryptoAmountNet === "number"
        ? Number(store.cryptoAmountNet)
        : grossCrypto * (1 - totalRate);

    // USD values (all views)
    usdEls.forEach((el) => {
      el.textContent = formatUsd(usdAmount);
    });

    // Update trading fee / slippage labels (if present)
    tradingFeeEls.forEach((el) => {
      el.textContent = `${(FEE_RATE * 100).toFixed(2)}%`;
    });
    slippageEls.forEach((el) => {
      el.textContent = `${(SLIPPAGE_RATE * 100).toFixed(2)}%`;
    });

    // Main card big crypto amount (amount + ticker)
    if (cryptoMainEl) {
      const useNet = netCrypto > 0 && symbol;
      const amountToShow = useNet ? netCrypto : grossCrypto;
      cryptoMainEl.textContent = `${formatNumber(amountToShow, 4)} ${symbol}`;
    }

    // Result breakdown: crypto ticker only
    cryptoTickerEls.forEach((el) => {
      el.textContent = symbol || "";
    });

    // Crypto price per 1 token, e.g. "40,000.00 USD"
    if (cryptoPriceEl && priceUsd > 0) {
      cryptoPriceEl.textContent = `${formatNumber(priceUsd, 2)} USD`;
    }

    // Crypto received (amount + ticker, 4 decimals)
    if (cryptoReceivedEl) {
      const useNet = netCrypto > 0 && symbol;
      const amountToShow = useNet ? netCrypto : grossCrypto;
      cryptoReceivedEl.textContent = `${formatNumber(
        amountToShow,
        4
      )} ${symbol}`;
    }

    // Initialise result view hidden
    if (gs && resultView) {
      gs.set(resultView, { autoAlpha: 0 });
    } else if (resultView) {
      resultView.style.opacity = "0";
      resultView.style.display = "none";
    }

    let completed = false;
    const finish = () => {
      if (completed) return;
      completed = true;
      done();
    };

    if (triggerEl && resultView) {
      triggerEl.addEventListener("click", () => {
        // Show / fade in result view
        resultView.classList.add("is-visible");

        if (gs) {
          gs.fromTo(
            resultView,
            { autoAlpha: 0, y: 8 },
            { autoAlpha: 1, y: 0, duration: 0.5 }
          );
        } else {
          resultView.style.display = "flex";
          resultView.style.opacity = "1";
        }

        // Complete step after 2s delay
        setTimeout(finish, 2000);
      });
    }
  },
};
