<template>
  <div class="card">
			<div class="card-header">
				<h3>Sign Up</h3>
			</div>
			<div class="card-body">
				<form>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text" :style="{'background-color': color}"><i class="fas fa-user fa-lg"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="login" v-model="login">
						
					</div>
                    <div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text" :style="{'background-color': color}"><i class="fas fa-at fa-lg"></i></span>
						</div>
						<input type="email" class="form-control" placeholder="email@example.com" v-model="email">
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-phone fa-lg"></i></span>
						</div>
						<input type="phone" class="form-control" placeholder="+7(999)999-99-99" v-model="phone">
					</div>

                    <div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text" :style="{'background-color': color}"><i class="fas fa-key fa-lg"></i></span>
						</div>
						<input type="password" class="form-control" placeholder="password" v-model="password">
					</div>
                    <div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text" :style="{'background-color': color}"><i class="fas fa-key fa-lg"></i></span>
						</div>
						<input type="password" class="form-control" placeholder="password" v-model="confirmPassword">
					</div>
					<div class="wrong-text" v-if="isCreateFault">
                        <p v-for="(item, key) in error" :key="key">
							{{ key }}: {{ item[0] }}
                        </p>
                    </div>
					<div class="form-group">
						<input value="Sign Up" class="btn float-right login_btn" @click="signUp">
					</div>
				</form>
			</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '../store'


export default defineComponent({
	name: 'SignUp',

	data: function () {
		return {
			login: null,
			email: null,
			phone: null,
			password: null,
			confirmPassword: null,

			isCreateFault: false,
			error: null
		}
	},

	computed: {
		color: function() {
			if (this.isCreateFault) return 'red'
			else return '#FFC312'
		}
	},

	methods: {
		signUp() {
			if (this.password === this.confirmPassword) {
				fetch(
					`${store.state.backendUrl}/auth/users/`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							username: this.login,
							password: this.password,
							email: this.email
						})
					}
				).then(response => {
					response.json().then(response => {
						console.log(response)
						if (response.username === this.login) {
							this.isCreateFault = false
							this.$emit('update:isSignIn', true)
						}
						else {
							this.isCreateFault = true
							this.error = response
						}
					})
				})
			}
		}
	}
});
</script>