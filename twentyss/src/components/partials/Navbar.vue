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
.navbar-logo {
	height: 35px;
}

#home {
	font-family: 'Leckerli One', cursive;
	color: black;
	font-size: 4vh;
}
</style>
