var toronto = document.getElementById("Toronto");
var vancouver = document.getElementById("Vancouver");
//var output = document.getElementById("output");

toronto.addEventListener("click",function() {
    weather("Toronto");
});
  
vancouver.addEventListener("click",function() {
    weather("Vancouver");
});

function weather(city) {
    
    var out_location = document.getElementById("location");
    var out_icon = document.getElementById("icon");
    var out_temp = document.getElementById("temperature");
    var out_conditions = document.getElementById("conditions");
    var out_sunrise = document.getElementById("sunrise");

    const myAPIkey = "9cc3f3aee28ac952d5d4b661c8d1332c";

    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + myAPIkey + "&units=metric";

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                const data = xhr.response;
                console.log(data);

                output.style.display = "block";
                out_location.innerHTML = data.name;
                out_icon.innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png">';
                out_temp.innerHTML = data.main.temp + "&#8451";
                out_conditions.innerHTML = data.weather[0].description;
                const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
                out_sunrise.innerHTML = sunriseTime;
            } else {
                output.style.display = "block";
                out_location.innerHTML = "API call was unsuccessful";
                console.log(xhr.status);
            }
        }
    }

    xhr.open('GET', url);

    xhr.responseType = "json";

    xhr.send(null);
}