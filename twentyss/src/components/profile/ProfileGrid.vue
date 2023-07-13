<script>
import ProfileImageCard from './ProfileImageCard.vue';
import ProfileDetailsEdit from './ProfileDetailsEdit.vue';
export default{
    name:'ProductGrid',
	props:['userDetails','userData'],
    components:{
        ProfileDetailsEdit,ProfileImageCard
    }
}
</script>
<template>
    <div class="container mt-4">
		<div class="main-body">
			<div class="row gutters-sm">
				<div class="col-md-4 mb-3">
				<ProfileImageCard :userData="userDetails"/>	
					<!-- profile links -->
				</div>
				<ProfileDetailsEdit :userData="userDetails"/>
			</div>

		</div>
	</div>
</template>
<style scoped>
.gutters-sm {
	margin-right: -8px;
	margin-left: -8px;
}

.gutters-sm>.col,
.gutters-sm>[class*=col-] {
	padding-right: 8px;
	padding-left: 8px;
}

.mb-3,
.my-3 {
	margin-bottom: 1rem !important;
}

.bg-gray-300 {
	background-color: #e2e8f0;
}

.h-100 {
	height: 100% !important;
}

.shadow-none {
	box-shadow: none !important;
}
</style>