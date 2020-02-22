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

        this.lastFocusedElement = this.element;

        this.eventDispatcher = new EventDispatcher();
        this.events = {
            onOpenOverlay: 'events-overlay-open',
            onCloseOverlay: 'events-overlay-close',
        }

        this.template = doT.template(`
            <div class="c-overlay {{? it.isOpen }}c-overlay--is-open{{?}}" role="dialog" aria-modal="true" aria-labelledby="{{=it.id+'overlay'}}" aria-describedby="{{=it.id+'desc'}}"  >
            <div class="c-overlay__outer">
            <button class="c-overlay__close-button close" tabindex="-1"><span>Close</span></button>

             <div class="c-overlay__inner">

             {{? it.overlayContent }}
                {{=it.overlayContent}}
             {{?}}
             {{? !it.overlayContent }}
                <div class="c-overlay__image {{=it.className}}"></div>
             {{?}}

                <div class="c-overlay__details">
                    <h2 id="{{=it.id+'overlay'}}">{{=it.title}}</h2>
                    {{? it.text }}
                        {{~it.text :text}}
                            <div id="{{=it.id+'desc'}}">{{=text}}</div>
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
        let self = this;
        this.closeButton = this.element.querySelector('.c-overlay__close-button');

        document.body.addEventListener('click', (e) => {
            if(self.state.isOpen && e.target.classList.contains('c-overlay')){
                self.close();
            }
        });

        if (this.closeButton) {
            this.closeButton.addEventListener('click', (event) => {
                self.close.bind(self)();
            });
        }

        document.body.addEventListener('focusin', (e) => {
            if (!self.state.isOpen) {
                self.lastFocusedElement = e.target;
            }
        },
        {
            passive: true
        });

        document.body.addEventListener('keyup', (e) => {
            if(self.state.isOpen && e.key === "Escape") {
                self.close();
            }
        },
        {
            passive: true
        });
    }

    render() {
        this.element.innerHTML = this.template(this.state);
        this.bindEvents();
    }

    open(data) {
        this.pageFocusableItems = Array.from(document.body.querySelectorAll('a, button, input, select, iframe'));
        document.body.classList.add('remove-scroll');

        this.pageFocusableItems.forEach((item) => {
            item.setAttribute('tabindex', -1);
        });

        if (data) {
            this.state = data;
            this.state.isOpen = true;
            this.render();
        }

        let overlayFocusableItems = Array.from(this.element.querySelectorAll('.c-overlay a, .c-overlay button'));
        overlayFocusableItems.forEach((item) => {
            item.setAttribute('tabindex', '');
        });

        this.element.querySelector('.c-overlay__close-button').focus();
    }

    close() {
        if (this.lastFocusedElement && this.lastFocusedElement.focus) {
            this.lastFocusedElement.focus();
        }

        this.pageFocusableItems = Array.from(document.body.querySelectorAll('a, button, input, select, frame'));
        document.body.classList.remove('remove-scroll');
        this.state.isOpen = false;
        this.render();
        this.pageFocusableItems.forEach((item) => {
            item.setAttribute('tabindex', '');
        });

        let overlayFocusableItems = Array.from(this.element.querySelectorAll('.c-overlay a, .c-overlay button'));
        overlayFocusableItems.forEach((item) => {
            item.setAttribute('tabindex', -1);
        });
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