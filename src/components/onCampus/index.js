import Session from '../../primo/session'
import onCampusHTML from './onCampus.html'

class OnCampusController {
    constructor() {              
    }
    
    get onCampus() {
      return Session.user.isOnCampus;
    }

    get offCampus() {
      return !Session.user.isOnCampus;
    }  
}

export let onCampusComponent = {
    name: 'rzs-on-campus',
    config: {
      controller: OnCampusController,
      template: onCampusHTML
    },
    enabled: true,
    appendTo: 'slsp-alma-viewit-after',
    enableInView: '41SLSP_RZS:VU06|41SLSP_RZS:VU07'
  }