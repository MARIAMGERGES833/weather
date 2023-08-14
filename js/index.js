"Use strict"
const myKey = "f8466e81a568429c8d3125603231008";
const search = document.querySelector("#search");
const searchInput = document.getElementById("searchInput");
const home = document.querySelector("#home");
const news = document.querySelector("#news");
const live = document.querySelector("#live");
const photos = document.querySelector("#photos");
const contact = document.querySelector("#contact");
const weatherContent = document.querySelector("#weatherContent");
const contactContent = document.querySelector("#contactContent");
let langCode = document.querySelector("#langCode");
//==============select=================
const ar = document.querySelector("#Arabic");
const bn = document.querySelector("#Bengali");
const bg = document.querySelector("#Bulgarian");
const zh = document.querySelector("#Chinese");
const da = document.querySelector("#Danish");
const fr = document.querySelector("#French");
const de = document.querySelector("#German");
const it = document.querySelector("#Italian");
const ko = document.querySelector("#Korean");
const ru = document.querySelector("#Russian");
const inputList = document.querySelector("#inputList");

// let allData ;
 
function getUserLocation() {
  const success = (position) => {
      const currantLoc = `${position.coords.latitude},${position.coords.longitude}`;
      getWeather(currantLoc);
  }
  const error = () => {
      const latitude = (Math.random() * 180 - 90).toFixed(4);
      const longitude = (Math.random() * 360 - 180).toFixed(4);
      getWeather(`${latitude},${longitude}`);
  }
  const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
  }
  navigator.geolocation.getCurrentPosition(success, error, options);
}
getUserLocation();







async function getWeather (name){
  if(name != 0 ){
    let langCode;
if(inputList.value == ar ){ langCode = ar }
if(inputList.value == bn ){ langCode = bn }
if(inputList.value == bg ){ langCode = bg }
if(inputList.value == zh ){ langCode = zh }
if(inputList.value == da ){ langCode = da }
if(inputList.value == fr ){ langCode = fr }
if(inputList.value == de ){ langCode = de }
if(inputList.value == it ){ langCode = it }
if(inputList.value == ko ){ langCode = ko }
if(inputList.value == ru){ langCode = ru }

    let res = await fetch(` http://api.weatherapi.com/v1/forecast.json?key=${myKey}&q=${name}&days=3&lang=${langCode}`);
    let allData = await res.json();
   console.log(allData);
   displayData(allData)
  }
  else{
    Swal.fire({
      icon: 'error',
      text: 'Please enter your location!',
    })
  }
}
   


//==================================search=====================
search.addEventListener("click" , function(){
  getWeather (searchInput.value);
  
  })


//==================================Enter Keyboard=====================
searchInput.addEventListener("keyup" , function(evenInfo){
if(evenInfo.key ==="Enter"){
  getWeather (searchInput.value);

}
})


//==================================displayData=====================
  function displayData(citySearch){
    
      // =============First Daaaaaaaaaaaaay==================
  document.getElementById("userCountry").innerHTML =` ${citySearch.location.country} , ${citySearch.location.name}`;
  document.getElementById("userTemp").innerHTML =  citySearch.current.temp_c;
  document.getElementById("icon").innerHTML = `<img src="${citySearch.current.condition.icon}"> ` ;
  document.getElementById("text").innerHTML =  citySearch.current.condition.text;
  document.getElementById("rain").innerHTML =  citySearch.current.humidity;
  document.getElementById("wind").innerHTML =  citySearch.current.wind_kph;
  document.getElementById("direction").innerHTML =  citySearch.current.wind_dir;
  document.getElementById("dateFirstDay").innerHTML =  citySearch.forecast.forecastday[0].date;
  
  
  // =============Secound Daaaaaaaaaaaaay==================
  document.getElementById("maxTemp").innerHTML =  citySearch.forecast.forecastday[1].day.maxtemp_c;
  document.getElementById("minTemp").innerHTML =  citySearch.forecast.forecastday[1].day.mintemp_c;
  document.getElementById("text2").innerHTML =  citySearch.forecast.forecastday[1].day.condition.text;
  document.getElementById("iconSecondDay").innerHTML =`<img src="${citySearch.forecast.forecastday[1].day.condition.icon}"> ` ;
  document.getElementById("dateSecoundDay").innerHTML =  citySearch.forecast.forecastday[1].date;
  
  


  // =============Third Daaaaaaaaaaaaay==================
  document.getElementById("maxTemp3").innerHTML =  citySearch.forecast.forecastday[2].day.maxtemp_c;
  document.getElementById("minTemp3").innerHTML =  citySearch.forecast.forecastday[2].day.mintemp_c;
  document.getElementById("text3").innerHTML =  citySearch.forecast.forecastday[2].day.condition.text;
  document.getElementById("iconThirdDay").innerHTML =`<img src="${citySearch.forecast.forecastday[2].day.condition.icon}"> ` ;
  document.getElementById("dateThirdDay").innerHTML =  citySearch.forecast.forecastday[2].date;
  
  //=============call to function to show temp in day
  document.getElementById("am12").innerHTML =  citySearch.forecast.forecastday[0].hour[0].temp_c;
  document.getElementById("am12").innerHTML =  citySearch.forecast.forecastday[0].hour[6].temp_c;
  document.getElementById("am12").innerHTML =  citySearch.forecast.forecastday[0].hour[12].temp_c;
  document.getElementById("am12").innerHTML =  citySearch.forecast.forecastday[0].hour[18].temp_c;

    //=============call to function to show icon in day
    document.getElementById("dicon1").innerHTML =  `<img src="${citySearch.forecast.forecastday[0].day.condition.icon}"> `;
    document.getElementById("dicon2").innerHTML =  `<img src="${citySearch.forecast.forecastday[0].day.condition.icon}"> `;
    document.getElementById("dicon3").innerHTML =  `<img src="${citySearch.forecast.forecastday[0].day.condition.icon}"> `;
    document.getElementById("dicon4").innerHTML =  `<img src="${citySearch.forecast.forecastday[0].day.condition.icon}"> `;
    //=============to set date===============
  const dM = new Date();
  // document.getElementById("dateFirstDay").innerHTML = dM.toDateString();
  // document.getElementById("dateSecoundDay").innerHTML = dM.getDay();
  console.log(dM)
  
  //=============to clear searchInput===============
  searchInput.value="";
  }


      //=============to set date===============
      const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      const d = new Date();
      let day = weekday[d.getDay()];
      document.getElementById("today").innerHTML =  weekday[d.getDay()];




//========  navBar   ================
news.addEventListener("click" , function(){  pageNotFound ()});
live.addEventListener("click" , function(){  pageNotFound ()});
photos.addEventListener("click" , function(){  pageNotFound ()});
contact.addEventListener("click" , function(){
weatherContent.classList.replace("d-block" , "d-none");
contactContent.classList.replace("d-none" , "d-block");
})


function pageNotFound (){
  Swal.fire({
    icon: 'error',
    title: 'Page Not Found',
    text: 'Something went wrong!',
    footer: '<a href="index.html">Back to our site?</a>'
  })
}


