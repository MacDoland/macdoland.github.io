import "./scss/main.scss";
import ImageLoader from './js/image-loader.service';
import Gallery from './js/gallery.component';
import Overlay from './js/overlay.component';
import galleryData from './json/gallery-data';

(function () {
    let data = galleryData.tiles;
    let galleryHighlightElement = document.body.querySelector('#portfolio-highlight-grid')
    let galleryElement = document.body.querySelector('#portfolio-grid')
    let overlayElement = document.body.querySelector('#overlay')
    let highlights = data.filter(item => item.highlighted);
    let galleryItems = data.filter(item => !item.highlighted);
    let gallery = new Gallery(galleryElement, galleryItems);
    let galleryHighlight = new Gallery(galleryHighlightElement, highlights);
    let overlay = new Overlay(overlayElement);
    let overlayOpen = overlay.open.bind(overlay);

    let loadImage = (element) => {
        let url = element.getAttribute('data-image-load');
        let className = element.getAttribute('data-image-class');

        if (typeof (url) !== 'undefined' && typeof (className) !== 'undefined') {
            ImageLoader.loadBackgroundImage(element, url, className);
        }
    };

    gallery.init();
    galleryHighlight.init();
    overlay.init();

    gallery.onItemClick(overlayOpen);
    galleryHighlight.onItemClick(overlayOpen);



    loadImage(document.body);
    let imageBackgroundElements = Array.from(document.body.querySelectorAll('[data-image-load]'));
    imageBackgroundElements.forEach(loadImage);

    document.body.style.visibility = 'visible';
})();