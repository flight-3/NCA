// nca_sellCrypto_step6.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = (typeof window !== "undefined" && window.gsap) || null;

    if (!rootEl) return;

    const STORAGE_KEY = "nca_sellCrypto_step2";
    const STYLE_ID = "nca_sellCrypto_step6_styles";

    if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
      const styleEl = document.createElement("style");
      styleEl.id = STYLE_ID;
      styleEl.textContent = `
.sellCrypto_step6_buttons-2 {
  grid-column-gap: 10px;
  background-image: linear-gradient(82.37deg, #f64c07 0%, #ff7943 100%);
  border: 2px solid #f64c07;
  border-radius: 8px;
  flex: 0 auto;
  justify-content: center;
  align-items: center;
  height: 56px;
  padding-left: 24px;
  padding-right: 24px;
  text-decoration: none;
  display: flex;
  box-shadow: 0 4px 10px #eb855c40;
}

.sellCrypto_step6_button-large-4 {
  color: #fff;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-family: Inter, sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 140%;
  text-decoration: none;
}

.sellCrypto_step6_main-container {
  grid-row-gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 802px;
  height: 854px;
  display: flex;
  position: relative;
}

.sellCrypto_step6_container {
  background-color: #fff;
  border-radius: 20px;
  flex-flow: column;
  justify-content: flex-end;
  align-items: center;
  min-width: 360px;
  width: 360px;
  min-height: 640px;
  display: flex;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px #0000001a;
}

.sellCrypto_step6_fauxui-wrap {
  z-index: 0;
  grid-row-gap: 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  max-width: 360px;
  padding: 40px 24px;
  text-decoration: none;
  display: flex;
  position: absolute;
  inset: 0%;
}

.sellCrypto_step6_fauxui {
  grid-column-gap: 10px;
  background-image: linear-gradient(270deg, #f7f7f7 0%, #ededed 100%);
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  height: 64px;
  max-height: 64px;
  display: flex;
  flex-grow: 1;
}

.sellCrypto_step6_fauxui_wrap {
  grid-column-gap: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  text-decoration: none;
  display: flex;
}

.sellCrypto_step6_fauxui-2 {
  grid-column-gap: 10px;
  background-image: linear-gradient(270deg, #f7f7f7 0%, #ededed 100%);
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  height: 175px;
  display: flex;
}

.sellCrypto_step6_confimation-overlay {
  z-index: 2;
  grid-row-gap: 40px;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  max-width: 360px;
  width: 100%;
  display: flex;
  padding: 40px 0px;
  position: relative;
}

.sellCrypto_step6_confirmation-detail-wrap {
  grid-row-gap: 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 0 24px;
  display: flex;
}

.sellCrypto_step6_header-wrap {
  grid-row-gap: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.sellCrypto_step6_title {
  color: #1f1f1f;
  letter-spacing: -.02em;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 140%;
}

.sellCrypto_step6_subtitle {
  color: #7a7a7a;
  letter-spacing: -.02em;
  font-size: .875rem;
  font-weight: 400;
  line-height: 130%;
}

.sellCrypto_step6_confirmation-wrap {
  grid-row-gap: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  display: flex;
}

.sellCrypto_step6_confrimation_el {
  grid-column-gap: 16px;
  background-color: #f9f9f9;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  display: flex;
}

.sellCrypto_step6_price-container {
  grid-row-gap: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.sellCrypto_step6_receive-amount {
  color: #1f1f1f;
  letter-spacing: -.02em;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 120%;
}

.sellCrypto_step6_price-details {
  grid-column-gap: 4px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.sellCrypto_step6_price-in-eth {
  opacity: .8;
  color: #7a7a7a;
  letter-spacing: -.02em;
  font-size: .75rem;
  font-weight: 500;
  line-height: 140%;
}

.sellCrypto_step6_confirmation_el-alt {
  background-color: #f9f9f9;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  display: flex;
}

.sellCrypto_step6_gas-details {
  grid-column-gap: 2px;
  justify-content: flex-start;
  align-items: center;
  width: 157px;
  display: flex;
}

.sellCrypto_step6_label-1 {
  opacity: .8;
  color: #1f1f1f;
  letter-spacing: -.02em;
  font-size: .875rem;
  font-weight: 700;
  line-height: 140%;
}

.sellCrypto_step6_label-2 {
  opacity: .8;
  color: #7a7a7a;
  letter-spacing: -.02em;
  font-size: .75rem;
  font-style: italic;
  font-weight: 400;
  line-height: 140%;
}

.sellCrypto_step6_gas-price-in-eth {
  color: #7a7a7a;
  letter-spacing: -.04em;
  font-size: .75rem;
  font-weight: 400;
  line-height: 130%;
}

.sellCrypto_step6_btn_wrap {
  grid-column-gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 24px;
  display: flex;
}

.sellCrypto_step6_btn-reject {
  grid-column-gap: 10px;
  border: 1px solid #7a7a7a;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
}

.sellCrypto_step6_btn-text-alt {
  color: #7a7a7a;
  letter-spacing: -.02em;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 140%;
}

.sellCrypto_step6_btn {
  grid-column-gap: 10px;
  background-image: linear-gradient(81.11deg, #f64c07 0%, #ff7943 100%);
  border: 2px solid #f64c07;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  cursor: pointer;
}

.sellCrypto_step6_btn-text {
  color: #fff;
  letter-spacing: -.02em;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 140%;
}

.sellCrypto_step6_faux_overlay {
  background-color: #0006;
  position: absolute;
  inset: 0%;
}

.sellCrypto_step6_crypto_ico {
  border-radius: 100%;
  flex: none;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  display: flex;
  overflow: hidden;
}

.sellCrypto_step6_cur-ico-img {
  object-fit: cover;
  flex: none;
  width: 100%;
  height: 100%;
}

.sellCrypto_step6_redirect-container {
  z-index: 3;
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
  display: flex;
  position: absolute;
  overflow: hidden;
  box-shadow: 0 4px 20px #0000001a;
}

.sellCrypto_step6_loader-wrap {
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

.sellCrypto_step6_loader-5 {
  flex: none;
  justify-content: center;
  align-items: center;
}

.sellCrypto_step6_title-redirect {
  color: #2f2f30;
  text-align: center;
  letter-spacing: -.04em;
  width: 100%;
  font-size: 2rem;
  font-weight: 500;
  line-height: 130%;
}

.sellCrypto_step6_complete-container {
  z-index: 6;
  grid-row-gap: 40px;
  background-color: #fff;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  max-width: 562px;
  padding: 40px;
  display: flex;
  position: absolute;
  box-shadow: 0 4px 20px #0000001a;
}

.sellCrypto_step6_complete-inner {
  grid-row-gap: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.sellCrypto_step6_text {
  color: #2f2f30;
  text-align: center;
  letter-spacing: -.02em;
  font-size: 2rem;
  font-weight: 600;
  line-height: 130%;
}

.sellCrypto_step6_complete-text {
  color: #686868;
  text-align: center;
  letter-spacing: -.02em;
  font-size: 1rem;
  font-weight: 400;
  line-height: 150%;
}

.sellCrypto_step6_order-summary {
  grid-row-gap: 8px;
  background-color: #f9f9f9;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  text-decoration: none;
  display: flex;
}

.sellCrypto_step6_order-total {
  color: #2f2f30;
  text-align: center;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 130%;
  text-decoration: none;
}

.sellCrypto_step6_order-total-usd {
  color: #686868;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.sellCrypto_step6_complete-check-wrap {
  background-color: #fff7f5;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  margin-bottom: 16px;
  display: flex;
  overflow: hidden;
}

.sellCrypto_step6_complete-check {
  flex: none;
  width: 56px;
  height: 56px;
}

.sellCrypto_step6_loader-5 {
    height: 32px;
    width: 32px;
    position: relative;
    animation: loader-5-1 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
  }

  @keyframes loader-5-1 {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .sellCrypto_step6_loader-5::before {
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

  .sellCrypto_step6_loader-5::after {
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

  .sellCrypto_step6_loader-5 span {
    display: block;
    position: absolute;
    top: 0; left: 0;
    bottom: 0; right: 0;
    margin: auto;
    height: 32px;
    width: 32px;
  }

  .sellCrypto_step6_loader-5 span::before {
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

  .sellCrypto_step6_loader-5 span::after {
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

    rootEl.innerHTML = `
    <div class="sellCrypto_step6_main-container">
      <div data-sim-view-1="" class="sellCrypto_step6_container">
        <div class="sellCrypto_step6_fauxui-wrap">
          <div class="sellCrypto_step6_fauxui"></div>
          <div class="sellCrypto_step6_fauxui_wrap">
            <div class="sellCrypto_step6_fauxui"></div>
            <div class="sellCrypto_step6_fauxui"></div>
          </div>
          <div class="sellCrypto_step6_fauxui-2"></div>
          <div class="sellCrypto_step6_fauxui"></div>
          <div class="sellCrypto_step6_faux_overlay"></div>
        </div>
        <div data-sim-view-inner="" class="sellCrypto_step6_confimation-overlay">
          <div class="sellCrypto_step6_confirmation-detail-wrap">
            <div class="sellCrypto_step6_header-wrap">
              <div class="sellCrypto_step6_title">Confirm order</div>
              <div class="sellCrypto_step6_subtitle">Review request details before you confirm.</div>
            </div>
            <div class="sellCrypto_step6_confirmation-wrap">
              <div class="sellCrypto_step6_confrimation_el">
                <div class="sellCrypto_step6_price-container">
                  <div data-sim-sell-usd="" class="sellCrypto_step6_receive-amount">$39.37</div>
                  <div class="sellCrypto_step6_price-details">
                    <div data-sim-crypto-img="" class="sellCrypto_step6_crypto_ico">
                      <img src="https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5cad7c2be8398af2e8_eth-logo.svg" class="sellCrypto_step6_cur-ico-img">
                    </div>
                    <div class="sellCrypto_step6_price-in-eth">
                      <span data-sim-sell-amount="">0.01</span>
                      <span data-sim-crypto-cur="">ETH</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sellCrypto_step6_confirmation_el-alt">
                <div class="sellCrypto_step6_gas-details">
                  <div class="sellCrypto_step6_label-1">Gas</div>
                  <div class="sellCrypto_step6_label-2">(estimated)</div>
                </div>
                <div class="sellCrypto_step6_gas-price-in-eth">
                  <span data-sim-crypto-gas-fee="">0.00011</span>
                  <span data-sim-crypto-cur="">ETH</span>
                </div>
              </div>
              <div class="sellCrypto_step6_confirmation_el-alt">
                <div class="sellCrypto_step6_gas-details">
                  <div class="sellCrypto_step6_label-1">Total</div>
                  <div class="sellCrypto_step6_label-2">(Amount + gas)</div>
                </div>
                <div class="sellCrypto_step6_gas-price-in-eth">
                  <span data-sim-total="">0.01011</span>
                  <span data-sim-crypto-cur="">ETH</span>
                </div>
              </div>
            </div>
          </div>
          <div class="sellCrypto_step6_btn_wrap">
            <div class="sellCrypto_step6_btn-reject">
              <div class="sellCrypto_step6_btn-text-alt">Reject</div>
            </div>
            <div data-sim-trigger="" class="sellCrypto_step6_btn">
              <div class="sellCrypto_step6_btn-text">Confirm</div>
            </div>
          </div>
        </div>
      </div>
      <div data-sim-view-3="" class="sellCrypto_step6_complete-container">
        <div class="sellCrypto_step6_complete-inner">
          <div class="sellCrypto_step6_complete-check-wrap">
            <svg class="sellCrypto_step6_complete-check" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M43.6564 16.823C43.4395 16.6043 43.1814 16.4307 42.8971 16.3123C42.6127 16.1938 42.3077 16.1328 41.9997 16.1328C41.6917 16.1328 41.3867 16.1938 41.1024 16.3123C40.818 16.4307 40.56 16.6043 40.3431 16.823L22.9597 34.2297L15.6564 26.903C15.4312 26.6855 15.1653 26.5144 14.874 26.3996C14.5826 26.2848 14.2716 26.2285 13.9585 26.2339C13.6454 26.2393 13.3364 26.3063 13.0492 26.4311C12.7621 26.556 12.5023 26.7361 12.2847 26.9613C12.0672 27.1866 11.8961 27.4524 11.7813 27.7438C11.6665 28.0351 11.6102 28.3462 11.6156 28.6593C11.621 28.9723 11.688 29.2813 11.8129 29.5685C11.9377 29.8557 12.1178 30.1155 12.3431 30.333L21.3031 39.293C21.52 39.5117 21.778 39.6853 22.0624 39.8038C22.3467 39.9222 22.6517 39.9832 22.9597 39.9832C23.2677 39.9832 23.5727 39.9222 23.8571 39.8038C24.1414 39.6853 24.3995 39.5117 24.6164 39.293L43.6564 20.253C43.8932 20.0345 44.0823 19.7693 44.2115 19.4742C44.3408 19.179 44.4076 18.8602 44.4076 18.538C44.4076 18.2158 44.3408 17.897 44.2115 17.6019C44.0823 17.3067 43.8932 17.0415 43.6564 16.823V16.823Z" fill="url(#paint0_linear_684_3053)"/>
<defs>
<linearGradient id="paint0_linear_684_3053" x1="28.0114" y1="16.1328" x2="28.0114" y2="39.9832" gradientUnits="userSpaceOnUse">
<stop stop-color="#F2A482"/>
<stop offset="1" stop-color="#FF7336"/>
</linearGradient>
</defs>
</svg>
          </div>
          <div class="sellCrypto_step6_text">Order complete</div>
          <div class="sellCrypto_step6_complete-text">It may take 1-3 days to reflect into your bank account.</div>
        </div>
        <div class="sellCrypto_step6_order-summary">
          <div class="sellCrypto_step6_order-total">
            <span data-sim-crypto-total="">0.01</span>
            <span data-sim-crypto-cur="">ETH</span>
          </div>
          <div class="sellCrypto_step6_order-total-usd">
            <span data-sim-sell-usd="">$39.37</span> USD
          </div>
        </div>
      </div>
      <div data-sim-view-2="" class="sellCrypto_step6_redirect-container">
        <div class="sellCrypto_step6_loader-wrap">
          <div class="sellCrypto_step6_loader-5 center"><span></span></div>
        </div>
        <div class="sellCrypto_step6_title-redirect">Processing your order...</div>
      </div>
    </div>
    `;

    const storage =
      (typeof window !== "undefined" && window.localStorage) || null;

    const view1 = rootEl.querySelector("[data-sim-view-1]");
    const viewInner = rootEl.querySelector("[data-sim-view-inner]");
    const view2 = rootEl.querySelector("[data-sim-view-2]");
    const view3 = rootEl.querySelector("[data-sim-view-3]");
    const triggerEl = rootEl.querySelector("[data-sim-trigger]");

    const sellUsdEls = rootEl.querySelectorAll("[data-sim-sell-usd]");
    const cryptoCurEls = rootEl.querySelectorAll("[data-sim-crypto-cur]");
    const sellAmountEl = rootEl.querySelector("[data-sim-sell-amount]");
    const gasFeeEl = rootEl.querySelector("[data-sim-crypto-gas-fee]");
    const totalCryptoEl = rootEl.querySelector("[data-sim-total]");
    const finalCryptoTotalEl = rootEl.querySelector("[data-sim-crypto-total]");
    const cryptoImgEl = rootEl.querySelector("[data-sim-crypto-img] img");

    if (!view1 || !viewInner || !view2 || !view3 || !triggerEl) {
      console.warn("[nca_sellCrypto_step6] Missing required elements.");
      return;
    }

    const CRYPTOS = {
      btc: {
        key: "btc",
        symbol: "BTC",
        img: "https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5cdc09e9e742cbdff5_btc-logo.svg",
      },
      eth: {
        key: "eth",
        symbol: "ETH",
        img: "https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5cad7c2be8398af2e8_eth-logo.svg",
      },
      xrp: {
        key: "xrp",
        symbol: "XRP",
        img: "https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5cecd803e93aa1a9d1_xrp-logo.svg",
      },
      bnb: {
        key: "bnb",
        symbol: "BNB",
        img: "https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5c63efaa27da6d1b15_bnb-logo.svg",
      },
      usdc: {
        key: "usdc",
        symbol: "USDC",
        img: "https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5c5c1e6e07d92c9228_usdc-logo.svg",
      },
    };

    const formatCrypto = (val) => {
      if (!val || !isFinite(val)) return "0.00";
      if (val < 0.00001) return val.toExponential(2);
      return val.toFixed(5).replace(/0+$/g, "").replace(/\.$/, "");
    };

    const formatUsd = (val) => {
      if (!val || !isFinite(val) || val <= 0) return "$0";
      if (val < 0.01) return "<$0.01";
      return `$${val.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    };

    let sellAmount = 0;
    let sellUsd = 0;
    let sellKey = "";

    if (storage) {
      try {
        const raw = storage.getItem(STORAGE_KEY);
        if (raw) {
          const data = JSON.parse(raw);
          if (data && typeof data === "object") {
            if (typeof data.sellAmount === "number")
              sellAmount = data.sellAmount;
            if (typeof data.sellUsd === "number") sellUsd = data.sellUsd;
            if (typeof data.sellKey === "string") sellKey = data.sellKey;
          }
        }
      } catch {
        // ignore
      }
    }

    if (typeof props.sellAmount === "number") {
      sellAmount = props.sellAmount;
    }
    if (typeof props.sellUsd === "number") {
      sellUsd = props.sellUsd;
    }
    if (typeof props.sellKey === "string" && props.sellKey) {
      sellKey = props.sellKey;
    }

    const cryptoMeta = sellKey && CRYPTOS[sellKey] ? CRYPTOS[sellKey] : null;

    if (sellAmountEl && sellAmount && isFinite(sellAmount)) {
      sellAmountEl.textContent = formatCrypto(sellAmount);
    }

    sellUsdEls.forEach((el) => {
      el.textContent = formatUsd(sellUsd);
    });

    if (cryptoMeta) {
      cryptoCurEls.forEach((el) => {
        el.textContent = cryptoMeta.symbol;
        el.setAttribute("data-sim-crypto-cur", cryptoMeta.key);
      });
      if (cryptoImgEl) {
        cryptoImgEl.src = cryptoMeta.img;
      }
    }

    const gasMultipliers = {
      btc: 0.005,
      eth: 0.01,
      xrp: 0.002,
      bnb: 0.008,
      usdc: 0.01,
    };

    const baseMult =
      sellKey && gasMultipliers[sellKey] ? gasMultipliers[sellKey] : 0.008;

    let gasFee = 0;
    if (sellAmount && isFinite(sellAmount) && sellAmount > 0) {
      const jitter = 0.9 + Math.random() * 0.2;
      gasFee = sellAmount * baseMult * jitter;
      const maxGas = sellAmount * 0.2;
      if (gasFee > maxGas) gasFee = maxGas;
    }

    if (gasFeeEl) {
      gasFeeEl.textContent = formatCrypto(gasFee);
    }

    const totalCrypto = sellAmount + gasFee;

    if (totalCryptoEl) {
      totalCryptoEl.textContent = formatCrypto(totalCrypto);
    }

    if (finalCryptoTotalEl) {
      finalCryptoTotalEl.textContent = formatCrypto(sellAmount);
    }

    if (storage) {
      try {
        const raw = storage.getItem(STORAGE_KEY);
        const data = raw ? JSON.parse(raw) : {};
        const payload = {
          ...(data && typeof data === "object" ? data : {}),
          sellAmount,
          sellUsd,
          sellKey,
          gasFee,
          totalCrypto,
        };
        storage.setItem(STORAGE_KEY, JSON.stringify(payload));
      } catch {
        // ignore
      }
    }

    if (gs) {
      gs.set(view1, { autoAlpha: 0, y: 200 });
      gs.set(viewInner, { yPercent: 100 });
      gs.set(view2, { autoAlpha: 0, y: 100 });
      gs.set(view3, { autoAlpha: 0, y: 200 });

      gs.timeline()
        .to(view1, {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        })
        .to(
          viewInner,
          {
            yPercent: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.4"
        );
    } else {
      view1.style.opacity = "1";
      view1.style.transform = "translateY(0)";
      viewInner.style.transform = "translateY(0)";
      view2.style.opacity = "0";
      view2.style.transform = "translateY(200px)";
      view2.style.display = "none";
      view3.style.opacity = "0";
      view3.style.transform = "translateY(200px)";
      view3.style.display = "none";
    }

    let completed = false;
    const safeDone = () => {
      if (completed) return;
      completed = true;
      done?.();
    };

    triggerEl.addEventListener("click", (evt) => {
      evt.preventDefault();
      if (completed) return;

      if (gs) {
        const tl = gs.timeline({ defaults: { ease: "power2.out" } });

        tl.to(view1, {
          autoAlpha: 0,
          y: -50,
          duration: 0.6,
        })

          .to(
            view2,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.5,
            },
            "-=0.4"
          )
          .to({}, { duration: 1 })
          .to(view2, {
            autoAlpha: 0,
            y: -50,
            duration: 0.4,
          })
          .to(
            view3,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.6,
            },
            "-=0.3"
          )
          .to({}, { duration: 1 })
          .add(() => safeDone());
      } else {
        view1.style.opacity = "0";
        setTimeout(() => {
          view2.style.display = "flex";
          view2.style.opacity = "1";
          view2.style.transform = "translateY(0)";
          setTimeout(() => {
            view2.style.opacity = "0";
            view3.style.display = "flex";
            view3.style.opacity = "1";
            view3.style.transform = "translateY(0)";
            setTimeout(() => {
              safeDone();
            }, 1000);
          }, 1000);
        }, 0);
      }
    });
  },
};
