// connectWalletToDex_step2.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = window.gsap || null;

    if (!rootEl) return;

    // ----------------------------------
    // Inject step-scoped CSS (once)
    // ----------------------------------
    const STYLE_ID = "connectWalletDex_step2_styles";

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

.main-container {
  grid-column-gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 802px;
  height: 854px;
  text-decoration: none;
  display: flex;
}

.canvas-wrap {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  display: flex;
  position: relative;
  overflow: hidden;
}

.container {
  grid-row-gap: 40px;
  background-color: #fff;
  border-radius: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  max-width: 462px;
  padding: 40px;
  text-decoration: none;
  display: flex;
  position: relative;
  box-shadow: 0 4px 20px #0000001a;
}

.title-style {
  color: #2f2f30;
  letter-spacing: -.04em;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.container-2 {
  grid-row-gap: 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  text-decoration: none;
  display: flex;
}

.container-3 {
  grid-column-gap: 10px;
  cursor: pointer;
  background-color: #f9f9f9;
  border: 2px solid #f64c07;
  border-radius: 8px;
  flex: none;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  display: flex;
  box-shadow: 0 4px 10px #eb855c3d;
  transition: background ease 0.3s;
}

.container-3:hover {
  background-color: #f64c071f;
}

.container-4 {
  grid-column-gap: 24px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  display: flex;
}

.btc {
  background-color: #f64c07;
  border-radius: 8px;
  flex: none;
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
}

.wallet-type {
  color: #1f1f1f;
  letter-spacing: -.04em;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.container-5 {
  grid-column-gap: 24px;
  background-color: #f9f9f9;
  border: 1px solid #ebebeb;
  border-radius: 12px;
  flex: none;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  text-decoration: none;
  display: flex;
}

.btc-2 {
  background-color: #114537;
  border-radius: 8px;
  flex: none;
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
}

.btc-3 {
  background-color: #fdebda;
  border-radius: 8px;
  flex: none;
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
}

.container-6 {
  background-color: #f9f9f9;
  border: 1px solid #ebebeb;
  border-radius: 12px;
  flex: none;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  text-decoration: none;
  display: flex;
}

.btc-4 {
  background-color: #1f1f1f1a;
  border-radius: 8px;
  flex: none;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  overflow: hidden;
}

.icon {
  object-fit: cover;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
}

.container-7 {
  grid-column-gap: 24px;
  background-color: #1f1f1f1a;
  border-radius: 8px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  padding: 6px 8px;
  text-decoration: none;
  display: flex;
}

.wallet-count {
  color: #7a7a7a;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: .875rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.container-8 {
  grid-row-gap: 32px;
  background-color: #fff;
  border-radius: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 40px;
  text-decoration: none;
  display: flex;
  position: absolute;
  inset: 0%;
  box-shadow: 0 4px 20px #0000001a;
}

.title-style-2 {
  color: #2f2f30;
  text-align: center;
  letter-spacing: -.04em;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.qr-code-container {
  grid-row-gap: 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  text-decoration: none;
  display: flex;
}

.qr-code-image {
  object-fit: cover;
}

.instruction {
  color: #7a7a7a;
  text-align: center;
  letter-spacing: -.04em;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}

.link-container {
  grid-column-gap: 8px;
  background-color: #1f1f1f1a;
  border-radius: 8px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  padding: 6px 12px;
  text-decoration: none;
  display: flex;
}

.link-text {
  color: #7a7a7a;
  letter-spacing: -.04em;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
}
      `;
      document.head.appendChild(styleEl);
    }

    // ----------------------------------
    // Inject HTML
    // ----------------------------------
    rootEl.innerHTML = `
      <div class="canvas-wrap">
        <div data-sim-view-1 class="container">
          <div class="title-style">Connect Wallet</div>
          <div class="container-2">
            <div data-sim-trigger class="container-3">
              <div class="container-4">
                <div class="btc"></div>
                <div class="wallet-type">Wallet type 1</div>
              </div>
            </div>
            <div class="container-5">
              <div class="container-4">
                <div class="btc-2"></div>
                <div class="wallet-type">Wallet type 2</div>
              </div>
            </div>
            <div class="container-5">
              <div class="container-4">
                <div class="btc-3"></div>
                <div class="wallet-type">Wallet type 3</div>
              </div>
            </div>
            <div class="container-6">
              <div class="container-4">
                <div class="btc-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="icon">
                    <path d="M10 13H3C2.73478 13 2.48043 13.1054 2.29289 13.2929C2.10536 13.4804 2 13.7348 2 14V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H10C10.2652 22 10.5196 21.8946 10.7071 21.7071C10.8946 21.5196 11 21.2652 11 21V14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13ZM9 20H4V15H9V20ZM21 2H14C13.7348 2 13.4804 2.10536 13.2929 2.29289C13.1054 2.48043 13 2.73478 13 3V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11H21C21.2652 11 21.5196 10.8946 21.7071 10.7071C21.8946 10.5196 22 10.2652 22 10V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2V2ZM20 9H15V4H20V9ZM21 13H14C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14V21C13 21.2652 13.1054 21.5196 13.2929 21.7071C13.4804 21.8946 13.7348 22 14 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V14C22 13.7348 21.8946 13.4804 21.7071 13.2929C21.5196 13.1054 21.2652 13 21 13ZM20 20H15V15H20V20ZM10 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H10C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2V2ZM9 9H4V4H9V9Z" fill="#7A7A7A"></path>
                  </svg>
                </div>
                <div class="wallet-type">All Wallets</div>
              </div>
              <div class="container-7">
                <div class="wallet-count">50+</div>
              </div>
            </div>
          </div>

          <div data-sim-view-2 class="container-8">
            <div class="title-style-2">Wallet type 1</div>
            <div class="qr-code-container">
              <div class="qr-code">
                <img src="https://cdn.prod.website-files.com/68f62d7ec4ced98ccbd356d8/69284e1bcce49eed93427489_SimQR.png" loading="auto" width="232" height="232" alt="" class="qr-code-image">
              </div>
              <div class="instruction">Scan this QR Code with your phone</div>
            </div>
            <div class="link-container">
              <div class="link-text">Copy link</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" class="icon">
                <path d="M17.5 7.45033C17.4913 7.37377 17.4746 7.29835 17.45 7.22533V7.15033C17.4099 7.06464 17.3565 6.98588 17.2917 6.91699V6.91699L12.2917 1.91699C12.2228 1.85217 12.144 1.79873 12.0583 1.75866C12.0335 1.75513 12.0082 1.75513 11.9833 1.75866C11.8987 1.71011 11.8052 1.67895 11.7083 1.66699H8.33333C7.67029 1.66699 7.03441 1.93038 6.56557 2.39923C6.09673 2.86807 5.83333 3.50395 5.83333 4.16699V5.00033H5C4.33696 5.00033 3.70107 5.26372 3.23223 5.73256C2.76339 6.2014 2.5 6.83728 2.5 7.50033V15.8337C2.5 16.4967 2.76339 17.1326 3.23223 17.6014C3.70107 18.0703 4.33696 18.3337 5 18.3337H11.6667C12.3297 18.3337 12.9656 18.0703 13.4344 17.6014C13.9033 17.1326 14.1667 16.4967 14.1667 15.8337V15.0003H15C15.663 15.0003 16.2989 14.7369 16.7678 14.2681C17.2366 13.7993 17.5 13.1634 17.5 12.5003V7.50033C17.5 7.50033 17.5 7.50033 17.5 7.45033ZM12.5 4.50866L14.6583 6.66699H13.3333C13.1123 6.66699 12.9004 6.57919 12.7441 6.42291C12.5878 6.26663 12.5 6.05467 12.5 5.83366V4.50866ZM12.5 15.8337C12.5 16.0547 12.4122 16.2666 12.2559 16.4229C12.0996 16.5792 11.8877 16.667 11.6667 16.667H5C4.77899 16.667 4.56702 16.5792 4.41074 16.4229C4.25446 16.2666 4.16667 16.0547 4.16667 15.8337V7.50033C4.16667 7.27931 4.25446 7.06735 4.41074 6.91107C4.56702 6.75479 4.77899 6.66699 5 6.66699H5.83333V12.5003C5.83333 13.1634 6.09673 13.7993 6.56557 14.2681C7.03441 14.7369 7.67029 15.0003 8.33333 15.0003H12.5V15.8337ZM15.8333 12.5003C15.8333 12.7213 15.7455 12.9333 15.5893 13.0896C15.433 13.2459 15.221 13.3337 15 13.3337H8.33333C8.11232 13.3337 7.90036 13.2459 7.74408 13.0896C7.5878 12.9333 7.5 12.7213 7.5 12.5003V4.16699C7.5 3.94598 7.5878 3.73402 7.74408 3.57774C7.90036 3.42146 8.11232 3.33366 8.33333 3.33366H10.8333V5.83366C10.8333 6.4967 11.0967 7.13259 11.5656 7.60143C12.0344 8.07027 12.6703 8.33366 13.3333 8.33366H15.8333V12.5003Z" fill="#7A7A7A"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `;

    const view1 = rootEl.querySelector("[data-sim-view-1]");
    const view2 = rootEl.querySelector("[data-sim-view-2]");
    const trigger = rootEl.querySelector("[data-sim-trigger]");

    if (!view1 || !view2 || !trigger) {
      console.warn("[connectWalletToDex_step2] Missing required elements.");
      done?.();
      return;
    }

    // ----------------------------------
    // Initial states
    // ----------------------------------
    if (gs) {
      gs.set(view1, { autoAlpha: 0, y: 120 });
      gs.set(view2, { autoAlpha: 0, yPercent: 40 });
      view2.style.pointerEvents = "none";

      // children of view1, excluding data-sim-view-2
      const childEls = Array.from(view1.children).filter((el) => el !== view2);

      gs.to(view1, {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      });

      if (childEls.length) {
        gs.fromTo(
          childEls,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            delay: 0.4,
          }
        );
      }
    } else {
      view1.style.opacity = "1";
      view1.style.transform = "translateY(0)";
      view2.style.opacity = "0";
      view2.style.transform = "translateY(40%)";
      view2.style.pointerEvents = "none";
    }

    // ----------------------------------
    // Trigger → show view2 + complete
    // ----------------------------------
    let clicked = false;

    const onClick = () => {
      if (clicked) return;
      clicked = true;

      if (gs) {
        const tl = gs.timeline({ defaults: { ease: "power2.out" } });

        tl.to(trigger, { scale: 0.98, duration: 0.12 })
          .to(trigger, { scale: 1, duration: 0.18 })
          .to(
            view2,
            {
              autoAlpha: 1,
              yPercent: 0,
              duration: 0.6,
              onStart: () => {
                view2.style.pointerEvents = "auto";
              },
            },
            "+=0.1"
          )
          .add(() => {
            // wait 1.5s before completing
            setTimeout(() => {
              done?.();
            }, 1500);
          });
      } else {
        view2.style.opacity = "1";
        view2.style.transform = "translateY(0%)";
        view2.style.pointerEvents = "auto";
        setTimeout(() => done?.(), 1500);
      }
    };

    trigger.addEventListener("click", onClick);
  },
};
