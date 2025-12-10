// connectWalletToDex_step4.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = window.gsap || null;

    if (!rootEl) {
      console.warn("[connectWalletToDex_step4] mount called without rootEl");
      done?.();
      return;
    }

    // ----------------------------------
    // Inject CSS (once)
    // ----------------------------------
    const STYLE_ID = "connectWalletToDex_step4_styles";

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
  text-decoration: none;
  display: flex;
  overflow: hidden;
}

.container {
  background-color: #fff;
  border-radius: 20px;
  flex-flow: column;
  justify-content: flex-end;
  align-items: center;
  width: 360px;
  height: 640px;
  display: flex;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px #0000001a;
}

.bgcontent {
  z-index: 0;
  grid-row-gap: 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 40px 24px;
  text-decoration: none;
  display: flex;
  position: absolute;
  inset: 0%;
}

.fw-bg-content {
  grid-column-gap: 10px;
  opacity: .9;
  background-image: linear-gradient(270deg, #f7f7f7, #ededed);
  border-radius: 8px;
  justify-content: center;
  flex-grow: 1;
  height: 64px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
}

.bg-content-wrap {
  grid-column-gap: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  text-decoration: none;
  display: flex;
}

.fw-bg-content-2 {
  grid-column-gap: 10px;
  opacity: .9;
  background-image: linear-gradient(270deg, #f7f7f7, #ededed);
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  height: 175px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
}

.modal {
  z-index: 1;
  grid-row-gap: 52px;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 24px 24px 40px;
  text-decoration: none;
  display: flex;
  position: absolute;
  inset: auto 0% 0%;
}

.modal.is--2 {
  transform: translate(0, 100%);
}

.contentpanel {
  grid-row-gap: 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  text-decoration: none;
  display: flex;
}

.url {
  text-align: center;
  text-decoration: none;
}

.url-text {
  color: #1f1f1f;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 140%;
  text-decoration: none;
}

.tabs {
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  display: flex;
}

.accounts-tab {
  grid-column-gap: 10px;
  border: 0 solid #f64c07;
  border-bottom-width: 2px;
  flex: 1 0 50%;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  text-decoration: none;
  display: flex;
}

.accounts-tab-text {
  color: #f64c07;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .875rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.permissions-tab {
  grid-column-gap: 10px;
  border: 0 solid #1f1f1f1a;
  border-bottom-width: 2px;
  flex: 1 0 50%;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  text-decoration: none;
  display: flex;
}

.permissions-tab-text {
  color: #7a7a7a;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .875rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.buttons {
  background-color: #f9f9f9;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  text-decoration: none;
  display: flex;
}

.wallet {
  grid-column-gap: 16px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  display: flex;
}

.wallet-icon {
  grid-column-gap: 10px;
  background-color: #f64c071a;
  border-radius: 8px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
  text-decoration: none;
  display: flex;
}

.wallet-initials {
  color: #f64c07;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .875rem;
  font-weight: 600;
  line-height: 130%;
  text-decoration: none;
}

.wallet-details {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-decoration: none;
  display: flex;
}

.wallet-name {
  color: #1f1f1f;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 150%;
  text-decoration: none;
}

.wallet-address {
  opacity: .8;
  color: #7a7a7a;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .75rem;
  font-weight: 500;
  line-height: 140%;
  text-decoration: none;
}

.wallet-balance {
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-decoration: none;
  display: flex;
}

.balance-amount {
  color: #1f1f1f;
  text-align: right;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .75rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.balance-details {
  grid-column-gap: 4px;
  flex: 0 auto;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  display: flex;
}

.balance-icons {
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  display: flex;
}

.balance-icon {
  object-fit: cover;
  border: 1px solid #fff;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  width: 12px;
  height: 12px;
  text-decoration: none;
  display: flex;
}

.balance-icon.is--1 {
  background-color: #ffd2bf;
  margin-right: -4px;
}

.balance-icon.is--2 {
  background-color: #ffa37c;
  margin-right: -4px;
}

.balance-icon.is--3 {
  background-color: #ff7237;
  margin-right: -4px;
}

.balance-icon.is--4 {
  background-color: #f64c07;
}

.edit-accounts {
  color: #f64c07;
  text-align: center;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .875rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: underline;
}

.actions {
  grid-column-gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  text-decoration: none;
  display: flex;
}

.buttons-3 {
  grid-column-gap: 10px;
  border: 1px solid #7a7a7a;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
}

.button-large-2 {
  color: #7a7a7a;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 140%;
  text-decoration: none;
}

.buttons-4 {
  grid-column-gap: 10px;
  background-image: linear-gradient(81.11deg, #f64c07, #ff7943);
  border: 2px solid #f64c07;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  box-shadow: 0 4px 10px #eb855c40;
  cursor: pointer;
}

.button-large-3 {
  color: #fff;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 140%;
  text-decoration: none;
}

.bg-overlay {
  background-color: #0003;
  position: absolute;
  inset: 0%;
}

.container-2 {
  grid-row-gap: 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  text-decoration: none;
  display: flex;
}

.header-style {
  grid-row-gap: 8px;
  text-align: center;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.title-style-compact {
  color: #1f1f1f;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 140%;
  text-decoration: none;
}

.subtitle {
  color: #7a7a7a;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .875rem;
  font-weight: 400;
  line-height: 130%;
  text-decoration: none;
}

.content-alt {
  grid-row-gap: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  text-decoration: none;
  display: flex;
}

.buttons-5 {
  background-color: #f9f9f9;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  text-decoration: none;
  display: flex;
}

.wallet-container {
  grid-column-gap: 16px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  display: flex;
}

.wallet-network {
  opacity: .8;
  color: #7a7a7a;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .75rem;
  font-weight: 500;
  line-height: 140%;
  text-decoration: none;
}

.wallet-arrow {
  object-fit: cover;
  flex: none;
  width: 24px;
  height: 24px;
  overflow: hidden;
}

.request-label {
  opacity: .8;
  color: #7a7a7a;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .875rem;
  font-weight: 500;
  line-height: 140%;
  text-decoration: none;
}

.request-url {
  color: #1f1f1f;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .875rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.buttons-6 {
  grid-row-gap: 8px;
  background-color: #f9f9f9;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px;
  text-decoration: none;
  display: flex;
}

.container-3 {
  z-index: 2;
  grid-row-gap: 16px;
  background-color: #fff;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  padding: 40px;
  display: flex;
  position: absolute;
  box-shadow: 0 4px 20px #0000001a;
}

.loader-wrap {
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

.container-4 {
  grid-row-gap: 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  text-decoration: none;
  display: flex;
}

.title-style-2 {
  color: #2f2f30;
  text-align: center;
  letter-spacing: -.04em;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 130%;
}

.subtitle-2 {
  color: #7a7a7a;
  text-align: center;
  letter-spacing: -.04em;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;
}

/* Loader 5 */
.loader-5 {
  height: 32px;
  width: 32px;
  position: relative;
  animation: loader-5-1 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
}
@keyframes loader-5-1 {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.loader-5::before {
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
.loader-5::after {
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
.loader-5 span {
  display: block;
  position: absolute;
  top: 0; left: 0;
  bottom: 0; right: 0;
  margin: auto;
  height: 32px;
  width: 32px;
}
.loader-5 span::before {
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
.loader-5 span::after {
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

    // ----------------------------------
    // Inject HTML
    // ----------------------------------
    rootEl.innerHTML = `
      <div class="canvas-wrap">
        <div data-sim-view-1 class="container">
          <div data-sim-view-2 class="modal">
            <div class="contentpanel">
              <div class="url">
                <div class="url-text">https://www.exampleURL.com</div>
              </div>
              <div class="tabs">
                <div class="accounts-tab">
                  <div class="accounts-tab-text">Accounts</div>
                </div>
                <div class="permissions-tab">
                  <div class="permissions-tab-text">Permissions</div>
                </div>
              </div>
              <div class="contentpanel">
                <div class="buttons">
                  <div class="wallet">
                    <div class="wallet-icon">
                      <div class="wallet-initials">AB</div>
                    </div>
                    <div class="wallet-details">
                      <div class="wallet-name">Wallet 1</div>
                      <div class="wallet-address">bc1qxy...9a0f</div>
                    </div>
                  </div>
                  <div class="wallet-balance">
                    <div class="balance-amount">0.0250 BTC</div>
                    <div class="balance-details">
                      <div class="balance-icons">
                        <div class="balance-icon is--1"></div>
                        <div class="balance-icon is--2"></div>
                        <div class="balance-icon is--3"></div>
                        <div class="balance-icon is--4"></div>
                      </div>
                      <div class="wallet-address">+7</div>
                    </div>
                  </div>
                </div>
                <div class="edit-accounts">Edit accounts</div>
              </div>
            </div>
            <div class="actions">
              <div class="buttons-3">
                <div class="button-large-2">Cancel</div>
              </div>
              <div data-sim-trigger-1 class="buttons-4">
                <div class="button-large-3">Connect</div>
              </div>
            </div>
          </div>

          <div data-sim-view-4 class="modal is--2">
            <div class="container-2">
              <div class="header-style">
                <div class="title-style-compact">Signature request</div>
                <div class="subtitle">Review request details before you confirm.</div>
              </div>
              <div class="content-alt">
                <div class="container-2">
                  <div class="buttons-5">
                    <div class="wallet-container">
                      <div class="wallet-icon">
                        <div class="wallet-initials">AB</div>
                      </div>
                      <div class="wallet-details">
                        <div class="wallet-name">Wallet 1</div>
                        <div class="wallet-network">Bitcoin Mainnet</div>
                      </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="wallet-arrow">
                      <path d="M14.8297 11.2897L10.5897 7.0497C10.4967 6.95598 10.3861 6.88158 10.2643 6.83081C10.1424 6.78004 10.0117 6.75391 9.8797 6.75391C9.74769 6.75391 9.61698 6.78004 9.49512 6.83081C9.37326 6.88158 9.26266 6.95598 9.1697 7.0497C8.98345 7.23707 8.87891 7.49052 8.87891 7.7547C8.87891 8.01889 8.98345 8.27234 9.1697 8.4597L12.7097 11.9997L9.1697 15.5397C8.98345 15.7271 8.87891 15.9805 8.87891 16.2447C8.87891 16.5089 8.98345 16.7623 9.1697 16.9497C9.26314 17.0424 9.37395 17.1157 9.49579 17.1655C9.61763 17.2152 9.74809 17.2405 9.8797 17.2397C10.0113 17.2405 10.1418 17.2152 10.2636 17.1655C10.3854 17.1157 10.4963 17.0424 10.5897 16.9497L14.8297 12.7097C14.9234 12.6167 14.9978 12.5061 15.0486 12.3843C15.0994 12.2624 15.1255 12.1317 15.1255 11.9997C15.1255 11.8677 15.0994 11.737 15.0486 11.6151C14.9978 11.4933 14.9234 11.3827 14.8297 11.2897Z" fill="#7A7A7A"></path>
                    </svg>
                  </div>
                </div>
                <div class="container-2">
                  <div class="buttons-5">
                    <div class="request-label">Request from</div>
                    <div class="request-url">www.exampleURL.com</div>
                  </div>
                </div>
                <div class="buttons-6">
                  <div class="request-label">Message</div>
                  <div class="request-url">Verify your account in exampleURL.com</div>
                </div>
              </div>
            </div>
            <div class="actions">
              <div class="buttons-3">
                <div class="button-large-2">Cancel</div>
              </div>
              <div data-sim-trigger-2 class="buttons-4">
                <div class="button-large-3">Confirm</div>
              </div>
            </div>
          </div>

          <div class="bgcontent">
            <div class="fw-bg-content"></div>
            <div class="bg-content-wrap">
              <div class="fw-bg-content"></div>
              <div class="fw-bg-content"></div>
            </div>
            <div class="fw-bg-content-2"></div>
            <div class="fw-bg-content"></div>
            <div class="bg-overlay"></div>
          </div>
        </div>

        <div data-sim-view-3 class="container-3">
          <div class="loader-wrap">
            <div class="loader-5 center"><span></span></div>
          </div>
          <div class="container-4">
            <div class="title-style-2">Verify your wallet</div>
            <div class="subtitle-2">Validating the ownership of your wallet</div>
          </div>
        </div>
      </div>
    `;

    // ----------------------------------
    // Element refs
    // ----------------------------------
    const view1 = rootEl.querySelector("[data-sim-view-1]");
    const view2 = rootEl.querySelector("[data-sim-view-2]");
    const view3 = rootEl.querySelector("[data-sim-view-3]");
    const view4 = rootEl.querySelector("[data-sim-view-4]");
    const trigger1 = rootEl.querySelector("[data-sim-trigger-1]");
    const trigger2 = rootEl.querySelector("[data-sim-trigger-2]");

    if (!view1 || !view2 || !view3 || !view4 || !trigger1 || !trigger2) {
      console.warn("[connectWalletToDex_step4] Missing required elements.");
      done?.();
      return;
    }

    let completed = false;
    const safeDone = () => {
      if (completed) return;
      completed = true;
      done?.();
    };

    // ----------------------------------
    // Initial states
    // ----------------------------------
    if (gs) {
      gs.set(view1, { autoAlpha: 0, y: 200, scale: 1 });
      gs.set(view2, { autoAlpha: 0, y: 80 });
      gs.set(view3, { autoAlpha: 0, yPercent: 40 });
      gs.set(view4, { yPercent: 100 });

      view3.style.pointerEvents = "none";

      // Intro timeline: view1, then view2 + its children stagger
      const tlIntro = gs.timeline({ defaults: { ease: "power2.out" } });

      tlIntro
        .to(view1, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
        })
        .to(
          view2,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
          },
          "+=0.1"
        );

      const view2Children = Array.from(view2.children);
      if (view2Children.length) {
        tlIntro.fromTo(
          view2Children,
          { autoAlpha: 0, y: 15 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.06,
          },
          "-=0.2"
        );
      }
    } else {
      // Non-GSAP fallback
      view1.style.opacity = "1";
      view1.style.transform = "translateY(0)";
      view2.style.opacity = "1";
      view2.style.transform = "translateY(0)";
      view3.style.opacity = "0";
      view3.style.transform = "translateY(40%)";
      view3.style.pointerEvents = "none";
      view4.style.transform = "translateY(100%)";
    }

    // ----------------------------------
    // Trigger 1 → connect flow
    // ----------------------------------
    const handleTrigger1Click = () => {
      if (!gs) {
        // Simple fallback: just hide view2, show loader briefly, then show view4
        view2.style.transform = "translateY(100%)";
        view3.style.opacity = "1";
        view3.style.transform = "translateY(0)";
        view3.style.pointerEvents = "auto";

        setTimeout(() => {
          view3.style.opacity = "0";
          view3.style.transform = "translateY(40%)";
          view3.style.pointerEvents = "none";
          view4.style.transform = "translateY(0)";
        }, 1000);

        return;
      }

      const tl = gs.timeline({ defaults: { ease: "power2.out" } });

      tl.to(trigger1, { scale: 0.98, duration: 0.12 })
        .to(trigger1, { scale: 1, duration: 0.18 })
        // slide connect modal down
        .to(
          view2,
          {
            yPercent: 100,
            autoAlpha: 0,
            duration: 0.6,
          },
          "-=0.3"
        )
        // shrink phone
        .to(
          view1,
          {
            scale: 0.7,
            duration: 0.5,
          },
          "-=0.4"
        )
        // show loader (view3)
        .set(
          view3,
          {
            pointerEvents: "auto",
          },
          "+=0.1"
        )
        .fromTo(
          view3,
          { autoAlpha: 0, yPercent: 40 },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 0.4,
          },
          "-=0.1"
        )
        .fromTo(
          Array.from(view3.children),
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.06,
          },
          "<0.05"
        )

        .to({}, { duration: 1.5 })
        // hide loader
        .to(view3, {
          autoAlpha: 0,
          yPercent: 40,
          duration: 0.4,
          onComplete: () => {
            view3.style.pointerEvents = "none";
          },
        })
        // restore phone scale
        .to(
          view1,
          {
            scale: 1,
            duration: 0.5,
          },
          "-=0.2"
        )
        // slide signature modal up into view
        .to(
          view4,
          {
            yPercent: -100,
            duration: 0.8,
          },
          "-=0.25"
        );
    };

    trigger1.addEventListener("click", handleTrigger1Click);

    // ----------------------------------
    // Trigger 2 → confirm + complete
    // ----------------------------------
    const handleTrigger2Click = () => {
      if (!gs) {
        safeDone();
        return;
      }

      gs.timeline({ defaults: { ease: "power2.out" } })
        .to(trigger2, { scale: 0.98, duration: 0.12 })
        .to(trigger2, { scale: 1, duration: 0.18 })
        .add(() => safeDone(), "+=0.05");
    };

    trigger2.addEventListener("click", handleTrigger2Click);
  },
};
