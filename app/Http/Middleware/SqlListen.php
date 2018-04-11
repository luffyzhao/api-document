<?php

namespace App\Http\Middleware;

use Closure;
use DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Input;

class SqlListen
{
    protected $request = null;

    protected $hr = '------------------------------[%s]---------------------------------';

    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure                 $next
     *
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $this->request = $request;

        if (config('log.debug', true)) {
            $this->begin();
            // sql 监听
            $this->sqlListen();
        }

        $response = $next($request);

        if (config('log.debug', true)) {
            $this->end();
        }

        return $response;
    }

    /**
     * 开始.
     *
     * @method   begin
     * @DateTime 2017-10-14T14:07:41+0800
     *
     * @return [type] [description]
     */
    protected function begin()
    {
        log::info(sprintf($this->hr, 'begin'));
        Log::info($this->header());
    }

    /**
     * 结束
     *
     * @method   end
     * @DateTime 2017-10-14T14:14:13+0800
     *
     * @return [type] [description]
     */
    protected function end()
    {
        log::info(sprintf($this->hr, 'end')."\r\n\r\n");
    }

    /**
     * Sql监听.
     *
     * @method   sqlListen
     * @DateTime 2017-10-14T14:04:32+0800
     *
     * @return [type] [description]
     */
    protected function sqlListen()
    {
        config('log.sql_debug', true) && DB::listen(function ($sql) {
            foreach ($sql->bindings as $i => $binding) {
                if ($binding instanceof \DateTime) {
                    $sql->bindings[$i] = $binding->format('\'Y-m-d H:i:s\'');
                } else {
                    if (is_string($binding)) {
                        $sql->bindings[$i] = "'$binding'";
                    }
                }
            }
            $query = str_replace(array('%', '?'), array('%%', '%s'), $sql->sql);
            $query = vsprintf($query, $sql->bindings);
            Log::info($query);
        });
    }

    /**
     * 日志头.
     *
     * @method   header
     * @DateTime 2017-10-14T14:09:58+0800
     *
     * @return [type] [description]
     */
    protected function header()
    {
        Log::info(sprintf('%s %s', $this->request->getMethod(), $this->request->getRequestUri()));
        if ($this->request->isMethod('post')) {
            Log::info(json_encode(Input::all()));
        }
    }
}
