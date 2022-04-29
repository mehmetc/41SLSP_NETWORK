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
                let parentCtrl = self.parentCtrl.parentCtrl;
                let code =  parentCtrl.loc.location.libraryCode  
                self.addLibInfo(el, parentCtrl, code);
            }
        } 
        let opacCtrl = angular.element(document.querySelector('prm-opac > md-tabs')).controller('md-tabs') || null;

         if (document.querySelector('prm-location-items').getBoundingClientRect().x < 1000 && opacCtrl && opacCtrl.selectedIndex == 1) {            
            let locationItemSelector='prm-location-items > div > div > div:first-child';
            if (document.querySelector(locationItemSelector)) {
                let el = document.querySelector(locationItemSelector);
                if (el) {   
                    if (!el.querySelector('rsz-lib-info')) {
                        let parentCtrl = angular.element(document.querySelector('prm-location-items')).controller('prm-location-items');
                        let code = parentCtrl.currLoc.location.libraryCode;
                        self.addLibInfo(el, parentCtrl, code);
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

    addLibInfo(el, ctrl, code) {
        let self = this;        
        if (el && !el.querySelector('rsz-lib-info')) {                                                
            
            if (code != undefined) {                
                let elInfo = document.createElement('rsz-lib-info'); 
                elInfo.setAttribute('code', code);  
                elInfo.setAttribute('parent-ctrl', '$ctrl');  
                                
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