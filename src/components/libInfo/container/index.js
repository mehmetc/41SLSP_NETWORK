class LibInfoContainerController{
    constructor($element) {        
        let locationController = $element.parent().parent().parent().parent().parent().parent().parent().controller('prm-location');        
        if (locationController) {
            this.location = locationController.location;    
        } else{            
            let locationItemsController = angular.element(document.querySelector('prm-location-items')).controller('prm-location-items')
            this.location = locationItemsController.currLoc.location;    
        }
    }    
}

LibInfoContainerController.$inject = ['$element'];

export let libInfoContainerComponent = {
    name: 'rzs-lib-info-container',
    config: {
      bindings:{parentCtrl:'<'},
      controller: LibInfoContainerController,
      template:'<rzs-lib-info location-code="$ctrl.location.mainLocation"></rzs-lib-info>'
    },
    enabled: true,
    appendTo: 'prm-stack-map-after',
    enableInView: '.*',
  }