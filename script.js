var link = $(".header-item")

link.on("click",function() {
    link.removeClass("actived");
    $(this).addClass("actived");
})