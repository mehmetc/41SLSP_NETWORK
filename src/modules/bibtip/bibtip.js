/*
  KULeuven/LIBIS (c) 2022
  Mehmet Celik mehmet(dot)celik(at)kuleuven(dot)be
*/
angular.module('bibtip', ['ng', 'angularLoad']).run(['angularLoad', '$rootScope', '$translate', (angularLoad, $rootScope, $translate) => {
  let watcher = $rootScope.$watch(() => {
    try {
      if ($translate.instant(`nui.customization.bibTip`) == `nui.customization.bibTip`) {
        return false;
      } else {
        return true;
      }
    } catch (e) {
      return false;
    }
  }, (n, o) => {
    if (n == true) {
      let bibTipURL = $translate.instant(`nui.customization.bibTip`);
      angularLoad.loadScript(bibTipURL).then(function () {
        console.log('bibtip.js loaded');
      });
      watcher();
    }
  });
}]);

