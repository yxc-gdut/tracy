$(function(){
  var $move = $("#moveItem"),
      $nav = $("#nav"),
      $current = $(".selected"),
      $list = $("#navList"),
      $item = $(".navItem"),
      animateHandler = null,
      duration = 300;

  function moveTo($toEl, cb){
    $move.stop();
    $move.animate({width: $toEl[0].offsetWidth, left:$toEl[0].offsetLeft}, duration);
  }

  $item.on("mouseenter", function(){
    var $this = $(this);
    if($this.hasClass("selected"))return;
    moveTo($this);

  }).on("mouseleave", function(){
    var $this = $(this);
    if($this.hasClass("selected"))return;
    moveTo($current);
  })

  $move.css({width: $current[0].offsetWidth, left:$current[0].offsetLeft});
})
