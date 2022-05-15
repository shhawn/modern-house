$(function(){
    $.ajax({
        url: "./json/new.json",
        dataType: "json",
        success: function(data){
            if (data.length > 0){
                for (i in data){
                    let name = data[i].name;
                    let discount = data[i].discount;
                    let price = data[i].price;
                    let url = data[i].url;

                    $('.new_content').eq(i).append('<a href="sub.html" target="_self"></a>');
                    $('.new_content > a').eq(i).append('<img src="img/' + url + '">').append('<span>' + name + '</span>').append('<del>' + discount + '</del>').append('<strong>' + price + '</strong>');
                }
            }
        }
    })
})