/*TMODJS:{"version":20,"md5":"d54bff050a8a2e18e2f0d3ab073feab9"}*/
define(function(require) {
    return require("./public/header"), require("./public/footer"), require("./home_index")("index", function($data, $filename) {
        "use strict";
        var $utils = this, include = ($utils.$helpers, function(filename, data) {
            data = data || $data;
            var text = $utils.$include(filename, data, $filename);
            return $out += text;
        }), $escape = $utils.$escape, title = $data.title, $each = $utils.$each, list = $data.list, $out = ($data.$value, 
        $data.$index, "");
        return include("./public/header"), $out += ' <style> .button { width: 80px; height: 40px; outline: none; background-color: #2aabd2; border: 0; } </style> <div id="main"> <h3>', 
        $out += $escape(title), $out += "</h3> <ul> ", $each(list, function($value) {
            $out += ' <li><a href="', $out += $escape($value.url), $out += '">', $out += $escape($value.title), 
            $out += "</a></li> ";
        }), $out += ' </ul> <button type="button" class="button" id="button">click!</button> </div> ', 
        include("./public/footer"), new String($out);
    });
});