export default class Facets {
    constructor() {
        try {
            return Primo.components.controller('prm-facet').facets
        } catch(e) {
            return []
        }
    }
}