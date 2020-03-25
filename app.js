//ID use #

$(document).ready(function () {

    var APIKey = "fa4500306ed9b5b17ead3f67dca48f5f";

    $(".searchButton").click(function () {

        var city = $('#cityLocation').val();
        let queryURL = `https://api.openweathermap.org/data/2.5/weather?&q=${city}&appid=${APIKey}&units=imperial`;


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (responce) {

            let results = responce;
            console.log(responce);

            let h2 = $('<h2>');
            let cityAppend = $(h2).text(JSON.stringify(results.name));
            let temp = results.main.temp;
            let humidity = results.main.humidity;
            let windspeed = results.wind.speed;
            let uvIndex = '';
            console.log(typeof(temp));
            let bottomDiv = $('#bottomcCol');
            $('#topCol').empty();
            $('#topCol').append(cityAppend);
            $('#topCol').append('Temperature: ' + (parseInt(temp)) + ' F' + '<br>');
            $('#topCol').append('Windspeed: ' + (parseInt(windspeed)) + ' MPH');
            
        });

        let queryURL5day = `https://api.openweathermap.org/data/2.5/forecast?&q=${city}&mode=JSON&appid=${APIKey}&units=imperial`;
        
        $.ajax({
            url: queryURL5day,
            method: "GET"
        }).then(function (responce5day) {
            console.log(responce5day);
            
        });

        

    });

});


//Examples of API calls:
// api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml



// {
//     "coord": {
//         "lon": 139,
//         "lat": 35
//     },
//     "weather": [{
//         "id": 800,
//         "main": "Clear",
//         "description": "clear sky",
//         "icon": "01n"
//     }],
//     "base": "stations",
//     "main": {
//         "temp": 281.52,
//         "feels_like": 278.99,
//         "temp_min": 280.15,
//         "temp_max": 283.71,
//         "pressure": 1016,
//         "humidity": 93
//     },
//     "wind": {
//         "speed": 0.47,
//         "deg": 107.538
//     },
//     "clouds": {
//         "all": 2
//     },
//     "dt": 1560350192,
//     "sys": {
//         "type": 3,
//         "id": 2019346,
//         "message": 0.0065,
//         "country": "JP",
//         "sunrise": 1560281377,
//         "sunset": 1560333478
//     },
//     "timezone": 32400,
//     "id": 1851632,
//     "name": "Shuzenji",
//     "cod": 200
// }