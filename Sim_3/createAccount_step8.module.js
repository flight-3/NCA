// createAccount_step8.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = window.gsap || null;

    // ---------- HTML (renamed + namespaced) ----------
    rootEl.innerHTML = `
      <div class="nca-step8_wrap">
        <div class="nca-step8_card" data-sim-main-view>
          <div class="nca-step8_header">
            <div class="nca-step8_header-icon-wrap">
              <div class="nca-step8_icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 52 52" fill="none" class="nca-step8_icon">
                  <path d="M16.3333 46.6667H7C6.38116 46.6667 5.78767 46.4208 5.35008 45.9833C4.9125 45.5457 4.66667 44.9522 4.66667 44.3333V35C4.66667 34.3812 4.42083 33.7877 3.98325 33.3501C3.54566 32.9125 2.95217 32.6667 2.33333 32.6667C1.71449 32.6667 1.121 32.9125 0.683417 33.3501C0.245833 33.7877 0 34.3812 0 35V44.3333C0 46.1899 0.737498 47.9703 2.05025 49.2831C3.36301 50.5958 5.14348 51.3333 7 51.3333H16.3333C16.9522 51.3333 17.5457 51.0875 17.9832 50.6499C18.4208 50.2123 18.6667 49.6188 18.6667 49C18.6667 48.3812 18.4208 47.7877 17.9832 47.3501C17.5457 46.9125 16.9522 46.6667 16.3333 46.6667ZM49 32.6667C48.3812 32.6667 47.7877 32.9125 47.3501 33.3501C46.9125 33.7877 46.6667 34.3812 46.6667 35V44.3333C46.6667 44.9522 46.4208 45.5457 45.9833 45.9833C45.5457 46.4208 44.9522 46.6667 44.3333 46.6667H35C34.3812 46.6667 33.7877 46.9125 33.3501 47.3501C32.9125 47.7877 32.6667 48.3812 32.6667 49C32.6667 49.6188 32.9125 50.2123 33.3501 50.6499C33.7877 51.0875 34.3812 51.3333 35 51.3333H44.3333C46.1899 51.3333 47.9703 50.5958 49.2831 49.2831C50.5958 47.9703 51.3333 46.1899 51.3333 44.3333V35C51.3333 34.3812 51.0875 33.7877 50.6499 33.3501C50.2123 32.9125 49.6188 32.6667 49 32.6667ZM44.3333 0H35C34.3812 0 33.7877 0.245833 33.3501 0.683417C32.9125 1.121 32.6667 1.71449 32.6667 2.33333C32.6667 2.95217 32.9125 3.54566 33.3501 3.98325C33.7877 4.42083 34.3812 4.66667 35 4.66667H44.3333C44.9522 4.66667 45.5457 4.9125 45.9833 5.35008C46.4208 5.78767 46.6667 6.38116 46.6667 7V16.3333C46.6667 16.9522 46.9125 17.5457 47.3501 17.9832C47.7877 18.4208 48.3812 18.6667 49 18.6667C49.6188 18.6667 50.2123 18.4208 50.6499 17.9832C51.0875 17.5457 51.3333 16.9522 51.3333 16.3333V7C51.3333 5.14348 50.5958 3.36301 49.2831 2.05025C47.9703 0.737498 46.1899 0 44.3333 0ZM2.33333 18.6667C2.95217 18.6667 3.54566 18.4208 3.98325 17.9832C4.42083 17.5457 4.66667 16.9522 4.66667 16.3333V7C4.66667 6.38116 4.9125 5.78767 5.35008 5.35008C5.78767 4.9125 6.38116 4.66667 7 4.66667H16.3333C16.9522 4.66667 17.5457 4.42083 17.9832 3.98325C18.4208 3.54566 18.6667 2.95217 18.6667 2.33333C18.6667 1.71449 18.4208 1.121 17.9832 0.683417C17.5457 0.245833 16.9522 0 16.3333 0H7C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7V16.3333C0 16.9522 0.245833 17.5457 0.683417 17.9832C1.121 18.4208 1.71449 18.6667 2.33333 18.6667Z" fill="#FC682C"></path>
                  <path d="M32.9613 33.0977C34.9221 31.555 36.3533 29.4395 37.0558 27.0455C37.7583 24.6516 37.6972 22.0982 36.8809 19.7406C36.0646 17.383 34.5338 15.3384 32.5015 13.8914C30.4691 12.4443 28.0362 11.6667 25.5413 11.6667C23.0464 11.6667 20.6136 12.4443 18.5812 13.8914C16.5488 15.3384 15.018 17.383 14.2018 19.7406C13.3855 22.0982 13.3244 24.6516 14.0269 27.0455C14.7294 29.4395 16.1606 31.555 18.1213 33.0977C14.7615 34.4437 11.8299 36.6764 9.63912 39.5575C7.44833 42.4386 6.08046 45.8603 5.68134 49.4577C5.65244 49.7203 5.67557 49.9861 5.74939 50.2398C5.8232 50.4935 5.94627 50.7302 6.11156 50.9363C6.44537 51.3526 6.9309 51.6193 7.46134 51.6777C7.99177 51.736 8.52366 51.5813 8.93999 51.2474C9.35632 50.9136 9.62299 50.4281 9.68134 49.8977C10.1205 45.9881 11.9847 42.3773 14.9178 39.7553C17.8508 37.1332 21.6471 35.6837 25.5813 35.6837C29.5155 35.6837 33.3118 37.1332 36.2449 39.7553C39.178 42.3773 41.0422 45.9881 41.4813 49.8977C41.5357 50.3891 41.7702 50.843 42.1395 51.1717C42.5089 51.5004 42.9869 51.6807 43.4813 51.6777H43.7013C44.2256 51.6173 44.7048 51.3523 45.0345 50.9402C45.3641 50.5281 45.5176 50.0024 45.4613 49.4777C45.0603 45.8701 43.6851 42.4396 41.483 39.5541C39.281 36.6685 36.3352 34.4366 32.9613 33.0977ZM25.5413 31.6777C23.9591 31.6777 22.4124 31.2085 21.0968 30.3294C19.7812 29.4504 18.7558 28.2009 18.1503 26.7391C17.5448 25.2773 17.3864 23.6688 17.6951 22.1169C18.0037 20.5651 18.7657 19.1396 19.8845 18.0208C21.0033 16.902 22.4288 16.1401 23.9806 15.8314C25.5325 15.5227 27.141 15.6811 28.6028 16.2866C30.0646 16.8921 31.314 17.9175 32.1931 19.2331C33.0721 20.5487 33.5413 22.0954 33.5413 23.6777C33.5413 25.7994 32.6985 27.8342 31.1982 29.3345C29.6979 30.8348 27.6631 31.6777 25.5413 31.6777Z" fill="#FC682C"></path>
                </svg>
              </div>
            </div>
            <div class="nca-step8_header-text">
              <div class="nca-step8_title">Verify your identity</div>
              <div class="nca-step8_body">Take a quick selfie to confirm you are who you say you are.</div>
            </div>
          </div>

          <div class="nca-step8_primary-row">
            <button class="nca-step8_btn" type="button" data-sim-trigger>
              <span class="nca-step8_btn-label">Create account</span>
            </button>
          </div>

          <!-- Scan screen overlay -->
          <div class="nca-step8_scan-screen" data-sim-scan-screen>
            <img src="https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69162fa95ba50cacbc2debea_KYC-photo.webp" loading="eager" alt="" class="nca-step8_scan-img" />
            <div class="nca-step8_scan-frame">
              <div class="nca-step8_scanner">
                <div class="nca-step8_scan-line" data-sim-scan-line></div>
              </div>
              <div class="nca-step8_scan-edges-row">
                <div class="nca-step8_scan-edge"></div>
                <div class="nca-step8_scan-edge nca-step8_scan-edge--tr"></div>
              </div>
              <div class="nca-step8_scan-edges-row">
                <div class="nca-step8_scan-edge nca-step8_scan-edge--bl"></div>
                <div class="nca-step8_scan-edge nca-step8_scan-edge--br"></div>
              </div>
            </div>
          </div>

          <!-- Complete view -->
          <div class="nca-step8_complete" data-sim-view-complete>
            <div class="nca-step8_header">
              <div class="nca-step8_header-icon-wrap">
                <div class="nca-step8_icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 56 56" fill="none" class="nca-step8_icon">
                    <path d="M43.6544 16.823C43.4375 16.6043 43.1795 16.4307 42.8951 16.3123C42.6108 16.1938 42.3058 16.1328 41.9978 16.1328C41.6897 16.1328 41.3848 16.1938 41.1004 16.3123C40.8161 16.4307 40.558 16.6043 40.3411 16.823L22.9578 34.2297L15.6544 26.903C15.4292 26.6855 15.1634 26.5144 14.872 26.3996C14.5807 26.2848 14.2696 26.2285 13.9565 26.2339C13.6434 26.2393 13.3345 26.3063 13.0473 26.4311C12.7601 26.556 12.5003 26.7361 12.2828 26.9613C12.0652 27.1866 11.8941 27.4524 11.7793 27.7438C11.6645 28.0351 11.6082 28.3462 11.6136 28.6593C11.6191 28.9723 11.6861 29.2813 11.8109 29.5685C11.9357 29.8557 12.1159 30.1155 12.3411 30.333L21.3011 39.293C21.518 39.5117 21.7761 39.6853 22.0604 39.8038C22.3448 39.9222 22.6497 39.9832 22.9578 39.9832C23.2658 39.9832 23.5708 39.9222 23.8551 39.8038C24.1395 39.6853 24.3975 39.5117 24.6144 39.293L43.6544 20.253C43.8913 20.0345 44.0803 19.7693 44.2096 19.4742C44.3389 19.179 44.4056 18.8602 44.4056 18.538C44.4056 18.2158 44.3389 17.897 44.2096 17.6019C44.0803 17.3067 43.8913 17.0415 43.6544 16.823V16.823Z" fill="#F64C07"></path>
                  </svg>
                </div>
              </div>
              <div class="nca-step8_header-text">
                <div class="nca-step8_title">Face scan complete</div>
                <div class="nca-step8_body">Your identity has been verified successfully.</div>
              </div>
            </div>
            <div class="nca-step8_primary-row">
              <button class="nca-step8_btn" type="button" data-sim-trigger-2>
                <span class="nca-step8_btn-label">Continue</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // ---------- CSS ----------
    const style = document.createElement("style");
    style.textContent = `
      .nca-step8_wrap {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        overflow: hidden;
      }
      .nca-step8_card {
        position: relative;
        background-color: #fff;
        border-radius: 20px;
        padding: 40px;
        max-width: 360px;
        max-height: 80%;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-shadow: 0 4px 20px #0000001a;
        overflow: hidden;
      }

      .nca-step8_header {
        width: 100%;
        max-width: 360px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 24px;
      }
      .nca-step8_header-icon-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .nca-step8_icon-circle {
        width: 120px;
        height: 120px;
        border-radius: 100%;
        background-color: #fff7f5;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .nca-step8_icon {
        width: 52px;
        height: 52px;
        flex: none;
      }
      .nca-step8_header-text {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 16px;
      }
      .nca-step8_title {
        width: 100%;
        margin: 0;
        color: #2f2f30;
        text-align: center;
        letter-spacing: -.02em;
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 120%;
      }
      .nca-step8_body {
        width: 100%;
        margin: 0;
        color: #686868;
        text-align: center;
        letter-spacing: -.02em;
        font-size: 1rem;
        font-weight: 400;
        line-height: 150%;
      }

      .nca-step8_primary-row {
        width: 100%;
        max-width: 360px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        gap: 10px;
        padding-top: 120px;
      }

      .nca-step8_btn {
        width: 100%;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        background-image: linear-gradient(82.37deg, #f64c07 0%, #ff7943 100%);
        border: 2px solid #f64c07;
        border-radius: 8px;
        box-shadow: 0 4px 10px #eb855c40;
        cursor: pointer;
      }
      .nca-step8_btn-label {
        margin: 0;
        color: #fff;
        letter-spacing: -.02em;
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 140%;
        font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
      }

      /* Scan screen overlay */
      .nca-step8_scan-screen {
        position: absolute;
        inset: 0;
        display: none;
        opacity: 0;
        background-color: #000;
        display: none;
        flex-flow: column;
        align-items: center;
        justify-content: center;
      }
      .nca-step8_scan-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .nca-step8_scan-frame {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;
        gap: 200px;
        width: 80%;
        aspect-ratio: 1;
        margin: auto;
      }
      .nca-step8_scanner {
        position: absolute;
        inset: 0;
        padding: 20px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        z-index: 3;
      }
      .nca-step8_scan-line {
        position: relative;
        width: 100%;
        height: 4px;
        border-radius: 8px;
        background-color: #fc6a2e;
      }
      .nca-step8_scan-edges-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        position: relative;
      }
      .nca-step8_scan-edge {
        width: 40px;
        height: 40px;
        border-top: 2px solid #fff;
        border-left: 2px solid #fff;
        flex: none;
      }
      .nca-step8_scan-edge--tr {
        transform: rotate(90deg);
      }
      .nca-step8_scan-edge--bl {
        transform: rotate(-90deg);
      }
      .nca-step8_scan-edge--br {
        transform: rotate(180deg);
      }

      /* Complete overlay */
      .nca-step8_complete {
        position: absolute;
        inset: 0;
        z-index: 10;
        display: none;
        opacity: 0;
        background-color: #fff;
        border-radius: 20px;
        padding: 40px;
        box-shadow: 0 4px 20px #0000001a;
        display: none;
        flex-flow: column;
        justify-content: center;
        overflow: hidden;
      }
    `;
    rootEl.appendChild(style);

    // ---------- Refs ----------
    const trigger = rootEl.querySelector("[data-sim-trigger]");
    const scanScreen = rootEl.querySelector("[data-sim-scan-screen]");
    const scanLine = rootEl.querySelector("[data-sim-scan-line]");
    const completeView = rootEl.querySelector("[data-sim-view-complete]");
    const trigger2 = rootEl.querySelector("[data-sim-trigger-2]");

    const timelines = [];
    let state = "idle"; // idle -> scanning -> completeShown -> done

    // Ensure overlays start hidden
    if (scanScreen) {
      scanScreen.style.display = "none";
      scanScreen.style.opacity = "0";
    }
    if (completeView) {
      completeView.style.display = "none";
      completeView.style.opacity = "0";
    }

    // ---------- Scan flow ----------
    const startScanFlow = () => {
      if (!scanScreen || !scanLine) {
        // Fallback: just show complete view
        showCompleteViewFallback();
        return;
      }

      if (gs) {
        const tl = gs.timeline({ defaults: { ease: "power2.inOut" } });

        tl.set(scanScreen, { display: "flex" })
          .fromTo(
            scanScreen,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.35 }
          )
          // Scan line: down then up
          .fromTo(scanLine, { y: 0 }, { y: 300, duration: 1.4 }, "+=0.1")
          .to(scanLine, {
            y: 0,
            duration: 1.4,
          })
          // Show complete view
          .set(completeView, { display: "flex" })
          .fromTo(
            completeView,
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, duration: 0.35 },
            "+=0.1"
          )
          .add(() => {
            state = "completeShown";
          });

        timelines.push(tl);
      } else {
        // No GSAP: simple time-based fallback
        scanScreen.style.display = "flex";
        scanScreen.style.opacity = "1";
        setTimeout(() => {
          showCompleteViewFallback();
        }, 2500);
      }
    };

    const showCompleteViewFallback = () => {
      if (!completeView) return;
      completeView.style.display = "flex";
      completeView.style.opacity = "1";
      state = "completeShown";
    };

    // ---------- Button handlers ----------
    const onTriggerClick = () => {
      if (state !== "idle") return;
      state = "scanning";

      if (gs && trigger) {
        const pressTl = gs.timeline({ defaults: { ease: "power2.inOut" } });
        pressTl
          .to(trigger, { scale: 0.97, duration: 0.12 })
          .to(trigger, { scale: 1, duration: 0.18 })
          .add(startScanFlow, "+=0.05");
        timelines.push(pressTl);
      } else {
        startScanFlow();
      }
    };

    const onTrigger2Click = () => {
      if (state !== "completeShown") return;
      state = "done";

      if (gs && trigger2) {
        const tl = gs.timeline({ defaults: { ease: "power2.inOut" } });
        tl.to(trigger2, { scale: 0.97, duration: 0.12 })
          .to(trigger2, { scale: 1, duration: 0.18 })
          .add(done);
        timelines.push(tl);
      } else {
        done();
      }
    };

    trigger?.addEventListener("click", onTriggerClick);
    trigger2?.addEventListener("click", onTrigger2Click);

    // ---------- Cleanup ----------
    return () => {
      try {
        trigger?.removeEventListener("click", onTriggerClick);
      } catch {}
      try {
        trigger2?.removeEventListener("click", onTrigger2Click);
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
