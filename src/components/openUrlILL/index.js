class OpenUrlILLController {
  constructor() {    
  }

  $onInit() {
    this.mainParentCtrl = this.parentCtrl;
  }
}

export let rzsOpenUrlILLComponent = {
    name: 'rzs-openurl-ill',  
    enabled: true,    
    appendTo: 'slsp-htgi-svc-after',
    enableInView: '.*',  
    config: {      
      bindings: {parentCtrl: '<'},
      controller: OpenUrlILLController,
      template: '<eth-openurl-interlibrary-component after-ctrl="$ctrl.mainParentCtrl"></eth-openurl-interlibrary-component>'
    }
  }
