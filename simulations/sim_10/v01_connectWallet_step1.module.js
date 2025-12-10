// connectWalletToDex_step1.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = window.gsap || null;

    if (!rootEl) return;

    // ----------------------------------
    // Inject step-scoped CSS (once)
    // ----------------------------------
    const STYLE_ID = "connectWalletDex_step1_styles";

    if (!document.getElementById(STYLE_ID)) {
      const styleEl = document.createElement("style");
      styleEl.id = STYLE_ID;
      styleEl.textContent = `
.button-large {
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

.buttons-2 {
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

.canvas-wrap {
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  text-decoration: none;
  display: flex;
  overflow: hidden;
}

.step1content {
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

.fauxui_header {
  grid-column-gap: 1.5rem;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: flex-start;
  text-decoration: none;
  display: flex;
}

.fauxui_06 {
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

.fauxui_05 {
  opacity: .1;
  background-color: #6f6f6f;
  border-radius: .5rem;
  width: 7.8125rem;
  height: 3.5rem;
  text-decoration: none;
}

.buttons {
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

.button-large-2 {
  color: #fff;
  letter-spacing: -.02em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 140%;
  text-decoration: none;
}

.body-style {
  grid-row-gap: 4rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  text-decoration: none;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
}

.main-content {
  grid-row-gap: 1.5rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  text-decoration: none;
  display: flex;
}

.fauxui_04 {
  background-image: linear-gradient(270deg, #ededed, #f7f7f7);
  border-top-right-radius: .5rem;
  border-bottom-right-radius: .5rem;
  height: 19.8125rem;
}

.fauxui_wrap {
  grid-column-gap: 2.5rem;
  flex: 1;
  justify-content: space-between;
  align-items: stretch;
  text-decoration: none;
  display: flex;
}

.fauxui_03 {
  background-image: linear-gradient(270deg, #f7f7f7, #ededed);
  border-top-right-radius: .5rem;
  border-bottom-right-radius: .5rem;
  flex: 1;
  height: 7.5rem;
  text-decoration: none;
}

.fauxui_02 {
  background-image: linear-gradient(270deg, #f7f7f7, #ededed);
  border-radius: .5rem;
  flex: 1;
  height: 7.5rem;
  text-decoration: none;
}

.fauxui_01 {
  background-image: linear-gradient(270deg, #ededed, #f7f7f7);
  border-top-right-radius: .5rem;
  height: 4.75rem;
  flex-grow: 1;
}
      `;
      document.head.appendChild(styleEl);
    }

    // ----------------------------------
    // Inject HTML
    // ----------------------------------
    rootEl.innerHTML = `
      <div class="canvas-wrap">
        <div data-sim-view class="step1content">
          <div class="fauxui_header">
            <div class="fauxui_06"></div>
            <div class="fauxui_05"></div>
            <div data-sim-trigger class="buttons">
              <div class="button-large-2">Connect wallet</div>
            </div>
          </div>
          <div class="body-style">
            <div class="main-content">
              <div class="fauxui_04"></div>
              <div class="fauxui_wrap">
                <div class="fauxui_03"></div>
                <div class="fauxui_02"></div>
              </div>
            </div>
            <div class="fauxui_01"></div>
          </div>
        </div>
      </div>
    `;

    const view = rootEl.querySelector("[data-sim-view]");
    const trigger = rootEl.querySelector("[data-sim-trigger]");

    if (!view || !trigger) {
      console.warn("[connectWalletToDex_step1] Missing required elements.");
      done?.();
      return;
    }

    // ----------------------------------
    // Intro animation: fade in + up
    // ----------------------------------
    if (gs) {
      gs.set(view, { autoAlpha: 0, y: 80 });
      gs.to(view, {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    } else {
      view.style.opacity = "1";
      view.style.transform = "translateY(0)";
    }

    // ----------------------------------
    // GSAP glow + complete
    // ----------------------------------
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
      } else {
        done?.();
      }
    };

    trigger.addEventListener("click", onClick);
  },
};
