<script>
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
	name: 'RegisterGrid',
	data() {
		return {
			alerts: {},
			RegisterDetails: {
				username: "",
				email: "",
				contactNum: "",
				pinCode: "",
				city: "",
				place: "",
				password: "",

			}
		}
	},
	methods: {
		async PostRegister() {
			await axios.post('RegisterUser', this.RegisterDetails)
				.then((data) => {
					this.alerts = data.data.msg
					if (data.data.status) {
						Swal.fire('Success!', this.alerts);
						setTimeout(() => {
							this.$router.push('/login');
						}, 1000);

					} else {
						Swal.fire('Error!', this.alerts, 'error');
						setTimeout(() => {
							this.$router.push('/register');
						}, 1000);
					}
				}).catch((e) => {
					Swal.fire('Error!', 'Could Not Connect Server.', 'error');
					setTimeout(() => {
						this.$router.push('/register');
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
					<h2><img class="company__logo" src="/logo.png" alt=""></h2>
				</span>
				<h4 class="company_title">20SS</h4>
			</div>
			<div class="col-md-8 col-xs-12 col-sm-12 login_form ">
				<div class="container-fluid p-3">
					<div class="row">
						<h2>Register</h2>
					</div>
					<div class="row">
						<p class="text-danger">Never forget your Username and Password</p>
						<form class="form-group" @submit.prevent="PostRegister">
							<div class="row">
								<div class="col-md-6 col-12">
									<input type="text" name="username" v-model="RegisterDetails.username" id="username"
										class="form__input" placeholder="Username" required>
								</div>
								<div class="col-md-6 col-12">
									<input type="text" name="email" v-model="RegisterDetails.email" id="email"
										class="form__input" placeholder="email" required>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6 col-12">
									<input type="text" name="contactNum" v-model="RegisterDetails.contactNum" id="PhoneNum"
										class="form__input" placeholder="Phone Number" required>
								</div>
								<div class="col-md-6 col-12">
									<input type="text" name="pinCode" v-model="RegisterDetails.pinCode" id="pincode"
										class="form__input" placeholder="Pin Code" required>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6 col-12">
									<input type="text" name="city" v-model="RegisterDetails.city" id="city"
										class="form__input" placeholder="City" required>
								</div>
								<div class="col-md-6 col-12">
									<input type="text" name="place" v-model="RegisterDetails.place" id="place"
										class="form__input" placeholder="Place" required>
								</div>
							</div>
							<div class="row">
								<!-- <span class="fa fa-lock"></span> -->
								<input type="password" name="password" v-model="RegisterDetails.password" id="password"
									class="form__input" placeholder="Password" required>
							</div>
							<div class="row">
								<div class="col-md-6 col-12">
									<button type="submit" class="btn facilitatorSubmitBtn">Sign In</button>
								</div>
								<div class="col-md-6 col-12">
									<router-link to="/home" id="home"
										class="btn facilitatorSubmitBtn homePage">Home</router-link>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
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



