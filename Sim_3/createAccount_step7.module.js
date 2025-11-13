// createAccount_step7.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = window.gsap || null;

    // ---------- HTML (renamed + namespaced) ----------
    rootEl.innerHTML = `
      <div class="nca-step7_wrap">
        <div class="nca-step7_card">
          <div class="nca-step7_title">Upload identification</div>

          <div class="nca-step7_content">
            <!-- Drop area -->
            <div class="nca-step7_drop" data-sim-trigger-1>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 32 32" fill="none" class="nca-step7_drop-icon">
                <path d="M24.5608 10.9605C23.7462 9.08852 22.3401 7.53528 20.5583 6.53881C18.7764 5.54235 16.7169 5.15762 14.6955 5.44359C12.674 5.72956 10.8021 6.67045 9.3665 8.12208C7.93094 9.57371 7.01095 11.456 6.7475 13.4805C5.47628 13.7849 4.36113 14.5456 3.61381 15.6181C2.8665 16.6906 2.53908 18.0001 2.69372 19.2981C2.84835 20.5961 3.47429 21.7921 4.45265 22.659C5.43102 23.5259 6.69367 24.0033 8.00083 24.0005C8.35445 24.0005 8.69359 23.86 8.94364 23.61C9.19369 23.3599 9.33416 23.0208 9.33416 22.6672C9.33416 22.3136 9.19369 21.9744 8.94364 21.7244C8.69359 21.4743 8.35445 21.3338 8.00083 21.3338C7.29359 21.3338 6.61531 21.0529 6.11521 20.5528C5.61511 20.0527 5.33416 19.3744 5.33416 18.6672C5.33416 17.9599 5.61511 17.2817 6.11521 16.7816C6.61531 16.2815 7.29359 16.0005 8.00083 16.0005C8.35445 16.0005 8.69359 15.86 8.94364 15.61C9.19369 15.3599 9.33416 15.0208 9.33416 14.6672C9.33757 13.0902 9.89988 11.5655 10.9212 10.364C11.9425 9.1624 13.3567 8.36178 14.9125 8.10434C16.4683 7.84691 18.065 8.14932 19.4189 8.95786C20.7728 9.76639 21.7963 11.0287 22.3075 12.5205C22.3837 12.7496 22.5207 12.9538 22.7039 13.1111C22.887 13.2684 23.1095 13.3731 23.3475 13.4138C24.2356 13.5817 25.0407 14.0453 25.6315 14.7292C26.2224 15.4131 26.5642 16.277 26.6014 17.18C26.6385 18.0831 26.3687 18.9721 25.8359 19.7022C25.3031 20.4322 24.5388 20.9604 23.6675 21.2005C23.3245 21.2889 23.0306 21.51 22.8506 21.815C22.6706 22.1201 22.6191 22.4842 22.7075 22.8272C22.7959 23.1702 23.0169 23.464 23.322 23.6441C23.6271 23.8241 23.9912 23.8756 24.3342 23.7872C25.7373 23.4164 26.9812 22.5978 27.8768 21.4558C28.7725 20.3138 29.271 18.9107 29.2966 17.4595C29.3223 16.0084 28.8736 14.5886 28.0189 13.4156C27.1642 12.2426 25.95 11.3806 24.5608 10.9605V10.9605ZM16.9475 13.7205C16.8207 13.5991 16.6712 13.504 16.5075 13.4405C16.1829 13.3072 15.8188 13.3072 15.4942 13.4405C15.3305 13.504 15.181 13.5991 15.0542 13.7205L11.0542 17.7205C10.8031 17.9716 10.662 18.3121 10.662 18.6672C10.662 19.0222 10.8031 19.3628 11.0542 19.6138C11.3052 19.8649 11.6458 20.006 12.0008 20.006C12.3559 20.006 12.6964 19.8649 12.9475 19.6138L14.6675 17.8805V25.3338C14.6675 25.6875 14.808 26.0266 15.058 26.2767C15.3081 26.5267 15.6472 26.6672 16.0008 26.6672C16.3545 26.6672 16.6936 26.5267 16.9436 26.2767C17.1937 26.0266 17.3342 25.6875 17.3342 25.3338V17.8805L19.0542 19.6138C19.1781 19.7388 19.3256 19.838 19.4881 19.9057C19.6505 19.9734 19.8248 20.0082 20.0008 20.0082C20.1768 20.0082 20.3511 19.9734 20.5136 19.9057C20.6761 19.838 20.8235 19.7388 20.9475 19.6138C21.0725 19.4899 21.1717 19.3424 21.2394 19.1799C21.307 19.0175 21.3419 18.8432 21.3419 18.6672C21.3419 18.4912 21.307 18.3169 21.2394 18.1544C21.1717 17.9919 21.0725 17.8445 20.9475 17.7205L16.9475 13.7205Z" fill="#F64C07"></path>
              </svg>
              <div class="nca-step7_drop-text">Click to add file</div>
            </div>

            <!-- Uploading state -->
            <div class="nca-step7_upload" data-sim-uploading>
              <div class="nca-step7_upload-icon-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="nca-step7_upload-icon">
                  <path d="M19 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.1645 21.9977 19.3284 21.981 19.49 21.95L19.79 21.88H19.86H19.91L20.28 21.74L20.41 21.67C20.51 21.61 20.62 21.56 20.72 21.49C20.8535 21.3918 20.9805 21.2849 21.1 21.17L21.17 21.08C21.2682 20.9805 21.3585 20.8735 21.44 20.76L21.53 20.63C21.5998 20.5187 21.6601 20.4016 21.71 20.28C21.7374 20.232 21.7609 20.1818 21.78 20.13C21.83 20.01 21.86 19.88 21.9 19.75V19.6C21.9567 19.4046 21.9903 19.2032 22 19V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2ZM5 20C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V14.69L7.29 11.39C7.38296 11.2963 7.49356 11.2219 7.61542 11.1711C7.73728 11.1203 7.86799 11.0942 8 11.0942C8.13201 11.0942 8.26272 11.1203 8.38458 11.1711C8.50644 11.2219 8.61704 11.2963 8.71 11.39L17.31 20H5ZM20 19C19.9991 19.1233 19.9753 19.2453 19.93 19.36C19.9071 19.4087 19.8804 19.4556 19.85 19.5C19.8232 19.5423 19.7931 19.5825 19.76 19.62L14.41 14.27L15.29 13.39C15.383 13.2963 15.4936 13.2219 15.6154 13.1711C15.7373 13.1203 15.868 13.0942 16 13.0942C16.132 13.0942 16.2627 13.1203 16.3846 13.1711C16.5064 13.2219 16.617 13.2963 16.71 13.39V13.39L20 16.69V19ZM20 13.86L18.12 12C17.5477 11.457 16.7889 11.1543 16 11.1543C15.2111 11.1543 14.4523 11.457 13.88 12L13 12.88L10.12 10C9.54772 9.45699 8.7889 9.15428 8 9.15428C7.2111 9.15428 6.45228 9.45699 5.88 10L4 11.86V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V13.86Z" fill="white"></path>
                </svg>
              </div>
              <div class="nca-step7_upload-main">
                <div class="nca-step7_upload-header">
                  <div class="nca-step7_file-name">ID_document.jpg</div>
                  <div class="nca-step7_progress-text" data-sim-progress-text>0%</div>
                </div>
                <div class="nca-step7_progress-wrap">
                  <div class="nca-step7_progress-bar" data-sim-progress-bar></div>
                </div>
              </div>
            </div>
          </div>

          <div class="nca-step7_btn" data-sim-trigger-2>
            <div class="nca-step7_btn-text">Upload</div>
          </div>
        </div>
      </div>
    `;

    // ---------- CSS ----------
    const style = document.createElement("style");
    style.textContent = `
      .nca-step7_wrap {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        overflow: hidden;
      }
      .nca-step7_card {
        width: 100%;
        max-width: 35rem;
        background-color: #fff;
        border-radius: 1.25rem;
        padding: 2.5rem;
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        align-items: center;
        box-shadow: 0 .25rem 1.25rem #0000001a;
      }
      .nca-step7_title {
        width: 100%;
        margin: 0;
        color: #2f2f30;
        letter-spacing: -.04em;
        font-size: 2.5rem;
        font-weight: 500;
        line-height: 130%;
      }
      .nca-step7_content {
        width: 100%;
      }
      .nca-step7_drop {
        height: 15rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        background-color: #f9f9f9;
        border: .125rem solid #f64c07;
        border-radius: .5rem;
        padding: 1.5rem 1rem;
        box-shadow: 0 .25rem .625rem #eb855c3d;
        cursor: pointer;
      }
      .nca-step7_drop-icon {
        flex: none;
        width: 2rem;
        height: 2rem;
      }
      .nca-step7_drop-text {
        margin: 0;
        color: #7a7a7a;
        letter-spacing: -.02em;
        font-size: 1rem;
        font-weight: 500;
        line-height: 140%;
      }

      .nca-step7_upload {
        width: 100%;
        display: none;
        opacity: 0;
        background-color: #f9f9f9;
        border: .0625rem solid #ebebeb;
        border-radius: .5rem;
        padding: 1rem;
        box-sizing: border-box;
        display: none;
        align-items: center;
        gap: 1rem;
      }
      .nca-step7_upload-icon-wrap {
        flex: none;
        width: 3rem;
        height: 3rem;
        border-radius: .5rem;
        background-color: #f64c07;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .nca-step7_upload-icon {
        width: 1.5rem;
        height: 1.5rem;
      }
      .nca-step7_upload-main {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 3rem;
      }
      .nca-step7_upload-header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .nca-step7_file-name {
        margin: 0;
        color: #1f1f1f;
        letter-spacing: -.02em;
        font-size: 1rem;
        font-weight: 600;
        line-height: 150%;
      }
      .nca-step7_progress-text {
        margin: 0;
        color: #7a7a7a;
        letter-spacing: -.02em;
        font-size: .875rem;
        font-weight: 500;
        line-height: 130%;
      }
      .nca-step7_progress-wrap {
        width: 100%;
        height: 8px;
        border-radius: 16px;
        background-color: #f9eae6;
        overflow: hidden;
      }
      .nca-step7_progress-bar {
        width: 0%;
        height: 8px;
        border-radius: 16px;
        background-color: #f64d08;
      }

      .nca-step7_btn {
        width: 100%;
        height: 3.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .625rem;
        border-radius: .5rem;
        background-color: #f64c07;
        opacity: 0.4;
        pointer-events: none;
        cursor: default;
        transition: opacity .2s ease;
      }
      .nca-step7_btn-text {
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
    const drop = rootEl.querySelector("[data-sim-trigger-1]");
    const uploading = rootEl.querySelector("[data-sim-uploading]");
    const progressBar = rootEl.querySelector("[data-sim-progress-bar]");
    const progressText = rootEl.querySelector("[data-sim-progress-text]");
    const trigger2 = rootEl.querySelector("[data-sim-trigger-2]");

    const timelines = [];
    let state = "idle"; // idle -> uploading -> ready -> done

    // Ensure uploading initial state
    if (uploading) {
      uploading.style.display = "none";
      uploading.style.opacity = "0";
    }
    if (progressBar) progressBar.style.width = "0%";
    if (progressText) progressText.textContent = "0%";

    // ---------- Start upload animation ----------
    const startUploadAnimation = () => {
      if (!gs || !progressBar) {
        // Fallback: instantly complete
        if (progressBar) progressBar.style.width = "100%";
        if (progressText) progressText.textContent = "100%";
        enableButton();
        return;
      }

      let uploadTween;
      uploadTween = gs.to(progressBar, {
        width: "100%",
        duration: 2.4,
        ease: "power2.inOut",
        onUpdate() {
          if (!progressText || !uploadTween) return;
          const pct = Math.round(uploadTween.progress() * 100);
          progressText.textContent = `${pct}%`;
        },
        onComplete() {
          if (progressText) progressText.textContent = "100%";
          enableButton();
        },
      });
      timelines.push(uploadTween);
    };

    // ---------- Enable Upload button ----------
    const enableButton = () => {
      state = "ready";
      if (trigger2) {
        trigger2.style.pointerEvents = "auto";
        trigger2.style.cursor = "pointer";
        if (gs) {
          const t = gs.to(trigger2, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.inOut",
          });
          timelines.push(t);
        } else {
          trigger2.style.opacity = "1";
        }
      }
    };

    // ---------- Handle drop click ----------
    const onDropClick = () => {
      if (state !== "idle") return;
      state = "uploading";

      if (!uploading || !drop) {
        startUploadAnimation();
        return;
      }

      if (gs) {
        const tl = gs
          .timeline({ defaults: { ease: "power2.inOut" } })
          .to(drop, { autoAlpha: 0, y: 5, duration: 0.25 })
          .set(drop, { display: "none" })
          .set(uploading, { display: "flex" })
          .fromTo(
            uploading,
            { autoAlpha: 0, y: 10 },
            { autoAlpha: 1, y: 0, duration: 0.3 }
          )
          .add(startUploadAnimation, "+=0.1");

        timelines.push(tl);
      } else {
        drop.style.display = "none";
        uploading.style.display = "flex";
        uploading.style.opacity = "1";
        startUploadAnimation();
      }
    };

    // ---------- Handle Upload button click ----------
    const onUploadClick = () => {
      if (state !== "ready") return;
      state = "done";

      if (gs && trigger2) {
        const tl = gs
          .timeline({ defaults: { ease: "power2.inOut" } })
          .to(trigger2, { scale: 0.98, duration: 0.12 })
          .to(trigger2, { scale: 1, duration: 0.18 })
          .add(done);
        timelines.push(tl);
      } else {
        done();
      }
    };

    drop?.addEventListener("click", onDropClick);
    trigger2?.addEventListener("click", onUploadClick);

    // ---------- Cleanup ----------
    return () => {
      try {
        drop?.removeEventListener("click", onDropClick);
      } catch {}
      try {
        trigger2?.removeEventListener("click", onUploadClick);
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
