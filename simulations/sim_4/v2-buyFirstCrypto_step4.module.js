// buyFirstCrypto_step3_orderDetails.module.js

export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = window.gsap || null;

    if (!rootEl) return;

    // ---------- HTML + CSS ----------
    const html = `
<div class="sim_canvas">
  <div class="sim_card">
    <div class="sim_title">Order details</div>
    <div class="sim_body">
      <div class="sim_order">
        <div class="sim_order-box">
          <div class="sim_order-header">
            <div data-sim-user-crypto class="sim_order-crypto">99.95 USDC</div>
            <div class="sim_pill sim_pill--success">
              <span class="sim_pill-label">Buy</span>
            </div>
          </div>
          <div data-sim-user-usd class="sim_order-fiat">$100.00</div>
        </div>
        <div class="sim_order-meta">
          <div class="sim_row">
            <div class="sim_label">Trading fee</div>
            <div data-sim-trading-fee class="sim_value">0.04%</div>
          </div>
          <div class="sim_row">
            <div class="sim_label">Slippage</div>
            <div data-sim-slippage class="sim_value">0.01%</div>
          </div>
        </div>
      </div>
      <button type="button" data-sim-trigger class="sim_button">
        <span class="sim_button-label">Place order</span>
      </button>
    </div>
  </div>
</div>
`;

    const styles = `
.sim_canvas {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 53.375rem;
  display: flex;
  overflow: hidden;
}

.sim_card {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 33.125rem;
  padding: 2.5rem;
  background-color: #fff;
  border-radius: 1.25rem;
  box-shadow: 0 4px 20px #0000001a;
}

.sim_title {
  width: 100%;
  margin: 0;
  color: #2f2f30;
  font-size: 2rem;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.04em;
}

.sim_body {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
}

.sim_order {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
}

.sim_order-box {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 0.5rem;
  border: 1px solid #ebebeb;
}

.sim_order-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 27.125rem;
}

.sim_order-crypto {
  margin: 0;
  color: #2f2f30;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.04em;
}

.sim_pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  padding: 0.5rem 1.5rem;
  border-radius: 62.5rem;
}

.sim_pill--success {
  background-color: #36ac6933;
}

.sim_pill-label {
  margin: 0;
  color: #36ac69;
  font-size: 1rem;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.04em;
}

.sim_order-fiat {
  margin: 0;
  color: #686868;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.04em;
}

.sim_order-meta {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
}

.sim_row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.sim_label {
  margin: 0;
  color: #7a7a7a;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.04em;
}

.sim_value {
  margin: 0;
  color: #1f1f1f;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.04em;
}

.sim_button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  width: 100%;
  height: 3.5rem;
  padding: 0 1.5rem;
  border-radius: 0.5rem;
  border: 2px solid #f64c07;
  background-color: #f64c07;
  box-shadow: 0 4px 10px #eb855c40;
  cursor: pointer;
}

.sim_button-label {
  margin: 0;
  color: #fff;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.02em;
}

/* Typography base */
.sim_canvas,
.sim_canvas * {
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  box-sizing: border-box;
}
`;

    rootEl.innerHTML = `<style>${styles}</style>${html}`;

    // ---------- Element refs ----------
    const usdEl = rootEl.querySelector("[data-sim-user-usd]");
    const cryptoEl = rootEl.querySelector("[data-sim-user-crypto]");
    const tradingFeeEl = rootEl.querySelector("[data-sim-trading-fee]");
    const slippageEl = rootEl.querySelector("[data-sim-slippage]");
    const triggerEl = rootEl.querySelector("[data-sim-trigger]");

    if (!usdEl || !cryptoEl || !triggerEl) {
      console.warn(
        "[buyFirstCrypto_step3_orderDetails] Missing required elements.",
        {
          hasUsd: !!usdEl,
          hasCrypto: !!cryptoEl,
          hasTrigger: !!triggerEl,
        }
      );
      return;
    }

    // ---------- Storage helpers ----------
    const COOKIE_KEY_COMBINED = "nca_sim_buyFirstCrypto";

    const getCookie = (name) => {
      if (typeof document === "undefined") return null;
      const match = document.cookie.match(
        new RegExp(
          "(?:^|; )" + name.replace(/([$?*|{}\]\\/+^])/g, "\\$1") + "=([^;]*)"
        )
      );
      return match ? decodeURIComponent(match[1]) : null;
    };

    const getNumber = (val) => {
      const num = Number(val);
      return Number.isFinite(num) ? num : NaN;
    };

    // ---------- Values from previous step ----------
    let combinedState = null;
    const combinedRaw = getCookie(COOKIE_KEY_COMBINED);
    if (combinedRaw) {
      try {
        combinedState = JSON.parse(combinedRaw);
      } catch {
        combinedState = null;
      }
    }

    const stored = combinedState || {};
    let usdAmount =
      typeof props.userUsdAmount === "number"
        ? props.userUsdAmount
        : getNumber(stored.usdAmount);

    let cryptoAmountGross =
      typeof props.userCryptoAmount === "number"
        ? props.userCryptoAmount
        : getNumber(stored.cryptoAmount);

    let cryptoAmountNet = getNumber(stored.cryptoAmountNet);
    let tradingFeeRate =
      typeof stored.tradingFeeRate === "number"
        ? stored.tradingFeeRate
        : 0.0004;
    let slippageRate =
      typeof stored.slippageRate === "number" ? stored.slippageRate : 0.0001;

    const totalRate = tradingFeeRate + slippageRate;

    if (
      !Number.isFinite(cryptoAmountNet) &&
      Number.isFinite(cryptoAmountGross)
    ) {
      cryptoAmountNet = cryptoAmountGross * (1 - totalRate);
    }

    let cryptoSymbol =
      props.selectedCryptoSymbol || stored.symbol || stored.cryptoSymbol || "";

    // ---------- Formatting ----------
    const formatUsd = (amount) => {
      if (!Number.isFinite(amount)) return "";
      return `$${amount.toFixed(2)}`;
    };

    const formatCrypto = (amount, symbol) => {
      if (!Number.isFinite(amount)) return "";
      const upperSym = (symbol || "").toUpperCase();
      const isStable = upperSym === "USDC" || upperSym === "USDT";
      const decimals = isStable ? 2 : 6;

      let str = amount.toFixed(decimals);
      str = str.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "");

      return `${str} ${upperSym || ""}`.trim();
    };

    // ---------- Apply values ----------
    if (Number.isFinite(usdAmount)) {
      usdEl.textContent = formatUsd(usdAmount);
    }

    if (Number.isFinite(cryptoAmountNet)) {
      cryptoEl.textContent = formatCrypto(cryptoAmountNet, cryptoSymbol);
    }

    if (tradingFeeEl && Number.isFinite(tradingFeeRate)) {
      tradingFeeEl.textContent = `${(tradingFeeRate * 100).toFixed(2)}%`;
    }

    if (slippageEl && Number.isFinite(slippageRate)) {
      slippageEl.textContent = `${(slippageRate * 100).toFixed(2)}%`;
    }

    // ---------- Entrance animation ----------
    if (gs) {
      const card = rootEl.querySelector(".sim_card");
      if (card) {
        gs.from(card, {
          autoAlpha: 0,
          y: 24,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    }

    // ---------- Interaction ----------
    const handleClick = (event) => {
      event?.preventDefault?.();
      done();
    };

    triggerEl.addEventListener("click", handleClick);

    return () => {
      triggerEl.removeEventListener("click", handleClick);
    };
  },
};
