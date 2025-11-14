// setUpHotWallet_step3.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();

    const gs = window.gsap || null;

    // ----------------------------------
    // Inject HTML
    // ----------------------------------
    rootEl.innerHTML = `
      <div class="suhw_step3_wrap">
        <div class="suhw_step3_card" data-sim-view-1>
          
          <div class="suhw_step3_header">
            <div class="suhw_step3_title">Create passcode</div>
            <div class="suhw_step3_desc-alt">
              Choose a secure 6-digit passcode to protect your wallet.
            </div>
          </div>

          <div class="suhw_step3_passWrap">
            <div class="suhw_step3_subtitle">Create a passcode</div>
            <div class="suhw_step3_passInputs" data-sim-password>
              <div class="suhw_step3_passCell"></div>
              <div class="suhw_step3_passCell"></div>
              <div class="suhw_step3_passCell"></div>
              <div class="suhw_step3_passCell"></div>
              <div class="suhw_step3_passCell"></div>
              <div class="suhw_step3_passCell"></div>
            </div>
          </div>

          <div class="suhw_step3_btn-primary" data-sim-trigger>
            <div class="suhw_step3_btn-primary-label">Next</div>
          </div>

          <div class="suhw_step3_biometrics" data-sim-view>
            <div class="suhw_step3_icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 52 52" fill="none" class="suhw_step3_icn">
                <path d="M16.3333 46.6667H7C6.38116 46.6667 5.78767 46.4208 5.35008 45.9833C4.9125 45.5457 4.66667 44.9522 4.66667 44.3333V35C4.66667 34.3812 4.42083 33.7877 3.98325 33.3501C3.54566 32.9125 2.95217 32.6667 2.33333 32.6667C1.71449 32.6667 1.121 32.9125 0.683417 33.3501C0.245833 33.7877 0 34.3812 0 35V44.3333C0 46.1899 0.737498 47.9703 2.05025 49.2831C3.36301 50.5958 5.14348 51.3333 7 51.3333H16.3333C16.9522 51.3333 17.5457 51.0875 17.9832 50.6499C18.4208 50.2123 18.6667 49.6188 18.6667 49C18.6667 48.3812 18.4208 47.7877 17.9832 47.3501C17.5457 46.9125 16.9522 46.6667 16.3333 46.6667ZM49 32.6667C48.3812 32.6667 47.7877 32.9125 47.3501 33.3501C46.9125 33.7877 46.6667 34.3812 46.6667 35V44.3333C46.6667 44.9522 46.4208 45.5457 45.9833 45.9833C45.5457 46.4208 44.9522 46.6667 44.3333 46.6667H35C34.3812 46.6667 33.7877 46.9125 33.3501 47.3501C32.9125 47.7877 32.6667 48.3812 32.6667 49C32.6667 49.6188 32.9125 50.2123 33.3501 50.6499C33.7877 51.0875 34.3812 51.3333 35 51.3333H44.3333C46.1899 51.3333 47.9703 50.5958 49.2831 49.2831C50.5958 47.9703 51.3333 46.1899 51.3333 44.3333V35C51.3333 34.3812 51.0875 33.7877 50.6499 33.3501C50.2123 32.9125 49.6188 32.6667 49 32.6667ZM44.3333 0H35C34.3812 0 33.7877 0.245833 33.3501 0.683417C32.9125 1.121 32.6667 1.71449 32.6667 2.33333C32.6667 2.95217 32.9125 3.54566 33.3501 3.98325C33.7877 4.42083 34.3812 4.66667 35 4.66667H44.3333C44.9522 4.66667 45.5457 4.9125 45.9833 5.35008C46.4208 5.78767 46.6667 6.38116 46.6667 7V16.3333C46.6667 16.9522 46.9125 17.5457 47.3501 17.9832C47.7877 18.4208 48.3812 18.6667 49 18.6667C49.6188 18.6667 50.2123 18.4208 50.6499 17.9832C51.0875 17.5457 51.3333 16.9522 51.3333 16.3333V7C51.3333 5.14348 50.5958 3.36301 49.2831 2.05025C47.9703 0.737498 46.1899 0 44.3333 0ZM2.33333 18.6667C2.95217 18.6667 3.54566 18.4208 3.98325 17.9832C4.42083 17.5457 4.66667 16.9522 4.66667 16.3333V7C4.66667 6.38116 4.9125 5.78767 5.35008 5.35008C5.78767 4.9125 6.38116 4.66667 7 4.66667H16.3333C16.9522 4.66667 17.5457 4.42083 17.9832 3.98325C18.4208 3.54566 18.6667 2.95217 18.6667 2.33333C18.6667 1.71449 18.4208 1.121 17.9832 0.683417C17.5457 0.245833 16.9522 0 16.3333 0H7C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7V16.3333C0 16.9522 0.245833 17.5457 0.683417 17.9832C1.121 18.4208 1.71449 18.6667 2.33333 18.6667Z" fill="#F95C1C"></path>
                <path d="M28.6994 30.8725C28.9646 29.9435 29.9328 29.4048 30.8618 29.6694C31.7912 29.9347 32.3302 30.9048 32.0649 31.8341C31.1718 34.9623 29.7876 37.9301 27.9656 40.6251C27.4241 41.4248 26.3369 41.6354 25.5366 41.0946C24.7359 40.5533 24.5259 39.4639 25.0672 38.6632C26.6819 36.2745 27.9079 33.6451 28.6994 30.8725ZM25.6619 21.5848C26.6282 21.5834 27.4125 22.3663 27.4142 23.3325C27.4235 29.3142 25.2862 35.1004 21.3918 39.6408C20.7625 40.3744 19.6576 40.4591 18.924 39.8299C18.1912 39.2005 18.1082 38.0954 18.7371 37.3621C22.0853 33.4581 23.922 28.4825 23.9142 23.3393C23.9127 22.3728 24.6954 21.5863 25.6619 21.5848ZM35.5809 23.3348C35.5809 21.5433 35.0963 19.7843 34.1772 18.2466C33.2581 16.7088 31.9384 15.4492 30.3605 14.6007C28.7828 13.7524 27.0048 13.3461 25.2153 13.4272C23.4255 13.5085 21.6901 14.0752 20.1955 15.0633C19.3893 15.5958 18.3038 15.3726 17.771 14.5666C17.2385 13.7604 17.4594 12.6749 18.2654 12.1421C20.2876 10.8054 22.6343 10.0417 25.0558 9.93179C27.4774 9.82184 29.8844 10.3697 32.0194 11.5177C34.1538 12.6656 35.9371 14.3708 37.1805 16.451C38.4239 18.5315 39.0809 20.911 39.0809 23.3348C39.0809 28.1007 38.1736 32.6581 36.5197 36.8403C36.1643 37.7391 35.1466 38.1801 34.2479 37.8247C33.3493 37.4692 32.9081 36.4516 33.2635 35.5529C34.758 31.7738 35.5809 27.6531 35.5809 23.3348ZM14.4715 15.936C15.0053 15.1303 16.0903 14.91 16.896 15.4438C17.7015 15.9777 17.922 17.0627 17.3882 17.8683C16.3149 19.4882 15.7442 21.3893 15.7475 23.3325C15.7518 25.8618 15.0388 28.341 13.6899 30.4806C13.1745 31.2982 12.0921 31.5429 11.2746 31.0275C10.4578 30.5121 10.2131 29.4317 10.7277 28.6144C11.7231 27.0355 12.2505 25.2058 12.2475 23.3393C12.243 20.7065 13.0174 18.1308 14.4715 15.936ZM29.7475 23.3348C29.7473 22.2521 29.3168 21.2133 28.5513 20.4477C27.7855 19.6823 26.747 19.2514 25.6642 19.2514C24.5815 19.2515 23.5429 19.6822 22.7772 20.4477C22.0116 21.2133 21.5811 22.2521 21.5809 23.3348C21.5874 28.1132 19.81 32.7218 16.5975 36.2593C15.9477 36.9745 14.8429 37.0273 14.1274 36.3778C13.4122 35.7283 13.3577 34.6232 14.0067 33.9077C16.6334 31.0152 18.0866 27.2443 18.0809 23.3371V23.3348C18.0811 21.3239 18.8806 19.3951 20.3026 17.9731C21.7246 16.5512 23.6532 15.7515 25.6642 15.7514C27.6752 15.7514 29.6038 16.5513 31.0259 17.9731C32.4478 19.3951 33.2473 21.3239 33.2475 23.3348C33.2475 24.201 33.2138 25.0635 33.1427 25.9165C33.062 26.8788 32.2162 27.5935 31.2537 27.5138C30.2906 27.4336 29.5739 26.5879 29.6541 25.6248C29.7168 24.8725 29.7475 24.1081 29.7475 23.3348Z" fill="#F85716"></path>
              </svg>
            </div>
            <div class="suhw_step3_textBlock">
              <div class="suhw_step3_title-2">Enable biometrics</div>
              <div class="suhw_step3_desc-2">
                Biometric authentication offers an easy way to verify your identity, 
                making your overall user experience smoother and more efficient.
              </div>
            </div>
            <div class="suhw_step3_btn-secondary" data-sim-trigger-2>
              <div class="suhw_step3_btn-secondary-label">Enable biometrics</div>
            </div>
          </div>

        </div>
      </div>
    `;

    // ----------------------------------
    // Inject CSS (step-specific)
    // ----------------------------------
    const style = document.createElement("style");
    style.textContent = `
      .suhw_step3_wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 854px;
        padding-inline: 120px;
        overflow: hidden;
      }

      .suhw_step3_card {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 3.5rem;
        background-color: #ffffff;
        border-radius: 20px;
        padding: 40px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        width: 100%;
        max-width: 530px;
      }

      .suhw_step3_header {
        display: flex;
        flex-direction: column;
        gap: 14px;
        width: 100%;
      }

      .suhw_step3_title {
        width: 100%;
        margin: 0;
        font-size: 2.5rem;
        font-weight: 500;
        line-height: 130%;
        letter-spacing: -0.04em;
        color: #2f2f30;
      }

      .suhw_step3_desc-alt {
        width: 100%;
        margin: 0;
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 130%;
        letter-spacing: -0.02em;
        color: #7a7a7a;
      }

      .suhw_step3_passWrap {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;
      }

      .suhw_step3_subtitle {
        margin: 0;
        font-size: 1rem;
        line-height: 150%;
        letter-spacing: -0.02em;
        color: #7a7a7a;
      }

      .suhw_step3_passInputs {
        display: flex;
        gap: 16px;
        width: 100%;
        cursor: pointer;
        justify-content: space-between;
      }

      .suhw_step3_passCell {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 64px;
        height: 56px;
        border-radius: 8px;
        background-color: #f9f9f9;
        border: 2px solid #f64c07;
        box-shadow: 0 4px 10px rgba(235,133,92,0.24);
        font-size: 2rem;
        font-weight: 600;
        color: #2f2f30;
      }

      .suhw_step3_btn-primary {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 56px;
        padding-inline: 24px;
        border-radius: 8px;
        border: 2px solid #f64c07;
        background-image: linear-gradient(87.19deg, #f64c07 0%, #ff7943 100%);
        box-shadow: 0 4px 10px rgba(235,133,92,0.25);
        cursor: default;
        opacity: 0.4;
        pointer-events: none;
        transform-origin: center;
      }

      .suhw_step3_btn-primary-label {
        margin: 0;
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 140%;
        letter-spacing: -0.02em;
        color: #ffffff;
      }

      .suhw_step3_biometrics {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        gap: 32px;
        justify-content: center;
        align-items: center;
        padding: 40px;
        background-color: #ffffff;
        border-radius: 20px;
        opacity: 0;
        pointer-events: none;
      }

      .suhw_step3_icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 120px;
        border-radius: 100%;
        background-color: rgba(246,76,7,0.1);
        flex: none;
      }

      .suhw_step3_icn {
        width: 4rem;
        height: 4rem;
        flex: none;
      }

      .suhw_step3_textBlock {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        align-items: center;
        text-align: center;
      }

      .suhw_step3_title-2 {
        width: 100%;
        margin: 0;
        font-size: 2.5rem;
        font-weight: 500;
        line-height: 130%;
        letter-spacing: -0.04em;
        color: #2f2f30;
        text-align: center;
      }

      .suhw_step3_desc-2 {
        width: 100%;
        margin: 0;
        font-size: 1rem;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: -0.02em;
        color: #7a7a7a;
        text-align: center;
      }

      .suhw_step3_btn-secondary {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 56px;
        padding-inline: 24px;
        border-radius: 8px;
        border: 2px solid #f64c07;
        background-image: linear-gradient(87.19deg, #f64c07, #ff7943);
        box-shadow: 0 4px 10px rgba(235,133,92,0.25);
        cursor: pointer;
        transform-origin: center;
      }

      .suhw_step3_btn-secondary-label {
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
    const wrap = rootEl.querySelector(".suhw_step3_wrap");
    const trigger1 = rootEl.querySelector("[data-sim-trigger]");
    const trigger2 = rootEl.querySelector("[data-sim-trigger-2]");
    const password = rootEl.querySelector("[data-sim-password]");
    const passCells = rootEl.querySelectorAll(".suhw_step3_passCell");
    const view2 = rootEl.querySelector("[data-sim-view]");

    if (!wrap || !trigger1 || !password || !view2 || !trigger2) {
      console.warn("[suhw_step3] Missing required elements.");
      return;
    }

    // Initial states
    trigger1.style.opacity = "0.4";
    trigger1.style.pointerEvents = "none";

    if (gs) {
      gs.set(view2, { opacity: 0, yPercent: 20, pointerEvents: "none" });
      gs.fromTo(
        wrap,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    } else {
      view2.style.opacity = "0";
      view2.style.pointerEvents = "none";
    }

    let passFilled = false;

    // ----------------------------------
    // Click on passcode area → fill with *
    // ----------------------------------
    password.addEventListener("click", () => {
      if (passFilled) return;
      passFilled = true;

      passCells.forEach((cell) => {
        cell.textContent = "*";
      });

      if (gs) {
        gs.fromTo(
          passCells,
          { scale: 0.9, opacity: 0.5 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.25,
            stagger: 0.03,
            ease: "power2.out",
          }
        );
      }

      // Enable "Next"
      trigger1.style.opacity = "1";
      trigger1.style.pointerEvents = "auto";
      trigger1.style.cursor = "pointer";
    });

    // ----------------------------------
    // Trigger 1: animate button + reveal biometrics (no complete)
    // ----------------------------------
    trigger1.addEventListener("click", () => {
      if (!passFilled) return;

      if (gs) {
        gs.timeline({ defaults: { ease: "power2.out" } })
          .to(trigger1, { scale: 0.98, duration: 0.12 })
          .to(trigger1, { scale: 1, duration: 0.18 })
          .add(() => {
            gs.to(view2, {
              opacity: 1,
              yPercent: 0,
              pointerEvents: "auto",
              duration: 0.5,
              ease: "power2.out",
            });
          }, "+=0.05");
      } else {
        view2.style.opacity = "1";
        view2.style.pointerEvents = "auto";
      }
    });

    // ----------------------------------
    // Trigger 2: animate button + complete step
    // ----------------------------------
    trigger2.addEventListener("click", () => {
      if (gs) {
        gs.timeline({ defaults: { ease: "power2.out" } })
          .to(trigger2, { scale: 0.98, duration: 0.12 })
          .to(trigger2, { scale: 1, duration: 0.18 })
          .add(() => done(), "+=0.05");
      } else {
        done?.();
      }
    });
  },
};
