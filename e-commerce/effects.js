$(function(){
    var effects = "animated flipInX";
    var effectsEnd = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd" ;
    $('div.card').hover(function(){
        $(this).addClass(effects).one(effectsEnd, function(){
            $(this).removeClass(effects);
        });
    });
});