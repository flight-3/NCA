// createAccount_step5.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = window.gsap || null;

    // ---------- HTML ----------
    rootEl.innerHTML = `
      <div class="nca-step5_wrap">
        <div class="nca-step5_card" data-sim-view>
          <div class="nca-step5_header">
            <div class="nca-step5_title">Add a layer of security</div>
            <div class="nca-step5_body-text">
              Turning on two-factor authentication helps keep your account secure from fraudsters.
            </div>
          </div>
          <div class="nca-step5_btn" data-sim-trigger>
            <div class="nca-step5_btn-text">Enable two-factor authentication</div>
          </div>
        </div>
      </div>
    `;

    // ---------- CSS ----------
    const style = document.createElement("style");
    style.textContent = `
      .nca-step5_wrap {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 80px 120px;
        box-sizing: border-box;
        overflow: hidden;
      }
      .nca-step5_card {
        max-width: 480px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 40px;
        align-items: center;
        background-color: #fff;
        border-radius: 20px;
        padding: 40px;
        box-shadow: 0 4px 20px #0000001a;
      }
      .nca-step5_header {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: flex-start;
      }
      .nca-step5_title {
        width: 100%;
        margin: 0;
        color: #2f2f30;
        text-align: center;
        letter-spacing: -.04em;
        font-size: 2.5rem;
        font-weight: 500;
        line-height: 130%;
      }
      .nca-step5_body-text {
        width: 100%;
        margin: 0;
        color: #7a7a7a;
        text-align: center;
        letter-spacing: -.02em;
        font-size: 1rem;
        font-weight: 400;
        line-height: 150%;
      }
      .nca-step5_btn {
        width: 100%;
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 8px;
        border: 2px solid #f64c07;
        background-image: linear-gradient(86.78deg, #f64c07 0%, #ff7943 100%);
        box-shadow: 0 4px 10px #eb855c40;
        cursor: pointer;
      }
      .nca-step5_btn-text {
        margin: 0;
        color: #fff;
        letter-spacing: -.02em;
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 140%;
      }
    `;
    rootEl.appendChild(style);

    // ---------- Refs ----------
    const view = rootEl.querySelector("[data-sim-view]");
    const trigger = rootEl.querySelector("[data-sim-trigger]");

    const timelines = [];

    // ---------- Intro animation for [data-sim-view] ----------
    if (gs && view) {
      gs.set(view, { autoAlpha: 0, yPercent: 20 });
      const tlIn = gs
        .timeline({ defaults: { ease: "power2.inOut" } })
        .to(view, { autoAlpha: 1, yPercent: 0, duration: 0.45 });
      timelines.push(tlIn);
    }

    // ---------- Click → micro interaction → complete after 1.5s ----------
    const onClick = () => {
      if (gs && trigger) {
        const tl = gs
          .timeline({ defaults: { ease: "power2.inOut" } })
          .to(trigger, { scale: 0.98, duration: 0.12 })
          .to(trigger, { scale: 1, duration: 0.18 })
          .add(done, "+=1.5");
        timelines.push(tl);
      } else {
        setTimeout(() => done?.(), 1500);
      }
    };

    trigger?.addEventListener("click", onClick);

    // ---------- Cleanup ----------
    return () => {
      try {
        trigger?.removeEventListener("click", onClick);
      } catch {}
      try {
        timelines.forEach((t) => t?.kill?.());
      } catch {}
      try {
        rootEl.innerHTML = "";
      } catch {}
    };
  },
};
