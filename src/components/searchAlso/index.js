//facets.facet.facet_search_also
class SearchAlsoController {
    constructor($scope){
  
      $scope.$watch(() => {
          return this.parentCtrl.parentCtrl.facetService.results;
      }, (n,o) => {
        if (n != o) {
          if (this.parentCtrl.parentCtrl.facetService.results.filter(f => {return f.name == 'search_also'}).length == 0) {
            this.parentCtrl.parentCtrl.facetService.results.unshift({
              name: 'search_also',
              displayedType: 'exact',
              limitCount: 0,
              facetGroupCollapsed: false,
              values: undefined
            });
          }
        }
      });
      
    }
  }
  
  SearchAlsoController.$inject = ['$scope'];
  
  
  export let component = {
    name: 'rzs-search-also',
    config: {
      bindings:{parentCtrl:'<'},
      controller: SearchAlsoController
    },
    enabled: true,
    appendTo: 'prm-facet-after',
    enableInView: '.*'
  }