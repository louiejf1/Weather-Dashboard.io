console.log('Test');
//ID use #

$(document).ready(function () {

        //  var city = $('#cityLocation').val();
        //  let city = 'Miami';
         // let city = document.querySelector("#cityLocation").value;

    var APIKey = "fa4500306ed9b5b17ead3f67dca48f5f";
    // console.log(city);
    // let queryURL = `https://api.openweathermap.org/data/2.5/weather?&q=${city}&appid=${APIKey}`;
    // console.log(queryURL);
    

    $(".searchButton").click(function () {

        var city = $('#cityLocation').val();
        let queryURL = `https://api.openweathermap.org/data/2.5/weather?&q=${city}&appid=${APIKey}`;
        console.log(queryURL);

        alert('clicked');
        console.log('city is: ' + city);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (e) {
            console.log('e is; ' + e);
            $(".p1").text(JSON.stringify(e.name));
            console.log(e);

        });

    });

});
