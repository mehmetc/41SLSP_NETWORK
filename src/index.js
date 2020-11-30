/*
  General entry to Primo custom methods

  (c)2020 KULeuven/LIBIS 
  Mehmet Celik  
*/

"use strict"
import Primo from './primo';
import Loader from './loader';
import MessageService from './factories/messageService';

// standard google analytics tracking code
(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments);
  }, i[r].l = 1 * new Date(); a = s.createElement(o), m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m);
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

(function () {
  //let customType = 'centralCustom';
  let customType = 'viewCustom';
  window.Primo = new Primo();
  let app = angular.module(customType, ['oc.lazyLoad', 'ngMaterial', 'angularLoad']).config(($sceDelegateProvider) => {
    $sceDelegateProvider.resourceUrlWhitelist([
      '**'
    ]);
  })
    .service('MessageService', MessageService)
    .run(($translate, $rootScope, angularLoad) => {
      angularLoad.loadScript('https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js').then(() => {
        console.log('browzine-primo-adapter.js loaded');
      });

      let watcher = $rootScope.$watch(() => {
        try {
          if ($translate.instant('nui.customization.browzine.id') == 'nui.customization.browzine.id') {
            return false;
          } else {
            return true;
          }
        } catch (e) {
          return false;
        }
      }, (n, o) => {
        if (n == true) {
          let apiId = $translate.instant('nui.customization.browzine.id');
          let apikey = $translate.instant('nui.customization.browzine.apikey');
          let journal = $translate.instant('nui.customization.browzine.journal');
          let issue = $translate.instant('nui.customization.browzine.issue');
          let downloadEnabled = $translate.instant('nui.customization.browzine.download_enable') == '1';
          let download = $translate.instant('nui.customization.browzine.download');

          window.browzine = {
            api: `https://public-api.thirdiron.com/public/v1/libraries/${apiId}`,
            apiKey: apikey,
            journalBrowZineWebLinkText: journal,
            articleBrowZineWebLinkText: issue,
            articlePDFDownloadLinkEnabled: downloadEnabled,
            articlePDFDownloadLinkText: download,
            //articleLinkText = "Read Article";
            //articlePDFDownloadViaUnpaywallText = "Download PDF (via Unpaywall)";
            //articleLinkViaUnpaywallText = "Read Article (via Unpaywall)";
            //articleAcceptedManuscriptPDFViaUnpaywallText = "Download PDF (Accepted Manuscript via Unpaywall)";
            //articleAcceptedManuscriptArticleLinkViaUnpaywallText = "Read Article (Accepted Manuscript via Unpaywall)";            
          };



          let googleAnalyticsKey = $translate.instant(`nui.customization.googleanalytics.${window.Primo.bridge.viewCode}`);
          if (googleAnalyticsKey) {
            ga('create', googleAnalyticsKey, 'auto');
            ga('send', 'pageview');
          }

          let bibTipURL = $translate.instant(`nui.customization.bibTip`);
          //https://recommender.bibtip.de/js/bibtip_zhb_luzern.js
          angularLoad.loadScript(bibTipURL).then(function () {
            console.log('bibtip.js loaded');
          });

          watcher();
        }
      });

      angularLoad.loadScript('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js?' + Date.now()).then(function () {
        console.log('Altmetric script loaded');
      });
    });

    //Load components
  new Loader().load(customType);
  console.log(`Done initializing ${customType}`)
})();