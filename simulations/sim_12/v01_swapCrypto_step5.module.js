// swapCrypto_step5.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = window.gsap || null;

    if (!rootEl) return;

    const STYLE_ID = "swapCrypto_step5_styles";

    // Inject styles once
    if (!document.getElementById(STYLE_ID)) {
      const styleEl = document.createElement("style");
      styleEl.id = STYLE_ID;
      styleEl.textContent = `
.canvas-wrap {
  grid-row-gap: 64px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}

.container {
  background-color: #fff;
  border-radius: 20px;
  flex-flow: column;
  justify-content: flex-end;
  align-items: stretch;
  max-width: 360px;
  width: 100%;
  height: 660px;
  display: flex;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px #0000001a;
}

.container-fauxui {
  grid-row-gap: 24px;
  background-color: #0006;
  flex-direction: column;
  flex: none;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  inset: 0%;
}

.container-fauxui.is--alt {
  pointer-events: none;
  background-color: #0000;
  align-items: stretch;
  padding-top: 32px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
}

.container-main {
  grid-row-gap: 40px;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 360px;
  padding: 24px;
  display: flex;
  position: relative;
}

.container-inner {
  grid-row-gap: 32px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  display: flex;
}

.title-el {
  color: #1f1f1f;
  text-align: center;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 140%;
}

.container-content {
  grid-row-gap: 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  display: flex;
}

.container-crypto {
  grid-row-gap: 12px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  display: flex;
}

.crypto-el {
  grid-row-gap: 8px;
  background-color: #f9f9f9;
  border: 2px solid #ebebeb;
  border-radius: 12px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px;
  display: flex;
}

.label-el {
  grid-column-gap: 8px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  display: flex;
}

.text {
  color: #1f1f1f;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .875rem;
  font-weight: 600;
  line-height: 130%;
  text-decoration: none;
}

.container-sb {
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-decoration: none;
  display: flex;
}

.crypto {
  grid-column-gap: 12px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  display: flex;
}

.crypto .text-2 {
  font-size: 1.2rem;
}

.crypto-text {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-decoration: none;
  display: flex;
}

.text-2 {
  color: #1f1f1f;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.container-11 {
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-decoration: none;
  display: flex;
}

.amount {
  color: #1f1f1f;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.amount-in-usd {
  opacity: .2;
  color: #1f1f1f;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: -0.5rem;
  font-size: .875rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.label-style-3 {
  grid-row-gap: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-decoration: none;
  display: flex;
}

.container-12 {
  grid-column-gap: 8px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: flex-start;
  text-decoration: none;
  display: flex;
}

.container-details {
  grid-row-gap: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  text-decoration: none;
  display: flex;
}

.label-style-4 {
  color: #7a7a7a;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.container-14 {
  grid-column-gap: 8px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  display: flex;
}

.container-btn-wrap {
  grid-column-gap: 16px;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  text-decoration: none;
  display: flex;
}

.buttons {
  grid-column-gap: 10px;
  border: 1px solid #7a7a7a;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
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

.buttons-3 {
  grid-column-gap: 10px;
  cursor: pointer;
  background-image: linear-gradient(81.11deg, #f64c07, #ff7943);
  border: 2px solid #f64c07;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
}

.button-large-3 {
  color: #fff;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 140%;
  text-decoration: none;
}

.crypto_ico {
  background-color: #0000000a;
  border-radius: 100%;
  flex: none;
  width: 32px;
  height: 32px;
  overflow: hidden;
}

.crypto_ico img {
  width: 32px;
  height: 32px;
  object-fit: cover;
}

.edit-ico {
  flex: none;
  width: 20px;
  height: 20px;
}

.fauxui {
  background-color: #ebebeb;
  border-radius: 8px;
  height: 70px;
}

.fauxui.is--alt {
  height: 24px;
  margin-bottom: 0;
}

.fauxui.is--alt2 {
  width: 50%;
  height: 70px;
  margin-top: 32px;
}
      `;
      document.head.appendChild(styleEl);
    }

    // Static HTML
    rootEl.innerHTML = `
      <div class="canvas-wrap">
        <div data-sim-view-1 class="container">
          <div class="container-fauxui is--alt">
            <div class="fauxui"></div>
            <div class="fauxui is--alt"></div>
            <div class="fauxui is--alt"></div>
            <div class="fauxui is--alt"></div>
            <div class="fauxui is--alt2"></div>
            <div class="fauxui is--alt"></div>
            <div class="fauxui is--alt"></div>
          </div>
          <div class="container-fauxui"></div>
          <div data-sim-view-2 class="container-main">
            <div class="container-inner">
              <div class="title-el">Transaction request</div>
              <div class="container-content">
                <div class="container-crypto">
                  <div class="crypto-el">
                    <div class="label-el">
                      <div class="text">You send</div>
                    </div>
                    <div class="container-sb">
                      <div data-sim-selling-crypto class="crypto">
                        <div data-sim-selected-selling-ico class="crypto_ico"></div>
                        <div class="crypto-text">
                          <div data-sim-selected-selling class="text-2">USDC</div>
                        </div>
                      </div>
                      <div class="container-11">
                        <div data-sim-selling-input class="amount">10.00</div>
                        <div class="amount-in-usd">$10.00</div>
                      </div>
                    </div>
                  </div>
                  <div class="crypto-el">
                    <div class="label-el">
                      <div class="text">You receive</div>
                    </div>
                    <div class="container-sb">
                      <div data-sim-buying-crypto class="crypto">
                        <div data-sim-selected-buying-ico class="crypto_ico"></div>
                        <div class="label-style-3">
                          <div class="container-12">
                            <div data-sim-selected-buying class="text-2">ETH</div>
                          </div>
                        </div>
                      </div>
                      <div class="container-11">
                        <div data-sim-buying-input class="amount">0.002524</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-details">
                  <div class="container-sb">
                    <div class="label-style-4">Network</div>
                    <div data-sim-buying-network class="text-2">Ethereum</div>
                  </div>
                  <div class="container-sb">
                    <div class="label-style-4">Network fee</div>
                    <div class="container-14">
                      <div class="text-2">
                        <span data-sim-network-fee-amount>0.0001</span>
                        <span data-sim-selected-buying>ETH</span>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" class="edit-ico">
                        <path d="M17.4993 10.0003C17.2783 10.0003 17.0664 10.0881 16.9101 10.2444C16.7538 10.3606 16.666 10.6126 16.666 10.8336V15.8336C16.666 16.0546 16.5782 16.2666 16.4219 16.4229C16.2657 16.5791 16.0537 16.6669 15.8327 16.6669H4.16602C3.945 16.6669 3.73304 16.5791 3.57676 16.4229C3.42048 16.2666 3.33268 16.0546 3.33268 15.8336V4.16694C3.33268 3.94593 3.42048 3.73397 3.57676 3.57769C3.73304 3.42141 3.945 3.33361 4.16602 3.33361H9.16602C9.38703 3.33361 9.59899 3.24581 9.75527 3.08953C9.91155 2.93325 9.99935 2.72129 9.99935 2.50027C9.99935 2.27926 9.91155 2.0673 9.75527 1.91102C9.59899 1.75474 9.38703 1.66694 9.16602 1.66694H4.16602C3.50297 1.66694 2.86709 1.93033 2.39825 2.39917C1.92941 2.86802 1.66602 3.5039 1.66602 4.16694V15.8336C1.66602 16.4966 1.92941 17.1325 2.39825 17.6014C2.86709 18.0702 3.50297 18.3336 4.16602 18.3336H15.8327C16.4957 18.3336 17.1316 18.0702 17.6005 17.6014C18.0693 17.1325 18.3327 16.4966 18.3327 15.8336V10.8336C18.3327 10.6126 18.2449 10.3606 18.0886 10.2444C17.9323 10.0881 17.7204 10.0003 17.4993 10.0003ZM4.99935 10.6336V14.1669C4.99935 14.388 5.08715 14.5999 5.24343 14.7562C5.39971 14.9125 5.61167 15.0003 5.83268 15.0003H9.36602C9.47569 15.0009 9.58441 14.9799 9.68594 14.9384C9.78747 14.8969 9.87982 14.8358 9.95768 14.7586L15.7244 8.98361L18.091 6.66694C18.1691 6.58947 18.2311 6.4973 18.2734 6.39576C18.3157 6.29421 18.3375 6.18528 18.3375 6.07527C18.3375 5.96526 18.3157 5.85634 18.2734 5.75479C18.2311 5.65324 18.1691 5.56108 18.091 5.48361L14.5577 1.90861C14.4802 1.8305 14.388 1.76851 14.2865 1.7262C14.1849 1.68389 14.076 1.66211 13.966 1.66211C13.856 1.66211 13.7471 1.68389 13.6455 1.7262C13.544 1.76851 13.4518 1.8305 13.3743 1.90861L11.0243 4.26694L5.24102 10.0419C5.16378 10.1198 5.10268 10.2122 5.06121 10.3137C5.01974 10.4152 4.99872 10.5239 4.99935 10.6336V10.6336ZM13.966 3.67527L16.3243 6.03361L15.141 7.21694L12.7827 4.85861L13.966 3.67527ZM6.66602 10.9753L11.6077 6.03361L13.966 8.39194L9.02435 13.3336H6.66602V10.9753Z" fill="#7A7A7A"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="container-sb">
                    <div class="label-style-4">Speed</div>
                    <div class="container-14">
                      <div class="text-2">Low - 12 sec</div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" class="edit-ico">
                        <path d="M17.4993 10.0003C17.2783 10.0003 17.0664 10.0881 16.9101 10.2444C16.7538 10.3606 16.666 10.6126 16.666 10.8336V15.8336C16.666 16.0546 16.5782 16.2666 16.4219 16.4229C16.2657 16.5791 16.0537 16.6669 15.8327 16.6669H4.16602C3.945 16.6669 3.73304 16.5791 3.57676 16.4229C3.42048 16.2666 3.33268 16.0546 3.33268 15.8336V4.16694C3.33268 3.94593 3.42048 3.73397 3.57676 3.57769C3.73304 3.42141 3.945 3.33361 4.16602 3.33361H9.16602C9.38703 3.33361 9.59899 3.24581 9.75527 3.08953C9.91155 2.93325 9.99935 2.72129 9.99935 2.50027C9.99935 2.27926 9.91155 2.0673 9.75527 1.91102C9.59899 1.75474 9.38703 1.66694 9.16602 1.66694H4.16602C3.50297 1.66694 2.86709 1.93033 2.39825 2.39917C1.92941 2.86802 1.66602 3.5039 1.66602 4.16694V15.8336C1.66602 16.4966 1.92941 17.1325 2.39825 17.6014C2.86709 18.0702 3.50297 18.3336 4.16602 18.3336H15.8327C16.4957 18.3336 17.1316 18.0702 17.6005 17.6014C18.0693 17.1325 18.3327 16.4966 18.3327 15.8336V10.8336C18.3327 10.6126 18.2449 10.3606 18.0886 10.2444C17.9323 10.0881 17.7204 10.0003 17.4993 10.0003ZM4.99935 10.6336V14.1669C4.99935 14.388 5.08715 14.5999 5.24343 14.7562C5.39971 14.9125 5.61167 15.0003 5.83268 15.0003H9.36602C9.47569 15.0009 9.58441 14.9799 9.68594 14.9384C9.78747 14.8969 9.87982 14.8358 9.95768 14.7586L15.7244 8.98361L18.091 6.66694C18.1691 6.58947 18.2311 6.4973 18.2734 6.39576C18.3157 6.29421 18.3375 6.18528 18.3375 6.07527C18.3375 5.96526 18.3157 5.85634 18.2734 5.75479C18.2311 5.65324 18.1691 5.56108 18.091 5.48361L14.5577 1.90861C14.4802 1.8305 14.388 1.76851 14.2865 1.7262C14.1849 1.68389 14.076 1.66211 13.966 1.66211C13.856 1.66211 13.7471 1.68389 13.6455 1.7262C13.544 1.76851 13.4518 1.8305 13.3743 1.90861L11.0243 4.26694L5.24102 10.0419C5.16378 10.1198 5.10268 10.2122 5.06121 10.3137C5.01974 10.4152 4.99872 10.5239 4.99935 10.6336V10.6336ZM13.966 3.67527L16.3243 6.03361L15.141 7.21694L12.7827 4.85861L13.966 3.67527ZM6.66602 10.9753L11.6077 6.03361L13.966 8.39194L9.02435 13.3336H6.66602V10.9753Z" fill="#7A7A7A"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="container-sb">
                    <div class="label-style-4">Minimum Received</div>
                    <div class="text-2">
                      <span data-sim-buying-input>0.002342</span>
                      <span data-sim-selected-buying>ETH</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container-btn-wrap">
                <div class="buttons">
                  <div class="button-large-2">Reject</div>
                </div>
                <div data-sim-trigger-1 class="buttons-3">
                  <div class="button-large-3">Confirm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const view1 = rootEl.querySelector("[data-sim-view-1]");
    const view2Items = rootEl.querySelectorAll(".container-inner > *");
    const view2 = rootEl.querySelector("[data-sim-view-2]");
    const view1In = rootEl.querySelector(".container-fauxui");
    if (!view1 || !view2) return;

    const STORAGE_KEY = "nca_swapCrypto_step3";

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

    const NETWORK_LABELS = {
      eth: "Ethereum",
      btc: "Bitcoin",
      usdc: "Ethereum",
      bnb: "BNB Smart Chain",
      xrp: "XRP Ledger",
    };

    const NETWORK_FEE_CRYPTO = {
      btc: 0.000042,
      eth: 0.00033,
      xrp: 0.001,
      usdc: 1.0,
      bnb: 0.00033,
    };

    // Load saved data from step 3
    const storage = window.localStorage || null;
    let saved = {};
    if (storage) {
      try {
        const raw = storage.getItem(STORAGE_KEY);
        if (raw) saved = JSON.parse(raw);
      } catch (e) {
        saved = {};
      }
    }

    const prices = {
      ...defaultPrices,
      ...(saved && typeof saved.prices === "object" ? saved.prices : {}),
    };

    const state = {
      sellKey: saved.sellKey || "eth",
      buyKey: saved.buyKey || "usdc",
      sellAmount:
        typeof saved.sellAmount === "number" && isFinite(saved.sellAmount)
          ? saved.sellAmount
          : 0,
      buyAmount:
        typeof saved.buyAmount === "number" && isFinite(saved.buyAmount)
          ? saved.buyAmount
          : 0,
      networkName:
        typeof saved.networkName === "string" && saved.networkName.trim()
          ? saved.networkName
          : "Ethereum",
    };

    const getPrice = (key) => {
      const v = prices[key];
      return typeof v === "number" && v > 0 ? v : defaultPrices[key];
    };

    const formatTokenAmount = (val) => {
      if (!val || !isFinite(val)) return "0.00";
      if (Math.abs(val) < 0.00001) return val.toExponential(4);
      const abs = Math.abs(val);
      const formatted = abs.toFixed(6).replace(/0+$/g, "").replace(/\.$/, "");
      return val < 0 ? `-${formatted}` : formatted;
    };

    const formatUsd = (amount, pricePerUnit) => {
      if (!amount || !isFinite(amount) || !pricePerUnit) return "$0";
      const usd = Math.abs(amount) * pricePerUnit;
      if (usd < 0.01) return "<$0.01";
      return `$${usd.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      })}`;
    };

    // DOM refs
    const selectedSellingEls = rootEl.querySelectorAll(
      "[data-sim-selected-selling]"
    );
    const selectedBuyingEls = rootEl.querySelectorAll(
      "[data-sim-selected-buying]"
    );
    const sellingIconWrap = rootEl.querySelector(
      "[data-sim-selected-selling-ico]"
    );
    const buyingIconWrap = rootEl.querySelector(
      "[data-sim-selected-buying-ico]"
    );
    const sellingAmountEls = rootEl.querySelectorAll(
      "[data-sim-selling-input]"
    );
    const buyingAmountEls = rootEl.querySelectorAll("[data-sim-buying-input]");
    const amountInUsdEl = rootEl.querySelector(".amount-in-usd");
    const networkNameEl = rootEl.querySelector("[data-sim-buying-network]");
    const networkFeeAmountEl = rootEl.querySelector(
      "[data-sim-network-fee-amount]"
    );
    const trigger1 = rootEl.querySelector("[data-sim-trigger-1]");

    if (!trigger1) {
      console.warn("[swapCrypto_step5] Missing trigger element.");
      return;
    }

    // Populate labels and icons
    const syncSelectedLabelsAndIcons = () => {
      const sellCrypto = CRYPTOS[state.sellKey];
      const buyCrypto = CRYPTOS[state.buyKey];

      if (sellCrypto) {
        selectedSellingEls.forEach((el) => {
          el.textContent = sellCrypto.symbol;
        });
        if (sellingIconWrap) {
          sellingIconWrap.innerHTML = "";
          const img = document.createElement("img");
          img.src = sellCrypto.img;
          img.alt = sellCrypto.symbol;
          sellingIconWrap.appendChild(img);
        }
      }

      if (buyCrypto) {
        selectedBuyingEls.forEach((el) => {
          el.textContent = buyCrypto.symbol;
        });
        if (buyingIconWrap) {
          buyingIconWrap.innerHTML = "";
          const img = document.createElement("img");
          img.src = buyCrypto.img;
          img.alt = buyCrypto.symbol;
          buyingIconWrap.appendChild(img);
        }
      }
    };

    const updateAmounts = () => {
      const sellText = formatTokenAmount(-state.sellAmount); // "You send" as negative
      const buyText = formatTokenAmount(state.buyAmount);

      sellingAmountEls.forEach((el) => {
        el.textContent = sellText;
      });

      buyingAmountEls.forEach((el) => {
        el.textContent = buyText;
      });

      if (amountInUsdEl) {
        const price = getPrice(state.sellKey);
        amountInUsdEl.textContent = formatUsd(state.sellAmount, price);
      }
    };

    const updateNetworkAndFee = () => {
      if (networkNameEl) {
        const networkLabel =
          NETWORK_LABELS[state.buyKey] || state.networkName || "Ethereum";

        networkNameEl.textContent = networkLabel;
      }

      if (networkFeeAmountEl) {
        const feeCrypto = NETWORK_FEE_CRYPTO[state.buyKey];

        if (typeof feeCrypto === "number") {
          networkFeeAmountEl.textContent = formatTokenAmount(feeCrypto);
        } else {
          // fallback if somehow missing – can be 0 or any default
          networkFeeAmountEl.textContent = formatTokenAmount(0);
        }
      }
    };

    // Apply state to UI
    syncSelectedLabelsAndIcons();
    updateAmounts();
    updateNetworkAndFee();

    // Intro animation: view1 then view2
    if (gs) {
      gs.set(view1, { autoAlpha: 0, y: 100, rotate: "5deg" });
      gs.set(view1In, { autoAlpha: 0, y: 100 });
      gs.set(view2, { autoAlpha: 0, y: 100 });
      gs.set(view2Items, { autoAlpha: 0, y: 80 });

      gs.timeline()
        .to(view1, {
          autoAlpha: 1,
          y: 0,
          rotate: "0deg",
          duration: 0.6,
          delay: 0.5,
          ease: "power2.out",
        })
        .to(
          view1In,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "<"
        )
        .to(
          view2,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .to(
          view2Items,
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.5"
        );
    } else {
      view1.style.opacity = "1";
      view1.style.transform = "translateY(0)";
      view1In.style.opacity = "1";
      view1In.style.transform = "translateY(0)";
      view2.style.opacity = "1";
      view2.style.transform = "translateY(0)";
    }

    let completed = false;
    const safeDone = () => {
      if (completed) return;
      completed = true;
      done?.();
    };

    const handleTriggerClick = () => {
      if (gs) {
        gs.timeline({ defaults: { ease: "power2.out" } })
          .to(trigger1, { scale: 0.97, duration: 0.1 })
          .to(trigger1, { scale: 1, duration: 0.16 })
          .add(() => safeDone(), "+=0.05");
      } else {
        safeDone();
      }
    };

    trigger1.addEventListener("click", handleTriggerClick);
  },
};
