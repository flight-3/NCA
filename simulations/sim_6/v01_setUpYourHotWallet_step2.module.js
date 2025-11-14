// setUpHotWallet_step2.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();

    const gs = window.gsap || null;

    // --------------------------
    //  Inject HTML
    // --------------------------
    rootEl.innerHTML = `
      <div class="suhw_step2_wrap">
        <div class="suhw_step2_card">
          
          <div class="suhw_step2_header">
            <div class="suhw_step2_title">Create new wallet</div>
            <div class="suhw_step2_subtitle">
              Get started with a new wallet or import an existing wallet.
            </div>
          </div>

          <div class="suhw_step2_btnGroup">
            <div data-sim-trigger class="suhw_step2_btn-primary">
              <div class="suhw_step2_btn-primary-label">Create a new wallet</div>
            </div>

            <div class="suhw_step2_btn-secondary">
              <div class="suhw_step2_btn-secondary-label">Import an existing wallet</div>
            </div>
          </div>

        </div>
      </div>
    `;

    // --------------------------
    //  Inject CSS
    // --------------------------
    const style = document.createElement("style");
    style.textContent = `
      .suhw_step2_wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 7.5rem;
      }

      .suhw_step2_card {
        background: #ffffff;
        border-radius: 1.25rem;
        padding: 2.5rem;
        width: 100%;
        max-width: 31.25rem;
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        box-shadow: 0 0.25rem 1.25rem rgba(0,0,0,0.1);
      }

      .suhw_step2_header {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .suhw_step2_title {
        width: 100%;
        text-align: center;
        font-size: 2.5rem;
        font-weight: 500;
        letter-spacing: -0.04em;
        color: #2f2f30;
      }

      .suhw_step2_subtitle {
        width: 100%;
        text-align: center;
        font-size: 1rem;
        font-weight: 400;
        color: #7a7a7a;
        letter-spacing: -0.02em;
        line-height: 150%;
      }

      .suhw_step2_btnGroup {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
      }

      .suhw_step2_btn-primary {
        background: linear-gradient(87deg, #f64c07 0%, #ff7943 100%);
        border: 2px solid #f64c07;
        border-radius: 8px;
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: 0 4px 10px rgba(235,133,92,0.25);
        transform-origin: center;
      }

      .suhw_step2_btn-primary-label {
        color: #fff;
        font-size: 1.125rem;
        font-weight: 500;
        letter-spacing: -0.02em;
      }

      .suhw_step2_btn-secondary {
        border: 2px solid #7a7a7a;
        border-radius: 8px;
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .suhw_step2_btn-secondary-label {
        color: #7a7a7a;
        font-size: 1.125rem;
        font-weight: 500;
        letter-spacing: -0.02em;
      }
    `;
    document.head.appendChild(style);

    // --------------------------
    //  Element References
    // --------------------------
    const trigger = rootEl.querySelector("[data-sim-trigger]");
    const card = rootEl.querySelector(".suhw_step2_card");

    if (!trigger || !card) {
      console.warn("[suhw_step2] Missing required elements.");
      return;
    }

    // --------------------------
    //  Enter Animation
    // --------------------------
    if (gs) {
      gs.fromTo(
        card,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }

    // --------------------------
    //  Trigger → Click bounce + complete
    // --------------------------
    const onClick = () => {
      if (gs) {
        gs.timeline({ defaults: { ease: "power2.out" } })
          .to(trigger, { scale: 0.98, duration: 0.12 })
          .to(trigger, { scale: 1, duration: 0.18 })
          .add(() => done(), "+=0.05");
      } else {
        done?.();
      }
    };

    trigger.addEventListener("click", onClick);
  },
};
