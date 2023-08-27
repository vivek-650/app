
const apikey= "2b887ae25118d02423f0b3e6c4f7764f";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search img");


async function checkweather(city){
    const response= await fetch(url + city +`&appid=${apikey}`);

   
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".tmp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

searchBtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
})

