<script>
export default{
    name:'NotFound'
}
</script>
<template>
    <div class="segments-page mt-5 mb-5">
		<div class="container">
			<div class="page-not-found">
				<h2 class="text-danger">404</h2>
				<h4>Page Not Found</h4>
				<p class="text-warning">Page May Not Be Exist / URL Not Found </p>
				<ul>
					<li><router-link to="/" id="home"><i class="fa fa-home"></i>Home</router-link></li>
					<li><router-link to="/about" id="about"><i class="fa fa-envelope"></i>Contact Us</router-link></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<style scoped>

.page-not-found {
    text-align: center;
    padding: 15px;
    background-color: #fff;
    border-radius: 20px;
}

.page-not-found h2 {
    font-size: 120px;
}

.page-not-found h4 {
    font-size: 30px;
    margin-bottom: 18px;
}

.page-not-found ul {
    padding: 0;
    margin: 0;
}

.page-not-found ul li {
    list-style: none;
    display: inline-block;
    margin: 10px 10px 0;
    font-size: 16px;
}

.page-not-found ul li  i {
    margin-right: 5px;
    color: #e82954;
}
#home,#about{
    text-decoration: none;
}
</style>