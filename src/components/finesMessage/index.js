import Primo from '../../primo';

class FinesMessageController {
  constructor(MessageService, $translate) {
    let self = this;
    
    Primo.user.then(user => {
      self.user = user;
      if (user.fines.length > 0) {
        //TODO:extract html to its own file. find out how to resolve {{}}

        let message = $translate.instant('nui.customizing.idslu.youHaveFines');
        message = message.replace(/\$0/, user.fines.length);

        let pay = $translate.instant('nui.customizing.idslu.youHaveFines.pay');

        MessageService.show(`
            <span style="align-self:center;">${message}</span>
            <a style="background-color: tomato;color: white;"
               class="md-button md-raised md-secundary" target='_blank'
               href='#'>${pay}</a>
          `);
      }
    });
  }
}

FinesMessageController.$inject = ['MessageService', '$translate'];

export let component = {
  name: 'rzs-fines-message',  
  enabled: false,
  appendTo: 'prm-top-bar-before',
  enableInView: '.*',  
  config: {
    bindings: {
      parentCtrl: '<'
    },
    controller: FinesMessageController,
    template: ''
  }
}
