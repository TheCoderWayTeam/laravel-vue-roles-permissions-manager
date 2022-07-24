<template>
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-12 col-md-6 offset-md-3">
                <div class="card shadow sm">
                    <div class="card-body">
                        <h1 class="text-center">Register</h1>
                        <hr/>
                        <form action="javascript:void(0)" @submit="register" class="row" method="post">
                            <div class="form-group col-12 mb-2">
                                <label for="name" class="font-weight-bold">Name <i class="bi bi-asterisk text-danger small-font"></i></label>
                                <input type="text" name="name" v-model="user.name" id="name" placeholder="Enter name" class="form-control">
								<span v-if="errors.name" class="text-danger">{{ errors.name[0] }}</span>
                            </div>
                            <div class="form-group col-12 mb-2">
                                <label for="email" class="font-weight-bold">Email <i class="bi bi-asterisk text-danger small-font"></i></label>
                                <input type="text" name="email" v-model="user.email" id="email" placeholder="Enter Email" class="form-control">
								<span v-if="errors.email" class="text-danger">{{ errors.email[0] }}</span>
                            </div>
                            <div class="form-group col-12 mb-2">
                                <label for="password" class="font-weight-bold">Password <i class="bi bi-asterisk text-danger small-font"></i></label>
                                <input type="password" name="password" v-model="user.password" id="password" placeholder="Enter Password" class="form-control">
								<span v-if="errors.password" class="text-danger">{{ errors.password[0] }}</span>
							</div>
                            <div class="form-group col-12 mb-2">
                                <label for="password_confirmation" class="font-weight-bold">Confirm Password <i class="bi bi-asterisk text-danger small-font"></i></label>
                                <input type="password_confirmation" name="password_confirmation" v-model="user.password_confirmation" id="password_confirmation" placeholder="Enter Password" class="form-control">
								<span v-if="errors.password_confirmation" class="text-danger">{{ errors.password_confirmation[0] }}</span>
							</div>
                            <div class="col-12 mb-2 mb-2 mt-2">
                                <button type="submit" :disabled="processing" class="btn btn-primary btn-block">
                                    {{ processing ? "Please wait" : "Register" }}
                                </button>
                            </div>
                            <div class="col-12 text-center mb-2">
                                <label>Already have an account? <router-link :to="{name:'login'}">Login Now!</router-link></label>
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
    name:'register',
    data(){
        return {
            user:{
                name:"",
                email:"",
                password:"",
                password_confirmation:"",
                roles:['2']
            },
            processing:false,
			errors: {
				name:"",
				email:"",
				password:"",
				password_confirmation:"",
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
        async register(){
		
			this.isError = false;
			
			if (!this.user.name) {
				this.errors.name = ['Name is required'];
				this.isError = true;
			}else{
				this.errors.name = '';
			}
			
			if (!this.user.email) {
				this.errors.email = ['The email is required'];
				this.isError = true;
			}else if(!this.validEmail(this.user.email)){
				this.errors.email = ['The email must be a valid email address.'];
				this.isError = true;
			}else{
				this.errors.email = '';
			}
			
			if (!this.user.password) {
				this.errors.password = ['Password is required'];
				this.isError = true;
			}else{
				this.errors.password = '';
			}
			
			if (!this.user.password_confirmation) {
				this.errors.password_confirmation = ['Password confirmation is required'];
				this.isError = true;
			}else if(this.user.password_confirmation != this.user.password){
				this.errors.password_confirmation = ['Password confirmation did\'t match.'];
				this.isError = true;
			}else{
				this.errors.password_confirmation = '';
			}
			
			if(this.isError){
				return false;
			}else{
				this.errors.name = '';
				this.errors.email = '';
				this.errors.password = '';
				this.errors.password_confirmation = '';
			}
		
            this.processing = true
            await axios.post('/api/register',this.user).then(({data})=>{
				this.$bvToast.toast(data.message, {
					title: data.message,
					toaster: `b-toaster-top-right`,
					variant: `success`,
					autoHideDelay: 5000,
				});
                //this.signIn()
            }).catch(({response:{data}})=>{
                this.errors = data.errors;
            }).finally(()=>{
                this.processing = false
            })
        }
    }
}
</script>