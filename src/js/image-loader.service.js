class ImageLoader {
    static loadBackgroundImage(element, url, className) {
        if (Modernizr && element && url && className && url !== 'undefined') {

            Modernizr.on('webp', (hasWebp) => {
                if (hasWebp) {
                    url = url.replace(/(.png|.jpg)/g, '.webp');
                }

                let image = new Image();
                image.onerror = () => {
                    element.classList.add(className);
                }
                image.onload = () => {
                    element.classList.add(className);
                }
                image.src = url;
            });
        }
    }
}

export default ImageLoader;