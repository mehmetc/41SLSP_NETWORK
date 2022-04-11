class LibInfoContainerLocationController {
    constructor($element, $scope, $compile) {
        this.element = $element;
        this.scope = $scope;
        this.compile = $compile;
    }

    $doCheck() {

        let locationEl = angular.element(this.element.parent().parent());
        if (locationEl && locationEl.find('rzs-lib-info').length == 0) {
            let placeHolder = locationEl[0].querySelector('div.list-item-actions');
            if (placeHolder) {
                this.location = this.parentCtrl.parentCtrl.loc.location;

                let el = document.createElement('rzs-lib-info');
                el.setAttribute('location', '$ctrl.location');
                el.setAttribute('library', this.location.libraryCode);

                placeHolder.insertBefore(el, null);
                this.compile(placeHolder)(this.scope);
            }
        }

        let locationItemEl = angular.element(document.querySelector('prm-location-items'));
        if (locationItemEl) {
            //let placeHolder2 = locationItemEl[0].querySelector('div.tab-content-header > div.layout-row > div');
            
            let placeHolder2 = locationItemEl[0].querySelector('prm-stack-map-after');
            if (placeHolder2) {
                let locationItemsController = locationItemEl.controller('prm-location-items')
                if (locationItemsController) {

                    let currLoc = locationItemsController.currLoc;
                    if (currLoc != undefined) {
                        this.locationItem = currLoc.location;
                        if (locationItemEl.find('rzs-lib-info').length == 0) {
                            let el2 = document.createElement('rzs-lib-info');
                            el2.setAttribute('location', '$ctrl.locationItem');                            
                            placeHolder2.insertBefore(el2, null);
                            this.compile(placeHolder2)(this.scope);
                        }
                    }
                }
            } else {
                
                let placeHolder3 = angular.element(locationItemEl[0].querySelector('div.tab-content-header.margin-bottom-small.margin-left-medium.layout-row.layout-align-space-between-end > div.layout-row > div'));
                if (placeHolder3 && placeHolder3.find('prm-stack-map').length == 0){
                    this.location = this.parentCtrl.parentCtrl.loc.location;
                    if (this.location.stackMapUrl != '') {
                        let el = document.createElement('prm-stack-map');
    
    //console.log(this.parentCtrl.parentCtrl.loc.location.stackMapUrl);    
                        placeHolder3.append(el);
                        this.compile(placeHolder3)(this.scope);                     
                    }
                }

                if (placeHolder3 && placeHolder3.find('rzs-lib-info').length == 0){
                    this.location = this.parentCtrl.parentCtrl.loc.location;

                    let el = document.createElement('rzs-lib-info');
                    el.setAttribute('location', '$ctrl.location');
                    el.setAttribute('library', this.location.libraryCode);
    
                    placeHolder3.append(el);
                    this.compile(placeHolder3)(this.scope);                    
                }
            }
        }
    }
}

LibInfoContainerLocationController.$inject = ['$element', '$scope', '$compile'];

export let libInfoContainerLocationComponent = {
    name: 'rzs-lib-location-info-container',
    config: {
        bindings: {
            parentCtrl: '<'
        },
        controller: LibInfoContainerLocationController,
        template: ''
        //template: '<rzs-lib-info location="$ctrl.location"></rzs-lib-info>'
    },
    enabled: true,
    appendTo: 'prm-location-after',
    enableInView: '.*',
}