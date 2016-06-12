/**
 * Created by ZQX on 2016/6/11.
 */
define(function(require, exports, module){

    //var $ = require('__TPL__/jquery');

    exports.getData = function (cb) {
        var url = 'index.php/Home/Index/indexData';
        $.get(url, function(resp){
            cb(resp || [], require, exports, module);
        });
    }
});