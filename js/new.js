$(function(){

    // 초기 설정 //
    let i = 0;

    // 슬라이드 이미지와 인디케이터 버튼 연결하기 //
    function newIndiAuto(){
        if (j == 0){
            $('.new_indicator li:not(:last-child)').css({"background-color": "#ddd"});
            $('.new_indicator li').eq(0).css({"background-color": "#000"});
        } else if (j == 1){
            $('.new_indicator li:not(:last-child)').css({"background-color": "#ddd"});
            $('.new_indicator li').eq(1).css({"background-color": "#000"});
        } else if (j == 2){
            $('.new_indicator li:not(:last-child)').css({"background-color": "#ddd"});
            $('.new_indicator li').eq(2).css({"background-color": "#000"});
        } else if (j == 3){
            $('.new_indicator li:not(:last-child)').css({"background-color": "#ddd"});
            $('.new_indicator li').eq(3).css({"background-color": "#000"});
        } else if (j == 4){
            $('.new_indicator li:not(:last-child)').css({"background-color": "#ddd"});
            $('.new_indicator li').eq(4).css({"background-color": "#000"});
        } else if (j == 5){
            $('.new_indicator li:not(:last-child)').css({"background-color": "#ddd"});
            $('.new_indicator li').eq(5).css({"background-color": "#000"});
        } else if (j == 6){
            $('.new_indicator li:not(:last-child)').css({"background-color": "#ddd"});
            $('.new_indicator li').eq(6).css({"background-color": "#000"});
        } else if (j == 7){
            $('.new_indicator li:not(:last-child)').css({"background-color": "#ddd"});
            $('.new_indicator li').eq(7).css({"background-color": "#000"});
        } else if (j == 8){
            $('.new_indicator li:not(:last-child)').css({"background-color": "#ddd"});
            $('.new_indicator li').eq(8).css({"background-color": "#000"});
        }
    }
    let newControl = setInterval(newIndiAuto, 10);

    // 슬라이드 넘김 효과
    let j = 0;
    function resetJ(){
        if (j > $('.new_content:last').index()){
            j = 0;
        } else if (j < 0){
            j = $('.new_content:last').index();
        }
    }

    function next(){
        $('.new_wrap').stop(true, true).animate({"marginLeft": "-370"}, 'fast', function(){
            $('.new_content').eq(i).appendTo('.new_wrap');
            $(this).css({"marginLeft": 0});
            j++;
            resetJ();
        });
    }
    $('.right').click(function(){
        next();
    })

    function prev(){
        $('.new_wrap').stop().animate({"top": "0"}, 50, function(){
            $('.new_wrap').css({"marginLeft": "-370px"});
            $('.new_content').eq(i-1).prependTo('.new_wrap');
            $(this).stop().animate({"marginLeft": "0px"}, 'fast');
            j--;
            resetJ();
        })
    }
    $('.left').click(function(){
        prev();
    })

    function slide(){
        $('.new_wrap').stop(true, true).animate({"marginLeft": "-370"}, function(){
            $('.new_content').eq(i).appendTo('.new_wrap');
            $(this).css({"marginLeft": 0});
            j++;
            resetJ();
        });
    }

    // 자동 슬라이드
    let newSlideAuto = setInterval(slide, 8000);

    $('.new_indi_auto > span').click(function(){
        $(this).toggleClass('new_btn_on');
        if ($('.new_indi_auto > span').hasClass('new_btn_on')){
            clearInterval(newSlideAuto);
        } else {
            newSlideAuto = setInterval(next, 8000);
        }
    })

    // 인디케이터 버튼 클릭 시 이동
    function change(){
        let indiIndex = $('.indiOn').index();
        for (m = 0; m < $('.new_content:last').index()+1; m++){
            if (indiIndex > $('.new_content:last').index()){
                indiIndex = 0;
            }
            $('.new_content img').eq(m).attr("src", "./img/new_content"+indiIndex+".jpg");
            indiIndex++;
        }
    }

    $('.new_indicator li').eq(0).click(function(){
        $('.new_indicator li').removeClass('indiOn');
        $(this).addClass('indiOn');
        change();
        j = 0;
    })

    $('.new_indicator li').eq(1).click(function(){
        $('.new_indicator li').removeClass('indiOn');
        $(this).addClass('indiOn');
        change();
        j = 1;
    })

    $('.new_indicator li').eq(2).click(function(){
        $('.new_indicator li').removeClass('indiOn');
        $(this).addClass('indiOn');
        change();
        j = 2;
    })

    $('.new_indicator li').eq(3).click(function(){
        $('.new_indicator li').removeClass('indiOn');
        $(this).addClass('indiOn');
        change();
        j = 3;
    })

    $('.new_indicator li').eq(4).click(function(){
        $('.new_indicator li').removeClass('indiOn');
        $(this).addClass('indiOn');
        change();
        j = 4;
    })

    $('.new_indicator li').eq(5).click(function(){
        $('.new_indicator li').removeClass('indiOn');
        $(this).addClass('indiOn');
        change();
        j = 5;
    })

    $('.new_indicator li').eq(6).click(function(){
        $('.new_indicator li').removeClass('indiOn');
        $(this).addClass('indiOn');
        change();
        j = 6;
    })

    $('.new_indicator li').eq(7).click(function(){
        $('.new_indicator li').removeClass('indiOn');
        $(this).addClass('indiOn');
        change();
        j = 7;
    })

    $('.new_indicator li').eq(8).click(function(){
        $('.new_indicator li').removeClass('indiOn');
        $(this).addClass('indiOn');
        change();
        j = 8;
    })

})