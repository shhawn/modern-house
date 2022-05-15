$(function(){
    $.ajax({
        url: "./json/mdpick.json",
        dataType: "json",
        success: function(data){
            if(data.length > 0){
                for(i in data){
                    let name = data[i].name;
                    let brand = data[i].brand;
                    let discount = data[i].discount;
                    let price = data[i].price;
                    let url = data[i].url;

                    $('.mdpick li').eq(i).append('<a href="sub.html" target="_self"></a>');
                    $('.mdpick li a').eq(i).append('<img src="img/' + url + '">').append('<div class="md_hover"></div>');

                    $('.md_hover').eq(i).append('<h5>' + brand + '</h5>').append('<p>' + name + '</p>').append('<del>' + discount + '</del>').append('<span>' + price + '</span>');

                }
            }
        }
    })
})