<?php

/**
 * [namespace description].
 *
 * @var [type]
 */

namespace App\Support;

class RestFulResponse
{
    /**
     * 请求数据.
     *
     * @var array
     */
    private $data = [];

    /**
     * 请求状态描述，调试用.
     *
     * @var string
     */
    private $msg = '';

    /**
     * 业务自定义状态码
     *
     * @var int
     */
    private $code = 0;

    /**
     * 全局附加数据,内容不定.
     *
     * @var void
     */
    private $extra;

    /**
     * 获取请求数据.
     *
     * @method getData
     *
     * @return array [description]
     *               author
     */
    public function getData()
    {
        return $this->data;
    }

    /**
     * 设置请求数据.
     *
     * @method setData
     *
     * @param array $data [description]
     *                    author
     */
    public function setData($data): self
    {
        $this->data = $data;

        return $this;
    }

    /**
     * 获取请求数据.
     *
     * @method getData
     *
     * @return array [description]
     *               author
     */
    public function getMsg(): string
    {
        return $this->msg;
    }

    /**
     * 设置请求数据.
     *
     * @method setMsg
     *
     * @param array $data [description]
     *                    author
     */
    public function setMsg(string $msg): self
    {
        $this->msg = $msg;

        return $this;
    }

    /**
     * 获取请求数据.
     *
     * @method getData
     *
     * @return array [description]
     *               author
     */
    public function getCode(): int
    {
        return $this->msg;
    }

    /**
     * 设置请求数据.
     *
     * @method setMsg
     *
     * @param array $data [description]
     *                    author
     */
    public function setCode(int $code): self
    {
        $this->code = $code;

        return $this;
    }

    /**
     * 获取请求数据.
     *
     * @method getData
     *
     * @return array [description]
     *               author
     */
    public function getExtra()
    {
        return $this->extra;
    }

    /**
     * 设置请求数据.
     *
     * @method setMsg
     *
     * @param array $data [description]
     *                    author
     */
    public function setExtra($extra)
    {
        $this->extra = $extra;

        return $this;
    }

    /**
     * 创建返回.
     *
     * @method create
     *
     * @return array [description]
     *               author
     */
    public function create(): array
    {
        return [
          'data' => $this->data,
          'code' => $this->code,
          'msg' => $this->msg,
          'extra' => $this->extra,
        ];
    }
}
