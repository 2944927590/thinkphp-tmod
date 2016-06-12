define(function(require, exports, module){

    var data = require('data');

    exports.getData = function (cb) {
        var url = 'index.php/Home/Index/indexData';
        data.query(url, function(resp){
            cb(resp || [], require, exports, module);
        });
    }

});