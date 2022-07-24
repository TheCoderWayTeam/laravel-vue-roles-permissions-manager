<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card shadow-sm">
                    <div class="card-header">
						<div class="d-flex align-items-center">
							<h3 class="mr-auto p-3">Roles</h3>
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
										<tbody v-if="roles && (roles.data || []).length > 0">
											<tr v-for="(role,key) in roles.data" :key="key">
												<td>{{ role.id }}</td>
												<td>{{ role.name  }}</td>
												<td>
													<button type="button" @click="editRole(role.id)" class="btn btn-success">Edit</button>
													<button type="button" @click="deleteRole(role.id)" class="btn btn-danger">Delete</button>
												</td>
											</tr>
										</tbody>
										<tbody v-else>
											<tr>
												<td colspan="4" align="center">No Roles Found.</td>
											</tr>
										</tbody>
									</table>
								</div>	
								<pagination align="center" :data="roles" @pagination-change-page="getRoles"></pagination>
							</div>
							<div class="col-5">
								<form ref="RoleForm" action="javascript:void(0)" @submit="saveRole" class="row" method="post">
									<div class="form-group col-12 mb-2">
										<label for="name" class="font-weight-bold col-12">Role Name <i class="bi bi-asterisk text-danger small-font"></i> <span class="text-muted ml-auto float-right">{{ role.id ? "You are updating existing role" : "You are going to add new role" }}</span></label>
										<input type="hidden" name="id" v-model="role.id">
										<input type="text" name="name" v-model="role.name" id="name" placeholder="Enter role name" class="form-control">
										<span v-if="errors.name" class="text-danger">{{ errors.name[0] }}</span>
									</div>
									<div class="form-group col-12 mb-2 mt-2">
										<label for="permissions" class="font-weight-bold col-12">
											<h2>Assign Role Premissions</h2>
											<p>Please check the permissions which you want to assign to this role</p>
										</label>
										<div class="d-flex">
											<div class="row">
												<div class="col-4 checkbox-inline" v-for="(permission,key) in permissions" :key="key">
													<label :for="permission.name" class="" >
													  <input type="checkbox" :value="permission.id" :checked="role.rolePermissions.indexOf(permission.id) !== -1" v-model="role.rolePermissions"> {{ permission.name }}
													</label>
												</div>
											</div>
										</div>
									</div>
									<div class="col-12 mb-2 mb-2 mt-2">
										<button type="submit" :disabled="processing" class="btn btn-primary btn-block">
											{{ processing ? "Please wait" : "Save" }}
										</button>
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
    name:"roles",
    data(){
        return {
            roles:{},
            permissions:[],
			role: {
				id:"",
				name:"",
				rolePermissions:[]
			},
			errors: {
				name:""
			},
			processing:false,
			isError:false,
        }
    },
    mounted(){
        this.getRoles();
        this.getPermissions();
    },
    methods:{
        async getRoles(page=1){
            await axios.get('/api/roles?page='+page).then(response=>{
                this.roles = response.data
            }).catch(error=>{
                console.log(error)
                this.roles = {}
            })
        },
		async getPermissions(){
            await axios.get('/api/permissions').then(response=>{
                this.permissions = response.data.data
            }).catch(error=>{
                console.log(error)
                this.permissions = []
            })
        },
		editRole(id){
            axios.post('/api/roles/'+id).then(response=>{
				this.role.id = response.data.data.id;
				this.role.name = response.data.data.name;
				this.role.rolePermissions = response.data.data.rolePermissions;
            }).catch(error=>{
                console.log(error)
                this.roles = []
            })
        },
		async saveRole(){
			this.isError = false;
			
			if (!this.role.name) {
				this.errors.name = ['Role name is required'];
				this.isError = true;
			}else{
				this.errors.name = '';
			}
			
			if(this.isError){
				return false;
			}else{
				this.errors.name = '';
			}
		
            this.processing = true
            await axios.post('/api/role/save',this.role).then(({data})=>{
				this.$bvToast.toast(data.message, {
					title: data.message,
					toaster: `b-toaster-top-right`,
					variant: `success`,
					autoHideDelay: 5000,
				});
            }).catch(({response:{data}})=>{
                this.errors = data.errors;
            }).finally(()=>{
                this.processing = false;
				this.getRoles()
            })
		},
        deleteRole(id){
            if(confirm("Are you sure to delete this role ?")){
                axios.delete(`/api/roles/delete/${id}`).then(response=>{
                    this.getRoles()
                }).catch(error=>{
                    console.log(error)
                })
            }
        },
		resetform(){
			this.role.id = '';
			this.role.name = '';
			this.role.rolePermissions = [];
		}
    }
}
</script>