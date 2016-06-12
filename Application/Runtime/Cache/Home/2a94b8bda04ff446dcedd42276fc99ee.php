<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title>SeaJS - 调用模板演示</title>
</head>
/thinkphp-master/Tpl
<body>
<div id="doc">loading..</div>
<script src="/thinkphp-master/Public/assets/pages/plugins/seajs/sea.js"></script>
<script src="/thinkphp-master/Tpl/Home/conf/loader-config.js"></script>
<script src="/thinkphp-master/Public/assets/pages/plugins/jquery/jquery.min.js"></script>

<script>

    seajs.use('/thinkphp-master/Tpl/_service/index', function(data){
        data.getData(function(data, require, exports, module){
            require.async(['/thinkphp-master/Tpl/Home/Index/build/index.js'], function (template) {
                document.getElementById('doc').innerHTML = template('index', data);
            });
        });
    });

</script>
</body>
</html>