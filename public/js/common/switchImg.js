$(function () {
    var $location = $("#location"),
        duration = 3000,
        animateDuration = 500,
        imgNum = $(".imgItem").length,
        rollHandler = null;

    $location.on("click", ".location_item", function () {
        var $this = $(this),
            imgId = $this.data("id"),
            $current = $(".js_currentImg"),
            $switchImg = $("#" + imgId);

        if(rollHandler){
            window.clearInterval(rollHandler);
            rollHandler = null;
        }

        $current.stop(true,true).hide(animateDuration, function () {
            $current.removeClass("js_currentImg");
            $("#lo_"+$current.attr("id")).removeClass("location_item_active");
        });

        $switchImg.stop(true,true).show(animateDuration, function () {
            $switchImg.addClass("js_currentImg");
            $("#lo_"+imgId).addClass("location_item_active");
            rollImg();
        });
    })

    function rollImg() {
        rollHandler = setInterval(function () {
            var $current = $(".js_currentImg");
            $current.stop(true,true).hide(animateDuration, function () {
                $current.removeClass("js_currentImg");
                $("#lo_"+$current.attr("id")).removeClass("location_item_active");
            });

            var newImgId = $current.attr("id").split("_")[1];
            newImgId = (1 + newImgId) % 3;

            var $switchImg = $("#switchImg_" + newImgId);
            $switchImg.stop(true,true).show(animateDuration, function () {
                $switchImg.addClass("js_currentImg");
                $("#lo_switchImg_"+newImgId).addClass("location_item_active");
            });
        }, duration)
    }

    $(window).on("load", function () {
        rollImg();
    });
})