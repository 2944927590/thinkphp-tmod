/*TMODJS:{"version":8,"md5":"65120c69bc189fadb669a86deaee89ba"}*/
template('index',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$escape=$utils.$escape,title=$data.title,$each=$utils.$each,list=$data.list,$value=$data.$value,$index=$data.$index,$out='';include('./public/header');
$out+=' <div id="main"> <h3>';
$out+=$escape(title);
$out+='</h3> <ul> ';
$each(list,function($value,$index){
$out+=' <li><a href="';
$out+=$escape($value.url);
$out+='">';
$out+=$escape($value.title);
$out+='</a></li> ';
});
$out+=' </ul> </div> ';
include('./public/footer');
return new String($out);
});