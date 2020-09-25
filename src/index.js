"use strict"
import Primo from './primo'
import Loader from './loader';
import MessageService from './factories/messageService'

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
    .run(($translate, $rootScope, $templateCache, angularLoad) => {
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

          angularLoad.loadScript('https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js').then(() => {
            console.log('browzine-primo-adapter.js loaded');
          });

          watcher();
        }
      });

      angularLoad.loadScript('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js?' + Date.now()).then(function () {
        console.log('Altmetric script loaded');
      });

      angularLoad.loadScript('https://recommender.bibtip.de/js/bibtip_zhb_luzern.js').then(function () {
        console.log('bibtip.js loaded');
      });
    });
  
    new Loader().load(customType);
    console.log(`Done initializing ${customType}`)
})();