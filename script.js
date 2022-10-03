const list = document.createElement('ul');
const info = document.createElement('p');

info.textContent = 'A sota hi ha una llista dinàmica. Clica aquí \u{1f4cc} per a afegir un nou item a la llista. Clica un item existent per a canviar el seu text.';

document.body.appendChild(info);
document.body.appendChild(list);

info.onclick = () => {
    const item = document.createElement('li');
    item.textContent = prompt('Quin contingut vols que tingui l\'item?');
    list.appendChild(item);

    item.onclick = (e) => {
        item.textContent = prompt('Introdueix el nou contingut de l\'item');
    }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 