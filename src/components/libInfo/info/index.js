import infoHTML from './info.html';
import infoJSON from './libInfo.json';

class LibInfoController {
    constructor($element, $scope, $translate) {
      let self = this;
      self.element = $element;
      self.scope = $scope;
      self.libinfoService = infoJSON;   
      if (self.code == undefined) {
        self.code = self.element[0].hasAttribute('code') ? self.element[0].getAttribute('code') : self.scope.$parent.$parent.$ctrl.parentCtrl.loc.location.libraryCode;
      }

      self.translate = $translate;      
      self.iconUrl = `custom/41SLSP_NETWORK-CENTRAL_PACKAGE/img/information.png`;    

      self.translate('nui.customizing.idslu.informationicon').then((iconUrl) => {
        if (iconUrl !== 'informationicon') {
          self.iconUrl = iconUrl;
        }
      }); 

    }
  
    $doCheck() {
      
      // if (self.element.getboundingclientRect().x < 1000) {
      //   self.code = self.element[0].hasAttribute('code') ? self.element[0].getAttribute('code') : self.scope.$parent.$parent.$ctrl.parentCtrl.loc.location.libraryCode;
      // }
    }

    get info(){
      let self = this;                    
      if (Object.keys(self.libinfoService).includes(self.code)) {
        return {id: self.libinfoService[self.code].url, name: self.libinfoService[self.code].label};
      }
      return null;
    }
  
    get libid(){      
      let id = this.info.id;
      if (id) {
        return id;
      }
      return '';
    }
    get libname(){
      let name = this.info.name;
      if (name) {
        return name;
      }
      return '';
    }
  
  }
  
  LibInfoController.$inject = ['$element', '$scope', '$translate'];

  export let libInfoComponent = {
    name: 'rsz-lib-info',
    config: {
        bindings: {code:'=', parentCtrl: '<'},
        controller: LibInfoController,
        template: infoHTML
    },
    enabled: true,
    appendTo: null,
    enableInView: '.*'    
  }  