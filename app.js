
$.when($.ready).then(function () {
    console.log("Let's get read to party with jQuery")
})

$("img").addClass("image-center")

$("p:last-child").remove()

$("#title").css("font-size", Math.random() *100);

$("ol").append("<li> Adding a list </>")

$("aside").empty().append("<p> Sorry for the existance of this list </>")

$(".form-control").on("mouseleave", function (){
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color","rgb("+ red +","+ blue +","+ green +")")
})

$("img").on("click", function (){
    $(this).remove();
})