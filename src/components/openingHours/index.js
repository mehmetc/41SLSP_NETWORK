//import Record from '../../primo/record';
import Session from '../../primo/session';
import openingHoursHTML from './openingHours.html';

class OpeningHoursController {
    constructor($scope) {     
        let self = this;    
        self.scope = $scope;
        self.locationCode = null;  
        self.data = {};
        self.show = false;            
    }
    
    $onInit(){
        let self = this; 

        self.openingHoursWatcher = self.scope.$watch(() => {            
            return Primo.record.current.location.item.elementVisible();
        }, async (n, o) => {          
            if (n == true) {
                await self.openingHours();
            }
        });        
    }    

    get visible() {
        return Primo.record.current.location.item.elementVisible()
    }

    get language() {
        return Session.view.interfaceLanguage;
    }

    toggle() {
        let self = this;
        self.show = !self.show;
        return self.show
    }

    weekdayText(date) {
        let self = this; 
        let text = new Intl.DateTimeFormat(self.language, { weekday: "long" }).format(new Date(date));
        return text.charAt(0).toUpperCase() + text.slice(1);
     }

     get isOpen() {
        let self = this; 
        let weekday = new Date().getDay();
        
        return (self.hasData() && (self.data.current[weekday].hours.length > 0))
     }

     hasData() {
        let self = this; 
        return Object.keys(self.data).length > 0
     }

    async openingHours(){
        let self = this; 
        if (Primo.record.current.location.item.elementVisible()) {
            const location = Primo.record.current.location.item.current.loc.location      
            const library = location.libraryCode;
            const institution = location.organization;

            if (location != self.locationCode) {
                const response = await fetch(`https://services.libis.be/opening_hours/41SLSP/${institution}/${library}`, {headers: {Accept: 'application/json'}});        
                
                if (response.ok) {
                    self.data = await response.json();    
                } else {
                    self.data = {};
                }   
            }
            console.log(self.data);
        }
        
        return self.data;
    }
}

export let openingHoursComponent = {
    name: 'rzs-opening-hours',
    config: {
      bindings: {parentCtrl: '<'},
      controller: OpeningHoursController,
      template: openingHoursHTML
    },
    enabled: false,
    appendTo: 'slsp-location-items-after',
    enableInView: '.*'
  }