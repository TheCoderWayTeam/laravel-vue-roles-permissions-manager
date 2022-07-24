<?php 
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash; 
use App\Models\User; 
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UsersSeeder extends Seeder { 
    /** 
    * Run the database seeds. 
    * 
    * @return void 
    */
   public function run() {  
           $users = [ 
            [ 
              'name' => 'Super Admin',
              'email' => 'superadmin@gmail.com',
              'password' => '12345678',
			  'roles' => [1],
			  'permissions' => []
            ],
            [
              'name' => 'Admin',
              'email' => 'admin@gmail.com',
              'password' => '12345678',
			  'roles' => [2],
			  'permissions' => []
            ],
			[
              'name' => 'Hr',
              'email' => 'hr@gmail.com',
              'password' => '12345678',
			  'roles' => [3],
			  'permissions' => []
            ],
            [
              'name' => 'Guest',
              'email' => 'guest@gmail.com',
              'password' => '12345678',
			  'roles' => [4],
			  'permissions' => [13]
            ] 
          ];

          foreach($users as $user)
          {
              $createduser = User::create([
               'name' => $user['name'],
               'email' => $user['email'],
               'password' => Hash::make($user['password'])
             ]);
			 
			 $createduser->assignRole($user['roles']);
			 $createduser->givePermissionTo($user['permissions']);
			 
           }

    }
}