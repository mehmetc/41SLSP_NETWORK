import searchAlsoBodyHTML from './searchAlsoBody.html'
import Session from '../../primo/session';

class SearchAlsoBodyController {
  constructor($location) {
    this.location = $location;
  }
  
  $onInit(){
    let self = this;
    self.viewCode = Session.view.code;
    self.targets = self._targets();    
  }

  get search() {
    return this.location.search().query || '';
  }

  get name() {
    return this.parentCtrl.parentCtrl.facetGroup.name;
  }

  get parsedQuery() {
    let query = this.search;
    if (!Array.isArray(query)) {
      query = [query]
    }
    return query.map(m => m.split(','));
  }

  get searchTerms() {    
    let search = this.parsedQuery.map(m => `query=${m[0]},${m[1]},${m[2]}` || '').join('&');
    if (this.parsedQuery.length > 1) {
      search += '&mode=advanced';
    }

    return search;
  }

  _targets() {
    let self = this;

    return [
      {
        "view": "41SLSP_RZS:VU15",
        "name": "swisscovery RZS",
        "url": "https://rzs.swisscovery.org/discovery/search?&tab=41SLSP_RZS_MyInst_and_CI&search_scope=MyInst_and_CI&vid=41SLSP_RZS:VU15&",
        "img": "https://rzs.swisscovery.org/discovery/custom/41SLSP_RZS-VU15/img/vu15_favicon_32x32.png",
        "tooltip": "nui.customizing.idslu.search_also.tooltip.swisscovery-rzs",
        mapping: function mapping(search) {
          return self.searchTerms;
        }
      },
      {
        "view": "41SLSP_RZS:VU06",
        "name": "swisscovery RZS - HSLU",
        "url": "https://rzs.swisscovery.org/discovery/search?&tab=41SLSP_RZS_MyInst_and_CI&search_scope=MyInst_and_CI&vid=41SLSP_RZS:VU06&",
        "img": "https://rzs.swisscovery.org/discovery/custom/41SLSP_RZS-VU06/img/vu06_favicon_32x32.png",
        "tooltip": "nui.customizing.idslu.search_also.tooltip.swisscovery-rzs-hslu",
        mapping: function mapping(search) {
          return self.searchTerms;
        }
      },
      {
        "view": "41SLSP_RZS:VU07",
        "name": "swisscovery RZS - Uni/PH",
        "url": "https://rzs.swisscovery.org/discovery/search?&tab=41SLSP_RZS_MyInst_and_CI&search_scope=MyInst_and_CI&vid=41SLSP_RZS:VU07&",
        "img": "https://rzs.swisscovery.org/discovery/custom/41SLSP_RZS-VU07/img/vu07_favicon_32x32.png",
        "tooltip": "nui.customizing.idslu.search_also.tooltip.swisscovery-rzs-zhbuniph",
        mapping: function mapping(search) {
          return self.searchTerms;
        }
      }, {
        "view": "41SLSP_NETWORK:VU1_UNION",
        "name": "swisscovery",
        "url": "https://swisscovery.slsp.ch/discovery/search?&tab=41SLSP_NETWORK&search_scope=DN_and_CI&vid=41SLSP_NETWORK:VU1_UNION&",
        "img": "https://swisscovery.slsp.ch/discovery/custom/41SLSP_RZS-VU15/img/slsp_favicon_weiss.png",
        "tooltip": "nui.customizing.idslu.search_also.tooltip.swisscovery",
        mapping: function mapping(search) {
          return self.searchTerms;
        }
      }, {
        "view": "*",
        "name": "Google Scholar",
        "url": "https://scholar.google.com/scholar?q=",
        "img": "https://scholar.google.com/favicon.ico",
        "tooltip": "nui.customizing.idslu.search_also.tooltip.google_scolar",
        mapping: function mapping(search) {
          return self.parsedQuery[0][2];
        }
      }, {
        "view": "*",
        "name": "Worldcat",
        "url": "https://www.worldcat.org/search?q=",
        "img": "https://rzs.swisscovery.org/discovery/custom/41SLSP_RZS-VU15/img/favicon_worldcat.png",
        "tooltip": "nui.customizing.idslu.search_also.tooltip.worldcat",
        mapping: function mapping(search) {
          var type_mappings = {
            "any": "kw",
            "title": "ti",
            "creator": "au",
            "subject": "su"
          };

          return self.parsedQuery.map(m => `${type_mappings[m[0]] || "kw"}:${m[2] || ''}`).join(' ');
        }
      }].filter(f => f.view != self.viewCode);
  }
}

SearchAlsoBodyController.$inject = ['$location'];


export let searchAlsoBodyComponent = {
  name: 'rzs-search-also-body',
  config: {
    bindings: { parentCtrl: '<' },
    controller: SearchAlsoBodyController,
    template: searchAlsoBodyHTML
  },
  enabled: true,
  appendTo: 'prm-facet-exact-after',
  enableInView: '.*'
}
