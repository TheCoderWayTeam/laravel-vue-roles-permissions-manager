<template>
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-12 col-md-6 offset-md-3">
                <div class="card shadow sm">
                    <div class="card-body">
                        <h1 class="text-center">Login</h1>
                        <hr/>
                        <form action="javascript:void(0)" class="row" method="post">
                            <div class="form-group col-12 mb-2">
                                <label for="email" class="font-weight-bold">Email <i class="bi bi-asterisk text-danger small-font"></i></label>
                                <input type="text" v-model="auth.email" name="email" id="email" class="form-control">
								<span v-if="errors.email" class="text-danger">{{ errors.email[0] }}</span>
                            </div>
                            <div class="form-group col-12 mb-2">
                                <label for="password" class="font-weight-bold">Password <i class="bi bi-asterisk text-danger small-font"></i></label> <router-link :to="{name:'forgetpassword'}" class="float-end">Forget Password!</router-link>
                                <input type="password" v-model="auth.password" name="password" id="password" class="form-control">
								<span v-if="errors.password" class="text-danger">{{ errors.password[0] }}</span>
                            </div>
                            <div class="col-12 mb-2  mt-2">
                                <button type="submit" :disabled="processing" @click="login" class="btn btn-primary btn-block">
                                    {{ processing ? "Please wait" : "Login" }}
                                </button>
                            </div>
                            <div class="col-12 text-center mb-2">
                                <label>Don't have an account? <router-link :to="{name:'register'}">Register Now!</router-link></label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:"login",
    data(){
        return {
            auth:{
                email:"",
                password:""
            },
            processing:false,
			errors: {
				email:"",
				password:""
			},
			isError:false,
        }
    },
    methods:{
        ...mapActions({
            signIn:'auth/login'
        }),
		validEmail(email) {
		  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		  return re.test(email);
		},
        async login(){
			
			this.isError = false;
			
			if (!this.auth.email) {
				this.errors.email = ['The email is required'];
				this.isError = true;
			}else if(!this.validEmail(this.auth.email)){
				this.errors.email = ['The email must be a valid email address.'];
				this.isError = true;
			}else{
				this.errors.email = '';
			}
			
			if (!this.auth.password) {
				this.errors.password = ['Password is required'];
				this.isError = true;
			}else{
				this.errors.password = '';
			}
			
			if(this.isError){
				return false;
			}else{
				this.errors.email = '';
				this.errors.password = '';
			}
		
		
            this.processing = true
            await axios.get('/sanctum/csrf-cookie')
            await axios.post('/api/login',this.auth).then(({data})=>{
				this.$bvToast.toast(data.message, {
					title: data.message,
					toaster: `b-toaster-top-right`,
					variant: `success`,
					autoHideDelay: 5000,
				});
				
                this.signIn()
            }).catch(({response:{data}})=>{
                this.$bvToast.toast(data.message, {
					title: data.message,
					toaster: `b-toaster-top-right`,
					variant: `danger`,
					autoHideDelay: 5000,
				});
            }).finally(()=>{
                this.processing = false
            })
        },
    }
}
</script>