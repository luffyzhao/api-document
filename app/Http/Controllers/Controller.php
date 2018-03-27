<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Support\Facades\RestFulResponse;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * 创建返回资源.
     *
     * @method response
     *
     * @param array  $data  [description]
     * @param string $msg   [description]
     * @param int    $code  [description]
     * @param [type] $extra [description]
     *
     * @return [type] [description]
     *                author
     */
    public function response($data = [], string $msg = '成功', int $code = 200, $extra = null)
    {
        return response()->json(
            RestFulResponse::setData($data)
              ->setMsg($msg)->setCode($code)
              ->setExtra($extra)->create(),
            $code
        );
    }
}
