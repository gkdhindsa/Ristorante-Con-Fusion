$(document).ready(function () {
    $("#mycarousel").carousel({
        interval: 2000
    });
    $("#carouselButton").click(function () {
        if ($('#carouselBUtton').children('span').hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("carouselButton").children('span').removeClass('fa-pause');
            $("carouselButton").children('span').addClass('fa-play');

        } else {
            $("#mycarousel").carousel('cycle');
            $("carouselButton").children('span').removeClass('fa-play');
            $("carouselButton").children('span').addClass('fa-pause');

        }
    });
});


$("#modalButton").click(function () {
    $('#form').modal('show'); 
    $('#form').modal('toggle');
})
$("#loginButton").click(function(){
    $('#loginModal').modal('toggle');
    $('#loginModal').modal('show');
})
$(".close-login").click(function(){
    $('#loginModal').modal('hide');
   
})
$(".close-form").click(function(){
    $('#form').modal('hide');
});