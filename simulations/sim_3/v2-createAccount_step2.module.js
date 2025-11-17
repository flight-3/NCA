// createAccount_step2.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = window.gsap || null;

    const PASSWORD_VALUE = "uG7!_x2Kp9#-Qr1"; // strong-looking password
    const MASKED_PASSWORD = "*********************";
    let passwordVisible = false;

    // ---------- HTML ----------
    rootEl.innerHTML = `
      <div class="nca-step2_wrap">
        <div class="nca-step2_card">
          <div class="nca-step2_title">Create an account</div>

          <div class="nca-step2_form">
            <!-- Email -->
            <div class="nca-step2_group">
              <div class="nca-step2_label">Email address</div>
              <div class="nca-step2_input" data-sim-trigger>
                <div class="nca-step2_placeholder nca-step2_placeholder--email">Enter email address</div>
              </div>
            </div>

            <!-- Password -->
            <div class="nca-step2_group">
              <div class="nca-step2_label">Password</div>
              <div class="nca-step2_input nca-step2_input--password">
                <div class="nca-step2_placeholder nca-step2_placeholder--password">Create a password</div>
                <button
                  type="button"
                  class="nca-step2_eye"
                  aria-label="Show password"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="nca-step2_eye-icon" aria-hidden="true">
                    <!-- eye outline -->
                    <path
                      class="nca-step2_eye-outline"
                      d="M12 5C7.3 5 3.3 7.8 1.5 12c1.8 4.2 5.8 7 10.5 7s8.7-2.8 10.5-7C20.7 7.8 16.7 5 12 5Z
                         M12 17c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5Z"
                      fill="#A3A3A3"
                    />
                    <!-- pupil -->
                    <circle
                      class="nca-step2_eye-pupil"
                      cx="12"
                      cy="12"
                      r="2.2"
                      fill="#A3A3A3"
                    />
                    <!-- slash (visible when password is visible) -->
                    <path
                      class="nca-step2_eye-slash"
                      d="M4 4L20 20"
                      stroke="#A3A3A3"
                      stroke-width="1.8"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Terms -->
            <div class="nca-step2_terms">
              <div class="nca-step2_checkbox">
                <div class="nca-step2_checkbox-box" role="checkbox" aria-checked="false" tabindex="0"></div>
                <div class="nca-step2_terms-text">I agree to the Terms and Conditions</div>
              </div>
            </div>
          </div>

          <!-- SECOND ACTION BUTTON -->
          <div class="nca-step2_btn" data-sim-trigger-2>
            <div class="nca-step2_btn-text">Create account</div>
          </div>
        </div>
      </div>
    `;

    // ---------- CSS ----------
    const style = document.createElement("style");
    style.textContent = `
      .nca-step2_wrap {
        width: 100%; height: 100%;
        display: flex; flex-direction: column; justify-content: center; align-items: center;
        padding: 80px 120px; overflow: hidden; box-sizing: border-box;
      }
      .nca-step2_card {
        width: 100%; background: #fff; border-radius: 1.25rem;
        display: flex; flex-direction: column; gap: 2.5rem; align-items: flex-start;
        padding: 2.5rem; box-shadow: 0 .25rem 1.25rem #0000001a;
      }
      .nca-step2_title {
        color: #2f2f30; letter-spacing: -.04em; width: 100%;
        margin: 0; font-size: 2.5rem; font-weight: 500; line-height: 130%;
      }
      .nca-step2_form { width: 100%; display: flex; flex-direction: column; gap: 1.5rem; }
      .nca-step2_group { width: 100%; display: flex; flex-direction: column; gap: .5rem; }
      .nca-step2_label {
        color: #7a7a7a; letter-spacing: -.02em; margin: 0;
        font-size: 1rem; font-weight: 500; line-height: 150%;
      }
      .nca-step2_input {
        width: 100%; height: 3.5rem; display: flex; align-items: center; gap: .625rem;
        background: #f9f9f9; border: .125rem solid #ebebeb; border-radius: .5rem;
        padding: 0 1rem; box-sizing: border-box;
      }
      .nca-step2_input--password {
        justify-content: space-between;
      }
      /* Trigger #1 outline */
      [data-sim-trigger] {
        outline: 2px solid #F64C07;
        outline-offset: -1px;
        cursor: pointer;
      }
      .nca-step2_placeholder {
        margin: 0; letter-spacing: -.02em; color: #1f1f1f;
        font-size: 1rem; font-weight: 400; line-height: 150%;
        opacity: .4; /* becomes 1 instantly on autofill */
      }

      .nca-step2_terms { display: flex; align-items: center; }
      .nca-step2_checkbox { display: flex; align-items: center; gap: 1rem; }
      .nca-step2_checkbox-box {
        width: 1.5rem; height: 1.5rem; border: 2px solid #f64c07; border-radius: 4px;
        display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px #eb855c3d;
      }
      .nca-step2_checkbox-box.is--checked { background: #f64c07; }
      .nca-step2_checkbox-box.is--checked::after {
        content: "";
        width: .3rem;
        height: .6rem;
        border-right: 2px solid #fff;
        border-bottom: 2px solid #fff;
        transform: rotate(45deg);
        display: block;
      }
      /* Trigger #2 button (starts dimmed) */
      .nca-step2_btn {
        width: 100%; height: 3.5rem; border-radius: .5rem;
        display: flex; align-items: center; justify-content: center; gap: .625rem;
        background: #f64c07;
        opacity: 0.6; /* initial */
        cursor: pointer;
        transition: opacity .2s ease; /* just for non-GSAP environments */
      }
      .nca-step2_btn-text {
        color: #fff; letter-spacing: -.02em; margin: 0;
        font-size: 1.125rem; font-weight: 500; line-height: 140%;
      }

      /* Eye button */
      .nca-step2_eye {
        margin-left: auto;
        border: none;
        background: transparent;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      .nca-step2_eye-icon {
        width: 1.25rem;
        height: 1.25rem;
      }
      .nca-step2_eye-slash {
        opacity: 0;
        transition: opacity 0.2s ease;
      }
      .nca-step2_eye.is--visible .nca-step2_eye-slash {
        opacity: 1;
      }
    `;
    rootEl.appendChild(style);

    // ---------- Refs ----------
    const trigger1 = rootEl.querySelector("[data-sim-trigger]");
    const trigger2 = rootEl.querySelector("[data-sim-trigger-2]");
    const emailPh = rootEl.querySelector(".nca-step2_placeholder--email");
    const passPh = rootEl.querySelector(".nca-step2_placeholder--password");
    const passBox = passPh?.closest(".nca-step2_input");
    const emailBox = trigger1;
    const checkbox = rootEl.querySelector(".nca-step2_checkbox-box");
    const eyeBtn = rootEl.querySelector(".nca-step2_eye");

    let state = "idle"; // idle -> filled -> done

    const updatePasswordDisplay = () => {
      if (!passPh) return;
      passPh.textContent = passwordVisible ? PASSWORD_VALUE : MASKED_PASSWORD;
      if (gs) gs.set(passPh, { opacity: 1 });
      else passPh.style.opacity = "1";
    };

    // ---------- First action: autofill, tick, enable btn ----------
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
        updatePasswordDisplay();
      };
      const checkTerms = () => {
        if (checkbox) {
          checkbox.classList.add("is--checked");
          checkbox.setAttribute("aria-checked", "true");
        }
      };
      const enableBtn = () => {
        if (gs)
          gs.to(trigger2, { opacity: 1, duration: 0.25, ease: "power2.inOut" });
        else trigger2.style.opacity = "1";
      };

      if (gs) {
        gs.timeline({ defaults: { ease: "power2.inOut" } })
          .add(fillEmail)
          .fromTo(emailBox, { y: 0 }, { y: -4, duration: 0.12 })
          .to(emailBox, { y: 0, duration: 0.18 })

          .add(fillPass, "+=0.15")
          .fromTo(passBox, { y: 0 }, { y: -4, duration: 0.12 })
          .to(passBox, { y: 0, duration: 0.18 })

          .add(checkTerms, "+=0.15")
          .fromTo(
            checkbox,
            { scale: 0.9, autoAlpha: 0.9 },
            { scale: 1, autoAlpha: 1, duration: 0.2 }
          )

          .add(enableBtn, "+=0.05");
      } else {
        fillEmail();
        fillPass();
        checkTerms();
        enableBtn();
      }
    };

    // ---------- Password eye toggle ----------
    const onTogglePassword = () => {
      // only makes sense once the form has been "filled"
      if (state === "idle") return;

      passwordVisible = !passwordVisible;
      updatePasswordDisplay();

      if (eyeBtn) {
        if (passwordVisible) {
          eyeBtn.classList.add("is--visible");
          eyeBtn.setAttribute("aria-label", "Hide password");
        } else {
          eyeBtn.classList.remove("is--visible");
          eyeBtn.setAttribute("aria-label", "Show password");
        }
      }
    };

    // ---------- Second action: finish after 1.5s ----------
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

    // ---------- Listeners ----------
    trigger1.addEventListener("click", onFirstClick);
    trigger2.addEventListener("click", onSecondClick);
    if (eyeBtn) {
      eyeBtn.addEventListener("click", onTogglePassword);
    }

    // ---------- Cleanup ----------
    return () => {
      try {
        trigger1.removeEventListener("click", onFirstClick);
      } catch {}
      try {
        trigger2.removeEventListener("click", onSecondClick);
      } catch {}
      try {
        eyeBtn?.removeEventListener("click", onTogglePassword);
      } catch {}
      try {
        rootEl.innerHTML = "";
      } catch {}
    };
  },
};
