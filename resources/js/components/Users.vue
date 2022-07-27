<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card shadow-sm">
                    <div class="card-header">
						<div class="d-flex align-items-center">
							<h3 class="mr-auto p-3">Users</h3>
							<div class="btn-group float-right" role="group">
								<button type="button" @click="resetform" class="btn btn-primary btn-block">
                                    Add New
                                </button>
							</div>
						</div>
                    </div>
                    <div class="card-body">
						<div class="d-flex">
							<div class="col-6 mr-auto">
								<div class="table-responsive">
									<table class="table table-bordered">
										<thead>
											<tr>
												<th>ID</th>
												<th>Title</th>
												<th>Actions</th>
											</tr>
										</thead>
										<tbody v-if="users && (users.data || []).length > 0"">
											<tr v-for="(user,key) in users.data" :key="key">
												<td>{{ user.id }}</td>
												<td>{{ user.name  }}</td>
												<td>
													<button type="button" @click="editUser(user.id)" class="btn btn-success">Edit</button>
													<button type="button" @click="deleteUser(user.id)" class="btn btn-danger">Delete</button>
												</td>
											</tr>
										</tbody>
										<tbody v-else>
											<tr>
												<td colspan="4" align="center">No User Found.</td>
											</tr>
										</tbody>
									</table>
								</div>
								<pagination align="center" :data="users" @pagination-change-page="getUsers"></pagination>
							</div>
							<div class="col-5">
								<form ref="RoleForm" action="javascript:void(0)" @submit="saveUser" class="row" method="post">
									<div class="form-group col-12 mb-2">
										<label for="name" class="font-weight-bold col-12">User Name <i class="bi bi-asterisk text-danger small-font"></i></label>
										<input type="hidden" name="id" v-model="user.id">
										<input type="text" name="name" v-model="user.name" id="name" placeholder="Enter user name" class="form-control">
										<span v-if="errors.name" class="text-danger">{{ errors.name[0] }}</span>
									</div>
									
									<div class="form-group col-12 mb-2">
										<label for="email" class="font-weight-bold">Email <i class="bi bi-asterisk text-danger small-font"></i></label>
										<input type="text" name="email" v-model="user.email" id="email" placeholder="Enter Email" class="form-control" :disabled="addform">
										<span v-if="errors.email" class="text-danger">{{ errors.email[0] }}</span>
									</div>
									<div class="form-group col-12 mb-2" :hidden="addform">
										<label for="password" class="font-weight-bold">Password <i class="bi bi-asterisk text-danger small-font"></i></label>
										<input type="password" name="password" v-model="user.password" id="password" placeholder="Enter Password" class="form-control">
										<span v-if="errors.password" class="text-danger">{{ errors.password[0] }}</span>
									</div>
									<div class="form-group col-12 mb-2" :hidden="addform">
										<label for="password_confirmation" class="font-weight-bold">Confirm Password <i class="bi bi-asterisk text-danger small-font"></i></label>
										<input type="password_confirmation" name="password_confirmation" v-model="user.password_confirmation" id="password_confirmation" placeholder="Enter Password" class="form-control">
										<span v-if="errors.password_confirmation" class="text-danger">{{ errors.password_confirmation[0] }}</span>
									</div>
									
									<div class="form-group col-12 mb-2 mt-2">
										<label for="roles" class="font-weight-bold col-12">
											<h2>Assign Roles</h2>
											<p>Please check the roles which you want to assign to this user</p>
										</label>
										<div class="d-flex">
											<div class="row">
												<div class="col-4 checkbox-inline" v-for="(role,key) in roles" :key="key">
													<label :for="role.name" class="" >
													  <input type="checkbox" :value="role.id" :checked="user.currentroles.indexOf(role.id) !== -1" v-model="user.currentroles"> {{ role.name }}
													</label>
												</div>
											</div>
										</div>
									</div>
									
									<div class="form-group col-12 mb-2 mt-2">
										<label for="permissions" class="font-weight-bold col-12">
											<h2>Assign Permissions</h2>
											<p>Please check the special permissions other then role permissions you want to assign to this user</p>
										</label>
										<div class="d-flex">
											<div class="row">
												<div class="col-4 checkbox-inline" v-for="(permission,key) in permissions" :key="key">
													<label :for="permission.name" class="" >
													  <input type="checkbox" :value="permission.id" :checked="user.currentpermissions.indexOf(permission.id) !== -1" v-model="user.currentpermissions"> {{ permission.name }}
													</label>
												</div>
											</div>
										</div>
									</div>
									
									<div class="col-12 mb-2 mb-2 mt-2">
										<button type="submit" :disabled="processing" class="btn btn-primary btn-block" v-if="$can('user-edit')">
											{{ processing ? "Please wait" : "Save" }}
										</button>
										<div class="alert alert-warning" role="alert" v-else>
										  You Don't have sufficient permissions to save.
										</div>
									</div>
								</form>
							</div>
						</div>	
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:"users",
    data(){
        return {
            users:{},
            user: {
				id:"",
				name:"",
				email:"",
				currentroles:[],
				currentpermissions:[]
			},
			errors: {
				name:"",
				email:""
			},
			roles:[],
            permissions:[],
			processing:false,
			isError:false,
			addform:false,
        }
    },
    mounted(){
        this.getUsers();
		this.getRoles();
        this.getPermissions();
    },
    methods:{
		validEmail(email) {
		  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		  return re.test(email);
		},
        async getUsers(page=1){
            await axios.get('/api/users?page='+page).then(response=>{
                this.users = response.data
            }).catch(error=>{
                console.log(error)
                this.users = {}
            })
        },
		editUser(id){
            axios.post('/api/users/'+id).then(response=>{
				this.user.id = response.data.data.id;
				this.user.name = response.data.data.name;
				this.user.email = response.data.data.email;
				this.user.currentroles = response.data.data.currentroles;
				this.user.currentpermissions = response.data.data.currentpermissions;
				this.addform = true;
            }).catch(error=>{
                console.log(error)
                this.roles = []
            })
        },
		async saveUser(){
			this.isError = false;
			
			if (!this.user.name) {
				this.errors.name = ['User name is required'];
				this.isError = true;
			}else{
				this.errors.name = '';
			}
			
			if(!this.addform){
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
            await axios.post('/api/usersdata/save',this.user).then(({data})=>{
				this.$bvToast.toast(data.message, {
					title: data.title,
					toaster: `b-toaster-top-right`,
					variant: `success`,
					autoHideDelay: 5000,
				});
            }).catch(({response:{data}})=>{
                this.errors = data.errors;
            }).finally(()=>{
                this.processing = false;
				this.getUsers()
            })
		},
        deleteUser(id){
            if(confirm("Are you sure to delete this user ?")){
                axios.delete(`/api/users/delete/${id}`).then(response=>{
                    this.getUsers()
                }).catch(error=>{
                    console.log(error)
                })
            }
        },
		resetform(){
			this.user.id = '';
			this.user.name = '';
			this.user.email = '';
			this.user.currentroles = [];
			this.user.currentpermissions = [];
			
			this.addform = false;
		},
		async getRoles(){
            await axios.get('/api/roles').then(response=>{
                this.roles = response.data.data
            }).catch(error=>{
                console.log(error)
                this.roles = []
            })
        },
		async getPermissions(){
            await axios.get('/api/permissions').then(response=>{
                this.permissions = response.data.data
            }).catch(error=>{
                console.log(error)
                this.permissions = []
            })
        }
    }
}
</script>