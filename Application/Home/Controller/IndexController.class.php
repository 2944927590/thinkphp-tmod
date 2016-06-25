<?php
namespace Home\Controller;

use Think\Controller;

class IndexController extends Controller
{
    public function index() {
        $this->display();
    }

    public function indexData() {
        $data = array (
            "title" => '国内要闻',
            "time" =>  time(),
            "list" => array(
                array(
                    "title" => '<油价>调整周期缩至10个工作日 无4%幅度限制',
                    "url" => 'http://finance.qq.com/zt2013/2013yj/index.htm'
                ),
                array(
                    "title" => '明起汽油价格每吨下调310元 单价回归7元时代',
                    "url" => 'http://finance.qq.com/a/20130326/007060.htm'
                ),
                array(
                    "title" => '广东副县长疑因抛弃情妇遭6女子围殴 纪检调查',
                    "url" => 'http://news.qq.com/a/20130326/001254.htm'
                )
            )
        );
        $this->ajaxReturn($data);
    }

}