<template>
  <div class="card">
			<div class="card-header">
				<h3>Sign In</h3>
			</div>
			<div class="card-body">
				<form>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text" :style="{'background-color': color}">
                                <i class="fas fa-user fa-lg"></i>
                            </span>
						</div>
						<input type="text" class="form-control" placeholder="login" v-model="login">
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text" :style="{'background-color': color}">
                                <i class="fas fa-key fa-lg"></i>
                            </span>
						</div>
						<input type="password" class="form-control" placeholder="password" v-model="password">
					</div>
                    <p class="wrong-text" v-if="isLoginFault">
                        Wrong login or password, try again
                    </p>
					<div class="row align-items-center remember">
						<input type="checkbox" v-model="isRemembered">Remember Me
					</div>
					<div class="form-group">
						<input value="Login" class="btn float-right login_btn" @click="signIn">
					</div>
				</form>
			</div>
			<div class="card-footer">
				<div class="d-flex justify-content-center links">
					Don't have an account?<span class="link" @click="$emit('update:isSignIn', false)">Sign Up</span>
				</div>
				<div class="d-flex justify-content-center">
					<a href="">Forgot your password?</a>
				</div>
			</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '../store';
import router from '../router'

export default defineComponent({
  name: 'SignIn',

  computed: {
      color: function() {
          if (this.isLoginFault) return 'red'
          else return '#FFC312'
      }
  },

  data: function () {
    return {
      isRemembered: false,
      login: null,
      password: null,
      isLoginFault: false
    }
  },

  methods: {
      signIn() {
          fetch(
            `${store.state.backendUrl}/auth/token/login/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.login,
                    password: this.password
                })
            }
          ).then(response => {
              response.json().then(response => {
                  const token = response.auth_token
                  if(typeof token !== 'undefined') {
                      store.dispatch('setToken', token)
                      this.isLoginFault = false
                      router.push('main')
                  }
                  else {
                      this.isLoginFault = true
                  }
              })
          })
      }
  }
});
</script>