//import angular from 'angular';
import Loader from './loader';

import locationItemsHTML from './templates/prmLocationItems/location-items.html'
import locationHTML from './templates/prmLocation/location.html'

let componentLoader = new Loader();
let app = angular.module('centralCustom', ['angularLoad']);
componentLoader.load(app);

// app.run(
//         ($translate, $rootScope, $templateCache)=>{
//             $templateCache.put('components/search/fullView/getit/opac/locations/location-items.html', locationItemsHTML);
//             $templateCache.put('components/search/fullView/getit/opac/locations/location/location.html', locationHTML);
//         }
//     );