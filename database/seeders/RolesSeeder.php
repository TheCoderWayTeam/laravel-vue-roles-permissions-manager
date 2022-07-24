<?php 
namespace Database\Seeders;

use Illuminate\Database\Seeder; 
use Spatie\Permission\Models\Role;

class RolesSeeder extends Seeder { 
    /** 
    * Run the database seeds. 
    * 
    * @return void 
    */
   public function run() {  
           $roles = [ 
            [ 
              'name' => 'Administrator',
              'guard_name' => 'api',
			  'permissions' => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            ],
			[ 
              'name' => 'Assistance Administrator',
              'guard_name' => 'api',
			  'permissions' => [5, 6, 7, 8],
            ],
			[ 
              'name' => 'HR',
              'guard_name' => 'api',
			  'permissions' => [5],
            ],
			[ 
              'name' => 'Guest',
              'guard_name' => 'api',
			  'permissions' => [13],
            ]
          ];

          foreach($roles as $role)
          {
              $rolecreated = Role::create([
               'name' => $role['name'],
               'guard_name' => $role['guard_name']
             ]);
			 
			 $rolecreated->syncPermissions($role['permissions']);
           }

    }
}