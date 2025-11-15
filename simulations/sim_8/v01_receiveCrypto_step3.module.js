// receiveCrypto_step2.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = window.gsap || null;

    if (!rootEl) {
      console.warn("[receiveCrypto_step2] mount called without rootEl");
      done?.();
      return;
    }

    rootEl.innerHTML = `
<style>
  .receiveCrypto_step2_button-large {
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

  .receiveCrypto_step2_buttons-2 {
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

  .receiveCrypto_step2_canvas-wrap {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 854px;
    text-decoration: none;
    display: flex;
    overflow: hidden;
  }

  .receiveCrypto_step2_container {
    grid-row-gap: 24px;
    background-color: #fff;
    border-radius: 20px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
    max-width: 562px;
    padding: 40px 40px 24px;
    text-decoration: none;
    display: flex;
    overflow: hidden;
    box-shadow: 0 4px 20px #0000001a;
  }

  .receiveCrypto_step2_title-style {
    color: #2f2f30;
    letter-spacing: -.04em;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 130%;
    text-decoration: none;
  }

  .receiveCrypto_step2_container-2 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    text-decoration: none;
    display: flex;
  }

  .receiveCrypto_step2_container-3 {
    border: 2px solid #f64c07;
    border-radius: 8px;
    justify-content: space-between;
    align-items: center;
    padding: 20px 16px;
    text-decoration: none;
    display: flex;
    cursor: pointer;
  }

  .receiveCrypto_step2_container-4 {
    grid-column-gap: 24px;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    display: flex;
  }

  .receiveCrypto_step2_eth {
    object-fit: cover;
    overflow: hidden;
  }

  .receiveCrypto_step2_container-5 {
    grid-row-gap: 2px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-decoration: none;
    display: flex;
  }

  .receiveCrypto_step2_token-name {
    color: #1f1f1f;
    letter-spacing: -.04em;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 130%;
    text-decoration: none;
  }

  .receiveCrypto_step2_token-address {
    color: #7a7a7a;
    letter-spacing: -.04em;
    margin-top: 0;
    margin-bottom: 0;
    font-size: .875rem;
    font-weight: 400;
    line-height: 130%;
    text-decoration: none;
  }

  .receiveCrypto_step2_container-6 {
    justify-content: space-between;
    align-items: center;
    padding: 20px 16px;
    text-decoration: none;
    display: flex;
  }

  .receiveCrypto_step2_container-alt {
    border-bottom: 1px solid #e5e5e5;
    justify-content: space-between;
    align-items: center;
    padding: 20px 16px;
    text-decoration: none;
    display: flex;
  }

  .receiveCrypto_step2_arw-ico {
    flex: none;
    width: 20px;
    height: 20px;
  }
</style>

<div class="receiveCrypto_step2_canvas-wrap">
  <div data-sim-view class="receiveCrypto_step2_container">
    <div class="receiveCrypto_step2_title-style">Receive address</div>
    <div class="receiveCrypto_step2_container-2">
      <div data-sim-trigger class="receiveCrypto_step2_container-3">
        <div class="receiveCrypto_step2_container-4">
          <img src="https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5cad7c2be8398af2e8_eth-logo.svg" loading="auto" width="40" height="40" alt="" class="receiveCrypto_step2_eth">
          <div class="receiveCrypto_step2_container-5">
            <div class="receiveCrypto_step2_token-name">ETH</div>
            <div class="receiveCrypto_step2_token-address">0x415e4...8940e</div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" class="receiveCrypto_step2_arw-ico">
          <path d="M14.9343 9.68284C14.8946 9.58054 14.8352 9.48709 14.7593 9.40784L10.5926 5.24117C10.5149 5.16347 10.4227 5.10184 10.3212 5.05979C10.2197 5.01774 10.1109 4.99609 10.001 4.99609C9.77906 4.99609 9.56623 5.08425 9.40931 5.24117C9.33161 5.31887 9.26998 5.41111 9.22793 5.51263C9.18588 5.61415 9.16423 5.72295 9.16423 5.83284C9.16423 6.05475 9.25239 6.26758 9.40931 6.4245L12.1593 9.16617H5.83431C5.6133 9.16617 5.40133 9.25397 5.24505 9.41025C5.08877 9.56653 5.00098 9.77849 5.00098 9.9995C5.00098 10.2205 5.08877 10.4325 5.24505 10.5888C5.40133 10.745 5.6133 10.8328 5.83431 10.8328H12.1593L9.40931 13.5745C9.3312 13.652 9.26921 13.7441 9.2269 13.8457C9.18459 13.9472 9.16281 14.0562 9.16281 14.1662C9.16281 14.2762 9.18459 14.3851 9.2269 14.4867C9.26921 14.5882 9.3312 14.6804 9.40931 14.7578C9.48678 14.8359 9.57895 14.8979 9.6805 14.9402C9.78205 14.9826 9.89097 15.0043 10.001 15.0043C10.111 15.0043 10.2199 14.9826 10.3215 14.9402C10.423 14.8979 10.5152 14.8359 10.5926 14.7578L14.7593 10.5912C14.8352 10.5119 14.8946 10.4185 14.9343 10.3162C15.0177 10.1133 15.0177 9.88572 14.9343 9.68284Z" fill="#7A7A7A"></path>
        </svg>
      </div>
      <div class="receiveCrypto_step2_container-alt">
        <div class="receiveCrypto_step2_container-4">
          <img src="https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5cdc09e9e742cbdff5_btc-logo.svg" loading="auto" width="40" height="40" alt="" class="receiveCrypto_step2_eth">
          <div class="receiveCrypto_step2_container-5">
            <div class="receiveCrypto_step2_token-name">BTC</div>
            <div class="receiveCrypto_step2_token-address">bc1q9x...3l4f</div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" class="receiveCrypto_step2_arw-ico">
          <path d="M14.9343 9.68284C14.8946 9.58054 14.8352 9.48709 14.7593 9.40784L10.5926 5.24117C10.5149 5.16347 10.4227 5.10184 10.3212 5.05979C10.2197 5.01774 10.1109 4.99609 10.001 4.99609C9.77906 4.99609 9.56623 5.08425 9.40931 5.24117C9.33161 5.31887 9.26998 5.41111 9.22793 5.51263C9.18588 5.61415 9.16423 5.72295 9.16423 5.83284C9.16423 6.05475 9.25239 6.26758 9.40931 6.4245L12.1593 9.16617H5.83431C5.6133 9.16617 5.40133 9.25397 5.24505 9.41025C5.08877 9.56653 5.00098 9.77849 5.00098 9.9995C5.00098 10.2205 5.08877 10.4325 5.24505 10.5888C5.40133 10.745 5.6133 10.8328 5.83431 10.8328H12.1593L9.40931 13.5745C9.3312 13.652 9.26921 13.7441 9.2269 13.8457C9.18459 13.9472 9.16281 14.0562 9.16281 14.1662C9.16281 14.2762 9.18459 14.3851 9.2269 14.4867C9.26921 14.5882 9.3312 14.6804 9.40931 14.7578C9.48678 14.8359 9.57895 14.8979 9.6805 14.9402C9.78205 14.9826 9.89097 15.0043 10.001 15.0043C10.111 15.0043 10.2199 14.9826 10.3215 14.9402C10.423 14.8979 10.5152 14.8359 10.5926 14.7578L14.7593 10.5912C14.8352 10.5119 14.8946 10.4185 14.9343 10.3162C15.0177 10.1133 15.0177 9.88572 14.9343 9.68284Z" fill="#7A7A7A"></path>
        </svg>
      </div>
      <div class="receiveCrypto_step2_container-6">
        <div class="receiveCrypto_step2_container-4">
          <img src="https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69182e5cecd803e93aa1a9d1_xrp-logo.svg" loading="auto" width="40" height="40" alt="" class="receiveCrypto_step2_eth">
          <div class="receiveCrypto_step2_container-5">
            <div class="receiveCrypto_step2_token-name">XRP</div>
            <div class="receiveCrypto_step2_token-address">rUpy3e...40e12</div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" class="receiveCrypto_step2_arw-ico">
          <path d="M14.9343 9.68284C14.8946 9.58054 14.8352 9.48709 14.7593 9.40784L10.5926 5.24117C10.5149 5.16347 10.4227 5.10184 10.3212 5.05979C10.2197 5.01774 10.1109 4.99609 10.001 4.99609C9.77906 4.99609 9.56623 5.08425 9.40931 5.24117C9.33161 5.31887 9.26998 5.41111 9.22793 5.51263C9.18588 5.61415 9.16423 5.72295 9.16423 5.83284C9.16423 6.05475 9.25239 6.26758 9.40931 6.4245L12.1593 9.16617H5.83431C5.6133 9.16617 5.40133 9.25397 5.24505 9.41025C5.08877 9.56653 5.00098 9.77849 5.00098 9.9995C5.00098 10.2205 5.08877 10.4325 5.24505 10.5888C5.40133 10.745 5.6133 10.8328 5.83431 10.8328H12.1593L9.40931 13.5745C9.3312 13.652 9.26921 13.7441 9.2269 13.8457C9.18459 13.9472 9.16281 14.0562 9.16281 14.1662C9.16281 14.2762 9.18459 14.3851 9.2269 14.4867C9.26921 14.5882 9.3312 14.6804 9.40931 14.7578C9.48678 14.8359 9.57895 14.8979 9.6805 14.9402C9.78205 14.9826 9.89097 15.0043 10.001 15.0043C10.111 15.0043 10.2199 14.9826 10.3215 14.9402C10.423 14.8979 10.5152 14.8359 10.5926 14.7578L14.7593 10.5912C14.8352 10.5119 14.8946 10.4185 14.9343 10.3162C15.0177 10.1133 15.0177 9.88572 14.9343 9.68284Z" fill="#7A7A7A"></path>
        </svg>
      </div>
    </div>
  </div>
</div>
    `;

    const view = rootEl.querySelector("[data-sim-view]");
    const trigger = rootEl.querySelector("[data-sim-trigger]");

    if (!view || !trigger) {
      console.warn("[receiveCrypto_step2] Missing required elements.");
      done?.();
      return;
    }

    // Fade in + up on mount
    if (gs) {
      gs.from(view, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
      });
    } else {
      view.style.opacity = "0";
      view.style.transform = "translateY(50px)";
      view.style.transition = "opacity 1s ease-out, transform 0.6s ease-out";
      requestAnimationFrame(() => {
        view.style.opacity = "1";
        view.style.transform = "translateY(0)";
      });
    }

    // Click → micro press animation + complete step
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
