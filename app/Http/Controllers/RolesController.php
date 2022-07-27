<?php 
namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use DB;
    
class RolesController extends Controller
{

    function __construct()
    {
         $this->middleware('permission:role-list|role-create|role-edit|role-delete', ['only' => ['index','store']]);
         $this->middleware('permission:role-create', ['only' => ['create','store']]);
         $this->middleware('permission:role-edit', ['only' => ['edit','store']]);
         $this->middleware('permission:role-delete', ['only' => ['destroy']]);
    }
	
    /**
     * Roles List with pagination.
     *
     * @param  array  $request
     * @return json array response
     */
    public function roles(Request $request)
    {
		if($request->input('page')){
			$roles = Role::paginate(5);
			return response()->json($roles);
		}else{
			$roles = Role::all();
		    return response()->json([
				'title' => 'Success.',
				'message' => 'Roles List.',
				'data' => $roles
			], 200);
		}
		
    }
	
	/**
     * Save or update Role details Permission
     *
     * @param  array  $request
     * @return json array response
     */
    public function store(Request $request)
    {
		$id = $request->input('id');
		$msg = '';
		if($id){
			$this->validate($request, [
				'name' => 'required|unique:roles,name,'.$id
			]);
			$msg = 'Role updated successfully.';
			
			$role = Role::find($id);
			$role->name = $request->input('name');
			$role->save();
		}else{
			$this->validate($request, [
				'name' => 'required|unique:roles,name'
			]);
			$msg = 'Role created successfully.';
			$role = Role::create(['name' => $request->input('name'),'guard_name' => 'api']);
		}
		$role->syncPermissions($request->input('rolePermissions'));
		 
		return response()->json([
			'title' => $msg,
			'message' => $msg
		], 200);
		
    }
	
	/**
     * Roles details with Permissions by ID
     *
     * @param  Int  $id
     * @return json array response
     */
    public function getRoleById($id)
    {
        $role = Role::find($id);
		
		$role['rolePermissions'] = Permission::join("role_has_permissions","role_has_permissions.permission_id","=","permissions.id")
            ->where("role_has_permissions.role_id",$id)
            ->pluck('id')->toArray();
		
        return response()->json([
				'title' => 'Success.',
				'message' => 'Role Details.',
				'data' => $role
			], 200);
    }
	
	/**
     * Delete role
     *
     * @param  Int  $id
     * @return json array response
     */
    public function destroy($id)
    {
        DB::table("roles")->where('id',$id)->delete();
        
		return response()->json([
				'title' => 'Success.',
				'message' => 'Role Deleted.',
				'data' => ''
			], 200);
    }
}