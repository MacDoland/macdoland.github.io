import doT from '../node_modules/dot/doT';
import "./scss/main.scss";
import componentManager from './js/component-manager';
import Gallery from './js/gallery.component';
import Overlay from './js/overlay.component';
import galleryData from './json/gallery-data';


//document.addEventListener("DOMContentLoaded", componentManager.init.bind(componentManager));

let data = galleryData.tiles;

let galleryHighlightElement = document.body.querySelector('#portfolio-highlight-grid')
let galleryElement = document.body.querySelector('#portfolio-grid')
let overlayElement = document.body.querySelector('#overlay')

let highlights = data.filter(item => item.highlighted);
let galleryItems = data.filter(item => !item.highlighted);

let gallery = new Gallery(galleryElement, galleryItems);
let galleryHighlight = new Gallery(galleryHighlightElement, highlights);

console.log('highlights', highlights)
console.log('items', galleryItems)

let overlay = new Overlay(overlayElement);
let overlayOpen = overlay.open.bind(overlay);

gallery.init();
galleryHighlight.init();
overlay.init();

gallery.onItemClick(overlayOpen);
galleryHighlight.onItemClick(overlayOpen);