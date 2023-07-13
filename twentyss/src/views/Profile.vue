<script>
import ProfileGrid from '../components/profile/ProfileGrid.vue';
export default {
	name: 'Profile',
	props:['userDetails'],
	components:{
		ProfileGrid
	},
	data(){
		return{
			Clients:{}
		}
	},
	async created(){
		let user=this.$store.state.user
		if(user){
			this.Clients=user
		}else{
			this.Clients=""
		}
	}
}
</script>

<template>
	<ProfileGrid :userDetails="Clients"/>
</template>


