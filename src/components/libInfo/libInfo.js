import libInfoHTML from './libInfo.html'
import libInfoJSON from './libInfo.json'

class LibInfoController {
  constructor($translate) {
    let self = this;
    self.translate = $translate;    
    self.iconUrl = `custom/41SLSP_NETWORK-CENTRAL_PACKAGE/img/information.png`;
    //self.iconUrl = `/custom/${window.appConfig.vid}/img/information.png`;

    self.translate('nui.customizing.idslu.informationicon').then((iconUrl) => {
      if (iconUrl !== 'informationicon') {
        self.iconUrl = iconUrl;
      }
    });
  }

  get sourceURL() {
    console.log(this.locationCode);
    let location = libInfoJSON[this.locationCode];    
    if (location) {
      return location.url;
    }  
    return '';  
  }
}

LibInfoController.$inject = ['$translate'];

export let component = {
  name: 'zbl-lib-info',
  config: {
    bindings: { locationCode: '<' },
    controller: LibInfoController,
    template: libInfoHTML
  },
  enabled: true,
  appendTo: 'prm-stack-map-after',
  enableInView: '.*'
}