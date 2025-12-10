// purchaseCrypto_step1_connectWallet.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = window.gsap || null;

    if (!rootEl) return;

    const STYLE_ID = "purchaseCrypto_step1_connectWallet_styles";

    if (!document.getElementById(STYLE_ID)) {
      const styleEl = document.createElement("style");
      styleEl.id = STYLE_ID;
      styleEl.textContent = `
.purchaseCrypto_step1_button-large {
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

.purchaseCrypto_step1_buttons-2 {
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

.purchaseCrypto_step1_canvas-wrap-step1 {
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  text-decoration: none;
  display: flex;
  overflow: hidden;
}

.purchaseCrypto_step1_step1content {
  grid-row-gap: 2.5rem;
  background-color: #fff;
  border-top-right-radius: 1.25rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding-top: 2.5rem;
  padding-right: 2.5rem;
  text-decoration: none;
  display: flex;
  overflow: hidden;
  box-shadow: 0 .25rem 1.25rem #0000001a;
  width: calc(100% - 8rem);
  height: calc(100% - 8rem);
}

.purchaseCrypto_step1_fauxui_header {
  grid-column-gap: 1.5rem;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: flex-start;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step1_fauxui_06 {
  grid-column-gap: .625rem;
  opacity: .1;
  background-color: #6f6f6f;
  border-top-right-radius: 6.25rem;
  border-bottom-right-radius: 6.25rem;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  text-decoration: none;
}

.purchaseCrypto_step1_fauxui_05 {
  opacity: .1;
  background-color: #6f6f6f;
  border-radius: .5rem;
  width: 7.8125rem;
  height: 3.5rem;
  text-decoration: none;
}

.purchaseCrypto_step1_buttons {
  grid-column-gap: .625rem;
  background-image: linear-gradient(78.77deg, #f64c07 0%, #ff7943 100%);
  border: .125rem solid #f64c07;
  border-radius: .5rem;
  flex: 0 auto;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  text-decoration: none;
  display: flex;
  box-shadow: 0 .25rem .625rem #eb855c40;
  cursor: pointer;
}

.purchaseCrypto_step1_button-large-2 {
  color: #fff;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 140%;
  text-decoration: none;
}

.purchaseCrypto_step1_body-style {
  grid-row-gap: 4rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  text-decoration: none;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
}

.purchaseCrypto_step1_main-content {
  grid-row-gap: 1.5rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step1_fauxui_04 {
  background-image: linear-gradient(270deg, #ededed, #f7f7f7);
  border-top-right-radius: .5rem;
  border-bottom-right-radius: .5rem;
  height: 19.8125rem;
}

.purchaseCrypto_step1_fauxui_wrap {
  grid-column-gap: 2.5rem;
  flex: 1;
  justify-content: space-between;
  align-items: stretch;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step1_fauxui_03 {
  background-image: linear-gradient(270deg, #f7f7f7, #ededed);
  border-top-right-radius: .5rem;
  border-bottom-right-radius: .5rem;
  flex: 1;
  height: 7.5rem;
  text-decoration: none;
}

.purchaseCrypto_step1_fauxui_02 {
  background-image: linear-gradient(270deg, #f7f7f7, #ededed);
  border-radius: .5rem;
  flex: 1;
  height: 7.5rem;
  text-decoration: none;
}

.purchaseCrypto_step1_fauxui_01 {
  background-image: linear-gradient(270deg, #ededed, #f7f7f7);
  border-top-right-radius: .5rem;
  height: 4.75rem;
  flex-grow: 1;
}

.purchaseCrypto_step1_canvas-wrap-step2 {
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

.purchaseCrypto_step1_main-container {
  grid-column-gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 802px;
  height: 854px;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step1_container {
  grid-row-gap: 40px;
  background-color: #fff;
  border-radius: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  max-width: 462px;
  padding: 40px;
  text-decoration: none;
  display: flex;
  position: relative;
  box-shadow: 0 4px 20px #0000001a;
}

.purchaseCrypto_step1_title-style {
  color: #2f2f30;
  letter-spacing: -.04em;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.purchaseCrypto_step1_container-2 {
  grid-row-gap: 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step1_container-3 {
  grid-column-gap: 10px;
  cursor: pointer;
  background-color: #f9f9f9;
  border: 2px solid #f64c07;
  border-radius: 8px;
  flex: none;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  display: flex;
  box-shadow: 0 4px 10px #eb855c3d;
  transition: background ease 0.3s;
}

.purchaseCrypto_step1_container-3:hover {
  background-color: #f64c071f;
}

.purchaseCrypto_step1_container-4 {
  grid-column-gap: 10px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step1_btc {
  background-color: #f64c07;
  border-radius: 8px;
  flex: none;
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
}

.purchaseCrypto_step1_wallet-type {
  color: #1f1f1f;
  letter-spacing: -.04em;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.purchaseCrypto_step1_container-5 {
  grid-column-gap: 24px;
  background-color: #f9f9f9;
  border: 1px solid #ebebeb;
  border-radius: 12px;
  flex: none;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step1_btc-2 {
  background-color: #114537;
  border-radius: 8px;
  flex: none;
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
}

.purchaseCrypto_step1_btc-3 {
  background-color: #fdebda;
  border-radius: 8px;
  flex: none;
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
}

.purchaseCrypto_step1_container-6-alt {
  background-color: #f9f9f9;
  border: 1px solid #ebebeb;
  border-radius: 12px;
  flex: none;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step1_btc-4 {
  background-color: #1f1f1f1a;
  border-radius: 8px;
  flex: none;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  overflow: hidden;
}

.purchaseCrypto_step1_icon {
  object-fit: cover;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
}

.purchaseCrypto_step1_container-7 {
  grid-column-gap: 24px;
  background-color: #1f1f1f1a;
  border-radius: 8px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  padding: 6px 8px;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step1_wallet-count {
  color: #7a7a7a;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .875rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.purchaseCrypto_step1_container-8 {
  grid-row-gap: 32px;
  background-color: #fff;
  border-radius: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 40px;
  text-decoration: none;
  display: flex;
  position: absolute;
  inset: 0%;
  box-shadow: 0 4px 20px #0000001a;
}

.purchaseCrypto_step1_title-style-2 {
  color: #2f2f30;
  text-align: center;
  letter-spacing: -.04em;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.purchaseCrypto_step1_qr-code-container {
  grid-row-gap: 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  text-decoration: none;
  display: flex;
  position: relative;
}

.purchaseCrypto_step1_qr-code-container:after {
  content: "";
  position: absolute;
  height: 6px;
  width: 60%;
  border-radius: 6px;
  background: #F64C07;
  animation: scan 2s cubic-bezier(1.000, 0.000, 0.000, 1.000) infinite both;
}

@keyframes scan {
  0% {
    transform: translateY(24px);
  }
  50% {
    transform: translateY(212px);
  }
  100% {
    transform: translateY(24px);
  }
}

.purchaseCrypto_step1_qr-code-image {
  object-fit: cover;
}

.purchaseCrypto_step1_instruction {
  color: #7a7a7a;
  text-align: center;
  letter-spacing: -.04em;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.purchaseCrypto_step1_link-container {
  grid-column-gap: 8px;
  background-color: #1f1f1f1a;
  border-radius: 8px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  padding: 6px 12px;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step1_link-text {
  color: #7a7a7a;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.purchaseCrypto_step1_canvas-wrap-step3 {
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

.purchaseCrypto_step1_container-phone {
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

.purchaseCrypto_step1_bgcontent {
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

.purchaseCrypto_step1_fw-bg-content {
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

.purchaseCrypto_step1_bg-content-wrap {
  grid-column-gap: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step1_fw-bg-content-2 {
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

.purchaseCrypto_step1_modal {
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

.purchaseCrypto_step1_modal.is--2 {
  transform: translate(0, 100%);
}

.purchaseCrypto_step1_contentpanel {
  grid-row-gap: 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step1_url {
  text-align: center;
  text-decoration: none;
}

.purchaseCrypto_step1_url-text {
  color: #1f1f1f;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 140%;
  text-decoration: none;
}

.purchaseCrypto_step1_tabs {
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step1_accounts-tab {
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

.purchaseCrypto_step1_accounts-tab-text {
  color: #f64c07;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .875rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.purchaseCrypto_step1_permissions-tab {
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

.purchaseCrypto_step1_permissions-tab-text {
  color: #7a7a7a;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .875rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.purchaseCrypto_step1_buttons-wallet {
  background-color: #f9f9f9;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step1_wallet {
  grid-column-gap: 16px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step1_wallet-icon {
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

.purchaseCrypto_step1_wallet-initials {
  color: #f64c07;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .875rem;
  font-weight: 600;
  line-height: 130%;
  text-decoration: none;
}

.purchaseCrypto_step1_wallet-details {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step1_wallet-name {
  color: #1f1f1f;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 150%;
  text-decoration: none;
}

.purchaseCrypto_step1_wallet-address {
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

.purchaseCrypto_step1_wallet-balance {
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step1_balance-amount {
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

.purchaseCrypto_step1_balance-details {
  grid-column-gap: 4px;
  flex: 0 auto;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step1_balance-icons {
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step1_balance-icon {
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

.purchaseCrypto_step1_balance-icon.is--1 {
  background-color: #ffd2bf;
  margin-right: -4px;
}

.purchaseCrypto_step1_balance-icon.is--2 {
  background-color: #ffa37c;
  margin-right: -4px;
}

.purchaseCrypto_step1_balance-icon.is--3 {
  background-color: #ff7237;
  margin-right: -4px;
}

.purchaseCrypto_step1_balance-icon.is--4 {
  background-color: #f64c07;
}

.purchaseCrypto_step1_edit-accounts {
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

.purchaseCrypto_step1_actions {
  grid-column-gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step1_buttons-3 {
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

.purchaseCrypto_step1_button-large-2-alt {
  color: #7a7a7a;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 140%;
  text-decoration: none;
}

.purchaseCrypto_step1_buttons-4 {
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

.purchaseCrypto_step1_button-large-3 {
  color: #fff;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 140%;
  text-decoration: none;
}

.purchaseCrypto_step1_bg-overlay {
  background-color: #0003;
  position: absolute;
  inset: 0%;
}

.purchaseCrypto_step1_container-2-alt {
  grid-row-gap: 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step1_header-style {
  grid-row-gap: 8px;
  text-align: center;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.purchaseCrypto_step1_title-style-compact {
  color: #1f1f1f;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 140%;
  text-decoration: none;
}

.purchaseCrypto_step1_subtitle {
  color: #7a7a7a;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .875rem;
  font-weight: 400;
  line-height: 130%;
  text-decoration: none;
}

.purchaseCrypto_step1_content-alt {
  grid-row-gap: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step1_buttons-5 {
  background-color: #f9f9f9;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step1_wallet-container {
  grid-column-gap: 16px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step1_wallet-network {
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

.purchaseCrypto_step1_wallet-arrow {
  object-fit: cover;
  flex: none;
  width: 24px;
  height: 24px;
  overflow: hidden;
}

.purchaseCrypto_step1_request-label {
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

.purchaseCrypto_step1_request-url {
  color: #1f1f1f;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .875rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.purchaseCrypto_step1_buttons-6 {
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

.purchaseCrypto_step1_container-3-loader {
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

.purchaseCrypto_step1_loader-wrap {
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

.purchaseCrypto_step1_container-4 {
  grid-row-gap: 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  text-decoration: none;
  display: flex;
}

.purchaseCrypto_step1_container-4_alt {
  width: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
}

.purchaseCrypto_step1_subtitle-2 {
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

.purchaseCrypto_step1_loader-5 {
  height: 32px;
  width: 32px;
  position: relative;
  animation: loader-5-1 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
}
@keyframes loader-5-1 {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.purchaseCrypto_step1_loader-5::before {
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

.purchaseCrypto_step1_loader-5::after {
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

.purchaseCrypto_step1_loader-5 span {
  display: block;
  position: absolute;
  top: 0; left: 0;
  bottom: 0; right: 0;
  margin: auto;
  height: 32px;
  width: 32px;
}

.purchaseCrypto_step1_loader-5 span::before {
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

.purchaseCrypto_step1_loader-5 span::after {
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

.purchaseCrypto_step1_pc-step1-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.purchaseCrypto_step1_canvas-wrap-step1,
.canvas-wrap-step2,
.canvas-wrap-step3 {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

[data-pc-trigger-connect] {
  -webkit-animation: shadow-drop-center 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s infinite alternate-reverse both;
	animation: shadow-drop-center 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s infinite alternate-reverse both;
}

@-webkit-keyframes shadow-drop-center {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(235, 133, 92, 15);
            box-shadow: 0 0 0 0 rgba(235, 133, 92, 15);
  }
  100% {
    -webkit-box-shadow: 0 0 20px 0px rgba(235, 133, 92, 15);
            box-shadow: 0 0 20px 0px rgba(235, 133, 92, 15);
  }
}
@keyframes shadow-drop-center {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(235, 133, 92, 15);
            box-shadow: 0 0 0 0 rgba(235, 133, 92, 15);
  }
  100% {
    -webkit-box-shadow: 0 0 20px 0px rgba(235, 133, 92, 15);
            box-shadow: 0 0 20px 0px rgba(235, 133, 92, 15);
  }
}


      `;
      document.head.appendChild(styleEl);
    }

    rootEl.innerHTML = `
      <div class="purchaseCrypto_step1_pc-step1-wrap">
        <div data-pc-view="1" class="purchaseCrypto_step1_canvas-wrap-step1">
          <div class="purchaseCrypto_step1_step1content">
            <div class="purchaseCrypto_step1_fauxui_header">
              <div class="purchaseCrypto_step1_fauxui_06"></div>
              <div class="purchaseCrypto_step1_fauxui_05"></div>
              <div data-pc-trigger-connect class="purchaseCrypto_step1_buttons">
                <div class="purchaseCrypto_step1_button-large-2">Connect wallet</div>
              </div>
            </div>
            <div class="purchaseCrypto_step1_body-style">
              <div class="purchaseCrypto_step1_main-content">
                <div class="purchaseCrypto_step1_fauxui_04"></div>
                <div class="purchaseCrypto_step1_fauxui_wrap">
                  <div class="purchaseCrypto_step1_fauxui_03"></div>
                  <div class="purchaseCrypto_step1_fauxui_02"></div>
                </div>
              </div>
              <div class="purchaseCrypto_step1_fauxui_01"></div>
            </div>
          </div>
        </div>

        <div data-pc-view="2" class="purchaseCrypto_step1_canvas-wrap-step2">
          <div class="purchaseCrypto_step1_main-container">
            <div class="purchaseCrypto_step1_container">
              <div class="purchaseCrypto_step1_title-style">Connect Wallet</div>
              <div class="purchaseCrypto_step1_container-2">
                <div data-pc-trigger-wallet class="purchaseCrypto_step1_container-3">
                  <div class="purchaseCrypto_step1_container-4_alt">
                    <div class="purchaseCrypto_step1_btc"></div>
                    <div class="purchaseCrypto_step1_wallet-type">Wallet type 1</div>
                  </div>
                </div>
                <div class="purchaseCrypto_step1_container-5">
                  <div class="purchaseCrypto_step1_container-4_alt">
                    <div class="purchaseCrypto_step1_btc-2"></div>
                    <div class="purchaseCrypto_step1_wallet-type">Wallet type 2</div>
                  </div>
                </div>
                <div class="purchaseCrypto_step1_container-5">
                  <div class="purchaseCrypto_step1_container-4_alt">
                    <div class="purchaseCrypto_step1_btc-3"></div>
                    <div class="purchaseCrypto_step1_wallet-type">Wallet type 3</div>
                  </div>
                </div>
                <div class="purchaseCrypto_step1_container-6-alt">
                  <div class="purchaseCrypto_step1_container-4_alt">
                    <div class="purchaseCrypto_step1_btc-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="purchaseCrypto_step1_icon">
                        <path d="M10 13H3C2.73478 13 2.48043 13.1054 2.29289 13.2929C2.10536 13.4804 2 13.7348 2 14V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H10C10.2652 22 10.5196 21.8946 10.7071 21.7071C10.8946 21.5196 11 21.2652 11 21V14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13ZM9 20H4V15H9V20ZM21 2H14C13.7348 2 13.4804 2.10536 13.2929 2.29289C13.1054 2.48043 13 2.73478 13 3V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11H21C21.2652 11 21.5196 10.8946 21.7071 10.7071C21.8946 10.5196 22 10.2652 22 10V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2V2ZM20 9H15V4H20V9ZM21 13H14C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14V21C13 21.2652 13.1054 21.5196 13.2929 21.7071C13.4804 21.8946 13.7348 22 14 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V14C22 13.7348 21.8946 13.4804 21.7071 13.2929C21.5196 13.1054 21.2652 13 21 13ZM20 20H15V15H20V20ZM10 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H10C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2V2ZM9 9H4V4H9V9Z" fill="#7A7A7A"></path>
                      </svg>
                    </div>
                    <div class="purchaseCrypto_step1_wallet-type">All Wallets</div>
                  </div>
                  <div class="purchaseCrypto_step1_container-7">
                    <div class="purchaseCrypto_step1_wallet-count">50+</div>
                  </div>
                </div>
              </div>

              <div data-pc-view="2-qr" class="purchaseCrypto_step1_container-8">
                <div class="purchaseCrypto_step1_title-style-2">Wallet type 1</div>
                <div class="purchaseCrypto_step1_qr-code-container">
                  <div class="purchaseCrypto_step1_qr-code">
                    <img src="https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69284e1bcce49eed93427489_SimQR.png" loading="auto" width="232" height="232" alt="" class="purchaseCrypto_step1_qr-code-image">
                  </div>
                  <div class="purchaseCrypto_step1_instruction">Scan this QR Code with your phone</div>
                </div>
                <div class="purchaseCrypto_step1_link-container">
                  <div class="purchaseCrypto_step1_link-text">Copy link</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" class="purchaseCrypto_step1_icon">
                    <path d="M17.5 7.45033C17.4913 7.37377 17.4746 7.29835 17.45 7.22533V7.15033C17.4099 7.06464 17.3565 6.98588 17.2917 6.91699V6.91699L12.2917 1.91699C12.2228 1.85217 12.144 1.79873 12.0583 1.75866C12.0335 1.75513 12.0082 1.75513 11.9833 1.75866C11.8987 1.71011 11.8052 1.67895 11.7083 1.66699H8.33333C7.67029 1.66699 7.03441 1.93038 6.56557 2.39923C6.09673 2.86807 5.83333 3.50395 5.83333 4.16699V5.00033H5C4.33696 5.00033 3.70107 5.26372 3.23223 5.73256C2.76339 6.2014 2.5 6.83728 2.5 7.50033V15.8337C2.5 16.4967 2.76339 17.1326 3.23223 17.6014C3.70107 18.0703 4.33696 18.3337 5 18.3337H11.6667C12.3297 18.3337 12.9656 18.0703 13.4344 17.6014C13.9033 17.1326 14.1667 16.4967 14.1667 15.8337V15.0003H15C15.663 15.0003 16.2989 14.7369 16.7678 14.2681C17.2366 13.7993 17.5 13.1634 17.5 12.5003V7.50033C17.5 7.50033 17.5 7.50033 17.5 7.45033ZM12.5 4.50866L14.6583 6.66699H13.3333C13.1123 6.66699 12.9004 6.57919 12.7441 6.42291C12.5878 6.26663 12.5 6.05467 12.5 5.83366V4.50866ZM12.5 15.8337C12.5 16.0547 12.4122 16.2666 12.2559 16.4229C12.0996 16.5792 11.8877 16.667 11.6667 16.667H5C4.77899 16.667 4.56702 16.5792 4.41074 16.4229C4.25446 16.2666 4.16667 16.0547 4.16667 15.8337V7.50033C4.16667 7.27931 4.25446 7.06735 4.41074 6.91107C4.56702 6.75479 4.77899 6.66699 5 6.66699H5.83333V12.5003C5.83333 13.1634 6.09673 13.7993 6.56557 14.2681C7.03441 14.7369 7.67029 15.0003 8.33333 15.0003H12.5V15.8337ZM15.8333 12.5003C15.8333 12.7213 15.7455 12.9333 15.5893 13.0896C15.433 13.2459 15.221 13.3337 15 13.3337H8.33333C8.11232 13.3337 7.90036 13.2459 7.74408 13.0896C7.5878 12.9333 7.5 12.7213 7.5 12.5003V4.16699C7.5 3.94598 7.5878 3.73402 7.74408 3.57774C7.90036 3.42146 8.11232 3.33366 8.33333 3.33366H10.8333V5.83366C10.8333 6.4967 11.0967 7.13259 11.5656 7.60143C12.0344 8.07027 12.6703 8.33366 13.3333 8.33366H15.8333V12.5003Z" fill="#7A7A7A"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-pc-view="3" class="purchaseCrypto_step1_canvas-wrap-step3">
          <div class="purchaseCrypto_step1_container-phone">
            <div data-pc-modal-connect class="purchaseCrypto_step1_modal">
              <div class="purchaseCrypto_step1_contentpanel">
                <div class="purchaseCrypto_step1_url">
                  <div class="purchaseCrypto_step1_url-text">https://www.exampleURL.com</div>
                </div>
                <div class="purchaseCrypto_step1_tabs">
                  <div class="purchaseCrypto_step1_accounts-tab">
                    <div class="purchaseCrypto_step1_accounts-tab-text">Accounts</div>
                  </div>
                  <div class="purchaseCrypto_step1_permissions-tab">
                    <div class="purchaseCrypto_step1_permissions-tab-text">Permissions</div>
                  </div>
                </div>
                <div class="purchaseCrypto_step1_contentpanel">
                  <div class="purchaseCrypto_step1_buttons-wallet">
                    <div class="purchaseCrypto_step1_wallet">
                      <div class="purchaseCrypto_step1_wallet-icon">
                        <div class="purchaseCrypto_step1_wallet-initials">AB</div>
                      </div>
                      <div class="purchaseCrypto_step1_wallet-details">
                        <div class="purchaseCrypto_step1_wallet-name">Wallet 1</div>
                        <div class="purchaseCrypto_step1_wallet-address">bc1qxy...9a0f</div>
                      </div>
                    </div>
                    <div class="purchaseCrypto_step1_wallet-balance">
                      <div class="purchaseCrypto_step1_balance-amount">0.0250 BTC</div>
                      <div class="purchaseCrypto_step1_balance-details">
                        <div class="purchaseCrypto_step1_balance-icons">
                          <div class="purchaseCrypto_step1_balance-icon is--1"></div>
                          <div class="purchaseCrypto_step1_balance-icon is--2"></div>
                          <div class="purchaseCrypto_step1_balance-icon is--3"></div>
                          <div class="purchaseCrypto_step1_balance-icon is--4"></div>
                        </div>
                        <div class="purchaseCrypto_step1_wallet-address">+7</div>
                      </div>
                    </div>
                  </div>
                  <div class="purchaseCrypto_step1_edit-accounts">Edit accounts</div>
                </div>
              </div>
              <div class="purchaseCrypto_step1_actions">
                <div class="purchaseCrypto_step1_buttons-3">
                  <div class="purchaseCrypto_step1_button-large-2-alt">Cancel</div>
                </div>
                <div data-pc-trigger-connect-confirm class="purchaseCrypto_step1_buttons-4">
                  <div class="purchaseCrypto_step1_button-large-3">Connect</div>
                </div>
              </div>
            </div>

            <div data-pc-modal-signature class="purchaseCrypto_step1_modal is--2">
              <div class="purchaseCrypto_step1_container-2-alt">
                <div class="purchaseCrypto_step1_header-style">
                  <div class="purchaseCrypto_step1_title-style-compact">Signature request</div>
                  <div class="purchaseCrypto_step1_subtitle">Review request details before you confirm.</div>
                </div>
                <div class="purchaseCrypto_step1_content-alt">
                  <div class="purchaseCrypto_step1_container-2-alt">
                    <div class="purchaseCrypto_step1_buttons-5">
                      <div class="purchaseCrypto_step1_wallet-container">
                        <div class="purchaseCrypto_step1_wallet-icon">
                          <div class="purchaseCrypto_step1_wallet-initials">AB</div>
                        </div>
                        <div class="purchaseCrypto_step1_wallet-details">
                          <div class="purchaseCrypto_step1_wallet-name">Wallet 1</div>
                          <div class="purchaseCrypto_step1_wallet-network">Bitcoin Mainnet</div>
                        </div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="purchaseCrypto_step1_wallet-arrow">
                        <path d="M14.8297 11.2897L10.5897 7.0497C10.4967 6.95598 10.3861 6.88158 10.2643 6.83081C10.1424 6.78004 10.0117 6.75391 9.8797 6.75391C9.74769 6.75391 9.61698 6.78004 9.49512 6.83081C9.37326 6.88158 9.26266 6.95598 9.1697 7.0497C8.98345 7.23707 8.87891 7.49052 8.87891 7.7547C8.87891 8.01889 8.98345 8.27234 9.1697 8.4597L12.7097 11.9997L9.1697 15.5397C8.98345 15.7271 8.87891 15.9805 8.87891 16.2447C8.87891 16.5089 8.98345 16.7623 9.1697 16.9497C9.26314 17.0424 9.37395 17.1157 9.49579 17.1655C9.61763 17.2152 9.74809 17.2405 9.8797 17.2397C10.0113 17.2405 10.1418 17.2152 10.2636 17.1655C10.3854 17.1157 10.4963 17.0424 10.5897 16.9497L14.8297 12.7097C14.9234 12.6167 14.9978 12.5061 15.0486 12.3843C15.0994 12.2624 15.1255 12.1317 15.1255 11.9997C15.1255 11.8677 15.0994 11.737 15.0486 11.6151C14.9978 11.4933 14.9234 11.3827 14.8297 11.2897Z" fill="#7A7A7A"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="purchaseCrypto_step1_container-2-alt">
                    <div class="purchaseCrypto_step1_buttons-5">
                      <div class="purchaseCrypto_step1_request-label">Request from</div>
                      <div class="purchaseCrypto_step1_request-url">www.exampleURL.com</div>
                    </div>
                  </div>
                  <div class="purchaseCrypto_step1_buttons-6">
                    <div class="purchaseCrypto_step1_request-label">Message</div>
                    <div class="purchaseCrypto_step1_request-url">Verify your account in exampleURL.com</div>
                  </div>
                </div>
              </div>
              <div class="purchaseCrypto_step1_actions">
                <div class="purchaseCrypto_step1_buttons-3">
                  <div class="purchaseCrypto_step1_button-large-2-alt">Cancel</div>
                </div>
                <div data-pc-trigger-signature-confirm class="purchaseCrypto_step1_buttons-4">
                  <div class="purchaseCrypto_step1_button-large-3">Confirm</div>
                </div>
              </div>
            </div>

            <div class="purchaseCrypto_step1_bgcontent">
              <div class="purchaseCrypto_step1_fw-bg-content"></div>
              <div class="purchaseCrypto_step1_bg-content-wrap">
                <div class="purchaseCrypto_step1_fw-bg-content"></div>
                <div class="purchaseCrypto_step1_fw-bg-content"></div>
              </div>
              <div class="purchaseCrypto_step1_fw-bg-content-2"></div>
              <div class="purchaseCrypto_step1_fw-bg-content"></div>
              <div class="purchaseCrypto_step1_bg-overlay"></div>
            </div>
          </div>

          <div data-pc-loader class="purchaseCrypto_step1_container-3-loader">
            <div class="purchaseCrypto_step1_loader-wrap">
              <div class="purchaseCrypto_step1_loader-5 center"><span></span></div>
            </div>
            <div class="purchaseCrypto_step1_container-4">
              <div class="purchaseCrypto_step1_title-style-2">Verify your wallet</div>
              <div class="purchaseCrypto_step1_subtitle-2">Validating the ownership of your wallet</div>
            </div>
          </div>
        </div>
      </div>
    `;

    const view1 = rootEl.querySelector('[data-pc-view="1"]');
    const view2 = rootEl.querySelector('[data-pc-view="2"]');
    const view2QR = rootEl.querySelector('[data-pc-view="2-qr"]');
    const view3 = rootEl.querySelector('[data-pc-view="3"]');

    const connectBtn = rootEl.querySelector("[data-pc-trigger-connect]");
    const walletTypeBtn = rootEl.querySelector("[data-pc-trigger-wallet]");

    const phoneContainer = view3?.querySelector(".container-phone");
    const modalConnect = rootEl.querySelector("[data-pc-modal-connect]");
    const modalSignature = rootEl.querySelector("[data-pc-modal-signature]");
    const loader = rootEl.querySelector("[data-pc-loader]");

    const triggerConnectConfirm = rootEl.querySelector(
      "[data-pc-trigger-connect-confirm]"
    );
    const triggerSignatureConfirm = rootEl.querySelector(
      "[data-pc-trigger-signature-confirm]"
    );

    if (
      !view1 ||
      !view2 ||
      !view2QR ||
      !view3 ||
      !connectBtn ||
      !walletTypeBtn ||
      !modalConnect ||
      !modalSignature ||
      !loader ||
      !triggerConnectConfirm ||
      !triggerSignatureConfirm
    ) {
      console.warn(
        "[purchaseCrypto_step1_connectWallet] Missing required elements."
      );
      done?.();
      return;
    }

    let completed = false;
    const safeDone = () => {
      if (completed) return;
      completed = true;
      glowTl?.kill?.();
      if (gs) gs.set(connectBtn, { boxShadow: "none" });
      done?.();
    };

    if (gs) {
      gs.set(view1, { autoAlpha: 0, y: 80 });
      gs.set(view2, { autoAlpha: 0, y: 120 });
      gs.set(view2QR, { autoAlpha: 0, yPercent: 40 });
      gs.set(view3, { autoAlpha: 0, y: 120 });
      gs.set(loader, { autoAlpha: 0, yPercent: 40 });
      gs.set(modalSignature, { yPercent: 100 });

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
      view3.style.opacity = "0";
      loader.style.opacity = "0";
    }

    let glowTl = null;
    if (gs) {
      glowTl = gs.timeline({
        repeat: -1,
        repeatDelay: 0.1,
        defaults: { ease: "power2.inOut" },
      });
    }

    const goToView2 = () => {
      if (!gs) {
        view1.style.display = "none";
        view2.style.opacity = "1";
        return;
      }

      glowTl?.pause?.();
      const tl = gs.timeline({ defaults: { ease: "power2.out" } });

      tl.to(connectBtn, { scale: 0.98, duration: 0.12 })
        .to(connectBtn, { scale: 1, duration: 0.18 })
        .to(view1, { autoAlpha: 0, y: -40, duration: 0.4 }, "+=0.05")
        .fromTo(
          view2,
          { autoAlpha: 0, y: 80 },
          { autoAlpha: 1, y: 0, duration: 0.6 },
          "-=0.1"
        );
    };

    const showQRAndThenPhone = () => {
      if (!gs) {
        view2QR.style.opacity = "1";
        setTimeout(() => {
          view2.style.display = "none";
          view3.style.opacity = "1";
        }, 1500);
        return;
      }

      const children = Array.from(view2QR.children);

      gs.timeline({ defaults: { ease: "power2.out" } })
        .fromTo(
          view2QR,
          { autoAlpha: 0, yPercent: 40 },
          { autoAlpha: 1, yPercent: 0, duration: 0.5 }
        )
        .fromTo(
          children,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.3, stagger: 0.06 },
          "-=0.2"
        )
        .to({}, { duration: 1.3 })
        .to(view2, { autoAlpha: 0, y: -40, duration: 0.4 })
        .fromTo(
          view3,
          { autoAlpha: 0, y: 80 },
          { autoAlpha: 1, y: 0, duration: 0.6 },
          "-=0.1"
        );
    };

    const handleConnectClick = () => {
      goToView2();
    };

    let walletClicked = false;
    const handleWalletClick = () => {
      if (walletClicked) return;
      walletClicked = true;
      showQRAndThenPhone();
    };

    const handleConnectConfirmClick = () => {
      if (!gs) {
        loader.style.opacity = "1";
        setTimeout(() => {
          loader.style.opacity = "0";
          modalConnect.style.display = "none";
          modalSignature.style.transform = "translateY(0)";
        }, 1500);
        return;
      }

      const tl = gs.timeline({ defaults: { ease: "power2.out" } });

      tl.to(triggerConnectConfirm, { scale: 0.98, duration: 0.12 })
        .to(triggerConnectConfirm, { scale: 1, duration: 0.18 })
        .to(
          modalConnect,
          {
            yPercent: 100,
            autoAlpha: 0,
            duration: 0.6,
          },
          "-=0.2"
        )
        .to(phoneContainer, { scale: 0.7, duration: 0.5 }, "-=0.4")
        .set(loader, { pointerEvents: "auto" })
        .fromTo(
          loader,
          { autoAlpha: 0, yPercent: 40 },
          { autoAlpha: 1, yPercent: 0, duration: 0.4 },
          "-=0.1"
        )
        .fromTo(
          Array.from(loader.children),
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.3, stagger: 0.06 },
          "<0.05"
        )
        .to({}, { duration: 1.5 })
        .to(loader, {
          autoAlpha: 0,
          yPercent: 40,
          duration: 0.4,
          onComplete: () => {
            loader.style.pointerEvents = "none";
          },
        })
        .to(phoneContainer, { scale: 1, duration: 0.5 }, "-=0.2")
        .to(modalSignature, { yPercent: -100, duration: 0.8 }, "-=0.25");
    };

    const handleSignatureConfirmClick = () => {
      if (!gs) {
        safeDone();
        return;
      }

      gs.timeline({ defaults: { ease: "power2.out" } })
        .to(triggerSignatureConfirm, { scale: 0.98, duration: 0.12 })
        .to(triggerSignatureConfirm, { scale: 1, duration: 0.18 })
        .add(() => safeDone(), "+=0.05");
    };

    connectBtn.addEventListener("click", handleConnectClick);
    walletTypeBtn.addEventListener("click", handleWalletClick);
    triggerConnectConfirm.addEventListener("click", handleConnectConfirmClick);
    triggerSignatureConfirm.addEventListener(
      "click",
      handleSignatureConfirmClick
    );
  },
};
