<?php

namespace App\Http\Middleware;

/*
 * This file is part of Entrust,
 * a role & permission management solution for Laravel.
 *
 * @license MIT
 * @package Zizaco\Entrust
 */

use Route;
use Closure;
use Illuminate\Contracts\Auth\Guard;

class EntrustPermission
{
    const DELIMITER = ',';

    protected $auth;

    /**
     * Creates a new instance of the middleware.
     *
     * @param Guard $auth
     */
    public function __construct(Guard $auth)
    {
        $this->auth = $auth;
    }

    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param Closure                  $next
     * @param  $permissions
     *
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $permissions = explode(self::DELIMITER, Route::currentRouteName());

        if ($this->auth->guest() || !$request->user()->can($permissions)) {
            abort(403);
        }

        return $next($request);
    }
}
