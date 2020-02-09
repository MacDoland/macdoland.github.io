
class ComponentManager {
    constructor() {
        this.componentClasses = [];
        this.components = [];
    }

    register(componentName, componentClass) {
       this.componentClasses[componentName] = componentClass;
    }

    init() {
        //TODO: make this whole function more defensive
        let componentElements = Array.prototype.slice.call(document.body.querySelectorAll('[data-component]'));

        componentElements.forEach((element) => {
            let name = element.getAttribute('data-component');

            if(name && name in this.componentClasses) {
                this.components[name] = new this.componentClasses[name](element);
            }
        });

        for(var key in this.components){
           this.components[key].init();
        }
    }
}

const componentManager = new ComponentManager();


export default componentManager;