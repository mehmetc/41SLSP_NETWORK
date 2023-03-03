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
        if (Primo.record.current.library.elementVisible()) {
            if (Primo.record.current.library.allAsElement) {
                let selector = 'prm-stack-map';
                Primo.record.current.library.allAsElement.forEach((el, i, a) => {
                    //self.addChevron(el)
                    if (el.query(selector) && !el.query('rsz-lib-info')) {
                        let libraryCode = Primo.record.current.library.all[i].lib.split(':')[0];
                        self.addLibInfo(el.query(selector)[0], i, libraryCode, 'library');
                    }
                });
            }
        }

        if (Primo.record.current.location.elementVisible()) {
            if (Primo.record.current.location.allAsElement) {                
                let fallbackSelector = 'div > div.layout-row > div';
                Primo.record.current.location.allAsElement.forEach((el, i, a) => {
                    let selector = 'prm-stack-map';
                    if (!el.query(selector)) {
                        selector = fallbackSelector;
                    }

                    if (el.query(selector) && !el.query('rsz-lib-info')) {
                        let libraryCode = Primo.record.current.location.all[i].loc.location.libraryCode;
                        self.addLibInfo(el.query(selector)[0], i, libraryCode, 'location');
                    }
                });
            }
        }

        if (Primo.record.current.location.item.elementVisible()) {
            if (Primo.record.current.location.item.allAsElement) {
                let fallbackSelector = 'div > div.layout-row > div';
                Primo.record.current.location.item.allAsElement.forEach((el, i, a) => {                    
                    let selector = 'prm-stack-map';
                    if (!el.query(selector)) {
                        selector = fallbackSelector;
                    }

                    if (el.query(selector) && !el.query('rsz-lib-info')) {
                        let libraryCode = Primo.record.current.location.item.all[i].loc.location.libraryCode;
                        self.addLibInfo(el.query(selector)[0], i, libraryCode, 'location');
                    }
                });
            }
        }

    }

    addLibInfo(el, index, libraryCode, type) {
        let self = this;
        if (el && !el.querySelector('rsz-lib-info') && libraryCode) {
            if (libraryCode != undefined) {
                let elInfo = document.createElement('rsz-lib-info');
                elInfo.setAttribute('index', index);
                elInfo.setAttribute('type', type);

                let $elInfo = angular.element(elInfo);
                let compiledElInfo = self.compile($elInfo);

                //add new scope
                compiledElInfo(self.scope.$parent.$new());
                el.append(elInfo);
            }
        }
    }

    addChevron(appendEl) {
        let self = this;

        if (!appendEl.query("prm-icon[name='chevron']")) {
            let el = document.createElement('prm-icon');
            el.setAttribute('name', 'chevron');
            el.setAttribute('icon-type', 'svg');
            el.setAttribute('svg-icon-set', 'hardware');
            el.setAttribute('icon-definition', 'ic_keyboard_arrow_right_24px');

            //reference new element as an angularjs element
            let $el = angular.element(el);
            //compile 
            let compiledEl = self.compile($el);
            //add new scope
            compiledEl(self.scope.$parent.$new());
            appendEl.query('div > div').append(el);
        }
    }
}

LibInfoSeedController.$inject = ['$scope', '$element', '$compile'];

export let libInfoSeedComponent = {
    name: 'rsz-seed-lib-info',
    config: {
        bindings: { parentCtrl: '<' },
        controller: LibInfoSeedController,
        template: ''
    },
    enabled: true,
    appendTo: 'slsp-full-view-after',
    enableInView: '.*'
}