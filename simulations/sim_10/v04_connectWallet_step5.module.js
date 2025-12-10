// connectWalletToDex_step5.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = window.gsap || null;

    if (!rootEl) {
      console.warn("[connectWalletToDex_step5] mount called without rootEl");
      done?.();
      return;
    }

    const STYLE_ID = "connectWalletToDex_step5_styles";

    if (!document.getElementById(STYLE_ID)) {
      const styleEl = document.createElement("style");
      styleEl.id = STYLE_ID;
      styleEl.textContent = `
.connectWalletToDex_step5_button-large {
  color: #fff;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-family: Inter, sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 140%;
}

.connectWalletToDex_step5_buttons-2 {
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
  display: flex;
  box-shadow: 0 4px 10px #eb855c40;
}

.connectWalletToDex_step5_canvas-wrap {
  flex-direction: column;
  justify-content: flex-end;
  align-items: stretch;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
}

.connectWalletToDex_step5_container {
  grid-row-gap: 40px;
  background-color: #fff;
  border-top-right-radius: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding-top: 40px;
  padding-right: 40px;
  display: flex;
  box-shadow: 0 4px 20px #0000001a;
  max-width: 85%;
  height: 80%;
}

.connectWalletToDex_step5_container-2 {
  grid-column-gap: 24px;
  justify-content: flex-end;
  align-items: stretch;
  display: flex;
  position: relative;
}

.connectWalletToDex_step5_fauxui {
  opacity: .1;
  background-color: #6f6f6f;
  border-top-right-radius: 60px;
  border-bottom-right-radius: 60px;
  flex: 1;
}

.connectWalletToDex_step5_fauxui-2 {
  opacity: .1;
  background-color: #6f6f6f;
  border-radius: 8px;
  flex: 1;
  max-width: 126px;
}

.connectWalletToDex_step5_buttons {
  grid-column-gap: 16px;
  background-color: #f1f1f1;
  border: 2px solid #f64c07;
  border-radius: 8px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  height: 56px;
  padding-left: 8px;
  padding-right: 12px;
  display: flex;
  cursor: pointer;
  transition: all 0.735s cubic-bezier(0.65, 0.05, 0, 1);
}

.connectWalletToDex_step5_buttons.is--active {
  background: #f64c07;
}

.connectWalletToDex_step5_buttons.is--active .connectWalletToDex_step5_wallet-icon {
  background: #ffffff42;
  color: #fff;
}

.connectWalletToDex_step5_buttons.is--active .connectWalletToDex_step5_wallet-count,
.connectWalletToDex_step5_buttons.is--active .connectWalletToDex_step5_wallet-address, 
.connectWalletToDex_step5_buttons.is--active .connectWalletToDex_step5_btn-chev {
  color: #fff;
}

.connectWalletToDex_step5_buttons.is--active .connectWalletToDex_step5_btn-chev {
  rotate: -180deg;
}

.connectWalletToDex_step5_wallet-info {
  grid-column-gap: 16px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.connectWalletToDex_step5_wallet-icon {
  grid-column-gap: 10px;
  color: #7a7a7a;
  background-color: #0000001a;
  border-radius: 8px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
  display: flex;
  transition: all 0.735s cubic-bezier(0.65, 0.05, 0, 1);
}

.connectWalletToDex_step5_wallet-icon-image {
  object-fit: cover;
  overflow: hidden;
}

.connectWalletToDex_step5_wallet-details {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.connectWalletToDex_step5_wallet-count {
  color: #1f1f1f;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .875rem;
  font-weight: 600;
  line-height: 130%;
  transition: all 0.735s cubic-bezier(0.65, 0.05, 0, 1);
}

.connectWalletToDex_step5_wallet-address {
  opacity: .8;
  color: #7a7a7a;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .75rem;
  font-weight: 500;
  line-height: 140%;
  transition: all 0.735s cubic-bezier(0.65, 0.05, 0, 1);
}

.connectWalletToDex_step5_container-3 {
  grid-row-gap: 64px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  display: flex;
  flex: 1;
}

.connectWalletToDex_step5_container-4 {
  grid-row-gap: 24px;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
  align-items: stretch;
  display: flex;
}

.connectWalletToDex_step5_fauxui-3 {
  background-image: linear-gradient(270deg, #ededed, #f7f7f7);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  flex: 1;
}

.connectWalletToDex_step5_container-5 {
  grid-column-gap: 40px;
  flex: 1;
  justify-content: flex-start;
  align-items: stretch;
  display: flex;
}

.connectWalletToDex_step5_fauxui-4 {
  background-image: linear-gradient(270deg, #f7f7f7, #ededed);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  flex: 1;
}

.connectWalletToDex_step5_fauxui-5 {
  background-image: linear-gradient(270deg, #f7f7f7, #ededed);
  border-radius: 8px;
  flex: 1;
}

.connectWalletToDex_step5_fauxui-6 {
  background-image: linear-gradient(270deg, #ededed, #f7f7f7);
  border-top-right-radius: 8px;
  flex: 1;
}

.connectWalletToDex_step5_wallet-ico {
  width: 20px;
  height: 20px;
  transition: all 0.735s cubic-bezier(0.65, 0.05, 0, 1);
}

.connectWalletToDex_step5_btn-chev {
  color: #7a7a7a;
  width: 24px;
  height: 24px;
  transition: all 0.735s cubic-bezier(0.65, 0.05, 0, 1);
}

.connectWalletToDex_step5_btn-chev.is--dd {
  opacity: .8;
  width: 20px;
  height: 20px;
}

.connectWalletToDex_step5_dropdown_wrap {
  width: 80%;
  max-width: 80%;
  position: absolute;
  top: 100%;
  right: 0;
}

.connectWalletToDex_step5_container-6 {
  grid-column-gap: 64px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 24px;
}

.connectWalletToDex_step5_container-7 {
  grid-row-gap: 40px;
  background-color: #fff;
  border-radius: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 40px;
  display: flex;
  box-shadow: 0 4px 20px #0000001a;
  overflow: hidden;
}

.connectWalletToDex_step5_header-style {
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.connectWalletToDex_step5_title-style {
  color: #2f2f30;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2rem;
  font-weight: 500;
  line-height: 130%;
}

.connectWalletToDex_step5_buttons-3 {
  grid-column-gap: 4px;
  border: 1px solid #7a7a7a;
  border-radius: 8px;
  flex: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 8px 16px 8px 8px;
  display: flex;
}

.connectWalletToDex_step5_add-icon {
  object-fit: cover;
  overflow: hidden;
}

.connectWalletToDex_step5_add-button {
  color: #7a7a7a;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .875rem;
  font-weight: 500;
  line-height: 130%;
}

.connectWalletToDex_step5_wallet-list {
  grid-row-gap: 12px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  display: flex;
}

.connectWalletToDex_step5_wallet-info-header {
  grid-column-gap: 0px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.connectWalletToDex_step5_wallet-label {
  opacity: .8;
  color: #7a7a7a;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .875rem;
  font-weight: 500;
  line-height: 140%;
}

.connectWalletToDex_step5_wallet-label.is--1 {
  width: 52%;
}

.connectWalletToDex_step5_wallet-label.is--alt {
  width: 120px;
}

.connectWalletToDex_step5_wallet-label.is--alt-2 {
  width: 120px;
}

.connectWalletToDex_step5_checkbtn {
  cursor: pointer;
  background-color: #f9f9f9;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  display: flex;
}

.connectWalletToDex_step5_wallet-icon-2 {
  object-fit: cover;
}

.connectWalletToDex_step5_wallet-name {
  color: #1f1f1f;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 600;
  line-height: 150%;
}

.connectWalletToDex_step5_wallet-address-container {
  grid-column-gap: 8px;
  flex: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
}

.connectWalletToDex_step5_copy-icon {
  opacity: .8;
  object-fit: cover;
  overflow: hidden;
}

.connectWalletToDex_step5_network-container {
  grid-column-gap: 8px;
  background-color: #1f1f1f0d;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  flex: 0 auto;
  justify-content: center;
  align-items: center;
  width: 70px;
  padding: 8px 12px;
  display: flex;
}

.connectWalletToDex_step5_logoutbtn {
  grid-column-gap: 8px;
  background-color: #1f1f1f0d;
  color: #7a7a7a;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  flex: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  display: flex;
}

.connectWalletToDex_step5_logoutbtn_ico {
  width: 20px;
  height:20px;
}

.connectWalletToDex_step5_network-name {
  color: #1f1f1f;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .875rem;
  font-weight: 500;
  line-height: 1;
  height: 20px;
  display: grid;
  align-items: center;
}

.connectWalletToDex_step5_balance-container {
  grid-column-gap: 24px;
  background-color: #1f1f1f0d;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  flex: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  display: flex;
}

.connectWalletToDex_step5_check {
  color: #0000;
  border: 1.5px solid #7a7a7a;
  border-radius: 100%;
  flex: none;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  transition: color .3s, border .3s;
  display: flex;
}

.connectWalletToDex_step5_check.is--checked {
  color: #f64c07;
  border-color: #f64c07;
}

.connectWalletToDex_step5_check-inner {
  background-color: currentColor;
  border-radius: 100%;
  flex: none;
  width: 8px;
  height: 8px;
  transition-property: transform;
  transition-duration: .5s;
  transition-timing-function: cubic-bezier(.19, 1, .22, 1);
  transform: scale(.5);
}

.connectWalletToDex_step5_check.is--checked .connectWalletToDex_step5_check-inner {
  transform: scale(1.2);
}

.connectWalletToDex_step5_copy-ico {
  opacity: .8;
  flex: none;
  width: 16px;
  height: 16px;
}

.connectWalletToDex_step5_add-ico, .connectWalletToDex_step5_btc-ico {
  flex: none;
  width: 20px;
  height: 20px;
}
      `;
      document.head.appendChild(styleEl);
    }

    rootEl.innerHTML = `
        <div class="connectWalletToDex_step5_canvas-wrap">
          <div data-sim-view-1 class="connectWalletToDex_step5_container">
            <div class="connectWalletToDex_step5_container-2">
              <div class="connectWalletToDex_step5_fauxui"></div>
              <div class="connectWalletToDex_step5_fauxui-2"></div>
              <div data-sim-trigger-1 class="connectWalletToDex_step5_buttons">
                <div class="connectWalletToDex_step5_wallet-info">
                  <div class="connectWalletToDex_step5_wallet-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" class="connectWalletToDex_step5_wallet-ico">
                      <path d="M15.8346 5.83333H15.0013V5C15.0013 4.33696 14.7379 3.70107 14.2691 3.23223C13.8002 2.76339 13.1643 2.5 12.5013 2.5H4.16797C3.50493 2.5 2.86904 2.76339 2.4002 3.23223C1.93136 3.70107 1.66797 4.33696 1.66797 5V15C1.66797 15.663 1.93136 16.2989 2.4002 16.7678C2.86904 17.2366 3.50493 17.5 4.16797 17.5H15.8346C16.4977 17.5 17.1336 17.2366 17.6024 16.7678C18.0712 16.2989 18.3346 15.663 18.3346 15V8.33333C18.3346 7.67029 18.0712 7.03441 17.6024 6.56557C17.1336 6.09673 16.4977 5.83333 15.8346 5.83333ZM4.16797 4.16667H12.5013C12.7223 4.16667 12.9343 4.25446 13.0906 4.41074C13.2468 4.56702 13.3346 4.77899 13.3346 5V5.83333H4.16797C3.94695 5.83333 3.73499 5.74554 3.57871 5.58926C3.42243 5.43298 3.33464 5.22101 3.33464 5C3.33464 4.77899 3.42243 4.56702 3.57871 4.41074C3.73499 4.25446 3.94695 4.16667 4.16797 4.16667ZM16.668 12.5H15.8346C15.6136 12.5 15.4017 12.4122 15.2454 12.2559C15.0891 12.0996 15.0013 11.8877 15.0013 11.6667C15.0013 11.4457 15.0891 11.2337 15.2454 11.0774C15.4017 10.9211 15.6136 10.8333 15.8346 10.8333H16.668V12.5ZM16.668 9.16667H15.8346C15.1716 9.16667 14.5357 9.43006 14.0669 9.8989C13.598 10.3677 13.3346 11.0036 13.3346 11.6667C13.3346 12.3297 13.598 12.9656 14.0669 13.4344C14.5357 13.9033 15.1716 14.1667 15.8346 14.1667H16.668V15C16.668 15.221 16.5802 15.433 16.4239 15.5893C16.2676 15.7455 16.0556 15.8333 15.8346 15.8333H4.16797C3.94695 15.8333 3.73499 15.7455 3.57871 15.5893C3.42243 15.433 3.33464 15.221 3.33464 15V7.35833C3.60236 7.45251 3.88416 7.50042 4.16797 7.5H15.8346C16.0556 7.5 16.2676 7.5878 16.4239 7.74408C16.5802 7.90036 16.668 8.11232 16.668 8.33333V9.16667Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <div class="connectWalletToDex_step5_wallet-details">
                    <div class="connectWalletToDex_step5_wallet-count">2 Wallets</div>
                    <div data-wallet-text-target class="connectWalletToDex_step5_wallet-address">bc1qxy...9a0f</div>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="connectWalletToDex_step5_btn-chev">
                  <path d="M16.9997 9.1697C16.8123 8.98345 16.5589 8.87891 16.2947 8.87891C16.0305 8.87891 15.7771 8.98345 15.5897 9.1697L11.9997 12.7097L8.4597 9.1697C8.27234 8.98345 8.01889 8.87891 7.7547 8.87891C7.49052 8.87891 7.23707 8.98345 7.0497 9.1697C6.95598 9.26266 6.88158 9.37326 6.83081 9.49512C6.78004 9.61698 6.75391 9.74769 6.75391 9.8797C6.75391 10.0117 6.78004 10.1424 6.83081 10.2643C6.88158 10.3861 6.95598 10.4967 7.0497 10.5897L11.2897 14.8297C11.3827 14.9234 11.4933 14.9978 11.6151 15.0486C11.737 15.0994 11.8677 15.1255 11.9997 15.1255C12.1317 15.1255 12.2624 15.0994 12.3843 15.0486C12.5061 14.9978 12.6167 14.9234 12.7097 14.8297L16.9997 10.5897C17.0934 10.4967 17.1678 10.3861 17.2186 10.2643C17.2694 10.1424 17.2955 10.0117 17.2955 9.8797C17.2955 9.74769 17.2694 9.61698 17.2186 9.49512C17.1678 9.37326 17.0934 9.26266 16.9997 9.1697Z" fill="currentColor"></path>
                </svg>
              </div>
              <div class="connectWalletToDex_step5_dropdown_wrap">
                <div class="connectWalletToDex_step5_container-6">
                  <div data-sim-view-2 class="connectWalletToDex_step5_container-7">
                    <div class="connectWalletToDex_step5_header-style">
                      <div class="connectWalletToDex_step5_title-style">Your wallets</div>
                      <div class="connectWalletToDex_step5_buttons-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" class="connectWalletToDex_step5_add-ico">
                          <path d="M9.99935 1.66699C8.35118 1.66699 6.74001 2.15573 5.3696 3.07141C3.99919 3.98709 2.93109 5.28858 2.30036 6.8113C1.66963 8.33401 1.5046 10.0096 1.82614 11.6261C2.14769 13.2426 2.94136 14.7274 4.1068 15.8929C5.27223 17.0583 6.75709 17.852 8.3736 18.1735C9.99011 18.4951 11.6657 18.3301 13.1884 17.6993C14.7111 17.0686 16.0126 16.0005 16.9283 14.6301C17.8439 13.2597 18.3327 11.6485 18.3327 10.0003C18.3327 8.90598 18.1171 7.82234 17.6983 6.8113C17.2796 5.80025 16.6657 4.88159 15.8919 4.10777C15.1181 3.33395 14.1994 2.72012 13.1884 2.30133C12.1773 1.88254 11.0937 1.66699 9.99935 1.66699V1.66699ZM9.99935 16.667C8.68081 16.667 7.39188 16.276 6.29555 15.5435C5.19922 14.8109 4.34474 13.7697 3.84016 12.5515C3.33557 11.3334 3.20355 9.99293 3.46078 8.69972C3.71802 7.40652 4.35296 6.21863 5.28531 5.28628C6.21766 4.35393 7.40554 3.71899 8.69875 3.46176C9.99196 3.20452 11.3324 3.33654 12.5506 3.84113C13.7687 4.34571 14.8099 5.2002 15.5425 6.29652C16.275 7.39285 16.666 8.68178 16.666 10.0003C16.666 11.7684 15.9636 13.4641 14.7134 14.7144C13.4632 15.9646 11.7675 16.667 9.99935 16.667V16.667ZM13.3327 9.16699H10.8327V6.66699C10.8327 6.44598 10.7449 6.23402 10.5886 6.07774C10.4323 5.92146 10.2204 5.83366 9.99935 5.83366C9.77834 5.83366 9.56638 5.92146 9.4101 6.07774C9.25382 6.23402 9.16602 6.44598 9.16602 6.66699V9.16699H6.66602C6.44501 9.16699 6.23304 9.25479 6.07676 9.41107C5.92048 9.56735 5.83269 9.77931 5.83269 10.0003C5.83269 10.2213 5.92048 10.4333 6.07676 10.5896C6.23304 10.7459 6.44501 10.8337 6.66602 10.8337H9.16602V13.3337C9.16602 13.5547 9.25382 13.7666 9.4101 13.9229C9.56638 14.0792 9.77834 14.167 9.99935 14.167C10.2204 14.167 10.4323 14.0792 10.5886 13.9229C10.7449 13.7666 10.8327 13.5547 10.8327 13.3337V10.8337H13.3327C13.5537 10.8337 13.7657 10.7459 13.9219 10.5896C14.0782 10.4333 14.166 10.2213 14.166 10.0003C14.166 9.77931 14.0782 9.56735 13.9219 9.41107C13.7657 9.25479 13.5537 9.16699 13.3327 9.16699Z" fill="#7A7A7A"></path>
                        </svg>
                        <div class="connectWalletToDex_step5_add-button">Add wallet</div>
                      </div>
                    </div>
                    <div class="connectWalletToDex_step5_wallet-list">
                      <div class="connectWalletToDex_step5_wallet-info-header">
                        <div class="connectWalletToDex_step5_wallet-label is--1">Wallet</div>
                        <div class="connectWalletToDex_step5_wallet-label is--alt">Network</div>
                        <div class="connectWalletToDex_step5_wallet-label is--alt-2">Balance</div>
                      </div>
                      <div data-sim-check-1 class="connectWalletToDex_step5_checkbtn">
                        <div class="connectWalletToDex_step5_wallet-info">
                          <div class="connectWalletToDex_step5_check is--checked">
                            <div class="connectWalletToDex_step5_check-inner"></div>
                          </div>
                          <div class="connectWalletToDex_step5_wallet-details">
                            <div class="connectWalletToDex_step5_wallet-name">Wallet 1</div>
                            <div class="connectWalletToDex_step5_wallet-address-container">
                              <div class="connectWalletToDex_step5_wallet-label">bc1qxy...9a0f</div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" class="connectWalletToDex_step5_copy-ico">
                                <g opacity="0.8">
                                  <path d="M14 5.95967C13.9931 5.89843 13.9796 5.83809 13.96 5.77967V5.71967C13.9279 5.65113 13.8852 5.58812 13.8333 5.53301V5.53301L9.83333 1.53301C9.77822 1.48115 9.71521 1.4384 9.64667 1.40634C9.62677 1.40351 9.60657 1.40351 9.58667 1.40634C9.51894 1.3675 9.44415 1.34257 9.36667 1.33301H6.66667C6.13623 1.33301 5.62753 1.54372 5.25245 1.91879C4.87738 2.29387 4.66667 2.80257 4.66667 3.33301V3.99967H4C3.46957 3.99967 2.96086 4.21039 2.58579 4.58546C2.21071 4.96053 2 5.46924 2 5.99967V12.6663C2 13.1968 2.21071 13.7055 2.58579 14.0806C2.96086 14.4556 3.46957 14.6663 4 14.6663H9.33333C9.86377 14.6663 10.3725 14.4556 10.7475 14.0806C11.1226 13.7055 11.3333 13.1968 11.3333 12.6663V11.9997H12C12.5304 11.9997 13.0391 11.789 13.4142 11.4139C13.7893 11.0388 14 10.5301 14 9.99967V5.99967C14 5.99967 14 5.99967 14 5.95967ZM10 3.60634L11.7267 5.33301H10.6667C10.4899 5.33301 10.3203 5.26277 10.1953 5.13775C10.0702 5.01272 10 4.84315 10 4.66634V3.60634ZM10 12.6663C10 12.8432 9.92976 13.0127 9.80474 13.1377C9.67971 13.2628 9.51014 13.333 9.33333 13.333H4C3.82319 13.333 3.65362 13.2628 3.5286 13.1377C3.40357 13.0127 3.33333 12.8432 3.33333 12.6663V5.99967C3.33333 5.82286 3.40357 5.65329 3.5286 5.52827C3.65362 5.40325 3.82319 5.33301 4 5.33301H4.66667V9.99967C4.66667 10.5301 4.87738 11.0388 5.25245 11.4139C5.62753 11.789 6.13623 11.9997 6.66667 11.9997H10V12.6663ZM12.6667 9.99967C12.6667 10.1765 12.5964 10.3461 12.4714 10.4711C12.3464 10.5961 12.1768 10.6663 12 10.6663H6.66667C6.48986 10.6663 6.32029 10.5961 6.19526 10.4711C6.07024 10.3461 6 10.1765 6 9.99967V3.33301C6 3.1562 6.07024 2.98663 6.19526 2.8616C6.32029 2.73658 6.48986 2.66634 6.66667 2.66634H8.66667V4.66634C8.66667 5.19677 8.87738 5.70548 9.25245 6.08055C9.62753 6.45563 10.1362 6.66634 10.6667 6.66634H12.6667V9.99967Z" fill="#7A7A7A"></path>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div class="connectWalletToDex_step5_wallet-info">
                          <div class="connectWalletToDex_step5_network-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 56 56" fill="none" class="connectWalletToDex_step5_btc-ico">
                              <path d="M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z" fill="#F7931A"></path>
                              <path d="M40.5814 24.535C41.1309 20.867 38.3361 18.8947 34.5176 17.5787L35.7566 12.6087L32.7326 11.8563L31.5251 16.695C30.7306 16.4955 29.9151 16.31 29.1014 16.1245L30.3176 11.2543L27.2936 10.5L26.0546 15.4682C25.3966 15.3177 24.7491 15.1708 24.1226 15.0133L24.1261 14.9975L19.9541 13.9562L19.1491 17.1867C19.1491 17.1867 21.3944 17.7013 21.3471 17.7327C22.5721 18.039 22.7926 18.8492 22.7559 19.4932L21.3454 25.1545C21.4294 25.1755 21.5379 25.207 21.6604 25.2542L21.3401 25.1755L19.3626 33.1065C19.2121 33.4775 18.8324 34.0357 17.9749 33.824C18.0064 33.8677 15.7769 33.2762 15.7769 33.2762L14.2754 36.7377L18.2129 37.7195C18.9444 37.9032 19.6619 38.0957 20.3671 38.276L19.1159 43.302L22.1381 44.0545L23.3771 39.0845C24.2031 39.3067 25.0046 39.5132 25.7886 39.7092L24.5531 44.6582L27.5771 45.4107L28.8284 40.3952C33.9874 41.3717 37.8654 40.978 39.4981 36.3125C40.8141 32.557 39.4334 30.3888 36.7191 28.9765C38.6966 28.5215 40.1841 27.2213 40.5814 24.535ZM33.6689 34.2265C32.7361 37.9837 26.4099 35.952 24.3589 35.4427L26.0214 28.784C28.0724 29.2967 34.6471 30.31 33.6689 34.2265ZM34.6051 24.4808C33.7529 27.8985 28.4889 26.1607 26.7826 25.7355L28.2876 19.698C29.9939 20.1232 35.4941 20.916 34.6051 24.4808Z" fill="white"></path>
                            </svg>
                            <div class="connectWalletToDex_step5_network-name">BTC</div>
                          </div>
                          <div class="connectWalletToDex_step5_balance-container">
                            <div class="connectWalletToDex_step5_network-name">0.025401 BTC</div>
                          </div>
                          <div class="connectWalletToDex_step5_logoutbtn">
                            <svg xmlns="http://www.w3.org/2000/svg" class="connectWalletToDex_step5_logoutbtn_ico" width="20" height="20" fill="none"><path fill="currentColor" d="m8.508 5.175.658-.667v3.825a.833.833 0 0 0 1.667 0V4.508l.658.667a.833.833 0 0 0 1.183 0 .833.833 0 0 0 0-1.183l-2.083-2.084a.8.8 0 0 0-.275-.175.83.83 0 0 0-.633 0 .8.8 0 0 0-.275.175L7.324 3.992a.837.837 0 0 0 1.184 1.183M14.999 6.3a.848.848 0 1 0-1.2 1.2 5.375 5.375 0 1 1-7.6 0A.848.848 0 1 0 5 6.3a7.05 7.05 0 1 0 10 0"/></svg>
                          </div>
                        </div>
                      </div>
                      <div data-sim-trigger-2 data-sim-check-2 class="connectWalletToDex_step5_checkbtn">
                        <div class="connectWalletToDex_step5_wallet-info">
                          <div class="connectWalletToDex_step5_check">
                            <div class="connectWalletToDex_step5_check-inner"></div>
                          </div>
                          <div class="connectWalletToDex_step5_wallet-details">
                            <div class="connectWalletToDex_step5_wallet-name">Wallet 2</div>
                            <div class="connectWalletToDex_step5_wallet-address-container">
                              <div data-wallet-text-value class="connectWalletToDex_step5_wallet-label">bc1q4p...2a0f</div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" class="connectWalletToDex_step5_copy-ico">
                                <g opacity="0.8">
                                  <path d="M14 5.95967C13.9931 5.89843 13.9796 5.83809 13.96 5.77967V5.71967C13.9279 5.65113 13.8852 5.58812 13.8333 5.53301V5.53301L9.83333 1.53301C9.77822 1.48115 9.71521 1.4384 9.64667 1.40634C9.62677 1.40351 9.60657 1.40351 9.58667 1.40634C9.51894 1.3675 9.44415 1.34257 9.36667 1.33301H6.66667C6.13623 1.33301 5.62753 1.54372 5.25245 1.91879C4.87738 2.29387 4.66667 2.80257 4.66667 3.33301V3.99967H4C3.46957 3.99967 2.96086 4.21039 2.58579 4.58546C2.21071 4.96053 2 5.46924 2 5.99967V12.6663C2 13.1968 2.21071 13.7055 2.58579 14.0806C2.96086 14.4556 3.46957 14.6663 4 14.6663H9.33333C9.86377 14.6663 10.3725 14.4556 10.7475 14.0806C11.1226 13.7055 11.3333 13.1968 11.3333 12.6663V11.9997H12C12.5304 11.9997 13.0391 11.789 13.4142 11.4139C13.7893 11.0388 14 10.5301 14 9.99967V5.99967C14 5.99967 14 5.99967 14 5.95967ZM10 3.60634L11.7267 5.33301H10.6667C10.4899 5.33301 10.3203 5.26277 10.1953 5.13775C10.0702 5.01272 10 4.84315 10 4.66634V3.60634ZM10 12.6663C10 12.8432 9.92976 13.0127 9.80474 13.1377C9.67971 13.2628 9.51014 13.333 9.33333 13.333H4C3.82319 13.333 3.65362 13.2628 3.5286 13.1377C3.40357 13.0127 3.33333 12.8432 3.33333 12.6663V5.99967C3.33333 5.82286 3.40357 5.65329 3.5286 5.52827C3.65362 5.40325 3.82319 5.33301 4 5.33301H4.66667V9.99967C4.66667 10.5301 4.87738 11.0388 5.25245 11.4139C5.62753 11.789 6.13623 11.9997 6.66667 11.9997H10V12.6663ZM12.6667 9.99967C12.6667 10.1765 12.5964 10.3461 12.4714 10.4711C12.3464 10.5961 12.1768 10.6663 12 10.6663H6.66667C6.48986 10.6663 6.32029 10.5961 6.19526 10.4711C6.07024 10.3461 6 10.1765 6 9.99967V3.33301C6 3.1562 6.07024 2.98663 6.19526 2.8616C6.32029 2.73658 6.48986 2.66634 6.66667 2.66634H8.66667V4.66634C8.66667 5.19677 8.87738 5.70548 9.25245 6.08055C9.62753 6.45563 10.1362 6.66634 10.6667 6.66634H12.6667V9.99967Z" fill="#7A7A7A"></path>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div class="connectWalletToDex_step5_wallet-info">
                          <div class="connectWalletToDex_step5_network-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 56 56" fill="none" class="connectWalletToDex_step5_btc-ico">
                              <path d="M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z" fill="#F7931A"></path>
                              <path d="M40.5814 24.535C41.1309 20.867 38.3361 18.8947 34.5176 17.5787L35.7566 12.6087L32.7326 11.8563L31.5251 16.695C30.7306 16.4955 29.9151 16.31 29.1014 16.1245L30.3176 11.2543L27.2936 10.5L26.0546 15.4682C25.3966 15.3177 24.7491 15.1708 24.1226 15.0133L24.1261 14.9975L19.9541 13.9562L19.1491 17.1867C19.1491 17.1867 21.3944 17.7013 21.3471 17.7327C22.5721 18.039 22.7926 18.8492 22.7559 19.4932L21.3454 25.1545C21.4294 25.1755 21.5379 25.207 21.6604 25.2542L21.3401 25.1755L19.3626 33.1065C19.2121 33.4775 18.8324 34.0357 17.9749 33.824C18.0064 33.8677 15.7769 33.2762 15.7769 33.2762L14.2754 36.7377L18.2129 37.7195C18.9444 37.9032 19.6619 38.0957 20.3671 38.276L19.1159 43.302L22.1381 44.0545L23.3771 39.0845C24.2031 39.3067 25.0046 39.5132 25.7886 39.7092L24.5531 44.6582L27.5771 45.4107L28.8284 40.3952C33.9874 41.3717 37.8654 40.978 39.4981 36.3125C40.8141 32.557 39.4334 30.3888 36.7191 28.9765C38.6966 28.5215 40.1841 27.2213 40.5814 24.535ZM33.6689 34.2265C32.7361 37.9837 26.4099 35.952 24.3589 35.4427L26.0214 28.784C28.0724 29.2967 34.6471 30.31 33.6689 34.2265ZM34.6051 24.4808C33.7529 27.8985 28.4889 26.1607 26.7826 25.7355L28.2876 19.698C29.9939 20.1232 35.4941 20.916 34.6051 24.4808Z" fill="white"></path>
                            </svg>
                            <div class="connectWalletToDex_step5_network-name">BTC</div>
                          </div>
                          <div class="connectWalletToDex_step5_balance-container">
                            <div class="connectWalletToDex_step5_network-name">0.012019 BTC</div>
                          </div>
                          <div class="connectWalletToDex_step5_logoutbtn">
                            <svg xmlns="http://www.w3.org/2000/svg" class="connectWalletToDex_step5_logoutbtn_ico" width="20" height="20" fill="none"><path fill="currentColor" d="m8.508 5.175.658-.667v3.825a.833.833 0 0 0 1.667 0V4.508l.658.667a.833.833 0 0 0 1.183 0 .833.833 0 0 0 0-1.183l-2.083-2.084a.8.8 0 0 0-.275-.175.83.83 0 0 0-.633 0 .8.8 0 0 0-.275.175L7.324 3.992a.837.837 0 0 0 1.184 1.183M14.999 6.3a.848.848 0 1 0-1.2 1.2 5.375 5.375 0 1 1-7.6 0A.848.848 0 1 0 5 6.3a7.05 7.05 0 1 0 10 0"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="connectWalletToDex_step5_container-3">
              <div class="connectWalletToDex_step5_container-4">
                <div class="connectWalletToDex_step5_fauxui-3"></div>
                <div class="connectWalletToDex_step5_container-5">
                  <div class="connectWalletToDex_step5_fauxui-4"></div>
                  <div class="connectWalletToDex_step5_fauxui-5"></div>
                </div>
              </div>
              <div class="connectWalletToDex_step5_fauxui-6"></div>
            </div>
          </div>
        </div>
    `;

    const view1 = rootEl.querySelector("[data-sim-view-1]");
    const view2 = rootEl.querySelector("[data-sim-view-2]");
    const trigger1 = rootEl.querySelector("[data-sim-trigger-1]");
    const trigger2 = rootEl.querySelector("[data-sim-trigger-2]");
    const check1 = rootEl.querySelector("[data-sim-check-1]");
    const check2 = rootEl.querySelector("[data-sim-check-2]");
    const walletTextTarget = rootEl.querySelector("[data-wallet-text-target]");
    const walletTextValue = rootEl.querySelector("[data-wallet-text-value]");
    const simViewChildren = gsap.utils.toArray("[data-sim-view-1] > *");
    const dropWrap = rootEl.querySelector(
      ".connectWalletToDex_step5_dropdown_wrap"
    );

    if (
      !view1 ||
      !view2 ||
      !trigger1 ||
      !trigger2 ||
      !check1 ||
      !check2 ||
      !walletTextTarget ||
      !walletTextValue
    ) {
      console.warn("[connectWalletToDex_step5] Missing required elements.");
      done?.();
      return;
    }

    let completed = false;
    const safeDone = () => {
      if (completed) return;
      completed = true;
      glowTl?.kill?.();
      if (gs) gs.set(trigger1, { boxShadow: "none" });
      done?.();
    };

    let glowTl = null;
    let dropdownOpened = false;

    if (gs) {
      gs.set(view1, { autoAlpha: 0, y: 120 });
      gs.set(view2, { autoAlpha: 0, height: 0, pointerEvents: "none" });
      gs.set(view2, { transformOrigin: "top center" });

      gs.to(view1, {
        autoAlpha: 1,
        y: 0,
        duration: 1,
      });
    } else {
      view1.style.opacity = "1";
      view1.style.transform = "translateY(0)";
      view2.style.opacity = "0";
      view2.style.height = "0";
      view2.style.pointerEvents = "none";
      view2.style.overflow = "hidden";
    }

    const openDropdown = () => {
      if (dropdownOpened) return;
      dropdownOpened = true;
      trigger1.classList.add("is--active");

      if (!gs) {
        view2.style.opacity = "1";
        view2.style.pointerEvents = "auto";
        view2.style.height = "auto";
        return;
      }

      glowTl?.pause?.();

      const children = Array.from(view2.children);

      gs.timeline({ defaults: { ease: "power2.out" } })
        .to(trigger1, { scale: 0.98, duration: 0.12 })
        .to(trigger1, { scale: 1, duration: 0.18 })
        .set(view2, { pointerEvents: "auto", overflow: "hidden" }, "<")
        .fromTo(
          view2,
          { autoAlpha: 0, height: 0 },
          {
            autoAlpha: 1,
            height: "auto",
            duration: 0.4,
          },
          "-=0.05"
        )
        .fromTo(
          children,
          { autoAlpha: 0, y: 10 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.25,
            stagger: 0.06,
          },
          "-=0.2"
        );
    };

    const handleTrigger1Click = () => {
      openDropdown();
    };

    const handleTrigger2Click = () => {
      if (completed) return;

      const circle1 = check1.querySelector(".check");
      const circle2 = check2.querySelector(".check");

      circle1?.classList.remove("is--checked");
      circle2?.classList.add("is--checked");

      walletTextTarget.textContent =
        walletTextValue.textContent || walletTextTarget.textContent;

      if (!gs) {
        setTimeout(() => safeDone(), 500);
        return;
      }

      gs.timeline({ defaults: { ease: "power2.out" } })
        .to(trigger2, { scale: 0.98, duration: 0.12 })
        .to(trigger2, { scale: 1, duration: 0.18 })
        .to({}, { duration: 0.5 })
        .add(() => safeDone());
    };

    trigger1.addEventListener("click", handleTrigger1Click);
    trigger2.addEventListener("click", handleTrigger2Click);
  },
};
