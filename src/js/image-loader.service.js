class ImageLoader {
    static loadBackgroundImage(element, url, className) {
        if (element && url && className && url !== 'undefined') {
            if (Modernizr && Modernizr.webp) {
                url = url.replace(/(.png|.jpg)/g, '.webp');
            }

            let image = new Image();
            image.onload = () => {
                element.classList.add(className);
            }
            image.src = url;
        }
    }
}

export default ImageLoader;