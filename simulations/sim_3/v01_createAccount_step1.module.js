// createAccount_step1.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = window.gsap || null;

    // ---------- Clean HTML ----------
    rootEl.innerHTML = `
      <div class="nca-step1_wrap">
        <div class="nca-step1_frame">
          <div class="nca-step1_toolbar">
            <div class="nca-step1_mock-btn"></div>
            <div class="nca-step1_mock-btn"></div>
            <div class="nca-step1_mock-btn-alt"></div>
            <div class="nca-step1_cta-wrap" data-sim-trigger>
              <p class="nca-step1_cta-text">Create account</p>
            </div>
          </div>

          <div class="nca-step1_stage">
            <div class="nca-step1_stage-top">
              <div class="nca-step1_mock-ui"></div>
              <div class="nca-step1_stage-mid">
                <div class="nca-step1_mock-ui-small"></div>
                <div class="nca-step1_mock-ui-wide"></div>
              </div>
            </div>
            <div class="nca-step1_stage-bottom"></div>
          </div>
        </div>
      </div>
    `;

    // ---------- Scoped CSS ----------
    const style = document.createElement("style");
    style.textContent = `
      .nca-step1_wrap {
        width:100%; height:100%;
        display:flex; flex-direction:column; justify-content:flex-end; align-items:flex-start;
        padding:7.25rem 7.5rem 0 0; gap:4rem; overflow:hidden;
      }
      .nca-step1_frame {
        width:100%; height:46.125rem; max-width:50.125rem;
        background:#fff; border-top-right-radius:1.25rem;
        display:flex; flex-direction:column; gap:2.5rem; align-items:flex-end;
        padding:2.5rem; box-shadow:0 .25rem 1.25rem #0001;
      }
      .nca-step1_toolbar {
        display:flex; align-items:center; justify-content:flex-end; gap:1.5rem; width:100%;
      }
      .nca-step1_mock-btn {
        width:3.5rem; height:3.5rem; border-radius:62.5rem;
        background:#6f6f6f; opacity:.1;
      }
      .nca-step1_mock-btn-alt {
        width:7.8125rem; height:3.5rem; border-radius:.5rem;
        background:#6f6f6f; opacity:.1;
      }
      .nca-step1_cta-wrap {
        display:flex; align-items:center; justify-content:center;
        height:3.5rem; padding:0 1.5rem;
        border-radius:.5rem; border:.125rem solid #f64c07;
        background-image:linear-gradient(82.37deg,#f64c07 0%,#ff7943 100%);
        box-shadow:0 .25rem .625rem #eb855c40;
        cursor:pointer;
      }
      .nca-step1_cta-text {
        color:#fff; font:500 1.125rem/1.4 Inter,system-ui,sans-serif;
        letter-spacing:-.02em; margin:0;
      }
      .nca-step1_stage {
        display:flex; flex-direction:column; gap:4rem; width:100%;
      }
      .nca-step1_stage-top {
        width:100%; display:flex; flex-direction:column; gap:1.5rem; align-items:stretch;
      }
      .nca-step1_mock-ui {
        width:100%; height:16.3125rem;
        border-top-right-radius:.5rem; border-bottom-right-radius:.5rem;
        background-image:linear-gradient(270deg,#ededed 0%,#f7f7f7 100%);
      }
      .nca-step1_stage-mid {
        display:flex; gap:2.5rem; align-items:flex-start;
      }
      .nca-step1_mock-ui-small {
        width:7.9375rem; height:7.5rem;
        border-top-right-radius:.5rem; border-bottom-right-radius:.5rem;
        background-image:linear-gradient(270deg,#f7f7f7 0%,#ededed 100%);
      }
      .nca-step1_mock-ui-wide {
        flex:1; max-width:29.625rem; height:7.5rem; border-radius:.5rem;
        background-image:linear-gradient(270deg,#f7f7f7 0%,#ededed 100%);
      }
      .nca-step1_stage-bottom {
        width:100%; height:8.3125rem;
        border-top-right-radius:.5rem; border-bottom-right-radius:.5rem;
        background-image:linear-gradient(270deg,#ededed 0%,#f7f7f7 100%);
      }
    `;
    rootEl.appendChild(style);

    // ---------- GSAP glow + complete ----------
    const trigger = rootEl.querySelector("[data-sim-trigger]");
    const timelines = [];

    if (gs) {
      // subtle pulse glow
      timelines.push(
        gs
          .timeline({
            repeat: -1,
            repeatDelay: 0.8,
            defaults: { ease: "power2.inOut" },
          })
          .to(trigger, {
            boxShadow: "0 0 0.75rem rgba(246,76,7,0.8)",
            duration: 0.5,
          })
          .to(trigger, {
            boxShadow: "0 .25rem .625rem rgba(235,133,92,0.5)",
            duration: 0.6,
          })
      );
    }

    const onClick = () => {
      if (gs) {
        gs.timeline({ defaults: { ease: "power2.out" } })
          .to(trigger, { scale: 0.98, duration: 0.12 })
          .to(trigger, { scale: 1, duration: 0.18 })
          .add(() => done(), "+=0.05");
      } else done?.();
    };
    trigger.addEventListener("click", onClick);

    // ---------- Cleanup ----------
    const destroy = () => {
      try {
        trigger.removeEventListener("click", onClick);
      } catch {}
      try {
        timelines.forEach((t) => t?.kill?.());
      } catch {}
      try {
        rootEl.innerHTML = "";
      } catch {}
    };
    return destroy;
  },
};
