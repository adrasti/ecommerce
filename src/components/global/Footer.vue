<template>
  <footer class="footer-main">
    <div class="container">
      <div>
        <div class="footer-upper">
          <div class="footer-column">
            <div class="footer-column-title">О КОМПАНИИ</div>
            <a href="" class="footer-link">Об Adrasti.tech</a
            ><a href="" class="footer-link">Вакансии</a
            ><a href="" class="footer-link">Реквизиты</a
            ><a href="" class="footer-link">Контакты для прессы</a
            ><a
              href=""
              target="_blank"
              class="footer-link"
              rel="noopener noreferrer"
              >Горячая линия</a
            >
          </div>
          <div class="footer-column">
            <div class="footer-column-title">ПОМОЩЬ</div>
            <a href="" class="footer-link">Оплата</a
            ><a href="" class="footer-link">Доставка</a
            ><a href="" class="footer-link">Отмена &amp; Возврат</a
            ><a href="" class="footer-link">FAQ</a
            ><a href="" class="footer-link">Безопасность</a>
          </div>
          <div class="footer-column">
            <div class="footer-column-title">СОЦИАЛЬНЫЕ СЕТИ</div>
            <a href="https://www.facebook.com/" class="footer-link">Facebook</a
            ><a href="https://www.twitter.com/" class="footer-link">Twitter</a
            ><a href="https://www.youtube.com/" class="footer-link">YouTube</a>
          </div>
          <div
            class="menu-contacts footer__main-right footer__contacts footer-column"
          >
            <h6 class="footer-column-title">Оставайтесь на связи</h6>
            <p class="menu-contacts__phone-and-worktime phone-and-worktime">
              <a class="phone-and-worktime__number" href="tel:8-800-77-07-999"
                >8-353-735-49-70&nbsp;</a
              ><span class="phone-and-worktime__worktime">
                (c 03:00 до 22:00)</span
              >
            </p>
            <!--Ссылка на адреса магазинов-->
            <div class="menu-contacts__shop-address">
              <a href="/shops/">Адреса магазинов в г. Москва</a>
            </div>
            <!--Подписка на рассылку-->
            <div class="menu-contacts__subscription subscription">
              <p class="subscription__title">Следите за новинками и акциями:</p>
              <form class="subscription__form">
                <div class="subscription__input-container">
                  <input
                    class="subscription__input"
                    type="email"
                    name="email"
                    placeholder="Введите email и подпишитесь"
                    autocomplete="true"
                  /><span class="subscription__submit-icon">↵</span>
                </div>
              </form>
              <div class="subscription__policy">
                Подписываясь на рассылку, Вы соглашаетесь
                <div>
                  c условиями
                  <a href="/rules/policy/" class="subscription__policy-link"
                    >политики конфиденциальности</a
                  >
                  и
                  <a
                    href="/rules/personal-data/"
                    class="subscription__policy-link"
                    >политики конфиденциальности</a
                  >
                </div>
              </div>
              <!--Сообщение-->
              <div
                class="subscription__message-container error"
                style="display: none"
              >
                <p class="subscription__message">Введите правильный email</p>
                <span class="subscription__message-close">×</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  setup() {},
});
</script>

<style lang="scss">
.footer-main {
  background: #0a3782;
  border-top: 1px solid #ddd;
  margin: auto;
  margin-top: 120px;
  color: white;
  min-height: 300px;
}
.footer-upper {
  display: flex;
  margin: auto;
  width: 90% !important;
  padding-top: 40px;
  flex-wrap: wrap;
}

.footer-column {
  flex: 1;
}

.footer-column-title {
  color: #9b9999;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 9px;
}

.footer-link {
  line-height: 2;
  font-size: 13px;
  font-weight: 500;
  color: #fff;
  display: block;
  font-weight: 400;
  font-size: 12px;
}

.menu-contacts .phone-and-worktime {
  font-size: 14px;
  white-space: nowrap;
  font-weight: 700;
}

.menu-contacts__shop-address {
  margin-top: 6px;
  font-size: 12px;
}

.menu-contacts .subscription {
  padding-right: 17px;
  margin-top: 18px;
  position: relative;
  width: 297px;
}

.menu-contacts .subscription__title {
  margin: 0 0 8px;
  font-size: 14px;
  white-space: nowrap;
}

.menu-contacts .subscription__input-container {
  position: relative;
  width: 100%;
}

.menu-contacts .subscription__input {
  border-radius: 8px;
  border: 1px solid #eee;
  color: #777;
  display: block;
  font-size: 14px;
  padding: 12px;
  width: 100%;
  line-height: normal;
  margin: 0;
  height: 38px;
}

.menu-contacts .subscription__submit-icon {
  border-radius: 8px;
  background-image: linear-gradient(
    90deg,
    hsla(0, 0%, 100%, 0),
    #fff 20%,
    #fff
  );
  position: absolute;
  padding: 0 12px;
  text-align: center;
  top: 0;
  right: 1px;
  font-size: 20px;
  color: #777;
  cursor: pointer;
  height: 38px;
  line-height: 38px;
}

.menu-contacts .subscription__policy {
  color: #8c8c8c;
  margin-top: 10px;
  line-height: 14px;
  font-size: 12px;
}

@media (max-width: $breakpoint-md){
  .footer-column:not(.menu-contacts){
    display: none;
  }
  .footer-main{
    margin-top: 50px;
  }
}
</style>
