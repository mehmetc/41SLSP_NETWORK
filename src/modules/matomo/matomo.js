angular.module('matomo', ['angularLoad']).run(['$rootScope','$translate', function ($rootScope, $translate) {

  let watcher = $rootScope.$watch(() => {
    console.log(`TRANSLATE: ${$translate.isReady()}`);
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

      (function () {
        _paq.push(['setTrackerUrl', matomoURL + 'matomo.php']);
        _paq.push(['setSiteId', matomoID]);
        var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
        g.type = 'text/javascript'; g.async = true; g.src = matomoURL + 'matomo.js'; s.parentNode.insertBefore(g, s);
      })();

      watcher();
    }
  });
}]);

