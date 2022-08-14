class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <style>
      .div-links-menu-navigation{
        text-align: center;
        padding: 15px;
      }
      
      .span-menu-navigation {
          color: #fff;
          font-weight: 500;
          font-size: 20px;
      }
      
      .isologo-navbar {
          width: 50px; 
          height: 50px;
      }
      
      #svgMenuList {
          width: 23px;
      }
      
      #btnCloseModalNavbar {
          width: 20px;
      }
      
      .navbar-la-corrala{
          padding: 10px 0;
      }
      .modal.fade.modal-right .modal-dialog {
        transform: translate(125%, 0px);
      }
      
      .modal.show.modal-right .modal-dialog {
        transform: none;
      }

      #navbarLaCorrala {
        background-color: transparent !important;
      }

      #navbarLaCorrala.new-color{
        background-color: #326e7b !important;
      }

      @media(max-width: 768px){
        .isologo-navbar {
          width: 35px; 
          height: 35px;
        }

        .span-menu-navigation {
            font-size: 16px;
        }

        #svgMenuList {
            width: 20px;
        }

        #btnCloseModalNavbar {
            width: 16px;
        }

        .navbar-la-corrala{
            padding: 10px 0;
        }
      }
      </style>
      <header>
      <nav id="navbarLaCorrala" class="navbar fixed-top navbar-light bg-light navbar-la-corrala" >
          <div class="container-fluid">
            <a class="navbar-brand" href="./index.html" style="margin-left: 20px;">
              <img src="./Isologo_final_blanco.svg" alt="logo" class="isologo-navbar">
            </a>
            <button data-bs-toggle="modal" data-bs-target="#navigationMenu" style="border: none; background: transparent; margin-right: 10px; padding: 9px;">
              <svg id="svgMenuList" width="23" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 18.1481C0 17.8779 0.124513 17.6189 0.346147 17.4279C0.567781 17.2369 0.86838 17.1295 1.18182 17.1295H24.8182C25.1316 17.1295 25.4322 17.2369 25.6539 17.4279C25.8755 17.6189 26 17.8779 26 18.1481C26 18.4182 25.8755 18.6773 25.6539 18.8683C25.4322 19.0593 25.1316 19.1666 24.8182 19.1666H1.18182C0.86838 19.1666 0.567781 19.0593 0.346147 18.8683C0.124513 18.6773 0 18.4182 0 18.1481ZM0 9.99992C0 9.72979 0.124513 9.47073 0.346147 9.27972C0.567781 9.08871 0.86838 8.9814 1.18182 8.9814H24.8182C25.1316 8.9814 25.4322 9.08871 25.6539 9.27972C25.8755 9.47073 26 9.72979 26 9.99992C26 10.27 25.8755 10.5291 25.6539 10.7201C25.4322 10.9111 25.1316 11.0184 24.8182 11.0184H1.18182C0.86838 11.0184 0.567781 10.9111 0.346147 10.7201C0.124513 10.5291 0 10.27 0 9.99992ZM0 1.85177C0 1.58164 0.124513 1.32258 0.346147 1.13157C0.567781 0.94056 0.86838 0.833252 1.18182 0.833252H24.8182C25.1316 0.833252 25.4322 0.94056 25.6539 1.13157C25.8755 1.32258 26 1.58164 26 1.85177C26 2.1219 25.8755 2.38096 25.6539 2.57197C25.4322 2.76298 25.1316 2.87029 24.8182 2.87029H1.18182C0.86838 2.87029 0.567781 2.76298 0.346147 2.57197C0.124513 2.38096 0 2.1219 0 1.85177V1.85177Z" fill="white"/>
                </svg>
            </button>
          </div>
        </nav>
        <div class="modal fade modal-right" id="navigationMenu" tabindex="-1" aria-labelledby="navigationMenuLabel" aria-hidden="true">
          <div class="modal-dialog modal-fullscreen">
            <div class="modal-content" style="background-color: #575756;">
              <div class="modal-header" style="border-bottom: none; padding: 25px;">
                <a href="./index.html">
                  <img src="./Isologo_final_blanco.svg" alt="logo" class="isologo-navbar">
                </a>
                <button type="button" style="margin-right: 5px; padding:10px; background-color: transparent; border: none;" data-bs-dismiss="modal" aria-label="Close">
                  <svg id="btnCloseModalNavbar" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.293232 1.70908C0.200266 1.61612 0.126522 1.50575 0.0762087 1.38428C0.0258958 1.26282 9.79557e-10 1.13263 0 1.00116C-9.79557e-10 0.869684 0.0258958 0.739497 0.0762087 0.618031C0.126522 0.496565 0.200266 0.386198 0.293232 0.293232C0.386198 0.200266 0.496565 0.126522 0.618031 0.0762087C0.739497 0.0258958 0.869684 -9.79557e-10 1.00116 0C1.13263 9.79557e-10 1.26282 0.0258958 1.38428 0.0762087C1.50575 0.126522 1.61612 0.200266 1.70908 0.293232L12 10.5861L22.2909 0.293232C22.3839 0.200266 22.4942 0.126522 22.6157 0.0762087C22.7372 0.0258958 22.8674 0 22.9988 0C23.1303 0 23.2605 0.0258958 23.382 0.0762087C23.5034 0.126522 23.6138 0.200266 23.7068 0.293232C23.7997 0.386198 23.8735 0.496565 23.9238 0.618031C23.9741 0.739497 24 0.869684 24 1.00116C24 1.13263 23.9741 1.26282 23.9238 1.38428C23.8735 1.50575 23.7997 1.61612 23.7068 1.70908L13.4139 12L23.7068 22.2909C23.7997 22.3839 23.8735 22.4942 23.9238 22.6157C23.9741 22.7372 24 22.8674 24 22.9988C24 23.1303 23.9741 23.2605 23.9238 23.382C23.8735 23.5034 23.7997 23.6138 23.7068 23.7068C23.6138 23.7997 23.5034 23.8735 23.382 23.9238C23.2605 23.9741 23.1303 24 22.9988 24C22.8674 24 22.7372 23.9741 22.6157 23.9238C22.4942 23.8735 22.3839 23.7997 22.2909 23.7068L12 13.4139L1.70908 23.7068C1.61612 23.7997 1.50575 23.8735 1.38428 23.9238C1.26282 23.9741 1.13263 24 1.00116 24C0.869684 24 0.739497 23.9741 0.618031 23.9238C0.496565 23.8735 0.386198 23.7997 0.293232 23.7068C0.200266 23.6138 0.126522 23.5034 0.0762087 23.382C0.0258958 23.2605 0 23.1303 0 22.9988C0 22.8674 0.0258958 22.7372 0.0762087 22.6157C0.126522 22.4942 0.200266 22.3839 0.293232 22.2909L10.5861 12L0.293232 1.70908Z" fill="white"/>
                  </svg>
                </button>
              </div>
              <div class="modal-body">
                <div class="div-links-menu-navigation">
                  <a href="./index.html" style="text-decoration: none;">
                    <span class="text-uppercase span-menu-navigation">Inicio</span>
                  </a>
                </div>
                <div class="div-links-menu-navigation">
                  <a href="./carta.html" style="text-decoration: none;">
                    <span class="text-uppercase span-menu-navigation">La carta</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
  </header>`;
    }
  }
  
  customElements.define('header-component', Header);