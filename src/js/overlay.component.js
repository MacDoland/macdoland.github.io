import doT from '../../node_modules/dot/doT';
import componentManager from '../js/component-manager';
import EventDispatcher from '../js/event-dispatcher';

class Overlay {
    constructor(element) {
        this.element = element;
        this.state = {
            isOpen: false,
            title: "Example Title",
            text: ["content", "example"]
        };

        this.eventDispatcher = new EventDispatcher();
        this.events = {
            onOpenOverlay: 'events-overlay-open',
            onCloseOverlay: 'events-overlay-close',
        }

        this.template = doT.template(`
            <div class="c-overlay {{? it.isOpen }}c-overlay--is-open{{?}}">
            <div class="c-overlay__outer">
            <button class="c-overlay__close-button close"><span>Close</span></button>

             <div class="c-overlay__inner">

             {{? it.overlayContent }}
                {{=it.overlayContent}}
             {{?}}
             {{? !it.overlayContent }}
                <div class="c-overlay__image {{=it.className}}"></div>
             {{?}}

                <div class="c-overlay__details">
                    <h2>{{=it.title}}</h2>
                    {{? it.text }}
                        {{~it.text :text}}
                            <p>{{=text}}</p>
                        {{~}}
                    {{?}}
                </div>
             </div>
             </div>
             </div>
        `);
    }

    init() {
        this.render();



    }

    bindEvents() {
        let that = this;
        this.closeButton = this.element.querySelector('.c-overlay__close-button');

        if (this.closeButton) {
            this.closeButton.addEventListener('click', (event) => {
                that.close.bind(that)();
            });
        }
    }


    render() {
        this.element.innerHTML = this.template(this.state);
        this.bindEvents();
    }

    open(data) {
        document.body.classList.add('remove-scroll');
        if (data) {
            this.state = data;
            this.state.isOpen = true;
            this.render();
        }

    }

    close() {
        document.body.classList.remove('remove-scroll');
        this.state.isOpen = false;
        this.render();
    }

    onOpen(handler) {
        this.eventDispatcher.registerHandler(this.events.onOpenOverlay, handler);
    }

    onClose(handler) {
        this.eventDispatcher.registerHandler(this.events.onCloseOverlay, handler);
    }
}

//componentManager.register("c-overlay", Overlay);


export default Overlay;