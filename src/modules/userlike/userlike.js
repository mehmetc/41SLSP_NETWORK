/*
  KULeuven/LIBIS (c) 2024
  Mehmet Celik mehmet(dot)celik(at)kuleuven(dot)be
*/
angular.module('userlike', ['ng','angularLoad']).run(['angularLoad',(angularLoad) => {
    angularLoad.loadScript('https://userlike-cdn-widgets.s3-eu-west-1.amazonaws.com/b11c4db8afd8447aa09cef86d2f415fa292c0d29ead147499d60c6603ff8b114.js').then(function () {
      console.log('userlike.js loaded');
    });
}]);