<template>
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-12 col-md-6 offset-md-3">
                <div class="card shadow sm">
                    <div class="card-body">
                        <h1 class="text-center">Forget Password</h1>
                        <hr/>
                        <form action="javascript:void(0)" class="row" method="post">
                            <div class="form-group col-12 mb-2">
                                <label for="email" class="font-weight-bold">Email <i class="bi bi-asterisk text-danger small-font"></i></label>
                                <input type="text" v-model="auth.email" name="email" id="email" class="form-control">
								<span v-if="errors.email" class="text-danger">{{ errors.email[0] }}</span>
                            </div>
                            <div class="col-12 mb-2  mt-2">
                                <button type="submit" :disabled="processing" @click="forgetpassword" class="btn btn-primary btn-block">
                                    {{ processing ? "Please wait" : "Reset Password" }}
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
                email:""
            },
            processing:false,
			errors: {
				email:""
			},
			isError:false,
        }
    },
    methods:{
		validEmail(email) {
		  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		  return re.test(email);
		},
		async forgetpassword(){
			this.isError = false;
			
			if (!this.auth.email) {
				this.errors.email = ['The email is required'];
				this.isError = true;
			}else if(!this.validEmail(this.auth.email)){
				this.errors.email = ['The email must be a valid email address.'];
				this.isError = true;
			}
			
			if(this.isError){
				return false;
			}else{
				this.errors.email = '';
			}
			
            this.processing = true
            await axios.post('/api/forgetpassword',this.auth).then(({data})=>{
				this.$bvToast.toast(data.message, {
					title: data.title,
					toaster: `b-toaster-top-right`,
					variant: `success`,
					autoHideDelay: 5000,
				});
               
            }).catch(({response:{data}})=>{
				this.errors = data.errors;
            }).finally(()=>{
                this.processing = false
            })
        },
    }
}
</script>