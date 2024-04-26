//facets.facet.facet_search_also
class SearchAlsoController {
    constructor($scope){
      this.$scope = $scope;
    }

    $onInit(){      
      let facetService = this.parentCtrl.parentCtrl.facetService;
      let searchAsoWatcher = this.$scope.$watch(() => {        
          return facetService.results;
      }, (n,o) => {          
          if (facetService.results.filter(f => {return f.name == 'search_also'}).length == 0) {                  
            //BOTTOM
            facetService.results.push({
            //TOP 
            //facetService.results.unshift({
              name: 'search_also',
              displayedType: 'exact',
              limitCount: 0,
              facetGroupCollapsed: false,
              values: undefined
            });
//            searchAsoWatcher();
          }
      });
      
    }
  }
  
  SearchAlsoController.$inject = ['$scope'];
  
  
  export let searchAlsoComponent = {
    name: 'rzs-search-also',
    config: {
      bindings:{parentCtrl:'<'},
      controller: SearchAlsoController
    },
    enabled: true,
    appendTo: 'prm-facet-after',
    enableInView: '.*'
  }