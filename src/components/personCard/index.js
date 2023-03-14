import 'primo-explore-eth-person-card';

class PersonCardController {
  constructor($compile, $scope) { 
    let self = this;
    self.compile = $compile;
    self.scope = $scope
  }

  $onInit() {
    let self = this;
    //self.mainParentCtrl = self.parentCtrl;

    self.#injectContainer();
   
  }

  #injectContainer() {
    let self = this;

    let placeHolder = document.createElement('rsz-person-card-container');
    let el = document.querySelector('div.full-view-spacer');
    placeHolder.innerHTML='<eth-person-card-component after-ctrl="$ctrl"></eth-person-card-component>'
    let $placeHolder = angular.element(placeHolder);
    let compiledPlaceHolder = self.compile($placeHolder);

    //add new scope
    compiledPlaceHolder(self.scope.$parent.$new());
    el.append(placeHolder);        
  }
}
PersonCardController.$inject=['$compile', '$scope'];

export let rzsPersonCardComponent = {
    name: 'rzs-person-card',  
    enabled: true,
    appendTo: 'prm-service-details-after',
    enableInView: '.*',  
    config: {      
      bindings: {parentCtrl: '<'},
      controller: PersonCardController,
      template: '' //'<eth-person-card-component after-ctrl="$ctrl.mainParentCtrl"></eth-person-card-component>'
    }
  }