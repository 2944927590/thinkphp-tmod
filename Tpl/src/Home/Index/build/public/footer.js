/*TMODJS:{"version":11,"md5":"7c260cdb4bb2e4a3297d1b2967873f0a"}*/
define(function(require) {
    return require("../copyright"), require("../home_index")("public/footer", function($data, $filename) {
        "use strict";
        var $utils = this, time = ($utils.$helpers, $data.time), $escape = $utils.$escape, include = function(filename, data) {
            data = data || $data;
            var text = $utils.$include(filename, data, $filename);
            return $out += text;
        }, $out = "";
        return $out += '<div id="footer"> ', time && ($out += " <p class='time'>", $out += $escape(time), 
        $out += "</p> "), $out += " ", include("../copyright"), $out += " </div>", new String($out);
    });
});