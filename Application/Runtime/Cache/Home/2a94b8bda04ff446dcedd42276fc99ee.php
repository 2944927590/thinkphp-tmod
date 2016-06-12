<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title>SeaJS - 调用模板演示</title>
</head>
<body>
<div id="doc">loading..</div>

<script>window.TPL = "/thinkphp-master/Tpl";</script>
<script src="/thinkphp-master/Public/assets/pages/plugins/seajs/sea-debug.js"></script>
<script src="/thinkphp-master/Tpl/lib/loader/loader-config.js"></script>
<script src="/thinkphp-master/Public/assets/pages/plugins/jquery/jquery.js"></script>

<script>
    seajs.use('_service/index', function(data){
        data.getData(function(data, require, exports, module){
            require.async(['Home/Index/build/index.js'], function (template) {
                document.getElementById('doc').innerHTML = template('index', data);
            });
        });
    });

</script>
</body>
</html>