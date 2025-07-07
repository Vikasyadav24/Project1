// window.alert("hiii hii");

// 3c82c18b4f5241ccc0354888d871af6c
// https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=3c82c18b4f5241ccc0354888d871af6c
 async function weather(){
//window.alert();
let city_name =document.getElementById('search').value;
let city =document.getElementById('city');
let temp =document.getElementById('temp');
let humid =document.getElementById('humid');
let wind =document.getElementById('wind') ;

let apikey = '3c82c18b4f5241ccc0354888d871af6c';
let url=`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apikey}&units=metric`;

if(city_name==""){
    window.alert("pahle kuch likh lo");
return;
}
try{
let res =await fetch(url);
let data =await res.json();
console.log(data);

city.innerHTML=data.name;
temp.innerHTML=data.main.temp+"℃";
humid.innerHTML=data.main.humidity +"%";
wind.innerHTML =data.wind.speed +"m/s";
}
catch{
   window.alert("city not found");
}
}