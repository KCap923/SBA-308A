// alert("Cool chicks Rise UP!!!")

const dropdown = document.getElementById("artist");
const descriptionContainer = document.getElementById("description")

function populateDropdown(artists) {
  artists.forEach((artist) => {
    const option = document.createElement('option');
    option.textContent = artist.name;
    option.setAttribute('value', artist.slug);
    dropdown.appendChild(option);
  });
}

async function fetchArtist() {
  try {
    const response = await fetch("https://api.artic.edu/api/v1/artworks?page=2&limit=10");
    const data = await response.json();
    console.log(data);
    populateDropdown(data.results);
  } catch (err) {
    console.log(err);
  }
}

fetchArtist();
https://api.quotable.io/quotes?author=
dropdown.addEventListener('change', (evt) => {
  async function getArtistInfo() {
    try {
      const response = await fetch(
        `https://api.artic.edu/api/v1/artists?page=2&limit=10
        ${evt.target.value}`
      );
      const data = await response.json();
      artistInfo(data.results);
    } catch (err) {
      console.log(err);
    }
  }
  getArtistInfo();
});

function populateDescription(description) {
  descriptionContainer.innerHTML = '';

  if (description.length < 1) {
    descriptionContainer.textContent = "No description";
    return;
  }

  quotes.forEach((description) => {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = description.content;
    div.appendChild(h1);
    descriptionContainer.appendChild(div);
  });
}

































































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

// Another Attempt- getting picture box but no image display. ***********************************************************************************************************************

// const myContainer = document.getElementById("container");
// const btn = document.getElementById("btn");
// const url =
//   "https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date";

// let getContainer = () => {
//   fetch(url)
//     .then((data) => data.json())
//     .then((response) => {
//       const artwork = response.data[0];
//       const id = artwork.id;
//       const title = title.id;
//       const artist = artwork.artist_display;
//       const date = artwork.date;
//       const imageId = artwork.image_id;
//       const imageUrl = `https://www.artic.edu/iiif/2/${200385}/full/843,/0/default.jpg`;
//       myContainer.innerHTML = `<img src="${"URI"}" alt="${"The Muzzle of the Country"}" />`;
//       myContainer.innerHTML = `ID: ${200385}, Title: ${"The Muzzle of the Country"}, Artist: ${"Albert Gleizes"}, Date: ${1920}`;
//     })

//     .catch((error) => {
//       console.log("Error fetching data:", error);
//       myContainer.textContent = "Henry what is this about!?!! Hahaha";
//     });
// };

// btn.addEventListener("click", getContainer);
