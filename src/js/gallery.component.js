import doT from '../../node_modules/dot/doT';
import componentManager from '../js/component-manager';

import EventDispatcher from '../js/event-dispatcher';

class Gallery {
    constructor(element) {
        this.element = element;
        this.eventDispatcher = new EventDispatcher();
        this.events = {
            onItemclick: 'events-on-gallery-item-click'
        },
        this.data = {
            tiles: [
                { type: 'image', className: 'profile profile-background' },
              
                { type: 'web', className: 'unearthed-background' },
                { type: 'web', className: 'funeral-background' },
                { type: 'web', className: 'efl-background' },
                { type: 'web', className: 'green-city-background' },
                { type: 'web', className: 'royal-london-background' },
                {
                    type: 'content',
                    className: '',
                    title: "Joe McDowall",
                    text: ["<a href=\"mailto:joe.mcdowall@gmail.com\">joe.mcdowall@gmail.com</a>", "A pragmatic web developer, passionate generalist, JavaScript specialist and a secret creative with over 9 years experience working for companies around Edinburgh", "Please feel free to explore some of the work I have been involved in."]
                },
                { type: 'sketchfab', src: 'https://sketchfab.com/models/75431eb321164f9689f6f98ef317f34f/embed?autospin=0.2&amp;preload=1&amp;transparent=0' },
                { type: 'web', className: 'syfy-background' },
                { type: 'web', className: 'ghost-background' },
                { type: 'sketchfab', src: 'https://sketchfab.com/models/9cfe5bd6f132405fbf48bd004fa688bd/embed?autospin=0.2&amp;preload=1&amp;transparent=0' },
                { type: 'web', className: 'lexus-background' },
                { type: 'web', className: 'advent-background' },
                { type: 'sketchfab', src: 'https://sketchfab.com/models/e92dd6ae7eb242018642bb40a91e744e/embed?autospin=0.2&amp;autostart=0&amp;transparent=0' },
                { type: 'web', className: 'island-background' },
                { type: 'web', className: 'hunt-background' },
                { type: 'sketchfab', src: 'https://sketchfab.com/models/ace7d3e35fea473599e10d2c62e7ab56/embed?autospin=0.2&amp;preload=1&amp;transparent=0' },
                { type: 'web', className: 'garden-background' },
                { type: 'web', className: 'pila-background' },
                { type: 'sketchfab', src: 'https://sketchfab.com/models/a995319e79e84c6a8df1ed8e5d3a58b0/embed?autospin=0.2&amp;preload=1&amp;transparent=0' },
                { type: 'web', className: 'rice-background' },
                { type: 'web', className: 'pila-game-background' }
            ]
        };

        this.template = doT.template(`
        <ul class="c-gallery c-grid">
            {{~it.tiles :value}}
                {{?value.type == 'content'}}
                    <li class="c-gallery__item c-grid__item image-background">
                        <div class="c-grid__item__inner">
                            <h2>{{=value.title}}</h2>
                            {{? value.text }}
                                {{~value.text :text}}
                                    <p>{{=text}}</p>
                                {{~}}
                            {{?}}
                        </div>
                    </li>
                {{?}}
                {{?value.type == 'image'}}
                    <li class="c-gallery__item c-gallery__item--image c-grid__item image-background {{=value.className}}"></li>
                {{?}}
                {{?value.type == 'web'}}
                    <li class="c-gallery__item c-gallery__item--web c-grid__item image-background {{=value.className}}"></li>
                {{?}}
                {{?value.type == 'sketchfab'}}
                <li class="c-grid__item">
                    <div class="sketchfab-embed-wrapper">
                        <iframe title="sketchfab model"
                            src="{{=value.src}}"
                            frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true"
                            webkitallowfullscreen="true"></iframe>
                    </div>
                 </li>
                 {{?}}

            {{~}}
        </ul>
        `);
    }

    init() {
        this.render();
    }

    render() {
        this.element.innerHTML = this.template(this.data);
        console.log(this.template(this.data));
    }
}

componentManager.register("c-gallery", Gallery);


export default Gallery;