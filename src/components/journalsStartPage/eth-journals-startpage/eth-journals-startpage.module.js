
import {ethConfigService} from './eth-config.service.js';
import {ethJournalsStartpageConfig} from './eth-journals-startpage.config';
import {ethJournalsStartpageController} from './eth-journals-startpage.controller';
import ethJournalsStartpageHtml from './eth-journals-startpage.html';

angular.module('ethJournalsStartpageModule', [])
        .factory('ethConfigService', ethConfigService)
        .factory('ethJournalsStartpageConfig', ethJournalsStartpageConfig)
        .controller('ethJournalsStartpageController', ethJournalsStartpageController)
        .component('ethJournalsStartpageComponent',{
            bindings: {afterCtrl: '<'},
            controller: 'ethJournalsStartpageController',
            template: ethJournalsStartpageHtml
        })
