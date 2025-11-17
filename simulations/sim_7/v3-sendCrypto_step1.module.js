// sendCrypto_step1.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();

    const gs = window.gsap || null;

    // ----------------------------------
    // Cookie helpers (scoped to Send Crypto)
    // ----------------------------------
    const setSimCookie = (name, value, days = 1) => {
      try {
        const d = new Date();
        d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = `expires=${d.toUTCString()}`;
        document.cookie = `nca_sendCrypto_${name}=${encodeURIComponent(
          value
        )};${expires};path=/`;
      } catch (err) {
        console.warn("[sendCrypto_step1] Failed to set cookie", name, err);
      }
    };

    // ----------------------------------
    // Inject HTML
    // ----------------------------------
    rootEl.innerHTML = `
      <div class="sendCrypto_step1_wrap">
        <div class="sendCrypto_step1_card" data-sim-view-1>
          <div class="sendCrypto_step1_header">
            <div class="sendCrypto_step1_title">Select network</div>
            <div class="sendCrypto_step1_subtitle">Select a network to get started.</div>
          </div>

          <div class="sendCrypto_step1_header">
            <div class="sendCrypto_step1_network-row">
              <button type="button" class="sendCrypto_step1_network-item" data-sim-crypto-network="bitcoin">
                <div class="sendCrypto_step1_icon-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 40 40" fill="none" data-sim-ico="bitcoin" class="sendCrypto_step1_crypto-ico">
                    <g clip-path="url(#clip0_88_31614)">
                      <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#F7931A"></path>
                      <path d="M28.9868 17.525C29.3793 14.905 27.383 13.4963 24.6555 12.5563L25.5405 9.00625L23.3805 8.46875L22.518 11.925C21.9505 11.7825 21.368 11.65 20.7868 11.5175L21.6555 8.03875L19.4955 7.5L18.6105 11.0487C18.1405 10.9413 17.678 10.8363 17.2305 10.7238L17.233 10.7125L14.253 9.96875L13.678 12.2763C13.678 12.2763 15.2818 12.6438 15.248 12.6663C16.123 12.885 16.2805 13.4638 16.2543 13.9238L15.2468 17.9675C15.3068 17.9825 15.3843 18.005 15.4718 18.0388L15.243 17.9825L13.8305 23.6475C13.723 23.9125 13.4518 24.3113 12.8393 24.16C12.8618 24.1912 11.2693 23.7688 11.2693 23.7688L10.1968 26.2413L13.0093 26.9425C13.5318 27.0738 14.0443 27.2113 14.548 27.34L13.6543 30.93L15.813 31.4675L16.698 27.9175C17.288 28.0763 17.8605 28.2238 18.4205 28.3638L17.538 31.8988L19.698 32.4363L20.5918 28.8538C24.2768 29.5513 27.0468 29.27 28.213 25.9375C29.153 23.255 28.1668 21.7063 26.228 20.6975C27.6405 20.3725 28.703 19.4438 28.9868 17.525ZM24.0493 24.4475C23.383 27.1313 18.8643 25.68 17.3993 25.3163L18.5868 20.56C20.0518 20.9263 24.748 21.65 24.0493 24.4475ZM24.718 17.4863C24.1093 19.9275 20.3493 18.6863 19.1305 18.3825L20.2055 14.07C21.4243 14.3738 25.353 14.94 24.718 17.4863Z" fill="white"></path>
                    </g>
                  </svg>
                  <div class="sendCrypto_step1_network-name-wrap">
                    <div class="sendCrypto_step1_network-name">Bitcoin</div>
                  </div>
                </div>
              </button>

              <button type="button" class="sendCrypto_step1_network-item" data-sim-crypto-network="ethereum">
                <div class="sendCrypto_step1_icon-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 40 40" fill="none" data-sim-ico="ethereum" class="sendCrypto_step1_crypto-ico">
                    <g clip-path="url(#clip0_88_31622)">
                      <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#627EEA"></path>
                      <path d="M20.6226 5V16.0875L29.9938 20.275L20.6226 5Z" fill="white" fill-opacity="0.602"></path>
                      <path d="M20.6225 5L11.25 20.275L20.6225 16.0875V5Z" fill="white"></path>
                      <path d="M20.6226 27.4595V34.9933L30.0001 22.0195L20.6226 27.4595Z" fill="white" fill-opacity="0.602"></path>
                      <path d="M20.6225 34.9933V27.4583L11.25 22.0195L20.6225 34.9933Z" fill="white"></path>
                      <path d="M20.6226 25.7161L29.9938 20.2748L20.6226 16.0898V25.7161Z" fill="white" fill-opacity="0.2"></path>
                      <path d="M11.25 20.2748L20.6225 25.7161V16.0898L11.25 20.2748Z" fill="white" fill-opacity="0.602"></path>
                    </g>
                  </svg>
                  <div class="sendCrypto_step1_network-name-wrap">
                    <div class="sendCrypto_step1_network-name">Ethereum</div>
                  </div>
                </div>
              </button>
            </div>

            <div class="sendCrypto_step1_network-row">
              <button type="button" class="sendCrypto_step1_network-item" data-sim-crypto-network="ripple">
                <div class="sendCrypto_step1_icon-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 40 40" fill="none" data-sim-ico="ripple" class="sendCrypto_step1_crypto-ico">
                    <g clip-path="url(#clip0_88_31637)">
                      <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#23292F"></path>
                      <g clip-path="url(#clip1_88_31637)">
                        <path d="M13.0934 11.2392H13.5754V10H13.0934C12.5825 9.99955 12.0765 10.0999 11.6043 10.2952C11.1322 10.4905 10.7032 10.777 10.3419 11.1383C9.98059 11.4996 9.69409 11.9286 9.49876 12.4007C9.30344 12.8729 9.20314 13.3789 9.20359 13.8898V16.7126C9.20462 17.3102 8.97699 17.8857 8.56736 18.3209C8.15773 18.7561 7.59713 19.0182 7.00049 19.0533L7.03491 19.673L7.00049 20.2926C7.59713 20.3277 8.15773 20.5899 8.56736 21.0251C8.97699 21.4603 9.20462 22.0357 9.20359 22.6334V25.8864C9.20176 26.9659 9.62858 28.0019 10.3902 28.7667C11.1519 29.5316 12.1861 29.9628 13.2656 29.9656V28.7263C12.5171 28.7259 11.7994 28.4283 11.2701 27.8991C10.7408 27.3699 10.4433 26.6521 10.4428 25.9036V22.6334C10.4434 22.0496 10.3009 21.4745 10.0278 20.9584C9.7548 20.4424 9.35953 20.0011 8.87657 19.673C9.35815 19.3435 9.75238 18.9019 10.0252 18.3862C10.2981 17.8704 10.4414 17.2961 10.4428 16.7126V13.8898C10.446 13.1878 10.7263 12.5155 11.2227 12.0191C11.7191 11.5227 12.3914 11.2424 13.0934 11.2392Z" fill="white"></path>
                        <path d="M27.4125 11.2392H26.9307V10H27.4125C28.4418 10.0027 29.4278 10.414 30.154 11.1434C30.8802 11.8728 31.287 12.8606 31.2852 13.8898V16.7126C31.2842 17.3102 31.5118 17.8857 31.9214 18.3209C32.331 18.7561 32.8916 19.0182 33.4883 19.0533L33.4539 19.673L33.4883 20.2926C32.8916 20.3277 32.331 20.5898 31.9214 21.0251C31.5118 21.4603 31.2842 22.0357 31.2852 22.6334V25.8864C31.287 26.9659 30.8602 28.0019 30.0985 28.7668C29.3369 29.5317 28.3027 29.9629 27.2232 29.9656V28.7263C27.9717 28.7259 28.6894 28.4284 29.2187 27.8991C29.7479 27.3698 30.0455 26.6521 30.046 25.9037V22.6334C30.0454 22.0495 30.1879 21.4745 30.461 20.9584C30.734 20.4423 31.1292 20.001 31.6122 19.673C31.1307 19.3436 30.7364 18.902 30.4636 18.3862C30.1907 17.8704 30.0474 17.296 30.046 16.7126V13.8898C30.0477 13.5427 29.981 13.1986 29.8495 12.8773C29.718 12.5561 29.5244 12.2639 29.2797 12.0176C29.0351 11.7714 28.7442 11.5758 28.4237 11.4423C28.1034 11.3087 27.7597 11.2397 27.4125 11.2392Z" fill="white"></path>
                        <path d="M24.7619 14.9922H26.6036L22.7654 18.5894C22.0768 19.2125 21.1811 19.5576 20.2525 19.5576C19.3238 19.5576 18.4282 19.2125 17.7395 18.5894L13.9014 14.9922H15.743L18.6518 17.7116C19.0862 18.1103 19.6543 18.3315 20.2439 18.3315C20.8335 18.3315 21.4016 18.1103 21.836 17.7116L24.7619 14.9922Z" fill="white"></path>
                        <path d="M15.7269 24.9743H13.8853L17.7407 21.3598C18.4255 20.729 19.3225 20.3789 20.2536 20.3789C21.1846 20.3789 22.0817 20.729 22.7665 21.3598L26.622 24.9743H24.7803L21.8543 22.2204C21.4199 21.8218 20.8517 21.6006 20.2622 21.6006C19.6726 21.6006 19.1044 21.8218 18.6701 22.2204L15.7269 24.9743Z" fill="white"></path>
                      </g>
                    </g>
                  </svg>
                  <div class="sendCrypto_step1_network-name-wrap">
                    <div class="sendCrypto_step1_network-name">XRP Ledger</div>
                  </div>
                </div>
              </button>

              <button type="button" class="sendCrypto_step1_network-item" data-sim-crypto-network="bnb">
                <div class="sendCrypto_step1_icon-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 40 40" fill="none" data-sim-ico="bnb" class="sendCrypto_step1_crypto-ico">
                    <g clip-path="url(#clip0_88_31649)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M20 0C31.0465 0 40 8.95353 40 20C40 31.0465 31.0465 40 20 40C8.95353 40 0 31.0465 0 20C0 8.95353 8.95353 0 20 0Z" fill="#F0B90B"></path>
                      <path d="M10.992 20.0018L11.0064 25.2903L15.5 27.9345V31.0306L8.3766 26.8528V18.4553L10.992 20.0018ZM10.992 14.7133V17.7951L8.375 16.247V13.1653L10.992 11.6172L13.6218 13.1653L10.992 14.7133ZM17.3766 13.1653L19.9936 11.6172L22.6234 13.1653L19.9936 14.7133L17.3766 13.1653Z" fill="white"></path>
                      <path d="M12.8828 24.1941V21.098L15.4998 22.646V25.7278L12.8828 24.1941ZM17.3764 29.0435L19.9934 30.5915L22.6232 29.0435V32.1252L19.9934 33.6733L17.3764 32.1252V29.0435ZM26.3764 13.1653L28.9934 11.6172L31.6232 13.1653V16.247L28.9934 17.7951V14.7133L26.3764 13.1653ZM28.9934 25.2903L29.0078 20.0018L31.6248 18.4537V26.8512L24.5014 31.029V27.9329L28.9934 25.2903Z" fill="white"></path>
                      <path d="M27.117 24.1938L24.5 25.7275V22.6457L27.117 21.0977V24.1938Z" fill="white"></path>
                      <path d="M27.1168 15.8073L27.1312 18.9034L22.6248 21.5477V26.849L20.0078 28.3826L17.3908 26.849V21.5477L12.8844 18.9034V15.8073L15.5126 14.2592L19.9918 16.9163L24.4982 14.2592L27.128 15.8073H27.1168ZM12.8828 10.5204L19.9934 6.32812L27.1168 10.5204L24.4998 12.0685L19.9934 9.41146L15.4998 12.0685L12.8828 10.5204Z" fill="white"></path>
                    </g>
                  </svg>
                  <div class="sendCrypto_step1_network-name-wrap">
                    <div class="sendCrypto_step1_network-name">BNB</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div class="sendCrypto_step1_view2" data-sim-view-2>
            <div class="sendCrypto_step1_inner">
              <div class="sendCrypto_step1_amount-title">Amount</div>

              <div class="sendCrypto_step1_currency-selector">
                <div class="sendCrypto_step1_currency-icon-wrap">
                  <div class="sendCrypto_step1_crypto-ico-wrap" data-sim-crypto-ico-choice></div>
                  <div class="sendCrypto_step1_currency-label-wrap">
                    <div class="sendCrypto_step1_currency-label" data-sim-selected-network>BTC</div>
                  </div>
                </div>
              </div>

              <div class="sendCrypto_step1_amount-input-container">
                <div
                  class="sendCrypto_step1_amount-input"
                  data-sim-crypto-send-amount
                  data-placeholder="0.0001"
                ></div>
                <div class="sendCrypto_step1_amount-unit" data-sim-crytpto-abb>BTC</div>
              </div>
            </div>

            <button type="button" class="sendCrypto_step1_btn" data-sim-trigger>
              <div class="sendCrypto_step1_btn-label">Next</div>
            </button>
          </div>
        </div>
      </div>
    `;

    // ----------------------------------
    // Inject step–scoped CSS
    // ----------------------------------
    const styleEl = document.createElement("style");
    styleEl.textContent = `
      .sendCrypto_step1_wrap {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        display: flex;
        overflow: hidden;
      }

      .sendCrypto_step1_card {
        grid-row-gap: 52px;
        background-color: #fff;
        border-radius: 20px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        width: 100%;
        max-width: 640px;
        padding: 40px;
        display: flex;
        position: relative;
        box-shadow: 0 4px 20px #0000001a;
      }

      .sendCrypto_step1_header {
        grid-row-gap: 16px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        display: flex;
      }

      .sendCrypto_step1_title {
        color: #2f2f30;
        text-align: left;
        letter-spacing: -.04em;
        margin: 0;
        font-size: 2.5rem;
        font-weight: 500;
        line-height: 130%;
      }

      .sendCrypto_step1_subtitle {
        color: #7a7a7a;
        letter-spacing: -.02em;
        margin: 0;
        font-size: 1rem;
        font-weight: 400;
        line-height: 150%;
      }

      .sendCrypto_step1_network-row {
        grid-column-gap: 16px;
        justify-content: flex-start;
        align-items: flex-start;
        display: flex;
      }

      .sendCrypto_step1_network-item {
        grid-column-gap: 8px;
        background-color: #fff;
        border: 2px solid #f64c07;
        border-radius: 8px;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        padding: 24px 16px;
        display: flex;
        box-shadow: 0 4px 10px #eb855c3d;
        cursor: pointer;
        text-align: left;
        transition:
          border-color 0.18s ease,
          box-shadow 0.18s ease,
          transform 0.12s ease;
      }

      .sendCrypto_step1_network-item.is--selected {
        border-color: #f64c07;
        box-shadow: 0 4px 14px #f64c0733;
        transform: translateY(-1px);
      }

      .sendCrypto_step1_icon-wrap {
        grid-column-gap: 16px;
        flex: 0 auto;
        justify-content: flex-start;
        align-items: center;
        display: flex;
      }

      .sendCrypto_step1_crypto-ico {
        object-fit: cover;
        flex: none;
        width: 40px;
        height: 40px;
        overflow: hidden;
      }

      .sendCrypto_step1_network-name-wrap {
        grid-column-gap: 12px;
        flex: 0 auto;
        justify-content: flex-start;
        align-items: flex-start;
        display: flex;
      }

      .sendCrypto_step1_network-name {
        color: #1f1f1f;
        letter-spacing: -.04em;
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 130%;
      }

      .sendCrypto_step1_view2 {
        grid-row-gap: 40px;
        opacity: 0;
        pointer-events: none;
        background-color: #fff;
        border-radius: 20px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        padding: 40px;
        display: flex;
        position: absolute;
        inset: 0%;
        transform: translateY(50%);
        max-width: 640px;
      }

      .sendCrypto_step1_inner {
        grid-row-gap: 24px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        width: 100%;
        display: flex;
      }

      .sendCrypto_step1_amount-title {
        color: #2f2f30;
        letter-spacing: -.04em;
        margin: 0;
        font-size: 2.5rem;
        font-weight: 500;
        line-height: 130%;
      }

      .sendCrypto_step1_currency-selector {
        grid-column-gap: 24px;
        background-color: #f9f9f9;
        border: 1px solid #ebebeb;
        border-radius: 8px;
        justify-content: flex-start;
        align-items: center;
        padding: 16px 24px;
        display: flex;
      }

      .sendCrypto_step1_currency-icon-wrap {
        grid-column-gap: 16px;
        flex: 0 auto;
        justify-content: flex-start;
        align-items: center;
        display: flex;
      }

      .sendCrypto_step1_crypto-ico-wrap {
        border-radius: 100%;
        flex: none;
        width: 32px;
        height: 32px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .sendCrypto_step1_crypto-ico-wrap svg {
        width: 100%;
        height: 100%;
      }

      .sendCrypto_step1_currency-label-wrap {
        grid-column-gap: 8px;
        flex: 0 auto;
        justify-content: flex-start;
        align-items: flex-start;
        display: flex;
      }

      .sendCrypto_step1_currency-label {
        color: #1f1f1f;
        letter-spacing: -.04em;
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 130%;
      }

      .sendCrypto_step1_amount-input-container {
        background-color: #f9f9f9;
        border: 2px solid #f64c07;
        border-radius: 8px;
        justify-content: space-between;
        align-items: center;
        height: 56px;
        padding: 0px 16px;
        display: flex;
        box-shadow: 0 4px 10px #eb855c3d;
      }

      .sendCrypto_step1_amount-input[data-placeholder]:empty::before {
        content: attr(data-placeholder);
        opacity: .4;
        color: #1f1f1f;
      }

      .sendCrypto_step1_amount-input {
        opacity: .4;
        color: #1f1f1f;
        letter-spacing: -.02em;
        margin: 0;
        font-size: 1rem;
        font-weight: 400;
        line-height: 150%;
        text-decoration: none;
        outline: none;
        border: none;
        background: none;
        cursor: text;
        min-width: 3ch;
        direction: ltr;
        text-align: left;
        flex-grow: 1;
      }

      .sendCrypto_step1_amount-input[contenteditable="true"]:focus {
        opacity: 1;
      }

      .sendCrypto_step1_amount-unit {
        color: #7a7a7a;
        letter-spacing: -.04em;
        margin: 0;
        font-size: 1rem;
        font-weight: 600;
        line-height: 130%;
      }

      .sendCrypto_step1_btn {
        grid-column-gap: 10px;
        opacity: .4;
        background-color: #f64c07;
        border-radius: 8px;
        border: none;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 56px;
        padding-left: 24px;
        padding-right: 24px;
        display: flex;
        box-shadow: 0 4px 10px #eb855c40;
        cursor: default;
        transform-origin: center center;
      }

      .sendCrypto_step1_btn-label {
        color: #fff;
        letter-spacing: -.02em;
        margin: 0;
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 140%;
      }
    `;
    document.head.appendChild(styleEl);

    // ----------------------------------
    // Element refs
    // ----------------------------------
    const view2 = rootEl.querySelector("[data-sim-view-2]");
    const networkItems = Array.from(
      rootEl.querySelectorAll("[data-sim-crypto-network]")
    );
    const icoChoice = rootEl.querySelector("[data-sim-crypto-ico-choice]");
    const selectedNetworkLabel = rootEl.querySelector(
      "[data-sim-selected-network]"
    );
    const cryptoAbbEl = rootEl.querySelector("[data-sim-crytpto-abb]");
    const amountEl = rootEl.querySelector("[data-sim-crypto-send-amount]");
    const trigger = rootEl.querySelector("[data-sim-trigger]");

    if (
      !view2 ||
      !networkItems.length ||
      !icoChoice ||
      !selectedNetworkLabel ||
      !cryptoAbbEl ||
      !amountEl ||
      !trigger
    ) {
      console.warn("[sendCrypto_step1] Missing required elements.");
      return;
    }

    // ----------------------------------
    // Initial state & helpers
    // ----------------------------------
    const networkAbbr = {
      bitcoin: "BTC",
      ethereum: "ETH",
      ripple: "XRP",
      bnb: "BNB",
    };

    let selectedNetworkKey = null;
    let ctaEnabled = false;

    const setCtaState = (enabled) => {
      ctaEnabled = enabled;
      if (enabled) {
        trigger.style.opacity = "1";
        trigger.style.pointerEvents = "auto";
        trigger.style.cursor = "pointer";
      } else {
        trigger.style.opacity = "0.4";
        trigger.style.pointerEvents = "none";
        trigger.style.cursor = "default";
      }
    };

    // Make amount editable and clear default
    amountEl.setAttribute("contenteditable", "true");
    amountEl.textContent = "";

    setCtaState(false);

    if (gs) {
      gs.fromTo(
        rootEl.querySelector(".sendCrypto_step1_wrap"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }

    const showView2 = () => {
      view2.style.pointerEvents = "auto";
      if (gs) {
        gs.fromTo(
          view2,
          { opacity: 0, y: "50%" },
          { opacity: 1, y: "0%", duration: 0.5, ease: "power2.out" }
        );
      } else {
        view2.style.opacity = "1";
        view2.style.transform = "translateY(0%)";
      }
    };

    // ----------------------------------
    // Network selection
    // ----------------------------------
    networkItems.forEach((item) => {
      item.addEventListener("click", () => {
        const key = item.getAttribute("data-sim-crypto-network");
        if (!key) return;

        selectedNetworkKey = key;

        // Toggle visual state
        networkItems.forEach((el) =>
          el.classList.toggle("is--selected", el === item)
        );

        // Label text (from UI)
        const labelNode = item.querySelector(".sendCrypto_step1_network-name");
        const labelText = labelNode?.textContent?.trim() || key;

        // Crypto abbreviation
        const abbr = networkAbbr[key] || key.toUpperCase();

        // SVG icon cloning
        const ico = item.querySelector("[data-sim-ico]");
        icoChoice.innerHTML = "";
        if (ico) {
          icoChoice.appendChild(ico.cloneNode(true));
        }

        // Update text fields
        selectedNetworkLabel.textContent = labelText;
        cryptoAbbEl.textContent = abbr;

        // Cookies
        setSimCookie("networkKey", key);
        setSimCookie("networkLabel", labelText);
        setSimCookie("cryptoAbbreviation", abbr);
        if (ico) {
          const icoKey = ico.getAttribute("data-sim-ico") || "";
          setSimCookie("cryptoIconKey", icoKey);
        }

        showView2();
      });
    });

    // ----------------------------------
    // Amount behaviour (keep caret at end)
    // ----------------------------------
    const handleAmountInput = () => {
      // Save selection before we mutate text
      const selection = window.getSelection();
      const isInAmount =
        selection &&
        selection.rangeCount > 0 &&
        amountEl.contains(selection.anchorNode);

      let raw = amountEl.textContent || "";

      // Keep only digits, dot, comma → normalised to dot
      raw = raw.replace(/[^\d.,]/g, "").replace(",", ".");

      // Only rewrite if changed (minimise caret jumps)
      if (amountEl.textContent !== raw) {
        amountEl.textContent = raw;
      }

      // Restore caret to end inside amountEl so typing is always LTR append
      if (isInAmount) {
        const range = document.createRange();
        range.selectNodeContents(amountEl);
        range.collapse(false); // end
        selection.removeAllRanges();
        selection.addRange(range);
      }

      const value = parseFloat(raw);
      if (!isNaN(value) && value > 0) {
        setSimCookie("sendAmount", raw);
        setCtaState(true);
      } else {
        setCtaState(false);
      }
    };

    amountEl.addEventListener("input", handleAmountInput);
    amountEl.addEventListener("blur", handleAmountInput);

    // ----------------------------------
    // Trigger → complete step
    // ----------------------------------
    trigger.addEventListener("click", () => {
      if (!ctaEnabled) return;
      if (!selectedNetworkKey) return;

      if (gs) {
        gs.timeline({ defaults: { ease: "power2.out" } })
          .to(trigger, { scale: 0.98, duration: 0.12 })
          .to(trigger, { scale: 1, duration: 0.18 })
          .add(() => done(), "+=0.05");
      } else {
        done?.();
      }
    });
  },
};
