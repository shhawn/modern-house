$(document).ready(function(){
    
    // Category list hover
    $("#kitchen").mouseover(function(){
        $("#kitchen_list").show();
    });
    $(".nav_name").mouseout(function(){
        $(".nav_list").hide();
    });
    $("#kitchen_list").mouseover(function(){
        $("#kitchen_list").show();
    });
    $(".nav_list").mouseout(function(){
        $(".nav_list").hide();
    });

    // sub - thumbnail Indicator
    $(".goods_thum1").mouseover(function(){
        $(".goods_img").attr({"src":"img/re_img1.jpg", "alt":"goods1"});
    }).mouseleave(function(){
        $(".goods_img").attr({"src":"img/re_img1.jpg", "alt":"goods1"});
    });
    $(".goods_thum2").mouseover(function(){
        $(".goods_img").attr({"src":"img/re_img2.jpg", "alt":"goods2"});
    }).mouseleave(function(){
        $(".goods_img").attr({"src":"img/re_img1.jpg", "alt":"goods1"});
    });
    $(".goods_thum3").mouseover(function(){
        $(".goods_img").attr({"src":"img/re_img3.jpg", "alt":"goods3"});
    }).mouseleave(function(){
        $(".goods_img").attr({"src":"img/re_img1.jpg", "alt":"goods1"});
    });
    $(".goods_thum4").mouseover(function(){
        $(".goods_img").attr({"src":"img/re_img4.jpg", "alt":"goods4"});
    }).mouseleave(function(){
        $(".goods_img").attr({"src":"img/re_img1.jpg", "alt":"goods1"});
    });
    $(".goods_thum5").mouseover(function(){
        $(".goods_img").attr({"src":"img/re_img5.jpg", "alt":"goods5"});
    }).mouseleave(function(){
        $(".goods_img").attr({"src":"img/re_img1.jpg", "alt":"goods1"});
    });

    // sub - representative image Indicator
    $(".thum1").hover(function(){
        $(".re_img").attr({"src":"img/re_img1.jpg", "alt":"re_img1"});
    });
    $(".thum2").hover(function(){
        $(".re_img").attr({"src":"img/re_img2.jpg", "alt":"re_img2"});
    });
    $(".thum3").hover(function(){
        $(".re_img").attr({"src":"img/re_img3.jpg", "alt":"re_img3"});
    });
    $(".thum4").hover(function(){
        $(".re_img").attr({"src":"img/re_img4.jpg", "alt":"re_img4"});
    });
    $(".thum5").hover(function(){
        $(".re_img").attr({"src":"img/re_img5.jpg", "alt":"re_img5"});
    });
    $(".thum6").hover(function(){
        $(".re_img").attr({"src":"img/re_img6.jpg", "alt":"re_img6"});
    });
    
    // sub - save the Total price
    let currentMount = $('.mount').val();
    $('.mount').on('change keyup', function(){
        currentMount = $(this).val();
        priceSum();
    })

    $('.plus').click(function(e){
        e.preventDefault();
        if (currentMount >= 999){
            return false;
        }
        currentMount++;
        let plusMount = $('.mount').val(currentMount); 
        priceSum();
    })

    $('.minus').click(function(e){
        e.preventDefault();
        if (currentMount <= 1){
            return false;
        }
        currentMount--;
        let plusMount = $('.mount').val(currentMount);
        priceSum();
    })

    $('.totalPrice').text(priceSum);
    function priceSum(){
        let sumResult = 144400 * currentMount;
        let sumResult2 = sumResult.toLocaleString('ko-KR');
        $('.totalPrice').text(sumResult2);
    }

    // sub - section Scrolling
    let ProdInfo = $('#details').offset().top;
    let ProdReview = $('#evaluation').offset().top;
    let ProdQna = $('#QA').offset().top;
    let ProdService = $('#matters').offset().top;

    $('.prodInfo').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: ProdInfo}, 0);
    })
    $('.prodRev').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: ProdReview}, 0);
    })
    $('.prodQna').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: ProdQna}, 0);
    })
    $('.prodSer').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: ProdService}, 0);
    })
    
    // sub - Product Image Preview
    let productPreview = 1;

    function productFunc(){
        if (productPreview == 1){
            $(".goods_img").attr({"src":"img/re_img1.jpg", "alt":"goods1"});
            $('.goods_left > ul > li').find('img').removeClass('goods_on');
            $('.goods_thum1').addClass('goods_on');
        } else if (productPreview == 2){
            $(".goods_img").attr({"src":"img/re_img2.jpg", "alt":"goods2"});
            $('.goods_left > ul > li').find('img').removeClass('goods_on');
            $('.goods_thum2').addClass('goods_on');
        } else if (productPreview == 3){
            $(".goods_img").attr({"src":"img/re_img3.jpg", "alt":"goods3"});
            $('.goods_left > ul > li').find('img').removeClass('goods_on');
            $('.goods_thum3').addClass('goods_on');
        } else if (productPreview == 4){
            $(".goods_img").attr({"src":"img/re_img4.jpg", "alt":"goods4"});
            $('.goods_left > ul > li').find('img').removeClass('goods_on');
            $('.goods_thum4').addClass('goods_on');
        } else if (productPreview == 5){
            $(".goods_img").attr({"src":"img/re_img5.jpg", "alt":"goods5"});
            $('.goods_left > ul > li').find('img').removeClass('goods_on');
            $('.goods_thum5').addClass('goods_on');
        }
    }

    $('.btn_left').click(function(){
        if (productPreview <= 1){
            productPreview = 6;
        }
        productPreview--;
        productFunc();
    })

    $('.btn_right').click(function(){
        if (productPreview >= 5){
            productPreview = 0;
        }
        productPreview++;
        productFunc();
    })

})
