import 'primo-explore-eth-person-card';

class PersonCardController {
  constructor() {
    this.mainParentCtrl = this.parentCtrl;
  }
}

export let rzsPersonCardComponent = {
    name: 'rzs-person-card',  
    enabled: false,
    appendTo: 'prm-service-details-after',
    enableInView: '.*',  
    config: {      
      bindings: {parentCtrl: '<'},
      controller: PersonCardController,
      template: '<eth-person-card-component after-ctrl="$ctrl.mainParentCtrl"></eth-person-card-component>'
    }
  }