class openingHoursSeedController {
    constructor($scope, $element, $compile, $timeout) {
        let self = this;
        let divs = $element.parent().parent();

        self.element = $element;
        self.scope = $scope;
        self.compile = $compile;
        self.timeout = $timeout;
        self.parentEl = divs[0];

    }

    $onInit() {
        let self = this;
        let el = self.parentEl.querySelector('rzs-opening-hours');

        if (!el) {
            let target = self.element.parent().parent()
 
            
            if (target) {
                let elInfo = document.createElement('rzs-opening-hours');
                
                let $elInfo = angular.element(elInfo);
                let compiledElInfo = self.compile($elInfo);

                //add new scope
                compiledElInfo(self.scope.$parent.$new());
                
                if (Array.isArray(Array.from(target))) {
                    target = target[0];
                }
                target.prepend(elInfo);            
            }
        }                
    }
}

openingHoursSeedController.$inject = ['$scope', '$element', '$compile', '$timeout'];

export let openingHoursSeedComponent = {
    name: 'rsz-seed-opening-hours',
    config: {
        bindings: { parentCtrl: '<' },
        controller: openingHoursSeedController,
        template: ''
    },
    enabled: true,
    appendTo: 'slsp-location-items-after',
    enableInView: '.*'
}