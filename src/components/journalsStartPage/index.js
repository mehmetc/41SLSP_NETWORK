class JournalsStartPageController {
    constructor() {
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
        template: '<eth-journals-startpage-component after-ctrl="$ctrl"></eth-journals-startpage-component>'
      }
    }
  