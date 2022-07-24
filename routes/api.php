<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\PermissionsController;
use App\Http\Controllers\UsersController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('/login', [AuthController::class, 'login']);
Route::post('/register',[AuthController::class,'register']);
Route::post('/forgetpassword',[AuthController::class,'forgetpassword']);
Route::post('/resetpassword',[AuthController::class,'resetpassword']);
Route::post('/logout',[AuthController::class,'logout']);
/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user()->with('roles');
});
*/
Route::middleware(['auth:sanctum'])->group(function () {
	//roles routes
    Route::get('roles', [RolesController::class,'roles']);
    Route::post('roles/{id}', [RolesController::class,'getRoleById']);
    Route::post('role/save', [RolesController::class,'store']);
    Route::delete('roles/delete/{id}', [RolesController::class,'destroy']);
	
	//permissions routes
    Route::get('permissions', [PermissionsController::class,'permissions']);
    Route::post('permissions/{id}', [PermissionsController::class,'getPermissionById']);
    Route::post('permission/save', [PermissionsController::class,'store']);
    Route::delete('permissions/delete/{id}', [PermissionsController::class,'destroy']);
	
	//logged in user
    Route::post('user', [AuthController::class,'user']);
	
	//users routes
	Route::get('users', [UsersController::class,'users']);
	Route::post('users/{id}', [UsersController::class,'getUserById']);
	Route::post('usersdata/delete/save', [UsersController::class,'store']);
	Route::delete('users/delete/{id}', [UsersController::class,'destroy']);
});
