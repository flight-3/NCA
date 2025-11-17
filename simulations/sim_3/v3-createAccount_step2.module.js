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
        <div class="nca-step6_info">
          <div class="nca-step6_info-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" class="nca-step6_info-icon">
              <path d="M8.00065 7.33398C7.82384 7.33398 7.65427 7.40422 7.52925 7.52925C7.40423 7.65427 7.33399 7.82384 7.33399 8.00065V10.6673C7.33399 10.8441 7.40423 11.0137 7.52925 11.1387C7.65427 11.2637 7.82384 11.334 8.00065 11.334C8.17747 11.334 8.34703 11.2637 8.47206 11.1387C8.59708 11.0137 8.66732 10.8441 8.66732 10.6673V8.00065C8.66732 7.82384 8.59708 7.65427 8.47206 7.52925C8.34703 7.40422 8.17747 7.33398 8.00065 7.33398ZM8.25399 4.72065C8.09168 4.65397 7.90963 4.65397 7.74732 4.72065C7.66549 4.75238 7.59072 4.79996 7.52732 4.86065C7.46843 4.92545 7.42108 4.99986 7.38732 5.08065C7.35 5.15977 7.33173 5.24653 7.33399 5.33398C7.33348 5.42172 7.3503 5.5087 7.38347 5.58992C7.41665 5.67115 7.46553 5.74502 7.52732 5.80732C7.59212 5.8662 7.66653 5.91356 7.74732 5.94732C7.84832 5.98881 7.95796 6.00486 8.06662 5.99406C8.17527 5.98326 8.27961 5.94593 8.37046 5.88536C8.46131 5.8248 8.5359 5.74284 8.58766 5.6467C8.63942 5.55056 8.66678 5.44317 8.66732 5.33398C8.66487 5.15747 8.59581 4.98841 8.47399 4.86065C8.41059 4.79996 8.33582 4.75238 8.25399 4.72065ZM8.00065 1.33398C6.68211 1.33398 5.39318 1.72498 4.29685 2.45752C3.20052 3.19006 2.34604 4.23125 1.84146 5.44943C1.33687 6.6676 1.20485 8.00805 1.46209 9.30125C1.71932 10.5945 2.35426 11.7823 3.28661 12.7147C4.21896 13.647 5.40685 14.282 6.70005 14.5392C7.99326 14.7965 9.3337 14.6644 10.5519 14.1598C11.7701 13.6553 12.8112 12.8008 13.5438 11.7045C14.2763 10.6081 14.6673 9.31919 14.6673 8.00065C14.6673 7.12517 14.4949 6.25826 14.1599 5.44943C13.8248 4.64059 13.3338 3.90566 12.7147 3.28661C12.0956 2.66755 11.3607 2.17649 10.5519 1.84145C9.74304 1.50642 8.87613 1.33398 8.00065 1.33398V1.33398ZM8.00065 13.334C6.94582 13.334 5.91467 13.0212 5.03761 12.4352C4.16055 11.8491 3.47696 11.0162 3.0733 10.0416C2.66963 9.06709 2.56401 7.99473 2.7698 6.96017C2.97559 5.9256 3.48354 4.97529 4.22942 4.22941C4.9753 3.48353 5.92561 2.97558 6.96017 2.7698C7.99474 2.56401 9.06709 2.66963 10.0416 3.07329C11.0162 3.47696 11.8491 4.16055 12.4352 5.03761C13.0212 5.91467 13.334 6.94582 13.334 8.00065C13.334 9.41514 12.7721 10.7717 11.7719 11.7719C10.7717 12.7721 9.41514 13.334 8.00065 13.334V13.334Z" fill="white"></path>
            </svg>
          </div>
          <div class="nca-step6_info-copy">
            <div class="nca-step6_info-text">Just click to fill instant dummy data. No effort required!</div>
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

      .nca-step6_info {
        max-width: 50.125rem;
        padding: 2.5rem;
        display: flex;
        flex-direction: column;
        gap: .625rem;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
      }
      .nca-step6_info-badge {
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50rem;
        background-color: #f64c07;
      }
      .nca-step6_info-icon {
        width: 1rem;
        height: 1rem;
      }
      .nca-step6_info-copy {
        display: flex;
        flex-direction: column;
        gap: .25rem;
      }
      .nca-step6_info-text {
        margin: 0;
        color: #fff;
        letter-spacing: -.02em;
        font-size: .875rem;
        font-weight: 400;
        line-height: 130%;
      }
      .nca-step6_info {
        background-color: #1f1f1f80;
        border-radius: .75rem;
        padding: 1rem 1.5rem;
        flex-direction: row;
        align-items: center;
        gap: 1.25rem;
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
