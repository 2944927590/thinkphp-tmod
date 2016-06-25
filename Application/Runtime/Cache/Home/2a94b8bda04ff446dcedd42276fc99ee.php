<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title>index.html</title>
</head>
<body>
<div id="test">loading..</div>

<script>window.TPL = "/thinkphp-master/Tpl";</script>

<script src="/thinkphp-master/Tpl/lib/loader/sea-debug.js"></script>
<script src="/thinkphp-master/Tpl/lib/loader/loader-config.js"></script>
<script src="/thinkphp-master/Tpl/vendor/jquery-2.2.0/jquery.js"></script>

<script>
    seajs.use('_service/index', function(data){
        data.getData(function(data, require, exports, module){
            require.async(['Home_index/index'], function (index) {
                $("#test").html( index(data) );
                require.async(['Home_index/click'], function (click) {
                    click.click();
                });
            });
        });
    });
</script>
</body>
</html>