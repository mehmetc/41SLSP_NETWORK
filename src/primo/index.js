import User from "./user";
import View from "./view";
import Records from "./records";
import Facets from './facets';

import Bridge from './core/angular/bridge';
import Component from './core/angular/component';

export default class Primo {
    get user() {      
        return User;
    }

    get view() {
        return new Promise((resolve, reject) => {
            resolve(new View());
        })
    }

    get records() {
        return new Promise((resolve, reject) => {
            resolve(new Records());
        })
    }

    get facets() {
        return new Promise((resolve, reject) => {
            resolve(new Facets());
        })
    }

    get components() {
        return Component;
    }

    get bridge() {
        return Bridge;
    }
}
