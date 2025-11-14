// sendCrypto_step6.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = window.gsap || null;

    if (!rootEl) {
      console.warn("[sendCrypto_step6] mount called without rootEl");
      done?.();
      return;
    }

    // --- Cookie helpers (must match Step 1) ---
    const COOKIE_PREFIX = "nca_sendCrypto_";
    const COOKIE_KEYS = {
      amount: `${COOKIE_PREFIX}amount`,
      cryptoAbbr: `${COOKIE_PREFIX}cryptoAbbr`,
    };

    const getCookie = (name) => {
      if (typeof document === "undefined") return null;
      const match = document.cookie.match(
        new RegExp("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")
      );
      return match ? decodeURIComponent(match[2]) : null;
    };

    const formatAmount = (num, decimals = 8) => {
      if (!Number.isFinite(num)) return "0";
      // fixed, then trim trailing zeros and possible trailing dot
      let s = num.toFixed(decimals);
      s = s.replace(/0+$/, "").replace(/\.$/, "");
      return s === "" ? "0" : s;
    };

    // --- Render UI template ---
    rootEl.innerHTML = `
<style>
  .sendCrypto_step6_button-large {
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

  .sendCrypto_step6_buttons-2 {
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

  .sendCrypto_step6_frame-2121459421 {
    grid-column-gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 802px;
    height: 854px;
    text-decoration: none;
    display: flex;
  }

  .sendCrypto_step6_canvas-wrap {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 854px;
    padding-left: 120px;
    padding-right: 120px;
    text-decoration: none;
    display: flex;
    overflow: hidden;
  }

  .sendCrypto_step6_container {
    grid-row-gap: 40px;
    background-color: #fff;
    border-radius: 20px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
    max-width: 562px;
    padding: 40px;
    text-decoration: none;
    display: flex;
    box-shadow: 0 4px 20px #0000001a;
  }

  .sendCrypto_step6_header-style {
    grid-row-gap: 8px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-decoration: none;
    display: flex;
  }

  .sendCrypto_step6_title-style {
    color: #2f2f30;
    letter-spacing: -.04em;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 130%;
    text-decoration: none;
  }

  .sendCrypto_step6_subtitle {
    color: #7a7a7a;
    letter-spacing: -.04em;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 130%;
    text-decoration: none;
  }

  .sendCrypto_step6_details-style {
    grid-row-gap: 16px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
    text-decoration: none;
    display: flex;
  }

  .sendCrypto_step6_detail-item {
    grid-row-gap: 24px;
    background-color: #f9f9f9;
    border: 1px solid #ebebeb;
    border-radius: 8px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 16px 24px;
    text-decoration: none;
    display: flex;
  }

  .sendCrypto_step6_label-style {
    color: #7a7a7a;
    letter-spacing: -.02em;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 500;
    line-height: 150%;
    text-decoration: none;
  }

  .sendCrypto_step6_value {
    color: #1f1f1f;
    letter-spacing: -.04em;
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 130%;
    text-decoration: none;
  }

  .sendCrypto_step6_detail-item-2 {
    grid-row-gap: 24px;
    background-color: #f64c071a;
    border-radius: 8px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 16px 24px;
    text-decoration: none;
    display: flex;
  }

  .sendCrypto_step6_value-2 {
    color: #f64c07;
    letter-spacing: -.04em;
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 130%;
    text-decoration: none;
  }

  .sendCrypto_step6_buttons {
    grid-column-gap: 10px;
    background-image: linear-gradient(87.19deg, #f64c07, #ff7943);
    border: 2px solid #f64c07;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    height: 56px;
    padding-left: 24px;
    padding-right: 24px;
    display: flex;
    box-shadow: 0 4px 10px #eb855c40;
    cursor: pointer;
  }

  .sendCrypto_step6_button-large-2 {
    color: #fff;
    letter-spacing: -.02em;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 140%;
    text-decoration: none;
    cursor: pointer;
  }
</style>

<div class="sendCrypto_step6_canvas-wrap">
  <div class="sendCrypto_step6_container">
    <div class="sendCrypto_step6_header-style">
      <div class="sendCrypto_step6_title-style">Send details</div>
      <div class="sendCrypto_step6_subtitle">
        Send <span data-sim-crypto-amount>0.0001</span>
        <span data-sim-crypto-name>BTC</span>
        to 1F1cZ...9aB7Pd
      </div>
    </div>
    <div class="sendCrypto_step6_details-style">
      <div class="sendCrypto_step6_detail-item">
        <div class="sendCrypto_step6_header-style">
          <div class="sendCrypto_step6_label-style">Amount</div>
          <div class="sendCrypto_step6_value">
            <span data-sim-crypto-amount>0.0001</span>
            <span data-sim-crypto-name>BTC</span>
          </div>
        </div>
      </div>
      <div class="sendCrypto_step6_detail-item">
        <div class="sendCrypto_step6_header-style">
          <div class="sendCrypto_step6_label-style">Gas fee</div>
          <div class="sendCrypto_step6_value">
            <span data-sim-crypto-gas>0.0001</span>
            <span data-sim-crypto-name>BTC</span>
          </div>
        </div>
      </div>
      <div class="sendCrypto_step6_detail-item-2">
        <div class="sendCrypto_step6_header-style">
          <div class="sendCrypto_step6_label-style">You spend</div>
          <div class="sendCrypto_step6_value-2">
            <span data-sim-crypto-total-amount>0.0001</span>
            <span data-sim-crypto-name>BTC</span>
          </div>
        </div>
      </div>
    </div>
    <div data-sim-trigger class="sendCrypto_step6_buttons">
      <div class="sendCrypto_step6_button-large-2">Send</div>
    </div>
  </div>
</div>
    `;

    // --- Element refs ---
    const amountEls = rootEl.querySelectorAll("[data-sim-crypto-amount]");
    const nameEls = rootEl.querySelectorAll("[data-sim-crypto-name]");
    const gasEl = rootEl.querySelector("[data-sim-crypto-gas]");
    const totalEl = rootEl.querySelector("[data-sim-crypto-total-amount]");
    const trigger = rootEl.querySelector("[data-sim-trigger]");

    if (
      !amountEls.length ||
      !nameEls.length ||
      !gasEl ||
      !totalEl ||
      !trigger
    ) {
      console.warn("[sendCrypto_step6] Missing required elements.");
      done?.();
      return;
    }

    // --- Pull values from cookies set in Step 1 ---
    const storedAmountRaw = getCookie(COOKIE_KEYS.amount);
    const storedAbbr = getCookie(COOKIE_KEYS.cryptoAbbr) || "BTC";

    let amountNum = parseFloat(storedAmountRaw ?? "0.0001");
    if (!Number.isFinite(amountNum) || amountNum <= 0) {
      amountNum = 0.0001; // sensible fallback
    }

    // Gas fee = 0.4% of amount
    const gasNum = amountNum * 0.004;
    const totalNum = amountNum + gasNum;

    const amountStr = formatAmount(amountNum);
    const gasStr = formatAmount(gasNum);
    const totalStr = formatAmount(totalNum);

    // Apply values to DOM
    amountEls.forEach((el) => {
      el.textContent = amountStr;
    });

    nameEls.forEach((el) => {
      el.textContent = storedAbbr;
    });

    gasEl.textContent = gasStr;
    totalEl.textContent = totalStr;

    // --- Trigger click → complete step with micro animation ---
    const handleTriggerClick = () => {
      if (gs) {
        gs.timeline({ defaults: { ease: "power2.out" } })
          .to(trigger, { scale: 0.98, duration: 0.12 })
          .to(trigger, { scale: 1, duration: 0.18 })
          .add(() => done(), "+=0.05");
      } else {
        done?.();
      }
    };

    trigger.addEventListener("click", handleTriggerClick);
  },
};
