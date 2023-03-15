import openhourHTML from './openhour.html';
import infoJSON from './library_info.json';
import Session from '../../../primo/session';

class OpenHourController {
    constructor($element, $scope, $translate) {
        let self = this;
        self.element = $element;
        self.scope = $scope;
        self.translate = $translate;
        self.libraryInfo = infoJSON;
        self.showLib = false;
    }

    $onInit(){
        let self = this;    
        self.libraryInfo = infoJSON;               
        self.location = self.parentCtrl.parentCtrl.loc.location;
        
    }

    getInfo() {        
        let self = this;
        self.showLib = !self.showLib;
        return self.library;
    }

    get mainLocation(){
        let self = this;
        return self.location.mainLocation;
    }

    get libraryCode() {
        let self = this;
        //return self.location.libraryCode;
        return 'LUSBI';
    }

    get library() {
        let self = this;
        return self.libraryInfo.filter(f => f.code == self.libraryCode)?.[0]
    }

    weekdayText(day) {
       let text = new Intl.DateTimeFormat(Session.view.interfaceLanguage, { weekday: "long" }).format(day.weekday);
       return text.charAt(0).toUpperCase() + text.slice(1);
    }
}


OpenHourController.$inject = ['$element', '$scope', '$translate'];

export let openHourComponent = {
  name: 'rsz-open-hour',
  config: {
      bindings: { code: '@', parentCtrl: '<'},
      controller: OpenHourController,
      template: openhourHTML
  },
  enabled: true,
  appendTo: 'slsp-location-items-after',
  enableInView: '.*'    
}  