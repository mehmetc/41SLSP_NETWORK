class AlertMessageController {
  constructor($scope, MessageService) {
    this.$scope = $scope;
    this.MessageService = MessageService;    
  }

  $onInit() {
    let self = this;
    self.MessageService.show('', self.$scope);
  }
}

AlertMessageController.$inject = ['$scope', 'MessageService'];

export let alertMessagecomponent = {
  name: 'rzs-alert-message',  
  enabled: true,
 // appendTo: 'prm-top-bar-before', 
  appendTo: 'slsp-top-bar-before',
  enableInView: '.*',  
  config: {
    bindings: {parentCtrl: '<'},
    controller: AlertMessageController,
    template: ''
  }
}
