// buyFirstCrypto_step3.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = (payload) =>
      complete?.(payload) ||
      resolve?.(payload) ||
      onSuccess?.(payload) ||
      next?.(payload);

    const gs = window.gsap || null;

    if (!rootEl) return;

    // ------------------------------------------------------------------
    // Inject styles (once)
    // ------------------------------------------------------------------
    const STYLE_ID = "buyFirstCrypto_step3_styles";

    if (!document.getElementById(STYLE_ID)) {
      const styleEl = document.createElement("style");
      styleEl.id = STYLE_ID;
      styleEl.textContent = `
      .sim-bfc3_canvas {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 53.375rem;
       
        
        display: flex;
        position: relative;
        overflow: hidden;
      }

      .sim-bfc3_frame {
        grid-row-gap: 2.5rem;
        background-color: #fff;
        border-radius: 1.25rem;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        max-width: 33.125rem;
        padding: 2.5rem 2.5rem 1.5rem;
        display: flex;
        box-shadow: 0 0.25rem 1.25rem #0000001a;
      }

      .sim-bfc3_header {
        grid-row-gap: 0.5rem;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        display: flex;
      }

      .sim-bfc3_title {
        color: #2f2f30;
        letter-spacing: -0.04em;
        width: 100%;
        margin: 0;
        font-size: 2.5rem;
        font-weight: 500;
        line-height: 130%;
      }

      .sim-bfc3_subtitle {
        color: #7a7a7a;
        letter-spacing: -0.02em;
        margin: 0;
        font-size: 1rem;
        font-weight: 500;
        line-height: 130%;
      }

      .sim-bfc3_flows {
        width: 100%;
      }

      .sim-bfc3_flow {
        width: 100%;
        display: none;
      }

      .sim-bfc3_flow.is--active {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      /* CRYPTO LIST (Flow 1) */
      .sim-bfc3_crypto-item {
        border-radius: 0;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 1rem 0;
        border: none;
        background: transparent;
        display: flex;
        cursor: pointer;
        text-align: left;
      }

      .sim-bfc3_crypto-item + .sim-bfc3_crypto-item {
        border-top: 1px solid #f1f1f1;
      }

      .sim-bfc3_crypto-main {
        grid-column-gap: 1.5rem;
        justify-content: flex-start;
        align-items: center;
        display: flex;
      }

      .sim-bfc3_crypto-icon {
        border-radius: 999px;
        width: 2rem;
        height: 2rem;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }

      .sim-bfc3_meta-icon {
        border-radius: 999px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }

      .sim-bfc3_crypto-icon.is--btc { background-image: url("https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5cdc09e9e742cbdff5_btc-logo.svg"); background-color: #F7931A; }
      .sim-bfc3_crypto-icon.is--eth { background-image: url("https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5cad7c2be8398af2e8_eth-logo.svg"); background-color: #627eea; }
      .sim-bfc3_crypto-icon.is--usdc { background-image: url("https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5c5c1e6e07d92c9228_usdc-logo.svg"); background-color: #2775ca; }
      .sim-bfc3_crypto-icon.is--bnb { background-image: url("https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5c63efaa27da6d1b15_bnb-logo.svg"); background-color: #f3ba2f; }
      .sim-bfc3_crypto-icon.is--xrp { background-image: url("https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5cecd803e93aa1a9d1_xrp-logo.svg"); background-color: #23292f; }
      .sim-bfc3_crypto-icon.is--card {
        background: linear-gradient(135deg, #1434cb, #f79e1b);
      }
      .sim-bfc3_meta-icon.is--btc { background-image: url("https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5cdc09e9e742cbdff5_btc-logo.svg"); background-color: #F7931A; }
      .sim-bfc3_meta-icon.is--eth { background-image: url("https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5cad7c2be8398af2e8_eth-logo.svg"); background-color: #627eea; }
      .sim-bfc3_meta-icon.is--usdc { background-image: url("https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5c5c1e6e07d92c9228_usdc-logo.svg"); background-color: #2775ca; }
      .sim-bfc3_meta-icon.is--bnb { background-image: url("https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5c63efaa27da6d1b15_bnb-logo.svg"); background-color: #f3ba2f; }
      .sim-bfc3_meta-icon.is--xrp { background-image: url("https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5cecd803e93aa1a9d1_xrp-logo.svg"); background-color: #23292f; }
      .sim-bfc3_meta-icon.is--card { background-image: url("https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69183072095019c38d7daa90_MasterCard-logo.svg"); }

      

      .sim-bfc3_crypto-text {
        gap: 1rem;
        flex-direction: row;
        display: flex;
      }

      .sim-bfc3_crypto-name {
        color: #1f1f1f;
        letter-spacing: -0.04em;
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 130%;
      }

      .sim-bfc3_crypto-symbol {
        color: #7a7a7a;
        letter-spacing: -0.04em;
        margin: 0;
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 130%;
      }

      .sim-bfc3_crypto-arrow {
        width: 1.25rem;
        height: 1.25rem;
      }

      /* BUY FLOW (Flow 2) */
      .sim-bfc3_amount-card {
        grid-row-gap: 2.5rem;
        flex-direction: column;
        align-items: stretch;
        width: 100%;
        display: flex;
      }

      .sim-bfc3_amount-input-wrap {
        grid-row-gap: 0.5rem;
        background-color: #f9f9f9;
        border: 2px solid #f64c07;
        border-radius: 0.75rem;
        flex-direction: column;
        align-items: flex-start;
        padding: 1.5rem;
        display: flex;
      }

      .sim-bfc3_amount-top {
        grid-column-gap: 0.75rem;
        justify-content: flex-start;
        align-items: baseline;
        display: flex;
      }

      .sim-bfc3_amount-input {
        border: none;
        background: transparent;
        color: #1f1f1f;
        letter-spacing: -0.04em;
        margin: 0;
        font-size: 3rem;
        font-weight: 500;
        line-height: 130%;
        width: 100%;
        max-width: 12rem;
        padding: 0;
        outline: none;
      }

      .sim-bfc3_amount-input::placeholder {
        color: #c7c7c7;
      }

      .sim-bfc3_amount-currency {
        color: #2f2f30;
        letter-spacing: -0.04em;
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 130%;
      }

      .sim-bfc3_amount-conversion {
        color: #7a7a7a;
        letter-spacing: -0.04em;
        font-size: 1rem;
        font-weight: 500;
        line-height: 130%;
      }

      .sim-bfc3_meta-row {
        grid-row-gap: 1rem;
        flex-direction: column;
 align-items: stretch;
        width: 100%;
        display: flex;
      }

      .sim-bfc3_meta-card {
        grid-column-gap: 1.5rem;
        background-color: #f9f9f9;
        border: 1px solid #ebebeb;
        border-radius: 0.5rem;
        justify-content: flex-start;
        align-items: center;
        padding: 1rem 1.5rem;
        display: flex;
      }

      .sim-bfc3_meta-icon {
        border-radius: 999px;
        width: 2.5rem;
        height: 2.5rem;
      }

      .sim-bfc3_meta-text {
        grid-row-gap: 0.25rem;
        flex-direction: column;
        display: flex;
      }

      .sim-bfc3_meta-label {
        color: #7a7a7a;
        letter-spacing: -0.04em;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 130%;
      }

      .sim-bfc3_meta-symbol {
        color: #1f1f1f;
        letter-spacing: -0.04em;
        font-size: 1rem;
        font-weight: 600;
        line-height: 130%;
      }

      .sim-bfc3_next-btn {
        grid-column-gap: 0.625rem;
        background-image: linear-gradient(87deg, #f64c07 0%, #ff7943 100%);
        border: 2px solid #f64c07;
        border-radius: 0.5rem;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 3.5rem;
        margin-top: 1.5rem;
        padding: 0 1.5rem;
        display: flex;
        cursor: pointer;
        color: #fff;
        letter-spacing: -0.02em;
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 140%;
        box-shadow: 0 0.25rem 0.625rem #eb855c40;
      }

      .sim-bfc3_next-btn.is--disabled {
        opacity: 0.6;
        cursor: default;
      }

      /* Disclaimer */
      .sim-bfc3_disclaimer {
        grid-column-gap: 1.25rem;
        background-color: #1f1f1f80;
        border-radius: 0.75rem;
        justify-content: flex-start;
        align-items: center;
        padding: 1rem;
        display: flex;
        position: absolute;
        bottom: 2.5rem;
        left: 50%;
        transform: translateX(-50%);
        max-width: 32.5rem;
      }

      .sim-bfc3_disclaimer-icon {
        background-color: #f64c07;
        border-radius: 999px;
        width: 2rem;
        height: 2rem;
      }

      .sim-bfc3_disclaimer-text {
        grid-row-gap: 0.25rem;
        flex-direction: column;
        display: flex;
      }

      .sim-bfc3_disclaimer-text > div:first-child {
        color: #fff;
        letter-spacing: -0.02em;
        font-size: 0.875rem;
        font-weight: 600;
        line-height: 130%;
      }

      .sim-bfc3_disclaimer-source {
        color: #e0e0e0;
        letter-spacing: -0.02em;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 130%;
      }

      .sim-bfc3_frame,
      .sim-bfc3_frame * {
        font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
      }
      `;
      document.head.appendChild(styleEl);
    }

    // ------------------------------------------------------------------
    // Inject HTML into the root element
    // ------------------------------------------------------------------
    rootEl.innerHTML = `
      <div class="sim-bfc3_canvas" data-sim-root>
        <div class="sim-bfc3_frame">
          <div class="sim-bfc3_header">
            <div class="sim-bfc3_title" data-sim-title>Select crypto</div>
            <div class="sim-bfc3_subtitle" data-sim-subtitle>All cryptos</div>
          </div>

          <div class="sim-bfc3_flows">
            <!-- FLOW 1: SELECT CRYPTO -->
            <div class="sim-bfc3_flow is--active" data-sim-flow="select">
              <button class="sim-bfc3_crypto-item is--btc" data-sim-crypto="BTC">
                <div class="sim-bfc3_crypto-main">
                  <div class="sim-bfc3_crypto-icon is--btc"></div>
                  <div class="sim-bfc3_crypto-text">
                    <div class="sim-bfc3_crypto-name">Bitcoin</div>
                    <div class="sim-bfc3_crypto-symbol">BTC</div>
                  </div>
                </div>
                <div class="sim-bfc3_crypto-arrow"><svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9333 9.68284C14.8937 9.58054 14.8342 9.48709 14.7583 9.40784L10.5917 5.24117C10.514 5.16347 10.4217 5.10184 10.3202 5.05979C10.2187 5.01774 10.1099 4.99609 10 4.99609C9.77808 4.99609 9.56525 5.08425 9.40833 5.24117C9.33063 5.31887 9.269 5.41111 9.22695 5.51263C9.1849 5.61415 9.16326 5.72295 9.16326 5.83284C9.16326 6.05475 9.25141 6.26758 9.40833 6.4245L12.1583 9.16617H5.83333C5.61232 9.16617 5.40036 9.25397 5.24408 9.41025C5.0878 9.56653 5 9.77849 5 9.9995C5 10.2205 5.0878 10.4325 5.24408 10.5888C5.40036 10.745 5.61232 10.8328 5.83333 10.8328H12.1583L9.40833 13.5745C9.33023 13.652 9.26823 13.7441 9.22592 13.8457C9.18362 13.9472 9.16183 14.0562 9.16183 14.1662C9.16183 14.2762 9.18362 14.3851 9.22592 14.4867C9.26823 14.5882 9.33023 14.6804 9.40833 14.7578C9.4858 14.8359 9.57797 14.8979 9.67952 14.9402C9.78107 14.9826 9.88999 15.0043 10 15.0043C10.11 15.0043 10.2189 14.9826 10.3205 14.9402C10.422 14.8979 10.5142 14.8359 10.5917 14.7578L14.7583 10.5912C14.8342 10.5119 14.8937 10.4185 14.9333 10.3162C15.0167 10.1133 15.0167 9.88572 14.9333 9.68284Z" fill="#F64C07"/>
</svg></div>
              </button>

              <button class="sim-bfc3_crypto-item is--eth" data-sim-crypto="ETH">
                <div class="sim-bfc3_crypto-main">
                  <div class="sim-bfc3_crypto-icon is--eth"></div>
                  <div class="sim-bfc3_crypto-text">
                    <div class="sim-bfc3_crypto-name">Ethereum</div>
                    <div class="sim-bfc3_crypto-symbol">ETH</div>
                  </div>
                </div>
                <div class="sim-bfc3_crypto-arrow"><svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9333 9.68284C14.8937 9.58054 14.8342 9.48709 14.7583 9.40784L10.5917 5.24117C10.514 5.16347 10.4217 5.10184 10.3202 5.05979C10.2187 5.01774 10.1099 4.99609 10 4.99609C9.77808 4.99609 9.56525 5.08425 9.40833 5.24117C9.33063 5.31887 9.269 5.41111 9.22695 5.51263C9.1849 5.61415 9.16326 5.72295 9.16326 5.83284C9.16326 6.05475 9.25141 6.26758 9.40833 6.4245L12.1583 9.16617H5.83333C5.61232 9.16617 5.40036 9.25397 5.24408 9.41025C5.0878 9.56653 5 9.77849 5 9.9995C5 10.2205 5.0878 10.4325 5.24408 10.5888C5.40036 10.745 5.61232 10.8328 5.83333 10.8328H12.1583L9.40833 13.5745C9.33023 13.652 9.26823 13.7441 9.22592 13.8457C9.18362 13.9472 9.16183 14.0562 9.16183 14.1662C9.16183 14.2762 9.18362 14.3851 9.22592 14.4867C9.26823 14.5882 9.33023 14.6804 9.40833 14.7578C9.4858 14.8359 9.57797 14.8979 9.67952 14.9402C9.78107 14.9826 9.88999 15.0043 10 15.0043C10.11 15.0043 10.2189 14.9826 10.3205 14.9402C10.422 14.8979 10.5142 14.8359 10.5917 14.7578L14.7583 10.5912C14.8342 10.5119 14.8937 10.4185 14.9333 10.3162C15.0167 10.1133 15.0167 9.88572 14.9333 9.68284Z" fill="#F64C07"/>
</svg></div>
              </button>

              <button class="sim-bfc3_crypto-item is--usdc" data-sim-crypto="USDC">
                <div class="sim-bfc3_crypto-main">
                  <div class="sim-bfc3_crypto-icon is--usdc"></div>
                  <div class="sim-bfc3_crypto-text">
                    <div class="sim-bfc3_crypto-name">USDC</div>
                    <div class="sim-bfc3_crypto-symbol">USDC</div>
                  </div>
                </div>
                <div class="sim-bfc3_crypto-arrow"><svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9333 9.68284C14.8937 9.58054 14.8342 9.48709 14.7583 9.40784L10.5917 5.24117C10.514 5.16347 10.4217 5.10184 10.3202 5.05979C10.2187 5.01774 10.1099 4.99609 10 4.99609C9.77808 4.99609 9.56525 5.08425 9.40833 5.24117C9.33063 5.31887 9.269 5.41111 9.22695 5.51263C9.1849 5.61415 9.16326 5.72295 9.16326 5.83284C9.16326 6.05475 9.25141 6.26758 9.40833 6.4245L12.1583 9.16617H5.83333C5.61232 9.16617 5.40036 9.25397 5.24408 9.41025C5.0878 9.56653 5 9.77849 5 9.9995C5 10.2205 5.0878 10.4325 5.24408 10.5888C5.40036 10.745 5.61232 10.8328 5.83333 10.8328H12.1583L9.40833 13.5745C9.33023 13.652 9.26823 13.7441 9.22592 13.8457C9.18362 13.9472 9.16183 14.0562 9.16183 14.1662C9.16183 14.2762 9.18362 14.3851 9.22592 14.4867C9.26823 14.5882 9.33023 14.6804 9.40833 14.7578C9.4858 14.8359 9.57797 14.8979 9.67952 14.9402C9.78107 14.9826 9.88999 15.0043 10 15.0043C10.11 15.0043 10.2189 14.9826 10.3205 14.9402C10.422 14.8979 10.5142 14.8359 10.5917 14.7578L14.7583 10.5912C14.8342 10.5119 14.8937 10.4185 14.9333 10.3162C15.0167 10.1133 15.0167 9.88572 14.9333 9.68284Z" fill="#F64C07"/>
</svg></div>
              </button>

              <button class="sim-bfc3_crypto-item is--bnb" data-sim-crypto="BNB">
                <div class="sim-bfc3_crypto-main">
                  <div class="sim-bfc3_crypto-icon is--bnb"></div>
                  <div class="sim-bfc3_crypto-text">
                    <div class="sim-bfc3_crypto-name">BNB</div>
                    <div class="sim-bfc3_crypto-symbol">BNB</div>
                  </div>
                </div>
                <div class="sim-bfc3_crypto-arrow"><svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9333 9.68284C14.8937 9.58054 14.8342 9.48709 14.7583 9.40784L10.5917 5.24117C10.514 5.16347 10.4217 5.10184 10.3202 5.05979C10.2187 5.01774 10.1099 4.99609 10 4.99609C9.77808 4.99609 9.56525 5.08425 9.40833 5.24117C9.33063 5.31887 9.269 5.41111 9.22695 5.51263C9.1849 5.61415 9.16326 5.72295 9.16326 5.83284C9.16326 6.05475 9.25141 6.26758 9.40833 6.4245L12.1583 9.16617H5.83333C5.61232 9.16617 5.40036 9.25397 5.24408 9.41025C5.0878 9.56653 5 9.77849 5 9.9995C5 10.2205 5.0878 10.4325 5.24408 10.5888C5.40036 10.745 5.61232 10.8328 5.83333 10.8328H12.1583L9.40833 13.5745C9.33023 13.652 9.26823 13.7441 9.22592 13.8457C9.18362 13.9472 9.16183 14.0562 9.16183 14.1662C9.16183 14.2762 9.18362 14.3851 9.22592 14.4867C9.26823 14.5882 9.33023 14.6804 9.40833 14.7578C9.4858 14.8359 9.57797 14.8979 9.67952 14.9402C9.78107 14.9826 9.88999 15.0043 10 15.0043C10.11 15.0043 10.2189 14.9826 10.3205 14.9402C10.422 14.8979 10.5142 14.8359 10.5917 14.7578L14.7583 10.5912C14.8342 10.5119 14.8937 10.4185 14.9333 10.3162C15.0167 10.1133 15.0167 9.88572 14.9333 9.68284Z" fill="#F64C07"/>
</svg></div>
              </button>

              <button class="sim-bfc3_crypto-item is--xrp" data-sim-crypto="XRP">
                <div class="sim-bfc3_crypto-main">
                  <div class="sim-bfc3_crypto-icon is--xrp"></div>
                  <div class="sim-bfc3_crypto-text">
                    <div class="sim-bfc3_crypto-name">XRP</div>
                    <div class="sim-bfc3_crypto-symbol">XRP</div>
                  </div>
                </div>
                <div class="sim-bfc3_crypto-arrow"><svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9333 9.68284C14.8937 9.58054 14.8342 9.48709 14.7583 9.40784L10.5917 5.24117C10.514 5.16347 10.4217 5.10184 10.3202 5.05979C10.2187 5.01774 10.1099 4.99609 10 4.99609C9.77808 4.99609 9.56525 5.08425 9.40833 5.24117C9.33063 5.31887 9.269 5.41111 9.22695 5.51263C9.1849 5.61415 9.16326 5.72295 9.16326 5.83284C9.16326 6.05475 9.25141 6.26758 9.40833 6.4245L12.1583 9.16617H5.83333C5.61232 9.16617 5.40036 9.25397 5.24408 9.41025C5.0878 9.56653 5 9.77849 5 9.9995C5 10.2205 5.0878 10.4325 5.24408 10.5888C5.40036 10.745 5.61232 10.8328 5.83333 10.8328H12.1583L9.40833 13.5745C9.33023 13.652 9.26823 13.7441 9.22592 13.8457C9.18362 13.9472 9.16183 14.0562 9.16183 14.1662C9.16183 14.2762 9.18362 14.3851 9.22592 14.4867C9.26823 14.5882 9.33023 14.6804 9.40833 14.7578C9.4858 14.8359 9.57797 14.8979 9.67952 14.9402C9.78107 14.9826 9.88999 15.0043 10 15.0043C10.11 15.0043 10.2189 14.9826 10.3205 14.9402C10.422 14.8979 10.5142 14.8359 10.5917 14.7578L14.7583 10.5912C14.8342 10.5119 14.8937 10.4185 14.9333 10.3162C15.0167 10.1133 15.0167 9.88572 14.9333 9.68284Z" fill="#F64C07"/>
</svg>
</div>
              </button>
            </div>

            <!-- FLOW 2: BUY CRYPTO -->
            <div class="sim-bfc3_flow" data-sim-flow="amount">
              <div class="sim-bfc3_amount-card">

                <div class="sim-bfc3_amount-input-wrap">
                  <div class="sim-bfc3_amount-top">
                    <input
                      type="text"
                      inputmode="decimal"
                      pattern="[0-9]*"
                      class="sim-bfc3_amount-input"
                      data-sim-amount-input
                      placeholder="0.00"
                      aria-label="Amount in USD"
                    />
                    <div class="sim-bfc3_amount-currency">USD</div>
                  </div>
                  <div
                    class="sim-bfc3_amount-conversion"
                    data-sim-conversion-text
                  >
                    ≈ 0.000000 BTC
                  </div>
                </div>

                <div class="sim-bfc3_meta-row">
                  <div class="sim-bfc3_meta-card">
                    <div
                      class="sim-bfc3_meta-icon is--btc"
                      data-sim-meta-icon
                    ></div>
                    <div class="sim-bfc3_meta-text">
                      <div class="sim-bfc3_meta-label">Buy</div>
                      <div
                        class="sim-bfc3_meta-symbol"
                        data-sim-meta-buy-label
                      >
                        BTC
                      </div>
                    </div>
                  </div>

                  <div class="sim-bfc3_meta-card">
                    <div class="sim-bfc3_meta-icon is--card"></div>
                    <div class="sim-bfc3_meta-text">
                      <div class="sim-bfc3_meta-label">Pay with</div>
                      <div class="sim-bfc3_meta-symbol">Visa/Mastercard</div>
                    </div>
                  </div>

          <button
            class="sim-bfc3_next-btn"
            type="button"
            data-sim-next
          >
            Next
          </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="sim-bfc3_disclaimer" data-sim-disclaimer>
          <div class="sim-bfc3_disclaimer-icon"></div>
          <div class="sim-bfc3_disclaimer-text">
            <div>Top 5 cryptocurrencies by market cap</div>
            <div class="sim-bfc3_disclaimer-source">
              Source: Coingecko.com
            </div>
          </div>
        </div>
      </div>
    `;

    // ------------------------------------------------------------------
    // DOM refs
    // ------------------------------------------------------------------
    const flowSelect = rootEl.querySelector('[data-sim-flow="select"]');
    const flowAmount = rootEl.querySelector('[data-sim-flow="amount"]');

    const titleEl = rootEl.querySelector("[data-sim-title]");
    const subtitleEl = rootEl.querySelector("[data-sim-subtitle]");
    const disclaimerEl = rootEl.querySelector("[data-sim-disclaimer]");

    const cryptoItems = Array.from(
      rootEl.querySelectorAll("[data-sim-crypto]")
    );

    const amountInput = rootEl.querySelector("[data-sim-amount-input]");
    const conversionTextEl = rootEl.querySelector("[data-sim-conversion-text]");
    const metaBuyLabelEl = rootEl.querySelector("[data-sim-meta-buy-label]");
    const metaBuyIconEl = rootEl.querySelector("[data-sim-meta-icon]");
    const nextBtn = rootEl.querySelector("[data-sim-next]");

    if (!flowSelect || !flowAmount || !cryptoItems.length || !nextBtn) {
      console.warn("[buyFirstCrypto_step3] Missing required elements.", {
        flowSelect,
        flowAmount,
        cryptoItems: cryptoItems.length,
        nextBtn,
      });
      return;
    }

    // ------------------------------------------------------------------
    // State
    // ------------------------------------------------------------------
    const {
      cookieName = "nca_buyFirstCrypto_step3",
      cookieMaxAgeSeconds = 60 * 60,
      initialPrices = {},
      fetchPrices = true,
    } = props;

    let prices = { ...initialPrices };
    let selectedSymbol = null;
    let selectedName = null;
    let selectedPriceUsd = null;
    let currentUsdAmount = 0;

    const idMap = {
      BTC: "bitcoin",
      ETH: "ethereum",
      USDC: "usd-coin",
      BNB: "binancecoin",
      XRP: "ripple",
    };

    // ------------------------------------------------------------------
    // Utils
    // ------------------------------------------------------------------
    function setCookie(name, value, maxAgeSeconds) {
      try {
        const encoded = encodeURIComponent(value);
        const parts = [`${encodeURIComponent(name)}=${encoded}`, "path=/"];
        if (typeof maxAgeSeconds === "number") {
          parts.push(`max-age=${maxAgeSeconds}`);
        }
        document.cookie = parts.join("; ");
      } catch (err) {
        console.warn("[buyFirstCrypto_step3] Failed to set cookie", err);
      }
    }

    function enableNext(enable) {
      if (!nextBtn) return;
      if (enable) {
        nextBtn.classList.remove("is--disabled");
        nextBtn.disabled = false;
        nextBtn.style.opacity = "1";
      } else {
        nextBtn.classList.add("is--disabled");
        nextBtn.disabled = true;
        nextBtn.style.opacity = "0.6";
      }
    }

    function formatNumber(num, decimals = 2) {
      return Number(num).toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
    }

    function getPrice(symbol) {
      const val = prices[symbol];
      return typeof val === "number" && val > 0 ? val : 1;
    }

    function readAmountInput() {
      if (!amountInput) return 0;
      const raw = (amountInput.value || "").replace(/[^\d.]/g, "");
      const val = parseFloat(raw);
      return Number.isFinite(val) && val > 0 ? val : 0;
    }

    function updateConversion() {
      if (!selectedSymbol || !conversionTextEl) return 0;

      const usd = currentUsdAmount || 0;
      const price = selectedPriceUsd || 1;
      const cryptoAmount = price > 0 ? usd / price : 0;
      const displayAmount =
        cryptoAmount > 0 ? formatNumber(cryptoAmount, 6) : "0.000000";

      conversionTextEl.textContent = `≈ ${displayAmount} ${selectedSymbol}`;
      return cryptoAmount;
    }

    function animateToAmountFlow() {
      if (titleEl) titleEl.textContent = "Buy crypto";
      if (subtitleEl) subtitleEl.textContent = "";

      if (gs) {
        const tl = gs.timeline();

        tl.to(flowSelect, {
          duration: 0.25,
          autoAlpha: 0,
          y: -10,
          ease: "power2.out",
          onComplete() {
            flowSelect.style.display = "none";
          },
        });

        if (disclaimerEl) {
          tl.to(
            disclaimerEl,
            { duration: 0.25, autoAlpha: 0, ease: "power2.out" },
            0
          );
        }

        tl.set(flowAmount, { display: "flex" });
        tl.fromTo(
          flowAmount,
          { autoAlpha: 0, y: 20 },
          { duration: 0.3, autoAlpha: 1, y: 0, ease: "power2.out" }
        );
      } else {
        flowSelect.style.display = "none";
        flowSelect.style.opacity = "0";
        flowAmount.style.display = "flex";
        flowAmount.style.opacity = "1";
        flowAmount.style.transform = "translateY(0)";
        if (disclaimerEl) disclaimerEl.style.opacity = "0";
      }
    }

    // ------------------------------------------------------------------
    // Event handlers
    // ------------------------------------------------------------------
    function handleCryptoClick(item) {
      const symbolAttr = item.getAttribute("data-sim-crypto") || "";
      const nameEl = item.querySelector(".sim-bfc3_crypto-name");
      const symbolEl = item.querySelector(".sim-bfc3_crypto-symbol");
      const iconEl = item.querySelector(".sim-bfc3_crypto-icon");

      const symbol =
        symbolAttr || (symbolEl ? symbolEl.textContent.trim() : "") || null;
      const name = (nameEl ? nameEl.textContent.trim() : "") || symbol || null;

      selectedSymbol = symbol;
      selectedName = name;
      selectedPriceUsd = getPrice(symbol || "");

      if (metaBuyLabelEl && symbol) {
        metaBuyLabelEl.textContent = symbol;
      }

      if (metaBuyIconEl && iconEl) {
        // reset previous is--* class
        metaBuyIconEl.className = metaBuyIconEl.className
          .split(" ")
          .filter((c) => !c.startsWith("is--") || c === "is--card")
          .join(" ");
        iconEl.classList.forEach((cls) => {
          if (cls.startsWith("is--")) metaBuyIconEl.classList.add(cls);
        });
      }

      currentUsdAmount = readAmountInput();
      updateConversion();
      enableNext(currentUsdAmount > 0);

      animateToAmountFlow();
    }

    function handleAmountInputChange() {
      currentUsdAmount = readAmountInput();
      const cryptoAmount = updateConversion();
      enableNext(currentUsdAmount > 0 && cryptoAmount > 0);
    }

    function handleNextClick() {
      if (nextBtn.classList.contains("is--disabled")) return;
      if (!selectedSymbol) return;

      const cryptoAmount = updateConversion();

      const payload = {
        symbol: selectedSymbol,
        name: selectedName,
        usdAmount: currentUsdAmount,
        cryptoAmount,
        priceUsd: selectedPriceUsd,
        timestamp: new Date().toISOString(),
      };

      setCookie(cookieName, JSON.stringify(payload), cookieMaxAgeSeconds);
      done?.(payload);
    }

    // ------------------------------------------------------------------
    // Price fetch (CoinGecko) – accurate to hour in browser
    // ------------------------------------------------------------------
    function fetchLatestPrices() {
      const ids = Object.values(idMap).join(",");
      const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const p = {};
          Object.entries(idMap).forEach(([symbol, id]) => {
            const val = data?.[id]?.usd;
            if (typeof val === "number") p[symbol] = val;
          });
          if (Object.keys(p).length) {
            prices = { ...prices, ...p };
          }
        })
        .catch((err) => {
          console.warn("[buyFirstCrypto_step3] Price fetch failed", err);
        });
    }

    if (fetchPrices) {
      fetchLatestPrices();
    }

    // ------------------------------------------------------------------
    // Init layout + listeners
    // ------------------------------------------------------------------
    if (titleEl) titleEl.textContent = "Select crypto";
    if (subtitleEl) subtitleEl.textContent = "All cryptos";

    if (gs) {
      gs.set(flowSelect, { display: "flex", autoAlpha: 1, y: 0 });
      gs.set(flowAmount, { display: "none", autoAlpha: 0, y: 20 });
      if (disclaimerEl) gs.set(disclaimerEl, { autoAlpha: 1 });
    } else {
      flowSelect.style.display = "flex";
      flowSelect.style.opacity = "1";
      flowAmount.style.display = "none";
      flowAmount.style.opacity = "0";
      if (disclaimerEl) disclaimerEl.style.opacity = "1";
    }

    enableNext(false);

    cryptoItems.forEach((item) => {
      item.addEventListener("click", () => handleCryptoClick(item));
    });

    if (amountInput) {
      amountInput.addEventListener("input", handleAmountInputChange);
    }

    nextBtn.addEventListener("click", handleNextClick);
  },
};
