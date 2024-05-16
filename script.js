// alert("Cool chicks Rise UP!!!")

const infoContainer = document.getElementById("info");
const btn = document.getElementById("btn");
const url = "https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date";

let getInfo = () => {
fetch (url)
.then (data => data.json())
.then (item => console.log(item.info));

}
getInfo();

// It works in console!!!!!


























