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
        self.code = '';
        self.tabs = angular.element(document.querySelector('prm-opac > md-tabs')).controller('md-tabs');
        self.libInfoTab = null;
        let libInfoTab = self.tabs.tabs.filter(s => s.label == 'two');
        if (libInfoTab.length > 0) {
            self.libInfoTab = libInfoTab[0];
            self.libInfoTabContent = document.querySelector(`#${self.tabs.tabContentPrefix}${self.libInfoTab.id}`)
        }
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
                let code = parentCtrl.loc.location.libraryCode;
                self.addLibInfo(el, parentCtrl, code);
            }
        }


        if (self.libInfoTab) {
            if (self.libInfoTab.isActive()) {

                try {
                    let newLibrary = self.libInfoTabContent.querySelector('h4').textContent;
                    if (self.library != newLibrary) {
                        self.library = newLibrary;
                        let locationItemSelector = 'prm-location-items > div > div > div:first-child';
                        if (document.querySelector(locationItemSelector)) {
                            let el = document.querySelector(locationItemSelector);
                            if (el) {
                                let parentCtrl = angular.element(self.libInfoTabContent.querySelector('prm-location-items')).controller('prm-location-items');
                                let code = parentCtrl.loc.location.libraryCode;
                                self.addLibInfo(el, parentCtrl, code);
                            }
                        }

                    }
                } catch (e) {
                    self.library = '';
                }

            } else {
                if (document.querySelector('prm-location-items rsz-lib-info')) {
                    angular.element(document.querySelector('prm-location-items rsz-lib-info')).controller('rsz-lib-info').scope.$destroy();
                    angular.element(document.querySelector('prm-location-items rsz-lib-info')).remove();
                }
            }
        }
    }

    addLibInfo(el, ctrl, code) {
        let self = this;
        if (el && !el.querySelector('rsz-lib-info')) {

            if (code != undefined || code != '') {
                let elInfo = document.createElement('rsz-lib-info');

                elInfo.setAttribute('library-code', `${code}`);
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

LibInfoSeedController.$inject = ['$scope', '$element', '$compile'];

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