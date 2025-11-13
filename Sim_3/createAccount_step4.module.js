// createAccount_step4.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = window.gsap || null;

    // ---------- HTML (renamed + attributes kept) ----------
    rootEl.innerHTML = `
      <div class="nca-step4_wrap">
        <div class="nca-step4_card">
          <div class="nca-step4_title">Log in</div>

          <div class="nca-step4_form">
            <!-- Email -->
            <div class="nca-step4_group">
              <div class="nca-step4_label">Email address</div>
              <div class="nca-step4_input" data-sim-trigger-1>
                <div class="nca-step4_placeholder nca-step4_placeholder--email">Enter email address</div>
              </div>
            </div>

            <!-- Password -->
            <div class="nca-step4_group">
              <div class="nca-step4_label">Password</div>
              <div class="nca-step4_input">
                <div class="nca-step4_placeholder nca-step4_placeholder--password">Enter password</div>
              </div>
            </div>
          </div>

          <div class="nca-step4_btn" data-sim-trigger-2>
            <div class="nca-step4_btn-text">Log in</div>
          </div>
        </div>
      </div>
    `;

    // ---------- CSS (scoped to nca-step4_*) ----------
    const style = document.createElement("style");
    style.textContent = `
      .nca-step4_wrap {
        width: 100%; height: 100%;
        display: flex; flex-direction: column; justify-content: space-between; align-items: center;
        padding: 5rem 7.5rem; box-sizing: border-box; overflow: hidden;
      }
      .nca-step4_card {
        width: 100%; background: #fff; border-radius: 1.25rem;
        display: flex; flex-direction: column; gap: 2.5rem; align-items: flex-start;
        padding: 2.5rem; box-shadow: 0 .25rem 1.25rem #0000001a;
      }
      .nca-step4_title {
        color: #2f2f30; letter-spacing: -.04em; width: 100%;
        margin: 0; font-size: 2.5rem; font-weight: 500; line-height: 130%;
      }
      .nca-step4_form {
        width: 100%; display: flex; flex-direction: column; gap: 1.5rem;
      }
      .nca-step4_group {
        width: 100%; display: flex; flex-direction: column; gap: .5rem;
      }
      .nca-step4_label {
        color: #7a7a7a; letter-spacing: -.02em; margin: 0;
        font-size: 1rem; font-weight: 500; line-height: 150%;
      }
      .nca-step4_input {
        width: 100%; height: 3.5rem;
        display: flex; align-items: center; gap: .625rem;
        background: #f9f9f9;
        border: .125rem solid #ebebeb;
        border-radius: .5rem;
        padding: 0 1rem;
        box-sizing: border-box;
      }
      /* Outline on the clickable email input */
      [data-sim-trigger-1] {
        outline: 2px solid #F64C07;
        outline-offset: -1px;
        cursor: pointer;
      }
      .nca-step4_placeholder {
        margin: 0;
        color: #1f1f1f;
        letter-spacing: -.02em;
        font-size: 1rem;
        font-weight: 400;
        line-height: 150%;
        opacity: .5; /* will go to 1 on autofill */
      }

      .nca-step4_btn {
        width: 100%; height: 3.5rem;
        display: flex; align-items: center; justify-content: center; gap: .625rem;
        border-radius: .5rem;
        background-color: #f64c07;
        opacity: 0.6; /* initial dimmed */
        cursor: pointer;
        transition: opacity .2s ease;
      }
      .nca-step4_btn-text {
        color: #fff; letter-spacing: -.02em; margin: 0;
        font-size: 1.125rem; font-weight: 500; line-height: 140%;
      }
    `;
    rootEl.appendChild(style);

    // ---------- Refs ----------
    const trigger1 = rootEl.querySelector("[data-sim-trigger-1]");
    const trigger2 = rootEl.querySelector("[data-sim-trigger-2]");
    const emailPh = rootEl.querySelector(".nca-step4_placeholder--email");
    const passPh = rootEl.querySelector(".nca-step4_placeholder--password");
    const emailBox = trigger1;
    const passBox = passPh?.closest(".nca-step4_input");

    let state = "idle"; // idle -> filled -> done

    // ---------- First action: autofill + enable button ----------
    const onFirstClick = () => {
      if (state !== "idle") return;
      state = "filled";

      // remove outline immediately
      trigger1.style.outline = "none";
      trigger1.style.outlineOffset = "";

      const fillEmail = () => {
        if (emailPh) {
          emailPh.textContent = "email@email.com";
          if (gs) gs.set(emailPh, { opacity: 1 });
          else emailPh.style.opacity = "1";
        }
      };
      const fillPass = () => {
        if (passPh) {
          passPh.textContent = "*******************";
          if (gs) gs.set(passPh, { opacity: 1 });
          else passPh.style.opacity = "1";
        }
      };
      const enableBtn = () => {
        if (gs) {
          gs.to(trigger2, { opacity: 1, duration: 0.25, ease: "power2.inOut" });
        } else {
          trigger2.style.opacity = "1";
        }
      };

      if (gs) {
        gs.timeline({ defaults: { ease: "power2.inOut" } })
          .add(fillEmail)
          .fromTo(emailBox, { y: 0 }, { y: -4, duration: 0.12 })
          .to(emailBox, { y: 0, duration: 0.18 })

          .add(fillPass, "+=0.15")
          .fromTo(passBox, { y: 0 }, { y: -4, duration: 0.12 })
          .to(passBox, { y: 0, duration: 0.18 })

          .add(enableBtn, "+=0.05");
      } else {
        fillEmail();
        fillPass();
        enableBtn();
      }
    };

    // ---------- Second action: submit after 1.5s ----------
    const onSecondClick = () => {
      if (state !== "filled") return;
      state = "done";

      if (gs) {
        gs.timeline({ defaults: { ease: "power2.inOut" } })
          .to(trigger2, { scale: 0.98, duration: 0.12 })
          .to(trigger2, { scale: 1, duration: 0.18 })
          .add(done, "+=1.5");
      } else {
        setTimeout(() => done?.(), 1500);
      }
    };

    trigger1.addEventListener("click", onFirstClick);
    trigger2.addEventListener("click", onSecondClick);

    // ---------- Cleanup ----------
    return () => {
      try {
        trigger1.removeEventListener("click", onFirstClick);
      } catch {}
      try {
        trigger2.removeEventListener("click", onSecondClick);
      } catch {}
      try {
        rootEl.innerHTML = "";
      } catch {}
    };
  },
};
