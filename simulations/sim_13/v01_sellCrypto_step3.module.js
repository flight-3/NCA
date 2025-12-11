// nca_sellCrypto_step3.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = (typeof window !== "undefined" && window.gsap) || null;

    if (!rootEl) return;

    const STORAGE_KEY_PREV = "nca_sellCrypto_step2";
    const STORAGE_KEY = "nca_sellCrypto_step3";
    const STYLE_ID = "nca_sellCrypto_step3_styles";

    // Inject styles once
    if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
      const styleEl = document.createElement("style");
      styleEl.id = STYLE_ID;
      styleEl.textContent = `
.sellCrypto_step3_canvas-wrap {
  grid-row-gap: 64px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  display: flex;
  position: relative;
  overflow: hidden;
}

.sellCrypto_step3_container {
  grid-row-gap: 32px;
  background-color: #fff;
  border-radius: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  max-width: 480px;
  padding: 40px;
  text-decoration: none;
  display: flex;
  overflow: hidden;
  box-shadow: 0 4px 20px #0000001a;
}

.sellCrypto_step3_title {
  color: #2f2f30;
  letter-spacing: -.04em;
  width: 100%;
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 130%;
}

.sellCrypto_step3_provider-container {
  grid-row-gap: 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  text-decoration: none;
  display: flex;
}

.sellCrypto_step3_provider-el {
  cursor: pointer;
  background-color: #f9f9f9;
  border: 2px solid #ebebeb;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  text-decoration: none;
  transition: all .3s cubic-bezier(.215, .61, .355, 1);
  display: flex;
}

.sellCrypto_step3_provider-el:hover {
  border-color: #f64c07;
}

.sellCrypto_step3_provider-detail {
  grid-column-gap: 16px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  display: flex;
}

.sellCrypto_step3_provider-ico {
  border-radius: 40px;
  flex: none;
  width: 40px;
  height: 40px;
  overflow: hidden;
}

.sellCrypto_step3_provider-ico.is--orange {
  background-color: #f64c07;
}

.sellCrypto_step3_provider-ico.is--green {
  background-color: #114537;
}

.sellCrypto_step3_provider-ico.is--beige {
  background-color: #fdebda;
}

.sellCrypto_step3_provider-ico.is--black {
  background-color: #1f1f1f;
}

.sellCrypto_step3_provider_text {
  color: #1f1f1f;
  letter-spacing: -.04em;
  font-size: 1rem;
  font-weight: 600;
  line-height: 130%;
  text-decoration: none;
}

.sellCrypto_step3_provider-price-wrap {
  grid-column-gap: 24px;
  flex: none;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  display: flex;
}

.sellCrypto_step3_provider-price {
  grid-row-gap: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-decoration: none;
  display: flex;
}

.sellCrypto_step3_crypto-amount {
  color: #7a7a7a;
  letter-spacing: -.04em;
  font-size: .875rem;
  font-weight: 400;
  line-height: 130%;
  text-decoration: none;
}

.sellCrypto_step3_arrow-right {
  object-fit: cover;
  flex: none;
  width: 20px;
  height: 20px;
  overflow: hidden;
}

.sellCrypto_step3_arrow-right-wrap {
  flex: none;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  display: flex;
}

.sellCrypto_step3_redirect-container {
  z-index: 1;
  grid-row-gap: 24px;
  pointer-events: none;
  background-color: #fff;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 420px;
  padding: 40px;
  text-decoration: none;
  display: flex;
  position: absolute;
  overflow: hidden;
  box-shadow: 0 4px 20px #0000001a;
}

.sellCrypto_step3_title-redirect {
  color: #2f2f30;
  text-align: center;
  letter-spacing: -.04em;
  width: 100%;
  font-size: 2rem;
  font-weight: 500;
  line-height: 130%;
}

.sellCrypto_step3_loader-wrap {
  background-color: #f64c071a;
  border-radius: 100%;
  flex: none;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  display: flex;
  position: relative;
}

.sellCrypto_step3_loader-5 {
  flex: none;
  justify-content: center;
  align-items: center;
}

.sellCrypto_step3_utility-page-wrap {
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  display: flex;
}

.sellCrypto_step3_utility-page-content {
  text-align: center;
  flex-direction: column;
  width: 260px;
  display: flex;
}

.sellCrypto_step3_utility-page-form {
  flex-direction: column;
  align-items: stretch;
  display: flex;
}

.sellCrypto_step3_loader-5 {
  height: 32px;
  width: 32px;
  position: relative;
  animation: loader-5-1 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
}

@keyframes loader-5-1 {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.sellCrypto_step3_loader-5::before {
  content: "";
  display: block;
  position: absolute;
  top: 0; left: 0;
  bottom: 0; right: auto;
  margin: auto;
  width: 8px;
  height: 8px;
  background: #F64C07;
  border-radius: 50%;
  animation: loader-5-2 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
}

@keyframes loader-5-2 {
  0%   { transform: translate3d(0, 0, 0) scale(1); }
  50%  { transform: translate3d(24px, 0, 0) scale(.5); }
  100% { transform: translate3d(0, 0, 0) scale(1); }
}

.sellCrypto_step3_loader-5::after {
  content: "";
  display: block;
  position: absolute;
  top: 0; left: auto;
  bottom: 0; right: 0;
  margin: auto;
  width: 8px;
  height: 8px;
  background: #F64C07;
  border-radius: 50%;
  animation: loader-5-3 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
}

@keyframes loader-5-3 {
  0%   { transform: translate3d(0, 0, 0) scale(1); }
  50%  { transform: translate3d(-24px, 0, 0) scale(.5); }
  100% { transform: translate3d(0, 0, 0) scale(1); }
}

.sellCrypto_step3_loader-5 span {
  display: block;
  position: absolute;
  top: 0; left: 0;
  bottom: 0; right: 0;
  margin: auto;
  height: 32px;
  width: 32px;
}

.sellCrypto_step3_loader-5 span::before {
  content: "";
  display: block;
  position: absolute;
  top: 0; left: 0;
  bottom: auto; right: 0;
  margin: auto;
  width: 8px;
  height: 8px;
  background: #F64C07;
  border-radius: 50%;
  animation: loader-5-4 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
}

@keyframes loader-5-4 {
  0%   { transform: translate3d(0, 0, 0) scale(1); }
  50%  { transform: translate3d(0, 24px, 0) scale(.5); }
  100% { transform: translate3d(0, 0, 0) scale(1); }
}

.sellCrypto_step3_loader-5 span::after {
  content: "";
  display: block;
  position: absolute;
  top: auto; left: 0;
  bottom: 0; right: 0;
  margin: auto;
  width: 8px;
  height: 8px;
  background: #F64C07;
  border-radius: 50%;
  animation: loader-5-5 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
}

@keyframes loader-5-5 {
  0%   { transform: translate3d(0, 0, 0) scale(1); }
  50%  { transform: translate3d(0, -24px, 0) scale(.5); }
  100% { transform: translate3d(0, 0, 0) scale(1); }
}
      `;
      document.head.appendChild(styleEl);
    }

    // Inject HTML (no renaming, body stripped)
    rootEl.innerHTML = `
      <div class="sellCrypto_step3_canvas-wrap">
        <div data-sim-view-1="" class="sellCrypto_step3_container">
          <div class="sellCrypto_step3_title">Offramp service</div>
          <div class="sellCrypto_step3_provider-container">
            <div data-sim-trigger="" class="sellCrypto_step3_provider-el">
              <div class="sellCrypto_step3_provider-detail">
                <div class="sellCrypto_step3_provider-ico is--orange"></div>
                <div class="sellCrypto_step3_provider_text">Provider 1</div>
              </div>
              <div class="sellCrypto_step3_provider-price-wrap">
                <div class="sellCrypto_step3_provider-price">
                  <div class="sellCrypto_step3_provider_text">≈ <span data-sim-sell-usd="">$39.37</span> USD</div>
                  <div class="sellCrypto_step3_crypto-amount"><span data-sim-crypto-amount="">0.01</span> <span data-sim-crypto-cur="">ETH</span></div>
                </div>
                <div class="sellCrypto_step3_arrow-right-wrap"><svg class="sellCrypto_step3_arrow-right" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9333 9.68284C14.8937 9.58054 14.8342 9.48709 14.7583 9.40784L10.5917 5.24117C10.514 5.16347 10.4217 5.10184 10.3202 5.05979C10.2187 5.01774 10.1099 4.99609 10 4.99609C9.77808 4.99609 9.56525 5.08425 9.40833 5.24117C9.33063 5.31887 9.269 5.41111 9.22695 5.51263C9.1849 5.61415 9.16326 5.72295 9.16326 5.83284C9.16326 6.05475 9.25141 6.26758 9.40833 6.4245L12.1583 9.16617H5.83333C5.61232 9.16617 5.40036 9.25397 5.24408 9.41025C5.0878 9.56653 5 9.77849 5 9.9995C5 10.2205 5.0878 10.4325 5.24408 10.5888C5.40036 10.745 5.61232 10.8328 5.83333 10.8328H12.1583L9.40833 13.5745C9.33023 13.652 9.26823 13.7441 9.22592 13.8457C9.18362 13.9472 9.16183 14.0562 9.16183 14.1662C9.16183 14.2762 9.18362 14.3851 9.22592 14.4867C9.26823 14.5882 9.33023 14.6804 9.40833 14.7578C9.4858 14.8359 9.57797 14.8979 9.67952 14.9402C9.78107 14.9826 9.88999 15.0043 10 15.0043C10.11 15.0043 10.2189 14.9826 10.3205 14.9402C10.422 14.8979 10.5142 14.8359 10.5917 14.7578L14.7583 10.5912C14.8342 10.5119 14.8937 10.4185 14.9333 10.3162C15.0167 10.1133 15.0167 9.88572 14.9333 9.68284Z" fill="#7A7A7A"/>
</svg>
</div>
              </div>
            </div>
            <div data-sim-trigger="" class="sellCrypto_step3_provider-el">
              <div class="sellCrypto_step3_provider-detail">
                <div class="sellCrypto_step3_provider-ico is--green"></div>
                <div class="sellCrypto_step3_provider_text">Provider 2</div>
              </div>
              <div class="sellCrypto_step3_provider-price-wrap">
                <div class="sellCrypto_step3_provider-price">
                  <div class="sellCrypto_step3_provider_text">≈ <span data-sim-sell-usd="">$39.37</span> USD</div>
                  <div class="sellCrypto_step3_crypto-amount"><span data-sim-crypto-amount="">0.01</span> <span data-sim-crypto-cur="">ETH</span></div>
                </div>
                <div class="sellCrypto_step3_arrow-right-wrap"><svg class="sellCrypto_step3_arrow-right" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9333 9.68284C14.8937 9.58054 14.8342 9.48709 14.7583 9.40784L10.5917 5.24117C10.514 5.16347 10.4217 5.10184 10.3202 5.05979C10.2187 5.01774 10.1099 4.99609 10 4.99609C9.77808 4.99609 9.56525 5.08425 9.40833 5.24117C9.33063 5.31887 9.269 5.41111 9.22695 5.51263C9.1849 5.61415 9.16326 5.72295 9.16326 5.83284C9.16326 6.05475 9.25141 6.26758 9.40833 6.4245L12.1583 9.16617H5.83333C5.61232 9.16617 5.40036 9.25397 5.24408 9.41025C5.0878 9.56653 5 9.77849 5 9.9995C5 10.2205 5.0878 10.4325 5.24408 10.5888C5.40036 10.745 5.61232 10.8328 5.83333 10.8328H12.1583L9.40833 13.5745C9.33023 13.652 9.26823 13.7441 9.22592 13.8457C9.18362 13.9472 9.16183 14.0562 9.16183 14.1662C9.16183 14.2762 9.18362 14.3851 9.22592 14.4867C9.26823 14.5882 9.33023 14.6804 9.40833 14.7578C9.4858 14.8359 9.57797 14.8979 9.67952 14.9402C9.78107 14.9826 9.88999 15.0043 10 15.0043C10.11 15.0043 10.2189 14.9826 10.3205 14.9402C10.422 14.8979 10.5142 14.8359 10.5917 14.7578L14.7583 10.5912C14.8342 10.5119 14.8937 10.4185 14.9333 10.3162C15.0167 10.1133 15.0167 9.88572 14.9333 9.68284Z" fill="#7A7A7A"/>
</svg>
</div>
              </div>
            </div>
            <div data-sim-trigger="" class="sellCrypto_step3_provider-el">
              <div class="sellCrypto_step3_provider-detail">
                <div class="sellCrypto_step3_provider-ico is--beige"></div>
                <div class="sellCrypto_step3_provider_text">Provider 3</div>
              </div>
              <div class="sellCrypto_step3_provider-price-wrap">
                <div class="sellCrypto_step3_provider-price">
                  <div class="sellCrypto_step3_provider_text">≈ <span data-sim-sell-usd="">$39.37</span> USD</div>
                  <div class="sellCrypto_step3_crypto-amount"><span data-sim-crypto-amount="">0.01</span> <span data-sim-crypto-cur="">ETH</span></div>
                </div>
                <div class="sellCrypto_step3_arrow-right-wrap"><svg class="sellCrypto_step3_arrow-right" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9333 9.68284C14.8937 9.58054 14.8342 9.48709 14.7583 9.40784L10.5917 5.24117C10.514 5.16347 10.4217 5.10184 10.3202 5.05979C10.2187 5.01774 10.1099 4.99609 10 4.99609C9.77808 4.99609 9.56525 5.08425 9.40833 5.24117C9.33063 5.31887 9.269 5.41111 9.22695 5.51263C9.1849 5.61415 9.16326 5.72295 9.16326 5.83284C9.16326 6.05475 9.25141 6.26758 9.40833 6.4245L12.1583 9.16617H5.83333C5.61232 9.16617 5.40036 9.25397 5.24408 9.41025C5.0878 9.56653 5 9.77849 5 9.9995C5 10.2205 5.0878 10.4325 5.24408 10.5888C5.40036 10.745 5.61232 10.8328 5.83333 10.8328H12.1583L9.40833 13.5745C9.33023 13.652 9.26823 13.7441 9.22592 13.8457C9.18362 13.9472 9.16183 14.0562 9.16183 14.1662C9.16183 14.2762 9.18362 14.3851 9.22592 14.4867C9.26823 14.5882 9.33023 14.6804 9.40833 14.7578C9.4858 14.8359 9.57797 14.8979 9.67952 14.9402C9.78107 14.9826 9.88999 15.0043 10 15.0043C10.11 15.0043 10.2189 14.9826 10.3205 14.9402C10.422 14.8979 10.5142 14.8359 10.5917 14.7578L14.7583 10.5912C14.8342 10.5119 14.8937 10.4185 14.9333 10.3162C15.0167 10.1133 15.0167 9.88572 14.9333 9.68284Z" fill="#7A7A7A"/>
</svg>
</div>
              </div>
            </div>
            <div data-sim-trigger="" class="sellCrypto_step3_provider-el">
              <div class="sellCrypto_step3_provider-detail">
                <div class="sellCrypto_step3_provider-ico is--black"></div>
                <div class="sellCrypto_step3_provider_text">Provider 3</div>
              </div>
              <div class="sellCrypto_step3_provider-price-wrap">
                <div class="sellCrypto_step3_provider-price">
                  <div class="sellCrypto_step3_provider_text">≈ <span data-sim-sell-usd="">$39.37</span> USD</div>
                  <div class="sellCrypto_step3_crypto-amount"><span data-sim-crypto-amount="">0.01</span> <span data-sim-crypto-cur="">ETH</span></div>
                </div>
                <div class="sellCrypto_step3_arrow-right-wrap"><svg class="sellCrypto_step3_arrow-right" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9333 9.68284C14.8937 9.58054 14.8342 9.48709 14.7583 9.40784L10.5917 5.24117C10.514 5.16347 10.4217 5.10184 10.3202 5.05979C10.2187 5.01774 10.1099 4.99609 10 4.99609C9.77808 4.99609 9.56525 5.08425 9.40833 5.24117C9.33063 5.31887 9.269 5.41111 9.22695 5.51263C9.1849 5.61415 9.16326 5.72295 9.16326 5.83284C9.16326 6.05475 9.25141 6.26758 9.40833 6.4245L12.1583 9.16617H5.83333C5.61232 9.16617 5.40036 9.25397 5.24408 9.41025C5.0878 9.56653 5 9.77849 5 9.9995C5 10.2205 5.0878 10.4325 5.24408 10.5888C5.40036 10.745 5.61232 10.8328 5.83333 10.8328H12.1583L9.40833 13.5745C9.33023 13.652 9.26823 13.7441 9.22592 13.8457C9.18362 13.9472 9.16183 14.0562 9.16183 14.1662C9.16183 14.2762 9.18362 14.3851 9.22592 14.4867C9.26823 14.5882 9.33023 14.6804 9.40833 14.7578C9.4858 14.8359 9.57797 14.8979 9.67952 14.9402C9.78107 14.9826 9.88999 15.0043 10 15.0043C10.11 15.0043 10.2189 14.9826 10.3205 14.9402C10.422 14.8979 10.5142 14.8359 10.5917 14.7578L14.7583 10.5912C14.8342 10.5119 14.8937 10.4185 14.9333 10.3162C15.0167 10.1133 15.0167 9.88572 14.9333 9.68284Z" fill="#7A7A7A"/>
</svg>
</div>
              </div>
            </div>
          </div>
        </div>
        <div data-sim-view-2="" class="sellCrypto_step3_redirect-container">
          <div class="sellCrypto_step3_loader-wrap">
            <div class="sellCrypto_step3_loader-5 center"><span></span></div>
          </div>
          <div class="sellCrypto_step3_title-redirect">Redirecting to provider</div>
        </div>
      </div>
    `;

    const storage =
      (typeof window !== "undefined" && window.localStorage) || null;

    const view1 = rootEl.querySelector("[data-sim-view-1]");
    const view2 = rootEl.querySelector("[data-sim-view-2]");

    if (!view1 || !view2) {
      console.warn("[nca_sellCrypto_step3] Missing required view elements.");
      return;
    }

    const providerEls = Array.from(
      view1.querySelectorAll("[data-sim-trigger]")
    );

    if (!providerEls.length) {
      console.warn("[nca_sellCrypto_step3] No provider triggers found.");
      return;
    }

    const CRYPTOS = {
      btc: { key: "btc", symbol: "BTC" },
      eth: { key: "eth", symbol: "ETH" },
      xrp: { key: "xrp", symbol: "XRP" },
      bnb: { key: "bnb", symbol: "BNB" },
      usdc: { key: "usdc", symbol: "USDC" },
    };

    const formatCryptoAmount = (val) => {
      if (!val || !isFinite(val)) return "0.00";
      if (val < 0.00001) return val.toExponential(2);
      return val.toFixed(5).replace(/0+$/g, "").replace(/\.$/, "");
    };

    const formatUsd = (val) => {
      if (!val || !isFinite(val) || val <= 0) return "$0.00";
      return `$${val.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    };

    // Read previous step storage
    let baseSellUsd = 0;
    let sellKey = "";
    let sellAmount = 0;

    if (storage) {
      try {
        const raw = storage.getItem(STORAGE_KEY_PREV);
        if (raw) {
          const data = JSON.parse(raw);
          if (data && typeof data === "object") {
            baseSellUsd = Number(data.sellUsd) || 0;
            sellKey = data.sellKey || "";
            sellAmount = Number(data.sellAmount) || 0;
          }
        }
      } catch {
        // ignore
      }
    }

    // Allow props overrides if passed
    if (props && typeof props.sellUsd === "number") {
      baseSellUsd = props.sellUsd;
    }
    if (props && typeof props.sellAmount === "number") {
      sellAmount = props.sellAmount;
    }
    if (props && typeof props.sellKey === "string" && props.sellKey) {
      sellKey = props.sellKey;
    }

    // Apply crypto symbol and amount to all relevant elements
    const cryptoAmountEls = view1.querySelectorAll("[data-sim-crypto-amount]");
    const cryptoCurEls = view1.querySelectorAll("[data-sim-crypto-cur]");

    if (sellAmount && isFinite(sellAmount)) {
      cryptoAmountEls.forEach((el) => {
        el.textContent = formatCryptoAmount(sellAmount);
      });
    }

    const cryptoMeta = sellKey && CRYPTOS[sellKey] ? CRYPTOS[sellKey] : null;
    if (cryptoMeta) {
      cryptoCurEls.forEach((el) => {
        el.textContent = cryptoMeta.symbol;
        el.setAttribute("data-sim-crypto-cur", cryptoMeta.key);
      });
    }

    // Apply varied USD quotes per provider
    if (baseSellUsd && isFinite(baseSellUsd) && baseSellUsd > 0) {
      const offsets = [2, 4, 6, 8]; // 2–10 range, deterministic per provider
      providerEls.forEach((el, index) => {
        const usdEl = el.querySelector("[data-sim-sell-usd]");
        if (!usdEl) return;

        const offset = offsets[index] ?? offsets[offsets.length - 1];

        let quote = baseSellUsd - offset;
        if (!isFinite(quote) || quote <= 0) {
          quote = baseSellUsd;
        }
        if (quote < 0.01) quote = 0.01;

        usdEl.textContent = formatUsd(quote);

        // Store numeric value on element for later if needed
        el.dataset.sellQuoteUsd = String(quote);
      });
    }

    // GSAP intro setup
    if (gs) {
      gs.set(view1, { autoAlpha: 0, y: 200 });
      gs.set(view2, { autoAlpha: 0, y: 200 });

      gs.to(view1, {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    } else {
      view1.style.opacity = "1";
      view1.style.transform = "translateY(0)";
      view2.style.opacity = "0";
      view2.style.transform = "translateY(200px)";
    }

    let completed = false;
    const safeDone = () => {
      if (completed) return;
      completed = true;
      done?.();
    };

    const persistStep3 = (providerIndex, providerName, providerQuoteUsd) => {
      if (!storage) return;
      const payload = {
        providerIndex,
        providerName,
        providerQuoteUsd,
        sellKey,
        sellAmount,
        baseSellUsd,
      };
      try {
        storage.setItem(STORAGE_KEY, JSON.stringify(payload));
      } catch {
        // ignore
      }
    };

    const runTransition = () => {
      if (gs) {
        const tl = gs.timeline({ defaults: { ease: "power2.out" } });

        tl.to(view1, {
          autoAlpha: 0,
          y: 50,
          duration: 0.4,
        })
          .set(view1, { pointerEvents: "none" })
          .set(view2, { autoAlpha: 0, y: 200 })
          .to(view2, {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
          })
          .add(() => {
            // 1s delay before completing step
          })
          .add(() => safeDone(), "+=1");
      } else {
        view1.style.opacity = "0";
        view1.style.transform = "translateY(50px)";
        view1.style.pointerEvents = "none";

        view2.style.opacity = "1";
        view2.style.transform = "translateY(0)";

        setTimeout(() => {
          safeDone();
        }, 1000);
      }
    };

    // Attach click handlers to providers
    providerEls.forEach((el, index) => {
      el.addEventListener("click", (evt) => {
        evt.preventDefault();
        if (completed) return;

        const nameEl = el.querySelector(".provider-detail .provider_text");
        const providerName =
          nameEl?.textContent?.trim() || `Provider ${index + 1}`;

        const usdEl = el.querySelector("[data-sim-sell-usd]");
        let quoteNum = 0;
        if (usdEl && usdEl.textContent) {
          const raw = usdEl.textContent
            .replace(/[^\d.,-]/g, "")
            .replace(/,/g, "");
          const parsed = parseFloat(raw);
          if (isFinite(parsed) && !Number.isNaN(parsed)) {
            quoteNum = parsed;
          }
        }

        persistStep3(index, providerName, quoteNum);
        runTransition();
      });
    });
  },
};
