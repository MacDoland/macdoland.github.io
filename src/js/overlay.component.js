import doT from '../../node_modules/dot/doT';
import componentManager from '../js/component-manager';

class Overlay {
    constructor(element) {
        this.element = element;
        this.state = {
            isOpen: false,
            title: "Example Title",
            text: ["content", "example"]
        };

        this.template = doT.template(`
            <div class="c-overlay {{? it.isOpen }}c-overlay--is-open{{?}}">
             <div class="c-overlay__inner">
                <h2>{{=it.title}}</h2>
                {{? it.text }}
                    {{~it.text :text}}
                        <p>{{=text}}</p>
                    {{~}}
                {{?}}
             </div>
             </div>
        `);


    }

    init() {
        
        this.render();
    }

    render() {
        this.element.innerHTML = this.template(this.state);
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
}

componentManager.register("c-overlay", Overlay);


export default Overlay;