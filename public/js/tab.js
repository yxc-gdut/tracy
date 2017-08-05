$(function(){
    var $tab_nav = $(".tab_nav"),
        activeClass = 'active';

    $tab_nav.on("click", '.tab_navItem', function(){
        var $this = $(this),
            $tab_nav_active = $(".tab_nav ." + activeClass);
        if($this.hasClass(activeClass))return;

        $tab_nav_active.removeClass(activeClass);
        $this.addClass(activeClass);

        show($this.data().id);
    })

    $tab_nav.on("click", '.tab_navItem_a', function(e){
        e.stopPropagation();
        e.preventBubble();
    })

    function show(id){
        var $tab_c_active = $(".tab_c ." + activeClass);
        var $active = $("#"+id);
        $tab_c_active.hide();
        $active.show().addClass(activeClass);
    }
})