//import * as Components from './components/**'
import {component as dotTestComponent} from './components/dotTest';
import {component as libInfoComponent} from './components/libInfo';
import {component as searchAlsoComponent} from './components/searchAlso';
import {component as searchAlsoBodyComponent} from './components/searchAlsoBody';
import {component as altmetricComponent} from './components/altmetric';
import {component as browzineComponent} from './components/browzine';
import {component as finesComponent} from './components/finesMessage';
import {component as alertComponent} from './components/alertMessage';

String.prototype.toCamelCase = function () {
    return this.split('-').map((d, i, a) => i > 0 ? d.charAt(0).toUpperCase() + d.slice(1) : d).join('');
}

export default class Loader {
    constructor() {
    }

    load(modType) {
        this._injectComponentPlaceHoldersIntoAfterComponents(modType);        
    }

    /**
     * 
     * 
     **/
    _importComponents() {
        // let components = [];
        // Object.keys(Components).forEach((component_def) => {
        //     components.push(Components[component_def].component);
        // });
        return [
            dotTestComponent,
            libInfoComponent,
            searchAlsoComponent,
            searchAlsoBodyComponent,
            altmetricComponent,
            browzineComponent,
            finesComponent,
            alertComponent
        ].filter((component) => (component.enabled && new RegExp(component.enableInView).test(window.appConfig.vid)));
    }

    /**
     * 
     * 
     **/
    _createComponents(modType) {
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
                angular.module(modType).constant('afterComponents', afterComponents);
                angular.module(modType).component(component.name.toCamelCase(), component.config);
            }
        });

        return afterComponents;
    }

    /**
     * 
     * 
     **/
    _injectComponentPlaceHoldersIntoAfterComponents(modType) {
        let afterComponents = this._createComponents(modType);
        //Inject place holders into the after components
        Object.keys(afterComponents).forEach((component, i) => {
            let subComponents = afterComponents[component];

            angular.module(modType).component(component.toCamelCase(), {
                bindings: {
                    parentCtrl: '<'
                },
                template: subComponents.map(m => `<${m.name} parent-ctrl="$ctrl"></${m.name}>`).join("")
            });
        });
    }
}