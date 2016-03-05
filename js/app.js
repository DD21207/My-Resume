/**
 * Created by Administrator on 2016/3/2.
 */
$(document).ready(function(){
    var length,
            currentIndex = 0,
            interval,
            hasStarted = false,
            t = 3000;
    length = $('.slide_panel').length;
    $('.slide_panel:not(:first)').hide();
    $('.slide_item:first').addClass('slide_item_selected');
    $('.slide_page').hide();
    $('.slide_panel,.slide_pre,.slide_next').hover(function(){
        stop();
        $('.slide_page').show();
    },function(){
         $('.slide_page').hide();
        start();});
    $('.slide_item').hover(function(e){
        stop();
        var preIndex = $('.slide_item').filter('.slide_item_selected').index();
        currentIndex = $(this).index();
        play(preIndex,currentIndex);
    },function(){
        start();
    });
    $('.slide_pre').bind('click',function(){
        pre();
    });
    $('.slide_next').bind('click',function(){
        next();
    });
    function pre(){
        var preIndex = currentIndex;
        currentIndex = (--currentIndex + length) % length;
        play(preIndex,currentIndex);
    }
    function next(){
        var preIndex = currentIndex;
        currentIndex = ++currentIndex % length;
        play(preIndex,currentIndex);
    }
    function play(preIndex,currentIndex){
        $('.slide_panel').eq(preIndex).fadeOut(500).parent().children().eq(currentIndex).fadeIn(1000);
        $('.slide_item').removeClass('slide_item_selected');
        $('.slide_item').eq(currentIndex).addClass('slide_item_selected');
    }
    function start(){
        if(!hasStarted){
            hasStarted = true;
            interval = setInterval(next,t);
        }
    }
    function stop(){
        clearInterval(interval);
        hasStarted = false;
    }
    start();
});