$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
     });

$("button").click(function(){
$("#div").fadeln("slow");
});

$(".btn").click(function(){
$("p").slideUp(1000);
});
    });