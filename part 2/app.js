
$("#submit").on("click", function(){
    let title = $("#title").val();
    let rating = $("#rating").val()
    if(rating < 0 || rating > 10){
        alert('Rating must be between 0 and 10')
    }
    else if(title.length <2 ){
        alert('Title length must be more than 2 characters')
    }
    else{
    $("form").append("<p> You rated the movie "+ title +" a "+ rating +" out of 10 <input type='Button' style='height:20px;width:60px' value='Remove' id='remove'></p>")
    }
})

$('form').on('click', '#remove', function () {
    $("#remove").parent().remove();
  })

