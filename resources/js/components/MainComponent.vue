<template>
	<div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="container">
				<a href="/" target="_blank" class="navbar-brand">STARTER</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<template v-if="isLoggedIn">
						<ul class="navbar-nav mr-auto">
							<li class="nav-item active">
								<router-link :to="{name:'dashboard'}" class="nav-link">Home</router-link>
							</li>
							<li class="nav-item" v-if="$can('role-list')">
								<router-link :to="{name:'roles'}" class="nav-link">Roles</router-link>
							</li>
							<li class="nav-item" v-if="$can('permission-list')">
								<router-link :to="{name:'permissions'}" class="nav-link">Permissions</router-link>
							</li>
							<li class="nav-item" v-if="$can('user-list')">
								<router-link :to="{name:'users'}" class="nav-link">Users</router-link>
							</li>
						</ul>
						<div class="ml-auto">
							<ul class="navbar-nav">
								<li class="nav-item dropdown">
									<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										{{ user.name }}
									</a>
									<ul class="dropdown-menu dropdown-menu-lg-right" aria-labelledby="navbarDropdownMenuLink">
										<li v-if="$can('Profile-manage')"><router-link :to="{name:'profile'}" class="dropdown-item">Profile</router-link></li>
										<li><a class="dropdown-item" href="javascript:void(0)" @click="logout">Logout</a></li>
									</ul>
								</li>
							</ul>
						</div>
					</template>
					<template v-else>	
						<ul class="navbar-nav mr-auto">
							<li class="nav-item active">
								<router-link :to="{name:'home'}" class="nav-link">Home</router-link>
							</li>
							<li class="nav-item">
								<router-link :to="{name:'login'}" class="nav-link">Login </router-link>
							</li>
						</ul>  
					</template>
				</div>
			</div>
        </nav>
        <main class="mt-3">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:"Main",
	computed: {
	  isLoggedIn() {
		return this.$store.state.auth.authenticated;
	  },
	   user() {
		   return (this.$store.state.auth.authenticated)?this.$store.state.auth.user:''
	   }
	},
	methods:{
        ...mapActions({
            signOut:"auth/logout"
        }),
        async logout(){
            await axios.post('/api/logout').then(({data})=>{
                this.signOut()
                this.$router.push({name:"login"})
            })
        }
    }
}
</script>