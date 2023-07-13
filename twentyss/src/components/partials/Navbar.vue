<script>
export default {
	name: 'Navbar',
}

</script>

<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
		<router-link to="/home" id="home" class="ml-auto text-decoration-none">Twentyss</router-link>
	</nav>
</template>

<style scoped>
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}

	50% {
		background-position: 100% 50%;
	}

	100% {
		background-position: 0% 50%;
	}
}


.navbar-logo {
	height: 35px;
}

#home {
	font-family: 'Leckerli One', cursive;
	color: black;
}
</style>
