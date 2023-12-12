class JournalsStartPageController {
    constructor() {
    
    }

    $onInit() {
      this.mainParentCtrl = this.parentCtrl;
    }
  }
  
  export let journalsStartPageComponent = {
      name: 'rzs-journal-start-page',  
      enabled: true,    
      appendTo: 'prm-journals-after',
      enableInView: '.*',  
      config: {      
        bindings: {parentCtrl: '<'},
        controller: JournalsStartPageController,
        template: '<eth-journals-startpage-component after-ctrl="$ctrl.mainParentCtrl"></eth-journals-startpage-component>'
      }
    }
  