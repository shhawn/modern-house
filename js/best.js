$(function(){
    $.ajax({
        url: "./json/best.json",
        dataType: "json",
        success: function(data){
            if(data.length > 0){
                for(i in data){
                    let name = data[i].name;
                    let brand = data[i].brand;
                    let discount = data[i].discount;
                    let price = data[i].price;
                    let url = data[i].url;

                    $('.category_box li').eq(i).append('<a href="sub.html" target="_self"></a>');
                    $('.category_box li a').eq(i).append('<img src="img/' + url + '">').append('<h5>' + brand + '</h5>').append('<p>' + name + '</p>').append('<del>' + discount + '</del>').append('<span>' + price + '</span>');
                }
            }
        }
    })
})