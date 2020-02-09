import doT from '../node_modules/dot/doT';
import "./scss/main.scss";
import componentManager from './js/component-manager';
import Gallery from './js/gallery.component';
import Overlay from './js/overlay.component';

document.addEventListener("DOMContentLoaded", componentManager.init.bind(componentManager));

