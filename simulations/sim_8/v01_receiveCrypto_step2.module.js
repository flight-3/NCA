// receiveCrypto_step2.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = window.gsap || null;

    if (!rootEl) {
      console.warn("[receiveCrypto_step2] mount called without rootEl");
      done?.();
      return;
    }

    rootEl.innerHTML = `
<style>
  .receiveCrypto_step2_button-large {
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

  .receiveCrypto_step2_buttons-2 {
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

  .receiveCrypto_step2_canvas-wrap {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 53.375rem;
    text-decoration: none;
    display: flex;
    overflow: hidden;
  }

  .receiveCrypto_step2_container {
    background-color: #fff;
    border-radius: 1.25rem;
    padding: 1.5rem;
    overflow: hidden;
    box-shadow: 0 .25rem 1.25rem #0000001a;
  }

  .receiveCrypto_step2_container-2 {
    grid-row-gap: 2.5rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    width: 22.5rem;
    max-width: 23.75rem;
    text-decoration: none;
    display: flex;
  }

  .receiveCrypto_step2_header-style {
    grid-column-gap: 2.5rem;
    justify-content: space-between;
    align-items: center;
    height: 2.125rem;
    display: flex;
  }

  .receiveCrypto_step2_icon-container {
    grid-column-gap: .5rem;
    justify-content: flex-start;
    align-items: flex-start;
    width: 5.75rem;
    height: 2.125rem;
    text-decoration: none;
    display: flex;
  }

  .receiveCrypto_step2_icon {
    object-fit: cover;
    background-color: #f1f1f1;
    border-radius: .5rem;
    justify-content: center;
    align-items: center;
    width: 5.75rem;
    height: 2.125rem;
    text-decoration: none;
    display: flex;
  }

  .receiveCrypto_step2_icon-container-2 {
    grid-column-gap: .5rem;
    flex: 0 auto;
    justify-content: flex-start;
    align-items: flex-start;
    height: 2.125rem;
    text-decoration: none;
    display: flex;
  }

  .receiveCrypto_step2_icon-2 {
    object-fit: cover;
    background-color: #f1f1f1;
    border-radius: .5rem;
    justify-content: center;
    align-items: center;
    width: 2.4375rem;
    height: 2.125rem;
    text-decoration: none;
    display: flex;
  }

  .receiveCrypto_step2_balance-container {
    grid-row-gap: 1.5rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    text-decoration: none;
    display: flex;
  }

  .receiveCrypto_step2_balance {
    color: #1f1f1f;
    letter-spacing: -.02em;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 3.5rem;
    font-weight: 600;
    line-height: 100%;
    text-decoration: none;
  }

  .receiveCrypto_step2_actions-container {
    grid-row-gap: .75rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    text-decoration: none;
    display: flex;
  }

  .receiveCrypto_step2_actions-row {
    grid-column-gap: .75rem;
    justify-content: space-between;
    align-items: stretch;
    text-decoration: none;
    display: flex;
  }

  .receiveCrypto_step2_action {
    grid-row-gap: .5rem;
    background-color: #f9f9f9;
    border: .0625rem solid #ebebeb;
    border-radius: .5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-decoration: none;
    display: flex;
  }

  .receiveCrypto_step2_action-icon {
    object-fit: cover;
    width: 1.5rem;
    height: 1.5rem;
    overflow: hidden;
  }

  .receiveCrypto_step2_action-label {
    color: #1f1f1f;
    letter-spacing: -.04em;
    margin-top: 0;
    margin-bottom: 0;
    font-size: .875rem;
    font-weight: 600;
    line-height: 130%;
    text-decoration: none;
  }

  .receiveCrypto_step2_action-2 {
    grid-row-gap: .5rem;
    background-color: #f9f9f9;
    border: .125rem solid #f64c07;
    border-radius: .5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-decoration: none;
    display: flex;
    box-shadow: 0 .25rem .625rem #eb855c3d;
    cursor: pointer;
    transition: background-color 300ms ease;
  }

  .receiveCrypto_step2_action-2:hover {
    background-color: #f64c07;
    .receiveCrypto_step2_action-label {
    color: #fff;}
    .receiveCrypto_step2_action-icon {
    filter: brightness(10) saturate(1);
    }
  }

  .receiveCrypto_step2_cards-container {
    grid-row-gap: 1rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    text-decoration: none;
    display: flex;
  }

  .receiveCrypto_step2_card {
    object-fit: cover;
    background-color: #f1f1f1;
    border-radius: .75rem;
    justify-content: center;
    align-items: center;
    height: 4.375rem;
    text-decoration: none;
    display: flex;
  }
</style>

<div class="receiveCrypto_step2_canvas-wrap">
  <div data-sim-view class="receiveCrypto_step2_container">
    <div class="receiveCrypto_step2_container-2">
      <div class="receiveCrypto_step2_header-style">
        <div class="receiveCrypto_step2_icon-container">
          <div class="receiveCrypto_step2_icon"></div>
        </div>
        <div class="receiveCrypto_step2_icon-container-2">
          <div class="receiveCrypto_step2_icon-2"></div>
          <div class="receiveCrypto_step2_icon-2"></div>
          <div class="receiveCrypto_step2_icon-2"></div>
          <div class="receiveCrypto_step2_icon-2"></div>
        </div>
      </div>
      <div class="receiveCrypto_step2_balance-container">
        <div class="receiveCrypto_step2_balance">$0.00</div>
        <div class="receiveCrypto_step2_actions-container">
          <div class="receiveCrypto_step2_actions-row">
            <div class="receiveCrypto_step2_action">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="receiveCrypto_step2_action-icon">
                <path d="M19 9C19 7.93913 18.5786 6.92172 17.8284 6.17157C17.0783 5.42143 16.0609 5 15 5V3C15 2.73478 14.8946 2.48043 14.7071 2.29289C14.5196 2.10536 14.2652 2 14 2C13.7348 2 13.4804 2.10536 13.2929 2.29289C13.1054 2.48043 13 2.73478 13 3V5H11V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2C9.73478 2 9.48043 2.10536 9.29289 2.29289C9.10536 2.48043 9 2.73478 9 3V5H6C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6C5 6.26522 5.10536 6.51957 5.29289 6.70711C5.48043 6.89464 5.73478 7 6 7H7V17H6C5.73478 17 5.48043 17.1054 5.29289 17.2929C5.10536 17.4804 5 17.7348 5 18C5 18.2652 5.10536 18.5196 5.29289 18.7071C5.48043 18.8946 5.73478 19 6 19H9V21C9 21.2652 9.10536 21.5196 9.29289 21.7071C9.48043 21.8946 9.73478 22 10 22C10.2652 22 10.5196 21.8946 10.7071 21.7071C10.8946 21.5196 11 21.2652 11 21V19H13V21C13 21.2652 13.1054 21.5196 13.2929 21.7071C13.4804 21.8946 13.7348 22 14 22C14.2652 22 14.5196 21.8946 14.7071 21.7071C14.8946 21.5196 15 21.2652 15 21V19C15.8103 18.9948 16.5999 18.7436 17.2643 18.2797C17.9287 17.8159 18.4365 17.1611 18.7205 16.4022C19.0046 15.6433 19.0514 14.8161 18.8549 14.03C18.6584 13.2438 18.2278 12.5359 17.62 12C18.0503 11.627 18.396 11.1664 18.634 10.6491C18.872 10.1317 18.9968 9.56947 19 9V9ZM15 17H9V13H15C15.5304 13 16.0391 13.2107 16.4142 13.5858C16.7893 13.9609 17 14.4696 17 15C17 15.5304 16.7893 16.0391 16.4142 16.4142C16.0391 16.7893 15.5304 17 15 17ZM15 11H9V7H15C15.5304 7 16.0391 7.21071 16.4142 7.58579C16.7893 7.96086 17 8.46957 17 9C17 9.53043 16.7893 10.0391 16.4142 10.4142C16.0391 10.7893 15.5304 11 15 11Z" fill="#7A7A7A"></path>
              </svg>
              <div class="receiveCrypto_step2_action-label">Buy</div>
            </div>
            <div class="receiveCrypto_step2_action">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="receiveCrypto_step2_action-icon">
                <path d="M6 11C5.80222 11 5.60888 11.0586 5.44443 11.1685C5.27998 11.2784 5.15181 11.4346 5.07612 11.6173C5.00043 11.8 4.98063 12.0011 5.01922 12.1951C5.0578 12.3891 5.15304 12.5673 5.29289 12.7071C5.43275 12.847 5.61093 12.9422 5.80491 12.9808C5.99889 13.0194 6.19996 12.9996 6.38268 12.9239C6.56541 12.8482 6.72159 12.72 6.83147 12.5556C6.94135 12.3911 7 12.1978 7 12C7 11.7348 6.89464 11.4804 6.70711 11.2929C6.51957 11.1054 6.26522 11 6 11ZM18 11C17.8022 11 17.6089 11.0586 17.4444 11.1685C17.28 11.2784 17.1518 11.4346 17.0761 11.6173C17.0004 11.8 16.9806 12.0011 17.0192 12.1951C17.0578 12.3891 17.153 12.5673 17.2929 12.7071C17.4327 12.847 17.6109 12.9422 17.8049 12.9808C17.9989 13.0194 18.2 12.9996 18.3827 12.9239C18.5654 12.8482 18.7216 12.72 18.8315 12.5556C18.9414 12.3911 19 12.1978 19 12C19 11.7348 18.8946 11.4804 18.7071 11.2929C18.5196 11.1054 18.2652 11 18 11ZM20 5H4C3.20435 5 2.44129 5.31607 1.87868 5.87868C1.31607 6.44129 1 7.20435 1 8V16C1 16.7957 1.31607 17.5587 1.87868 18.1213C2.44129 18.6839 3.20435 19 4 19H20C20.7957 19 21.5587 18.6839 22.1213 18.1213C22.6839 17.5587 23 16.7957 23 16V8C23 7.20435 22.6839 6.44129 22.1213 5.87868C21.5587 5.31607 20.7957 5 20 5ZM21 16C21 16.2652 20.8946 16.5196 20.7071 16.7071C20.5196 16.8946 20.2652 17 20 17H4C3.73478 17 3.48043 16.8946 3.29289 16.7071C3.10536 16.5196 3 16.2652 3 16V8C3 7.73478 3.10536 7.48043 3.29289 7.29289C3.48043 7.10536 3.73478 7 4 7H20C20.2652 7 20.5196 7.10536 20.7071 7.29289C20.8946 7.48043 21 7.73478 21 8V16ZM12 9C11.4067 9 10.8266 9.17595 10.3333 9.50559C9.83994 9.83524 9.45543 10.3038 9.22836 10.852C9.0013 11.4001 8.94189 12.0033 9.05764 12.5853C9.1734 13.1672 9.45912 13.7018 9.87868 14.1213C10.2982 14.5409 10.8328 14.8266 11.4147 14.9424C11.9967 15.0581 12.5999 14.9987 13.1481 14.7716C13.6962 14.5446 14.1648 14.1601 14.4944 13.6667C14.8241 13.1734 15 12.5933 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7957 9 12 9ZM12 13C11.8022 13 11.6089 12.9414 11.4444 12.8315C11.28 12.7216 11.1518 12.5654 11.0761 12.3827C11.0004 12.2 10.9806 11.9989 11.0192 11.8049C11.0578 11.6109 11.153 11.4327 11.2929 11.2929C11.4327 11.153 11.6109 11.0578 11.8049 11.0192C11.9989 10.9806 12.2 11.0004 12.3827 11.0761C12.5654 11.1518 12.7216 11.28 12.8315 11.4444C12.9414 11.6089 13 11.8022 13 12C13 12.2652 12.8946 12.5196 12.7071 12.7071C12.5196 12.8946 12.2652 13 12 13Z" fill="#7A7A7A"></path>
              </svg>
              <div class="receiveCrypto_step2_action-label">Sell</div>
            </div>
            <div class="receiveCrypto_step2_action">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="receiveCrypto_step2_action-icon">
                <path d="M6.00053 12L3.26953 3.125C9.8024 5.025 15.9629 8.02646 21.4855 12C15.9632 15.9735 9.80306 18.9749 3.27053 20.875L6.00053 12ZM6.00053 12H13.5005" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <div class="receiveCrypto_step2_action-label">Send</div>
            </div>
            <div data-sim-trigger class="receiveCrypto_step2_action-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="receiveCrypto_step2_action-icon">
                <path d="M8 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V16C3 15.7348 2.89464 15.4804 2.70711 15.2929C2.51957 15.1054 2.26522 15 2 15C1.73478 15 1.48043 15.1054 1.29289 15.2929C1.10536 15.4804 1 15.7348 1 16V20C1 20.7957 1.31607 21.5587 1.87868 22.1213C2.44129 22.6839 3.20435 23 4 23H8C8.26522 23 8.51957 22.8946 8.70711 22.7071C8.89464 22.5196 9 22.2652 9 22C9 21.7348 8.89464 21.4804 8.70711 21.2929C8.51957 21.1054 8.26522 21 8 21V21ZM22 15C21.7348 15 21.4804 15.1054 21.2929 15.2929C21.1054 15.4804 21 15.7348 21 16V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H16C15.7348 21 15.4804 21.1054 15.2929 21.2929C15.1054 21.4804 15 21.7348 15 22C15 22.2652 15.1054 22.5196 15.2929 22.7071C15.4804 22.8946 15.7348 23 16 23H20C20.7957 23 21.5587 22.6839 22.1213 22.1213C22.6839 21.5587 23 20.7957 23 20V16C23 15.7348 22.8946 15.4804 22.7071 15.2929C22.5196 15.1054 22.2652 15 22 15ZM20 1H16C15.7348 1 15.4804 1.10536 15.2929 1.29289C15.1054 1.48043 15 1.73478 15 2C15 2.26522 15.1054 2.51957 15.2929 2.70711C15.4804 2.89464 15.7348 3 16 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V8C21 8.26522 21.1054 8.51957 21.2929 8.70711C21.4804 8.89464 21.7348 9 22 9C22.2652 9 22.5196 8.89464 22.7071 8.70711C22.8946 8.51957 23 8.26522 23 8V4C23 3.20435 22.6839 2.44129 22.1213 1.87868C21.5587 1.31607 20.7957 1 20 1V1ZM2 9C2.26522 9 2.51957 8.89464 2.70711 8.70711C2.89464 8.51957 3 8.26522 3 8V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H8C8.26522 3 8.51957 2.89464 8.70711 2.70711C8.89464 2.51957 9 2.26522 9 2C9 1.73478 8.89464 1.48043 8.70711 1.29289C8.51957 1.10536 8.26522 1 8 1H4C3.20435 1 2.44129 1.31607 1.87868 1.87868C1.31607 2.44129 1 3.20435 1 4V8C1 8.26522 1.10536 8.51957 1.29289 8.70711C1.48043 8.89464 1.73478 9 2 9ZM10 5H6C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6V10C5 10.2652 5.10536 10.5196 5.29289 10.7071C5.48043 10.8946 5.73478 11 6 11H10C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V6C11 5.73478 10.8946 5.48043 10.7071 5.29289C10.5196 5.10536 10.2652 5 10 5ZM9 9H7V7H9V9ZM14 11H18C18.2652 11 18.5196 10.8946 18.7071 10.7071C18.8946 10.5196 19 10.2652 19 10V6C19 5.73478 18.8946 5.48043 18.7071 5.29289C18.5196 5.10536 18.2652 5 18 5H14C13.7348 5 13.4804 5.10536 13.2929 5.29289C13.1054 5.48043 13 5.73478 13 6V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11ZM15 7H17V9H15V7ZM10 13H6C5.73478 13 5.48043 13.1054 5.29289 13.2929C5.10536 13.4804 5 13.7348 5 14V18C5 18.2652 5.10536 18.5196 5.29289 18.7071C5.48043 18.8946 5.73478 19 6 19H10C10.2652 19 10.5196 18.8946 10.7071 18.7071C10.8946 18.5196 11 18.2652 11 18V14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13ZM9 17H7V15H9V17ZM14 16C14.2652 16 14.5196 15.8946 14.7071 15.7071C14.8946 15.5196 15 15.2652 15 15C15.2652 15 15.5196 14.8946 15.7071 14.7071C15.8946 14.5196 16 14.2652 16 14C16 13.7348 15.8946 13.4804 15.7071 13.2929C15.5196 13.1054 15.2652 13 15 13H14C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14V15C13 15.2652 13.1054 15.5196 13.2929 15.7071C13.4804 15.8946 13.7348 16 14 16ZM18 13C17.7348 13 17.4804 13.1054 17.2929 13.2929C17.1054 13.4804 17 13.7348 17 14V17C16.7348 17 16.4804 17.1054 16.2929 17.2929C16.1054 17.4804 16 17.7348 16 18C16 18.2652 16.1054 18.5196 16.2929 18.7071C16.4804 18.8946 16.7348 19 17 19H18C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18V14C19 13.7348 18.8946 13.4804 18.7071 13.2929C18.5196 13.1054 18.2652 13 18 13ZM14 17C13.8022 17 13.6089 17.0587 13.4444 17.1685C13.28 17.2784 13.1518 17.4346 13.0761 17.6173C13.0004 17.8 12.9806 18.0011 13.0192 18.1951C13.0578 18.3891 13.153 18.5673 13.2929 18.7071C13.4327 18.847 13.6109 18.9422 13.8049 18.9808C13.9989 19.0194 14.2 18.9996 14.3827 18.9239C14.5654 18.8482 14.7216 18.72 14.8315 18.5556C14.9414 18.3911 15 18.1978 15 18C15 17.7348 14.8946 17.4804 14.7071 17.2929C14.5196 17.1054 14.2652 17 14 17Z" fill="#F64C07"></path>
              </svg>
              <div class="receiveCrypto_step2_action-label">Receive</div>
            </div>
          </div>
        </div>
      </div>
      <div class="receiveCrypto_step2_cards-container">
        <div class="receiveCrypto_step2_card"></div>
        <div class="receiveCrypto_step2_card"></div>
        <div class="receiveCrypto_step2_card"></div>
      </div>
    </div>
  </div>
</div>
    `;

    const view = rootEl.querySelector("[data-sim-view]");
    const trigger = rootEl.querySelector("[data-sim-trigger]");

    if (!view || !trigger) {
      console.warn("[receiveCrypto_step2] Missing required elements.");
      done?.();
      return;
    }

    // Initial state for fade-in / up
    if (gs) {
      gs.from(view, {
        opacity: 0,
        y: 100,
        rotate: 4,
        duration: 1,
        ease: "power2.out",
      });
    } else {
      view.style.opacity = "0";
      view.style.transform = "translateY(100px)";
      view.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
      requestAnimationFrame(() => {
        view.style.opacity = "1";
        view.style.transform = "translateY(0)";
      });
    }

    // Trigger click → complete step with micro button animation
    const handleTriggerClick = () => {
      if (gs) {
        gs.timeline({ defaults: { ease: "power2.out" } })
          .to(trigger, { scale: 0.96, duration: 0.12 })
          .to(trigger, { scale: 1, duration: 0.18 })
          .add(() => done(), "+=0.05");
      } else {
        done?.();
      }
    };

    trigger.addEventListener("click", handleTriggerClick);
  },
};
