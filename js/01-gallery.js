import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);
const createGallery = galleryItems.map(({ preview, original, description }) =>
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
).join('');
 
galleryEl.insertAdjacentHTML("beforeend", createGallery);
galleryEl.addEventListener('click', handleImageClick);

function handleImageClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
    return;
    };
    const originalImage = e.target.dataset.source;
    const imageInstance = basicLightbox.create(`
    <img src="${originalImage}" width="600" height="400">`);
    imageInstance.show();
    galleryEl.addEventListener("keydown", onEscKeyPress);

   function onEscKeyPress(e) {
    if (e.code === "Escape") {
        galleryEl.removeEventListener("keydown", onEscKeyPress);
        imageInstance.close();
       };
    }
};