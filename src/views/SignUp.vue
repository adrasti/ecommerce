<template>
  <div class="flex-container">
    <div class="form-container">
      <input type="checkbox" id="flip" />
      <form @submit.prevent="submitForm">
        <div class="form-content">
          <div class="sign-form">
            <div class="title">Регистрация</div>
            <div class="input-groups">
              <div class="input-box">
                <i class="fas fa-envelope"></i>
                <input
                  v-model="email"
                  @blur="isValidEmail(true)"
                  :class="{ invalid: emailerr }"
                  type="text"
                  class="input"
                  placeholder="E-mail"
                  autocomplete="on"
                />
              </div>
            </div>
            <span v-show="emailerr" class="err">{{ emailerr }}</span>
            <div class="input-groups">
              <div class="input-box">
                <i class="fa-solid fa-lock"></i>
                <input
                  v-model="password"
                  @blur="
                    isValidPassword(true);
                    isValidPassword2(true);
                  "
                  type="password"
                  class="input"
                  placeholder="Пароль"
                  :class="{ invalid: passworderr }"
                  autocomplete="on"
                />
              </div>
            </div>
            <span v-show="passworderr" class="err">{{ passworderr }}</span>
            <div class="input-groups">
              <div class="input-box">
                <i class="fa-solid fa-lock"></i>
                <input
                  v-model="password2"
                  @blur="isValidPassword2(true)"
                  type="password"
                  :class="{ invalid: password2err }"
                  class="input"
                  autocomplete="on"
                  placeholder="Повторите пароль"
                />
              </div>
            </div>
            <span v-show="password2err" class="err">{{ password2err }}</span>
            <div v-show="signuperr" class="err loginerr">{{ signuperr }}</div>
            <div class="input-groups">
              <div class="button input-box">
                <button @click="validateForm">Зарегистрироваться</button>
              </div>
            </div>
            <div class="form-link signup-text">
              <span
                >Уже есть аккаунт?
                <label class="link login-link" for="flip"
                  ><router-link to="login">Войти</router-link>
                </label></span
              >
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, inject } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios, { AxiosError } from "axios";

export default defineComponent({
  setup() {
    const root = inject("root");
    const router = useRouter();

    const email = ref<string>("");
    const password = ref<string>("");
    const password2 = ref<string>("");

    const emailerr = ref<string>("");
    const passworderr = ref<string>("");
    const password2err = ref<string>("");

    const errTimeOut = ref<number>();

    const signuperr = ref<string>("");

    const validateEmail = (email: string) => {
      if (email.length === 0) return true;
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const isValidEmail = (k?: boolean) => {
      clearTimeout(errTimeOut.value);
      emailerr.value = "";
      if (k) {
        if (!validateEmail(email.value)) {
          emailerr.value = "Неправильный формат e-mail";
        } else {
          emailerr.value = "";
        }
      } else {
        if (!validateEmail(email.value)) {
          errTimeOut.value = setTimeout(() => {
            emailerr.value = "Неправильный формат e-mail";
          }, 2000);
        } else {
          emailerr.value = "";
        }
      }
    };

    const validatePassword = (pword: string) => {
      if (pword.length === 0) return true;
      return String(pword).match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
      );
    };

    const isValidPassword = (k?: boolean) => {
      clearTimeout(errTimeOut.value);
      passworderr.value = "";
      if (k) {
        if (!validatePassword(password.value)) {
          if (password.value.length < 8) {
            passworderr.value = "Пароль должен содержать не менее 8 символов";
          } else {
            passworderr.value =
              "Пароль должен содержать заглавные и строчные латинские буквы и цифры";
          }
        } else {
          passworderr.value = "";
        }
      } else {
        if (!validatePassword(password.value)) {
          errTimeOut.value = setTimeout(() => {
            if (password.value.length < 8) {
              passworderr.value = "Пароль должен содержать не менее 8 символов";
            } else {
              passworderr.value =
                "Пароль должен содержать заглавные и строчные латинские буквы и цифры";
            }
          }, 2000);
        } else {
          passworderr.value = "";
        }
      }
    };

    const isValidPassword2 = (k?: boolean) => {
      clearTimeout(errTimeOut.value);
      password2err.value = "";
      if (k) {
        if (
          password2.value.length !== 0 &&
          password.value !== password2.value
        ) {
          password2err.value = "Пароли не совпадают";
        } else password2err.value = "";
      } else {
        if (
          password2.value.length !== 0 &&
          password.value !== password2.value
        ) {
          errTimeOut.value = setTimeout(() => {
            password2err.value = "Пароли не совпадают";
          }, 2000);
        } else password2err.value = "";
      }
    };

    watch(email, () => {
      isValidEmail();
    });

    watch(password, () => {
      isValidPassword2();
      isValidPassword();
    });

    watch(password2, () => {
      isValidPassword2();
    });

    const submitForm = () => {
      if (
        !(
          emailerr.value.length ||
          passworderr.value.length ||
          password2err.value.length
        )
      ) {
        console.log("ok");
        const formData = {
          username: email.value,
          password: password.value,
        };

        axios
          .post(`${root}/users/`, formData)
          .then((response) => {
            router.push("/login");
          })
          .catch((error) => {
            if (error.response) {
              signuperr.value = "";
              for (const property in error.response.data) {
                signuperr.value += ` ${property}: ${error.response.data[property]}`;
              }
              console.log(JSON.stringify(error.response.data));
            } else if (error.message) {
              signuperr.value = "Что-то пошло не так. попробуйте снова";

              console.log(JSON.stringify(error));
            }
          });
      }
    };

    const validateForm = () => {
      if (email.value === "" || password.value === "") {
        if (email.value === "") {
          emailerr.value = "Введите e-mail";
        }
        if (password.value === "") {
          passworderr.value = "Введите пароль";
        }
      } else if (password2.value === "") {
        password2err.value = "Повторно введите пароль";
      } else {
        isValidEmail(true);
        isValidPassword(true);
        isValidPassword2(true);
      }
    };

    return {
      email,
      password,
      password2,
      submitForm,
      validateForm,
      emailerr,
      passworderr,
      password2err,
      signuperr,
      isValidEmail,
      isValidPassword,
      isValidPassword2,
    };
  },
});
</script>
