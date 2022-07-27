<?php 
namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use DB;
    
class PermissionsController extends Controller
{

    function __construct()
    {
         $this->middleware('permission:permission-list|permission-create|permission-edit|permission-delete', ['only' => ['index','store']]);
         $this->middleware('permission:permission-create', ['only' => ['create','store']]);
         $this->middleware('permission:permission-edit', ['only' => ['edit','store']]);
         $this->middleware('permission:permission-delete', ['only' => ['destroy']]);
    }
    
	/**
     * permissions List with pagination.
     *
     * @param  array  $request
     * @return json array response
     */
    public function permissions(Request $request)
    {
		if($request->input('page')){
			$permissions = Permission::paginate(5);
			return response()->json($permissions);
		}else{
			$permissions = Permission::all();
		    return response()->json([
				'title' => 'Success.',
				'message' => 'Permissions List.',
				'data' => $permissions
			], 200);
		}
    }
	
	/**
     * Save or update Permission
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
				'name' => 'required|unique:permissions,name,'.$id
			]);
			$msg = 'Permission updated successfully.';
			
			$permission = Permission::find($id);
			$permission->name = $request->input('name');
			$permission->guard_name = 'api';
			$permission->save();
		}else{
			$this->validate($request, [
				'name' => 'required|unique:permissions,name'
			]);
			$msg = 'Permission created successfully.';
			$permission = Permission::create(['name' => $request->input('name'),'guard_name' => 'api']);
		}
		
		return response()->json([
			'title' => $msg,
			'message' => $msg
		], 200);
		
    }
	
	/**
     * Permissions details by ID
     *
     * @param  Int  $id
     * @return json array response
     */
    public function getPermissionById($id)
    {
        $permission = Permission::find($id);
    
        return response()->json([
				'title' => 'Success.',
				'message' => 'Permission Details.',
				'data' => $permission
			], 200);
    }
	
	/**
     * Delete Permission
     *
     * @param  Int  $id
     * @return json array response
     */
    public function destroy($id)
    {
        DB::table("permissions")->where('id',$id)->delete();
        
		return response()->json([
				'title' => 'Success.',
				'message' => 'Permission Deleted.',
				'data' => ''
			], 200);
    }
}