import authorDisplayCollectionsHTML from './author_display_collections.html'

class AuthorDisplayCollectionsController {
    constructor() {
    }

    $onInit() {
        var vm = this;
        vm.showAuthor = function() {
            
            if (vm.parentCtrl.parentCtrl.item.pnx.addata.hasOwnProperty('au')){
                vm.author = vm.parentCtrl.parentCtrl.item.pnx.addata.au[0] || '';
            }
            else if (vm.parentCtrl.parentCtrl.item.pnx.addata.hasOwnProperty('addau')){
                vm.author = vm.parentCtrl.parentCtrl.item.pnx.addata.addau[0] || '';
            }
              
            if (vm.author !== '') {
                return true;
            }
        };        
    }
}

export let authorDisplayCollectionsConfig = {
    name: 'rzs-author-display-collections',
    config: {
        bindings: {parentCtrl: '<'},
        controller: AuthorDisplayCollectionsController,
        template: authorDisplayCollectionsHTML
    },
    enabled: true,
    appendTo: 'prm-gallery-item-after',
    enableInView: '.*'
}