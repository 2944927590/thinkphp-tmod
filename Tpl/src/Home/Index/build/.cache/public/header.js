/*TMODJS:{"version":10,"md5":"70c83e5553cc5877fffea1152fc9c2a8"}*/
template('public/header',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';$out+=' <div id="header"> ';
include('./logo');
$out+=' <ul id="nav"> <li><a href="http://www.qq.com">首页1</a></li> <li><a href="http://news.qq.com/">新闻</a></li> <li><a href="http://pp.qq.com/">图片</a></li> <li><a href="http://mil.qq.com/">军事</a></li> </ul> </div>  ';
return new String($out);
});