var nodemailer = require('nodemailer');

var smtpTransport;
function initNodemailer(){
    smtpTransport = nodemailer.createTransport("SMTP",{
        host: "smtp.aliyun.com", // 主机
        secureConnection: true, // 使用 SSL
        port: 465, // SMTP 端口
        auth: {
            user: "yxc_gdut@aliyun.com", // 账号
            pass: "******" // 密码
        }
    });
    return smtpTransport;
}

function getTransport(){
    if(smtpTransport){
        return smtpTransport
    }else{
        return initNodemailer()
    }
}

function sendMail(params, success, error){
    var smtpTransport = getTransport();
    var mailOptions = {
        from: "yxc_gdut@aliyun.com", // 发件地址
        to: "234537021@qq.com", // 收件列表
        subject: "用户反馈 - 艾艾贴网站", // 标题
        html: "<p><b>姓名：</b> "+params.name+"</p>"+
                "<p><b>微信：</b> "+params.wechat+"</p>"+
                "<p><b>电话：</b> "+params.phone+"</p>"+
                "<p><b>邮箱：</b> "+params.email+"</p>"+
                "<p><b>内容：</b> "+params.content+"</p>"
    }
    // 发送邮件
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            error();
        }else{
            success();
        }
        smtpTransport.close(); // 如果没用，关闭连接池
    });

}

module.exports = {
    sendMail: sendMail
};