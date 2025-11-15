// receiveCrypto_step4.module.js
export default {
  mount(rootEl, props = {}, callbacks = {}) {
    const { complete, resolve, onSuccess, next } = callbacks;
    const done = () => complete?.() || resolve?.() || onSuccess?.() || next?.();
    const gs = window.gsap || null;

    if (!rootEl) {
      console.warn("[receiveCrypto_step4] mount called without rootEl");
      done?.();
      return;
    }

    rootEl.innerHTML = `
<style>
  .receiveCrypto_step4_button-large {
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

  .receiveCrypto_step4_buttons-2 {
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

  .receiveCrypto_step4_canvas-wrap {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 854px;
    text-decoration: none;
    display: flex;
    overflow: hidden;
  }

  .receiveCrypto_step4_container {
    grid-row-gap: 40px;
    background-color: #fff;
    border-radius: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    text-decoration: none;
    display: flex;
    box-shadow: 0 4px 20px #0000001a;
  }

  .receiveCrypto_step4_title-style {
    color: #2f2f30;
    text-align: center;
    letter-spacing: -.04em;
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 130%;
    text-decoration: none;
  }

  .receiveCrypto_step4_frame-style {
    overflow: hidden;
  }

  .receiveCrypto_step4_frame-style-2 {
    object-fit: cover;
    overflow: hidden;
  }

  .receiveCrypto_step4_address-container {
    grid-column-gap: 24px;
    background-color: #f9f9f9;
    border: 1px solid #ebebeb;
    border-radius: 8px;
    flex: 0 auto;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 16px 24px;
    text-decoration: none;
    display: flex;
  }

  .receiveCrypto_step4_address-info {
    grid-row-gap: 8px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-decoration: none;
    display: flex;
  }

  .receiveCrypto_step4_label-style {
    color: #7a7a7a;
    letter-spacing: -.02em;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 500;
    line-height: 150%;
    text-decoration: none;
  }

  .receiveCrypto_step4_address-row {
    grid-column-gap: 16px;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    text-decoration: none;
    display: flex;
  }

  .receiveCrypto_step4_address {
    color: #1f1f1f;
    letter-spacing: -.04em;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 500;
    line-height: 130%;
    text-decoration: none;
  }

  .receiveCrypto_step4_copy-container {
    grid-column-gap: 10px;
    border: 2px solid #f64c07;
    border-radius: 8px;
    flex: 0 auto;
    justify-content: center;
    align-items: center;
    padding: 8px;
    text-decoration: none;
    display: flex;
    position: relative;
    box-shadow: 0 4px 10px #eb855c3d;
    cursor: pointer;
  }

  .receiveCrypto_step4_frame-qr {
    object-fit: cover;
    width: 232px;
    height: 232px;
    overflow: hidden;
  }

  .receiveCrypto_step4_copy-ico {
    flex: none;
    width: 24px;
    height: 24px;
  }

  .receiveCrypto_step4_copied-text {
    color: #8e8e8eff;
    background-color: #d8d8d8;
    border-radius: 8px;
    padding: 4px 8px;
    position: absolute;
    top: -40px;
    opacity: 0;
    transform: translateY(100%);
    pointer-events: none;
    font-size: 14px;
  }
</style>

<div class="receiveCrypto_step4_canvas-wrap">
  <div data-sim-view class="receiveCrypto_step4_container">
    <div class="receiveCrypto_step4_title-style">Recieve crypto</div>
    <div class="receiveCrypto_step4_frame-style">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 232 232" fill="none" class="receiveCrypto_step4_frame-qr">
<path d="M93.1201 0H83.8083V9.31185H93.1201V0Z" fill="black"/>
<path d="M139.681 0H130.369V9.31185H139.681V0Z" fill="black"/>
<path d="M158.299 0H148.987V9.31185H158.299V0Z" fill="black"/>
<path d="M83.8039 9.3104H74.492V18.6223H83.8039V9.3104Z" fill="black"/>
<path d="M93.1201 9.31185H83.8083V18.6223H93.1201V9.31185Z" fill="black"/>
<path d="M111.738 9.3104H102.426V18.6223H111.738V9.3104Z" fill="black"/>
<path d="M121.054 9.3104H111.742V18.6223H121.054V9.3104Z" fill="black"/>
<path d="M93.1201 18.6223H83.8083V27.9327H93.1201V18.6223Z" fill="black"/>
<path d="M102.431 18.6208H93.1187L93.1201 27.9327H102.431V18.6208Z" fill="black"/>
<path d="M111.738 18.6223H102.426V27.9327H111.738V18.6223Z" fill="black"/>
<path d="M83.8039 27.9429H74.492V37.2548H83.8039V27.9429Z" fill="black"/>
<path d="M93.1201 27.9429H83.8083V37.2548H93.1201V27.9429Z" fill="black"/>
<path d="M111.738 27.9429H102.426V37.2548H111.738V27.9429Z" fill="black"/>
<path d="M148.988 27.9429H139.677V37.2548H148.988V27.9429Z" fill="black"/>
<path d="M158.299 27.9429H148.988V37.2548H158.299V27.9429Z" fill="black"/>
<path d="M102.431 37.2533H93.1187V46.5652H102.431V37.2533Z" fill="black"/>
<path d="M121.054 37.2533H111.742V46.5652H121.054V37.2533Z" fill="black"/>
<path d="M130.365 37.2533H121.054V46.5652H130.365V37.2533Z" fill="black"/>
<path d="M158.299 37.2548L148.987 37.2533V46.5652H158.299V37.2548Z" fill="black"/>
<path d="M83.8039 46.5637H74.492V55.8756H83.8039V46.5637Z" fill="black"/>
<path d="M102.431 46.5652H93.1187V55.8756H102.431V46.5652Z" fill="black"/>
<path d="M130.365 46.5652L121.053 46.5637V55.8756H130.365V46.5652Z" fill="black"/>
<path d="M139.681 46.5637H130.369V55.8756H139.681V46.5637Z" fill="black"/>
<path d="M148.988 46.5637H139.677V55.8756H148.988V46.5637Z" fill="black"/>
<path d="M83.8039 55.8756H74.492V65.186H83.8039V55.8756Z" fill="black"/>
<path d="M102.431 55.8756H93.1187V65.186H102.431V55.8756Z" fill="black"/>
<path d="M121.054 55.8741H111.742V65.186H121.054V55.8741Z" fill="black"/>
<path d="M139.681 55.8756H130.369V65.186H139.681V55.8756Z" fill="black"/>
<path d="M158.299 55.8741H148.987V65.186H158.299V55.8741Z" fill="black"/>
<path d="M121.054 65.1787H111.742V74.4905H121.054V65.1787Z" fill="black"/>
<path d="M130.365 65.1787H121.054V74.4905H130.365V65.1787Z" fill="black"/>
<path d="M158.299 65.1787H148.987V74.4905H158.299V65.1787Z" fill="black"/>
<path d="M9.31185 74.5008H0V83.8126H9.31185V74.5008Z" fill="black"/>
<path d="M18.6223 74.5008H9.31185V83.8126H18.6223V74.5008Z" fill="black"/>
<path d="M27.9356 74.5008H18.6223V83.8126H27.9356V74.5008Z" fill="black"/>
<path d="M37.246 74.5008H27.9356V83.8126H37.246V74.5008Z" fill="black"/>
<path d="M46.5622 74.5008H37.2504V83.8126H46.5622V74.5008Z" fill="black"/>
<path d="M65.1801 74.5008H55.8683V83.8126H65.1801V74.5008Z" fill="black"/>
<path d="M74.4964 74.5008H65.1845V83.8126H74.4964V74.5008Z" fill="black"/>
<path d="M83.8039 74.5008H74.492V83.8126H83.8039V74.5008Z" fill="black"/>
<path d="M93.1201 74.5008H83.8083V83.8126H93.1201V74.5008Z" fill="black"/>
<path d="M102.431 74.5008H93.1201V83.8126H102.431V74.5008Z" fill="black"/>
<path d="M121.054 74.5008H111.742V83.8126H121.054V74.5008Z" fill="black"/>
<path d="M139.681 74.5008H130.369V83.8126H139.681V74.5008Z" fill="black"/>
<path d="M148.988 74.5008H139.677V83.8126H148.988V74.5008Z" fill="black"/>
<path d="M167.615 74.5008H158.303V83.8126H167.615V74.5008Z" fill="black"/>
<path d="M186.239 74.5008H176.927V83.8126H186.239V74.5008Z" fill="black"/>
<path d="M204.857 74.5008H195.545V83.8126H204.857V74.5008Z" fill="black"/>
<path d="M223.483 74.5008H214.171V83.8126H223.483V74.5008Z" fill="black"/>
<path d="M46.5622 83.8126H37.2504V93.123H46.5622V83.8126Z" fill="black"/>
<path d="M93.1201 83.8126H83.8083V93.123H93.1201V83.8126Z" fill="black"/>
<path d="M167.615 83.8126H158.303V93.123H167.615V83.8126Z" fill="black"/>
<path d="M186.239 83.8126H176.927V93.123H186.239V83.8126Z" fill="black"/>
<path d="M195.549 83.8112H186.237L186.239 93.123H195.549V83.8112Z" fill="black"/>
<path d="M232.797 83.8112H223.485V93.123H232.797V83.8112Z" fill="black"/>
<path d="M55.8697 93.1216H46.5579V102.433H55.8697V93.1216Z" fill="black"/>
<path d="M65.1801 93.1216H55.8697V102.433H65.1801V93.1216Z" fill="black"/>
<path d="M93.1201 93.123H83.8083V102.433H93.1201V93.123Z" fill="black"/>
<path d="M111.738 93.1216H102.426V102.433H111.738V93.1216Z" fill="black"/>
<path d="M121.054 93.1216H111.742V102.433H121.054V93.1216Z" fill="black"/>
<path d="M148.988 93.1216H139.677V102.433H148.988V93.1216Z" fill="black"/>
<path d="M158.299 93.1216H148.988V102.433H158.299V93.1216Z" fill="black"/>
<path d="M167.615 93.123H158.303V102.433H167.615V93.123Z" fill="black"/>
<path d="M176.923 93.1216H167.611V102.433H176.923V93.1216Z" fill="black"/>
<path d="M195.549 93.123L186.237 93.1216V102.433H195.549V93.123Z" fill="black"/>
<path d="M214.173 93.1216H204.861V102.433H214.173V93.1216Z" fill="black"/>
<path d="M9.31185 102.432H0V111.744H9.31185V102.432Z" fill="black"/>
<path d="M18.6223 102.432H9.31185V111.744H18.6223V102.432Z" fill="black"/>
<path d="M27.9356 102.432H18.6223V111.744H27.9356V102.432Z" fill="black"/>
<path d="M46.5622 102.432H37.2504V111.744H46.5622V102.432Z" fill="black"/>
<path d="M83.8039 102.432H74.492V111.744H83.8039V102.432Z" fill="black"/>
<path d="M93.1201 102.433H83.8083V111.744H93.1201V102.433Z" fill="black"/>
<path d="M102.431 102.432H93.1187L93.1201 111.744H102.431V102.432Z" fill="black"/>
<path d="M111.738 102.433H102.426V111.744H111.738V102.433Z" fill="black"/>
<path d="M139.681 102.432H130.369V111.744H139.681V102.432Z" fill="black"/>
<path d="M158.299 102.433L148.987 102.432V111.744H158.299V102.433Z" fill="black"/>
<path d="M37.246 111.742H27.9341V121.054H37.246V111.742Z" fill="black"/>
<path d="M46.5622 111.744H37.2504V121.054H46.5622V111.744Z" fill="black"/>
<path d="M65.1801 111.742H55.8683V121.054H65.1801V111.742Z" fill="black"/>
<path d="M93.1201 111.744H83.8083V121.054H93.1201V111.744Z" fill="black"/>
<path d="M111.738 111.744H102.426V121.054H111.738V111.744Z" fill="black"/>
<path d="M148.988 111.742H139.677V121.054H148.988V111.742Z" fill="black"/>
<path d="M158.299 111.744H148.987L148.988 121.054H158.299V111.744Z" fill="black"/>
<path d="M167.615 111.742H158.303V121.054H167.615V111.742Z" fill="black"/>
<path d="M186.239 111.742H176.927V121.054H186.239V111.742Z" fill="black"/>
<path d="M195.549 111.742H186.239V121.054H195.549V111.742Z" fill="black"/>
<path d="M204.857 111.742H195.545V121.054H204.857V111.742Z" fill="black"/>
<path d="M223.483 111.742H214.171V121.054H223.483V111.742Z" fill="black"/>
<path d="M232.797 111.742H223.483V121.054H232.797V111.742Z" fill="black"/>
<path d="M9.31185 121.059H0V130.371H9.31185V121.059Z" fill="black"/>
<path d="M27.9356 121.059H18.6237V130.371H27.9356V121.059Z" fill="black"/>
<path d="M83.8039 121.059H74.492V130.371H83.8039V121.059Z" fill="black"/>
<path d="M93.1201 121.059H83.8083V130.371H93.1201V121.059Z" fill="black"/>
<path d="M102.431 121.059H93.1201V130.371H102.431V121.059Z" fill="black"/>
<path d="M121.054 121.059H111.742V130.371H121.054V121.059Z" fill="black"/>
<path d="M130.365 121.059H121.054V130.371H130.365V121.059Z" fill="black"/>
<path d="M139.681 121.059H130.369V130.371H139.681V121.059Z" fill="black"/>
<path d="M158.299 121.059H148.987V130.371H158.299V121.059Z" fill="black"/>
<path d="M186.239 121.059H176.927V130.371H186.239V121.059Z" fill="black"/>
<path d="M195.549 121.059H186.239V130.371H195.549V121.059Z" fill="black"/>
<path d="M232.797 121.059H223.485V130.371H232.797V121.059Z" fill="black"/>
<path d="M9.31185 130.371H0V139.681H9.31185V130.371Z" fill="black"/>
<path d="M27.9356 130.371H18.6237V139.681H27.9356V130.371Z" fill="black"/>
<path d="M37.246 130.369H27.9341L27.9356 139.681H37.246V130.369Z" fill="black"/>
<path d="M46.5622 130.369H37.2504V139.681H46.5622V130.369Z" fill="black"/>
<path d="M55.8697 130.369H46.5579V139.681H55.8697V130.369Z" fill="black"/>
<path d="M65.1801 130.369H55.8697V139.681H65.1801V130.369Z" fill="black"/>
<path d="M74.4964 130.369H65.1845V139.681H74.4964V130.369Z" fill="black"/>
<path d="M102.431 130.371L93.1187 130.369V139.681H102.431V130.371Z" fill="black"/>
<path d="M130.365 130.371L121.053 130.369V139.681H130.365V130.371Z" fill="black"/>
<path d="M139.681 130.371H130.369V139.681H139.681V130.371Z" fill="black"/>
<path d="M167.615 130.369H158.303V139.681H167.615V130.369Z" fill="black"/>
<path d="M176.923 130.369H167.611V139.681H176.923V130.369Z" fill="black"/>
<path d="M195.549 130.371L186.237 130.369V139.681H195.549V130.371Z" fill="black"/>
<path d="M214.173 130.369H204.861V139.681H214.173V130.369Z" fill="black"/>
<path d="M232.797 130.371H223.485V139.681H232.797V130.371Z" fill="black"/>
<path d="M9.31185 139.681H0V148.991H9.31185V139.681Z" fill="black"/>
<path d="M27.9356 139.681H18.6237V148.991H27.9356V139.681Z" fill="black"/>
<path d="M37.246 139.681L27.9341 139.679L27.9356 148.991H37.246V139.681Z" fill="black"/>
<path d="M46.5622 139.681H37.2504V148.991H46.5622V139.681Z" fill="black"/>
<path d="M55.8697 139.681H46.5579V148.991H55.8697V139.681Z" fill="black"/>
<path d="M121.054 139.679H111.742V148.991H121.054V139.679Z" fill="black"/>
<path d="M130.365 139.681H121.053L121.054 148.991H130.365V139.681Z" fill="black"/>
<path d="M158.299 139.679H148.987V148.991H158.299V139.679Z" fill="black"/>
<path d="M223.483 139.679H214.171V148.991H223.483V139.679Z" fill="black"/>
<path d="M232.797 139.681H223.485L223.483 148.991H232.797V139.681Z" fill="black"/>
<path d="M9.31185 148.991H0V158.302H9.31185V148.991Z" fill="black"/>
<path d="M27.9356 148.991H18.6237V158.302H27.9356V148.991Z" fill="black"/>
<path d="M37.246 148.991L27.9341 148.99L27.9356 158.302H37.246V148.991Z" fill="black"/>
<path d="M55.8697 148.991H46.5579V158.302H55.8697V148.991Z" fill="black"/>
<path d="M65.1801 148.99H55.8683L55.8697 158.302H65.1801V148.99Z" fill="black"/>
<path d="M83.8039 148.99H74.492V158.302H83.8039V148.99Z" fill="black"/>
<path d="M93.1201 148.99H83.8083V158.302H93.1201V148.99Z" fill="black"/>
<path d="M121.054 148.991H111.742V158.302H121.054V148.991Z" fill="black"/>
<path d="M139.681 148.99H130.369V158.302H139.681V148.99Z" fill="black"/>
<path d="M148.988 148.99H139.677V158.302H148.988V148.99Z" fill="black"/>
<path d="M158.299 148.991H148.987L148.988 158.302H158.299V148.991Z" fill="black"/>
<path d="M167.615 148.99H158.303V158.302H167.615V148.99Z" fill="black"/>
<path d="M176.923 148.99H167.611V158.302H176.923V148.99Z" fill="black"/>
<path d="M186.239 148.99H176.927V158.302H186.239V148.99Z" fill="black"/>
<path d="M195.549 148.99H186.239V158.302H195.549V148.99Z" fill="black"/>
<path d="M204.857 148.99H195.545V158.302H204.857V148.99Z" fill="black"/>
<path d="M232.797 148.991L223.485 148.99V158.302H232.797V148.991Z" fill="black"/>
<path d="M83.8039 158.302H74.492V167.612H83.8039V158.302Z" fill="black"/>
<path d="M93.1201 158.302H83.8083V167.612H93.1201V158.302Z" fill="black"/>
<path d="M102.431 158.3H93.1187L93.1201 167.612H102.431V158.3Z" fill="black"/>
<path d="M148.988 158.302H139.677V167.612H148.988V158.302Z" fill="black"/>
<path d="M158.299 158.302L148.987 158.3L148.988 167.612H158.299V158.302Z" fill="black"/>
<path d="M195.549 158.302L186.237 158.3V167.612H195.549V158.302Z" fill="black"/>
<path d="M232.797 158.302H223.485V167.612H232.797V158.302Z" fill="black"/>
<path d="M83.8039 167.622H74.492V176.934H83.8039V167.622Z" fill="black"/>
<path d="M93.1201 167.622H83.8083V176.934H93.1201V167.622Z" fill="black"/>
<path d="M111.738 167.622H102.426V176.934H111.738V167.622Z" fill="black"/>
<path d="M121.054 167.622H111.742V176.934H121.054V167.622Z" fill="black"/>
<path d="M158.299 167.622H148.987V176.934H158.299V167.622Z" fill="black"/>
<path d="M176.923 167.622H167.611V176.934H176.923V167.622Z" fill="black"/>
<path d="M195.549 167.622H186.237V176.934H195.549V167.622Z" fill="black"/>
<path d="M214.173 167.622H204.861V176.934H214.173V167.622Z" fill="black"/>
<path d="M223.483 167.622H214.173V176.934H223.483V167.622Z" fill="black"/>
<path d="M232.797 167.622H223.483V176.934H232.797V167.622Z" fill="black"/>
<path d="M93.1201 176.927H83.8083V186.239H93.1201V176.927Z" fill="black"/>
<path d="M111.738 176.927H102.426V186.239H111.738V176.927Z" fill="black"/>
<path d="M139.681 176.927H130.369V186.239H139.681V176.927Z" fill="black"/>
<path d="M158.299 176.927H148.987V186.239H158.299V176.927Z" fill="black"/>
<path d="M195.549 176.927H186.237V186.239H195.549V176.927Z" fill="black"/>
<path d="M204.857 176.927H195.545V186.239H204.857V176.927Z" fill="black"/>
<path d="M83.8039 186.237H74.492V195.549H83.8039V186.237Z" fill="black"/>
<path d="M93.1201 186.239H83.8083V195.549H93.1201V186.239Z" fill="black"/>
<path d="M111.738 186.239H102.426V195.549H111.738V186.239Z" fill="black"/>
<path d="M158.299 186.239H148.987V195.549H158.299V186.239Z" fill="black"/>
<path d="M167.615 186.237H158.303V195.549H167.615V186.237Z" fill="black"/>
<path d="M176.923 186.237H167.611V195.549H176.923V186.237Z" fill="black"/>
<path d="M186.239 186.237H176.927V195.549H186.239V186.237Z" fill="black"/>
<path d="M195.549 186.239H186.237L186.239 195.549H195.549V186.239Z" fill="black"/>
<path d="M204.857 186.239H195.545V195.549H204.857V186.239Z" fill="black"/>
<path d="M83.8039 195.549H74.492V204.86H83.8039V195.549Z" fill="black"/>
<path d="M121.054 195.548H111.742V204.86H121.054V195.548Z" fill="black"/>
<path d="M130.365 195.548H121.054V204.86H130.365V195.548Z" fill="black"/>
<path d="M139.681 195.548H130.369V204.86H139.681V195.548Z" fill="black"/>
<path d="M148.988 195.548H139.677V204.86H148.988V195.548Z" fill="black"/>
<path d="M158.299 195.549H148.987L148.988 204.86H158.299V195.549Z" fill="black"/>
<path d="M176.923 195.549H167.611V204.86H176.923V195.549Z" fill="black"/>
<path d="M195.549 195.549L186.237 195.548V204.86H195.549V195.549Z" fill="black"/>
<path d="M223.483 195.548H214.171V204.86H223.483V195.548Z" fill="black"/>
<path d="M232.797 195.548H223.483V204.86H232.797V195.548Z" fill="black"/>
<path d="M83.8039 204.86H74.492V214.17H83.8039V204.86Z" fill="black"/>
<path d="M93.1201 204.858H83.8083V214.17H93.1201V204.858Z" fill="black"/>
<path d="M130.365 204.86L121.053 204.858V214.17H130.365V204.86Z" fill="black"/>
<path d="M139.681 204.86H130.369V214.17H139.681V204.86Z" fill="black"/>
<path d="M148.988 204.86H139.677V214.17H148.988V204.86Z" fill="black"/>
<path d="M167.615 204.858H158.303V214.17H167.615V204.858Z" fill="black"/>
<path d="M195.549 204.86H186.237V214.17H195.549V204.86Z" fill="black"/>
<path d="M214.173 204.858H204.861V214.17H214.173V204.858Z" fill="black"/>
<path d="M232.797 204.86L223.485 204.858V214.17H232.797V204.86Z" fill="black"/>
<path d="M83.8039 214.18H74.492V223.492H83.8039V214.18Z" fill="black"/>
<path d="M93.1201 214.18H83.8083V223.492H93.1201V214.18Z" fill="black"/>
<path d="M121.054 214.18H111.742V223.492H121.054V214.18Z" fill="black"/>
<path d="M130.365 214.18H121.054V223.492H130.365V214.18Z" fill="black"/>
<path d="M167.615 214.18H158.303V223.492H167.615V214.18Z" fill="black"/>
<path d="M176.923 214.18H167.611V223.492H176.923V214.18Z" fill="black"/>
<path d="M186.239 214.18H176.927V223.492H186.239V214.18Z" fill="black"/>
<path d="M195.549 214.18H186.239V223.492H195.549V214.18Z" fill="black"/>
<path d="M204.857 214.18H195.545V223.492H204.857V214.18Z" fill="black"/>
<path d="M223.483 214.18H214.171V223.492H223.483V214.18Z" fill="black"/>
<path d="M83.8039 223.492H74.492V232.803H83.8039V223.492Z" fill="black"/>
<path d="M93.1201 223.492H83.8083V232.803H93.1201V223.492Z" fill="black"/>
<path d="M102.431 223.491H93.1187L93.1201 232.803H102.431V223.491Z" fill="black"/>
<path d="M121.054 223.492H111.742V232.803H121.054V223.492Z" fill="black"/>
<path d="M139.681 223.491H130.369V232.803H139.681V223.491Z" fill="black"/>
<path d="M148.988 223.491H139.677V232.803H148.988V223.491Z" fill="black"/>
<path d="M214.173 223.491H204.861V232.803H214.173V223.491Z" fill="black"/>
<path d="M223.483 223.492H214.171L214.173 232.803H223.483V223.492Z" fill="black"/>
<path d="M232.797 223.491H223.485L223.483 232.803H232.797V223.491Z" fill="black"/>
<path d="M0.0903501 0.00234371V65.1851H65.2733V0.00234371H0.0903501ZM55.9615 55.8733H9.40227V9.31417H55.9615V55.8733Z" fill="black"/>
<path d="M18.6243 18.6215V46.557H46.5596V18.6215H18.6243Z" fill="black"/>
<path d="M167.703 0.00234371V65.1851H232.886V0.00234371H167.703ZM223.574 55.8733H177.015V9.31417H223.574V55.8733Z" fill="black"/>
<path d="M186.236 18.6215V46.557H214.172V18.6215H186.236Z" fill="black"/>
<path d="M0.0903501 167.62V232.803H65.2733V167.62H0.0903501ZM55.9615 223.491H9.40227V176.932H55.9615V223.491Z" fill="black"/>
<path d="M18.6243 186.239V214.175H46.5596V186.239H18.6243Z" fill="black"/>
</svg>

    </div>
    <div class="receiveCrypto_step4_address-container">
      <div class="receiveCrypto_step4_address-info">
        <div class="receiveCrypto_step4_label-style">Address</div>
        <div class="receiveCrypto_step4_address-row">
          <div class="receiveCrypto_step4_address">
            0x415e4b9cc2f1347d90fa8d2c88d19ae7bcf28940e
          </div>
          <div data-sim-trigger class="receiveCrypto_step4_copy-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="receiveCrypto_step4_copy-ico">
              <path d="M21 8.94C20.9896 8.84813 20.9695 8.75763 20.94 8.67V8.58C20.8919 8.47718 20.8278 8.38266 20.75 8.3V8.3L14.75 2.3C14.6673 2.22222 14.5728 2.15808 14.47 2.11C14.4402 2.10576 14.4099 2.10576 14.38 2.11C14.2784 2.05174 14.1662 2.01434 14.05 2H10C9.20435 2 8.44129 2.31607 7.87868 2.87868C7.31607 3.44129 7 4.20435 7 5V6H6C5.20435 6 4.44129 6.31607 3.87868 6.87868C3.31607 7.44129 3 8.20435 3 9V19C3 19.7956 3.31607 20.5587 3.87868 21.1213C4.44129 21.6839 5.20435 22 6 22H14C14.7957 22 15.5587 21.6839 16.1213 21.1213C16.6839 20.5587 17 19.7956 17 19V18H18C18.7957 18 19.5587 17.6839 20.1213 17.1213C20.6839 16.5587 21 15.7956 21 15V9C21 9 21 9 21 8.94ZM15 5.41L17.59 8H16C15.7348 8 15.4804 7.89464 15.2929 7.70711C15.1054 7.51957 15 7.26522 15 7V5.41ZM15 19C15 19.2652 14.8946 19.5196 14.7071 19.7071C14.5196 19.8946 14.2652 20 14 20H6C5.73478 20 5.48043 19.8946 5.29289 19.7071C5.10536 19.5196 5 19.2652 5 19V9C5 8.73478 5.10536 8.48043 5.29289 8.29289C5.48043 8.10536 5.73478 8 6 8H7V15C7 15.7956 7.31607 16.5587 7.87868 17.1213C8.44129 17.6839 9.20435 18 10 18H15V19ZM19 15C19 15.2652 18.8946 15.5196 18.7071 15.7071C18.5196 15.8946 18.2652 16 18 16H10C9.73478 16 9.48043 15.8946 9.29289 15.7071C9.10536 15.5196 9 15.2652 9 15V5C9 4.73478 9.10536 4.48043 9.29289 4.29289C9.48043 4.10536 9.73478 4 10 4H13V7C13 7.79565 13.3161 8.55871 13.8787 9.12132C14.4413 9.68393 15.2044 10 16 10H19V15Z" fill="#A3A3A3"></path>
            </svg>
            <div data-sim-copy-toast class="receiveCrypto_step4_copied-text">
              Copied!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    `;

    const view = rootEl.querySelector("[data-sim-view]");
    const trigger = rootEl.querySelector("[data-sim-trigger]");
    const toast = rootEl.querySelector("[data-sim-copy-toast]");

    if (!view || !trigger || !toast) {
      console.warn("[receiveCrypto_step4] Missing required elements.");
      done?.();
      return;
    }

    // Fade in + up on mount
    if (gs) {
      gs.from(view, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
      });
    } else {
      view.style.opacity = "0";
      view.style.transform = "translateY(40px)";
      view.style.transition = "opacity 1s ease-out, transform 0.6s ease-out";
      requestAnimationFrame(() => {
        view.style.opacity = "1";
        view.style.transform = "translateY(0)";
      });
    }

    const handleTriggerClick = () => {
      if (gs) {
        const tl = gs.timeline({ defaults: { ease: "power2.out" } });

        tl.to(trigger, { scale: 0.94, duration: 0.2 })
          .to(trigger, { scale: 1, duration: 0.18 }, "-=0.05")
          .fromTo(
            toast,
            { opacity: 0, y: "100%" },
            { opacity: 1, y: "0%", duration: 0.25 },
            0
          )
          .to(toast, {
            opacity: 0,
            y: "100%",
            duration: 0.4,
            delay: 0.8,
          })
          .add(() => done(), "+=0.05");
      } else {
        // Fallback without GSAP
        toast.style.transition =
          "opacity 0.25s ease-out, transform 0.25s ease-out";
        toast.style.opacity = "1";
        toast.style.transform = "translateY(0%)";

        setTimeout(() => {
          toast.style.opacity = "0";
          toast.style.transform = "translateY(100%)";
        }, 1050);

        setTimeout(() => {
          done?.();
        }, 1350);
      }
    };

    trigger.addEventListener("click", handleTriggerClick);
  },
};
