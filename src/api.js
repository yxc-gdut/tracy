var email = require('./email');


function main(req, res, next) {
    switch(req.url){
        case '/api/contact':
            contact(req, res, next);
            break;
        default: next();
    }
}

function contact(req, res, next) {
    var params = req.body;

    email.sendMail(params,function(){
        console.log("发送邮件成功")
        res.status(200);
        res.json({result:'ok'})
    },function(){
        res.status(403);
        res.json({result:'fail',msg:'send mail fail'})
    })
}

module.exports = {
    main: main
};