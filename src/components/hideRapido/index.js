class HideRapidoController {
    constructor() { }

    $onInit() {
        let self = this;
    }

    $doCheck() {
        let self = this;

        let fullViewEL = angular.element(document.querySelector('prm-full-view'));
        if (fullViewEL) {
            let fullView = fullViewEL.controller('prm-full-view');
            let serviceContainer = document.querySelector('prm-full-view-service-container:has(prm-service-ngrs)');

            if (serviceContainer) {
                if (fullView.hasOwnProperty('item')) {
                    if (fullView.item.pnx.control.sourcesystem.includes('ILS')) {
                        if (serviceContainer.classList.contains('hideEl')) {
                            serviceContainer.classList.remove('hideEl');
                        }
                    } else {
                        if (!serviceContainer.classList.contains('hideEl')) {
                            serviceContainer.classList.add('hideEl');
                        }
                    }
                }
            }
        }
    }
}

export let hideRapidoConfig = {
    name: 'rzs-hide-rapido',
    config: {
        bindings: { parentCtrl: '<' },
        controller: HideRapidoController,
        template: ''
    },
    enabled: true,
    appendTo: 'slsp-full-view-after',
    enableInView: '.*'
}