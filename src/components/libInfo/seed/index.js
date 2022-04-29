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
    }
    
    $doCheck() {
        let self = this;
        //prm-location
        if (self.parentEl) {   
            //main page         
            let locationSelector = 'div > div > div > div.list-item-actions';
            let el = self.parentEl.querySelector(locationSelector);
            if (el) {                
                self.addLibInfo(el, self.parentCtrl.parentCtrl);
            }
        } 

         if (document.querySelector('prm-location-items').getBoundingClientRect().x < 1000) {            
            let locationItemSelector='prm-location-items > div > div > div:first-child';
            if (document.querySelector(locationItemSelector)) {
                let el = document.querySelector(locationItemSelector);
                if (el) {   
                    if (!el.querySelector('rsz-lib-info')) {
                        self.addLibInfo(el, angular.element(document.querySelector('prm-location-items')).controller('prm-location-items'));
                    } 
                }
            }
        } else {
            if (document.querySelector('prm-location-items rsz-lib-info')) {
                angular.element(document.querySelector('prm-location-items rsz-lib-info')).controller('rsz-lib-info').scope.$destroy();
                angular.element(document.querySelector('prm-location-items rsz-lib-info')).remove();
            }
        }
    }

    addLibInfo(el, ctrl) {
        let self = this;        
        if (el && !el.querySelector('rsz-lib-info')) {                                                
            self.code = undefined
            try {
                self.code = ctrl.loc.location.libraryCode;
            } catch(e) {                
                self.code = undefined;
            }
            
            if (self.code != undefined) {                
                let elInfo = document.createElement('rsz-lib-info'); 
                elInfo.setAttribute('code', self.code);  
                elInfo.setAttribute('parent-ctrl', '$ctrl');  
                                
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