$(function(){
    $("#contactBtn").on("click",function(){
        var name = $("#name").val()
            , email = $("#email").val()
            , phone = $("#phone").val()
            , wechat = $("#wechat").val()
            , content = $("#content").val()
            , code = $("#code").val();

        $.ajax({
            url: "/api/contact",
            type:'POST',
            dataType:'json',
            data:{
                name : name,
                email : email,
                phone : phone,
                wechat : wechat,
                content : content,
                code : code
            },
            success:function(data, textStatus){
                alert("提交成功");
            },
            error:function(XMLHttpRequest, textStatus, errorThrown){
                alert("提交失败，请稍后再试")
            }
        })
    })
})