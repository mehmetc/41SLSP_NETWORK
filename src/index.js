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
import './modules/matomo';
import './modules/bibtip';
import './modules/browzine';
import './modules/remoteUrl';
/* import './modules/userlike'; */

/* import 'primo-explore-eth-archives-getit'; */

/* import './swisscovery/41SLSP_NETWORK-VU1_UNION/js/slsp-edit-personal-details'; */
/* import './swisscovery/41SLSP_NETWORK-VU1_UNION/js/slsp-http-intercept-requests'; */


(function () {
  //let customType = 'centralCustom';
  let customType = 'viewCustom';
  let moduleList = ['remoteUrl', 'pubSubInterceptor', 'oc.lazyLoad', 'ngMaterial', 'angularLoad',
                    'matomo', 'browzine', 'altmetric', 'bibtip', 'ethOpenurlInterlibraryModule',
                    , 'ethJournalsStartpageModule', 'ethPersonCardModule'];
  /* let moduleList = ['remoteUrl', 'pubSubInterceptor', 'oc.lazyLoad', 'ngMaterial', 'angularLoad',
                    'matomo', 'browzine', 'altmetric', 'bibtip', 'ethOpenurlInterlibraryModule',
                    'userlike', 'ethJournalsStartpageModule', 'ethPersonCardModule']; */

  let app = angular.module(customType, moduleList).service('MessageService', MessageService);

//   app.config(function($provide) {
//     $provide.decorator('slspIButton', function($delegate) {
//         var directive = $delegate[0];
//         directive.template = '<div>New overridden template!</div>';
//         return $delegate;
//     });
// });

//   app.config(['$provide', function($provide) {

//     // monkey-patches $templateCache to have a keys() method
//     $provide.decorator('$templateCache', [
//         '$delegate', function($delegate) {
//             let keys = [];
//             let origPut = $delegate.put;

//             $delegate.put = function(key, value) {
//                 origPut(key, value);
//                 keys.push(key);
//             };

//             $delegate.keys = function() {
//                 return keys;
//             };

//             $delegate.data = function() {
//               return data;
//             }

//             return $delegate;
//         }
//     ]);
// }]);

  //Load components
  new Loader().load(customType);
  console.log(`Done initializing ${customType}`)
})();