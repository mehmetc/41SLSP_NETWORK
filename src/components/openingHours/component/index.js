//import Record from '../../primo/record';
import Session from '../../../primo/session';
import openingHoursHTML from './openingHours.html';

class OpeningHoursController {
    constructor($scope) {     
        let self = this;    
        self.scope = $scope;
        self.locationCode = null;  // location code
        self.data = {}; // loaded opening hours data
        self.show = false; // show or hide details
    }
    
    $onInit(){
        let self = this; 
        //setup watcher and wait for a location to become visible
        self.openingHoursWatcher = self.scope.$watch(() => {            
            return Primo.record.current.location.item.elementVisible();
        }, async (n, o) => {          
            if (n == true) {
                // load opening hours when location is visible on screen
                await self.openingHours();
            }
        });        
    }    

    // is location visible on screen
    get visible() {
        return Primo.record.current.location.item.elementVisible()
    }

    // Primo language
    get language() {
        return Session.view.interfaceLanguage;
    }

    // Enable disable openening hours details
    toggle() {
        let self = this;
        self.show = !self.show;
        return self.show
    }

    // get a weekday label from a date
    weekdayText(date) {
        let self = this; 
        let text = new Intl.DateTimeFormat(self.language, { weekday: "long" }).format(new Date(date));
        return text.charAt(0).toUpperCase() + text.slice(1);
     }

     // check if the library is open today
     get isOpen() {
        let self = this; 
        let weekday = new Date().getDay();
        
        return (self.hasData() && ((self.data.current[weekday].hours.length > 0) && (self.data.current[weekday].hours[0].open.length > 0)))
     }

     // check if data was loaded
     hasData() {
        let self = this; 
        return Object.keys(self.data).length > 0
     }

     // load opening hourse from service
    async openingHours(){
        let self = this; 
        if (Primo.record.current.location.item.elementVisible()) {
            const location = Primo.record.current.location.item.current.loc.location;
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
      bindings: { parentCtrl: '<' },
      controller: OpeningHoursController,
      template: openingHoursHTML
    },
    enabled: true,
    appendTo: '',
    enableInView: '.*'
  }