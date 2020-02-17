import doT from '../../node_modules/dot/doT';
import componentManager from '../js/component-manager';
import EventDispatcher from '../js/event-dispatcher';

class Gallery {
    constructor(element, data) {
        this.element = element;
        this.eventDispatcher = new EventDispatcher();
        this.events = {
            onItemclick: 'events-on-gallery-item-click'
        };
        this.data = data;

        this.template = doT.template(`
        <ul class="c-gallery c-grid">
            {{~it :value}}
                {{?value.type == 'content'}}
                    <li id="{{=value.id}}" class="c-gallery__item c-grid__item image-background">
                        <button>
                            {{?value.clientName}}<div class="c-gallery__item__client-name"><span>{{=value.clientName}}</span></div>{{?}}
                            <div class="c-grid__item__inner">
                                <h2>{{=value.title}}</h2>
                                {{? value.text }}
                                    {{~value.text :text}}
                                        {{=text}}
                                    {{~}}
                                {{?}}
                            </div>
                        </button>
                    </li>
                {{?}}
                {{?value.type == 'image'}}
                    <li id="{{=value.id}}" class="c-gallery__item c-gallery__item--image c-grid__item image-background {{=value.className}}">
                    {{?value.clientName}}<div class="c-gallery__item__client-name"><span>{{=value.clientName}}</span></div>{{?}}
                    </li>
                {{?}}
                {{?value.type == 'web'}}
                    <li id="{{=value.id}}" class="c-gallery__item c-gallery__item--web c-grid__item image-background {{=value.className}}">
                    <button>
                        {{?value.clientName}}<div class="c-gallery__item__client-name"><span>{{=value.clientName}}</span></div>{{?}}
                    </button>
                    </li>
                {{?}}
                {{?value.type == 'sketchfab'}}
                <li id="{{=value.id}}" class="c-grid__item">
                {{?value.clientName}}<div class="c-gallery__item__client-name"><span>{{=value.clientName}}</span></div>{{?}}
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
        this.bindEvents();
    }

    onItemClickHandler(event) {
        let id = event.currentTarget.id;

        if (id && id !== "profile") {
            let result = this.data.filter((item) => {
                return item.id === id;
            });

            if (result.length > 0) {
                this.eventDispatcher.dispatch(this.events.onItemclick, result[0]);
            }
        }
    }

    bindEvents() {
        let that = this;
        let elements = Array.prototype.slice.call(this.element.querySelectorAll('.c-gallery__item'));

        elements.forEach((element) => {
            element.removeEventListener('click', that.onItemClickHandler.bind(that));
            element.addEventListener('click', that.onItemClickHandler.bind(that));
        });
    }

    onItemClick(handler) {
        this.eventDispatcher.registerHandler(this.events.onItemclick, handler);
    }
}

//componentManager.register("c-gallery", Gallery);


export default Gallery;