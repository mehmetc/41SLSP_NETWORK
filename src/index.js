/*
  General entry to Primo custom methods

  (c)2020 KULeuven/LIBIS 
  Mehmet Celik  
*/

"use strict"
import Primo from './primo';
import Loader from './loader';
import MessageService from './factories/messageService';
import 'primo-explore-eth-openurl-interlibrary';
import 'primo-explore-eth-person-card';
import './modules/pubSubInterceptor';
import './modules/altmetric';
import './modules/google';
import './modules/matomo';
import './modules/bibtip';
import './modules/browzine'

/* import 'primo-explore-eth-archives-getit'; */

/* import './swisscovery/41SLSP_NETWORK-VU1_UNION/js/slsp-edit-personal-details'; */
/* import './swisscovery/41SLSP_NETWORK-VU1_UNION/js/slsp-http-intercept-requests'; */


(function () {
  //let customType = 'centralCustom';
  let customType = 'viewCustom';
  window.Primo = new Primo();

  let app = angular.module(customType, ['pubSubInterceptor', 'oc.lazyLoad', 'ngMaterial', 'angularLoad', 'matomo', 'google', 'browzine', 'altmetric', 'bibtip', 'ethOpenurlInterlibraryModule', 'ethJournalsStartpageModule', 'ethPersonCardModule']).config(($sceDelegateProvider) => {
      $sceDelegateProvider.resourceUrlWhitelist([
        '**'
      ]);
    })
    // .config(($compileProvider) => {
    //   $compileProvider.preAssignBindingsEnabled(true);
    // })
    .service('MessageService', MessageService);

  //Load components
  new Loader().load(customType);
  console.log(`Done initializing ${customType}`)
})();