// nca_sellCrypto_step5.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = (typeof window !== "undefined" && window.gsap) || null;

    if (!rootEl) return;

    const STORAGE_KEY_PREV = "nca_sellCrypto_step2";
    const STYLE_ID = "nca_sellCrypto_step5_styles";

    // Inject styles once
    if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
      const styleEl = document.createElement("style");
      styleEl.id = STYLE_ID;
      styleEl.textContent = `
.sellCrypto_step5_canvas-wrap {
  grid-row-gap: 64px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 854px;
  display: flex;
  overflow: hidden;
}

.sellCrypto_step5_send-container {
  grid-row-gap: 40px;
  background-color: #fff;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 520px;
  padding: 40px;
  display: flex;
  box-shadow: 0 4px 20px #0000001a;
}

.sellCrypto_step5_account-pill {
  grid-column-gap: 12px;
  background-color: #f9f9f9;
  border: 1px solid #ebebeb;
  border-radius: 1000px;
  flex: 0 auto;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 24px 8px 16px;
  display: flex;
}

.sellCrypto_step5_account-ico {
  background-color: #f64c07;
  border-radius: 100px;
  flex: none;
  width: 24px;
  height: 24px;
}

.sellCrypto_step5_account-name {
  color: #2f2f30;
  letter-spacing: -.04em;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 100%;
}

.sellCrypto_step5_order-container {
  grid-row-gap: 32px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  display: flex;
}

.sellCrypto_step5_order-details {
  grid-row-gap: 8px;
  background-color: #f9f9f9;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 24px;
  display: flex;
}

.sellCrypto_step5_order-amount {
  color: #2f2f30;
  letter-spacing: -.04em;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 100%;
}

.sellCrypto_step5_order-id {
  color: #686868;
  letter-spacing: -.04em;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 130%;
}

.sellCrypto_step5_btn {
  grid-column-gap: 10px;
  background-image: linear-gradient(87.19deg, #f64c07 0%, #ff7943 100%);
  border: 2px solid #f64c07;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  height: 56px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  box-shadow: 0 4px 10px #eb855c40;
  cursor: pointer;
}

.sellCrypto_step5_btn-text {
  color: #fff;
  letter-spacing: -.02em;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 140%;
}
      `;
      document.head.appendChild(styleEl);
    }

    // Inject HTML (no body, classes unchanged)
    rootEl.innerHTML = `
    <div class="sellCrypto_step5_canvas-wrap">
      <div data-sim-view="" class="sellCrypto_step5_send-container">
        <div class="sellCrypto_step5_account-pill">
          <div class="sellCrypto_step5_account-ico"></div>
          <div class="sellCrypto_step5_account-name">Account 1</div>
        </div>
        <div class="sellCrypto_step5_order-container">
          <div class="sellCrypto_step5_order-details">
            <div class="sellCrypto_step5_order-amount">
              <span data-sim-crypto-amount="">0.01</span>
              <span data-sim-crypto-cur="">ETH</span>
            </div>
            <div class="sellCrypto_step5_order-id">Order ID: 18XF00-24</div>
          </div>
          <div data-sim-trigger="" class="sellCrypto_step5_btn">
            <div class="sellCrypto_step5_btn-text">Send crypto to off-ramp service</div>
          </div>
        </div>
      </div>
    </div>
    `;

    const storage =
      (typeof window !== "undefined" && window.localStorage) || null;

    const view = rootEl.querySelector("[data-sim-view]");
    const triggerEl = rootEl.querySelector("[data-sim-trigger]");
    const cryptoAmountEl = rootEl.querySelector("[data-sim-crypto-amount]");
    const cryptoCurEl = rootEl.querySelector("[data-sim-crypto-cur]");

    if (!view || !triggerEl || !cryptoAmountEl || !cryptoCurEl) {
      console.warn("[nca_sellCrypto_step5] Missing required elements.");
      return;
    }

    const CRYPTOS = {
      btc: { key: "btc", symbol: "BTC" },
      eth: { key: "eth", symbol: "ETH" },
      xrp: { key: "xrp", symbol: "XRP" },
      bnb: { key: "bnb", symbol: "BNB" },
      usdc: { key: "usdc", symbol: "USDC" },
    };

    const formatCryptoAmount = (val) => {
      if (!val || !isFinite(val)) return "0.00";
      if (val < 0.00001) return val.toExponential(2);
      return val.toFixed(5).replace(/0+$/g, "").replace(/\.$/, "");
    };

    // Pull stored values from step 2
    let sellAmount = 0;
    let sellKey = "";

    if (storage) {
      try {
        const raw = storage.getItem(STORAGE_KEY_PREV);
        if (raw) {
          const data = JSON.parse(raw);
          if (data && typeof data === "object") {
            sellAmount = Number(data.sellAmount) || 0;
            sellKey = data.sellKey || "";
          }
        }
      } catch {
        // ignore
      }
    }

    // Allow props overrides if provided
    if (typeof props.sellAmount === "number") {
      sellAmount = props.sellAmount;
    }
    if (typeof props.sellKey === "string" && props.sellKey) {
      sellKey = props.sellKey;
    }

    // Apply crypto amount and symbol
    if (sellAmount && isFinite(sellAmount)) {
      cryptoAmountEl.textContent = formatCryptoAmount(sellAmount);
    }

    const cryptoMeta = sellKey && CRYPTOS[sellKey] ? CRYPTOS[sellKey] : null;
    if (cryptoMeta) {
      cryptoCurEl.textContent = cryptoMeta.symbol;
      cryptoCurEl.setAttribute("data-sim-crypto-cur", cryptoMeta.key);
    }

    // Intro animation: fade in & up
    if (gs) {
      gs.set(view, { autoAlpha: 0, y: 200, rotate: "5deg" });
      gs.to(view, {
        autoAlpha: 1,
        y: 0,
        rotate: "0deg",
        duration: 0.6,
        ease: "power2.out",
      });
    } else {
      view.style.opacity = "1";
      view.style.transform = "translateY(0)";
    }

    let completed = false;
    const safeDone = () => {
      if (completed) return;
      completed = true;
      done?.();
    };

    // Click interaction on trigger
    triggerEl.addEventListener("click", (evt) => {
      evt.preventDefault();
      if (completed) return;

      if (gs) {
        const tl = gs.timeline({ defaults: { ease: "power2.out" } });
        tl.to(triggerEl, { scale: 0.97, duration: 0.12 })
          .to(triggerEl, { scale: 1, duration: 0.18 })
          .add(() => safeDone(), "+=0.05");
      } else {
        safeDone();
      }
    });
  },
};
