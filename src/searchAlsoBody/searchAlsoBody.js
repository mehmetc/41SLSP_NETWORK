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
    return [{
      "name": "Swissbib",
      "url": "https://www.swissbib.ch/search/results?&lookfor=",
      "img": "https://primo-direct-eu-sb.hosted.exlibrisgroup.com/primo-explore/custom/41ZBL/img/swissbib_icon.png",
      "tooltip": "nui.customizing.idslu.search_also.tooltip.swissbib",
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


export let component = {
  name: 'zbl-search-also-body',
  config: {
    bindings: { parentCtrl: '<' },
    controller: SearchAlsoBodyController,
    template: searchAlsoBodyHTML
  },
  enabled: true,
  appendTo: 'prm-facet-exact-after',
  enableInView: '.*'
}