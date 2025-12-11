// nca_sellCrypto_step2.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = (typeof window !== "undefined" && window.gsap) || null;

    if (!rootEl) return;

    const STORAGE_KEY = "nca_sellCrypto_step2";
    const STYLE_ID = "nca_sellCrypto_step2_styles";

    if (!document.getElementById(STYLE_ID)) {
      const styleEl = document.createElement("style");
      styleEl.id = STYLE_ID;
      styleEl.textContent = `
.sellCrypto_step2_canvas-wrap {
  grid-row-gap: 64px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}

.sellCrypto_step2_container {
  grid-row-gap: 40px;
  background-color: #fff;
  border-radius: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  max-width: 562px;
  padding: 40px;
  display: flex;
  box-shadow: 0 4px 20px #0000001a;
}

.sellCrypto_step2_sell-section {
  grid-row-gap: 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  display: flex;
}

.sellCrypto_step2_conainer-sb {
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  display: flex;
}

.sellCrypto_step2_title {
  color: #2f2f30;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 100%;
}

.sellCrypto_step2_sell-cur {
  grid-column-gap: 16px;
  background-color: #f9f9f9;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 12px 12px 16px;
  display: flex;
}

.sellCrypto_step2_sell-cur_container {
  grid-column-gap: 16px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.sellCrypto_step2_sell-cur_content {
  grid-row-gap: 4px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.sellCrypto_step2_p_text {
  color: #1f1f1f;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 600;
  line-height: 100%;
}

.sellCrypto_step2_ico {
  object-fit: cover;
  flex: none;
  width: 16px;
  height: 16px;
  overflow: hidden;
}

.sellCrypto_step2_crypto_container {
  grid-row-gap: 8px;
  background-color: #f9f9f9;
  border: 2px solid #f64c07;
  border-radius: 12px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 16px;
  padding: 24px;
  display: flex;
}

.sellCrypto_step2_title_sm {
  color: #2f2f30;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 600;
  line-height: 130%;
}

.sellCrypto_step2_available_wrap {
  grid-column-gap: 8px;
  border-radius: 1000px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.sellCrypto_step2_wallet-amount {
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  letter-spacing: -.02em;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
}

.sellCrypto_step2_dropdown_crypto {
  grid-column-gap: 16px;
  cursor: pointer;
  background-color: #efefef;
  border: 1px solid #ebebeb;
  border-radius: 1000px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 16px;
  display: flex;
  position: relative;
}

.sellCrypto_step2_crypto-cur-wrap {
  grid-column-gap: 12px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.sellCrypto_step2_crypto-text {
  color: #1f1f1f;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 130%;
}

.sellCrypto_step2_crypto_amounts {
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  display: flex;
}

.sellCrypto_step2_amount {
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
}

.sellCrypto_step2_amount-usd {
  opacity: .2;
  color: #1f1f1f;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .875rem;
  font-weight: 500;
  line-height: 130%;
}

.sellCrypto_step2_inner-wrap_alt {
  grid-row-gap: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  display: flex;
}

.sellCrypto_step2_subtext {
  color: #7a7a7a;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .875rem;
  font-weight: 400;
  line-height: 130%;
}

.sellCrypto_step2_dropdown {
  cursor: pointer;
  background-color: #f9f9f9;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  display: flex;
  position: relative;
}

.sellCrypto_step2_btn {
  grid-column-gap: 10px;
  background-color: #f64c07;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  height: 56px;
  padding-left: 24px;
  padding-right: 24px;
  text-decoration: none;
  display: flex;
}

.sellCrypto_step2_btn-text {
  color: #fff;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 140%;
  text-decoration: none;
}

.sellCrypto_step2_receive-ico_wrap {
  background-color: #202020;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  display: flex;
}

.sellCrypto_step2_receive-ico {
  flex: none;
  width: 24px;
  height: 24px;
}

.sellCrypto_step2_receive-ico.is--alt {
  width: 20px;
  height: 20px;
}

.sellCrypto_step2_crypto-detail-name {
  color: #1f1f1f;
  font-size: 16px;
  font-weight: 600;
  line-height: 130%;
}

.sellCrypto_step2_cur-ico {
  background-color: #1f1f1f1a;
  border-radius: 100%;
  flex: none;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  display: flex;
  overflow: hidden;
}

.sellCrypto_step2_cur-ico-img {
  object-fit: cover;
  width: 32px;
  height: 32px;
}

.sellCrypto_step2_selection_dropdown {
  z-index: 999;
  opacity: 0;
  background-color: #fff;
  border: 2px solid #ebebeb;
  border-radius: 12px;
  flex-flow: column;
  padding: 8px;
  transition-property: opacity;
  transition-duration: .6s;
  transition-timing-function: ease;
  display: none;
  position: absolute;
  top: 100%;
  left: 0%;
  box-shadow: 0 4px 10px #eb855c40;
}

.sellCrypto_step2_selection_dropdown.is--active {
  opacity: 1;
  display: flex;
}

.sellCrypto_step2_select_crypto-item {
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  cursor: pointer;
  border-radius: 12px;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
  padding: 10px 8px;
  transition: all .35s cubic-bezier(.075, .82, .165, 1);
  display: flex;
}

.sellCrypto_step2_select_crypto-item:hover {
  background-color: #f8f8f8;
}

.sellCrypto_step2_select_crypto-item.is--alt {
  width: 462px;
}

.sellCrypto_step2_select_crypto-item.is--alt-mid {
  justify-content: space-between;
  align-items: center;
  width: 462px;
}

.sellCrypto_step2_select_crypto-details {
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  display: flex;
}

.sellCrypto_step2_crypto-detail-avail {
  color: #7a7a7a;
  font-weight: 400;
  line-height: 100%;
}

.sellCrypto_step2_select-d-line {
  background-color: #ebebeb;
  height: 1px;
  margin-left: 12px;
  margin-right: 12px;
}

.sellCrypto_step2_currency-el {
  background-color: #f9f9f9;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  display: flex;
  position: relative;
}

.sellCrypto_step2_card-type_wrap {
  grid-column-gap: 6px;
  grid-row-gap: 6px;
  flex: none;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.sellCrypto_step2_card {
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  flex: none;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 32px;
  display: flex;
}

.sellCrypto_step2_select_crypto-inner {
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.sellCrypto_step2_card-ico {
  height: 14px;
}

.sellCrypto_step2_card-ico_alt {
  height: 10px;
}

.sellCrypto_step2_amount.is--value {
  opacity: 1;
}

.sellCrypto_step2_amount-usd.is--value {
  opacity: 1;
}

.sellCrypto_step2_amount.is--error {
  color: #d93a3a;
  opacity: 1;
}

.sellCrypto_step2_btn.is--inactive {
  opacity: .5;
  pointer-events: none;
}

.sellCrypto_step2_amount {
  outline: none !important;
}
      `;
      document.head.appendChild(styleEl);
    }

    rootEl.innerHTML = `
    <div class="sellCrypto_step2_canvas-wrap">
      <div data-sim-view-1 class="sellCrypto_step2_container">
        <div class="sellCrypto_step2_sell-section">
          <div class="sellCrypto_step2_conainer-sb">
            <div class="sellCrypto_step2_title">Sell</div>
          </div>
          <div class="sellCrypto_step2_crypto_container">
            <div class="sellCrypto_step2_conainer-sb">
              <div class="sellCrypto_step2_title_sm">Selling</div>
              <div class="sellCrypto_step2_available_wrap">
                <div data-sim-crypto-amount class="sellCrypto_step2_crypto-detail-avail">0.2905</div>
                <div data-sim-crypto-cur="eth" class="sellCrypto_step2_crypto-detail-avail">ETH</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" class="sellCrypto_step2_ico">
                  <path d="M12.6663 4.66667H11.9997V4C11.9997 3.46957 11.789 2.96086 11.4139 2.58579C11.0388 2.21071 10.5301 2 9.99967 2H3.33301C2.80257 2 2.29387 2.21071 1.91879 2.58579C1.54372 2.96086 1.33301 3.46957 1.33301 4V4V12C1.33301 12.5304 1.54372 13.0391 1.91879 13.4142C2.29387 13.7893 2.80257 14 3.33301 14H12.6663C13.1968 14 13.7055 13.7893 14.0806 13.4142C14.4556 13.0391 14.6663 12.5304 14.6663 12V6.66667C14.6663 6.13623 14.4556 5.62753 14.0806 5.25245C13.7055 4.87738 13.1968 4.66667 12.6663 4.66667ZM3.33301 3.33333H9.99967C10.1765 3.33333 10.3461 3.40357 10.4711 3.5286C10.5961 3.65362 10.6663 3.82319 10.6663 4V4.66667H3.33301C3.1562 4.66667 2.98663 4.59643 2.8616 4.4714C2.73658 4.34638 2.66634 4.17681 2.66634 4C2.66634 3.82319 2.73658 3.65362 2.8616 3.5286C2.98663 3.40357 3.1562 3.33333 3.33301 3.33333V3.33333ZM13.333 10H12.6663C12.4895 10 12.32 9.92976 12.1949 9.80474C12.0699 9.67971 11.9997 9.51014 11.9997 9.33333C11.9997 9.15652 12.0699 8.98695 12.1949 8.86193C12.32 8.7369 12.4895 8.66667 12.6663 8.66667H13.333V10ZM13.333 7.33333H12.6663C12.1359 7.33333 11.6272 7.54405 11.2521 7.91912C10.8771 8.29419 10.6663 8.8029 10.6663 9.33333C10.6663 9.86377 10.8771 10.3725 11.2521 10.7475C11.6272 11.1226 12.1359 11.3333 12.6663 11.3333H13.333V12C13.333 12.1768 13.2628 12.3464 13.1377 12.4714C13.0127 12.5964 12.8432 12.6667 12.6663 12.6667H3.33301C3.1562 12.6667 2.98663 12.5964 2.8616 12.4714C2.73658 12.3464 2.66634 12.1768 2.66634 12V5.88667C2.88052 5.96201 3.10596 6.00034 3.33301 6H12.6663C12.8432 6 13.0127 6.07024 13.1377 6.19526C13.2628 6.32029 13.333 6.48986 13.333 6.66667V7.33333Z" fill="#7A7A7A"></path>
                </svg>
              </div>
            </div>
            <div class="sellCrypto_step2_conainer-sb">
              <div data-sim-selling-crypto class="sellCrypto_step2_dropdown_crypto">
                <div class="sellCrypto_step2_crypto-cur-wrap">
                  <div data-sim-crypto-img class="sellCrypto_step2_cur-ico">
                    <img src="https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5cad7c2be8398af2e8_eth-logo.svg" class="sellCrypto_step2_cur-ico-img">
                  </div>
                  <div class="sellCrypto_step2_crypto-text">ETH</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" class="sellCrypto_step2_ico">
                  <path d="M13.2458 5.29079C13.0584 5.10454 12.805 5 12.5408 5C12.2766 5 12.0232 5.10454 11.8358 5.29079L8.2458 8.83079L4.7058 5.29079C4.51844 5.10454 4.26498 5 4.0008 5C3.73661 5 3.48316 5.10454 3.2958 5.29079C3.20207 5.38376 3.12768 5.49436 3.07691 5.61622C3.02614 5.73807 3 5.86878 3 6.00079C3 6.1328 3.02614 6.26351 3.07691 6.38537C3.12768 6.50723 3.20207 6.61783 3.2958 6.71079L7.5358 10.9508C7.62876 11.0445 7.73936 11.1189 7.86122 11.1697C7.98308 11.2205 8.11379 11.2466 8.2458 11.2466C8.37781 11.2466 8.50851 11.2205 8.63037 11.1697C8.75223 11.1189 8.86283 11.0445 8.9558 10.9508L13.2458 6.71079C13.3395 6.61783 13.4139 6.50723 13.4647 6.38537C13.5155 6.26351 13.5416 6.1328 13.5416 6.00079C13.5416 5.86878 13.5155 5.73807 13.4647 5.61622C13.4139 5.49436 13.3395 5.38376 13.2458 5.29079Z" fill="#7A7A7A"></path>
                </svg>
                <div data-sim-sell-dropdown class="sellCrypto_step2_selection_dropdown">
                  <div data-sim-crypto-select="btc" class="sellCrypto_step2_select_crypto-item">
                    <div data-sim-crypto-img class="sellCrypto_step2_cur-ico">
                      <img src="https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5cdc09e9e742cbdff5_btc-logo.svg" class="sellCrypto_step2_cur-ico-img">
                    </div>
                    <div class="sellCrypto_step2_select_crypto-details">
                      <div class="sellCrypto_step2_crypto-detail-name">Bitcoin</div>
                      <div class="sellCrypto_step2_wallet-amount">
                        <div data-sim-crypto-amount class="sellCrypto_step2_crypto-detail-avail">0.0116</div>
                        <div data-sim-crypto-cur="btc" class="sellCrypto_step2_crypto-detail-avail">BTC</div>
                      </div>
                    </div>
                  </div>
                  <div class="sellCrypto_step2_select-d-line"></div>
                  <div data-sim-crypto-select="eth" class="sellCrypto_step2_select_crypto-item">
                    <div data-sim-crypto-img class="sellCrypto_step2_cur-ico">
                      <img src="https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5cad7c2be8398af2e8_eth-logo.svg" class="sellCrypto_step2_cur-ico-img">
                    </div>
                    <div class="sellCrypto_step2_select_crypto-details">
                      <div class="sellCrypto_step2_crypto-detail-name">Ethereum</div>
                      <div class="sellCrypto_step2_wallet-amount">
                        <div data-sim-crypto-amount class="sellCrypto_step2_crypto-detail-avail">0.2905</div>
                        <div data-sim-crypto-cur="eth" class="sellCrypto_step2_crypto-detail-avail">ETH</div>
                      </div>
                    </div>
                  </div>
                  <div class="sellCrypto_step2_select-d-line"></div>
                  <div data-sim-crypto-select="xrp" class="sellCrypto_step2_select_crypto-item">
                    <div data-sim-crypto-img class="sellCrypto_step2_cur-ico">
                      <img src="https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5cecd803e93aa1a9d1_xrp-logo.svg" class="sellCrypto_step2_cur-ico-img">
                    </div>
                    <div class="sellCrypto_step2_select_crypto-details">
                      <div class="sellCrypto_step2_crypto-detail-name">XRP</div>
                      <div class="sellCrypto_step2_wallet-amount">
                        <div data-sim-crypto-amount class="sellCrypto_step2_crypto-detail-avail">440</div>
                        <div data-sim-crypto-cur="xrp" class="sellCrypto_step2_crypto-detail-avail">XRP</div>
                      </div>
                    </div>
                  </div>
                  <div class="sellCrypto_step2_select-d-line"></div>
                  <div data-sim-crypto-select="bnb" class="sellCrypto_step2_select_crypto-item">
                    <div data-sim-crypto-img class="sellCrypto_step2_cur-ico">
                      <img src="https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5c63efaa27da6d1b15_bnb-logo.svg" class="sellCrypto_step2_cur-ico-img">
                    </div>
                    <div class="sellCrypto_step2_select_crypto-details">
                      <div class="sellCrypto_step2_crypto-detail-name">BNB</div>
                      <div class="sellCrypto_step2_wallet-amount">
                        <div data-sim-crypto-amount class="sellCrypto_step2_crypto-detail-avail">1.028</div>
                        <div data-sim-crypto-cur="bnb" class="sellCrypto_step2_crypto-detail-avail">BNB</div>
                      </div>
                    </div>
                  </div>
                  <div class="sellCrypto_step2_select-d-line"></div>
                  <div data-sim-crypto-select="usdc" class="sellCrypto_step2_select_crypto-item">
                    <div data-sim-crypto-img class="sellCrypto_step2_cur-ico">
                      <img src="https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5c5c1e6e07d92c9228_usdc-logo.svg" class="sellCrypto_step2_cur-ico-img">
                    </div>
                    <div class="sellCrypto_step2_select_crypto-details">
                      <div class="sellCrypto_step2_crypto-detail-name">USDC</div>
                      <div class="sellCrypto_step2_wallet-amount">
                        <div data-sim-crypto-amount class="sellCrypto_step2_crypto-detail-avail">920</div>
                        <div data-sim-crypto-cur="usdc" class="sellCrypto_step2_crypto-detail-avail">USDC</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sellCrypto_step2_crypto_amounts">
                <div data-sim-sell-input class="sellCrypto_step2_amount">0.00</div>
                <div data-sim-sell-usd class="sellCrypto_step2_amount-usd">$0</div>
              </div>
            </div>
          </div>
          <div class="sellCrypto_step2_inner-wrap_alt">
            <div class="sellCrypto_step2_subtext">Currency</div>
            <div class="sellCrypto_step2_currency-el">
              <div class="sellCrypto_step2_p_text">USD</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" class="sellCrypto_step2_ico">
                <path d="M13.2458 5.29079C13.0584 5.10454 12.805 5 12.5408 5C12.2766 5 12.0232 5.10454 11.8358 5.29079L8.2458 8.83079L4.7058 5.29079C4.51844 5.10454 4.26498 5 4.0008 5C3.73661 5 3.48316 5.10454 3.2958 5.29079C3.20207 5.38376 3.12768 5.49436 3.07691 5.61622C3.02614 5.73807 3 5.86878 3 6.00079C3 6.1328 3.02614 6.26351 3.07691 6.38537C3.12768 6.50723 3.20207 6.61783 3.2958 6.71079L7.5358 10.9508C7.62876 11.0445 7.73936 11.1189 7.86122 11.1697C7.98308 11.2205 8.11379 11.2466 8.2458 11.2466C8.37781 11.2466 8.50851 11.2205 8.63037 11.1697C8.75223 11.1189 8.86283 11.0445 8.9558 10.9508L13.2458 6.71079C13.3395 6.61783 13.4139 6.50723 13.4647 6.38537C13.5155 6.26351 13.5416 6.1328 13.5416 6.00079C13.5416 5.86878 13.5155 5.73807 13.4647 5.61622C13.4139 5.49436 13.3395 5.38376 13.2458 5.29079Z" fill="#7A7A7A"></path>
              </svg>
            </div>
          </div>
          <div data-sim-send-to class="sellCrypto_step2_dropdown">
            <div class="sellCrypto_step2_sell-cur_container">
              <div class="sellCrypto_step2_receive-ico_wrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="sellCrypto_step2_receive-ico">
                  <path d="M12 21V12.75M15.75 21V12.75M8.25 21V12.75M3 9L12 3L21 9M19.5 21V10.332C17.0189 9.94356 14.5113 9.74897 12 9.75C9.449 9.75 6.944 9.95 4.5 10.332V21M3 21H21M12 6.75H12.008V6.758H12V6.75Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
              <div class="sellCrypto_step2_sell-cur_content">
                <div class="sellCrypto_step2_subtext">Send cash to</div>
                <div class="sellCrypto_step2_p_text">Bank account</div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" class="sellCrypto_step2_ico">
              <path d="M13.2458 5.29079C13.0584 5.10454 12.805 5 12.5408 5C12.2766 5 12.0232 5.10454 11.8358 5.29079L8.2458 8.83079L4.7058 5.29079C4.51844 5.10454 4.26498 5 4.0008 5C3.73661 5 3.48316 5.10454 3.2958 5.29079C3.20207 5.38376 3.12768 5.49436 3.07691 5.61622C3.02614 5.73807 3 5.86878 3 6.00079C3 6.1328 3.02614 6.26351 3.07691 6.38537C3.12768 6.50723 3.20207 6.61783 3.2958 6.71079L7.5358 10.9508C7.62876 11.0445 7.73936 11.1189 7.86122 11.1697C7.98308 11.2205 8.11379 11.2466 8.2458 11.2466C8.37781 11.2466 8.50851 11.2205 8.63037 11.1697C8.75223 11.1189 8.86283 11.0445 8.9558 10.9508L13.2458 6.71079C13.3395 6.61783 13.4139 6.50723 13.4647 6.38537C13.5155 6.26351 13.5416 6.1328 13.5416 6.00079C13.5416 5.86878 13.5155 5.73807 13.4647 5.61622C13.4139 5.49436 13.3395 5.38376 13.2458 5.29079Z" fill="#7A7A7A"></path>
            </svg>
            <div data-sim-receive-dropdown class="sellCrypto_step2_selection_dropdown">
              <div data-sim-receive-select="bank" class="sellCrypto_step2_select_crypto-item is--alt">
                <div class="sellCrypto_step2_cur-ico">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" class="sellCrypto_step2_receive-ico is--alt">
                    <path d="M9.59941 16.8004V10.2004M12.5994 16.8004V10.2004M6.59941 16.8004V10.2004M2.39941 7.20039L9.59941 2.40039L16.7994 7.20039M15.5994 16.8004V8.26599C13.6145 7.95524 11.6085 7.79957 9.59941 7.80039C7.55861 7.80039 5.55461 7.96039 3.59941 8.26599V16.8004M2.39941 16.8004H16.7994M9.59941 5.40039H9.60581V5.40679H9.59941V5.40039Z" stroke="#1F1F1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
                <div class="sellCrypto_step2_select_crypto-details">
                  <div class="sellCrypto_step2_crypto-detail-name">Bank account</div>
                  <div class="sellCrypto_step2_wallet-amount">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" class="sellCrypto_step2_ico">
                      <path d="M7.33366 1.33398C6.01512 1.33398 4.72619 1.72498 3.62986 2.45752C2.53353 3.19006 1.67905 4.23125 1.17446 5.44943C0.669881 6.6676 0.537859 8.00805 0.795093 9.30125C1.05233 10.5945 1.68727 11.7823 2.61962 12.7147C3.55197 13.647 4.73985 14.282 6.03306 14.5392C7.32627 14.7965 8.66671 14.6644 9.88488 14.1598C11.1031 13.6553 12.1442 12.8008 12.8768 11.7045C13.6093 10.6081 14.0003 9.31919 14.0003 8.00065C14.0003 7.12517 13.8279 6.25827 13.4929 5.44943C13.1578 4.64059 12.6668 3.90566 12.0477 3.28661C11.4286 2.66755 10.6937 2.17649 9.88488 1.84145C9.07605 1.50642 8.20914 1.33398 7.33366 1.33398ZM7.33366 13.334C6.27883 13.334 5.24768 13.0212 4.37062 12.4352C3.49356 11.8491 2.80997 11.0162 2.4063 10.0416C2.00264 9.06709 1.89702 7.99473 2.10281 6.96017C2.30859 5.9256 2.81655 4.97529 3.56243 4.22941C4.30831 3.48353 5.25862 2.97558 6.29318 2.7698C7.32775 2.56401 8.4001 2.66963 9.37464 3.07329C10.3492 3.47696 11.1821 4.16055 11.7682 5.03761C12.3542 5.91467 12.667 6.94582 12.667 8.00065C12.667 9.41514 12.1051 10.7717 11.1049 11.7719C10.1047 12.7721 8.74815 13.334 7.33366 13.334ZM8.00033 7.95398V4.66732C8.00033 4.49051 7.93009 4.32094 7.80507 4.19591C7.68004 4.07089 7.51047 4.00065 7.33366 4.00065C7.15685 4.00065 6.98728 4.07089 6.86226 4.19591C6.73723 4.32094 6.667 4.49051 6.667 4.66732V8.00065C6.667 8.00065 6.667 8.04732 6.667 8.07398C6.65059 8.20951 6.67619 8.34681 6.74033 8.46732L7.74033 10.2007C7.82873 10.3545 7.97463 10.4669 8.14591 10.5131C8.31719 10.5594 8.49984 10.5357 8.65366 10.4473C8.80749 10.3589 8.91989 10.213 8.96615 10.0417C9.01241 9.87045 8.98873 9.68781 8.90033 9.53398L8.00033 7.95398Z" fill="#7A7A7A"></path>
                    </svg>
                    <div class="sellCrypto_step2_crypto-detail-avail">1 - 4 business days</div>
                  </div>
                </div>
              </div>
              <div class="sellCrypto_step2_select-d-line"></div>
              <div data-sim-receive-select="card" class="sellCrypto_step2_select_crypto-item is--alt-mid">
                <div class="sellCrypto_step2_select_crypto-inner">
                  <div class="sellCrypto_step2_cur-ico">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" class="sellCrypto_step2_receive-ico is--alt">
                      <path d="M5.59961 12H7.99961C8.21178 12 8.41527 11.9157 8.56529 11.7657C8.71532 11.6157 8.79961 11.4122 8.79961 11.2C8.79961 10.9878 8.71532 10.7843 8.56529 10.6343C8.41527 10.4843 8.21178 10.4 7.99961 10.4H5.59961C5.38744 10.4 5.18395 10.4843 5.03392 10.6343C4.88389 10.7843 4.79961 10.9878 4.79961 11.2C4.79961 11.4122 4.88389 11.6157 5.03392 11.7657C5.18395 11.9157 5.38744 12 5.59961 12ZM15.1996 4H3.99961C3.36309 4 2.75264 4.25286 2.30255 4.70294C1.85247 5.15303 1.59961 5.76348 1.59961 6.4V13.6C1.59961 14.2365 1.85247 14.847 2.30255 15.2971C2.75264 15.7471 3.36309 16 3.99961 16H15.1996C15.8361 16 16.4466 15.7471 16.8967 15.2971C17.3468 14.847 17.5996 14.2365 17.5996 13.6V6.4C17.5996 5.76348 17.3468 5.15303 16.8967 4.70294C16.4466 4.25286 15.8361 4 15.1996 4ZM15.9996 13.6C15.9996 13.8122 15.9153 14.0157 15.7653 14.1657C15.6153 14.3157 15.4118 14.4 15.1996 14.4H3.99961C3.78744 14.4 3.58395 14.3157 3.43392 14.1657C3.28389 14.0157 3.19961 13.8122 3.19961 13.6V8.8H15.9996V13.6ZM15.9996 7.2H3.19961V6.4C3.19961 6.18783 3.28389 5.98434 3.43392 5.83431C3.58395 5.68429 3.78744 5.6 3.99961 5.6H15.1996C15.4118 5.6 15.6153 5.68429 15.7653 5.83431C15.9153 5.98434 15.9996 6.18783 15.9996 6.4V7.2Z" fill="#1F1F1F"></path>
                    </svg>
                  </div>
                  <div class="sellCrypto_step2_select_crypto-details">
                    <div class="sellCrypto_step2_crypto-detail-name">Credit/Debit card</div>
                    <div class="sellCrypto_step2_wallet-amount">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" class="sellCrypto_step2_ico">
                        <path d="M7.33366 1.33398C6.01512 1.33398 4.72619 1.72498 3.62986 2.45752C2.53353 3.19006 1.67905 4.23125 1.17446 5.44943C0.669881 6.6676 0.537859 8.00805 0.795093 9.30125C1.05233 10.5945 1.68727 11.7823 2.61962 12.7147C3.55197 13.647 4.73985 14.282 6.03306 14.5392C7.32627 14.7965 8.66671 14.6644 9.88488 14.1598C11.1031 13.6553 12.1442 12.8008 12.8768 11.7045C13.6093 10.6081 14.0003 9.31919 14.0003 8.00065C14.0003 7.12517 13.8279 6.25827 13.4929 5.44943C13.1578 4.64059 12.6668 3.90566 12.0477 3.28661C11.4286 2.66755 10.6937 2.17649 9.88488 1.84145C9.07605 1.50642 8.20914 1.33398 7.33366 1.33398ZM7.33366 13.334C6.27883 13.334 5.24768 13.0212 4.37062 12.4352C3.49356 11.8491 2.80997 11.0162 2.4063 10.0416C2.00264 9.06709 1.89702 7.99473 2.10281 6.96017C2.30859 5.9256 2.81655 4.97529 3.56243 4.22941C4.30831 3.48353 5.25862 2.97558 6.29318 2.7698C7.32775 2.56401 8.4001 2.66963 9.37464 3.07329C10.3492 3.47696 11.1821 4.16055 11.7682 5.03761C12.3542 5.91467 12.667 6.94582 12.667 8.00065C12.667 9.41514 12.1051 10.7717 11.1049 11.7719C10.1047 12.7721 8.74815 13.334 7.33366 13.334ZM8.00033 7.95398V4.66732C8.00033 4.49051 7.93009 4.32094 7.80507 4.19591C7.68004 4.07089 7.51047 4.00065 7.33366 4.00065C7.15685 4.00065 6.98728 4.07089 6.86226 4.19591C6.73723 4.32094 6.667 4.49051 6.667 4.66732V8.00065C6.667 8.00065 6.667 8.04732 6.667 8.07398C6.65059 8.20951 6.67619 8.34681 6.74033 8.46732L7.74033 10.2007C7.82873 10.3545 7.97463 10.4669 8.14591 10.5131C8.31719 10.5594 8.49984 10.5357 8.65366 10.4473C8.80749 10.3589 8.91989 10.213 8.96615 10.0417C9.01241 9.87045 8.98873 9.68781 8.90033 9.53398L8.00033 7.95398Z" fill="#7A7A7A"></path>
                      </svg>
                      <div class="sellCrypto_step2_crypto-detail-avail">5 -10 minutes</div>
                    </div>
                  </div>
                </div>
                <div class="sellCrypto_step2_card-type_wrap">
                  <div class="sellCrypto_step2_card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 14" fill="none" class="sellCrypto_step2_card-ico">
                      <path d="M15.6758 0C19.4444 0 22.5 3.09091 22.5 6.90332C22.4998 10.7156 19.4443 13.8057 15.6758 13.8057C13.9863 13.8056 12.4416 13.1832 11.25 12.1543C10.0584 13.1832 8.51365 13.8056 6.82422 13.8057C3.05566 13.8057 0.000178828 10.7156 0 6.90332C0 3.09091 3.05555 0 6.82422 0C8.51335 0.000109834 10.0584 0.621855 11.25 1.65039C12.4416 0.621855 13.9866 0.000111238 15.6758 0Z" fill="#ED0006"></path>
                      <path d="M15.6758 0C19.4444 0 22.5 3.09091 22.5 6.90332C22.4998 10.7156 19.4443 13.8057 15.6758 13.8057C13.9863 13.8056 12.4416 13.1832 11.25 12.1543C12.7164 10.8882 13.6474 9.00638 13.6475 6.90332C13.6475 4.79982 12.7168 2.91652 11.25 1.65039C12.4416 0.621855 13.9866 0.000111238 15.6758 0Z" fill="#F9A000"></path>
                      <path d="M11.25 1.65039C12.7166 2.91651 13.6475 4.799 13.6475 6.90234C13.6475 9.00545 12.7163 10.8872 11.25 12.1533C9.78369 10.8872 8.85254 9.00543 8.85254 6.90234C8.85255 4.79903 9.7834 2.91651 11.25 1.65039Z" fill="#FF5E00"></path>
                    </svg>
                  </div>
                  <div class="sellCrypto_step2_card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 25 8" fill="none" class="sellCrypto_step2_card-ico_alt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.12526 7.75825H4.00494L2.41495 1.69237C2.33949 1.41334 2.17925 1.16667 1.94354 1.0504C1.35531 0.75823 0.707118 0.525705 0 0.408431V0.174895H3.41567C3.88708 0.174895 4.24064 0.525705 4.29957 0.933129L5.12454 5.30865L7.24383 0.174895H9.30522L6.12526 7.75825ZM10.4838 7.75825H8.48129L10.1302 0.174895H12.1327L10.4838 7.75825ZM14.7234 2.27571C14.7823 1.86728 15.1359 1.63374 15.5483 1.63374C16.1965 1.57511 16.9026 1.69238 17.4919 1.98354L17.8454 0.35081C17.2562 0.117274 16.608 0 16.0198 0C14.0762 0 12.662 1.05041 12.662 2.50824C12.662 3.61728 13.6637 4.19961 14.3708 4.55042C15.1359 4.90021 15.4305 5.13375 15.3716 5.48355C15.3716 6.00825 14.7823 6.24178 14.1941 6.24178C13.4869 6.24178 12.7798 6.06688 12.1327 5.77471L11.7791 7.40845C12.4862 7.69962 13.2512 7.81689 13.9584 7.81689C16.1376 7.87451 17.4919 6.82512 17.4919 5.25001C17.4919 3.26647 14.7234 3.15021 14.7234 2.27571ZM24.5 7.75825L22.91 0.174895H21.2022C20.8486 0.174895 20.4951 0.408431 20.3772 0.75823L17.4329 7.75825H19.4943L19.9058 6.65021H22.4386L22.6743 7.75825H24.5ZM21.4968 2.21708L22.085 5.07512H20.4361L21.4968 2.21708Z" fill="#172B85"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="sellCrypto_step2_select-d-line"></div>
              <div data-sim-receive-select="paypal" class="sellCrypto_step2_select_crypto-item is--alt">
                <div class="sellCrypto_step2_cur-ico">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" class="sellCrypto_step2_receive-ico is--alt">
                    <path d="M16.3499 5.68437C16.2117 5.52951 16.0582 5.3891 15.8916 5.26533C15.96 4.72942 15.9128 4.18506 15.753 3.66896C15.5932 3.15286 15.3247 2.67699 14.9655 2.27344C14.0983 1.29609 12.6202 0.800781 10.5718 0.800781H5.60067C5.24153 0.801738 4.89443 0.93034 4.62137 1.16362C4.34832 1.39689 4.16708 1.71964 4.11004 2.07422L2.03816 15.1992C2.00885 15.3751 2.01826 15.5553 2.06573 15.7273C2.1132 15.8992 2.19759 16.0587 2.31302 16.1946C2.42844 16.3306 2.57213 16.4397 2.73407 16.5145C2.89601 16.5892 3.07229 16.6277 3.25064 16.6273H5.38192L5.31632 17.0437C5.28979 17.2112 5.29988 17.3825 5.3459 17.5457C5.39192 17.709 5.47277 17.8603 5.58288 17.9892C5.693 18.1182 5.82976 18.2218 5.98375 18.2928C6.13774 18.3639 6.3053 18.4007 6.47488 18.4008H9.06239C9.39757 18.4035 9.72273 18.2865 9.97948 18.071C10.2362 17.8555 10.4077 17.5556 10.4632 17.225L10.9757 14L10.9843 13.9563H11.2233C14.4491 13.9563 16.464 12.3617 17.0515 9.34609C17.2307 8.72357 17.2606 8.06755 17.1387 7.43131C17.0168 6.79508 16.7465 6.19656 16.3499 5.68437V5.68437ZM6.27411 10.9641L5.70252 14.5923L5.63348 15.0273H3.68504L5.67801 2.40078H10.5718C12.1202 2.40078 13.2257 2.72422 13.7655 3.33203C14.0203 3.62831 14.198 3.98292 14.2829 4.36438C14.3677 4.74584 14.3571 5.14235 14.2518 5.5187L14.2369 5.60849C14.2272 5.66968 14.2184 5.72944 14.2022 5.80547C14.0479 6.9486 13.4767 7.99439 12.5981 8.74189C11.6119 9.42777 10.4232 9.76119 9.22411 9.68829H7.76551C7.40533 9.68709 7.05669 9.8152 6.78299 10.0493C6.50929 10.2835 6.32871 10.608 6.27411 10.9641V10.9641ZM15.4811 9.03984C15.0405 11.3023 13.6874 12.3563 11.2233 12.3563H10.8366C10.5011 12.3536 10.1756 12.4709 9.91883 12.6868C9.66203 12.9028 9.49075 13.2034 9.4358 13.5344L8.91627 16.7937L6.97411 16.8008L7.35663 14.3737L7.84554 11.2914H9.22098C9.34642 11.2914 9.45731 11.2726 9.57947 11.2683C9.86654 11.2583 10.1528 11.2473 10.4216 11.214C10.5858 11.1935 10.7365 11.1562 10.8939 11.127C11.1119 11.0867 11.3301 11.0469 11.5347 10.99C11.687 10.9476 11.8291 10.893 11.974 10.8415C12.1654 10.7736 12.3538 10.7023 12.5321 10.6186C12.6665 10.5553 12.7945 10.4849 12.9213 10.4127C13.0901 10.3171 13.2536 10.2125 13.4112 10.0994C13.525 10.0173 13.6367 9.93305 13.7432 9.84256C13.8942 9.71245 14.0376 9.57385 14.1728 9.42743C14.2632 9.33099 14.3557 9.23739 14.4394 9.13363C14.5783 8.9567 14.7065 8.77168 14.8234 8.57952C14.8846 8.48177 14.9524 8.39134 15.0087 8.28846C15.1708 7.99193 15.31 7.6835 15.4253 7.36585C15.4322 7.34676 15.4422 7.33065 15.4489 7.31145C15.4521 7.30247 15.4569 7.295 15.46 7.28596C15.6185 7.85894 15.6258 8.46322 15.4811 9.03984V9.03984Z" fill="#1F1F1F"></path>
                  </svg>
                </div>
                <div class="sellCrypto_step2_select_crypto-details">
                  <div class="sellCrypto_step2_crypto-detail-name"><strong>Paypal</strong></div>
                  <div class="sellCrypto_step2_wallet-amount">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" class="sellCrypto_step2_ico">
                      <path d="M7.33366 1.33398C6.01512 1.33398 4.72619 1.72498 3.62986 2.45752C2.53353 3.19006 1.67905 4.23125 1.17446 5.44943C0.669881 6.6676 0.537859 8.00805 0.795093 9.30125C1.05233 10.5945 1.68727 11.7823 2.61962 12.7147C3.55197 13.647 4.73985 14.282 6.03306 14.5392C7.32627 14.7965 8.66671 14.6644 9.88488 14.1598C11.1031 13.6553 12.1442 12.8008 12.8768 11.7045C13.6093 10.6081 14.0003 9.31919 14.0003 8.00065C14.0003 7.12517 13.8279 6.25827 13.4929 5.44943C13.1578 4.64059 12.6668 3.90566 12.0477 3.28661C11.4286 2.66755 10.6937 2.17649 9.88488 1.84145C9.07605 1.50642 8.20914 1.33398 7.33366 1.33398ZM7.33366 13.334C6.27883 13.334 5.24768 13.0212 4.37062 12.4352C3.49356 11.8491 2.80997 11.0162 2.4063 10.0416C2.00264 9.06709 1.89702 7.99473 2.10281 6.96017C2.30859 5.9256 2.81655 4.97529 3.56243 4.22941C4.30831 3.48353 5.25862 2.97558 6.29318 2.7698C7.32775 2.56401 8.4001 2.66963 9.37464 3.07329C10.3492 3.47696 11.1821 4.16055 11.7682 5.03761C12.3542 5.91467 12.667 6.94582 12.667 8.00065C12.667 9.41514 12.1051 10.7717 11.1049 11.7719C10.1047 12.7721 8.74815 13.334 7.33366 13.334ZM8.00033 7.95398V4.66732C8.00033 4.49051 7.93009 4.32094 7.80507 4.19591C7.68004 4.07089 7.51047 4.00065 7.33366 4.00065C7.15685 4.00065 6.98728 4.07089 6.86226 4.19591C6.73723 4.32094 6.667 4.49051 6.667 4.66732V8.00065C6.667 8.00065 6.667 8.04732 6.667 8.07398C6.65059 8.20951 6.67619 8.34681 6.74033 8.46732L7.74033 10.2007C7.82873 10.3545 7.97463 10.4669 8.14591 10.5131C8.31719 10.5594 8.49984 10.5357 8.65366 10.4473C8.80749 10.3589 8.91989 10.213 8.96615 10.0417C9.01241 9.87045 8.98873 9.68781 8.90033 9.53398L8.00033 7.95398Z" fill="#7A7A7A"></path>
                    </svg>
                    <div class="sellCrypto_step2_crypto-detail-avail">15 minutes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a data-sim-trigger href="#" target="_blank" class="sellCrypto_step2_btn">
          <div class="sellCrypto_step2_btn-text">Next</div>
        </a>
      </div>
    </div>
    `;

    const view = rootEl.querySelector("[data-sim-view-1]");
    if (!view) return;

    const storage =
      (typeof window !== "undefined" && window.localStorage) || null;

    const sellingCryptoBtn = view.querySelector("[data-sim-selling-crypto]");
    const sellDropdown = view.querySelector("[data-sim-sell-dropdown]");

    const topAvailableAmountEl = view.querySelector(
      ".sellCrypto_step2_crypto_container .sellCrypto_step2_available_wrap [data-sim-crypto-amount]"
    );
    const topAvailableCurEl = view.querySelector(
      ".sellCrypto_step2_crypto_container .sellCrypto_step2_available_wrap [data-sim-crypto-cur]"
    );

    const selectedIconImgEl = sellingCryptoBtn?.querySelector(
      "[data-sim-crypto-img] img"
    );
    const selectedTextEl = sellingCryptoBtn?.querySelector(
      ".sellCrypto_step2_crypto-text"
    );

    const sellInputEl = view.querySelector("[data-sim-sell-input]");
    const sellUsdEl = view.querySelector("[data-sim-sell-usd]");

    const sendToEl = view.querySelector("[data-sim-send-to]");
    const receiveDropdown = view.querySelector("[data-sim-receive-dropdown]");
    const triggerBtn = view.querySelector("[data-sim-trigger]");

    if (
      !sellingCryptoBtn ||
      !sellDropdown ||
      !topAvailableAmountEl ||
      !topAvailableCurEl ||
      !sellInputEl ||
      !sellUsdEl ||
      !sendToEl ||
      !receiveDropdown ||
      !triggerBtn
    ) {
      console.warn("[nca_sellCrypto_step2] Missing required elements.");
      return;
    }

    // helpers
    const parseNumeric = (raw) => {
      if (!raw) return 0;
      let s = String(raw).replace(/[^\d.,]/g, "");
      s = s.replace(/,/g, "");
      const parts = s.split(".");
      if (parts.length > 2) {
        s = parts[0] + "." + parts.slice(1).join("");
      }
      const v = parseFloat(s);
      if (!isFinite(v) || Number.isNaN(v) || v < 0) return 0;
      return v;
    };

    const formatAmount = (val) => {
      if (!val || !isFinite(val)) return "0.00";
      if (val < 0.00001) return val.toExponential(2);
      return val.toFixed(5).replace(/0+$/g, "").replace(/\.$/, "");
    };

    // GSAP intro
    if (gs) {
      gs.set(view, { autoAlpha: 0, y: 200, rotate: "5deg" });
      gs.to(view, {
        autoAlpha: 1,
        y: 0,
        rotate: "0deg",
        duration: 0.6,
        ease: "power2.out",
      });
    } else {
      view.style.opacity = "1";
      view.style.transform = "translateY(0)";
    }

    const defaultPrices = {
      btc: 68000,
      eth: 3500,
      xrp: 0.6,
      bnb: 500,
      usdc: 1,
    };

    const prices = {
      ...defaultPrices,
      ...(props && props.prices ? props.prices : {}),
    };

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

    const getPrice = (key) => {
      const v = prices[key];
      return typeof v === "number" && v > 0 ? v : defaultPrices[key] || 0;
    };

    // balances from dropdown
    const balances = {};
    sellDropdown
      .querySelectorAll("[data-sim-crypto-select]")
      .forEach((item) => {
        const key = item.getAttribute("data-sim-crypto-select");
        const amtEl = item.querySelector("[data-sim-crypto-amount]");
        if (!key || !amtEl) return;
        const v = parseNumeric(amtEl.textContent || "");
        balances[key] = v;
      });

    const initialKey =
      topAvailableCurEl.getAttribute("data-sim-crypto-cur") || "eth";
    const initialMax =
      balances[initialKey] || parseNumeric(topAvailableAmountEl.textContent);

    const state = {
      sellKey: initialKey,
      maxAmount: initialMax,
      sellAmount: 0,
      overMax: false,
      destination: "bank",
      sellInputRaw: "0.00",
    };

    let completed = false;
    const safeDone = () => {
      if (completed) return;
      completed = true;
      done?.();
    };

    // input setup – MetaMask/Binance-style numeric behaviour
    sellInputEl.setAttribute("contenteditable", "true");
    sellInputEl.setAttribute("inputmode", "decimal");
    sellInputEl.setAttribute("spellcheck", "false");
    sellInputEl.textContent = "0.00";

    const updateHasValueClasses = () => {
      const amountVal = state.sellAmount || 0;
      if (amountVal > 0) {
        sellInputEl.classList.add("is--value");
        sellUsdEl.classList.add("is--value");
      } else {
        sellInputEl.classList.remove("is--value");
        sellUsdEl.classList.remove("is--value");
      }
    };

    const updateUsdValue = () => {
      const amt = state.sellAmount || 0;
      if (!amt || !isFinite(amt)) {
        sellUsdEl.textContent = "$0";
        return;
      }
      const usd = amt * getPrice(state.sellKey);
      if (!usd || !isFinite(usd)) {
        sellUsdEl.textContent = "$0";
        return;
      }
      if (usd < 0.01) {
        sellUsdEl.textContent = "<$0.01";
      } else {
        sellUsdEl.textContent = `$${usd.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`;
      }
    };

    const setOverMaxState = (over) => {
      state.overMax = over;
      if (over) {
        sellInputEl.classList.add("is--error");
      } else {
        sellInputEl.classList.remove("is--error");
      }
    };

    const shouldDisableTrigger = () => {
      if (!state.sellKey) return true;
      if (!state.sellAmount || !isFinite(state.sellAmount)) return true;
      if (state.sellAmount <= 0) return true;
      if (state.overMax) return true;
      return false;
    };

    const updateTriggerState = () => {
      if (shouldDisableTrigger()) {
        triggerBtn.classList.add("is--inactive");
      } else {
        triggerBtn.classList.remove("is--inactive");
      }
    };

    const persistState = () => {
      if (!storage) return;
      const amt = state.sellAmount || 0;
      const usd = amt * getPrice(state.sellKey);
      const payload = {
        sellKey: state.sellKey,
        sellAmount: amt,
        sellUsd: usd || 0,
        maxAmount: state.maxAmount,
        destination: state.destination || "bank",
        currency: "USD",
      };
      try {
        storage.setItem(STORAGE_KEY, JSON.stringify(payload));
      } catch {
        // ignore
      }
    };

    const applyAmount = (value) => {
      state.sellAmount = value;
      setOverMaxState(value > state.maxAmount);
      updateUsdValue();
      updateHasValueClasses();
      updateTriggerState();
      persistState();
    };

    const sanitizeInput = (raw) => {
      if (!raw) return "";
      let result = "";
      let hasDot = false;

      // remove spaces and commas, only allow digits + first '.'
      for (let i = 0; i < raw.length; i++) {
        const ch = raw[i];
        if (ch >= "0" && ch <= "9") {
          result += ch;
        } else if (ch === "." && !hasDot) {
          result += ch;
          hasDot = true;
        }
      }

      // limit decimals to 8 places (wallet style)
      const parts = result.split(".");
      if (parts.length === 2 && parts[1].length > 8) {
        result = parts[0] + "." + parts[1].slice(0, 8);
      }

      return result;
    };

    const parseFromRaw = (raw) => {
      if (!raw || raw === "." || raw === "0.") return 0;
      const v = parseFloat(raw);
      if (!isFinite(v) || Number.isNaN(v) || v < 0) return 0;
      return v;
    };

    const handleInputChange = () => {
      let raw = sellInputEl.textContent || "";
      const clean = sanitizeInput(raw);

      if (clean !== raw) {
        sellInputEl.textContent = clean;
        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(sellInputEl);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
      }

      state.sellInputRaw = clean;
      const value = parseFromRaw(clean);
      applyAmount(value);
    };

    const handleInputBlur = () => {
      const raw = state.sellInputRaw ?? (sellInputEl.textContent || "");
      const value = parseFromRaw(raw);

      if (!value) {
        state.sellAmount = 0;
        state.sellInputRaw = "0.00";
        sellInputEl.textContent = "0.00";
      } else {
        state.sellAmount = value;
        state.sellInputRaw = formatAmount(value);
        sellInputEl.textContent = state.sellInputRaw;
      }

      applyAmount(state.sellAmount);
      updateHasValueClasses();
    };

    sellInputEl.addEventListener("input", handleInputChange);
    sellInputEl.addEventListener("blur", handleInputBlur);

    // dropdowns
    let openDropdown = null;

    const openSellDropdown = () => {
      sellDropdown.classList.add("is--active");
      openDropdown = sellDropdown;
    };

    const closeDropdowns = () => {
      sellDropdown.classList.remove("is--active");
      receiveDropdown.classList.remove("is--active");
      openDropdown = null;
    };

    sellingCryptoBtn.addEventListener("click", (evt) => {
      evt.stopPropagation();
      if (sellDropdown.classList.contains("is--active")) {
        closeDropdowns();
      } else {
        receiveDropdown.classList.remove("is--active");
        openSellDropdown();
      }
    });

    document.addEventListener("click", (evt) => {
      if (!openDropdown) return;
      if (
        sellingCryptoBtn.contains(evt.target) ||
        sellDropdown.contains(evt.target) ||
        sendToEl.contains(evt.target) ||
        receiveDropdown.contains(evt.target)
      ) {
        return;
      }
      closeDropdowns();
    });

    const syncSelectedCryptoUI = () => {
      const crypto = CRYPTOS[state.sellKey];
      const maxAmt = state.maxAmount || 0;

      if (crypto) {
        if (selectedTextEl) selectedTextEl.textContent = crypto.symbol;
        if (selectedIconImgEl) selectedIconImgEl.src = crypto.img;
        if (topAvailableCurEl) {
          topAvailableCurEl.textContent = crypto.symbol;
          topAvailableCurEl.setAttribute("data-sim-crypto-cur", crypto.key);
        }
      }
      if (topAvailableAmountEl) {
        topAvailableAmountEl.textContent = formatAmount(maxAmt);
      }
    };

    sellDropdown
      .querySelectorAll("[data-sim-crypto-select]")
      .forEach((item) => {
        item.addEventListener("click", (evt) => {
          evt.stopPropagation();
          const key = item.getAttribute("data-sim-crypto-select");
          if (!key || !CRYPTOS[key]) return;

          const newMax =
            balances[key] ||
            parseNumeric(
              item.querySelector("[data-sim-crypto-amount]")?.textContent || ""
            );

          state.sellKey = key;
          state.maxAmount = newMax || 0;

          syncSelectedCryptoUI();
          applyAmount(state.sellAmount || 0);
          closeDropdowns();
        });
      });

    const destinationLabelEl = sendToEl.querySelector(
      ".sellCrypto_step2_sell-cur_content .p_text"
    );

    const setDestination = (dest, label) => {
      state.destination = dest;
      if (destinationLabelEl && label) {
        destinationLabelEl.textContent = label;
      }
      persistState();
    };

    sendToEl.addEventListener("click", (evt) => {
      evt.stopPropagation();
      const isActive = receiveDropdown.classList.contains("is--active");
      closeDropdowns();
      if (!isActive) {
        receiveDropdown.classList.add("is--active");
        openDropdown = receiveDropdown;
      }
    });

    receiveDropdown
      .querySelectorAll("[data-sim-receive-select]")
      .forEach((item) => {
        item.addEventListener("click", (evt) => {
          evt.stopPropagation();
          const dest = item.getAttribute("data-sim-receive-select") || "bank";
          const labelEl = item.querySelector(
            ".sellCrypto_step2_crypto-detail-name"
          );
          const labelText = labelEl?.textContent?.trim() || "";
          setDestination(dest, labelText);
          receiveDropdown.classList.remove("is--active");
          openDropdown = null;
        });
      });

    // initial state
    syncSelectedCryptoUI();
    updateUsdValue();
    updateHasValueClasses();
    updateTriggerState();
    triggerBtn.classList.add("is--inactive");

    triggerBtn.addEventListener("click", (evt) => {
      evt.preventDefault();
      if (triggerBtn.classList.contains("is--inactive")) return;

      persistState();

      if (gs) {
        gs.timeline({ defaults: { ease: "power2.out" } })
          .to(triggerBtn, { scale: 0.97, duration: 0.12 })
          .to(triggerBtn, { scale: 1, duration: 0.18 })
          .add(() => safeDone(), "+=0.05");
      } else {
        safeDone();
      }
    });
  },
};
