import linkHMTL from './link.html'
import Session from '../../../primo/session';

class LinkController {
  constructor() {        
  }

  $onInit() {
    this.user();
  }

  async user() {
    let self = this;
    
    let fines = await Session.user.fines;
    self.isOnCampus = Session.user.isOnCampus;
    self.isLoggedIn = Session.user.isLoggedIn;
    self.allFines =  {      
      count: fines.length,
      sum: (fines ? fines.map(f => parseFloat(f.finesum)).reduce((p,c)=> p+c, 0) : 0)
    }
  }

  get onCampus() {
    return this.isOnCampus;
  }

  get loggedIn() {
    return this.isLoggedIn;
  }

  get fines() {
    return this.allFines;
  }

  get linkClass() {
    return this.class || '';
  }

  get linkText() {
    return this.text || '';
  }

  get linkUrl() {
    return this.url || '';
  }
}

export let linksComponent = {
  name: 'rzs-link',
  config: {
    bindings: { 
      class: '@',
      text: '@',
      url: '@'      
     },
    controller: LinkController,
    template: linkHMTL
  },
  enabled: true,
  appendTo: null,
  enableInView: '.*'
}