<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import {useStore} from 'vuex'
export default {
	name: 'LoginPage',
	data(){
		return{
			alerts:{},
			LoginDetails:{
				username:"",
				password:"",
			}
		}
	},
	methods:{
		async PostLogin(){
			await axios.post('LoginUser', this.LoginDetails)
			.then((data) => {
				this.alerts=data.data.msg
				if (data.data.status) {
					this.$store.dispatch('setToken',data.data.token)
					this.$store.dispatch('setUser',data.data.user)
					Swal.fire('Success!',this.alerts, 'success');
						setTimeout(() => {
							this.$router.push('/');
						}, 1000);
					}else{
						Swal.fire('Warning!',this.alerts,'warning');
						setTimeout(() => {
							this.$router.push('/login');
						}, 1000);
					}
				}).catch((e) => {
					console.log(e);
					Swal.fire('Error!', 'Data Collapsed/Could not connect server', 'error');
					setTimeout(() => {
						this.$router.push('/login');
					}, 1000);
				})
				
		}
	}
}
</script>

<template>
	<div class="container-fluid">
		<div class="row main-content bg-success text-center">
			<div class="col-md-4 text-center company__info">

				<span class="">
					<h2><a href="/"><img class="company__logo" src="/logo.png" alt=""></a></h2>
				</span>
				<h4 class="company_title">20SS</h4>

			</div>
			<div class="col-md-8 col-xs-12 col-sm-12 login_form">
				<div class="container-fluid p-3 ">
					<div class="row">
						<h2>Log In</h2>
					</div>
					<div class="row d-flex justify-content-center">
						<form control="" class="form-group" @submit.prevent="PostLogin" name="tab-tracker-form" autocomplete="off" >
							<div class="row">
								<input type="text" name="username" v-model="LoginDetails.username" id="username" class="form__input" placeholder="Username"
									required>
							</div>
							<div class="row">
								<input type="password" name="password" v-model="LoginDetails.password" id="password" class="form__input"
									placeholder="Password" autocomplete="new-password" required>
							</div>
							<p class="text-danger" id="wariningmsg">
							</p>
							<div class="row">
								<div class="col-md-6 col-12">
									<button type="submit" class="btn facilitatorSubmitBtn">Login</button>
								</div>
								<div class="col-md-6 col-12">
									<router-link to="/home" id="home" class="btn facilitatorSubmitBtn homePage">Home</router-link>
								</div>
							</div>
						</form>
						<span>Create New Account..?<router-link to="/register">Register</router-link></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
body {
	width: 100%;
	overflow-x: hidden;


}

.main-content {
	width: 70%;
	border-radius: 20px;
	box-shadow: 0 5px 5px rgba(0, 0, 0, .4);
	margin: 5em auto;
	display: flex;
}

.company__info {
	background-color: #0d7170;
	border-top-left-radius: 20px;
	border-bottom-left-radius: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: #fff;
}

.company__logo {
	height: 16vh;
}

.company_title {
	font-family: 'Leckerli One', cursive;
	color: rgb(255, 255, 255);
}

@media screen and (max-width: 640px) {
	.main-content {
		width: 90%;
	}

	.company__info {
		display: none;
	}
}

@media screen and (min-width: 642px) and (max-width:800px) {
	.main-content {
		width: 70%;
	}
}

.row>h2 {
	color: #008080;
}

.login_form {
	background-color: #fff;
	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;
	border-top: 1px solid #ccc;
	border-right: 1px solid #ccc;
}

@media screen and (max-width: 640px) {
	.login_form {
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
	}
}

@media screen and (min-width: 642px) and (max-width:800px) {
	.main-content {
		width: 70%;
	}
}

form {
	padding: 0 2em;
}

.form__input {
	width: 100%;
	border: 0px solid transparent;
	border-radius: 0;
	border-bottom: 1px solid #aaa;
	padding: 1em .5em .5em;
	padding-left: 1em;
	outline: none;
	margin: 1.5em auto;
	transition: all .5s ease;
}

.form__input:focus {
	border-bottom-color: #008080;
	box-shadow: 0 0 5px rgba(0, 80, 80, .4);
	border-radius: 4px;
}

.btn {
	transition: all .5s ease;
	font-weight: 600;
	margin-bottom: 1em;
}

.btn:hover,
.btn:focus {
	background-color: #008080;
	color: #fff;
}

.facilitatorSubmitBtn {
	width: 100%;
	color: black;
	border: 1px solid #008080;
	font-family: Montserrat;
}

.facilitatorSubmitBtn:hover {
	background-color: #008080;
	box-shadow: 0 10px 12px 0 rgba(0, 0, 0, 0.099), 0 1px 50px 0 rgba(0, 0, 0, 0.099);
}

@media screen and (max-width: 620px) {
	.homePage {
		display: none;
	}
}
</style>