import doT from '../node_modules/dot/doT';
import "./scss/main.scss";
import componentManager from './js/component-manager';
import Gallery from './js/gallery.component';
import Overlay from './js/overlay.component';

//document.addEventListener("DOMContentLoaded", componentManager.init.bind(componentManager));

let galleryElement = document.body.querySelector('#portfolio-grid')
let overlayElement = document.body.querySelector('#overlay')
let gallery = new Gallery(galleryElement);
let overlay = new Overlay(overlayElement);
let overlayOpen = overlay.open.bind(overlay);

gallery.init();
overlay.init();

gallery.onItemClick(overlayOpen);