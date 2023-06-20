import 'primo-explore-eth-person-card';

class PersonCardController {
  constructor() {    
  }

  $onInit() {
    this.mainParentCtrl = this.parentCtrl;
  }
}

export let rzsPersonCardComponent = {
    name: 'rzs-person-card',  
    enabled: true,
    appendTo: 'prm-service-details-after',
    enableInView: '.*',  
    config: {      
      bindings: {parentCtrl: '<'},
      controller: PersonCardController,
      template: '<eth-person-card-component after-ctrl="$ctrl.mainParentCtrl"></eth-person-card-component>'
    }
  }