$(function(){
    $.ajax({
        url: "./json/wow.json",
        dataType: "json",
        success: function(data){
            if(data.length > 0){
                for(i in data){
                    let name = data[i].name;
                    let price = data[i].price;
                    let url = data[i].url;

                    $('#wowlist > ul > li').eq(i).append('<a href="sub.html" target="_self"></a>');
                    $('#wowlist > ul > li > a').eq(i).append('<img src="img/'+ url +'">');
                    $('#wowlist > ul > li > a').eq(i).append('<div class="wow_box"></div>');
                    $('#wowlist .wow_box').eq(i).append('<h5>모던하우스</h5>');
                    $('#wowlist .wow_box').eq(i).append('<p>' + name + '</p>');
                    $('#wowlist .wow_box').eq(i).append('<span>' + price + '</span>');
                }
            }
        }
    })
    $.ajax({
        url: "./json/wow2.json",
        dataType: "json",
        success: function(data){
            if(data.length > 0){
                for(j in data){
                    let name2 = data[j].name;
                    let price2 = data[j].price;
                    let url2 = data[j].url;

                    $('#wowlist2 > ul > li').eq(j).append('<a href="sub.html" target="_self"></a>');
                    $('#wowlist2 > ul > li > a').eq(j).append('<img src="img/'+ url2 +'">');
                    $('#wowlist2 > ul > li > a').eq(j).append('<div class="wow_box"></div>');
                    $('#wowlist2 .wow_box').eq(j).append('<h5>모던하우스</h5>');
                    $('#wowlist2 .wow_box').eq(j).append('<p>' + name2 + '</p>');
                    $('#wowlist2 .wow_box').eq(j).append('<span>' + price2 + '</span>');
                }
            }
        }
    })
})