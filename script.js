// document.addEventListener("DOMContentLoaded", () => {
    const input=document.getElementById("input-field");
    const btn=document.getElementById("btn");
    const display=document.getElementById("result");

    const apiUrl="http://api.openweathermap.org/";

    fetch(apiUrl).then(response=>{
        return response.json();
    })
    .then(data=>{
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
