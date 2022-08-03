class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        .footer-la-corrala {
            background-color: #575756;
            padding: 0 15px;
        }
        
        .footer-la-corrala span {
            color: #fff;
        }
        
        .footer-la-corrala h1, .footer-la-corrala h3 {
            color: #fff !important;
            text-align: left;
            margin: 15px 0 !important;
            padding: 4px 0 !important;
        }
        
        .footer-la-corrala-left {
            padding: 15px 30px 15px 30px;
        }
        
        .footer-la-corrala img {
            margin: 24px 0;
        }
        
        .footer-la-corrala a {
            color: transparent;
        }
        </style>
        <footer class="footer-la-corrala">
        <div class="row" style="align-items: center;">
            <div class="col-md-6">
                <div class="footer-la-corrala-left">
                    <h3 class="text-uppercase">Dónde encontrarnos</h3>
                    <span>Calle de Moratines, 9, 28005, Madrid</span>
                    <br>
                    <span>TLF: 919423651</span>
                    <h3 class="text-uppercase">Horario</h3>
                    <span>Lunes a Jueves : 9:00 - 00:00</span>
                    <br>
                    <span>Viernes : 9:00 - 01:00</span>
                    <br>
                    <span>Sábado : 10:00 - 01:00</span>
                    <br>
                    <span>Domingo : 10:00 - 16:00</span>
                    <h3 class="text-uppercase">Cómo llegar</h3>
                    <span>Metro embajadores</span>
                    <br>
                    <a href="https://www.instagram.com/lacorralaembajadores/" target="_blank">
                        <img src="./img/instagram_icon.svg" alt="instagram" style="margin-right: 8px;">
                    </a>
                    <a href="mailto:lacorraladeembajadores@hotmail.com" target="_blank" title="lacorraladeembajadores@hotmail.com">
                        <img src="./img/email_icon.svg" alt="email" style="margin-left: 8px; margin-top: 16px;">
                    </a>
                </div>
            </div>
            <div class="col-md-6">
                <div style="padding:30px;">
                    <iframe style="width: 100%;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.2475952309155!2d-3.704648085238054!3d40.40336546437721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42262d4e2822b9%3A0x5d5c942ef719282a!2sC.%20de%20Moratines%2C%209%2C%2028005%20Madrid!5e0!3m2!1ses!2ses!4v1659295523070!5m2!1ses!2ses" width="600" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);