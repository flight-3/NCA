// setUpHotWallet_step6.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();

    const gs = window.gsap || null;

    // ----------------------------------
    // Inject HTML
    // ----------------------------------
    rootEl.innerHTML = `
      <div class="suhw_step6_wrap">
        <div class="suhw_step6_card">
          <div class="suhw_step6_header">
            <div class="suhw_step6_header-title">Additional Security</div>
          </div>

          <div class="suhw_step6_settings">
            <div class="suhw_step6_setting">
              <div class="suhw_step6_setting-info">
                <div class="suhw_step6_setting-title">Enable auto-lock</div>
                <div class="suhw_step6_setting-desc">
                  Automatically lock the app after inactivity to keep your wallet secure.
                </div>
              </div>
              <button type="button" class="suhw_step6_toggle" data-sim-toggle>
                <div class="suhw_step6_toggle-knob"></div>
              </button>
            </div>

            <div class="suhw_step6_setting">
              <div class="suhw_step6_setting-info">
                <div class="suhw_step6_setting-title">Require passcode for transactions</div>
                <div class="suhw_step6_setting-desc">
                  Add an extra step of protection before sending or swapping crypto.
                </div>
              </div>
              <button type="button" class="suhw_step6_toggle" data-sim-toggle>
                <div class="suhw_step6_toggle-knob"></div>
              </button>
            </div>

            <div class="suhw_step6_setting">
              <div class="suhw_step6_setting-info">
                <div class="suhw_step6_setting-title">Phishing detection</div>
                <div class="suhw_step6_setting-desc">
                  Get alerts if you interact with suspicious links or addresses.
                </div>
              </div>
              <button type="button" class="suhw_step6_toggle" data-sim-toggle>
                <div class="suhw_step6_toggle-knob"></div>
              </button>
            </div>
          </div>

          <button type="button" class="suhw_step6_btn-primary" data-sim-trigger>
            <div class="suhw_step6_btn-primary-label">Set changes</div>
          </button>
        </div>
      </div>
    `;

    // ----------------------------------
    // Inject CSS (step-specific)
    // ----------------------------------
    const style = document.createElement("style");
    style.textContent = `
      .suhw_step6_wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 854px;
        padding-left: 120px;
        padding-right: 120px;
        overflow: hidden;
      }

      .suhw_step6_card {
        display: flex;
        flex-direction: column;
        gap: 40px;
        background-color: #ffffff;
        border-radius: 20px;
        width: 100%;
        max-width: 540px;
        padding: 40px;
        box-shadow: 0 4px 20px #0000001a;
      }

      .suhw_step6_header {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .suhw_step6_header-title {
        margin: 0;
        font-size: 2.5rem;
        font-weight: 500;
        line-height: 130%;
        letter-spacing: -0.04em;
        color: #2f2f30;
      }

      .suhw_step6_settings {
        display: flex;
        flex-direction: column;
        gap: 24px;
        width: 100%;
      }

      .suhw_step6_setting {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 40px;
        width: 100%;
      }

      .suhw_step6_setting-info {
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 100%;
      }

      .suhw_step6_setting-title {
        margin: 0;
        font-size: 1.125rem;
        font-weight: 600;
        line-height: 140%;
        letter-spacing: -0.02em;
        color: #1f1f1f;
      }

      .suhw_step6_setting-desc {
        margin: 0;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 130%;
        letter-spacing: -0.02em;
        color: #7a7a7a;
      }

      .suhw_step6_toggle {
        position: relative;
        width: 52px;
        height: 28px;
        padding: 2px;
        border-radius: 40px;
        border: none;
        outline: 2px solid #f64d08;
        background-color: #d7d7d7;
        cursor: pointer;
        flex: none;
        text-decoration: none;
        transition: all 0.3s ease;
      }

      .suhw_step6_toggle-knob {
        flex: none;
        width: 24px;
        height: 24px;
        border-radius: 999px;
        background-color: #ffffff;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        transition: transform 0.22s ease;
      }

      .suhw_step6_toggle.is--active .suhw_step6_toggle-knob {
        transform: translateX(100%) !important;
      }

      .suhw_step6_toggle.is--active {
        background-color: #f64d08;
      }

      .suhw_step6_btn-primary {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 56px;
        padding-left: 24px;
        padding-right: 24px;
        border-radius: 8px;
        border: 2px solid #f64c07;
        background-image: linear-gradient(87.19deg, #f64c07, #ff7943);
        box-shadow: 0 4px 10px #eb855c40;
        opacity: 0.5;
        cursor: default;
        pointer-events: none;
        transform-origin: center;
      }

      .suhw_step6_btn-primary-label {
        margin: 0;
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 140%;
        letter-spacing: -0.02em;
        color: #ffffff;
      }
    `;
    document.head.appendChild(style);

    // ----------------------------------
    // Element refs
    // ----------------------------------
    const trigger = rootEl.querySelector("[data-sim-trigger]");
    const toggles = Array.from(rootEl.querySelectorAll("[data-sim-toggle]"));

    if (!trigger || toggles.length === 0) {
      console.warn("[suhw_step6] Missing required elements.");
      return;
    }

    // Initial button state: disabled
    trigger.style.opacity = "0.5";
    trigger.style.pointerEvents = "none";
    trigger.style.cursor = "default";

    if (gs) {
      gs.fromTo(
        rootEl.querySelector(".suhw_step6_wrap"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }

    // ----------------------------------
    // Helper: update CTA enabled state
    // ----------------------------------
    const updateButtonState = () => {
      const allActive = toggles.every((t) =>
        t.classList.contains("is--active")
      );

      if (allActive) {
        trigger.style.opacity = "1";
        trigger.style.pointerEvents = "auto";
        trigger.style.cursor = "pointer";
      } else {
        trigger.style.opacity = "0.5";
        trigger.style.pointerEvents = "none";
        trigger.style.cursor = "default";
      }
    };

    // ----------------------------------
    // Toggle behaviour
    // ----------------------------------
    toggles.forEach((toggle) => {
      toggle.classList.remove("is--active");

      toggle.addEventListener("click", () => {
        // Toggle active state
        const nowActive = !toggle.classList.contains("is--active");
        toggle.classList.toggle("is--active", nowActive);

        if (gs) {
          gs.fromTo(
            toggle.querySelector(".suhw_step6_toggle-knob"),
            { scale: 0.9 },
            { scale: 1, duration: 0.18, ease: "power2.out" }
          );
        }

        updateButtonState();
      });
    });

    // ----------------------------------
    // Trigger → complete step
    // ----------------------------------
    trigger.addEventListener("click", () => {
      const allActive = toggles.every((t) =>
        t.classList.contains("is--active")
      );
      if (!allActive) return;

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
