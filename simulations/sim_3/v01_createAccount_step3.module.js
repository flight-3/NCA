// createAccount_step3.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = window.gsap || null;

    // ---------- HTML (renamed classes, fixed attributes) ----------
    rootEl.innerHTML = `
      <div class="nca-step3_wrap">
        <!-- VIEW 1 -->
        <div class="nca-step3_email-view" data-sim-view-1>
          <div class="nca-step3_header">
            <div class="nca-step3_header-row">
              <div class="nca-step3_to-from">
                <div class="nca-step3_avatar"></div>
                <div class="nca-step3_fromto">
                  <div class="nca-step3_bar"></div>
                  <div class="nca-step3_bar"></div>
                </div>
                <div class="nca-step3_meta">
                  <div class="nca-step3_bar"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="nca-step3_email-area">
            <div class="nca-step3_card">
              <div class="nca-step3_card-body">
                <div class="nca-step3_hero">
                  <div class="nca-step3_hero-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 38 38" fill="none" class="nca-step3_hero-icon">
                      <path d="M19.001 3.16699C16.5723 3.16689 14.1761 3.7255 11.9979 4.79962C9.81961 5.87373 7.91763 7.43456 6.43909 9.36135C4.96055 11.2881 3.94509 13.5292 3.47125 15.9113C2.99742 18.2933 3.07791 20.7524 3.70651 23.0983C4.33512 25.4443 5.49497 27.6142 7.09636 29.4401C8.69774 31.2661 10.6977 32.6992 12.9416 33.6286C15.1854 34.5579 17.613 34.9587 20.0365 34.7997C22.46 34.6408 24.8144 33.9265 26.9177 32.712C27.1069 32.613 27.2741 32.4768 27.4093 32.3115C27.5445 32.1462 27.6449 31.9553 27.7044 31.7502C27.7639 31.5451 27.7813 31.3301 27.7556 31.1181C27.7298 30.9061 27.6614 30.7015 27.5546 30.5167C27.4477 30.3318 27.3046 30.1704 27.1337 30.0423C26.9629 29.9142 26.7679 29.822 26.5605 29.7712C26.3531 29.7204 26.1375 29.712 25.9268 29.7467C25.7161 29.7813 25.5146 29.8583 25.3344 29.9728C22.9197 31.3669 20.1124 31.9254 17.348 31.5615C14.5836 31.1977 12.0165 29.9318 10.0448 27.9604C8.07314 25.9889 6.80703 23.4219 6.44286 20.6576C6.07869 17.8932 6.6368 15.0859 8.03066 12.6711C9.42451 10.2562 11.5762 8.36875 14.1521 7.30138C16.7279 6.234 19.584 6.04636 22.2773 6.76756C24.9707 7.48875 27.3508 9.07849 29.0486 11.2902C30.7465 13.5019 31.6671 16.2121 31.6677 19.0003V20.1878C31.6677 20.9227 31.3758 21.6275 30.8561 22.1471C30.3365 22.6667 29.6317 22.9587 28.8969 22.9587C28.162 22.9587 27.4572 22.6667 26.9376 22.1471C26.4179 21.6275 26.126 20.9227 26.126 20.1878V13.4587C26.126 13.0387 25.9592 12.636 25.6623 12.3391C25.3653 12.0421 24.9626 11.8753 24.5427 11.8753C24.1745 11.8671 23.815 11.9876 23.526 12.2159C23.237 12.4442 23.0366 12.7661 22.9594 13.1262C21.7955 12.3212 20.4161 11.8853 19.001 11.8753C17.809 11.8611 16.6325 12.1461 15.5792 12.7044C14.526 13.2626 13.6296 14.0762 12.9722 15.0706C12.3148 16.065 11.9174 17.2085 11.8164 18.3963C11.7154 19.5841 11.9141 20.7782 12.3942 21.8693C12.8743 22.9605 13.6205 23.9137 14.5644 24.6417C15.5083 25.3697 16.6199 25.8493 17.7971 26.0364C18.9744 26.2236 20.1799 26.1124 21.303 25.713C22.4262 25.3136 23.4312 24.6388 24.226 23.7503C24.9783 24.7246 26.0155 25.4402 27.1934 25.7976C28.3713 26.155 29.6313 26.1365 30.7981 25.7447C31.965 25.3528 32.9807 24.6071 33.7041 23.6112C34.4275 22.6153 34.8226 21.4187 34.8344 20.1878V19.0003C34.8344 16.9211 34.4248 14.8622 33.6291 12.9412C32.8334 11.0202 31.6671 9.27473 30.1969 7.80447C28.7266 6.33421 26.9812 5.16793 25.0602 4.37223C23.1392 3.57653 21.0803 3.16699 19.001 3.16699V3.16699ZM19.001 22.9587C18.2181 22.9587 17.4528 22.7265 16.8019 22.2916C16.1509 21.8566 15.6436 21.2384 15.344 20.5151C15.0444 19.7918 14.966 18.9959 15.1187 18.2281C15.2715 17.4603 15.6485 16.7549 16.2021 16.2014C16.7556 15.6478 17.4609 15.2708 18.2288 15.1181C18.9966 14.9653 19.7925 15.0437 20.5158 15.3433C21.2391 15.6429 21.8573 16.1502 22.2923 16.8012C22.7272 17.4521 22.9594 18.2174 22.9594 19.0003C22.9594 20.0501 22.5423 21.057 21.8 21.7993C21.0577 22.5416 20.0508 22.9587 19.001 22.9587V22.9587Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <div class="nca-step3_title">Verify your email</div>
                  <div class="nca-step3_subtitle">Tap below to finish setting up your account.</div>
                </div>

                <div class="nca-step3_btn" data-sim-trigger-1>
                  <div class="nca-step3_btn-text">Verify my email</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- VIEW 2 -->
        <div class="nca-step3_confirmation-view" data-sim-view-2 style="display:none; opacity:0;">
          <div class="nca-step3_confirm-card">
            <div class="nca-step3_confirm-title">Verify your email</div>
            <div class="nca-step3_confirm-sub">Tap below to finish setting up your account.</div>
          </div>
          <div class="nca-step3_btn" data-sim-trigger-2>
            <div class="nca-step3_btn-text">Verify my email</div>
          </div>
        </div>
      </div>
    `;

    // ---------- CSS (scoped) ----------
    const style = document.createElement("style");
    style.textContent = `
      .nca-step3_wrap {
        width: 100%; height: 100%;
        display: flex; flex-direction: column; justify-content: center; align-items: center;
        padding: 5rem 7.5rem; box-sizing: border-box; position: relative; overflow: hidden;
      }
      .nca-step3_email-view {
        width: 100%; height: 36.6875rem; background:#fff; border-radius: 1.25rem;
        display:flex; flex-direction:column; overflow:hidden;
      }
      .nca-step3_header { background:#fff; }
      .nca-step3_header-row {
        width:100%; max-width:45.125rem; display:flex; justify-content:space-between; align-items:center;
        padding:1.5rem 2.5rem;
      }
      .nca-step3_to-from { display:flex; align-items:center; gap:.75rem; }
      .nca-step3_avatar { width:2.5rem; height:2.5rem; border-radius:2.5rem; background:#6f6f6f; opacity:.1; overflow:hidden; }
      .nca-step3_fromto { display:flex; flex-direction:column; gap:.25rem; width:3.75rem; height:2.5rem; }
      .nca-step3_meta { display:flex; flex-direction:column; gap:.25rem; width:7.5rem; height:2.5rem; }
      .nca-step3_bar { width:100%; height:1rem; border-radius:2.5rem; background:#f1f1f1; }
      .nca-step3_email-area {
        height:31.1875rem; display:flex; flex-direction:column; gap:1.5rem; padding:0 2.5rem;
      }
      .nca-step3_card {
        display:flex; flex-direction:column; gap:2.5rem; background:#fff; border:.0625rem solid #ebebeb;
        border-radius:1.25rem; padding:2.5rem; box-shadow:0 .25rem 1.25rem #0000001a;
      }
      .nca-step3_card-body { width:100%; display:flex; flex-direction:column; gap:2.5rem; align-items:center; }
      .nca-step3_hero { display:flex; flex-direction:column; gap:1rem; align-items:center; width:100%; }
      .nca-step3_hero-circle { width:5rem; height:5rem; border-radius:50%; background:#fff7f5; display:flex; align-items:center; justify-content:center; }
      .nca-step3_hero-icon { width:2.5rem; height:2.5rem; color:#ff7841; }
      .nca-step3_title { width:100%; text-align:center; color:#2f2f30; letter-spacing:-.04em; font-size:2rem; font-weight:600; line-height:130%; }
      .nca-step3_subtitle { width:100%; text-align:center; color:#7a7a7a; letter-spacing:-.02em; font-size:1rem; line-height:150%; }

      .nca-step3_btn {
        display:flex; justify-content:center; align-items:center; gap:.625rem;
        width:100%; height:3.5rem; border-radius:.5rem; border:.125rem solid #f64c07;
        background-image: linear-gradient(85.72deg, #f64c07, #ff7943);
        box-shadow:0 .25rem .625rem #eb855c40; cursor:pointer;
      }
      .nca-step3_btn-text {
        color:#fff; letter-spacing:-.02em; font-size:1.125rem; font-weight:500; line-height:140%; margin:0;
      }

      .nca-step3_confirmation-view {
        z-index:4; background:#fff; border-radius:1.25rem; width:100%; max-width:24.75rem;
        padding:2.5rem; display:none; position:absolute; box-shadow:0 .25rem 1.25rem #0000001a; flex-direction:column; gap:2.5rem;
      }
      .nca-step3_confirm-card { display:flex; flex-direction:column; gap:1rem; width:100%; }
      .nca-step3_confirm-title { width:100%; text-align:center; color:#2f2f30; letter-spacing:-.04em; font-size:2.5rem; font-weight:500; line-height:130%; margin:0; }
      .nca-step3_confirm-sub { width:100%; text-align:center; color:#7a7a7a; letter-spacing:-.02em; font-size:1rem; line-height:150%; margin:0; }
    `;
    rootEl.appendChild(style);

    // ---------- Refs ----------
    const view1 = rootEl.querySelector("[data-sim-view-1]");
    const view2 = rootEl.querySelector("[data-sim-view-2]");
    const trigger1 = rootEl.querySelector("[data-sim-trigger-1]");
    const trigger2 = rootEl.querySelector("[data-sim-trigger-2]");

    // ---------- Animations ----------
    const timelines = [];

    if (gs) {
      // Intro of view 1: opacity 0 -> 1, y 20% -> 0%
      gs.set(view1, { autoAlpha: 0, yPercent: 20 });
      timelines.push(
        gs
          .timeline({ defaults: { ease: "power2.inOut" } })
          .to(view1, { autoAlpha: 1, yPercent: 0, duration: 0.8 })
      );
    }

    const toView2 = () => {
      if (!gs) {
        // Fallback w/o GSAP
        view1.style.opacity = "0";
        setTimeout(() => {
          view1.style.display = "none";
          view2.style.display = "flex";
          view2.style.opacity = "1";
          done?.(); // not delaying here since no GSAP; keep flow simple
        }, 300);
        return;
      }

      const tl = gs.timeline({ defaults: { ease: "power2.inOut" } });
      tl.to(view1, { autoAlpha: 0, duration: 0.25 })
        .add(() => {
          view1.style.display = "none";
          view2.style.display = "flex";
          gs.set(view2, { autoAlpha: 0, yPercent: 20 });
        })
        .to(view2, { autoAlpha: 1, yPercent: 0, duration: 0.4 });
      timelines.push(tl);
    };

    const completeLater = () => {
      if (!gs) {
        setTimeout(() => done?.(), 1500);
        return;
      }
      const tl = gs
        .timeline({ defaults: { ease: "power2.inOut" } })
        .to(trigger2, { scale: 0.98, duration: 0.12 })
        .to(trigger2, { scale: 1, duration: 0.18 })
        .add(done, "+=1.5");
      timelines.push(tl);
    };

    // ---------- Events ----------
    trigger1?.addEventListener("click", toView2);
    trigger2?.addEventListener("click", completeLater);

    // ---------- Cleanup ----------
    const destroy = () => {
      try {
        trigger1?.removeEventListener("click", toView2);
      } catch {}
      try {
        trigger2?.removeEventListener("click", completeLater);
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
