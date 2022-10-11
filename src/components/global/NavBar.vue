<template>
  <header class="site-header">
    <div class="container">
      <div class="header-logo">
        <span class="navbar-item">
          <div
            class="hamburger-menu"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-menu"
            @click="handleHamburger"
          >
            <svg
              class="mobile-hamburger svg-inline"
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="bars"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M0 80C0 71.16 7.164 64 16 64H432C440.8 64 448 71.16 448 80C448 88.84 440.8 96 432 96H16C7.164 96 0 88.84 0 80zM0 240C0 231.2 7.164 224 16 224H432C440.8 224 448 231.2 448 240C448 248.8 440.8 256 432 256H16C7.164 256 0 248.8 0 240zM432 416H16C7.164 416 0 408.8 0 400C0 391.2 7.164 384 16 384H432C440.8 384 448 391.2 448 400C448 408.8 440.8 416 432 416z"
              ></path>
            </svg>
          </div>
          <router-link to="/home">
            <picture>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="minlogo"
                viewBox="0 0 170.73 171.36"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      class="cls-3"
                      d="M117.37,25.21c-3.74,4.9-6.87,9.22-10.31,13.28-.64.75-2.69,1-3.79.6-16.6-5.81-32.42-3.89-46.5,6.28-15.86,11.47-23,27.48-20.06,47.12,3.33,22,17.53,36.85,39.22,41.64a46.87,46.87,0,0,0,26.73-2.2c2.5-.92,3.93-.69,5.49,1.67,2.65,4,5.76,7.74,9.15,12.21-4.18,1.62-7.88,3.27-11.71,4.46-2.53.79-3.68,2-3.73,4.72-.07,3.85-.55,7.68-.71,11.53-.12,3.09-1.83,4.68-4.66,4.74-7.23.15-14.46.12-21.69,0-3.74,0-4.66-2.84-5-5.86-.39-4-.44-8-.95-11.89a4.24,4.24,0,0,0-2.24-2.7c-4.51-2.06-9.09-4-13.75-5.67a5.12,5.12,0,0,0-4.17.57c-3.06,2.32-5.78,5.1-8.72,7.6-3.41,2.89-5.24,2.83-8.37-.26-4.61-4.55-9.14-9.18-13.75-13.73-2.57-2.53-2.9-5-.34-7.78a116.48,116.48,0,0,0,8-9.39,5.08,5.08,0,0,0,.49-4.11c-1.67-4.53-3.9-8.86-5.49-13.41-.71-2-1.58-2.76-3.63-2.83-4-.11-7.94-.52-11.92-.69C1.63,101,0,99.47,0,96c.06-6.73,0-13.45,0-20.18C0,71.22,1.18,70,5.94,69.71c3.6-.24,7.19-.61,10.8-.65,2.21,0,3.19-.78,3.92-3a122.08,122.08,0,0,1,5.23-12.71c.82-1.77,1.17-2.94-.38-4.55-2.84-3-5.36-6.22-8.06-9.32-2.27-2.6-2.31-5.18.13-7.6,5-4.91,10-9.76,15-14.62,2.36-2.3,4.69-1.77,7,.17,3.12,2.67,6.31,5.27,9.31,8.07,1.4,1.31,2.48,1.39,4.21.58a135.09,135.09,0,0,1,13.05-5.45c2.15-.74,2.91-1.72,3-3.92.19-4.21.71-8.41,1.07-12.61C70.42,1.27,71.94,0,74.83,0Q85.68.09,96.52,0c3.19,0,4.45,1.64,4.62,4.58.22,3.85.6,7.69.73,11.53.07,2.42.76,3.72,3.4,4.44C109.19,21.62,112.9,23.44,117.37,25.21Z"
                    />
                    <path
                      class="cls-4"
                      d="M80.34,67.47c-3.09,7.8-5.85,14.77-8.78,22.19,1.69.07,3,.17,4.27.18,5.32,0,7.12,1.56,8.08,6.85.37,2-.34,3.09-2.51,3.06-3.61,0-7.23.11-10.83,0-2.16-.09-3.57.41-4.07,2.7a18.08,18.08,0,0,1-1.13,2.75c-2.77,6.81-1.31,5.52-8.46,5.62-4.13.06-4.46-.42-2.95-4.2,3.86-9.66,7.77-19.3,11.66-28.94Q68.8,69.72,72,61.79c1.55-3.9,4-6.56,8.57-6.43,4.35.12,6.53,2.82,8,6.58,5.94,14.83,12,29.61,18,44.41,1.76,4.36,1.66,4.09-2.81,4.54-4.62.47-6.72-1.2-8.33-5.57C90.83,92.9,85.66,80.7,80.34,67.47Z"
                    />
                    <path
                      class="cls-5"
                      d="M167.74,105h-5.16a18.2,18.2,0,0,1-.33,3.16A7.2,7.2,0,0,1,161,110c-.46-.6-1.3-1.18-1.32-1.8-.14-3.09-.14-6.19,0-9.28,0-.68.77-1.33,1.18-2a10.44,10.44,0,0,1,1.43,2.15,11.41,11.41,0,0,1,.3,2.74h4.69a4.82,4.82,0,0,0,.5-.71c.61-1.41,1.19-2.83,1.79-4.25a34.85,34.85,0,0,1,1.07,4.66,31.85,31.85,0,0,1,0,5.94,8.1,8.1,0,0,1-1.26,2.53,13.5,13.5,0,0,1-1.26-2.29A14.83,14.83,0,0,1,167.74,105Z"
                    />
                    <path
                      class="cls-6"
                      d="M156.17,110c-2.31,0-4.63,0-6.94,0a2.28,2.28,0,0,1-1.37-.48c-3-2.69-1.87-6.21-1.61-9.42.19-2.51,2.25-3.36,4.61-3.34a2.69,2.69,0,0,1,.75,0c1.57.47,3.14,1,4.71,1.46-1.52.42-3,1.23-4.55,1.17-3-.12-3.27,1.5-3.12,3.74s-.68,4.76,3,4.64a37.93,37.93,0,0,1,4.73.42Z"
                    />
                    <path
                      class="cls-7"
                      d="M122.27,99.7a10.5,10.5,0,0,1-2.44-.27,13.42,13.42,0,0,1-2-1.24c.72-.49,1.4-1.34,2.16-1.4a40.39,40.39,0,0,1,6.69,0,8.68,8.68,0,0,1,2.7,1.23c-.84.49-1.66,1-2.53,1.45a8.23,8.23,0,0,1-1.89.31c0,2.57.11,5.15-.06,7.71-.07.87-.87,1.68-1.34,2.52-.43-.88-1.18-1.74-1.24-2.65C122.15,104.9,122.27,102.44,122.27,99.7Z"
                    />
                    <path
                      class="cls-8"
                      d="M135.34,106.32c1.18.25,2.37.44,3.53.78,1.36.39,2.69.92,4,1.39-1.4.52-2.77,1.39-4.19,1.48s-3.67,0-4.45-1a7.05,7.05,0,0,1-1.24-5.09c.13-.78,2.43-1.45,3.83-1.73a13.86,13.86,0,0,1,4.45,0c.55.07,1,.83,1.51,1.27-.52.41-1,1.14-1.55,1.18-1.89.14-3.8,0-5.7,0Z"
                    />
                    <path
                      class="cls-5"
                      d="M132,96.82c3.93,0,7,0,10.1.09.12,0,.53,1.61.23,1.93C141.14,100.08,134.19,99.18,132,96.82Z"
                    />
                  </g>
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="maxlogo"
                viewBox="0 0 266.8 62.45"
              >
                <defs>
                  <component :is="'style'">
                    .cls-1 { font-size: 28px; fill: #fff; font-family:
                    Robot-Invaders, RobotInvaders-Italic; font-style: italic;
                    text-overflow:"" } .cls-2 { letter-spacing: -0.2em; } .cls-3
                    { fill: #fddd59; } .cls-4 { fill: #5dd5cfa3; } .cls-5 {
                    fill: #f89e66; } .cls-6 { fill: #f89a60; } .cls-7 { fill:
                    #f8a06a; } .cls-8 { fill: #f8995e; }
                  </component>
                </defs>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <text class="cls-1" transform="translate(77.1 40.08)">
                      adrasti
                      <tspan class="cls-2" x="113.48" y="0">.</tspan>
                      <tspan x="114.84" y="0">tech</tspan>
                    </text>
                    <g id="Layer_2-2" data-name="Layer 2">
                      <g id="Layer_1-2-2" data-name="Layer 1-2">
                        <path
                          class="cls-3"
                          d="M44.63,9.19C43.21,11,42,12.55,40.71,14a1.71,1.71,0,0,1-1.44.22,19.07,19.07,0,0,0-17.68,2.28c-6,4.18-8.75,10-7.63,17.17,1.27,8,6.67,13.43,14.91,15.18A18.55,18.55,0,0,0,39,48.08a1.5,1.5,0,0,1,2.09.61c1,1.45,2.19,2.82,3.47,4.45-1.58.59-3,1.19-4.45,1.62-1,.29-1.4.73-1.42,1.72,0,1.4-.21,2.8-.27,4.2a1.63,1.63,0,0,1-1.77,1.73c-2.75.05-5.5,0-8.25,0-1.42,0-1.77-1-1.9-2.14-.15-1.45-.17-2.91-.36-4.33a1.53,1.53,0,0,0-.85-1c-1.72-.75-3.46-1.46-5.23-2.07a2.06,2.06,0,0,0-1.59.21c-1.16.84-2.19,1.86-3.31,2.77-1.3,1.05-2,1-3.18-.1-1.76-1.65-3.48-3.34-5.23-5-1-.92-1.11-1.82-.13-2.83a44.88,44.88,0,0,0,3-3.43A1.78,1.78,0,0,0,9.89,43c-.64-1.66-1.49-3.23-2.09-4.89a1.29,1.29,0,0,0-1.38-1c-1.52,0-3-.19-4.53-.25C.62,36.81,0,36.25,0,35c0-2.45,0-4.9,0-7.35C0,26,.45,25.51,2.26,25.4c1.37-.08,2.73-.22,4.11-.23a1.35,1.35,0,0,0,1.49-1.1,43.83,43.83,0,0,1,2-4.63c.32-.64.45-1.07-.14-1.66-1.08-1.09-2-2.26-3.06-3.39a1.76,1.76,0,0,1,.05-2.77c1.9-1.79,3.8-3.56,5.7-5.33a1.81,1.81,0,0,1,2.66.06c1.19,1,2.4,1.92,3.54,2.94a1.25,1.25,0,0,0,1.6.21c1.62-.74,3.28-1.4,5-2A1.37,1.37,0,0,0,26.3,6.09c.07-1.53.27-3.07.4-4.6C26.78.46,27.36,0,28.46,0,31.21,0,34,0,36.7,0a1.54,1.54,0,0,1,1.76,1.67c.08,1.4.23,2.8.28,4.2A1.45,1.45,0,0,0,40,7.49,46.8,46.8,0,0,1,44.63,9.19Z"
                        />
                        <path
                          class="cls-4"
                          d="M30.55,24.59l-3.34,8.08c.64,0,1.14.07,1.63.07,2,0,2.7.57,3.07,2.5.14.72-.13,1.12-1,1.11-1.37,0-2.75,0-4.11,0-.83,0-1.36.15-1.55,1a7.47,7.47,0,0,1-.43,1c-1.06,2.48-.5,2-3.22,2-1.57,0-1.7-.15-1.12-1.53q2.2-5.28,4.43-10.54l2.43-5.79a3.28,3.28,0,0,1,6.3.05c2.26,5.41,4.56,10.79,6.84,16.19.67,1.58.64,1.49-1.06,1.65s-2.56-.44-3.17-2C34.54,33.85,32.57,29.41,30.55,24.59Z"
                        />
                        <path
                          class="cls-5"
                          d="M63.79,38.26h-2a6.43,6.43,0,0,1-.12,1.16,2.58,2.58,0,0,1-.48.67c-.17-.22-.49-.43-.5-.66,0-1.13,0-2.26,0-3.38,0-.25.29-.49.45-.73a3.75,3.75,0,0,1,.54.78,4.27,4.27,0,0,1,.12,1h1.78a1.57,1.57,0,0,0,.19-.26c.23-.51.45-1,.68-1.55a12.74,12.74,0,0,1,.41,1.7,11.24,11.24,0,0,1,0,2.17,3,3,0,0,1-.48.92,4.35,4.35,0,0,1-.48-.84A4.63,4.63,0,0,1,63.79,38.26Z"
                        />
                        <path
                          class="cls-6"
                          d="M59.39,40.09H56.75a.93.93,0,0,1-.52-.18c-1.15-1-.72-2.26-.62-3.43.08-.92.86-1.23,1.76-1.22h.28c.6.17,1.2.37,1.79.53a6,6,0,0,1-1.73.43c-1.14,0-1.24.55-1.18,1.36s-.26,1.74,1.14,1.69a15.62,15.62,0,0,1,1.8.16Z"
                        />
                        <path
                          class="cls-7"
                          d="M46.49,36.33a4.05,4.05,0,0,1-.92-.1,5.24,5.24,0,0,1-.76-.45c.27-.18.53-.49.82-.51a15.39,15.39,0,0,1,2.54,0,3.4,3.4,0,0,1,1,.45c-.32.18-.63.36-1,.53a3.59,3.59,0,0,1-.72.11c0,.94,0,1.88,0,2.81,0,.32-.33.61-.5.92a2.93,2.93,0,0,1-.48-1C46.45,38.23,46.49,37.33,46.49,36.33Z"
                        />
                        <path
                          class="cls-8"
                          d="M51.46,38.74c.45.1.91.16,1.35.29s1,.33,1.52.51a6.53,6.53,0,0,1-1.6.53c-.54,0-1.39,0-1.69-.36a2.47,2.47,0,0,1-.47-1.85c0-.29.93-.53,1.46-.63a5.32,5.32,0,0,1,1.69,0c.21,0,.38.3.57.46-.19.15-.38.41-.59.43-.71.05-1.44,0-2.16,0Z"
                        />
                        <path
                          class="cls-5"
                          d="M50.19,35.28c1.5,0,2.67,0,3.85,0,0,0,.2.58.08.7C53.67,36.47,51,36.14,50.19,35.28Z"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </picture>
          </router-link>
        </span>
      </div>
      <div class="header-category-bar">
        <router-link to="/keyboards">
          <div class="header-category">
            <span>Клавиатуры</span>
          </div>
        </router-link>
        <router-link to="/mice">
          <div class="header-category">
            <span>Мыши</span>
          </div>
        </router-link>
        <router-link to="/headphones">
          <div class="header-category">
            <span>Наушники</span>
          </div>
        </router-link>
      </div>
      <div class="header-access">
        <router-link to="/cart" class="header-access-item access-cart">
          <div class="access-icon">
            <span class="cart-count" v-show="showCartCount">{{
              cartTotalLength
            }}</span>
            <svg
              class="svg-inline"
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="cart-shopping"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M80 0C87.47 0 93.95 5.17 95.6 12.45L100 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H158.2L172.8 352H496C504.8 352 512 359.2 512 368C512 376.8 504.8 384 496 384H160C152.5 384 146.1 378.8 144.4 371.5L67.23 32H16C7.164 32 0 24.84 0 16C0 7.164 7.164 0 16 0H80zM107.3 64L150.1 256H487.8L541.8 64H107.3zM128 456C128 425.1 153.1 400 184 400C214.9 400 240 425.1 240 456C240 486.9 214.9 512 184 512C153.1 512 128 486.9 128 456zM184 480C197.3 480 208 469.3 208 456C208 442.7 197.3 432 184 432C170.7 432 160 442.7 160 456C160 469.3 170.7 480 184 480zM512 456C512 486.9 486.9 512 456 512C425.1 512 400 486.9 400 456C400 425.1 425.1 400 456 400C486.9 400 512 425.1 512 456zM456 432C442.7 432 432 442.7 432 456C432 469.3 442.7 480 456 480C469.3 480 480 469.3 480 456C480 442.7 469.3 432 456 432z"
              ></path>
            </svg>
          </div>
          <div class="access-link">
            <a href="">Корзина</a>
          </div>
        </router-link>
        <template v-if="showLogIn">
          <router-link to="/login" class="header-access-item access-login">
            <div class="access-icon">
              <svg
                class="svg-inline"
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="user"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM224 32c52.94 0 96 43.06 96 96c0 52.93-43.06 96-96 96S128 180.9 128 128C128 75.06 171.1 32 224 32zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM413.3 480H34.66C33.2 480 32 478.8 32 477.3C32 399.4 95.4 336 173.3 336h101.3C352.6 336 416 399.4 416 477.3C416 478.8 414.8 480 413.3 480z"
                ></path>
              </svg>
            </div>
            <div class="access-link">
              <a href="">Войти</a>
            </div>
          </router-link>
        </template>
        <template v-else>
          <router-link to="/myaccount" class="header-access-item access-login">
            <div class="access-icon">
              <svg
                class="svg-inline"
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="user"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM224 32c52.94 0 96 43.06 96 96c0 52.93-43.06 96-96 96S128 180.9 128 128C128 75.06 171.1 32 224 32zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM413.3 480H34.66C33.2 480 32 478.8 32 477.3C32 399.4 95.4 336 173.3 336h101.3C352.6 336 416 399.4 416 477.3C416 478.8 414.8 480 413.3 480z"
                ></path>
              </svg>
            </div>
            <div class="access-link">
              <a href="">Аккаунт</a>
            </div>
          </router-link>
        </template>
      </div>
    </div>
    <div class="mobile-menu" :class="{ 'menu-is-open': showMobileMenu }">
      <div class="mobile-categories">
        <ul>
          <li>
            <router-link to="/keyboards">
              <div class="header-category" @click="collapseMenu">
                <span>Клавиатуры</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/mice">
              <div class="header-category" @click="collapseMenu">
                <span>Мыши</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/headphones">
              <div class="header-category" @click="collapseMenu">
                <span>Наушники</span>
              </div>
            </router-link>
          </li>
        </ul>
        <div class="mobile-menu-bottom">
          <div class="mobile-menu-cart">
            <router-link to="/cart" @click="collapseMenu">
              <svg
                class="svg-inline"
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="cart-shopping"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M80 0C87.47 0 93.95 5.17 95.6 12.45L100 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H158.2L172.8 352H496C504.8 352 512 359.2 512 368C512 376.8 504.8 384 496 384H160C152.5 384 146.1 378.8 144.4 371.5L67.23 32H16C7.164 32 0 24.84 0 16C0 7.164 7.164 0 16 0H80zM107.3 64L150.1 256H487.8L541.8 64H107.3zM128 456C128 425.1 153.1 400 184 400C214.9 400 240 425.1 240 456C240 486.9 214.9 512 184 512C153.1 512 128 486.9 128 456zM184 480C197.3 480 208 469.3 208 456C208 442.7 197.3 432 184 432C170.7 432 160 442.7 160 456C160 469.3 170.7 480 184 480zM512 456C512 486.9 486.9 512 456 512C425.1 512 400 486.9 400 456C400 425.1 425.1 400 456 400C486.9 400 512 425.1 512 456zM456 432C442.7 432 432 442.7 432 456C432 469.3 442.7 480 456 480C469.3 480 480 469.3 480 456C480 442.7 469.3 432 456 432z"
                ></path>
              </svg>
            </router-link>
            <div>Сумма: {{ totalPrice }}₽</div>
          </div>
          <div class="mobile-menu-login">
            <div>Войти</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed, onBeforeMount, onMounted } from "vue";
import axios, { AxiosError } from "axios";
import { ref } from "vue";
import type { cartItemArr } from "../../store/index";
import { useStore } from "vuex";

export default defineComponent({
  name: "NavBar",
  setup() {
    const store = useStore();
    const showMobileMenu = ref<boolean>(false);
    const showCartCount = ref<boolean>(false);
    const cart = ref({
      items: <cartItemArr>[],
    });
    function handleHamburger() {
      showMobileMenu.value = !showMobileMenu.value;
    }

    const cartTotalLength = computed(() => {
      let totalLength = 0;
      for (let i = 0; i < cart.value.items.length; i++) {
        totalLength += cart.value.items[i].quantity;
      }
      if (totalLength > 0) showCartCount.value = true;
      else showCartCount.value = false;
      return totalLength;
    });

    const totalPrice = computed(() => {
      let count = 0;
      for (let i = 0; i < store.state.cart.items.length; i++) {
        count =
          count +
          store.state.cart.items[i].quantity *
            Number(store.state.cart.items[i].product.price);
      }
      return count;
    });

    const collapseMenu = () => {
      showMobileMenu.value = false;
    };

    onBeforeMount(() => {
      store.commit("initializeStore");

      const token = store.state.token;
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Token ${token}`;
      } else {
        axios.defaults.headers.common["Authorization"] = "";
      }
    });

    onMounted(() => {
      cart.value = store.state.cart;
    });

    const showLogIn = computed(() => {
      return !store.state.isAuth;
    });

    return {
      showMobileMenu,
      handleHamburger,
      cartTotalLength,
      showCartCount,
      totalPrice,
      collapseMenu,
      showLogIn,
    };
  },
});
</script>

<style lang="scss">
.site-header,
.header-logo,
.header-access,
.header-category-bar {
  float: left;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
}
.site-header {
  width: 100%;
  z-index: 100;
  background: #0a3782;
}

.cart-count {
  position: absolute;
  font-weight: 500;
  font-size: 12px;
  font-family: Tahoma, Century Gothic, CenturyGothic, AppleGothic, sans-serif;
  text-align: center;
  top: 0;
  right: -10px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 50%;
  background-color: #f46036;
  color: #fff;
}

.header-category-bar {
  width: 62%;
  margin-right: 2%;
  margin-top: 7%;
  display: flex;
  justify-content: center;
  a:first-child {
    margin-left: 50px;
  }
}

.header-category {
  display: none;
  text-align: center;
  position: relative;
  float: left;
  margin-right: 50px;
  flex-basis: 20%;
  flex-grow: 0;
  max-width: 100%;
  color: white;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 599;
  padding: 10px;
  border: solid;
}

.mobile-menu {
  overflow: hidden;
  position: absolute;
  background: rgba(71, 122, 216, 0.8);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1040;
  left: -100%;
  transition: left 0.5s ease;
  .header-category {
    display: block;
    color: black;
    border-color: black;
    margin: 20px;
    padding: 20px;
    width: 200px;
  }
}

.mobile-menu-bottom {
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .mobile-menu-login {
    div {
      font-weight: 500;
      padding: 10px;
      border: solid black 2px;
    }
  }
  .mobile-menu-cart {
    text-align: center;
    margin-top: 8px;
    svg {
      font-size: 23px;
    }
  }
}

.mobile-categories {
  width: 80%;
  height: 65vh;
  background-color: #efefef;
  position: absolute;
  display: flex;
  justify-content: center;
  padding-top: 50px;
}

.access-cart {
  a {
    margin-left: 7px;
  }
}

.header-access {
  width: 20%;

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  .header-access-item {
    display: block;
    text-align: center;
    position: relative;
    float: left;
    width: 50%;
    padding-left: 0;
    padding-right: 0;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      bottom: -20px;
      height: 20px;
    }
  }
}

.access-link {
  a {
    color: white;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 599;
  }
}

.access-icon {
  font-size: 34px;
  width: 34px;
  display: block;
  margin: 0 auto;
  position: relative;
  color: #fff;
}

.header-logo {
  width: 22%;
  margin-right: 2%;
  position: relative;
  img {
    max-width: 100%;
    max-height: 60px;
  }
}

.mobile-hamburger {
  color: #f46036;
  font-size: 35px;
  line-height: 10px;
}

.login {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  height: 100%;
  line-height: 20px;
  font-size: 16px;
  letter-spacing: 0.1px;
  font-weight: 500;
  color: #fff;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.maxlogo {
  display: none;
}

.minlogo {
  max-height: 40px;
}

@media (min-width: $breakpoint-lg) {
  .header-access {
    margin-top: 20px;
  }
  .header-category-bar {
    margin-top: 30px;
    margin-right: 4%;
    width: 52%;
    .header-category {
      display: block;
      &:hover {
        background-color: hwb(180deg 78% 9% / 30%);
      }
    }
  }
  .site-header {
    padding-bottom: 30px;
  }
  .hamburger-menu {
    -webkit-transition: opacity 0.3s ease;
    transition: opacity 0.3s ease;
    opacity: 0;
    position: absolute;
    width: 31px;
    top: 5px;
    left: 0;
  }
}

@media (min-width: $breakpoint-xl) {
  .header-logo {
    margin-top: 22px;
  }
}

@media (min-width: $breakpoint-xxl) {
  .site-header {
    z-index: 1030;
    position: fixed;
    top: 0;
  }
}

@media (min-width: $breakpoint-lg) and (max-width: $breakpoint-xxl) {
  .site-header {
    display: inline-block;
    position: relative;
  }
}

@media (min-width: $breakpoint-lg) and (max-width: $breakpoint-xl) {
  .header-logo {
    margin-right: 2%;
    margin-top: 32px;
  }
}

@media (min-width: $breakpoint-md) and (max-width: $breakpoint-lg) {
  .header-logo {
    margin-top: 4px;
    margin-left: 6%;
  }
  .header-category-bar {
    width: 48%;
  }
  .hamburger-menu {
    margin-top: 5px;
  }
}

@media (min-width: 480px) and (max-width: $breakpoint-md) {
  .header-logo {
    width: 32%;
    margin-left: 10%;
  }
}

@media (min-width: 480px) and (max-width: $breakpoint-lg) {
  .hamburger-menu {
    left: -45px;
  }
}

@media (max-width: $breakpoint-md) {
  .header-access {
    width: 38%;
    float: right;
    padding-right: 15px;
    .svg-inline {
      vertical-align: -0.3em;
    }
  }
  .header-category-bar {
    margin: 0;
    position: fixed;
    left: -100%;
    top: 66px;
    width: 95%;
    z-index: 1029;
    border: 1px solid #353535;
  }
  .access-icon {
    font-size: 23px;
  }
  .mobile-hamburger {
    font-size: 30px;
    margin-top: 5px;
  }
}

@media (min-width: 580px) {
  .maxlogo {
    display: inline;
  }
  .minlogo {
    display: none;
  }
}

@media (max-width: 480px) {
  .header-logo {
    position: relative;
    width: 40%;
    text-align: left;
    padding-left: 55px;
    margin: 0;
  }
  .hamburger-menu {
    left: 15px;
  }
}

@media (max-width: $breakpoint-lg) {
  .site-header {
    height: 60px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1030;
    position: fixed;
  }
  .access-link {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: none;
  }
  .hamburger-menu {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .menu-is-open {
    left: 0;
    overflow-y: scroll;
  }
  .mobile-menu {
    top: 60px;
  }
}
</style>
