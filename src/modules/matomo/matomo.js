angular.module('matomo', ['angularLoad']).run(['angularLoad','$rootScope','$translate', function (angularLoad, $rootScope, $translate) {

  let watcher = $rootScope.$watch(() => {
    try {
      if ($translate.instant(`nui.customization.analytics.matomo.${window.appConfig.vid}.id`) == `nui.customization.analytics.matomo.${window.appConfig.vid}.id`) {
        return false;
      } else {
        return true;
      }
    } catch (e) {
      return false;
    }
  }, (n, o) => {
    if (n == true) {
      var matomoID = $translate.instant(`nui.customization.analytics.matomo.${window.appConfig.vid}.id`);
      var matomoURL = $translate.instant(`nui.customization.analytics.matomo.${window.appConfig.vid}.url`);      
      var _paq = window._paq = window._paq || [];

      matomoURL = 'https://' + matomoURL + '/';

      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      _paq.push(['setTrackerUrl', `${matomoURL}matomo.php`]);
      _paq.push(['setSiteId', matomoID]);

      angularLoad.loadScript(`${matomoURL}matomo.js`).then(function () {
        console.log('matomo.js loaded');
      });      

      watcher();      
    }
  });
}]);

