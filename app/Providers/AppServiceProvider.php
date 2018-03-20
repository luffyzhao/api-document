<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repository\Interfaces\BookRepositoryInterface;
use App\Repository\BookRepository;
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
        $this->app->singleton(BookRepositoryInterface::class, function () {
            return new BookRepository(new Book);
        });
    }
}
