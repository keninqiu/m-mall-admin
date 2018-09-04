var request = require('request');
var md5 = require('md5');
var openid = "oK4nM4knAiEJqyjX65pn_gPlC-jY";
var stringA = "appid=wx192b22a71f2b6ceb&attach=支付测试&body=APP支付测试&mch_id=1510812691&nonce_str=1add1a30ac87aa2db72f57a2375d8fec&notify_url=https://wx.xingfangsiyuan.cn/api/common/wxpay&openid="+openid+"&out_trade_no=1415659990&spbill_create_ip=14.23.150.211&total_fee=1&trade_type=JSAPI";
var stringSignTemp=stringA+"&key=136791034471322645509813679103xM";
var sign=md5(stringSignTemp).toUpperCase();
var body = '<xml>\
   <appid>wx192b22a71f2b6ceb</appid>\
   <attach>支付测试</attach>\
   <body>APP支付测试</body>\
   <mch_id>1510812691</mch_id>\
   <nonce_str>1add1a30ac87aa2db72f57a2375d8fec</nonce_str>\
   <notify_url>https://wx.xingfangsiyuan.cn/api/common/wxpay</notify_url>\
   <openid>oK4nM4knAiEJqyjX65pn_gPlC-jY</openid>\
   <out_trade_no>1415659990</out_trade_no>\
   <spbill_create_ip>14.23.150.211</spbill_create_ip>\
   <total_fee>1</total_fee>\
   <trade_type>JSAPI</trade_type>\
   <sign>'+sign+'</sign>\
</xml>';
request.post(
    {url:'https://api.mch.weixin.qq.com/pay/unifiedorder',
    body : body,
    headers: {'Content-Type': 'text/xml'}
    },
    function (error, response, body) {        
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);