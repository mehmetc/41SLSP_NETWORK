import infoHTML from './info.html';
import infoJSON from './libInfo.json';

class LibInfoController {
    constructor($element, $scope, $translate) {
      this.$element = $element;
      this.$scope = $scope;
      this.$translate = $translate;
    }
  
    $onInit(){

      let self = this;
      self.libinfoService = infoJSON;   
      if (self.libraryCode == undefined) {
        self.libraryCode = self.$element[0].hasAttribute('library-code') ? self.$element[0].getAttribute('library-code') : self.$scope.$parent.$parent.$ctrl.parentCtrl.loc.location.libraryCode;
      }
      
      self.iconUrl = `custom/41SLSP_NETWORK-CENTRAL_PACKAGE/img/information.png`;    

      self.$translate('nui.customizing.idslu.informationicon').then((iconUrl) => {
        if (iconUrl !== 'informationicon') {
          self.iconUrl = iconUrl;
        }
      }); 

    }


    get info(){
      let self = this;                    
      if (Object.keys(self.libinfoService).includes(self.libraryCode)) {
        return {id: self.libinfoService[self.libraryCode].url, name: self.libinfoService[self.libraryCode].label};
      }
      return {};
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
        bindings: {libraryCode:'<', parentCtrl: '<'},
        controller: LibInfoController,
        template: infoHTML
    },
    enabled: true,
    appendTo: null,
    enableInView: '.*'    
  }  