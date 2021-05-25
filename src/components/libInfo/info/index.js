import libInfoHTML from './libInfo.html'
import libInfoJSON from './libInfo.json'

class LibInfoController {
  constructor($translate, $element) {
    let self = this;
    self.sourceURL = '';
    self.translate = $translate;    
    self.iconUrl = `custom/41SLSP_NETWORK-CENTRAL_PACKAGE/img/information.png`;
    //self.iconUrl = `/custom/${window.appConfig.vid}/img/information.png`;

    self.translate('nui.customizing.idslu.informationicon').then((iconUrl) => {
      if (iconUrl !== 'informationicon') {
        self.iconUrl = iconUrl;
      }
    });          
  }
  
  $doCheck(){    
    if (this.location && this.sourceURL == '') {
      let location = libInfoJSON[this.location.libraryCode];    
      if (location) {
        this.sourceURL = location.url;
      } 
    }
  }
}

LibInfoController.$inject = ['$translate', '$element'];

export let libInfoComponent = {
  name: 'rzs-lib-info',
  config: {
    bindings: { location: '<', library: '<' },
    controller: LibInfoController,
    template: libInfoHTML
  },
  enabled: true,
  appendTo: null,
  enableInView: '.*'
}