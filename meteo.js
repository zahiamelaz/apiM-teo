let ville = "PARIS";
let url = 'http://api.openweathermap.org/data/2.5/weather?q=Paris&lang=fr&units=metric&appid=9407b47957a91267f609293d68a405fd'; 
let searchVille = document.getElementById("searchVille");
let villeActu = document.getElementById("villeActuelle");
let icon = document.getElementById("icon");
let tDesc = document.getElementById("tDescription");
let degres = document.getElementById('degres');
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');


function callAPI () {
    window.fetch(url)
        .then(res => res.json())
        .then(resJson => {
            console.log(resJson)
    villeActu.innerText = resJson.name.toUpperCase();
    tDesc.innerText = resJson.weather[0].description;
    console.log(resJson);
    degres.innerHTML = Math.round(resJson.main.temp )+ " C°";
    humidity.innerHTML = resJson.main.humidity + " %";
    wind.innerHTML = Math.round(resJson.wind.speed )+ " km/h";
    icon.innerHTML = "<img src='http://openweathermap.org/img/w/" + resJson.weather[0].icon + ".png'" + "></img>";

    
});
}
callAPI();

function recherche() {
    ville = searchVille.value;
    url = `http://api.openweathermap.org/data/2.5/weather?q=${ville}&lang=fr&units=metric&appid=9407b47957a91267f609293d68a405fd`;
    callAPI();
}