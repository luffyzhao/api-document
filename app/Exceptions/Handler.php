<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Validation\ValidationException;
use App\Support\Facades\RestFulResponse;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        if ($request->expectsJson()) {
            if ($exception instanceof AuthenticationException) {
                return response()->json(
                  RestFulResponse::setMsg('没有找到对应的登录用户')->setExtra($exception->getMessage())->setCode(401)->create(),
                  401
                );
            } elseif ($exception instanceof ValidationException) {
                return response()->json(
                  RestFulResponse::setMsg('验证不通过!')->setExtra($exception->errors())->setCode(423)->create(),
                  423
                );
            } else {
                return response()->json(
                  RestFulResponse::setMsg('系统错误,请联系管理员!')->setExtra($exception->getMessage())->setCode(500)->create(),
                  500
                );
            }
        }
        return parent::render($request, $exception);
    }

    /**
     * Convert an authentication exception into a response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Illuminate\Auth\AuthenticationException  $exception
     * @return \Illuminate\Http\Response
     */
    protected function unauthenticated($request, AuthenticationException $exception)
    {
        return $request->expectsJson()
                    ? RestFulResponse::setMsg('没有找到对应的登录用户')->setExtra($exception->getMessage())->setCode(401)->create()
                    : redirect()->guest(route('login'));
    }
}
