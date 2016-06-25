/**
 * Created by alsy on 2016/6/19.
 */
define(function(require, exports, module){
    var alertM = require('./alert');
    exports.click = function(){
        $("#button").on('click', function(){
            alertM.show();
            alert(1);
        });
    }
});