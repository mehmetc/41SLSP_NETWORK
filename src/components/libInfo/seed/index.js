/*
  KULeuven/LIBIS (c) 2022
  Mehmet Celik mehmet(dot)celik(at)kuleuven(dot)be
*/

class LibInfoSeedController {
    constructor($scope, $element, $compile) {
        let self = this;
        
        let divs = $element.parent().parent().find('div')
        
        self.element = $element;
        self.scope = $scope;
        self.compile = $compile;        
        self.parentEl = divs[0];

        //this.addChevron();
        
        //cleanup and remove. just used for bootstrapping
        //self.scope.$destroy();
        //self.element.remove();  
    }
    
    $doCheck() {
        let self = this;
        //prm-location
        if (self.parentEl) {   
            //main page         
            let locationSelector = 'div > div > div > div.list-item-actions';
            let el = self.parentEl.querySelector(locationSelector);
            if (el) {                
                self.addLibInfo(el);
            }
        } 

        //prm-location-item
        let locationItemSelector='prm-location-items > div > div > div:first-child';
        if (document.querySelector(locationItemSelector)) {
            let el = document.querySelector(locationItemSelector);
            if (el) {                
                self.addLibInfo(el);
            }
        }
    }

    addLibInfo(el) {
        let self = this;        
        if (el && !el.querySelector('rsz-lib-info')) {                                                
            self.code = self.parentCtrl.parentCtrl.loc.location.libraryCode;
            if (self.code != undefined) {                
                let elInfo = document.createElement('rsz-lib-info'); 
                elInfo.setAttribute('code', self.code);  
                                
                //self.element.controller('prm-locations').locations
                let $elInfo = angular.element(elInfo);
                let compiledElInfo = self.compile(elInfo);
                                        
                //add new scope
                compiledElInfo(self.scope.$parent.$new());
        
                el.insertBefore(elInfo, null);
            }
        }
    }
}

LibInfoSeedController.$inject = ['$scope','$element', '$compile'];

export let libInfoSeedComponent = {
    name: 'rsz-lib-info-seed',
    config: {
        bindings: { parentCtrl: '<' },
        controller: LibInfoSeedController,
        template: ''
    },
    enabled: true,
    appendTo: 'prm-location-after',
    enableInView: '.*'
}