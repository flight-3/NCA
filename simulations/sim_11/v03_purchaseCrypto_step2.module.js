// purchaseCrypto_step2.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = window.gsap || null;

    if (!rootEl) return;

    // ----------------------------------
    // Inject step-scoped CSS (once)
    // ----------------------------------
    const STYLE_ID = "purchaseCrypto_step2_styles";

    if (!document.getElementById(STYLE_ID)) {
      const styleEl = document.createElement("style");
      styleEl.id = STYLE_ID;
      styleEl.textContent = `
.purchaseCrypto_step2_button-large {
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

.purchaseCrypto_step2_buttons-2 {
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

.purchaseCrypto_step2_canvas-wrap {
  grid-row-gap: 64px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  overflow: hidden;
}

.purchaseCrypto_step2_container {
  grid-row-gap: 40px;
  background-color: #fff;
  border-radius: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 32px;
  display: flex;
  overflow: hidden;
  box-shadow: 0 4px 20px #0000001a;
}

.purchaseCrypto_step2_main-container-2 {
  grid-row-gap: 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  display: flex;
}

.purchaseCrypto_step2_main-container-3 {
  grid-row-gap: 32px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  display: flex;
}

.purchaseCrypto_step2_header-container {
  grid-row-gap: 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  display: flex;
}

.purchaseCrypto_step2_title-container {
  grid-row-gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: flex;
}

.purchaseCrypto_step2_title-style {
  color: #2f2f30;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2rem;
  font-weight: 500;
  line-height: 130%;
}

.purchaseCrypto_step2_button-container {
  grid-column-gap: 8px;
  background-color: #f9f9f9;
  border: 2px solid #ebebeb;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  max-width: 482px;
  padding: 6px;
  display: flex;
}

.purchaseCrypto_step2_buttons {
  grid-column-gap: 10px;
  color: #7a7a7a;
  letter-spacing: -.02em;
  cursor: pointer;
  border-radius: 8px;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 48px;
  padding-left: 24px;
  padding-right: 24px;
  font-size: 1.125rem;
  line-height: 100%;
  transition: all .2s;
  display: flex;
}

.purchaseCrypto_step2_buttons.is--active {
  color: #fff;
  background-color: #f64c07;
}

.purchaseCrypto_step2_button-large-2 {
  color: #7a7a7a;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 140%;
}

.purchaseCrypto_step2_buttons-3 {
  grid-column-gap: 10px;
  background-color: #f64c07;
  border-radius: 8px;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 48px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
}

.purchaseCrypto_step2_button-large-3 {
  color: #fff;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 140%;
}

.purchaseCrypto_step2_container-2 {
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 482px;
  max-width: 482px;
  display: flex;
  overflow: hidden;
}

.purchaseCrypto_step2_tab-container {
  flex: 0 auto;
  justify-content: flex-start;
  align-items: flex-start;
  text-decoration: none;
  display: flex;
  width: 964px;
  max-width: 964px;
}

.purchaseCrypto_step2_tab-container.is--limit {
  transform: translate(-50%);
}

.purchaseCrypto_step2_content-container {
  grid-row-gap: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-width: 482px;
  max-width: 482px;
  display: flex;
  position: relative;
  flex: 0 0 50%;
}

.purchaseCrypto_step2_limit-price-container {
  grid-row-gap: 8px;
  background-color: #f9f9f9;
  border: 2px solid #ebebeb;
  border-radius: 12px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 24px;
  text-decoration: none;
  display: flex;
  max-width: 100%;
  width: 100%;
  min-width: 430px;
}

.purchaseCrypto_step2_limit-price-label-container {
  grid-column-gap: 8px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step2_limit-price-label {
  color: #2f2f30;
  letter-spacing: -.04em;
  flex: none;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 600;
  line-height: 130%;
  text-decoration: none;
}

.purchaseCrypto_step2_limit-price-input-container {
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step2_currency-icon-container {
  grid-column-gap: 8px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step2_usdcmatic {
  object-fit: cover;
  overflow: hidden;
}

.purchaseCrypto_step2_currency-label-container {
  grid-row-gap: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step2_currency-label {
  grid-column-gap: 8px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: flex-start;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step2_currency-label-text {
  color: #7a7a7a;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 600;
  line-height: 130%;
  text-decoration: none;
}

.purchaseCrypto_step2_price-input-container {
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step2_price-input {
  opacity: .2;
  color: #1f1f1f;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.purchaseCrypto_step2_market-button-container {
  grid-column-gap: 16px;
  border: 1px solid #7a7a7a;
  border-radius: 1000px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  padding: 6px 10px;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step2_market-button {
  grid-column-gap: 12px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step2_market-button-label-text {
  color: #7a7a7a;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .875rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.purchaseCrypto_step2_selling-amount-container {
  grid-column-gap: 8px;
  border-radius: 1000px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step2_selling-amount-label-text {
  color: #7a7a7a;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .8125rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.purchaseCrypto_step2_selling-currency-container {
  grid-column-gap: 16px;
  background-color: #efefef;
  border: 1px solid #ebebeb;
  border-radius: 1000px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 8px 8px 16px;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step2_selling-currency-label-text {
  color: #1f1f1f;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 130%;
  text-decoration: none;
}

.purchaseCrypto_step2_selling-price-usd {
  opacity: .2;
  color: #1f1f1f;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .875rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.purchaseCrypto_step2_exchange-icon-container {
  grid-column-gap: 10px;
  background-color: #1f1f1f;
  border-radius: 1000px;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  text-decoration: none;
  display: flex;
  position: absolute;
  top: 307px;
  left: 221px;
}

.purchaseCrypto_step2_right-container {
  grid-row-gap: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 482px;
  max-width: 482px;
  display: flex;
}

.purchaseCrypto_step2_right-top-container {
  grid-row-gap: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  text-decoration: none;
  display: flex;
  position: relative;
}

.purchaseCrypto_step2_right-selling-container {
  grid-row-gap: 8px;
  background-color: #f9f9f9;
  border: 2px solid #f64c07;
  border-radius: 12px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 100%;
  width: 100%;
  min-width: 430px;
  padding: 24px;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step2_right-exchange-icon-container {
  grid-column-gap: 10px;
  background-color: #1f1f1f;
  border-radius: 1000px;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  text-decoration: none;
  display: flex;
  position: absolute;
  top: 131px;
  left: 221px;
}

.purchaseCrypto_step2_right-slippage-container {
  grid-column-gap: 40px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step2_right-slippage-input-container {
  grid-row-gap: 8px;
  background-color: #f9f9f9;
  border: 2px solid #ebebeb;
  border-radius: 12px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 16px 24px;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step2_right-slippage-input-text {
  color: #7a7a7a;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.purchaseCrypto_step2_buttons-4 {
  grid-column-gap: 10px;
  background-color: #f2f2f2;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  flex: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step2_button-large-4 {
  color: #7a7a7a;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .875rem;
  font-weight: 600;
  line-height: 130%;
  text-decoration: none;
}

.purchaseCrypto_step2_buttons-5 {
  grid-column-gap: 10px;
  opacity: .4;
  background-color: #f64c07;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  height: 56px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
}

.purchaseCrypto_step2_button-large-5 {
  color: #fff;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 140%;
  text-decoration: none;
}

.purchaseCrypto_step2_cur-ico {
  flex: none;
  width: 32px;
  height: 32px;
}

.purchaseCrypto_step2_cur-ico.is--small {
  flex: none;
  width: 24px;
  height: 24px;
}

.purchaseCrypto_step2_exch-ico {
  z-index: 1;
  background-color: #202020;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-top: -24px;
  margin-bottom: -24px;
  display: flex;
  position: relative;
}

.purchaseCrypto_step2_exch-ico-inner {
  flex: none;
  width: 24px;
  height: 24px;
}

.purchaseCrypto_step2_wallet-ico {
  flex: none;
  width: 16px;
  height: 16px;
}

.purchaseCrypto_step2_chev-ico {
  flex: none;
  width: 24px;
  height: 24px;
}
      `;
      document.head.appendChild(styleEl);
    }

    // ----------------------------------
    // Inject HTML
    // ----------------------------------
    rootEl.innerHTML = `
      <div class="purchaseCrypto_step2_canvas-wrap">
        <div data-sim-view class="purchaseCrypto_step2_container">
          <div class="purchaseCrypto_step2_main-container-2">
            <div class="purchaseCrypto_step2_main-container-3">
              <div class="purchaseCrypto_step2_header-container">
                <div class="purchaseCrypto_step2_title-container">
                  <div class="purchaseCrypto_step2_title-style">Purchase</div>
                </div>
                <div class="purchaseCrypto_step2_button-container">
                  <div data-sim-tab-btn-1 class="purchaseCrypto_step2_buttons">
                    <div>Market</div>
                  </div>
                  <div data-sim-tab-btn-2 class="purchaseCrypto_step2_buttons is--active">
                    <div>Limit</div>
                  </div>
                </div>
              </div>
              <div class="purchaseCrypto_step2_container-2">
                <div data-sim-tab-contain class="purchaseCrypto_step2_tab-container is--limit">
                  <div data-sim-tab-1 class="purchaseCrypto_step2_right-container">
                    <div class="purchaseCrypto_step2_right-top-container">
                      <div class="purchaseCrypto_step2_right-selling-container">
                        <div class="purchaseCrypto_step2_limit-price-input-container">
                          <div class="purchaseCrypto_step2_limit-price-label">Selling</div>
                          <div class="purchaseCrypto_step2_selling-amount-container">
                            <div class="purchaseCrypto_step2_currency-label-container">
                              <div class="purchaseCrypto_step2_currency-label">
                                <div class="purchaseCrypto_step2_selling-amount-label-text">0.12 ETH</div>
                              </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" class="purchaseCrypto_step2_wallet-ico">
                              <path d="M12.6673 4.66667H12.0007V4C12.0007 3.46957 11.7899 2.96086 11.4149 2.58579C11.0398 2.21071 10.5311 2 10.0007 2H3.33398C2.80355 2 2.29484 2.21071 1.91977 2.58579C1.5447 2.96086 1.33398 3.46957 1.33398 4V4V12C1.33398 12.5304 1.5447 13.0391 1.91977 13.4142C2.29484 13.7893 2.80355 14 3.33398 14H12.6673C13.1977 14 13.7065 13.7893 14.0815 13.4142C14.4566 13.0391 14.6673 12.5304 14.6673 12V6.66667C14.6673 6.13623 14.4566 5.62753 14.0815 5.25245C13.7065 4.87738 13.1977 4.66667 12.6673 4.66667ZM3.33398 3.33333H10.0007C10.1775 3.33333 10.347 3.40357 10.4721 3.5286C10.5971 3.65362 10.6673 3.82319 10.6673 4V4.66667H3.33398C3.15717 4.66667 2.9876 4.59643 2.86258 4.4714C2.73756 4.34638 2.66732 4.17681 2.66732 4C2.66732 3.82319 2.73756 3.65362 2.86258 3.5286C2.9876 3.40357 3.15717 3.33333 3.33398 3.33333V3.33333ZM13.334 10H12.6673C12.4905 10 12.3209 9.92976 12.1959 9.80474C12.0709 9.67971 12.0007 9.51014 12.0007 9.33333C12.0007 9.15652 12.0709 8.98695 12.1959 8.86193C12.3209 8.7369 12.4905 8.66667 12.6673 8.66667H13.334V10ZM13.334 7.33333H12.6673C12.1369 7.33333 11.6282 7.54405 11.2531 7.91912C10.878 8.29419 10.6673 8.8029 10.6673 9.33333C10.6673 9.86377 10.878 10.3725 11.2531 10.7475C11.6282 11.1226 12.1369 11.3333 12.6673 11.3333H13.334V12C13.334 12.1768 13.2637 12.3464 13.1387 12.4714C13.0137 12.5964 12.8441 12.6667 12.6673 12.6667H3.33398C3.15717 12.6667 2.9876 12.5964 2.86258 12.4714C2.73756 12.3464 2.66732 12.1768 2.66732 12V5.88667C2.8815 5.96201 3.10694 6.00034 3.33398 6H12.6673C12.8441 6 13.0137 6.07024 13.1387 6.19526C13.2637 6.32029 13.334 6.48986 13.334 6.66667V7.33333Z" fill="#7A7A7A"></path>
                            </svg>
                          </div>
                        </div>
                        <div class="purchaseCrypto_step2_limit-price-input-container">
                          <div class="purchaseCrypto_step2_selling-currency-container">
                            <div class="purchaseCrypto_step2_market-button">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 32 32" fill="none" class="purchaseCrypto_step2_cur-ico">
                                <g clip-path="url(#clip0_486_2193)">
                                  <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#627EEA"></path>
                                  <path d="M16.498 4V12.87L23.995 16.22L16.498 4Z" fill="white" fill-opacity="0.602"></path>
                                  <path d="M16.498 4L9 16.22L16.498 12.87V4Z" fill="white"></path>
                                  <path d="M16.498 21.9731V28.0001L24 17.6211L16.498 21.9731Z" fill="white" fill-opacity="0.602"></path>
                                  <path d="M16.498 28.0001V21.9721L9 17.6211L16.498 28.0001Z" fill="white"></path>
                                  <path d="M16.498 20.5721L23.995 16.2191L16.498 12.8711V20.5721Z" fill="white" fill-opacity="0.2"></path>
                                  <path d="M9 16.2191L16.498 20.5721V12.8711L9 16.2191Z" fill="white" fill-opacity="0.602"></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_486_2193">
                                    <rect width="32" height="32" fill="white"></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                              <div class="purchaseCrypto_step2_currency-label-container">
                                <div class="purchaseCrypto_step2_currency-label">
                                  <div class="purchaseCrypto_step2_selling-currency-label-text">ETH</div>
                                </div>
                              </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="purchaseCrypto_step2_chev-ico">
                              <path d="M16.9997 9.1697C16.8123 8.98345 16.5589 8.87891 16.2947 8.87891C16.0305 8.87891 15.7771 8.98345 15.5897 9.1697L11.9997 12.7097L8.4597 9.1697C8.27234 8.98345 8.01889 8.87891 7.7547 8.87891C7.49052 8.87891 7.23707 8.98345 7.0497 9.1697C6.95598 9.26266 6.88158 9.37326 6.83081 9.49512C6.78004 9.61698 6.75391 9.74769 6.75391 9.8797C6.75391 10.0117 6.78004 10.1424 6.83081 10.2643C6.88158 10.3861 6.95598 10.4967 7.0497 10.5897L11.2897 14.8297C11.3827 14.9234 11.4933 14.9978 11.6151 15.0486C11.737 15.0994 11.8677 15.1255 11.9997 15.1255C12.1317 15.1255 12.2624 15.0994 12.3843 15.0486C12.5061 14.9978 12.6167 14.9234 12.7097 14.8297L16.9997 10.5897C17.0934 10.4967 17.1678 10.3861 17.2186 10.2643C17.2694 10.1424 17.2955 10.0117 17.2955 9.8797C17.2955 9.74769 17.2694 9.61698 17.2186 9.49512C17.1678 9.37326 17.0934 9.26266 16.9997 9.1697Z" fill="#7A7A7A"></path>
                            </svg>
                          </div>
                          <div class="purchaseCrypto_step2_price-input-container">
                            <div class="purchaseCrypto_step2_price-input">0.00</div>
                            <div class="purchaseCrypto_step2_selling-price-usd">$0</div>
                          </div>
                        </div>
                      </div>
                      <div class="purchaseCrypto_step2_exch-ico">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="purchaseCrypto_step2_exch-ico-inner">
                        <path d="M10.0002 5.99986C9.73497 5.99986 9.48062 6.10522 9.29308 6.29275C9.10554 6.48029 9.00019 6.73465 9.00019 6.99986L9.00019 18.5899L6.71019 16.2899C6.52188 16.1016 6.26649 15.9958 6.00019 15.9958C5.73388 15.9958 5.47849 16.1016 5.29019 16.2899C5.10188 16.4782 4.99609 16.7336 4.99609 16.9999C4.99609 17.2662 5.10188 17.5216 5.29019 17.7099L9.29019 21.7099C9.43081 21.8486 9.60938 21.9426 9.80337 21.98C9.99736 22.0174 10.1981 21.9964 10.3802 21.9199C10.5628 21.8448 10.7191 21.7174 10.8295 21.5537C10.9398 21.39 10.9992 21.1973 11.0002 20.9999L11.0002 6.99986C11.0002 6.73465 10.8948 6.48029 10.7073 6.29275C10.5198 6.10522 10.2654 5.99986 10.0002 5.99986ZM13.6202 2.07986C13.4376 2.15488 13.2812 2.28228 13.1709 2.446C13.0606 2.60972 13.0012 2.80244 13.0002 2.99986L13.0002 16.9999C13.0002 17.2651 13.1055 17.5194 13.2931 17.707C13.4806 17.8945 13.735 17.9999 14.0002 17.9999C14.2654 17.9999 14.5198 17.8945 14.7073 17.707C14.8948 17.5194 15.0002 17.2651 15.0002 16.9999L15.0002 5.40986L17.2902 7.70986C17.3831 7.80359 17.4937 7.87798 17.6156 7.92875C17.7375 7.97952 17.8682 8.00566 18.0002 8.00566C18.1322 8.00566 18.2629 7.97952 18.3848 7.92875C18.5066 7.87798 18.6172 7.80359 18.7102 7.70986C18.8039 7.6169 18.8783 7.5063 18.9291 7.38444C18.9798 7.26258 19.006 7.13187 19.006 6.99986C19.006 6.86785 18.9798 6.73714 18.9291 6.61528C18.8783 6.49343 18.8039 6.38283 18.7102 6.28986L14.7102 2.28986C14.5696 2.1511 14.391 2.05711 14.197 2.01973C14.003 1.98236 13.8023 2.00328 13.6202 2.07986V2.07986Z" fill="white"></path>
                      </svg>
                      </div>
                      <div class="purchaseCrypto_step2_limit-price-container">
                        <div class="purchaseCrypto_step2_limit-price-input-container">
                          <div class="purchaseCrypto_step2_limit-price-label">Buying</div>
                          <div class="purchaseCrypto_step2_selling-amount-container">
                            <div class="purchaseCrypto_step2_currency-label-container">
                              <div class="purchaseCrypto_step2_currency-label">
                                <div class="purchaseCrypto_step2_selling-amount-label-text">0 USDC</div>
                              </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" class="purchaseCrypto_step2_wallet-ico">
                              <path d="M12.6673 4.66667H12.0007V4C12.0007 3.46957 11.7899 2.96086 11.4149 2.58579C11.0398 2.21071 10.5311 2 10.0007 2H3.33398C2.80355 2 2.29484 2.21071 1.91977 2.58579C1.5447 2.96086 1.33398 3.46957 1.33398 4V4V12C1.33398 12.5304 1.5447 13.0391 1.91977 13.4142C2.29484 13.7893 2.80355 14 3.33398 14H12.6673C13.1977 14 13.7065 13.7893 14.0815 13.4142C14.4566 13.0391 14.6673 12.5304 14.6673 12V6.66667C14.6673 6.13623 14.4566 5.62753 14.0815 5.25245C13.7065 4.87738 13.1977 4.66667 12.6673 4.66667ZM3.33398 3.33333H10.0007C10.1775 3.33333 10.347 3.40357 10.4721 3.5286C10.5971 3.65362 10.6673 3.82319 10.6673 4V4.66667H3.33398C3.15717 4.66667 2.9876 4.59643 2.86258 4.4714C2.73756 4.34638 2.66732 4.17681 2.66732 4C2.66732 3.82319 2.73756 3.65362 2.86258 3.5286C2.9876 3.40357 3.15717 3.33333 3.33398 3.33333V3.33333ZM13.334 10H12.6673C12.4905 10 12.3209 9.92976 12.1959 9.80474C12.0709 9.67971 12.0007 9.51014 12.0007 9.33333C12.0007 9.15652 12.0709 8.98695 12.1959 8.86193C12.3209 8.7369 12.4905 8.66667 12.6673 8.66667H13.334V10ZM13.334 7.33333H12.6673C12.1369 7.33333 11.6282 7.54405 11.2531 7.91912C10.878 8.29419 10.6673 8.8029 10.6673 9.33333C10.6673 9.86377 10.878 10.3725 11.2531 10.7475C11.6282 11.1226 12.1369 11.3333 12.6673 11.3333H13.334V12C13.334 12.1768 13.2637 12.3464 13.1387 12.4714C13.0137 12.5964 12.8441 12.6667 12.6673 12.6667H3.33398C3.15717 12.6667 2.9876 12.5964 2.86258 12.4714C2.73756 12.3464 2.66732 12.1768 2.66732 12V5.88667C2.8815 5.96201 3.10694 6.00034 3.33398 6H12.6673C12.8441 6 13.0137 6.07024 13.1387 6.19526C13.2637 6.32029 13.334 6.48986 13.334 6.66667V7.33333Z" fill="#7A7A7A"></path>
                            </svg>
                          </div>
                        </div>
                        <div class="purchaseCrypto_step2_limit-price-input-container">
                          <div class="purchaseCrypto_step2_selling-currency-container">
                            <div class="purchaseCrypto_step2_market-button">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 32 32" fill="none" class="purchaseCrypto_step2_cur-ico">
                                <g clip-path="url(#clip0_486_2221)">
                                  <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#3E73C4"></path>
                                  <path d="M20.0196 18.1243C20.0196 16.0003 18.7396 15.2723 16.1796 14.9683C14.3516 14.7253 13.9866 14.2403 13.9866 13.3903C13.9866 12.5403 14.5966 11.9943 15.8146 11.9943C16.9116 11.9943 17.5216 12.3583 17.8256 13.2693C17.8573 13.3573 17.9152 13.4336 17.9915 13.4878C18.0679 13.542 18.159 13.5714 18.2526 13.5722H19.2276C19.2839 13.5738 19.34 13.5638 19.3923 13.543C19.4447 13.5222 19.4923 13.491 19.5322 13.4512C19.5721 13.4115 19.6035 13.3641 19.6246 13.3118C19.6456 13.2596 19.6559 13.2036 19.6546 13.1473V13.0873C19.5355 12.4822 19.202 11.8269 18.706 11.3768C18.2099 10.9267 17.5792 10.653 16.9116 10.5982V9.14225C16.9116 8.89925 16.7286 8.71725 16.4246 8.65625H15.5096C15.2666 8.65625 15.0836 8.83825 15.0226 9.14225V10.5383C13.1936 10.7803 12.0366 11.9943 12.0366 13.5123C12.0366 15.5143 13.2546 16.3033 15.8146 16.6073C17.5216 16.9103 18.0696 17.2753 18.0696 18.2463C18.0696 19.2163 17.2166 19.8843 16.0586 19.8843C14.4736 19.8843 13.9256 19.2173 13.7426 18.3063C13.6826 18.0643 13.4986 17.9423 13.3156 17.9423H12.2796C12.2234 17.9409 12.1675 17.9509 12.1152 17.9718C12.063 17.9927 12.0155 18.0239 11.9757 18.0636C11.9359 18.1034 11.9045 18.1507 11.8836 18.2029C11.8626 18.2551 11.8524 18.311 11.8536 18.3673V18.4273C12.0966 19.9453 13.0726 21.0373 15.0836 21.3413V22.7983C15.0836 23.0403 15.2666 23.2233 15.5706 23.2833H16.4856C16.7286 23.2833 16.9116 23.1013 16.9726 22.7983V21.3403C18.8016 21.0373 20.0196 19.7623 20.0196 18.1233V18.1243Z" fill="white"></path>
                                  <path d="M12.8913 24.497C8.13731 22.797 5.69931 17.517 7.46731 12.844C8.38131 10.294 10.3923 8.353 12.8913 7.442C13.1353 7.321 13.2563 7.139 13.2563 6.835V5.985C13.2563 5.743 13.1353 5.561 12.8913 5.5C12.8303 5.5 12.7083 5.5 12.6473 5.56C11.2757 5.98832 10.0024 6.68373 8.90073 7.60617C7.79902 8.52862 6.89066 9.65988 6.22795 10.9348C5.56525 12.2098 5.16128 13.6032 5.03932 15.0349C4.91736 16.4666 5.0798 17.9083 5.51731 19.277C6.61331 22.677 9.23431 25.287 12.6473 26.379C12.8913 26.5 13.1353 26.379 13.1953 26.136C13.2563 26.076 13.2563 26.014 13.2563 25.893V25.043C13.2563 24.861 13.0743 24.619 12.8913 24.497V24.497ZM19.3513 5.561C19.1073 5.439 18.8633 5.561 18.8033 5.803C18.7423 5.864 18.7423 5.925 18.7423 6.046V6.896C18.7423 7.139 18.9243 7.381 19.1073 7.503C23.8613 9.203 26.2993 14.483 24.5313 19.156C23.6173 21.706 21.6063 23.647 19.1073 24.558C18.8633 24.679 18.7423 24.861 18.7423 25.165V26.015C18.7423 26.257 18.8633 26.439 19.1073 26.5C19.1683 26.5 19.2903 26.5 19.3513 26.44C20.7229 26.0117 21.9962 25.3163 23.0979 24.3938C24.1996 23.4714 25.108 22.3401 25.7707 21.0652C26.4334 19.7902 26.8373 18.3968 26.9593 16.9651C27.0813 15.5334 26.9188 14.0917 26.4813 12.723C25.3853 9.263 22.7033 6.653 19.3513 5.561V5.561Z" fill="white"></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_486_2221">
                                    <rect width="32" height="32" fill="white"></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                              <div class="purchaseCrypto_step2_currency-label-container">
                                <div class="purchaseCrypto_step2_currency-label">
                                  <div class="purchaseCrypto_step2_selling-currency-label-text">USDC</div>
                                </div>
                              </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="purchaseCrypto_step2_chev-ico">
                              <path d="M16.9997 9.1697C16.8123 8.98345 16.5589 8.87891 16.2947 8.87891C16.0305 8.87891 15.7771 8.98345 15.5897 9.1697L11.9997 12.7097L8.4597 9.1697C8.27234 8.98345 8.01889 8.87891 7.7547 8.87891C7.49052 8.87891 7.23707 8.98345 7.0497 9.1697C6.95598 9.26266 6.88158 9.37326 6.83081 9.49512C6.78004 9.61698 6.75391 9.74769 6.75391 9.8797C6.75391 10.0117 6.78004 10.1424 6.83081 10.2643C6.88158 10.3861 6.95598 10.4967 7.0497 10.5897L11.2897 14.8297C11.3827 14.9234 11.4933 14.9978 11.6151 15.0486C11.737 15.0994 11.8677 15.1255 11.9997 15.1255C12.1317 15.1255 12.2624 15.0994 12.3843 15.0486C12.5061 14.9978 12.6167 14.9234 12.7097 14.8297L16.9997 10.5897C17.0934 10.4967 17.1678 10.3861 17.2186 10.2643C17.2694 10.1424 17.2955 10.0117 17.2955 9.8797C17.2955 9.74769 17.2694 9.61698 17.2186 9.49512C17.1678 9.37326 17.0934 9.26266 16.9997 9.1697Z" fill="#7A7A7A"></path>
                            </svg>
                          </div>
                          <div class="purchaseCrypto_step2_price-input-container">
                            <div class="purchaseCrypto_step2_price-input">0.00</div>
                            <div class="purchaseCrypto_step2_selling-price-usd">$0</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="purchaseCrypto_step2_right-slippage-container">
                      <div class="purchaseCrypto_step2_limit-price-label">Max slippage</div>
                      <div class="purchaseCrypto_step2_right-slippage-input-container">
                        <div class="purchaseCrypto_step2_limit-price-input-container">
                          <div class="purchaseCrypto_step2_right-slippage-input-text">5.5%</div>
                          <div class="purchaseCrypto_step2_buttons-4">
                            <div class="purchaseCrypto_step2_button-large-4">Set auto</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="purchaseCrypto_step2_buttons-5">
                      <div class="purchaseCrypto_step2_button-large-5">Enter amount</div>
                    </div>
                  </div>
                  <div data-sim-tab-2 class="purchaseCrypto_step2_content-container">
                    <div class="purchaseCrypto_step2_limit-price-container">
                      <div class="purchaseCrypto_step2_limit-price-label-container">
                        <div class="purchaseCrypto_step2_limit-price-label">Limit price</div>
                      </div>
                      <div class="purchaseCrypto_step2_limit-price-input-container">
                        <div class="purchaseCrypto_step2_currency-icon-container">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 32 32" fill="none" class="purchaseCrypto_step2_cur-ico is--small">
                            <g clip-path="url(#clip0_486_2221)">
                              <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#3E73C4"></path>
                              <path d="M20.0196 18.1243C20.0196 16.0003 18.7396 15.2723 16.1796 14.9683C14.3516 14.7253 13.9866 14.2403 13.9866 13.3903C13.9866 12.5403 14.5966 11.9943 15.8146 11.9943C16.9116 11.9943 17.5216 12.3583 17.8256 13.2693C17.8573 13.3573 17.9152 13.4336 17.9915 13.4878C18.0679 13.542 18.159 13.5714 18.2526 13.5722H19.2276C19.2839 13.5738 19.34 13.5638 19.3923 13.543C19.4447 13.5222 19.4923 13.491 19.5322 13.4512C19.5721 13.4115 19.6035 13.3641 19.6246 13.3118C19.6456 13.2596 19.6559 13.2036 19.6546 13.1473V13.0873C19.5355 12.4822 19.202 11.8269 18.706 11.3768C18.2099 10.9267 17.5792 10.653 16.9116 10.5982V9.14225C16.9116 8.89925 16.7286 8.71725 16.4246 8.65625H15.5096C15.2666 8.65625 15.0836 8.83825 15.0226 9.14225V10.5383C13.1936 10.7803 12.0366 11.9943 12.0366 13.5123C12.0366 15.5143 13.2546 16.3033 15.8146 16.6073C17.5216 16.9103 18.0696 17.2753 18.0696 18.2463C18.0696 19.2163 17.2166 19.8843 16.0586 19.8843C14.4736 19.8843 13.9256 19.2173 13.7426 18.3063C13.6826 18.0643 13.4986 17.9423 13.3156 17.9423H12.2796C12.2234 17.9409 12.1675 17.9509 12.1152 17.9718C12.063 17.9927 12.0155 18.0239 11.9757 18.0636C11.9359 18.1034 11.9045 18.1507 11.8836 18.2029C11.8626 18.2551 11.8524 18.311 11.8536 18.3673V18.4273C12.0966 19.9453 13.0726 21.0373 15.0836 21.3413V22.7983C15.0836 23.0403 15.2666 23.2233 15.5706 23.2833H16.4856C16.7286 23.2833 16.9116 23.1013 16.9726 22.7983V21.3403C18.8016 21.0373 20.0196 19.7623 20.0196 18.1233V18.1243Z" fill="white"></path>
                              <path d="M12.8913 24.497C8.13731 22.797 5.69931 17.517 7.46731 12.844C8.38131 10.294 10.3923 8.353 12.8913 7.442C13.1353 7.321 13.2563 7.139 13.2563 6.835V5.985C13.2563 5.743 13.1353 5.561 12.8913 5.5C12.8303 5.5 12.7083 5.5 12.6473 5.56C11.2757 5.98832 10.0024 6.68373 8.90073 7.60617C7.79902 8.52862 6.89066 9.65988 6.22795 10.9348C5.56525 12.2098 5.16128 13.6032 5.03932 15.0349C4.91736 16.4666 5.0798 17.9083 5.51731 19.277C6.61331 22.677 9.23431 25.287 12.6473 26.379C12.8913 26.5 13.1353 26.379 13.1953 26.136C13.2563 26.076 13.2563 26.014 13.2563 25.893V25.043C13.2563 24.861 13.0743 24.619 12.8913 24.497V24.497ZM19.3513 5.561C19.1073 5.439 18.8633 5.561 18.8033 5.803C18.7423 5.864 18.7423 5.925 18.7423 6.046V6.896C18.7423 7.139 18.9243 7.381 19.1073 7.503C23.8613 9.203 26.2993 14.483 24.5313 19.156C23.6173 21.706 21.6063 23.647 19.1073 24.558C18.8633 24.679 18.7423 24.861 18.7423 25.165V26.015C18.7423 26.257 18.8633 26.439 19.1073 26.5C19.1683 26.5 19.2903 26.5 19.3513 26.44C20.7229 26.0117 21.9962 25.3163 23.0979 24.3938C24.1996 23.4714 25.108 22.3401 25.7707 21.0652C26.4334 19.7902 26.8373 18.3968 26.9593 16.9651C27.0813 15.5334 26.9188 14.0917 26.4813 12.723C25.3853 9.263 22.7033 6.653 19.3513 5.561V5.561Z" fill="white"></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_486_2221">
                                <rect width="32" height="32" fill="white"></rect>
                              </clipPath>
                            </defs>
                          </svg>
                          <div class="purchaseCrypto_step2_currency-label-container">
                            <div class="purchaseCrypto_step2_currency-label">
                              <div class="purchaseCrypto_step2_currency-label-text">USDC</div>
                            </div>
                          </div>
                        </div>
                        <div class="purchaseCrypto_step2_price-input-container">
                          <div class="purchaseCrypto_step2_price-input">0.00</div>
                        </div>
                      </div>
                      <div class="purchaseCrypto_step2_currency-label">
                        <div class="purchaseCrypto_step2_market-button-container">
                          <div class="purchaseCrypto_step2_market-button">
                            <div class="purchaseCrypto_step2_currency-label-container">
                              <div class="purchaseCrypto_step2_currency-label">
                                <div class="purchaseCrypto_step2_market-button-label-text">Market</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="purchaseCrypto_step2_market-button-container">
                          <div class="purchaseCrypto_step2_market-button">
                            <div class="purchaseCrypto_step2_currency-label-container">
                              <div class="purchaseCrypto_step2_currency-label">
                                <div class="purchaseCrypto_step2_market-button-label-text">+1%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="purchaseCrypto_step2_market-button-container">
                          <div class="purchaseCrypto_step2_market-button">
                            <div class="purchaseCrypto_step2_currency-label-container">
                              <div class="purchaseCrypto_step2_currency-label">
                                <div class="purchaseCrypto_step2_market-button-label-text">+5%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="purchaseCrypto_step2_market-button-container">
                          <div class="purchaseCrypto_step2_market-button">
                            <div class="purchaseCrypto_step2_currency-label-container">
                              <div class="purchaseCrypto_step2_currency-label">
                                <div class="purchaseCrypto_step2_market-button-label-text">+10%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="purchaseCrypto_step2_limit-price-container">
                      <div class="purchaseCrypto_step2_limit-price-input-container">
                        <div class="purchaseCrypto_step2_limit-price-label">Selling</div>
                        <div class="purchaseCrypto_step2_selling-amount-container">
                          <div class="purchaseCrypto_step2_currency-label-container">
                            <div class="purchaseCrypto_step2_currency-label">
                              <div class="purchaseCrypto_step2_selling-amount-label-text">0.12 ETH</div>
                            </div>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" class="purchaseCrypto_step2_wallet-ico">
                            <path d="M12.6673 4.66667H12.0007V4C12.0007 3.46957 11.7899 2.96086 11.4149 2.58579C11.0398 2.21071 10.5311 2 10.0007 2H3.33398C2.80355 2 2.29484 2.21071 1.91977 2.58579C1.5447 2.96086 1.33398 3.46957 1.33398 4V4V12C1.33398 12.5304 1.5447 13.0391 1.91977 13.4142C2.29484 13.7893 2.80355 14 3.33398 14H12.6673C13.1977 14 13.7065 13.7893 14.0815 13.4142C14.4566 13.0391 14.6673 12.5304 14.6673 12V6.66667C14.6673 6.13623 14.4566 5.62753 14.0815 5.25245C13.7065 4.87738 13.1977 4.66667 12.6673 4.66667ZM3.33398 3.33333H10.0007C10.1775 3.33333 10.347 3.40357 10.4721 3.5286C10.5971 3.65362 10.6673 3.82319 10.6673 4V4.66667H3.33398C3.15717 4.66667 2.9876 4.59643 2.86258 4.4714C2.73756 4.34638 2.66732 4.17681 2.66732 4C2.66732 3.82319 2.73756 3.65362 2.86258 3.5286C2.9876 3.40357 3.15717 3.33333 3.33398 3.33333V3.33333ZM13.334 10H12.6673C12.4905 10 12.3209 9.92976 12.1959 9.80474C12.0709 9.67971 12.0007 9.51014 12.0007 9.33333C12.0007 9.15652 12.0709 8.98695 12.1959 8.86193C12.3209 8.7369 12.4905 8.66667 12.6673 8.66667H13.334V10ZM13.334 7.33333H12.6673C12.1369 7.33333 11.6282 7.54405 11.2531 7.91912C10.878 8.29419 10.6673 8.8029 10.6673 9.33333C10.6673 9.86377 10.878 10.3725 11.2531 10.7475C11.6282 11.1226 12.1369 11.3333 12.6673 11.3333H13.334V12C13.334 12.1768 13.2637 12.3464 13.1387 12.4714C13.0137 12.5964 12.8441 12.6667 12.6673 12.6667H3.33398C3.15717 12.6667 2.9876 12.5964 2.86258 12.4714C2.73756 12.3464 2.66732 12.1768 2.66732 12V5.88667C2.8815 5.96201 3.10694 6.00034 3.33398 6H12.6673C12.8441 6 13.0137 6.07024 13.1387 6.19526C13.2637 6.32029 13.334 6.48986 13.334 6.66667V7.33333Z" fill="#7A7A7A"></path>
                          </svg>
                        </div>
                      </div>
                      <div class="purchaseCrypto_step2_limit-price-input-container">
                        <div class="purchaseCrypto_step2_selling-currency-container">
                          <div class="purchaseCrypto_step2_market-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 32 32" fill="none" class="purchaseCrypto_step2_cur-ico">
                              <g clip-path="url(#clip0_486_2193)">
                                <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#627EEA"></path>
                                <path d="M16.498 4V12.87L23.995 16.22L16.498 4Z" fill="white" fill-opacity="0.602"></path>
                                <path d="M16.498 4L9 16.22L16.498 12.87V4Z" fill="white"></path>
                                <path d="M16.498 21.9731V28.0001L24 17.6211L16.498 21.9731Z" fill="white" fill-opacity="0.602"></path>
                                <path d="M16.498 28.0001V21.9721L9 17.6211L16.498 28.0001Z" fill="white"></path>
                                <path d="M16.498 20.5721L23.995 16.2191L16.498 12.8711V20.5721Z" fill="white" fill-opacity="0.2"></path>
                                <path d="M9 16.2191L16.498 20.5721V12.8711L9 16.2191Z" fill="white" fill-opacity="0.602"></path>
                              </g>
                              <defs>
                                <clipPath id="clip0_486_2193">
                                  <rect width="32" height="32" fill="white"></rect>
                                </clipPath>
                              </defs>
                            </svg>
                            <div class="purchaseCrypto_step2_currency-label-container">
                              <div class="purchaseCrypto_step2_currency-label">
                                <div class="purchaseCrypto_step2_selling-currency-label-text">ETH</div>
                              </div>
                            </div>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="purchaseCrypto_step2_chev-ico">
                              <path d="M16.9997 9.1697C16.8123 8.98345 16.5589 8.87891 16.2947 8.87891C16.0305 8.87891 15.7771 8.98345 15.5897 9.1697L11.9997 12.7097L8.4597 9.1697C8.27234 8.98345 8.01889 8.87891 7.7547 8.87891C7.49052 8.87891 7.23707 8.98345 7.0497 9.1697C6.95598 9.26266 6.88158 9.37326 6.83081 9.49512C6.78004 9.61698 6.75391 9.74769 6.75391 9.8797C6.75391 10.0117 6.78004 10.1424 6.83081 10.2643C6.88158 10.3861 6.95598 10.4967 7.0497 10.5897L11.2897 14.8297C11.3827 14.9234 11.4933 14.9978 11.6151 15.0486C11.737 15.0994 11.8677 15.1255 11.9997 15.1255C12.1317 15.1255 12.2624 15.0994 12.3843 15.0486C12.5061 14.9978 12.6167 14.9234 12.7097 14.8297L16.9997 10.5897C17.0934 10.4967 17.1678 10.3861 17.2186 10.2643C17.2694 10.1424 17.2955 10.0117 17.2955 9.8797C17.2955 9.74769 17.2694 9.61698 17.2186 9.49512C17.1678 9.37326 17.0934 9.26266 16.9997 9.1697Z" fill="#7A7A7A"></path>
                            </svg>
                        </div>
                        <div class="purchaseCrypto_step2_price-input-container">
                          <div class="purchaseCrypto_step2_price-input">0.00</div>
                          <div class="purchaseCrypto_step2_selling-price-usd">$0</div>
                        </div>
                      </div>
                    </div>
                    <div class="purchaseCrypto_step2_exch-ico">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="purchaseCrypto_step2_exch-ico-inner">
                        <path d="M10.0002 5.99986C9.73497 5.99986 9.48062 6.10522 9.29308 6.29275C9.10554 6.48029 9.00019 6.73465 9.00019 6.99986L9.00019 18.5899L6.71019 16.2899C6.52188 16.1016 6.26649 15.9958 6.00019 15.9958C5.73388 15.9958 5.47849 16.1016 5.29019 16.2899C5.10188 16.4782 4.99609 16.7336 4.99609 16.9999C4.99609 17.2662 5.10188 17.5216 5.29019 17.7099L9.29019 21.7099C9.43081 21.8486 9.60938 21.9426 9.80337 21.98C9.99736 22.0174 10.1981 21.9964 10.3802 21.9199C10.5628 21.8448 10.7191 21.7174 10.8295 21.5537C10.9398 21.39 10.9992 21.1973 11.0002 20.9999L11.0002 6.99986C11.0002 6.73465 10.8948 6.48029 10.7073 6.29275C10.5198 6.10522 10.2654 5.99986 10.0002 5.99986ZM13.6202 2.07986C13.4376 2.15488 13.2812 2.28228 13.1709 2.446C13.0606 2.60972 13.0012 2.80244 13.0002 2.99986L13.0002 16.9999C13.0002 17.2651 13.1055 17.5194 13.2931 17.707C13.4806 17.8945 13.735 17.9999 14.0002 17.9999C14.2654 17.9999 14.5198 17.8945 14.7073 17.707C14.8948 17.5194 15.0002 17.2651 15.0002 16.9999L15.0002 5.40986L17.2902 7.70986C17.3831 7.80359 17.4937 7.87798 17.6156 7.92875C17.7375 7.97952 17.8682 8.00566 18.0002 8.00566C18.1322 8.00566 18.2629 7.97952 18.3848 7.92875C18.5066 7.87798 18.6172 7.80359 18.7102 7.70986C18.8039 7.6169 18.8783 7.5063 18.9291 7.38444C18.9798 7.26258 19.006 7.13187 19.006 6.99986C19.006 6.86785 18.9798 6.73714 18.9291 6.61528C18.8783 6.49343 18.8039 6.38283 18.7102 6.28986L14.7102 2.28986C14.5696 2.1511 14.391 2.05711 14.197 2.01973C14.003 1.98236 13.8023 2.00328 13.6202 2.07986V2.07986Z" fill="white"></path>
                      </svg>
                    </div>
                    <div class="purchaseCrypto_step2_limit-price-container">
                      <div class="purchaseCrypto_step2_limit-price-input-container">
                        <div class="purchaseCrypto_step2_limit-price-label">Buying</div>
                        <div class="purchaseCrypto_step2_selling-amount-container">
                          <div class="purchaseCrypto_step2_currency-label-container">
                            <div class="purchaseCrypto_step2_currency-label">
                              <div class="purchaseCrypto_step2_selling-amount-label-text">0 USDC</div>
                            </div>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" class="purchaseCrypto_step2_wallet-ico">
                            <path d="M12.6673 4.66667H12.0007V4C12.0007 3.46957 11.7899 2.96086 11.4149 2.58579C11.0398 2.21071 10.5311 2 10.0007 2H3.33398C2.80355 2 2.29484 2.21071 1.91977 2.58579C1.5447 2.96086 1.33398 3.46957 1.33398 4V4V12C1.33398 12.5304 1.5447 13.0391 1.91977 13.4142C2.29484 13.7893 2.80355 14 3.33398 14H12.6673C13.1977 14 13.7065 13.7893 14.0815 13.4142C14.4566 13.0391 14.6673 12.5304 14.6673 12V6.66667C14.6673 6.13623 14.4566 5.62753 14.0815 5.25245C13.7065 4.87738 13.1977 4.66667 12.6673 4.66667ZM3.33398 3.33333H10.0007C10.1775 3.33333 10.347 3.40357 10.4721 3.5286C10.5971 3.65362 10.6673 3.82319 10.6673 4V4.66667H3.33398C3.15717 4.66667 2.9876 4.59643 2.86258 4.4714C2.73756 4.34638 2.66732 4.17681 2.66732 4C2.66732 3.82319 2.73756 3.65362 2.86258 3.5286C2.9876 3.40357 3.15717 3.33333 3.33398 3.33333V3.33333ZM13.334 10H12.6673C12.4905 10 12.3209 9.92976 12.1959 9.80474C12.0709 9.67971 12.0007 9.51014 12.0007 9.33333C12.0007 9.15652 12.0709 8.98695 12.1959 8.86193C12.3209 8.7369 12.4905 8.66667 12.6673 8.66667H13.334V10ZM13.334 7.33333H12.6673C12.1369 7.33333 11.6282 7.54405 11.2531 7.91912C10.878 8.29419 10.6673 8.8029 10.6673 9.33333C10.6673 9.86377 10.878 10.3725 11.2531 10.7475C11.6282 11.1226 12.1369 11.3333 12.6673 11.3333H13.334V12C13.334 12.1768 13.2637 12.3464 13.1387 12.4714C13.0137 12.5964 12.8441 12.6667 12.6673 12.6667H3.33398C3.15717 12.6667 2.9876 12.5964 2.86258 12.4714C2.73756 12.3464 2.66732 12.1768 2.66732 12V5.88667C2.8815 5.96201 3.10694 6.00034 3.33398 6H12.6673C12.8441 6 13.0137 6.07024 13.1387 6.19526C13.2637 6.32029 13.334 6.48986 13.334 6.66667V7.33333Z" fill="#7A7A7A"></path>
                          </svg>
                        </div>
                      </div>
                      <div class="purchaseCrypto_step2_limit-price-input-container">
                        <div class="purchaseCrypto_step2_selling-currency-container">
                          <div class="purchaseCrypto_step2_market-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 32 32" fill="none" class="purchaseCrypto_step2_cur-ico">
                              <g clip-path="url(#clip0_486_2221)">
                                <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#3E73C4"></path>
                                <path d="M20.0196 18.1243C20.0196 16.0003 18.7396 15.2723 16.1796 14.9683C14.3516 14.7253 13.9866 14.2403 13.9866 13.3903C13.9866 12.5403 14.5966 11.9943 15.8146 11.9943C16.9116 11.9943 17.5216 12.3583 17.8256 13.2693C17.8573 13.3573 17.9152 13.4336 17.9915 13.4878C18.0679 13.542 18.159 13.5714 18.2526 13.5722H19.2276C19.2839 13.5738 19.34 13.5638 19.3923 13.543C19.4447 13.5222 19.4923 13.491 19.5322 13.4512C19.5721 13.4115 19.6035 13.3641 19.6246 13.3118C19.6456 13.2596 19.6559 13.2036 19.6546 13.1473V13.0873C19.5355 12.4822 19.202 11.8269 18.706 11.3768C18.2099 10.9267 17.5792 10.653 16.9116 10.5982V9.14225C16.9116 8.89925 16.7286 8.71725 16.4246 8.65625H15.5096C15.2666 8.65625 15.0836 8.83825 15.0226 9.14225V10.5383C13.1936 10.7803 12.0366 11.9943 12.0366 13.5123C12.0366 15.5143 13.2546 16.3033 15.8146 16.6073C17.5216 16.9103 18.0696 17.2753 18.0696 18.2463C18.0696 19.2163 17.2166 19.8843 16.0586 19.8843C14.4736 19.8843 13.9256 19.2173 13.7426 18.3063C13.6826 18.0643 13.4986 17.9423 13.3156 17.9423H12.2796C12.2234 17.9409 12.1675 17.9509 12.1152 17.9718C12.063 17.9927 12.0155 18.0239 11.9757 18.0636C11.9359 18.1034 11.9045 18.1507 11.8836 18.2029C11.8626 18.2551 11.8524 18.311 11.8536 18.3673V18.4273C12.0966 19.9453 13.0726 21.0373 15.0836 21.3413V22.7983C15.0836 23.0403 15.2666 23.2233 15.5706 23.2833H16.4856C16.7286 23.2833 16.9116 23.1013 16.9726 22.7983V21.3403C18.8016 21.0373 20.0196 19.7623 20.0196 18.1233V18.1243Z" fill="white"></path>
                                <path d="M12.8913 24.497C8.13731 22.797 5.69931 17.517 7.46731 12.844C8.38131 10.294 10.3923 8.353 12.8913 7.442C13.1353 7.321 13.2563 7.139 13.2563 6.835V5.985C13.2563 5.743 13.1353 5.561 12.8913 5.5C12.8303 5.5 12.7083 5.5 12.6473 5.56C11.2757 5.98832 10.0024 6.68373 8.90073 7.60617C7.79902 8.52862 6.89066 9.65988 6.22795 10.9348C5.56525 12.2098 5.16128 13.6032 5.03932 15.0349C4.91736 16.4666 5.0798 17.9083 5.51731 19.277C6.61331 22.677 9.23431 25.287 12.6473 26.379C12.8913 26.5 13.1353 26.379 13.1953 26.136C13.2563 26.076 13.2563 26.014 13.2563 25.893V25.043C13.2563 24.861 13.0743 24.619 12.8913 24.497V24.497ZM19.3513 5.561C19.1073 5.439 18.8633 5.561 18.8033 5.803C18.7423 5.864 18.7423 5.925 18.7423 6.046V6.896C18.7423 7.139 18.9243 7.381 19.1073 7.503C23.8613 9.203 26.2993 14.483 24.5313 19.156C23.6173 21.706 21.6063 23.647 19.1073 24.558C18.8633 24.679 18.7423 24.861 18.7423 25.165V26.015C18.7423 26.257 18.8633 26.439 19.1073 26.5C19.1683 26.5 19.2903 26.5 19.3513 26.44C20.7229 26.0117 21.9962 25.3163 23.0979 24.3938C24.1996 23.4714 25.108 22.3401 25.7707 21.0652C26.4334 19.7902 26.8373 18.3968 26.9593 16.9651C27.0813 15.5334 26.9188 14.0917 26.4813 12.723C25.3853 9.263 22.7033 6.653 19.3513 5.561V5.561Z" fill="white"></path>
                              </g>
                              <defs>
                                <clipPath id="clip0_486_2221">
                                  <rect width="32" height="32" fill="white"></rect>
                                </clipPath>
                              </defs>
                            </svg>
                            <div class="purchaseCrypto_step2_currency-label-container">
                              <div class="purchaseCrypto_step2_currency-label">
                                <div class="purchaseCrypto_step2_selling-currency-label-text">USDC</div>
                              </div>
                            </div>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="purchaseCrypto_step2_chev-ico">
                              <path d="M16.9997 9.1697C16.8123 8.98345 16.5589 8.87891 16.2947 8.87891C16.0305 8.87891 15.7771 8.98345 15.5897 9.1697L11.9997 12.7097L8.4597 9.1697C8.27234 8.98345 8.01889 8.87891 7.7547 8.87891C7.49052 8.87891 7.23707 8.98345 7.0497 9.1697C6.95598 9.26266 6.88158 9.37326 6.83081 9.49512C6.78004 9.61698 6.75391 9.74769 6.75391 9.8797C6.75391 10.0117 6.78004 10.1424 6.83081 10.2643C6.88158 10.3861 6.95598 10.4967 7.0497 10.5897L11.2897 14.8297C11.3827 14.9234 11.4933 14.9978 11.6151 15.0486C11.737 15.0994 11.8677 15.1255 11.9997 15.1255C12.1317 15.1255 12.2624 15.0994 12.3843 15.0486C12.5061 14.9978 12.6167 14.9234 12.7097 14.8297L16.9997 10.5897C17.0934 10.4967 17.1678 10.3861 17.2186 10.2643C17.2694 10.1424 17.2955 10.0117 17.2955 9.8797C17.2955 9.74769 17.2694 9.61698 17.2186 9.49512C17.1678 9.37326 17.0934 9.26266 16.9997 9.1697Z" fill="#7A7A7A"></path>
                            </svg>
                        </div>
                        <div class="purchaseCrypto_step2_price-input-container">
                          <div class="purchaseCrypto_step2_selling-price-usd">$0</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const view = rootEl.querySelector("[data-sim-view]");
    const tabBtn1 = rootEl.querySelector("[data-sim-tab-btn-1]");
    const tabBtn2 = rootEl.querySelector("[data-sim-tab-btn-2]");
    const tabContain = rootEl.querySelector("[data-sim-tab-contain]");

    if (!view || !tabBtn1 || !tabBtn2 || !tabContain) {
      console.warn("[purchaseCrypto_step2] Missing required elements.");
      return;
    }

    // ----------------------------------
    // Intro animation: fade in + up
    // ----------------------------------
    if (gs) {
      gs.set(view, { autoAlpha: 0, y: 60 });
      gs.to(view, {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    } else {
      view.style.opacity = "1";
      view.style.transform = "translateY(0)";
    }

    // ----------------------------------
    // Tab behaviour
    // ----------------------------------
    const syncTabState = () => {
      if (tabBtn2.classList.contains("is--active")) {
        tabContain.classList.add("is--limit");
      } else {
        tabContain.classList.remove("is--limit");
      }
    };

    // initial sync (in case classes change from CMS or other scripts)
    syncTabState();

    let completed = false;
    const safeDone = () => {
      if (completed) return;
      completed = true;
      done?.(); // uses your existing done helper (complete/resolve/onSuccess/next)
    };

    const handleMarketClick = () => {
      tabBtn1.classList.add("is--active");
      tabBtn2.classList.remove("is--active");
      syncTabState();

      // complete step after 1s delay
      setTimeout(() => {
        safeDone();
      }, 1000);
    };

    const handleLimitClick = () => {
      tabBtn2.classList.add("is--active");
      tabBtn1.classList.remove("is--active");
      syncTabState();
    };

    tabBtn1.addEventListener("click", handleMarketClick);
    tabBtn2.addEventListener("click", handleLimitClick);
  },
};
