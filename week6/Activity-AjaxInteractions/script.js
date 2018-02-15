/*
**  eleyf
**  2/12/18
**  cs290 w2018
**  Activity - Ajax Interactions
*/

var apiKey = "fa7d80c48643dfadde2cced1b1be6ca1";

//asynchronous city name button
document.getElementById("cityNameSubmitId").addEventListener('click', function (event) {

    var req = new XMLHttpRequest();
    var locationCityName = document.getElementById("cityNameId").value;
    req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + locationCityName + "&units=imperial&appid=" + apiKey, true);
    req.addEventListener('load', function () {
        if (req.status >= 200 && req.status < 400) {
            var response = JSON.parse(req.responseText);
            document.getElementById("cityId").textContent = response.name;
            document.getElementById("temperatureId").textContent = response.main.temp + " F";
            document.getElementById("humidityId").textContent = response.main.humidity + "%";
        } else {
            console.log("Error in network request: " + req.statusText);
        }
    });
    req.send(null);
    event.preventDefault();
})


//asynchronous zip code button
document.getElementById("zipCodeSubmitId").addEventListener('click', function (event) {

    var req = new XMLHttpRequest();
    var locationZip = document.getElementById("zipCodeId").value;
    req.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip=" + locationZip + "&units=imperial&appid=" + apiKey, true);
    req.addEventListener('load', function () {
        if (req.status >= 200 && req.status < 400) {
            var response = JSON.parse(req.responseText);
            document.getElementById("cityId").textContent = response.name;
            document.getElementById("temperatureId").textContent = response.main.temp + " F";
            document.getElementById("humidityId").textContent = response.main.humidity + "%";
        } else {
            console.log("Error in network request: " + req.statusText);
        }
    });
    req.send(null);
    event.preventDefault();
})