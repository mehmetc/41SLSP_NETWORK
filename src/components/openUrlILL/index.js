import 'primo-explore-eth-openurl-interlibrary';

class OpenUrlILLController {
  constructor() {
    this.mainParentCtrl = this.parentCtrl;
  }
}

export let rzsOpenUrlILLComponent = {
    name: 'rzs-openurl-ill',  
    enabled: true,    
    appendTo: 'alma-htgi-svc-after',
    enableInView: '.*',  
    config: {      
      bindings: {parentCtrl: '<'},
      controller: OpenUrlILLController,
      template: '<eth-openurl-interlibrary-component after-ctrl="$ctrl.mainParentCtrl"></eth-openurl-interlibrary-component>'
    }
  }
