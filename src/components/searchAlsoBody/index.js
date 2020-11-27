import searchAlsoBodyHTML from './searchAlsoBody.html'

class SearchAlsoBodyController {
  constructor($location) {
    this.location = $location;
    this.targets = this._targets();
  }

  get search() {
    return this.location.search().query || '';
  }

  get name() {
    return this.parentCtrl.parentCtrl.facetGroup.name;
  }

  _targets() {
    return [
      {
        "name": "swisscovery RZS",
        "url": "https://slsp-rzs.primo.exlibrisgroup.com/discovery/search?&tab=41SLSP_RZS_MyInst_and_CI&search_scope=MyInst_and_CI&vid=41SLSP_RZS:VU15&query=any,contains,",
        "img": "https://slsp-rzs.primo.exlibrisgroup.com/discovery/custom/41SLSP_RZS-VU06/img/favicon_everything_view.png",
        "tooltip": "nui.customizing.idslu.search_also.tooltip.swisscovery-rzs",
        mapping: function mapping(search) {
          var terms = search.split(",");
          return terms[2] || "";
        }
      },
      /*{
      "name": "swisscovery RZS - HSLU",
      "url": "https://slsp-rzs.primo.exlibrisgroup.com/discovery/search?&tab=41SLSP_RZS_MyInst_and_CI&search_scope=MyInst_and_CI&vid=41SLSP_RZS:VU06&query=any,contains,",
      "img": "https://slsp-rzs.primo.exlibrisgroup.com/discovery/custom/41SLSP_RZS-VU07/img/vector-difference-ba.png",
      "tooltip": "nui.customizing.idslu.search_also.tooltip.swisscovery-rzs-hslu",
      mapping: function mapping(search) {
       var terms = search.split(",");
       return terms[2] || "";
      }
      },*/
      {
        "name": "swisscovery RZS - ZHB/Uni/PH",
        "url": "https://slsp-rzs.primo.exlibrisgroup.com/discovery/search?&tab=41SLSP_RZS_MyInst_and_CI&search_scope=MyInst_and_CI&vid=41SLSP_RZS:VU07&query=any,contains,",
        "img": "https://slsp-rzs.primo.exlibrisgroup.com/discovery/custom/41SLSP_RZS-VU06/img/favicon_zhb_view.png",
        "tooltip": "nui.customizing.idslu.search_also.tooltip.swisscovery-rzs-zhbuniph",
        mapping: function mapping(search) {
          var terms = search.split(",");
          return terms[2] || "";
        }
      }, {
        "name": "swisscovery",
        "url": "https://slsp-network.primo.exlibrisgroup.com/discovery/search?&tab=41SLSP_NETWORK&search_scope=DN_and_CI&vid=41SLSP_NETWORK:VU1_UNION&query=any,contains,",
        "img": "https://slsp-network.primo.exlibrisgroup.com/discovery/custom/41SLSP_RZS-VU06/img/favicon_swisscovery.png",
        "tooltip": "nui.customizing.idslu.search_also.tooltip.swisscovery",
        mapping: function mapping(search) {
          var terms = search.split(",");
          return terms[2] || "";
        }
      }, {
        "name": "Google Scholar",
        "url": "https://scholar.google.com/scholar?q=",
        "img": "https://primo-direct-eu-sb.hosted.exlibrisgroup.com/primo-explore/custom/41ZBL/img/google_icon.png",
        "tooltip": "nui.customizing.idslu.search_also.tooltip.google_scolar",
        mapping: function mapping(search) {
          var terms = search.split(",");
          return terms[2] || "";
        }
      }, {
        "name": "Worldcat",
        "url": "https://www.worldcat.org/search?q=",
        "img": "https://primo-direct-eu-sb.hosted.exlibrisgroup.com/primo-explore/custom/41ZBL/img/worldcat_icon.png",
        "tooltip": "nui.customizing.idslu.search_also.tooltip.worldcat",
        mapping: function mapping(search) {
          var type_mappings = {
            "any": "kw",
            "title": "ti",
            "creator": "au",
            "subject": "su"
          };
          var terms = search.split(",");
          var type = type_mappings[terms[0]] || "kw";
          var query = terms[2] || "";
          return type + ':' + query;
        }
      }];
  }
}

SearchAlsoBodyController.$inject = ['$location'];


export let searchAlsoComponent = {
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
