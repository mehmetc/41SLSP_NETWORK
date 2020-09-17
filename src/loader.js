import './components/**'

String.prototype.toCamelCase = function () {
    return this.split('-').map((d, i, a) => i > 0 ? d.charAt(0).toUpperCase() + d.slice(1) : d).join('');
}

export default class Loader {
    constructor() {
    }

    load(app) {
        this._injectComponentPlaceHoldersIntoAfterComponents(app);
    }

    /**
     * 
     * 
     **/
    _importComponents() {
        let components = [];
        Object.keys(Components).forEach((component_def) => {
            components.push(Components[component_def].component);
        });
        return components.filter((component) => (component.enabled && new RegExp(component.enableInView).test(window.appConfig.vid)));
    }

    /**
     * 
     * 
     **/
    _createComponents(app) {
        let components = this._importComponents();
        let afterComponents = {};

        //Create all components and determine in which after component these need to be
        //injected
        console.log('Loading components');
        components.forEach((component) => {
            console.log(component.name)

            if (component.enabled) {
                if (component.appendTo) {
                    let elements = afterComponents[component.appendTo] || [];
                    elements.push({ 'name': component.name, 'enableInView': component.enableInView });
                    afterComponents[component.appendTo] = elements;

                }
                app.constant('afterComponents', afterComponents);
                app.component(component.name.toCamelCase(), component.config);
            }
        });

        return afterComponents;
    }

    /**
     * 
     * 
     **/
    _injectComponentPlaceHoldersIntoAfterComponents(app) {
        let afterComponents = this._createComponents(app);
        //Inject place holders into the after components
        Object.keys(afterComponents).forEach((component, i) => {
            let subComponents = afterComponents[component];

            app.component(component.toCamelCase(), {
                bindings: {
                    parentCtrl: '<'
                },
                template: subComponents.map(m => `<${m.name} parent-ctrl="$ctrl"></${m.name}>`).join("")
            });
        });
    }
}