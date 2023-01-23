import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const cardGallery = document.querySelector(".gallery");
const cardEl = createPictureMarkup(galleryItems);
cardGallery.insertAdjacentHTML("beforeend", cardEl);

function createPictureMarkup(cardGallery) {
    return cardGallery.map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    }).join("");
};

const gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});


