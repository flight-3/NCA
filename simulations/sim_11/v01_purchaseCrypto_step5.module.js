// purchaseCrypto_step5.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = window.gsap || null;

    if (!rootEl) return;

    const STYLE_ID = "purchaseCrypto_step5_styles";

    if (!document.getElementById(STYLE_ID)) {
      const styleEl = document.createElement("style");
      styleEl.id = STYLE_ID;
      styleEl.textContent = `
.button-large {
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

.buttons-2 {
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

.canvas-wrap {
  grid-row-gap: 64px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 854px;
  display: flex;
  overflow: hidden;
}

.container {
  grid-row-gap: 40px;
  background-color: #fff;
  border-radius: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  max-width: 562px;
  padding: 40px 16px 40px 40px;
  display: flex;
  overflow: hidden;
  box-shadow: 0 4px 20px #0000001a;
}

.container_inner {
  grid-row-gap: 24px;
  flex-direction: column;
  flex: none;
  justify-content: flex-start;
  align-items: stretch;
  max-height: 650px;
  padding-right: 18px;
  display: flex;
  overflow: hidden scroll;
}

.container_inner::-webkit-scrollbar {
  width: 6px;
}
.container_inner::-webkit-scrollbar-track {
  background: #EDEDED;
  border-width: 6px;
  border-style: solid;
  border-color: #EDEDED;
  border-radius: 12px;
}
.container_inner::-webkit-scrollbar-thumb {
  background: rgb(246, 76, 7);
  border-width: 6px;
  border-style: solid;
  border-color: rgb(246, 76, 7);
  border-radius: 12px;
}

.main-container-3 {
  grid-row-gap: 40px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  max-width: 482px;
  display: flex;
}

.header-container {
  grid-row-gap: 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  display: flex;
}

.title-container {
  grid-row-gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: flex;
}

.title-style {
  color: #2f2f30;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2rem;
  font-weight: 500;
  line-height: 130%;
}

.button-container {
  grid-column-gap: 8px;
  background-color: #f9f9f9;
  border: 2px solid #ebebeb;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  padding: 6px;
  display: flex;
}

.buttons {
  grid-column-gap: 10px;
  color: #7a7a7a;
  letter-spacing: -.02em;
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

.buttons.is--active {
  color: #fff;
  background-color: #f64c07;
}

.container-2 {
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 482px;
  max-width: 482px;
  display: flex;
  overflow: hidden;
}

.tab-container {
  flex: 0 auto;
  justify-content: flex-start;
  align-items: flex-start;
  text-decoration: none;
  display: flex;
}

.limit-price-container {
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
}

.limit-price-label {
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

.limit-price-input-container {
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-decoration: none;
  display: flex;
}

.currency-label-container {
  grid-row-gap: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-decoration: none;
  display: flex;
}

.currency-label {
  grid-column-gap: 8px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: flex-start;
  text-decoration: none;
  display: flex;
}

.price-input-container {
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  text-decoration: none;
  display: flex;
}

.price-input {
  opacity: .2;
  color: #1f1f1f;
  text-align: right;
  letter-spacing: -.04em;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.price-input.is--value {
  opacity: 1;
}

.price-input.is--error {
  color: #d93a3a;
  opacity: 1;
}

.market-button {
  grid-column-gap: 12px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  display: flex;
}

.selling-amount-container {
  grid-column-gap: 8px;
  border-radius: 1000px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  display: flex;
}

.selling-amount-label-text {
  color: #7a7a7a;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .8125rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.selling-currency-container {
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
  position: relative;
}

.selling-currency-label-text {
  color: #1f1f1f;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 130%;
  text-decoration: none;
}

.selling-price-usd {
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

.right-container {
  grid-row-gap: 28px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  min-width: 482px;
  max-width: 482px;
  text-decoration: none;
  display: flex;
}

.right-top-container {
  grid-row-gap: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  text-decoration: none;
  display: flex;
  position: relative;
}

.right-selling-container {
  grid-row-gap: 8px;
  background-color: #f9f9f9;
  border: 2px solid #f64c07;
  border-radius: 12px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 24px;
  text-decoration: none;
  display: flex;
}

.right-slippage-container {
  grid-column-gap: 40px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  text-decoration: none;
  display: flex;
}

.right-slippage-input-container {
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

.right-slippage-input-text {
  color: #7a7a7a;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
  cursor: default;
}

.right-slippage-input-text.is--success {
  color: #16a34a;
}

.buttons-4 {
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

.button-large-4 {
  color: #7a7a7a;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .875rem;
  font-weight: 600;
  line-height: 130%;
  text-decoration: none;
}

.buttons-5 {
  grid-column-gap: 10px;
  background-color: #f64c07;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  height: 56px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  cursor: pointer;
}

.button-large-5 {
  color: #fff;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 140%;
  text-decoration: none;
}

.cur-ico {
  background-color: #0000001a;
  border-radius: 100%;
  flex: none;
  width: 32px;
  height: 32px;
  overflow: hidden;
}

.exch-ico {
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
  align-self: center;
}

.exch-ico-inner {
  flex: none;
  width: 24px;
  height: 24px;
}

.wallet-ico {
  flex: none;
  width: 16px;
  height: 16px;
}

.chev-ico {
  flex: none;
  width: 24px;
  height: 24px;
}

.container-3 {
  grid-row-gap: 40px;
  flex-direction: column;
  flex: none;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  max-width: 482px;
  padding-top: 32px;
  text-decoration: none;
  display: flex;
}

.info-container {
  grid-row-gap: 12px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 120px;
  display: flex;
}

.exchange-rate {
  color: #7a7a7a;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 600;
  line-height: 130%;
  text-decoration: none;
}

.fee-container {
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-decoration: none;
  display: flex;
}

.fee-label {
  color: #7a7a7a;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.fee-value-container {
  grid-column-gap: 8px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  display: flex;
}

.fee-value {
  color: #1f1f1f;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 600;
  line-height: 130%;
  text-decoration: none;
}

.cur-ico-img {
  object-fit: cover;
  width: 32px;
  height: 32px;
}

.sim-max-row {
  color: #7a7a7a;
  font-size: 0.75rem;
  line-height: 130%;
}
      `;
      document.head.appendChild(styleEl);
    }

    rootEl.innerHTML = `
      <div class="canvas-wrap">
        <div data-sim-view data-sim-view-1 class="container">
          <div class="container_inner">
            <div class="main-container-3">
              <div class="header-container">
                <div class="title-container">
                  <div class="title-style">Purchase</div>
                </div>
                <div class="button-container">
                  <div class="buttons is--active">
                    <div>Market</div>
                  </div>
                  <div class="buttons">
                    <div>Limit</div>
                  </div>
                </div>
              </div>
              <div class="container-2">
                <div data-sim-tab-contain class="tab-container">
                  <div data-sim-tab-1 class="right-container">
                    <div class="right-top-container">
                      <div class="right-selling-container">
                        <div class="limit-price-input-container">
                          <div class="limit-price-label">Selling</div>
                          <div class="selling-amount-container">
                            <div class="currency-label-container">
                              <div class="currency-label">
                                <div class="selling-amount-label-text sim-max-row">
                                  Balance:
                                  <span data-sim-max-selling>0.1826</span>
                                  <span data-sim-selected-selling>ETH</span>
                                </div>
                              </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" class="wallet-ico">
                              <path d="M12.6673 4.66667H12.0007V4C12.0007 3.46957 11.7899 2.96086 11.4149 2.58579C11.0398 2.21071 10.5311 2 10.0007 2H3.33398C2.80355 2 2.29484 2.21071 1.91977 2.58579C1.5447 2.96086 1.33398 3.46957 1.33398 4V4V12C1.33398 12.5304 1.5447 13.0391 1.91977 13.4142C2.29484 13.7893 2.80355 14 3.33398 14H12.6673C13.1977 14 13.7065 13.7893 14.0815 13.4142C14.4566 13.0391 14.6673 12.5304 14.6673 12V6.66667C14.6673 6.13623 14.4566 5.62753 14.0815 5.25245C13.7065 4.87738 13.1977 4.66667 12.6673 4.66667ZM3.33398 3.33333H10.0007C10.1775 3.33333 10.347 3.40357 10.4721 3.5286C10.5971 3.65362 10.6673 3.82319 10.6673 4V4.66667H3.33398C3.15717 4.66667 2.9876 4.59643 2.86258 4.4714C2.73756 4.34638 2.66732 4.17681 2.66732 4C2.66732 3.82319 2.73756 3.65362 2.86258 3.5286C2.9876 3.40357 3.15717 3.33333 3.33398 3.33333V3.33333ZM13.334 10H12.6673C12.4905 10 12.3209 9.92976 12.1959 9.80474C12.0709 9.67971 12.0007 9.51014 12.0007 9.33333C12.0007 9.15652 12.0709 8.98695 12.1959 8.86193C12.3209 8.7369 12.4905 8.66667 12.6673 8.66667H13.334V10ZM13.334 7.33333H12.6673C12.1369 7.33333 11.6282 7.54405 11.2531 7.91912C10.878 8.29419 10.6673 8.8029 10.6673 9.33333C10.6673 9.86377 10.878 10.3725 11.2531 10.7475C11.6282 11.1226 12.1369 11.3333 12.6673 11.3333H13.334V12C13.334 12.1768 13.2637 12.3464 13.1387 12.4714C13.0137 12.5964 12.8441 12.6667 12.6673 12.6667H3.33398C3.15717 12.6667 2.9876 12.5964 2.86258 12.4714C2.73756 12.3464 2.66732 12.1768 2.66732 12V5.88667C2.8815 5.96201 3.10694 6.00034 3.33398 6H12.6673C12.8441 6 13.0137 6.07024 13.1387 6.19526C13.2637 6.32029 13.334 6.48986 13.334 6.66667V7.33333Z" fill="#7A7A7A"></path>
                            </svg>
                          </div>
                        </div>
                        <div class="limit-price-input-container">
                          <div data-sim-selling-crypto class="selling-currency-container">
                            <div class="market-button">
                              <div data-sim-selected-selling-ico class="cur-ico">
                                <img src="https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5cad7c2be8398af2e8_eth-logo.svg" class="cur-ico-img">
                              </div>
                              <div class="currency-label-container">
                                <div class="currency-label">
                                  <div data-sim-selected-selling class="selling-currency-label-text">ETH</div>
                                </div>
                              </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="chev-ico">
                              <path d="M16.9997 9.1697C16.8123 8.98345 16.5589 8.87891 16.2947 8.87891C16.0305 8.87891 15.7771 8.98345 15.5897 9.1697L11.9997 12.7097L8.4597 9.1697C8.27234 8.98345 8.01889 8.87891 7.7547 8.87891C7.49052 8.87891 7.23707 8.98345 7.0497 9.1697C6.95598 9.26266 6.88158 9.37326 6.83081 9.49512C6.78004 9.61698 6.75391 9.74769 6.75391 9.8797C6.75391 10.0117 6.78004 10.1424 6.83081 10.2643C6.88158 10.3861 6.95598 10.4967 7.0497 10.5897L11.2897 14.8297C11.3827 14.9234 11.4933 14.9978 11.6151 15.0486C11.737 15.0994 11.8677 15.1255 11.9997 15.1255C12.1317 15.1255 12.2624 15.0994 12.3843 15.0486C12.5061 14.9978 12.6167 14.9234 12.7097 14.8297L16.9997 10.5897C17.0934 10.4967 17.1678 10.3861 17.2186 10.2643C17.2694 10.1424 17.2955 10.0117 17.2955 9.8797C17.2955 9.74769 17.2694 9.61698 17.2186 9.49512C17.1678 9.37326 17.0934 9.26266 16.9997 9.1697Z" fill="#7A7A7A"></path>
                            </svg>
                          </div>
                          <div class="price-input-container">
                            <div data-sim-selling-input class="price-input">0.00</div>
                            <div data-sim-selling-usd-value class="selling-price-usd">$0</div>
                          </div>
                        </div>
                      </div>
                      <div class="exch-ico">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="exch-ico-inner">
                          <path d="M10.0002 5.99986C9.73497 5.99986 9.48062 6.10522 9.29308 6.29275C9.10554 6.48029 9.00019 6.73465 9.00019 6.99986L9.00019 18.5899L6.71019 16.2899C6.52188 16.1016 6.26649 15.9958 6.00019 15.9958C5.73388 15.9958 5.47849 16.1016 5.29019 16.2899C5.10188 16.4782 4.99609 16.7336 4.99609 16.9999C4.99609 17.2662 5.10188 17.5216 5.29019 17.7099L9.29019 21.7099C9.43081 21.8486 9.60938 21.9426 9.80337 21.98C9.99736 22.0174 10.1981 21.9964 10.3802 21.9199C10.5628 21.8448 10.7191 21.7174 10.8295 21.5537C10.9398 21.39 10.9992 21.1973 11.0002 20.9999L11.0002 6.99986C11.0002 6.73465 10.8948 6.48029 10.7073 6.29275C10.5198 6.10522 10.2654 5.99986 10.0002 5.99986ZM13.6202 2.07986C13.4376 2.15488 13.2812 2.28228 13.1709 2.446C13.0606 2.60972 13.0012 2.80244 13.0002 2.99986L13.0002 16.9999C13.0002 17.2651 13.1055 17.5194 13.2931 17.707C13.4806 17.8945 13.735 17.9999 14.0002 17.9999C14.2654 17.9999 14.5198 17.8945 14.7073 17.707C14.8948 17.5194 15.0002 17.2651 15.0002 16.9999L15.0002 5.40986L17.2902 7.70986C17.3831 7.80359 17.4937 7.87798 17.6156 7.92875C17.7375 7.97952 17.8682 8.00566 18.0002 8.00566C18.1322 8.00566 18.2629 7.97952 18.3848 7.92875C18.5066 7.87798 18.6172 7.80359 18.7102 7.70986C18.8039 7.6169 18.8783 7.5063 18.9291 7.38444C18.9798 7.26258 19.006 7.13187 19.006 6.99986C19.006 6.86785 18.9798 6.73714 18.9291 6.61528C18.8783 6.49343 18.8039 6.38283 18.7102 6.28986L14.7102 2.28986C14.5696 2.1511 14.391 2.05711 14.197 2.01973C14.003 1.98236 13.8023 2.00328 13.6202 2.07986V2.07986Z" fill="white"></path>
                        </svg>
                      </div>
                      <div class="limit-price-container">
                        <div class="limit-price-input-container">
                          <div class="limit-price-label">Buying</div>
                          <div class="selling-amount-container">
                            <div class="currency-label-container">
                              <div class="currency-label">
                                <div class="selling-amount-label-text">
                                  0 <span data-sim-selected-buying>USDC</span>
                                </div>
                              </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" class="wallet-ico">
                              <path d="M12.6673 4.66667H12.0007V4C12.0007 3.46957 11.7899 2.96086 11.4149 2.58579C11.0398 2.21071 10.5311 2 10.0007 2H3.33398C2.80355 2 2.29484 2.21071 1.91977 2.58579C1.5447 2.96086 1.33398 3.46957 1.33398 4V4V12C1.33398 12.5304 1.5447 13.0391 1.91977 13.4142C2.29484 13.7893 2.80355 14 3.33398 14H12.6673C13.1977 14 13.7065 13.7893 14.0815 13.4142C14.4566 13.0391 14.6673 12.5304 14.6673 12V6.66667C14.6673 6.13623 14.4566 5.62753 14.0815 5.25245C13.7065 4.87738 13.1977 4.66667 12.6673 4.66667ZM3.33398 3.33333H10.0007C10.1775 3.33333 10.347 3.40357 10.4721 3.5286C10.5971 3.65362 10.6673 3.82319 10.6673 4V4.66667H3.33398C3.15717 4.66667 2.9876 4.59643 2.86258 4.4714C2.73756 4.34638 2.66732 4.17681 2.66732 4C2.66732 3.82319 2.73756 3.65362 2.86258 3.5286C2.9876 3.40357 3.15717 3.33333 3.33398 3.33333V3.33333ZM13.334 10H12.6673C12.4905 10 12.3209 9.92976 12.1959 9.80474C12.0709 9.67971 12.0007 9.51014 12.0007 9.33333C12.0007 9.15652 12.0709 8.98695 12.1959 8.86193C12.3209 8.7369 12.4905 8.66667 12.6673 8.66667H13.334V10ZM13.334 7.33333H12.6673C12.1369 7.33333 11.6282 7.54405 11.2531 7.91912C10.878 8.29419 10.6673 8.8029 10.6673 9.33333C10.6673 9.86377 10.878 10.3725 11.2531 10.7475C11.6282 11.1226 12.1369 11.3333 12.6673 11.3333H13.334V12C13.334 12.1768 13.2637 12.3464 13.1387 12.4714C13.0137 12.5964 12.8441 12.6667 12.6673 12.6667H3.33398C3.15717 12.6667 2.9876 12.5964 2.86258 12.4714C2.73756 12.3464 2.66732 12.1768 2.66732 12V5.88667C2.8815 5.96201 3.10694 6.00034 3.33398 6H12.6673C12.8441 6 13.0137 6.07024 13.1387 6.19526C13.2637 6.32029 13.334 6.48986 13.334 6.66667V7.33333Z" fill="#7A7A7A"></path>
                            </svg>
                          </div>
                        </div>
                        <div class="limit-price-input-container">
                          <div data-sim-buying-crypto class="selling-currency-container">
                            <div class="market-button">
                              <div data-sim-selected-buying-ico class="cur-ico">
                                <img src="https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5c5c1e6e07d92c9228_usdc-logo.svg" class="cur-ico-img">
                              </div>
                              <div class="currency-label-container">
                                <div class="currency-label">
                                  <div data-sim-selected-buying class="selling-currency-label-text">USDC</div>
                                </div>
                              </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="chev-ico">
                              <path d="M16.9997 9.1697C16.8123 8.98345 16.5589 8.87891 16.2947 8.87891C16.0305 8.87891 15.7771 8.98345 15.5897 9.1697L11.9997 12.7097L8.4597 9.1697C8.27234 8.98345 8.01889 8.87891 7.7547 8.87891C7.49052 8.87891 7.23707 8.98345 7.0497 9.1697C6.95598 9.26266 6.88158 9.37326 6.83081 9.49512C6.78004 9.61698 6.75391 9.74769 6.75391 9.8797C6.75391 10.0117 6.78004 10.1424 6.83081 10.2643C6.88158 10.3861 6.95598 10.4967 7.0497 10.5897L11.2897 14.8297C11.3827 14.9234 11.4933 14.9978 11.6151 15.0486C11.737 15.0994 11.8677 15.1255 11.9997 15.1255C12.1317 15.1255 12.2624 15.0994 12.3843 15.0486C12.5061 14.9978 12.6167 14.9234 12.7097 14.8297L16.9997 10.5897C17.0934 10.4967 17.1678 10.3861 17.2186 10.2643C17.2694 10.1424 17.2955 10.0117 17.2955 9.8797C17.2955 9.74769 17.2694 9.61698 17.2186 9.49512C17.1678 9.37326 17.0934 9.26266 16.9997 9.1697Z" fill="#7A7A7A"></path>
                            </svg>
                          </div>
                          <div class="price-input-container">
                            <div data-sim-buying-input class="price-input">0.00</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="right-slippage-container">
                      <div class="limit-price-label">Max slippage</div>
                      <div class="right-slippage-input-container">
                        <div class="limit-price-input-container">
                          <div data-sim-slippage-input class="right-slippage-input-text">0.5%</div>
                          <div class="buttons-4">
                            <div class="button-large-4">Set auto</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div data-sim-view-2 class="container-3">
                      <div class="info-container">
                        <div data-sim-exchange-rate class="exchange-rate">
                          1 <span data-sim-selected-buying>USDC</span> = 0.00025098 <span data-sim-selected-selling>ETH</span>
                        </div>
                        <div class="fee-container">
                          <div class="fee-label">Fee (0.25%)</div>
                          <div class="fee-value-container">
                            <div data-sim-fee-value class="fee-value">&lt;$0.01</div>
                          </div>
                        </div>
                        <div class="fee-container">
                          <div class="fee-label">Network fee</div>
                          <div class="fee-value-container">
                            <div class="fee-value">0.0001 <span data-sim-network-fee>ETH</span></div>
                          </div>
                        </div>
                        <div class="fee-container">
                          <div class="fee-label">Price impact</div>
                          <div class="fee-value-container">
                            <div data-sim-price-impact class="fee-value">-0.02%</div>
                          </div>
                        </div>
                      </div>
                      <div data-sim-trigger-2 class="buttons-5">
                        <div class="button-large-5">Buy</div>
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

    const view = rootEl.querySelector("[data-sim-view-1]");
    if (!view) return;

    const sellingCryptoEl = view.querySelector("[data-sim-selling-crypto]");
    const buyingCryptoEl = view.querySelector("[data-sim-buying-crypto]");
    const sellingInputEl = view.querySelector("[data-sim-selling-input]");
    const buyingInputEl = view.querySelector("[data-sim-buying-input]");
    const sellingUsdEl = view.querySelector("[data-sim-selling-usd-value]");
    const exchangeRateEl = view.querySelector("[data-sim-exchange-rate]");
    const networkFeeEl = view.querySelector("[data-sim-network-fee]");
    const trigger2 = view.querySelector("[data-sim-trigger-2]");

    const selectedSellingTextEls = view.querySelectorAll(
      "[data-sim-selected-selling]"
    );
    const selectedBuyingTextEls = view.querySelectorAll(
      "[data-sim-selected-buying]"
    );
    const selectedSellingIconEl = view.querySelector(
      "[data-sim-selected-selling-ico] img"
    );
    const selectedBuyingIconEl = view.querySelector(
      "[data-sim-selected-buying-ico] img"
    );

    if (
      !sellingCryptoEl ||
      !buyingCryptoEl ||
      !sellingInputEl ||
      !buyingInputEl ||
      !sellingUsdEl ||
      !exchangeRateEl ||
      !networkFeeEl
    ) {
      console.warn("[purchaseCrypto_step5] Missing required elements.");
      return;
    }

    // These are pure display fields in this step
    sellingInputEl.removeAttribute("contenteditable");
    sellingInputEl.removeAttribute("tabindex");
    buyingInputEl.removeAttribute("contenteditable");
    buyingInputEl.removeAttribute("tabindex");

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

    const Cookies = window.Cookies || null;

    const CRYPTOS = {
      btc: {
        key: "btc",
        symbol: "BTC",
        name: "Bitcoin",
        img: "https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5cdc09e9e742cbdff5_btc-logo.svg",
      },
      eth: {
        key: "eth",
        symbol: "ETH",
        name: "Ethereum",
        img: "https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5cad7c2be8398af2e8_eth-logo.svg",
      },
      usdc: {
        key: "usdc",
        symbol: "USDC",
        name: "USDC",
        img: "https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5c5c1e6e07d92c9228_usdc-logo.svg",
      },
      bnb: {
        key: "bnb",
        symbol: "BNB",
        name: "BNB",
        img: "https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5c63efaa27da6d1b15_bnb-logo.svg",
      },
      xrp: {
        key: "xrp",
        symbol: "XRP",
        name: "XRP",
        img: "https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5cecd803e93aa1a9d1_xrp-logo.svg",
      },
    };

    const defaultPrices = {
      btc: 68000,
      eth: 3500,
      usdc: 1,
      bnb: 500,
      xrp: 0.6,
    };

    const prices = {
      ...defaultPrices,
      ...(props && props.prices ? props.prices : {}),
    };

    const getPrice = (key) => {
      const v = prices[key];
      return typeof v === "number" && v > 0 ? v : defaultPrices[key];
    };

    const state = {
      sellKey: "eth",
      buyKey: "usdc",
      sellAmount: 0,
      buyAmount: 0,
    };

    let completed = false;

    const safeDone = () => {
      if (completed) return;
      completed = true;
      done?.();
    };

    const formatAmount = (val) => {
      if (!val || !isFinite(val)) return "0.00";
      if (val < 0.00001) return val.toExponential(2);
      return val.toFixed(5).replace(/0+$/g, "").replace(/\.$/, "");
    };

    // Load stored data from step 3 cookie
    if (Cookies) {
      try {
        const raw = Cookies.get("nca_purchaseCrypto_step3");
        if (raw) {
          const saved = JSON.parse(raw);
          if (saved && typeof saved === "object") {
            if (saved.sellKey && CRYPTOS[saved.sellKey]) {
              state.sellKey = saved.sellKey;
            }
            if (saved.buyKey && CRYPTOS[saved.buyKey]) {
              state.buyKey = saved.buyKey;
            }
            if (typeof saved.sellAmount === "number" && saved.sellAmount > 0) {
              state.sellAmount = saved.sellAmount;
            }
            if (typeof saved.buyAmount === "number" && saved.buyAmount > 0) {
              state.buyAmount = saved.buyAmount;
            }
          }
        }
      } catch (e) {
        console.warn("[purchaseCrypto_step5] Failed to read cookie state.", e);
      }
    }

    const syncSelectedLabels = () => {
      const sellCrypto = CRYPTOS[state.sellKey];
      const buyCrypto = CRYPTOS[state.buyKey];

      if (sellCrypto) {
        selectedSellingTextEls.forEach((el) => {
          el.textContent = sellCrypto.symbol;
        });
        if (selectedSellingIconEl) selectedSellingIconEl.src = sellCrypto.img;
      }

      if (buyCrypto) {
        selectedBuyingTextEls.forEach((el) => {
          el.textContent = buyCrypto.symbol;
        });
        if (selectedBuyingIconEl) selectedBuyingIconEl.src = buyCrypto.img;
      }
    };

    const updateAmountsAndSummary = () => {
      const sellCrypto = CRYPTOS[state.sellKey];
      const buyCrypto = CRYPTOS[state.buyKey];

      const sellPrice = getPrice(state.sellKey);
      const buyPrice = getPrice(state.buyKey);

      // Selling amount display
      if (sellingInputEl) {
        if (state.sellAmount > 0) {
          sellingInputEl.textContent = formatAmount(state.sellAmount);
          sellingInputEl.classList.add("is--value");
        } else {
          sellingInputEl.textContent = "0.00";
          sellingInputEl.classList.remove("is--value");
        }
      }

      // Buying amount display
      if (buyingInputEl) {
        if (state.buyAmount > 0) {
          buyingInputEl.textContent = formatAmount(state.buyAmount);
          buyingInputEl.classList.add("is--value");
        } else {
          buyingInputEl.textContent = "0.00";
          buyingInputEl.classList.remove("is--value");
        }
      }

      // Selling USD value
      if (sellingUsdEl) {
        const usd = state.sellAmount * sellPrice;
        if (!state.sellAmount || !isFinite(usd)) {
          sellingUsdEl.textContent = "$0";
        } else if (usd < 0.01) {
          sellingUsdEl.textContent = "<$0.01";
        } else {
          sellingUsdEl.textContent = `$${usd.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          })}`;
        }
      }

      // Exchange rate: 1 SELL = RATE BUY
      if (exchangeRateEl && sellCrypto && buyCrypto) {
        let rate = 0;
        if (sellPrice && buyPrice) {
          rate = sellPrice / buyPrice;
        }

        let rateText;
        if (!rate || !isFinite(rate)) {
          rateText = `1 ${sellCrypto.symbol} = ? ${buyCrypto.symbol}`;
        } else if (rate < 0.00001) {
          rateText = `1 ${sellCrypto.symbol} = ${rate.toExponential(2)} ${
            buyCrypto.symbol
          }`;
        } else {
          const rounded = rate
            .toFixed(8)
            .replace(/0+$/g, "")
            .replace(/\.$/, "");
          rateText = `1 ${sellCrypto.symbol} = ${rounded} ${buyCrypto.symbol}`;
        }

        exchangeRateEl.textContent = rateText;
      }

      // Network fee symbol (abbreviation of selling crypto)
      if (networkFeeEl && sellCrypto) {
        networkFeeEl.textContent = sellCrypto.symbol;
      }
    };

    syncSelectedLabels();
    updateAmountsAndSummary();

    if (trigger2) {
      trigger2.addEventListener("click", () => {
        if (completed) return;

        if (gs) {
          gs.to(trigger2, {
            scale: 0.97,
            duration: 0.08,
            yoyo: true,
            repeat: 1,
            ease: "power1.out",
            onComplete: safeDone,
          });
        } else {
          safeDone();
        }
      });
    }
  },
};
