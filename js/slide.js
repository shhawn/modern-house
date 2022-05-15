$(function(){

    // 초기 설정 //
    let i = 0;
    $('.sl_btn_a').css({"background-color": "#fff"});

    // 슬라이더 이미지와 인디케이터 버튼 연결하기 //
    function indiAuto(){
        if (i == 0){
            $('.slider_btn > li:not(:last-child)').css({"background-color": "#dcdcdc"});
            $('.slider_btn > li').eq(0).css({"background-color": "#fff"})
        } else if (i == 1){
            $('.slider_btn > li:not(:last-child)').css({"background-color": "#dcdcdc"});
            $('.slider_btn > li').eq(1).css({"background-color": "#fff"})
        } else if (i == 2){
            $('.slider_btn > li:not(:last-child)').css({"background-color": "#dcdcdc"});
            $('.slider_btn > li').eq(2).css({"background-color": "#fff"})
        } else if (i == 3){
            $('.slider_btn > li:not(:last-child)').css({"background-color": "#dcdcdc"});
            $('.slider_btn > li').eq(3).css({"background-color": "#fff"})
        } else if (i == 4){
            $('.slider_btn > li:not(:last-child)').css({"background-color": "#dcdcdc"});
            $('.slider_btn > li').eq(4).css({"background-color": "#fff"})
        } else if (i == 5){
            $('.slider_btn > li:not(:last-child)').css({"background-color": "#dcdcdc"});
            $('.slider_btn > li').eq(5).css({"background-color": "#fff"})
        } else if (i == 6){
            $('.slider_btn > li:not(:last-child)').css({"background-color": "#dcdcdc"});
            $('.slider_btn > li').eq(6).css({"background-color": "#fff"})
        }
    }
    let indiAutoControl = setInterval(indiAuto, 10);

    // 슬라이드 이미지마다 번호 할당 & 페이드 인/아웃 효과 //
    $('.slider_btn > li').eq(0).click(function(){
        if (i !== 0){
            $('.slider_img > li').eq(0).fadeIn();
            $('.slider_img > li').eq(i).fadeOut();
        }
        i = 0; 
    })
    $('.slider_btn > li').eq(1).click(function(){
        if (i !== 1){
            $('.slider_img > li').eq(1).fadeIn();
            $('.slider_img > li').eq(i).fadeOut();
        }
        i = 1;
    })
    $('.slider_btn > li').eq(2).click(function(){
        if (i !== 2){
            $('.slider_img > li').eq(2).fadeIn();
            $('.slider_img > li').eq(i).fadeOut();
        }
        i = 2;
    })
    $('.slider_btn > li').eq(3).click(function(){
        if (i !== 3){
            $('.slider_img > li').eq(3).fadeIn();
            $('.slider_img > li').eq(i).fadeOut();
        }
        i = 3;
    })
    $('.slider_btn > li').eq(4).click(function(){
        if (i !== 4){
            $('.slider_img > li').eq(4).fadeIn();
            $('.slider_img > li').eq(i).fadeOut();
        }
        i = 4;
    })
    $('.slider_btn > li').eq(5).click(function(){
        if (i !== 5){
            $('.slider_img > li').eq(5).fadeIn();
            $('.slider_img > li').eq(i).fadeOut();
        }
        i = 5;
    })
    $('.slider_btn > li').eq(6).click(function(){
        if (i !== 6){
            $('.slider_img > li').eq(6).fadeIn();
            $('.slider_img > li').eq(i).fadeOut();
        }
        i = 6;
    })

    // 자동 슬라이드 효과 //
    function slide(){
        i++;
        if (i > $('.slider_img > li:last').index()){
            i = 0;
        };
        $('.slider_img > li').eq(i).fadeIn();
        $('.slider_img > li').eq(i-1).fadeOut();
    }
    let slideAuto = setInterval(slide, 7000);

    // 좌우 화살표 클릭 시 슬라이드가 넘어가는 효과 //
    function prev(){
        $('.slider_img > li').eq(i-1).fadeIn();
        $('.slider_img > li').eq(i).fadeOut();
        i = i - 1;
        if (i < 0){
            i = $('.slider_img > li:last').index();
        }
    }
    $('.slider_left').click(function(){
        prev();
    })

    function next(){
        i++;
        if (i > $('.slider_img > li:last').index()){
            i = 0;
        };
        $('.slider_img > li').eq(i).fadeIn();
        $('.slider_img > li').eq(i-1).fadeOut();
    }
    $('.slider_right').click(function(){
        next();
    })

    // 자동 슬라이드 일시정지 효과 //
    $('.sl_btn_auto > span').click(function(){
        $(this).toggleClass('sl_btn_on');
        if ($('.sl_btn_auto > span').hasClass('sl_btn_on')){
            clearInterval(slideAuto);
        } else {
            slideAuto = setInterval(slide, 7000);
        }
    })

})