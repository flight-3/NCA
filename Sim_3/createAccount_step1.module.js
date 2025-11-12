export default {
  mount(rootEl, props = {}, api = {}) {
    // --- 1) Inject DOM ---
    rootEl.innerHTML = `
      <div class="mod_createAcc">
        <div class="mod_createAcc_frame">
          <div class="mod_createAcc_uiRow">
            <div class="mod_createAcc_mockBtn"></div>
            <div class="mod_createAcc_mockBtn"></div>
            <div class="mod_createAcc_mockBtnAlt"></div>
            <button class="mod_createAcc_btn" data-sim-trigger>
              <span class="mod_createAcc_btnText">Create account</span>
            </button>
          </div>
          <div class="mod_createAcc_uiStack">
            <div class="mod_createAcc_uiCol">
              <div class="mod_createAcc_mockA"></div>
              <div class="mod_createAcc_mockPair">
                <div class="mod_createAcc_mockSmall"></div>
                <div class="mod_createAcc_mockWide"></div>
              </div>
            </div>
            <div class="mod_createAcc_mockB"></div>
          </div>
        </div>
      </div>
    `;

    // --- 2) Scoped CSS (once per mount) ---
    if (!rootEl.querySelector("style[data-mod-createAcc]")) {
      const style = document.createElement("style");
      style.setAttribute("data-mod-createAcc", "");
      style.textContent = `
        .mod_createAcc { width:100%; height:100%; display:flex; flex-direction:column; justify-content:flex-end; overflow:hidden; }
        .mod_createAcc_frame {
          flex:1;
          display:flex; flex-direction:column; align-items:flex-end;
          gap:2.5rem; padding:2.5rem;
          background:#fff;
          border-radius:0 20px 0 0;
          box-shadow:0 4px 20px rgba(0,0,0,0.1);
        }

        .mod_createAcc_uiRow {
          display:flex; align-items:flex-start; gap:1.5rem;
        }
        .mod_createAcc_mockBtn,
        .mod_createAcc_mockBtnAlt {
          height:3.5rem; border-radius:1000px;
          background:#6f6f6f; opacity:0.1;
          display:flex; align-items:center; justify-content:center;
        }
        .mod_createAcc_mockBtn { width:3.5rem; }
        .mod_createAcc_mockBtnAlt { width:7.8rem; border-radius:8px; }

        .mod_createAcc_btn {
          height:3.5rem; padding:0 1.5rem;
          border:none;
          border-radius:8px;
          font:500 1rem/1.4 "Inter", sans-serif;
          color:#fff;
          cursor:pointer;
          background:linear-gradient(87.55deg, #f64c07, #ff7943);
          box-shadow:0 4px 10px rgba(235,133,92,0.25);
          transition:transform 0.2s ease, box-shadow 0.2s ease;
        }
        .mod_createAcc_btn:hover { transform:translateY(-2px); box-shadow:0 6px 14px rgba(235,133,92,0.35); }

        .mod_createAcc_uiStack {
          width:100%;
          max-width:40rem;
          display:flex; flex-direction:column; align-items:flex-end; gap:4rem;
        }
        .mod_createAcc_uiCol {
          width:100%;
          display:flex; flex-direction:column; align-items:flex-end; gap:1.5rem;
        }
        .mod_createAcc_mockA,
        .mod_createAcc_mockB {
          width:100%; border-radius:8px;
          height:8rem;
          background:linear-gradient(270deg, #ededed, #f7f7f7);
        }
        .mod_createAcc_mockPair {
          display:flex; align-items:flex-start; gap:2.5rem;
        }
        .mod_createAcc_mockSmall {
          flex:0 0 8rem; height:7.5rem;
          border-radius:8px;
          background:linear-gradient(270deg,#f7f7f7,#ededed);
        }
        .mod_createAcc_mockWide {
          flex:1; height:7.5rem;
          border-radius:8px;
          background:linear-gradient(270deg,#f7f7f7,#ededed);
        }

        @media (max-width:768px) {
          .mod_createAcc_frame { padding:1.5rem; }
          .mod_createAcc_uiRow { flex-wrap:wrap; }
          .mod_createAcc_uiStack { gap:2rem; }
        }
      `;
      rootEl.appendChild(style);
    }

    // --- 3) Logic ---
    const triggerBtn = rootEl.querySelector("[data-sim-trigger]");
    triggerBtn.addEventListener("click", () => {
      triggerBtn.classList.add("is--active");
      // small tap feedback
      setTimeout(() => {
        api.complete?.(); // signal completion to runner
      }, 300);
    });

    // --- 4) Cleanup ---
    return () => {
      triggerBtn?.removeEventListener("click", api.complete);
    };
  },
};
