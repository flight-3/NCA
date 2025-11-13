// createAccount_step6.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = window.gsap || null;

    // ---------- HTML (renamed classes, same structure) ----------
    rootEl.innerHTML = `
      <div class="nca-step6_wrap">
        <div class="nca-step6_card">
          <div class="nca-step6_title">Your details</div>

          <div class="nca-step6_form">
            <!-- Full name -->
            <div class="nca-step6_group">
              <div class="nca-step6_label">Full name</div>
              <div class="nca-step6_input" data-sim-input-name data-sim-trigger-1>
                <div class="nca-step6_placeholder nca-step6_placeholder--name">Enter your name</div>
              </div>
            </div>

            <!-- Date of birth -->
            <div class="nca-step6_group">
              <div class="nca-step6_label">Date of birth</div>
              <div class="nca-step6_input nca-step6_input--select" data-sim-input-dob>
                <div class="nca-step6_placeholder nca-step6_placeholder--dob">Select</div>
                <svg width="100%" viewBox="0 0 20 20" fill="none" class="nca-step6_icon" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99935 15.834C10.1642 15.834 10.3253 15.7851 10.4623 15.6935C10.5994 15.602 10.7062 15.4718 10.7692 15.3196C10.8323 15.1673 10.8488 14.9997 10.8167 14.8381C10.7845 14.6764 10.7051 14.5279 10.5886 14.4114C10.4721 14.2948 10.3236 14.2155 10.1619 14.1833C10.0003 14.1512 9.83272 14.1677 9.68045 14.2308C9.52817 14.2938 9.39803 14.4006 9.30646 14.5377C9.21489 14.6747 9.16602 14.8358 9.16602 15.0006C9.16602 15.2217 9.25381 15.4336 9.41009 15.5899C9.56637 15.7462 9.77834 15.834 9.99935 15.834ZM14.166 15.834C14.3308 15.834 14.492 15.7851 14.629 15.6935C14.766 15.602 14.8728 15.4718 14.9359 15.3196C14.999 15.1673 15.0155 14.9997 14.9833 14.8381C14.9512 14.6764 14.8718 14.5279 14.7553 14.4114C14.6387 14.2948 14.4902 14.2155 14.3286 14.1833C14.1669 14.1512 13.9994 14.1677 13.8471 14.2308C13.6948 14.2938 13.5647 14.4006 13.4731 14.5377C13.3816 14.6747 13.3327 14.8358 13.3327 15.0006C13.3327 15.2217 13.4205 15.4336 13.5768 15.5899C13.733 15.7462 13.945 15.834 14.166 15.834ZM14.166 12.5006C14.3308 12.5006 14.492 12.4518 14.629 12.3602C14.766 12.2686 14.8728 12.1385 14.9359 11.9862C14.999 11.8339 15.0155 11.6664 14.9833 11.5047C14.9512 11.3431 14.8718 11.1946 14.7553 11.0781C14.6387 10.9615 14.4902 10.8821 14.3286 10.85C14.1669 10.8178 13.9994 10.8343 13.8471 10.8974C13.6948 10.9605 13.5647 11.0673 13.4731 11.2043C13.3816 11.3414 13.3327 11.5025 13.3327 11.6673C13.3327 11.8883 13.4205 12.1003 13.5768 12.2566C13.733 12.4129 13.945 12.5006 14.166 12.5006ZM9.99935 12.5006C10.1642 12.5006 10.3253 12.4518 10.4623 12.3602C10.5994 12.2686 10.7062 12.1385 10.7692 11.9862C10.8323 11.8339 10.8488 11.6664 10.8167 11.5047C10.7845 11.3431 10.7051 11.1946 10.5886 11.0781C10.4721 10.9615 10.3236 10.8821 10.1619 10.85C10.0003 10.8178 9.83272 10.8343 9.68045 10.8974C9.52817 10.9605 9.39803 11.0673 9.30646 11.2043C9.21489 11.3414 9.16602 11.5025 9.16602 11.6673C9.16602 11.8883 9.25381 12.1003 9.41009 12.2566C9.56637 12.4129 9.77834 12.5006 9.99935 12.5006ZM15.8327 2.50065H14.9993V1.66732C14.9993 1.4463 14.9116 1.23434 14.7553 1.07806C14.599 0.921782 14.387 0.833984 14.166 0.833984C13.945 0.833984 13.733 0.921782 13.5768 1.07806C13.4205 1.23434 13.3327 1.4463 13.3327 1.66732V2.50065H6.66602V1.66732C6.66602 1.4463 6.57822 1.23434 6.42194 1.07806C6.26566 0.921782 6.0537 0.833984 5.83268 0.833984C5.61167 0.833984 5.39971 0.921782 5.24343 1.07806C5.08715 1.23434 4.99935 1.4463 4.99935 1.66732V2.50065H4.16602C3.50297 2.50065 2.86709 2.76404 2.39825 3.23288C1.92941 3.70172 1.66602 4.33761 1.66602 5.00065V16.6673C1.66602 17.3304 1.92941 17.9662 2.39825 18.4351C2.86709 18.9039 3.50297 19.1673 4.16602 19.1673H15.8327C16.4957 19.1673 17.1316 18.9039 17.6005 18.4351C18.0693 17.9662 18.3327 17.3304 18.3327 16.6673V5.00065C18.3327 4.33761 18.0693 3.70172 17.6005 3.23288C17.1316 2.76404 16.4957 2.50065 15.8327 2.50065ZM16.666 16.6673C16.666 16.8883 16.5782 17.1003 16.4219 17.2566C16.2657 17.4129 16.0537 17.5006 15.8327 17.5006H4.16602C3.945 17.5006 3.73304 17.4129 3.57676 17.2566C3.42048 17.1003 3.33268 16.8883 3.33268 16.6673V9.16732H16.666V16.6673ZM16.666 7.50065H3.33268V5.00065C3.33268 4.77964 3.42048 4.56768 3.57676 4.4114C3.73304 4.25511 3.945 4.16732 4.16602 4.16732H4.99935V5.00065C4.99935 5.22166 5.08715 5.43363 5.24343 5.58991C5.39971 5.74619 5.61167 5.83398 5.83268 5.83398C6.0537 5.83398 6.26566 5.74619 6.42194 5.58991C6.57822 5.43363 6.66602 5.22166 6.66602 5.00065V4.16732H13.3327V5.00065C13.3327 5.22166 13.4205 5.43363 13.5768 5.58991C13.733 5.74619 13.945 5.83398 14.166 5.83398C14.387 5.83398 14.599 5.74619 14.7553 5.58991C14.9116 5.43363 14.9993 5.22166 14.9993 5.00065V4.16732H15.8327C16.0537 4.16732 16.2657 4.25511 16.4219 4.4114C16.5782 4.56768 16.666 4.77964 16.666 5.00065V7.50065ZM5.83268 12.5006C5.9975 12.5006 6.15862 12.4518 6.29566 12.3602C6.4327 12.2686 6.53951 12.1385 6.60258 11.9862C6.66566 11.8339 6.68216 11.6664 6.65 11.5047C6.61785 11.3431 6.53848 11.1946 6.42194 11.0781C6.30539 10.9615 6.15691 10.8821 5.99526 10.85C5.83361 10.8178 5.66605 10.8343 5.51378 10.8974C5.36151 10.9605 5.23136 11.0673 5.13979 11.2043C5.04822 11.3414 4.99935 11.5025 4.99935 11.6673C4.99935 11.8883 5.08715 12.1003 5.24343 12.2566C5.39971 12.4129 5.61167 12.5006 5.83268 12.5006ZM5.83268 15.834C5.9975 15.834 6.15862 15.7851 6.29566 15.6935C6.4327 15.602 6.53951 15.4718 6.60258 15.3196C6.66566 15.1673 6.68216 14.9997 6.65 14.8381C6.61785 14.6764 6.53848 14.5279 6.42194 14.4114C6.30539 14.2948 6.15691 14.2155 5.99526 14.1833C5.83361 14.1512 5.66605 14.1677 5.51378 14.2308C5.36151 14.2938 5.23136 14.4006 5.13979 14.5377C5.04822 14.6747 4.99935 14.8358 4.99935 15.0006C4.99935 15.2217 5.08715 15.4336 5.24343 15.5899C5.39971 15.7462 5.61167 15.834 5.83268 15.834Z" fill="#7A7A7A"/>
</svg>

              </div>
            </div>

            <!-- Country -->
            <div class="nca-step6_group">
              <div class="nca-step6_label">Country</div>
              <div class="nca-step6_input nca-step6_input--select" data-sim-input-country>
                <div class="nca-step6_placeholder nca-step6_placeholder--country">Select</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" class="nca-step6_icon">
                  <path d="M14.1671 7.64076C14.0109 7.48556 13.7997 7.39844 13.5796 7.39844C13.3594 7.39844 13.1482 7.48556 12.9921 7.64076L10.0004 10.5908L7.0504 7.64076C6.89427 7.48556 6.68306 7.39844 6.4629 7.39844C6.24275 7.39844 6.03154 7.48556 5.8754 7.64076C5.7973 7.71823 5.7353 7.8104 5.693 7.91195C5.65069 8.0135 5.62891 8.12242 5.62891 8.23243C5.62891 8.34244 5.65069 8.45136 5.693 8.55291C5.7353 8.65446 5.7973 8.74663 5.8754 8.8241L9.40874 12.3574C9.48621 12.4355 9.57837 12.4975 9.67992 12.5398C9.78147 12.5821 9.89039 12.6039 10.0004 12.6039C10.1104 12.6039 10.2193 12.5821 10.3209 12.5398C10.4224 12.4975 10.5146 12.4355 10.5921 12.3574L14.1671 8.8241C14.2452 8.74663 14.3072 8.65446 14.3495 8.55291C14.3918 8.45136 14.4136 8.34244 14.4136 8.23243C14.4136 8.12242 14.3918 8.0135 14.3495 7.91195C14.3072 7.8104 14.2452 7.71823 14.1671 7.64076Z" fill="#7A7A7A"></path>
                </svg>
              </div>
            </div>
          </div>

          <div class="nca-step6_btn" data-sim-trigger-2>
            <div class="nca-step6_btn-text">Continue</div>
          </div>
        </div>

        <div class="nca-step6_info">
          <div class="nca-step6_info-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" class="nca-step6_info-icon">
              <path d="M8.00065 7.33398C7.82384 7.33398 7.65427 7.40422 7.52925 7.52925C7.40423 7.65427 7.33399 7.82384 7.33399 8.00065V10.6673C7.33399 10.8441 7.40423 11.0137 7.52925 11.1387C7.65427 11.2637 7.82384 11.334 8.00065 11.334C8.17747 11.334 8.34703 11.2637 8.47206 11.1387C8.59708 11.0137 8.66732 10.8441 8.66732 10.6673V8.00065C8.66732 7.82384 8.59708 7.65427 8.47206 7.52925C8.34703 7.40422 8.17747 7.33398 8.00065 7.33398ZM8.25399 4.72065C8.09168 4.65397 7.90963 4.65397 7.74732 4.72065C7.66549 4.75238 7.59072 4.79996 7.52732 4.86065C7.46843 4.92545 7.42108 4.99986 7.38732 5.08065C7.35 5.15977 7.33173 5.24653 7.33399 5.33398C7.33348 5.42172 7.3503 5.5087 7.38347 5.58992C7.41665 5.67115 7.46553 5.74502 7.52732 5.80732C7.59212 5.8662 7.66653 5.91356 7.74732 5.94732C7.84832 5.98881 7.95796 6.00486 8.06662 5.99406C8.17527 5.98326 8.27961 5.94593 8.37046 5.88536C8.46131 5.8248 8.5359 5.74284 8.58766 5.6467C8.63942 5.55056 8.66678 5.44317 8.66732 5.33398C8.66487 5.15747 8.59581 4.98841 8.47399 4.86065C8.41059 4.79996 8.33582 4.75238 8.25399 4.72065ZM8.00065 1.33398C6.68211 1.33398 5.39318 1.72498 4.29685 2.45752C3.20052 3.19006 2.34604 4.23125 1.84146 5.44943C1.33687 6.6676 1.20485 8.00805 1.46209 9.30125C1.71932 10.5945 2.35426 11.7823 3.28661 12.7147C4.21896 13.647 5.40685 14.282 6.70005 14.5392C7.99326 14.7965 9.3337 14.6644 10.5519 14.1598C11.7701 13.6553 12.8112 12.8008 13.5438 11.7045C14.2763 10.6081 14.6673 9.31919 14.6673 8.00065C14.6673 7.12517 14.4949 6.25826 14.1599 5.44943C13.8248 4.64059 13.3338 3.90566 12.7147 3.28661C12.0956 2.66755 11.3607 2.17649 10.5519 1.84145C9.74304 1.50642 8.87613 1.33398 8.00065 1.33398V1.33398ZM8.00065 13.334C6.94582 13.334 5.91467 13.0212 5.03761 12.4352C4.16055 11.8491 3.47696 11.0162 3.0733 10.0416C2.66963 9.06709 2.56401 7.99473 2.7698 6.96017C2.97559 5.9256 3.48354 4.97529 4.22942 4.22941C4.9753 3.48353 5.92561 2.97558 6.96017 2.7698C7.99474 2.56401 9.06709 2.66963 10.0416 3.07329C11.0162 3.47696 11.8491 4.16055 12.4352 5.03761C13.0212 5.91467 13.334 6.94582 13.334 8.00065C13.334 9.41514 12.7721 10.7717 11.7719 11.7719C10.7717 12.7721 9.41514 13.334 8.00065 13.334V13.334Z" fill="white"></path>
            </svg>
          </div>
          <div class="nca-step6_info-copy">
            <div class="nca-step6_info-text">Data shown is fictitious and purely for learning purposes</div>
          </div>
        </div>
      </div>
    `;

    // ---------- CSS ----------
    const style = document.createElement("style");
    style.textContent = `
      .nca-step6_wrap {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
      }
      .nca-step6_card {
        width: 100%;
        max-width: 35rem;
        background-color: #fff;
        border-radius: 1.25rem;
        padding: 2.5rem;
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        align-items: flex-start;
        box-shadow: 0 .25rem 1.25rem #0000001a;
      }
      .nca-step6_title {
        width: 100%;
        margin: 0;
        color: #2f2f30;
        letter-spacing: -.04em;
        font-size: 2.5rem;
        font-weight: 500;
        line-height: 130%;
      }
      .nca-step6_form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
      .nca-step6_group {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: .5rem;
      }
      .nca-step6_label {
        margin: 0;
        color: #7a7a7a;
        letter-spacing: -.02em;
        font-size: 1rem;
        font-weight: 500;
        line-height: 150%;
      }
      .nca-step6_input {
        width: 100%;
        height: 3.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: .625rem;
        background-color: #f9f9f9;
        border: .125rem solid #ebebeb;
        border-radius: .5rem;
        padding: 0 1rem;
        box-sizing: border-box;
      }
      .nca-step6_input--select {
        /* visually same size, just keeping the select semantics */
      }
      /* Outline on the trigger input */
      [data-sim-trigger-1] {
        outline: 2px solid #F64C07;
        outline-offset: -1px;
        cursor: pointer;
      }
      .nca-step6_placeholder {
        margin: 0;
        color: #1f1f1f;
        letter-spacing: -.02em;
        font-size: 1rem;
        font-weight: 400;
        line-height: 150%;
        opacity: .4; /* becomes 1 on autofill */
      }
      .nca-step6_icon {
        width: 1rem;
        height: 1rem;
        flex: none;
        overflow: hidden;
      }
      .nca-step6_btn {
        width: 100%;
        height: 3.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .625rem;
        border-radius: .5rem;
        background-color: #f64c07;
        opacity: 0.6; /* initial dimmed */
        cursor: pointer;
        transition: opacity .2s ease;
      }
      .nca-step6_btn-text {
        margin: 0;
        color: #fff;
        letter-spacing: -.02em;
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 140%;
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
    const trigger1 = rootEl.querySelector("[data-sim-trigger-1]");
    const trigger2 = rootEl.querySelector("[data-sim-trigger-2]");

    const namePh = rootEl.querySelector(".nca-step6_placeholder--name");
    const dobPh = rootEl.querySelector(".nca-step6_placeholder--dob");
    const countryPh = rootEl.querySelector(".nca-step6_placeholder--country");

    const nameBox = rootEl.querySelector("[data-sim-input-name]");
    const dobBox = rootEl.querySelector("[data-sim-input-dob]");
    const countryBox = rootEl.querySelector("[data-sim-input-country]");

    let state = "idle"; // idle -> filled -> done

    // ---------- First action: autofill fields + enable button ----------
    const onFirstClick = () => {
      if (state !== "idle") return;
      state = "filled";

      // remove outline immediately
      trigger1.style.outline = "none";
      trigger1.style.outlineOffset = "";

      const fillName = () => {
        if (namePh) {
          namePh.textContent = "Your Name";
          if (gs) gs.set(namePh, { opacity: 1 });
          else namePh.style.opacity = "1";
        }
      };
      const fillDob = () => {
        if (dobPh) {
          dobPh.textContent = "23/08/1989";
          if (gs) gs.set(dobPh, { opacity: 1 });
          else dobPh.style.opacity = "1";
        }
      };
      const fillCountry = () => {
        if (countryPh) {
          countryPh.textContent = "United States";
          if (gs) gs.set(countryPh, { opacity: 1 });
          else countryPh.style.opacity = "1";
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
          .add(fillName)
          .fromTo(nameBox, { y: 0 }, { y: -4, duration: 0.12 })
          .to(nameBox, { y: 0, duration: 0.18 })

          .add(fillDob, "+=0.15")
          .fromTo(dobBox, { y: 0 }, { y: -4, duration: 0.12 })
          .to(dobBox, { y: 0, duration: 0.18 })

          .add(fillCountry, "+=0.15")
          .fromTo(countryBox, { y: 0 }, { y: -4, duration: 0.12 })
          .to(countryBox, { y: 0, duration: 0.18 })

          .add(enableBtn, "+=0.05");
      } else {
        fillName();
        fillDob();
        fillCountry();
        enableBtn();
      }
    };

    // ---------- Second action: continue after 1.5s ----------
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
