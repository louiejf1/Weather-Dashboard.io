console.log('Test');
//ID use #

$(document).ready(function () {

        //  let city = $('input:text').val();
         let city = 'Miami';
         // let city = document.querySelector("#cityLocation").value;

    var APIKey = "fa4500306ed9b5b17ead3f67dca48f5f";
    let queryURL = `https://api.openweathermap.org/data/2.5/weather?&q=${city}&appid=${APIKey}`;
    

    $(".searchButton").click(function () {

        alert('clicked');
        console.log('city is: '+ city);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (e) {
            console.log('e is; ' + e);
            $(".p1").text(JSON.stringify(e.name));

        });

    });

});
