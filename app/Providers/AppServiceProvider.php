<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repository\BookRepository;
use App\Repository\RoleRepository;
use App\Model\Book;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('App\Repository\Interfaces\BookRepositoryInterface', function () {
            return new BookRepository($this->app);
        });

        $this->app->singleton('App\Repository\Interfaces\RoleRepositoryInterface', function () {
            return new RoleRepository($this->app);
        });

        // 添加门面
        $this->app->singleton('App\Support\Facades\RestFulResponse', function () {
            return new \App\Support\RestFulResponse();
        });
    }
}
