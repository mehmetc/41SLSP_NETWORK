import infoHTML from './info.html';
import infoJSON from './libInfo.json';
import Record from '../../../primo/record';

class LibInfoController {
    constructor($element, $scope, $translate) {
      this.$element = $element;
      this.$scope = $scope;
      this.$translate = $translate;
    }
  
    $onInit(){

      let self = this;
      self.libinfoService = infoJSON;   
      
      self.iconUrl = `custom/41SLSP_NETWORK-CENTRAL_PACKAGE/img/information.png`;    

      self.$translate('nui.customizing.idslu.informationicon').then((iconUrl) => {
        if (iconUrl !== 'informationicon') {
          self.iconUrl = iconUrl;
        }
      }); 

    }


    get info(){
      let self = this;                    
      if (Object.keys(self.libinfoService).includes(self.libCode)) {
        return {id: self.libinfoService[self.libCode].url, name: self.libinfoService[self.libCode].label};
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

    get libCode() {
      let code = '';
      let self = this;
      switch (self.type) {
        case 'library':
          try {
            code = Record.current.library.all[self.index].lib.split(':')[0];
          } catch (e) {
            code = ''
          }
          break;
        case 'location':
          try {
            code = Record.current.location.all[self.index].loc.location.libraryCode;
          } catch (e) {
            code = ''
          }
          break;
      }
  
      return code;
    }    
  
  }
  
  LibInfoController.$inject = ['$element', '$scope', '$translate'];

  export let libInfoComponent = {
    name: 'rsz-lib-info',
    config: {
        bindings: { index: '@', type: '@', parentCtrl: '<'},
        controller: LibInfoController,
        template: infoHTML
    },
    enabled: false,
    appendTo: null,
    enableInView: '.*'    
  }  