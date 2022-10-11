<template>
  <div class="flex-container">
    <div class="form-container">
      <input type="checkbox" id="flip" />
      <form @submit.prevent="submitForm">
        <div class="form-content">
          <div class="login-form">
            <div class="title">Вход</div>
            <div class="input-groups">
              <div class="input-box">
                <i class="fas fa-envelope"></i>
                <input
                  v-model="email"
                  type="email"
                  class="input"
                  placeholder="E-mail"
                  required
                  autocomplete="on"
                />
              </div>
            </div>
            <div class="input-groups">
              <div class="input-box">
                <i class="fa-solid fa-lock"></i>
                <input
                  v-model="password"
                  type="password"
                  class="input"
                  placeholder="Пароль"
                  autocomplete="on"
                  required
                />
              </div>
            </div>
            <div class="form-link pass">
              <a href="#">Забыли пароль?</a>
            </div>
            <div v-show="loginerr" class="err loginerr">{{ loginerr }}</div>
            <div class="input-groups">
              <div class="button input-box">
                <button>Войти</button>
              </div>
            </div>
            <div class="form-link login-text">
              <span
                >Пока нет аккаунта?
                <label class="link login-link" for="flip"
                  ><router-link to="signup"
                    >Зарегистрироваться</router-link
                  ></label
                ></span
              >
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import axios, { AxiosError } from "axios";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const root = inject("root");
    const email = ref<string>("");
    const password = ref<string>("");

    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const loginerr = ref<string>("");

    const submitForm = async () => {
      axios.defaults.headers.common["Authorization"] = "";
      const formData = {
        username: email.value,
        password: password.value,
      };

      localStorage.removeItem("token");
      axios
        .post(`${root}/token/login/`, formData)
        .then((response) => {
          console.log(response);
          const token = response.data.auth_token;

          store.commit("setToken", token);
          axios.defaults.headers.common["Authorization"] = `Token ${token}`;

          localStorage.setItem("token", token);

          const toPath = route.query.to || "/cart";
          router.push(String(toPath));
        })
        .catch((error) => {
          if (error.response) {
            loginerr.value = "";
            for (const property in error.response.data) {
              loginerr.value += ` ${property}: ${error.response.data[property]}`;
            }
            console.log(JSON.stringify(error.response.data));
          } else if (error.message) {
            loginerr.value = "Что-то пошло не так. попробуйте снова";

            console.log(JSON.stringify(error));
          }
        });
    };

    return { loginerr, submitForm, email, password };
  },
});
</script>

<style lang="scss">
.flex-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.form-container {
  position: relative;
  width: 30vw;
  margin: 10px;
  min-width: 400px;
  max-width: 850px;
  background: #fff;
  padding: 40px 30px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  perspective: 2700px;
}

.form-container form {
  height: 100%;
  width: 100%;
  background: #fff;
}

.form-container .form-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-content .login-form,
.form-content .sign-form {
  width: 100%;
}

.login-form {
  margin-right: 20px;
  margin-left: 10px;
}

form .form-content .title {
  position: relative;
  font-size: 2rem;
  font-weight: 500;
  color: #333;
}

form .form-content .title::before {
  content: "";
  position: absolute;
  height: 3px;
  width: 25px;
  background: #52b8b4;
  left: 0;
  bottom: 0;
}

form .sign-form .title::before {
  width: 22px;
}

form .form-content .input-groups {
  margin-top: 30px;
}

form .form-content .input-box {
  position: relative;
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  margin: 10px 0;
}

form .form-content .input-box .input {
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  padding: 0 30px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 2px solid #bababa;
  border-bottom-color: #5ac994;
}

form .form-content .input-box .input.invalid {
  border-bottom-color: red;
}

form .form-content .input-box i {
  position: absolute;
  color: #5ac994;
  font-size: 18px;
}

form .form-content .button {
  margin-top: 40px;
}

.button button {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  color: #124143;
  background-color: #b7f7e5;
  border: none;
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;
  border-radius: 6px;
}

form .form-content .button button:hover {
  color: #c0f7b7;
  cursor: pointer;
}

form .form-content .button button::before {
  content: "";
  position: absolute;
  opacity: 0;
  top: 0;
  bottom: 0;
  background: rgb(20, 27, 41);
  background: linear-gradient(
    90deg,
    rgb(23, 81, 79) 0%,
    rgb(33, 135, 115) 50%,
    rgb(69, 214, 170) 100%
  );
  border-radius: 6px;
}

form .form-content .button button:hover::before {
  opacity: 1;
  z-index: -2;
  transition: 1s all ease;
  left: 0;
  right: 0;
}

form .form-content .form-link label {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
}

form .form-content .form-link label:hover {
  text-decoration: underline;
}

form .form-content .pass a {
  color: #52b8b4;
}

form .form-content .form-link .link {
  color: #52b8b4;
}

form .form-content .login-text,
form .form-content .signup-text {
  text-align: center;
  margin-top: 25px;
}

.form-container #flip {
  display: none;
}

@media (max-width: 730px) {
  .form-content .login-form,
  .form-content .sign-form {
    width: 100%;
  }

  .form-container #flip:checked ~ form .sign-form {
    display: block;
  }

  .form-container #flip:checked ~ form .login-form {
    display: none;
  }
}

.err {
  color: red;
}

.loginerr {
  text-align: center;
  margin-top: 30px;
}

@media (max-width: 430px) {
  .form-container {
    min-width: 320px;
  }
}
</style>
