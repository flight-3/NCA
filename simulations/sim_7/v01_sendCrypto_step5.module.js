// sendCrypto_step5.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = window.gsap || null;

    if (!rootEl) {
      console.warn("[sendCrypto_step5] mount called without rootEl");
      done?.();
      return;
    }

    rootEl.innerHTML = `
<style>
  .sendCrypto_step5_button-large {
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

  .sendCrypto_step5_buttons-2 {
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

  .sendCrypto_step5_frame-2121459418 {
    grid-column-gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 802px;
    height: 854px;
    text-decoration: none;
    display: flex;
  }

  .sendCrypto_step5_canvas-wrap {
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

  .sendCrypto_step5_container {
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

  .sendCrypto_step5_title-style {
    color: #2f2f30;
    letter-spacing: -.04em;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 130%;
    text-decoration: none;
  }

  .sendCrypto_step5_container-2 {
    grid-row-gap: 24px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
    text-decoration: none;
    display: flex;
  }

  .sendCrypto_step5_container-3 {
    grid-row-gap: 8px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    text-decoration: none;
    display: flex;
  }

  .sendCrypto_step5_label-style {
    color: #7a7a7a;
    letter-spacing: -.02em;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 500;
    line-height: 150%;
    text-decoration: none;
  }

  .sendCrypto_step5_input-container {
    grid-column-gap: 10px;
    background-color: #f9f9f9;
    border: 2px solid #f64c07;
    border-radius: 8px;
    justify-content: flex-start;
    align-items: center;
    height: 56px;
    padding: 0 16px;
    display: flex;
    box-shadow: 0 4px 10px #eb855c3d;
  }

  .sendCrypto_step5_input-container-2 {
    grid-column-gap: 10px;
    background-color: #f9f9f9;
    border: 2px solid #ebebeb;
    border-radius: 8px;
    justify-content: flex-start;
    align-items: center;
    height: 56px;
    padding: 0 16px;
    display: flex;
  }

  .sendCrypto_step5_input {
    opacity: .4;
    color: #1f1f1f;
    letter-spacing: -.02em;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 150%;
    text-decoration: none;
    width: 100%;
  }

  .sendCrypto_step5_input.is--active {
    opacity: 1;
  }

  .sendCrypto_step5_buttons {
    grid-column-gap: 10px;
    opacity: .4;
    pointer-events: none;
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

  .sendCrypto_step5_button-large-2 {
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

<div class="sendCrypto_step5_canvas-wrap">
  <div class="sendCrypto_step5_container">
    <div class="sendCrypto_step5_title-style">Recipient address</div>
    <div class="sendCrypto_step5_container-2">
      <div class="sendCrypto_step5_container-2">
        <div class="sendCrypto_step5_container-3">
          <div class="sendCrypto_step5_label-style">Address</div>
          <div class="sendCrypto_step5_input-container-2">
            <div class="sendCrypto_step5_input is--active">
              1F1cZz9wXh3QK7p8E2m4bUf9TtLx9aB7Pd
            </div>
          </div>
        </div>
      </div>
      <div class="sendCrypto_step5_container-2">
        <div class="sendCrypto_step5_container-3">
          <div class="sendCrypto_step5_label-style">Destination tag</div>
          <div class="sendCrypto_step5_input-container">
            <div data-sim-memo-tag class="sendCrypto_step5_input">Enter tag</div>
          </div>
        </div>
      </div>
    </div>
    <div data-sim-trigger class="sendCrypto_step5_buttons">
      <div class="sendCrypto_step5_button-large-2">Next</div>
    </div>
  </div>
</div>
    `;

    const memoEl = rootEl.querySelector("[data-sim-memo-tag]");
    const trigger = rootEl.querySelector("[data-sim-trigger]");

    if (!memoEl || !trigger) {
      console.warn("[sendCrypto_step5] Missing required elements.");
      done?.();
      return;
    }

    // Initial trigger state (matches CSS)
    trigger.style.opacity = "0.4";
    trigger.style.pointerEvents = "none";

    const MEMO_VALUE = "example-memo-98765";

    // Click on memo tag → fill value + enable Next
    const handleMemoClick = () => {
      memoEl.textContent = MEMO_VALUE;
      memoEl.style.opacity = "1";

      trigger.style.opacity = "1";
      trigger.style.pointerEvents = "auto";
    };

    memoEl.addEventListener("click", handleMemoClick);

    // Trigger click → complete step (with micro interaction)
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
