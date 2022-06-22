import onCampusHTML from './onCampus.html'

class OnCampusController {
    constructor() {
        let self = this;  
        this.user();        
    }

    async user() {
        let self = this;
        let user = await new Primo.user
        self.isOnCampus = user.isOnCampus();
      }
      
      get onCampus() {
        return this.isOnCampus;
      }

      get offCampus() {
        return !this.isOnCampus;
      }    
}

export let onCampusComponent = {
    name: 'rzs-on-campus',
    config: {
      controller: OnCampusController,
      template: onCampusHTML
    },
    enabled: false,
    appendTo: 'slsp-alma-viewit-after',
    enableInView: '41SLSP_RZS:VU06|41SLSP_RZS:VU07'
  }