class AlertMessageController {
  constructor($scope, MessageService) {
    MessageService.show('', $scope);
  }
}

AlertMessageController.$inject = ['$scope', 'MessageService'];

export let component = {
  name: 'rzs-alert-message',  
  enabled: true,
  appendTo: 'prm-top-bar-before',
  enableInView: '.*',  
  config: {
    bindings: {parentCtrl: '<'},
    controller: AlertMessageController,
    template: ''
  }
}
