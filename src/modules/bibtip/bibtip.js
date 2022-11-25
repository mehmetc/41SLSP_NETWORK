/*
  KULeuven/LIBIS (c) 2022
  Mehmet Celik mehmet(dot)celik(at)kuleuven(dot)be
*/
angular.module('bibtip', ['ng','angularLoad']).run(['angularLoad', '$translate',(angularLoad, $translate) => {
    let bibTipURL = $translate.instant(`nui.customization.bibTip`);
    angularLoad.loadScript(bibTipURL).then(function () {
      console.log('bibtip.js loaded');
    });
}]);

