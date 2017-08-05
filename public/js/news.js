$(function(){
    var $cover = $("#cover"),
        $videoFrame = $("#videoFrame");

    $cover.on("click", function(){
        var $this = $(this);
        if($this.attr("id") == "videoFrame")return;
        $videoFrame.attr('src',"");
        $cover.hide();
    })

    $(".video_item_a").on("click",function(){
        var $this = $(this),
            url = $this.data().url;
        $cover.show();
        $videoFrame.attr('src', url);
    })

})