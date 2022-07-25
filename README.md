# laravel-vue-roles-permissions-manager
Laravel-8 and Vue-2 Roles Permissions Admin - Spatie version

This is a Laravel 8 and Vue2 starter project with roles-permissions management based on [Spatie Laravel-permission package](https://github.com/spatie/laravel-permission)

complete login/register system with role and permissions managment on Laravel 8 and Vue2

## Usage

This is not a package - it's a full Laravel/Vue project that you should use as a starter, and then add your own custom functionality.

- Clone the repository with `git clone`
- Copy `.env.example` file to `.env` and edit database credentials there
- Run `composer update`
- Run `php artisan optimize:clear`
- Run `php artisan config:clear`
- Run `php artisan migrate:fresh --seed` (it has some seeded data - see below)
- Run `npm install` (Node package manager for Vue)
- Run `npm run watch`
- Run `php artisan serve`

- That's it: launch the main URL and login with default Super Admin credentials `superadmin@gmail.com` - `12345678`
  `admin@gmail.com` - `12345678`
  `hr@gmail.com` - `12345678`
  `guest@gmail.com` - `12345678`

## This starter has few roles
	-  Administrator
	-  Assistance Administrator
	-  HR
	-  Guest

## This starter has few permissions
	-  	role-list
	-	role-create
	-	role-edit
	-	role-delete
	-	user-list
	-	user-create
	-	user-edit
	-	user-delete
	-	permission-list
	-	permission-create
	-	permission-edit
	-	permission-delete
	-	Profile-manage

You can create more roles/permissions/users, and then use them in your code, by using functionality like `Gate` or `@can`, as in default Laravel, or with help of Spatie's package methods.

## License

The [MIT license](http://opensource.org/licenses/MIT).


## THECODERWAY "We develope your Dreams"
## "We develope your Dreams"
## "with code,"
## "with proud"
