//ID use #

$(document).ready(function () {



    let day = moment().format("D");
    let month = moment().format("MMM");
    let year = moment().format("YYYY");
    let today = `${month} ${day} ${year}`
    let newDate = "";

    var APIKey = "fa4500306ed9b5b17ead3f67dca48f5f";



    $(".searchButton").click(function () {

        var city = $('#cityLocation').val();
        let queryURL = `https://api.openweathermap.org/data/2.5/weather?&q=${city}&appid=${APIKey}&units=imperial`;


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (responce) {

            let results = responce;
            //console.log(responce);

            let h2 = $('<h2>');
            let cityAppend = $(h2).text(JSON.stringify(results.name));
            let temp = results.main.temp;
            let humidity = results.main.humidity;
            let windspeed = results.wind.speed;
            let uvIndex = '';
            //console.log(typeof(temp));
            let bottomDiv = $('#bottomcCol');
            $('#topCol').empty();
            $('#topCol').append(cityAppend);
            $('#topCol').append(today + '<br>');
            $('#topCol').append('Temperature: ' + (parseInt(temp)) + ' F' + '<br>');
            $('#topCol').append('Windspeed: ' + (parseInt(windspeed)) + ' MPH');

        });

        let queryURL5day = `https://api.openweathermap.org/data/2.5/forecast?&q=${city}&mode=JSON&appid=${APIKey}&units=imperial`;

        $.ajax({
            url: queryURL5day,
            method: "GET"
        }).then(function (responce5day) {

            let results = responce5day.list;

            //console.log(responce5day);
            //console.log(responce5day.list[0].main.temp); 

            let statsObj = [];
            let cityTemp = [];
            let cityHumid = [];
            let qty = 5;

            for (let i = 0; i < qty; i++) {

                cityTemp.push(parseInt(results[i].main.temp));
                cityHumid.push(parseInt(results[i].main.humidity));


            };

            for (let i = 0; i < cityTemp.length; i++) {
                statsObj.push({
                    "Temperature": cityTemp[i]
                })

            }

            for (let i = 0; i < cityHumid.length; i++) {
                statsObj.push({
                    "Humidity": parseInt(cityHumid[i])
                })

            }

            //console.log(statsObj);


            $('#bottomCol').empty();

            //    cityTemp.forEach(tempElement => {

            //     $('#bottomCol').append(`<div class="tempDiv">  "Temp" ${tempElement} </div>`);

            for (let i = 0; i < statsObj.length; i++) {
                //console.log( i )

                let newStats = statsObj[i].Temperature;
                newDate = parseInt(day);


            }

            $('#bottomCol').append(`
            <div class="tempDiv">
            <p>${moment().add(1, 'days').format('ddd MMM Do')}</P>
            <p>Temp: ${statsObj[0].Temperature} F</p>
            <p>Humid: ${statsObj[5].Humidity}%</p><br></div>`);

            $('#bottomCol').append(`
            <div class="tempDiv">
            <p>${moment().add(2, 'days').format('ddd MMM Do')}</P>
            <p>Temp: ${statsObj[1].Temperature} F</p>
            <p>Humid: ${statsObj[6].Humidity}%</p><br></div>`);

            $('#bottomCol').append(`
            <div class="tempDiv">
            <p>${moment().add(3, 'days').format('ddd MMM Do')}</P>
            <p>Temp: ${statsObj[2].Temperature} F</p>
            <p>Humid: ${statsObj[7].Humidity}%</p><br></div>`);

            $('#bottomCol').append(`
            <div class="tempDiv">
            <p>${moment().add(4, 'days').format('ddd MMM Do')}</P>
            <p>Temp: ${statsObj[3].Temperature} F</p>
            <p>Humid: ${statsObj[8].Humidity}%</p><br></div>`);

            $('#bottomCol').append(`
            <div class="tempDiv">
            <p>${moment().add(5, 'days').format('ddd MMM Do')}</P>
            <p>Temp: ${statsObj[4].Temperature} F</p>
            <p>Humid: ${statsObj[9].Humidity}%</p><br></div>`);

        });

        localStorage.setItem("City", city);

        cityId = localStorage.getItem("City");

        
        $('#clear').append(`<p class="cityP"> ${cityId}`);
        console.log(cityId);

    });

    $(".clearButton").click(function () {
        localStorage.clear();
        $('.cityP').empty();
    });

});