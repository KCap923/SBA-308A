// alert("Cool chicks Rise UP!!!")

//
// Attempt ************************************************************************************************************************
// function fetchImage() {
// const apiKey = "https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date";

// fetch('https:///api/v1/artworks', {
// method: 'GET',
// headers: {

//     "x-rapidapi-host": "api.artic.edu"
//     }
//   })
//   .then((response) => response.blob())
//   .then((blob) => {
//     const imageUrl = URL.createObjectURL(blob);
//     const imageElement = document.createElement("img");
//     imageElement.src = imageUrl;
//     const container = document.getElementById("image-container");
//     container.appendChild(imageElement);
//   })

//   .catch((error) => console.error(error));
// }

// const button = document.getElementById("fetch-image-button");
// button.addEventListener("click", fetchImage);

//Attempt ***********************************************************************************************************************

const myContainer = document.getElementById("container");
const btn = document.getElementById("btn");
const url =
  "https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date";

let getContainer = () => {
  fetch(url)
    .then((data) => data.json())
    .then((response) => {
      const artwork = response.data[0];
      const id = artwork.id;
      const title = title.id;
      const artist = artwork.artist_display;
      const date = artwork.date;
      const imageId = artwork.image_id;
      const imageUrl = `https://www.artic.edu/iiif/2/${200385}/full/843,/0/default.jpg`;
      myContainer.innerHTML = `<img src="${"https://api.artic.edu/api/v1/artworks/200385"}" alt="${"The Muzzle of the Country"}" />`;
      myContainer.innerHTML = `ID: ${200385}, Title: ${"The Muzzle of the Country"}, Artist: ${"Albert Gleizes"}, Date: ${1920}`;
    })

    .catch((error) => {
      console.log("Error fetching data:", error);
      myContainer.textContent = "Henry what is this about!?!! Hahaha";
    });
};

btn.addEventListener("click", getContainer);
