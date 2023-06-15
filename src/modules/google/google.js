
(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments);
  }, i[r].l = 1 * new Date();
  a = s.createElement(o), m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

angular.module('google', ['angularLoad']).run(['$rootScope', '$translate', function ($rootScope, $translate) {
  let watcher = $rootScope.$watch(() => {
    try {
      if ($translate.instant(`nui.customization.googleanalytics.${window.appConfig.vid}`) == `nui.customization.googleanalytics.${window.appConfig.vid}`) {
        return false;
      } else {
        return true;
      }
    } catch (e) {
      return false;
    }
  }, (n, o) => {
    if (n == true) {
      let googleAnalyticsKey = $translate.instant(`nui.customization.googleanalytics.${window.appConfig.vid}`);
      if (googleAnalyticsKey) {
        ga('create', googleAnalyticsKey, 'auto');
        ga('send', 'pageview');
      }

      watcher();
    }
  });
}]);
