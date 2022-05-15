$(function(){
    $.ajax({
        url: "./json/bestBanner.json",
        dataType: "json",
        success: function(data){
            if(data.length > 0){
                for(i in data){
                    let name = data[i].name;
                    let brand = data[i].brand;
                    let percent = data[i].percent;
                    let discount = data[i].discount;
                    let price = data[i].price;
                    let url = data[i].url;

                    $('.best > div').eq(i).append('<a href="sub.html" target="_self"></a>');
                    $('.best > div > a').eq(i).append('<img src="img/' + url + '">').append('<div class="best_content"></div>');
                    $('.best_content').eq(i).append('<strong>' + brand + '</strong>').append('<span>' + name + '</span>').append('<div class="best_price"></div>');
                    $('.best_price').eq(i).append('<strong>' + percent + '</strong>').append('<del>' + discount + '</del>').append('<span>' + price + '</span>');
                }
            }
        }
    })
})