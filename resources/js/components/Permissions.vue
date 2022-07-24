<template>
    <div class="container">
        <div class="row">
            <div class="col-12 mb-2">
                <div class="card shadow-sm">
                    <div class="card-header">
						<div class="d-flex align-items-center">
							<h3 class="mr-auto p-3">Permissions</h3>
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
										<tbody v-if="permissions && (permissions.data || []).length > 0">
											<tr v-for="(permission,key) in permissions.data" :key="key">
												<td>{{ permission.id }}</td>
												<td>{{ permission.name  }}</td>
												<td>
													<button type="button" :disabled="protectedPermissions.indexOf(permission.name) !== -1" @click="editPermission(permission.id)" class="btn btn-success">Edit</button>
													<button type="button" :disabled="protectedPermissions.indexOf(permission.name) !== -1" @click="deletePermission(permission.id)" class="btn btn-danger">Delete</button>
												</td>
											</tr>
										</tbody>
										<tbody v-else>
											<tr>
												<td colspan="4" align="center">No permissions Found.</td>
											</tr>
										</tbody>
									</table>
								</div>	
								<pagination align="center" :data="permissions" @pagination-change-page="getPermissions"></pagination>
							</div>
							
							<div class="col-5">
								<form ref="RoleForm" action="javascript:void(0)" @submit="savePermission" class="row" method="post">
									<div class="form-group col-12 mb-2">
										<label for="name" class="font-weight-bold col-12">Permission Name <i class="bi bi-asterisk text-danger small-font"></i> <span class="text-muted ml-auto float-right">{{ permission.id ? "You are updating existing permission" : "You are going to add new permission" }}</span></label>
										<input type="hidden" name="id" v-model="permission.id">
										<input type="text" name="name" v-model="permission.name" id="name" placeholder="Enter permission name" class="form-control">
										<span v-if="errors.name" class="text-danger">{{ errors.name[0] }}</span>
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
    name:"permissions",
    data(){
        return {
            protectedPermissions:[
								'role-list','role-create','role-edit','role-delete',
								'user-list','user-create','user-edit','user-delete',
								'permission-list','permission-create','permission-edit','permission-delete'
								],
            permissions:{},
			permission: {
				id:"",
				name:""
			},
			errors: {
				name:""
			},
			processing:false,
			isError:false,
        }
    },
    mounted(){
        this.getPermissions()
    },
    methods:{
        async getPermissions(page=1){
            await axios.get('/api/permissions?page='+page).then(response=>{
                this.permissions = response.data
            }).catch(error=>{
                console.log(error)
                this.permissions = {}
            })
        },
		editPermission(id){
            axios.post('/api/permissions/'+id).then(response=>{
				this.permission.id = response.data.data.id;
				this.permission.name = response.data.data.name;
            }).catch(error=>{
                console.log(error)
                this.roles = []
            })
        },
		async savePermission(){
			this.isError = false;
			
			if (!this.permission.name) {
				this.errors.name = ['Permission name is required'];
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
            await axios.post('/api/permission/save',this.permission).then(({data})=>{
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
				this.getPermissions()
            })
		},
        deletePermission(id){
            if(confirm("Are you sure to delete this permission ?")){
                axios.delete(`/api/permissions/delete/${id}`).then(response=>{
                    this.getPermissions()
                }).catch(error=>{
                    console.log(error)
                })
            }
        },
		resetform(){
			this.permission.id = '';
			this.permission.name = '';
		}
    }
}
</script>