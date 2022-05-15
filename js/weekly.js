$(function(){
    $.ajax({
        url: "./json/weekly.json",
        dataType: "json",
        success: function(data){
            if(data.length > 0){
                for(i in data){
                    let name = data[i].name;
                    let discount = data[i].discount;
                    let percent = data[i].percent;
                    let price = data[i].price;
                    let url = data[i].url;

                    $('.weekly_box').eq(i).append('<a href="sub.html" target="_self"></a>');
                    $('.weekly_box > a').eq(i).append('<div class="weekly_imgbox"><img src="img/'+ url + '"></div>');
                    $('.weekly_box > a').eq(i).append('<div class="percent"><span>' + percent + '</span></div>');
                    $('.weekly_box > a').eq(i).append('<h5>' + name +  '</h5>');
                    $('.weekly_box > a').eq(i).append('<del>' + discount + '</del>');
                    $('.weekly_box > a').eq(i).append('<span>' + price + '</span>');
                }
            }
        }
    })
})