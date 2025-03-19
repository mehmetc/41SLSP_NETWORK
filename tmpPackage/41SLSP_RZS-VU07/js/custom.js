/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/alertMessage/index.js":
/*!**********************************************!*\
  !*** ./src/components/alertMessage/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alertMessagecomponent: () => (/* binding */ alertMessagecomponent)
/* harmony export */ });
class AlertMessageController {
  constructor($scope, MessageService) {
    this.$scope = $scope;
    this.MessageService = MessageService;
  }
  $onInit() {
    let self = this;
    self.MessageService.show('', self.$scope);
  }
}
AlertMessageController.$inject = ['$scope', 'MessageService'];
let alertMessagecomponent = {
  name: 'rzs-alert-message',
  enabled: true,
  // appendTo: 'prm-top-bar-before', 
  appendTo: 'slsp-top-bar-before',
  enableInView: '.*',
  config: {
    bindings: {
      parentCtrl: '<'
    },
    controller: AlertMessageController,
    template: ''
  }
};

/***/ }),

/***/ "./src/components/altmetric/index.js":
/*!*******************************************!*\
  !*** ./src/components/altmetric/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   altMetricComponent: () => (/* binding */ altMetricComponent)
/* harmony export */ });
/* harmony import */ var _altmetric_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./altmetric.html */ "./src/components/altmetric/altmetric.html");


/*
//script needs to be loaded first. Can be put in the $onInit() function
//or better in run method.
app.run(($templateCache) => {
  Helper.loadScript('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js?' + Date.now()).then(function () {
    console.log('altmerics.js loaded');
  });
});
*/

class AltMetricController {
  constructor($element, $window, $scope) {
    this.$element = $element;
    this.$window = $window;
    this.$scope = $scope;
  }
  $onInit() {
    var self = this;
    let item = self.parentCtrl.parentCtrl.item;
    self.doi = '';
    self.isbn = '';
    self.id = self.guid();
    self.recordid = '';
    if (item && item.pnx && item.pnx.addata) {
      self.recordid = item.pnx.control.recordid[0];
      if (item.pnx.addata.doi) {
        self.doi = item.pnx.addata.doi[0];
      }
      if (item.pnx.addata.isbn) {
        self.isbn = item.pnx.addata.isbn[0];
      }
    }

    //this is a watcher on the local scope and will trigger altmetric
    let altmetricWatcher = self.$scope.$watch(() => {
      let altmetricLoaded = typeof window._altmetric_embed_init === 'function';
      let isbnExists = document.querySelector(`#altmetric-isbn-${self.id}`) != null;
      let doiExists = document.querySelector(`#altmetric-doi-${self.id}`) != null;
      let runTrigger = altmetricLoaded && (isbnExists || doiExists);

      //console.log(self.id, altmetricLoaded, isbnExists, doiExists, runTrigger);
      return runTrigger;
    }, (n, o) => {
      if (n == true) {
        console.log("trigger altmetric for:", self.recordid);
        self.$window._altmetric_embed_init(`#altmetric-isbn-${self.id}`);
        self.$window._altmetric_embed_init(`#altmetric-doi-${self.id}`);
        altmetricWatcher(); //deregister watcher
      }
    }, false);
  }
  guid() {
    let s4 = function () {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
}
AltMetricController.$inject = ['$element', '$window', '$scope'];
let altMetricComponent = {
  name: 'rzs-altmetric',
  enabled: true,
  appendTo: 'prm-brief-result-after',
  enableInView: '.*',
  config: {
    bindings: {
      parentCtrl: '<'
    },
    controller: AltMetricController,
    template: _altmetric_html__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
};

/***/ }),

/***/ "./src/components/archivesGetit/index.js":
/*!***********************************************!*\
  !*** ./src/components/archivesGetit/index.js ***!
  \***********************************************/
/***/ (() => {

// import 'primo-explore-eth-archives-getit';

// class ArchivesGetitController {
//   constructor() {
//     this.mainParentCtrl = this.parentCtrl;
//   }
// }

// export let rzsArchivesComponent = {
//     name: 'rzs-archives-getit',  
//     enabled: false,    
//     appendTo: 'slsp-alma-viewit-after',
//     enableInView: '.*',  
//     config: {      
//       bindings: {parentCtrl: '<'},
//       controller: ArchivesGetitController,
//       template: '<eth-archives-getit-component after-ctrl="$ctrl.mainParentCtrl"></eth-archives-getit-component>'
//     }
//   }

/***/ }),

/***/ "./src/components/author_display_collections/index.js":
/*!************************************************************!*\
  !*** ./src/components/author_display_collections/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authorDisplayCollectionsConfig: () => (/* binding */ authorDisplayCollectionsConfig)
/* harmony export */ });
/* harmony import */ var _author_display_collections_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./author_display_collections.html */ "./src/components/author_display_collections/author_display_collections.html");

class AuthorDisplayCollectionsController {
  constructor() {}
  $onInit() {
    var vm = this;
    vm.showAuthor = function () {
      if (vm.parentCtrl.parentCtrl.item.pnx.addata.hasOwnProperty('au')) {
        vm.author = vm.parentCtrl.parentCtrl.item.pnx.addata.au[0] || '';
      } else if (vm.parentCtrl.parentCtrl.item.pnx.addata.hasOwnProperty('addau')) {
        vm.author = vm.parentCtrl.parentCtrl.item.pnx.addata.addau[0] || '';
      }
      if (vm.author !== '') {
        return true;
      }
    };
  }
}
let authorDisplayCollectionsConfig = {
  name: 'rzs-author-display-collections',
  config: {
    bindings: {
      parentCtrl: '<'
    },
    controller: AuthorDisplayCollectionsController,
    template: _author_display_collections_html__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  enabled: true,
  appendTo: 'prm-gallery-item-after',
  enableInView: '.*'
};

/***/ }),

/***/ "./src/components/browzine/index.js":
/*!******************************************!*\
  !*** ./src/components/browzine/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   browzineComponent: () => (/* binding */ browzineComponent)
/* harmony export */ });
class BrowzineController {
  constructor($scope) {
    this.$scope = $scope;
  }
  $onInit() {
    let self = this;
    let item = self.parentCtrl.parentCtrl.result;
    self.recordid = '';
    if (item && item.pnx && item.pnx.addata) {
      self.recordid = item.pnx.control.recordid[0];
    }
    let browzineWatcher = self.$scope.$watch(() => {
      return typeof browzine != "undefined" && typeof browzine.primo === 'object';
    }, (n, o) => {
      if (n == true) {
        console.log("trigger browzine for:", self.recordid);
        let scope = {
          $ctrl: self.parentCtrl
        };
        window.browzine.primo.searchResult(scope);
        browzineWatcher();
      }
    });
  }
}
BrowzineController.$inject = ['$scope'];
let browzineComponent = {
  name: 'rzs-browzine',
  enabled: true,
  appendTo: 'slsp-search-result-availability-line-after',
  enableInView: '.*',
  config: {
    bindings: {
      parentCtrl: '<'
    },
    controller: BrowzineController
  }
};

/***/ }),

/***/ "./src/components/dotTest/index.js":
/*!*****************************************!*\
  !*** ./src/components/dotTest/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dotTestComponent: () => (/* binding */ dotTestComponent)
/* harmony export */ });
class DotTestController {
  constructor($ocLazyLoad, $injector) {
    this.$ocLazyLoad = $ocLazyLoad;
    this.$injector = $injector;
  }
  $onInit() {
    console.log('constructor');
  }
}
DotTestController.$inject = ['$ocLazyLoad', '$injector'];
let dotTestComponent = {
  name: 'dot-test',
  config: {
    bindings: {
      parentCtrl: '<'
    },
    controller: DotTestController,
    template: "<div style='position:fixed;right: 0;top: 0;color:#009991;opacity:0.5;z-index: 100000;font-size: 10em;'>.</div>"
  },
  enabled: false,
  //appendTo: 'prm-top-bar-before',
  appendTo: 'slsp-top-bar-before',
  enableInView: '.*'
};

/***/ }),

/***/ "./src/components/journalsStartPage/eth-journals-startpage/eth-config.service.js":
/*!***************************************************************************************!*\
  !*** ./src/components/journalsStartPage/eth-journals-startpage/eth-config.service.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ethConfigService: () => (/* binding */ ethConfigService)
/* harmony export */ });
/**
* @ngdoc service
* @key ethConfigService
*
* @description
*
* Service to get and handle informations from a module config:
* - getLabel()
* - getUrl()
* - getLanguage()
*
 */
const ethConfigService = ['$rootScope', function ($rootScope) {
  function getLanguage() {
    try {
      let sms = $rootScope.$$childHead.$ctrl.userSessionManagerService;
      if (!sms) {
        console.error("***ETH*** ethConfigService: userSessionManagerService not available");
        return 'en';
      } else {
        return sms.getUserLanguage() || $window.appConfig['primo-view']['attributes-map'].interfaceLanguage;
      }
    } catch (e) {
      console.error("***ETH*** an error occured: ethConfigService.getLanguage():");
      console.error(e.message);
      return 'en';
    }
  }
  function getLabel(config, key) {
    try {
      let lang = this.getLanguage();
      if (!config.label[key]) {
        console.error("***ETH*** ethConfigService.getLabel: '" + key + "' not in config");
        return key;
      }
      if (config.label[key][lang]) {
        return config.label[key][lang];
      } else {
        return config.label[key]['en'];
      }
    } catch (e) {
      console.error("***ETH*** an error occured: ethConfigService.getLabel():");
      console.error(e.message);
      return '';
    }
  }
  function getUrl(config, key) {
    try {
      let lang = this.getLanguage();
      if (!config.url[key]) {
        console.error("***ETH*** ethConfigService.getUrl: '" + key + "' not in config");
        return '';
      }
      if (config.url[key][lang]) {
        return config.url[key][lang];
      } else {
        return config.url[key]['en'];
      }
    } catch (e) {
      console.error("***ETH*** an error occured: ethConfigService.getUrl():");
      console.error(e.message);
      return '';
    }
  }
  return {
    getLanguage: getLanguage,
    getLabel: getLabel,
    getUrl: getUrl
  };
}];

/***/ }),

/***/ "./src/components/journalsStartPage/eth-journals-startpage/eth-journals-startpage.config.js":
/*!**************************************************************************************************!*\
  !*** ./src/components/journalsStartPage/eth-journals-startpage/eth-journals-startpage.config.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ethJournalsStartpageConfig: () => (/* binding */ ethJournalsStartpageConfig)
/* harmony export */ });
const ethJournalsStartpageConfig = function () {
  return {
    label: {
      heading: {
        de: 'Zeitschriftensuche Region Zentralschweiz',
        en: 'Journal search of the Region of Central Switzerland (RZS)'
      },
      p1: {
        de: 'Suche nach gedruckten und elektronischen Zeitschriften der Bibliotheken der Region Zentralschweiz. Achten Sie darauf, dass Sie sich für lizenzierte E-Journals im entsprechenden Netz (vor Ort oder per VPN) befinden.',
        en: 'Search for printed and electronic journals of the libraries in the Central Switzerland region. Make sure that you are on the appropriate network (on site or via VPN) for licensed e-journals.'
      },
      p2: {
        de: 'Bei Fragen wenden Sie sich an Ihre ',
        en: 'If you have any questions, please contact your '
      },
      ill: {
        de: 'Bibliothek',
        en: 'library'
      }
    },
    url: {
      ill: {
        de: 'https://www.rzsinfo.ch/bibliotheken',
        en: 'https://www.rzsinfo.ch/bibliotheken'
      }
    }
  };
};

/***/ }),

/***/ "./src/components/journalsStartPage/eth-journals-startpage/eth-journals-startpage.config_original.js":
/*!***********************************************************************************************************!*\
  !*** ./src/components/journalsStartPage/eth-journals-startpage/eth-journals-startpage.config_original.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ethJournalsStartpageConfig: () => (/* binding */ ethJournalsStartpageConfig)
/* harmony export */ });
const ethJournalsStartpageConfig = function () {
  return {
    label: {
      heading: {
        de: 'Zeitschriftensuche für Bestände an ETH Zürich',
        en: 'Journal search for holdings at ETH Zurich'
      },
      p1: {
        de: 'Mit der Zeitschriftensuche können Sie in den Zeitschriftenbeständen der Bibliotheken der ETH Zürich suchen – sowohl E-Journals wie auch gedruckte Zeitschriften.',
        en: 'Using the journal search, you can search the journal holdings of the ETH Zurich libraries – both the e-journals and printed journals.'
      },
      h3: {
        de: 'Finden Sie die gewünschte Zeitschrift nicht?',
        en: 'Unable to find the journal you are looking for?'
      },
      option1a: {
        de: 'Mitarbeitende der ETH:',
        en: 'Employees of ETH Zurich:'
      },
      option1b: {
        de: 'Bestellen Sie kostenlos via',
        en: 'place an order free of charge via an'
      },
      option2a: {
        de: 'ETH-Studierende:',
        en: 'ETH Zurich students:'
      },
      option2b: {
        de: 'Suchen Sie die Zeitschrift mit "Neue Suche" und bestellen Sie den Zeitschriftenband kostenlos an einen Abholort an der ETH oder kostenpflichtig Kopien daraus.',
        en: 'search for the journal using "New Search" and have the bound volume sent free of charge to a pick-up location at ETH Zurich or have copies made of it for a fee and have them sent.'
      },
      option3a: {
        de: 'Privatpersonen:',
        en: 'Private individuals:'
      },
      option3b: {
        de: 'Suchen Sie die Zeitschrift mit "Neue Suche" und bestellen Sie den Zeitschriftenband oder Kopien daraus kostenpflichtig bei einer anderen Bibliothek.',
        en: 'search for the journal using "New Search" and order the bound volume from another library or have copies of it sent for a fee.'
      },
      option4a: {
        de: 'Firmenkunden:',
        en: 'Corporate clients:'
      },
      option4b: {
        de: 'Bestellen Sie kostenpflichtig via',
        en: 'order for a fee via an'
      },
      ill: {
        de: 'Fernleihe',
        en: 'interlibrary loan'
      }
    },
    url: {
      ill: {
        de: 'https://documentation.library.ethz.ch/display/WWE/Fernleihe',
        en: 'https://documentation.library.ethz.ch/display/WWE/Interlibrary+loan'
      }
    }
  };
};

/***/ }),

/***/ "./src/components/journalsStartPage/eth-journals-startpage/eth-journals-startpage.controller.js":
/*!******************************************************************************************************!*\
  !*** ./src/components/journalsStartPage/eth-journals-startpage/eth-journals-startpage.controller.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ethJournalsStartpageController: () => (/* binding */ ethJournalsStartpageController)
/* harmony export */ });
class ethJournalsStartpageController {
  constructor(ethConfigService, ethJournalsStartpageConfig) {
    this.ethConfigService = ethConfigService;
    this.config = ethJournalsStartpageConfig;
  }
}
ethJournalsStartpageController.$inject = ['ethConfigService', 'ethJournalsStartpageConfig'];

/***/ }),

/***/ "./src/components/journalsStartPage/eth-journals-startpage/eth-journals-startpage.module.js":
/*!**************************************************************************************************!*\
  !*** ./src/components/journalsStartPage/eth-journals-startpage/eth-journals-startpage.module.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eth_config_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eth-config.service.js */ "./src/components/journalsStartPage/eth-journals-startpage/eth-config.service.js");
/* harmony import */ var _eth_journals_startpage_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eth-journals-startpage.config */ "./src/components/journalsStartPage/eth-journals-startpage/eth-journals-startpage.config.js");
/* harmony import */ var _eth_journals_startpage_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eth-journals-startpage.controller */ "./src/components/journalsStartPage/eth-journals-startpage/eth-journals-startpage.controller.js");
/* harmony import */ var _eth_journals_startpage_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eth-journals-startpage.html */ "./src/components/journalsStartPage/eth-journals-startpage/eth-journals-startpage.html");




angular.module('ethJournalsStartpageModule', []).factory('ethConfigService', _eth_config_service_js__WEBPACK_IMPORTED_MODULE_0__.ethConfigService).factory('ethJournalsStartpageConfig', _eth_journals_startpage_config__WEBPACK_IMPORTED_MODULE_1__.ethJournalsStartpageConfig).controller('ethJournalsStartpageController', _eth_journals_startpage_controller__WEBPACK_IMPORTED_MODULE_2__.ethJournalsStartpageController).component('ethJournalsStartpageComponent', {
  bindings: {
    afterCtrl: '<'
  },
  controller: 'ethJournalsStartpageController',
  template: _eth_journals_startpage_html__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/components/journalsStartPage/index.js":
/*!***************************************************!*\
  !*** ./src/components/journalsStartPage/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   journalsStartPageComponent: () => (/* binding */ journalsStartPageComponent)
/* harmony export */ });
class JournalsStartPageController {
  constructor() {}
  $onInit() {
    this.mainParentCtrl = this.parentCtrl;
  }
}
let journalsStartPageComponent = {
  name: 'rzs-journal-start-page',
  enabled: false,
  appendTo: 'prm-journals-after',
  enableInView: '.*',
  config: {
    bindings: {
      parentCtrl: '<'
    },
    controller: JournalsStartPageController,
    template: '<eth-journals-startpage-component after-ctrl="$ctrl.mainParentCtrl"></eth-journals-startpage-component>'
  }
};

/***/ }),

/***/ "./src/components/libInfo/index.js":
/*!*****************************************!*\
  !*** ./src/components/libInfo/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   libInfoComponent: () => (/* reexport safe */ _info__WEBPACK_IMPORTED_MODULE_2__.libInfoComponent),
/* harmony export */   libInfoSeedComponent: () => (/* reexport safe */ _seed__WEBPACK_IMPORTED_MODULE_1__.libInfoSeedComponent),
/* harmony export */   openHourComponent: () => (/* reexport safe */ _openHour__WEBPACK_IMPORTED_MODULE_0__.openHourComponent)
/* harmony export */ });
/* harmony import */ var _openHour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openHour */ "./src/components/libInfo/openHour/index.js");
/* harmony import */ var _seed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seed */ "./src/components/libInfo/seed/index.js");
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info */ "./src/components/libInfo/info/index.js");




/***/ }),

/***/ "./src/components/libInfo/info/index.js":
/*!**********************************************!*\
  !*** ./src/components/libInfo/info/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   libInfoComponent: () => (/* binding */ libInfoComponent)
/* harmony export */ });
/* harmony import */ var _info_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.html */ "./src/components/libInfo/info/info.html");
/* harmony import */ var _libInfo_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libInfo.json */ "./src/components/libInfo/info/libInfo.json");
/* harmony import */ var _primo_record__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../primo/record */ "./src/primo/record/index.js");



class LibInfoController {
  constructor($element, $scope, $translate) {
    this.$element = $element;
    this.$scope = $scope;
    this.$translate = $translate;
  }
  $onInit() {
    let self = this;
    self.libinfoService = _libInfo_json__WEBPACK_IMPORTED_MODULE_1__;
    self.iconUrl = `custom/41SLSP_NETWORK-CENTRAL_PACKAGE/img/information.png`;
    self.$translate('nui.customizing.idslu.informationicon').then(iconUrl => {
      if (iconUrl !== 'informationicon') {
        self.iconUrl = iconUrl;
      }
    });
  }
  get info() {
    let self = this;
    if (Object.keys(self.libinfoService).includes(self.libCode)) {
      return {
        id: self.libinfoService[self.libCode].url,
        name: self.libinfoService[self.libCode].label
      };
    }
    return {};
  }
  get libid() {
    let id = this.info.id;
    if (id) {
      return id;
    }
    return '';
  }
  get libname() {
    let name = this.info.name;
    if (name) {
      return name;
    }
    return '';
  }
  get libCode() {
    let code = '';
    let self = this;
    switch (self.type) {
      case 'library':
        try {
          code = _primo_record__WEBPACK_IMPORTED_MODULE_2__["default"].current.library.all[self.index].lib.split(':')[0];
        } catch (e) {
          code = '';
        }
        break;
      case 'location':
        try {
          code = _primo_record__WEBPACK_IMPORTED_MODULE_2__["default"].current.location.all[self.index].loc.location.libraryCode;
        } catch (e) {
          code = '';
        }
        break;
    }
    return code;
  }
}
LibInfoController.$inject = ['$element', '$scope', '$translate'];
let libInfoComponent = {
  name: 'rsz-lib-info',
  config: {
    bindings: {
      index: '@',
      type: '@',
      parentCtrl: '<'
    },
    controller: LibInfoController,
    template: _info_html__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  enabled: false,
  appendTo: null,
  enableInView: '.*'
};

/***/ }),

/***/ "./src/components/libInfo/openHour/index.js":
/*!**************************************************!*\
  !*** ./src/components/libInfo/openHour/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openHourComponent: () => (/* binding */ openHourComponent)
/* harmony export */ });
/* harmony import */ var _openhour_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openhour.html */ "./src/components/libInfo/openHour/openhour.html");
/* harmony import */ var _library_info_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library_info.json */ "./src/components/libInfo/openHour/library_info.json");
/* harmony import */ var _primo_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../primo/session */ "./src/primo/session/index.js");



class OpenHourController {
  constructor($element, $scope, $translate) {
    let self = this;
    self.element = $element;
    self.scope = $scope;
    self.translate = $translate;
    self.libraryInfo = _library_info_json__WEBPACK_IMPORTED_MODULE_1__;
    self.showLib = false;
  }
  $onInit() {
    let self = this;
    self.libraryInfo = _library_info_json__WEBPACK_IMPORTED_MODULE_1__;
    self.location = self.parentCtrl.parentCtrl.loc.location;
  }
  getInfo() {
    let self = this;
    self.showLib = !self.showLib;
    return self.library;
  }
  get mainLocation() {
    let self = this;
    return self.location.mainLocation;
  }
  get libraryCode() {
    let self = this;
    //return self.location.libraryCode;
    return 'LUSBI';
  }
  get library() {
    let self = this;
    return self.libraryInfo.filter(f => f.code == self.libraryCode)?.[0];
  }
  weekdayText(day) {
    let text = new Intl.DateTimeFormat(_primo_session__WEBPACK_IMPORTED_MODULE_2__["default"].view.interfaceLanguage, {
      weekday: "long"
    }).format(day.weekday);
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
OpenHourController.$inject = ['$element', '$scope', '$translate'];
let openHourComponent = {
  name: 'rsz-open-hour',
  config: {
    bindings: {
      code: '@',
      parentCtrl: '<'
    },
    controller: OpenHourController,
    template: _openhour_html__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  enabled: false,
  appendTo: 'slsp-location-items-after',
  enableInView: '.*'
};

/***/ }),

/***/ "./src/components/libInfo/seed/index.js":
/*!**********************************************!*\
  !*** ./src/components/libInfo/seed/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   libInfoSeedComponent: () => (/* binding */ libInfoSeedComponent)
/* harmony export */ });
class LibInfoSeedController {
  constructor($scope, $element, $compile, $timeout) {
    let self = this;
    let divs = $element.parent().parent().find('div');
    self.element = $element;
    self.scope = $scope;
    self.compile = $compile;
    self.timeout = $timeout;
    self.parentEl = divs[0];
  }
  #addLibraryInfo() {
    let self = this;
    let libraryElements = Primo.record.current.library.allAsElement;
    if (libraryElements) {
      libraryElements.forEach((el, i, a) => {
        let selector = 'prm-stack-map';
        //self.addChevron(el)
        if (el.query(selector) && !el.query('rsz-lib-info')) {
          let libraryCode = Primo.record.current.library.all[i].lib.split(':')[0];
          self.addLibInfo(el.query(selector)[0], i, libraryCode, 'library');
        }
      });
    }
  }
  #addLocationInfo() {
    let self = this;
    if (Primo.record.current.location.elementVisible()) {
      let locationElements = Primo.record.current.location.allAsElement;
      if (locationElements && locationElements.length != document.querySelectorAll('prm-location rsz-lib-info').length) {
        locationElements.forEach((el, i, a) => {
          let selector = 'prm-stack-map';
          if (!el.query(selector)) {
            selector = 'div > div.layout-row > div'; //fallback selector
          }
          if (el.query(selector) && !el.query('rsz-lib-info')) {
            let libraryCode = Primo.record.current.location.all[i].loc.location.libraryCode;
            self.addLibInfo(el.query(selector)[0], i, libraryCode, 'location');
          }
        });
      }
    }
  }
  #addItemInfo() {
    let self = this;
    if (Primo.record.current.location.item.elementVisible()) {
      if (Primo.record.current.location.item.allAsElement) {
        Primo.record.current.location.item.allAsElement.forEach((el, i, a) => {
          let selector = 'prm-stack-map';
          if (!el.query(selector)) {
            selector = 'div > div.layout-row > div'; //fallback selector
          }
          if (el.query(selector) && !el.query('rsz-lib-info')) {
            let libraryCode = Primo.record.current.location.item.all[i].loc.location.libraryCode;
            self.addLibInfo(el.query(selector)[0], i, libraryCode, 'location');
          }
        });
      }
    }
  }
  $onInit() {
    let self = this;
    let libraryWatcher = self.scope.$watch(() => {
      let el = document.querySelector('prm-library h3');
      if (el) {
        return !(window.getComputedStyle(el).visibility == 'hidden');
      }
      return false;
    }, (n, o) => {
      if (n == true) {
        try {
          console.log("trigger libary for:", Primo.record.current.library.allAsElement);
          Primo.record.current.library.allAsElement.map(m => {
            if (m.query('rsz-lib-info')) {
              console.log("\tUpdating current library");
              m.query('rsz-lib-info')[0].remove();
            }
          });
        } catch (e) {
          console.log(e);
        }
        self.timeout(() => self.#addLibraryInfo());
        //libraryWatcher();
      }
    });
    let locationWatcher = self.scope.$watch(() => {
      let el = document.querySelector('prm-location h3');
      if (el) {
        return !(window.getComputedStyle(el).visibility == 'hidden' && el.length != document.querySelectorAll('prm-location rsz-lib-info'));
      }
      return false;
    }, (n, o) => {
      if (n == true) {
        try {
          console.log("trigger location for:", Primo.record.current.location.allAsElement);
          Primo.record.current.location.allAsElement.map(m => {
            if (m.query('rsz-lib-info')) {
              console.log("\tUpdating current location");
              m.query('rsz-lib-info')[0].remove();
            }
          });
        } catch (e) {
          console.log(e);
        }
        self.timeout(() => self.#addLocationInfo());
        //locationWatcher();
      }
    });
    let itemWatcher = self.scope.$watch(() => {
      let el = document.querySelector('prm-location-items h4');
      if (el) {
        return !(window.getComputedStyle(el).visibility == 'hidden');
      }
      return false;
    }, (n, o) => {
      if (n == true) {
        try {
          console.log("trigger item for:", Primo.record.current.location.item.allAsElement);
          Primo.record.current.location.item.allAsElement.map(m => {
            if (m.query('rsz-lib-info')) {
              console.log("\tUpdating current items");
              m.query('rsz-lib-info')[0].remove();
            }
          });
        } catch (e) {
          console.log(e);
        }
        self.timeout(() => self.#addItemInfo());
        //itemWatcher();
      }
    });
  }
  addLibInfo(el, index, libraryCode, type) {
    let self = this;
    if (el && !el.querySelector('rsz-lib-info') && libraryCode) {
      if (libraryCode != undefined) {
        let elInfo = document.createElement('rsz-lib-info');
        elInfo.setAttribute('code', libraryCode);
        elInfo.setAttribute('index', index);
        elInfo.setAttribute('type', type);
        let $elInfo = angular.element(elInfo);
        let compiledElInfo = self.compile($elInfo);

        //add new scope
        compiledElInfo(self.scope.$parent.$new());
        el.append(elInfo);
      }
    }
  }
  addChevron(appendEl) {
    let self = this;
    if (!appendEl.query("prm-icon[name='chevron']")) {
      let el = document.createElement('prm-icon');
      el.setAttribute('name', 'chevron');
      el.setAttribute('icon-type', 'svg');
      el.setAttribute('svg-icon-set', 'hardware');
      el.setAttribute('icon-definition', 'ic_keyboard_arrow_right_24px');

      //reference new element as an angularjs element
      let $el = angular.element(el);
      //compile 
      let compiledEl = self.compile($el);
      //add new scope
      compiledEl(self.scope.$parent.$new());
      appendEl.query('div > div').append(el);
    }
  }
}
LibInfoSeedController.$inject = ['$scope', '$element', '$compile', '$timeout'];
let libInfoSeedComponent = {
  name: 'rsz-seed-lib-info',
  config: {
    bindings: {
      parentCtrl: '<'
    },
    controller: LibInfoSeedController,
    template: ''
  },
  enabled: true,
  appendTo: 'slsp-full-view-after',
  enableInView: '.*'
};

/***/ }),

/***/ "./src/components/links/e-container/index.js":
/*!***************************************************!*\
  !*** ./src/components/links/e-container/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   linksContainerEComponent: () => (/* binding */ linksContainerEComponent)
/* harmony export */ });
/* harmony import */ var _linksContainer_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linksContainer.html */ "./src/components/links/e-container/linksContainer.html");

let linksContainerEComponent = {
  name: 'rzs-links-e-container',
  config: {
    template: _linksContainer_html__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  enabled: true,
  appendTo: 'slsp-alma-viewit-items-after',
  enableInView: '.*'
};

/***/ }),

/***/ "./src/components/links/link/index.js":
/*!********************************************!*\
  !*** ./src/components/links/link/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   linksComponent: () => (/* binding */ linksComponent)
/* harmony export */ });
/* harmony import */ var _link_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./link.html */ "./src/components/links/link/link.html");
/* harmony import */ var _primo_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../primo/session */ "./src/primo/session/index.js");


class LinkController {
  constructor() {}
  $onInit() {
    this.user();
  }
  async user() {
    let self = this;
    let fines = await _primo_session__WEBPACK_IMPORTED_MODULE_1__["default"].user.fines;
    self.isOnCampus = _primo_session__WEBPACK_IMPORTED_MODULE_1__["default"].user.isOnCampus;
    self.isLoggedIn = _primo_session__WEBPACK_IMPORTED_MODULE_1__["default"].user.isLoggedIn;
    self.allFines = {
      count: fines.length,
      sum: fines ? fines.map(f => parseFloat(f.finesum)).reduce((p, c) => p + c, 0) : 0
    };
  }
  get onCampus() {
    return this.isOnCampus;
  }
  get loggedIn() {
    return this.isLoggedIn;
  }
  get fines() {
    return this.allFines;
  }
  get linkClass() {
    return this.class || '';
  }
  get linkText() {
    return this.text || '';
  }
  get linkUrl() {
    return this.url || '';
  }
}
let linksComponent = {
  name: 'rzs-link',
  config: {
    bindings: {
      class: '@',
      text: '@',
      url: '@'
    },
    controller: LinkController,
    template: _link_html__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  enabled: true,
  appendTo: null,
  enableInView: '.*'
};

/***/ }),

/***/ "./src/components/links/p-container/index.js":
/*!***************************************************!*\
  !*** ./src/components/links/p-container/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   linksContainerPComponent: () => (/* binding */ linksContainerPComponent)
/* harmony export */ });
/* harmony import */ var _linksContainer_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linksContainer.html */ "./src/components/links/p-container/linksContainer.html");

let linksContainerPComponent = {
  name: 'rzs-links-p-container',
  config: {
    template: _linksContainer_html__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  enabled: true,
  /* appendTo: 'prm-opac-after', */
  appendTo: 'slsp-opac-after',
  enableInView: '.*'
};

/***/ }),

/***/ "./src/components/onCampus/index.js":
/*!******************************************!*\
  !*** ./src/components/onCampus/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onCampusComponent: () => (/* binding */ onCampusComponent)
/* harmony export */ });
/* harmony import */ var _primo_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../primo/session */ "./src/primo/session/index.js");
/* harmony import */ var _onCampus_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onCampus.html */ "./src/components/onCampus/onCampus.html");


class OnCampusController {
  constructor() {}
  get onCampus() {
    return _primo_session__WEBPACK_IMPORTED_MODULE_0__["default"].user.isOnCampus;
  }
  get offCampus() {
    return !_primo_session__WEBPACK_IMPORTED_MODULE_0__["default"].user.isOnCampus;
  }
}
let onCampusComponent = {
  name: 'rzs-on-campus',
  config: {
    controller: OnCampusController,
    template: _onCampus_html__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  enabled: false,
  appendTo: 'slsp-alma-viewit-after',
  enableInView: '41SLSP_RZS:VU06|41SLSP_RZS:VU07'
};

/***/ }),

/***/ "./src/components/openUrlILL/index.js":
/*!********************************************!*\
  !*** ./src/components/openUrlILL/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rzsOpenUrlILLComponent: () => (/* binding */ rzsOpenUrlILLComponent)
/* harmony export */ });
class OpenUrlILLController {
  constructor() {}
  $onInit() {
    this.mainParentCtrl = this.parentCtrl;
  }
}
let rzsOpenUrlILLComponent = {
  name: 'rzs-openurl-ill',
  enabled: true,
  appendTo: 'slsp-htgi-svc-after',
  enableInView: '.*',
  config: {
    bindings: {
      parentCtrl: '<'
    },
    controller: OpenUrlILLController,
    template: '<eth-openurl-interlibrary-component after-ctrl="$ctrl.mainParentCtrl"></eth-openurl-interlibrary-component>'
  }
};

/***/ }),

/***/ "./src/components/openUrlILL/openurl-ill.config.js":
/*!*********************************************************!*\
  !*** ./src/components/openUrlILL/openurl-ill.config.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ethOpenurlInterlibraryConfig: () => (/* binding */ ethOpenurlInterlibraryConfig)
/* harmony export */ });
const ethOpenurlInterlibraryConfig = function () {
  return {
    label: {
      text: {
        de: 'Artikel/Medium in Region Zentralschweiz RZS nicht vorhanden. <a href=" https://swisscovery.slsp.ch/discovery/search?vid=41SLSP_NETWORK:VU1_UNION" target="_blank">Suche schweizweit in swisscovery</a> oder kontaktieren Sie ',
        en: 'Article/medium not available in region Central Switzerland RZS. <a href=" https://swisscovery.slsp.ch/discovery/search?vid=41SLSP_NETWORK:VU1_UNION&lang=en" target="_blank">Search Switzerland-wide</a> in swisscovery or contact '
      },
      linktext: {
        de: 'Ihre Bibliothek.',
        en: 'your library.'
      }
    },
    url: {
      link: {
        de: 'https://www.rzsinfo.ch/bibliotheken',
        en: 'https://www.rzsinfo.ch/bibliotheken'
      }
    }
  };
};

/***/ }),

/***/ "./src/components/openingHours/component/index.js":
/*!********************************************************!*\
  !*** ./src/components/openingHours/component/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openingHoursComponent: () => (/* binding */ openingHoursComponent)
/* harmony export */ });
/* harmony import */ var _primo_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../primo/session */ "./src/primo/session/index.js");
/* harmony import */ var _openingHours_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openingHours.html */ "./src/components/openingHours/component/openingHours.html");
//import Record from '../../primo/record';


class OpeningHoursController {
  constructor($scope) {
    let self = this;
    self.scope = $scope;
    self.locationCode = null; // location code
    self.data = {}; // loaded opening hours data
    self.show = false; // show or hide details
  }
  $onInit() {
    let self = this;
    //setup watcher and wait for a location to become visible
    self.openingHoursWatcher = self.scope.$watch(() => {
      return Primo.record.current.location.item.elementVisible();
    }, async (n, o) => {
      if (n == true) {
        // load opening hours when location is visible on screen
        await self.openingHours();
      }
    });
  }

  // is location visible on screen
  get visible() {
    return Primo.record.current.location.item.elementVisible();
  }

  // Primo language
  get language() {
    return _primo_session__WEBPACK_IMPORTED_MODULE_0__["default"].view.interfaceLanguage;
  }

  // Enable disable openening hours details
  toggle() {
    let self = this;
    self.show = !self.show;
    return self.show;
  }

  // get a weekday label from a date
  weekdayText(date) {
    let self = this;
    let text = new Intl.DateTimeFormat(self.language, {
      weekday: "long"
    }).format(new Date(date));
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  // check if the library is open today
  get isOpen() {
    let self = this;
    let weekday = new Date().getDay();
    return self.hasData() && self.data.current[weekday].hours.length > 0 && self.data.current[weekday].hours[0].open.length > 0;
  }

  // check if data was loaded
  hasData() {
    let self = this;
    return Object.keys(self.data).length > 0;
  }

  // load opening hourse from service
  async openingHours() {
    let self = this;
    if (Primo.record.current.location.item.elementVisible()) {
      const location = Primo.record.current.location.item.current.loc.location;
      const library = location.libraryCode;
      const institution = location.organization;
      if (location != self.locationCode) {
        const response = await fetch(`https://services.libis.be/opening_hours/41SLSP/${institution}/${library}`, {
          headers: {
            Accept: 'application/json'
          }
        });
        if (response.ok) {
          self.data = await response.json();
        } else {
          self.data = {};
        }
      }
      console.log(self.data);
    }
    return self.data;
  }
}
let openingHoursComponent = {
  name: 'rzs-opening-hours',
  config: {
    bindings: {
      parentCtrl: '<'
    },
    controller: OpeningHoursController,
    template: _openingHours_html__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  enabled: true,
  appendTo: '',
  enableInView: '.*'
};

/***/ }),

/***/ "./src/components/openingHours/index.js":
/*!**********************************************!*\
  !*** ./src/components/openingHours/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openingHoursComponent: () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_0__.openingHoursComponent),
/* harmony export */   openingHoursSeedComponent: () => (/* reexport safe */ _seed__WEBPACK_IMPORTED_MODULE_1__.openingHoursSeedComponent)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/components/openingHours/component/index.js");
/* harmony import */ var _seed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seed */ "./src/components/openingHours/seed/index.js");



/***/ }),

/***/ "./src/components/openingHours/seed/index.js":
/*!***************************************************!*\
  !*** ./src/components/openingHours/seed/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openingHoursSeedComponent: () => (/* binding */ openingHoursSeedComponent)
/* harmony export */ });
class openingHoursSeedController {
  constructor($scope, $element, $compile, $timeout) {
    let self = this;
    let divs = $element.parent().parent();
    self.element = $element;
    self.scope = $scope;
    self.compile = $compile;
    self.timeout = $timeout;
    self.parentEl = divs[0];
  }
  $onInit() {
    let self = this;
    let el = self.parentEl.querySelector('rzs-opening-hours');
    if (!el) {
      let target = self.element.parent().parent().parent().find('prm-location-holdings-after');
      if (target) {
        let elInfo = document.createElement('rzs-opening-hours');
        let $elInfo = angular.element(elInfo);
        let compiledElInfo = self.compile($elInfo);

        //add new scope
        compiledElInfo(self.scope.$parent.$new());
        if (Array.isArray(Array.from(target))) {
          target = target[0];
        }
        target.prepend(elInfo);
      }
    }
  }
}
openingHoursSeedController.$inject = ['$scope', '$element', '$compile', '$timeout'];
let openingHoursSeedComponent = {
  name: 'rsz-seed-opening-hours',
  config: {
    bindings: {
      parentCtrl: '<'
    },
    controller: openingHoursSeedController,
    template: ''
  },
  enabled: true,
  appendTo: 'slsp-location-items-after',
  enableInView: '.*'
};

/***/ }),

/***/ "./src/components/personCard/index.js":
/*!********************************************!*\
  !*** ./src/components/personCard/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rzsPersonCardComponent: () => (/* binding */ rzsPersonCardComponent)
/* harmony export */ });
/* harmony import */ var primo_explore_eth_person_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primo-explore-eth-person-card */ "./node_modules/primo-explore-eth-person-card/js/eth-person-card.module.js");

class PersonCardController {
  constructor() {}
  $onInit() {
    this.mainParentCtrl = this.parentCtrl;
  }
}
let rzsPersonCardComponent = {
  name: 'rzs-person-card',
  enabled: true,
  // appendTo: 'prm-service-details-after', 30.08.23
  appendTo: 'slsp-service-details-after',
  enableInView: '.*',
  config: {
    bindings: {
      parentCtrl: '<'
    },
    controller: PersonCardController,
    template: '<eth-person-card-component after-ctrl="$ctrl.mainParentCtrl"></eth-person-card-component>'
  }
};

/***/ }),

/***/ "./src/components/requestMessage/index.js":
/*!************************************************!*\
  !*** ./src/components/requestMessage/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   requestMessagecomponent: () => (/* binding */ requestMessagecomponent)
/* harmony export */ });
class RequestMessageController {
  constructor($element, $translate) {
    this.element = $element[0];
    this.translate = $translate;
  }
  $onInit() {
    this.infoForm = angular.element(this.element.parentElement.parentElement.parentElement.parentElement).find('prm-request')[0];

    //params with default values:
    let params = {
      "feesUrl": "https:\/\/slsp.ch\/fees",
      "feesLinkText": '',
      "feesInfo": ""
    };
  }
  get feesInfo() {
    return this.translate.instant('customize.fullview.feesInfo');
  }
  get feesUrl() {
    return this.translate.instant('customize.fullview.feesUrl');
  }
  get feesLinkText() {
    return this.translate.instant('customize.fullview.feesLinkText');
  }

  //function for cloning info block into form
  $doCheck() {
    let form = false;
    try {
      if (this.infoForm.children[1].children[1] !== undefined) {
        if (this.infoForm.children[1].children[1].children[0] !== undefined) {
          form = this.infoForm.children[1].children[1].children[0];
        }
      } else if (this.infoForm.children[1].children[0] != undefined) {
        form = this.infoForm.children[1].children[0].children[0];
      }
      if (form) {
        if (form.children.length == 2) {
          //remove bracket info (="see below") from request button:
          form.children[1].lastChild.firstChild.lastChild.innerHTML = form.children[1].lastChild.firstChild.lastChild.innerHTML.replace(/.\(.*\)/gi, '');
          //clone an insert info-block:

          let elem = document.createElement('span');
          elem.innerHTML = `
<div class="courier-info bar alert-bar">
    <div class="info-text">${this.feesInfo}</div>
    <div class="fees-link">
        <a ng-href="${this.feesUrl}" target="_blank">${this.feesLinkText}</a>
    </div>
</div>`;
          form.insertBefore(elem, form.children[1]);
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
}
RequestMessageController.$inject = ['$element', '$translate'];
let requestMessagecomponent = {
  name: 'rzs-request-message',
  enabled: false,
  appendTo: 'prm-request-services-after',
  enableInView: '.*',
  config: {
    bindings: {
      parentCtrl: '<'
    },
    controller: RequestMessageController,
    template: ''
  }
};

/***/ }),

/***/ "./src/components/searchAlsoBody/index.js":
/*!************************************************!*\
  !*** ./src/components/searchAlsoBody/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   searchAlsoBodyComponent: () => (/* binding */ searchAlsoBodyComponent)
/* harmony export */ });
/* harmony import */ var _searchAlsoBody_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchAlsoBody.html */ "./src/components/searchAlsoBody/searchAlsoBody.html");
/* harmony import */ var _primo_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../primo/session */ "./src/primo/session/index.js");


class SearchAlsoBodyController {
  constructor($location) {
    this.location = $location;
  }
  $onInit() {
    let self = this;
    self.viewCode = _primo_session__WEBPACK_IMPORTED_MODULE_1__["default"].view.code;
    self.targets = self._targets();
  }
  get search() {
    return this.location.search().query || '';
  }
  get name() {
    return this.parentCtrl.parentCtrl.facetGroup.name;
  }
  get parsedQuery() {
    let query = this.search;
    if (!Array.isArray(query)) {
      query = [query];
    }
    return query.map(m => m.split(','));
  }
  get searchTerms() {
    let search = this.parsedQuery.map(m => `query=${m[0]},${m[1]},${m[2]}` || '').join('&');
    if (this.parsedQuery.length > 1) {
      search += '&mode=advanced';
    }
    return search;
  }
  _targets() {
    let self = this;
    return [{
      "view": "41SLSP_RZS:VU15",
      "name": "swisscovery RZS",
      "url": "https://rzs.swisscovery.org/discovery/search?&tab=41SLSP_RZS_MyInst_and_CI&search_scope=MyInst_and_CI&vid=41SLSP_RZS:VU15&",
      "img": "https://rzs.swisscovery.org/discovery/custom/41SLSP_RZS-VU15/img/vu15_favicon_32x32.png",
      "tooltip": "nui.customizing.idslu.search_also.tooltip.swisscovery-rzs",
      mapping: function mapping(search) {
        return self.searchTerms;
      }
    }, {
      "view": "41SLSP_RZS:VU06",
      "name": "swisscovery RZS - HSLU",
      "url": "https://rzs.swisscovery.org/discovery/search?&tab=41SLSP_RZS_MyInst_and_CI&search_scope=MyInst_and_CI&vid=41SLSP_RZS:VU06&",
      "img": "https://rzs.swisscovery.org/discovery/custom/41SLSP_RZS-VU06/img/vu06_favicon_32x32.png",
      "tooltip": "nui.customizing.idslu.search_also.tooltip.swisscovery-rzs-hslu",
      mapping: function mapping(search) {
        return self.searchTerms;
      }
    }, {
      "view": "41SLSP_RZS:VU07",
      "name": "swisscovery RZS - Uni/PH",
      "url": "https://rzs.swisscovery.org/discovery/search?&tab=41SLSP_RZS_MyInst_and_CI&search_scope=MyInst_and_CI&vid=41SLSP_RZS:VU07&",
      "img": "https://rzs.swisscovery.org/discovery/custom/41SLSP_RZS-VU07/img/vu07_favicon_32x32.png",
      "tooltip": "nui.customizing.idslu.search_also.tooltip.swisscovery-rzs-zhbuniph",
      mapping: function mapping(search) {
        return self.searchTerms;
      }
    }, {
      "view": "41SLSP_NETWORK:VU1_UNION",
      "name": "swisscovery",
      "url": "https://swisscovery.slsp.ch/discovery/search?&tab=41SLSP_NETWORK&search_scope=DN_and_CI&vid=41SLSP_NETWORK:VU1_UNION&",
      "img": "https://swisscovery.slsp.ch/discovery/custom/41SLSP_RZS-VU15/img/slsp_favicon_weiss.png",
      "tooltip": "nui.customizing.idslu.search_also.tooltip.swisscovery",
      mapping: function mapping(search) {
        return self.searchTerms;
      }
    }, {
      "view": "*",
      "name": "Google Scholar",
      "url": "https://scholar.google.com/scholar?q=",
      "img": "https://scholar.google.com/favicon.ico",
      "tooltip": "nui.customizing.idslu.search_also.tooltip.google_scolar",
      mapping: function mapping(search) {
        return self.parsedQuery[0][2];
      }
    }, {
      "view": "*",
      "name": "Worldcat",
      "url": "https://www.worldcat.org/search?q=",
      "img": "https://rzs.swisscovery.org/discovery/custom/41SLSP_RZS-VU15/img/favicon_worldcat.png",
      "tooltip": "nui.customizing.idslu.search_also.tooltip.worldcat",
      mapping: function mapping(search) {
        var type_mappings = {
          "any": "kw",
          "title": "ti",
          "creator": "au",
          "subject": "su"
        };
        return self.parsedQuery.map(m => `${type_mappings[m[0]] || "kw"}:${m[2] || ''}`).join(' ');
      }
    }].filter(f => f.view != self.viewCode);
  }
}
SearchAlsoBodyController.$inject = ['$location'];
let searchAlsoBodyComponent = {
  name: 'rzs-search-also-body',
  config: {
    bindings: {
      parentCtrl: '<'
    },
    controller: SearchAlsoBodyController,
    template: _searchAlsoBody_html__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  enabled: true,
  appendTo: 'slsp-facet-exact-after',
  enableInView: '.*'
};

/***/ }),

/***/ "./src/components/searchAlso/index.js":
/*!********************************************!*\
  !*** ./src/components/searchAlso/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   searchAlsoComponent: () => (/* binding */ searchAlsoComponent)
/* harmony export */ });
//facets.facet.facet_search_also
class SearchAlsoController {
  constructor($scope) {
    this.$scope = $scope;
  }
  $onInit() {
    let facetService = this.parentCtrl.parentCtrl.facetService;
    let searchAsoWatcher = this.$scope.$watch(() => {
      return facetService.results;
    }, (n, o) => {
      if (facetService.results.filter(f => {
        return f.name == 'search_also';
      }).length == 0) {
        //BOTTOM
        facetService.results.push({
          //TOP 
          //facetService.results.unshift({
          name: 'search_also',
          displayedType: 'exact',
          limitCount: 0,
          facetGroupCollapsed: false,
          values: undefined
        });
        //            searchAsoWatcher();
      }
    });
  }
}
SearchAlsoController.$inject = ['$scope'];
let searchAlsoComponent = {
  name: 'rzs-search-also',
  config: {
    bindings: {
      parentCtrl: '<'
    },
    controller: SearchAlsoController
  },
  enabled: true,
  appendTo: 'prm-facet-after',
  enableInView: '.*'
};

/***/ }),

/***/ "./src/factories/messageService.js":
/*!*****************************************!*\
  !*** ./src/factories/messageService.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var _messageService_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messageService.html */ "./src/factories/messageService.html");

class MessageService {
  constructor($rootScope, $compile, $mdToast, $sce, $translate, $timeout) {
    this.mdToast = $mdToast;
    this.sce = $sce;
    this.translate = $translate;
    this.timeout = $timeout;
    this.compile = $compile;
    this.rootScope = $rootScope;
  }
  show() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let self = this;
    let scope = options.scope || null;
    let hideDelay = options.hideDelay || 0;
    let action = options.action || null;
    let actionLabel = options.actionLabel || 'unknown';
    this.timeout(function () {
      //debugger;
      if (message.length == 0) {
        // code table entries can not have empty descriptions.
        // message <= 1 will not be displayed!!!!
        let messageKey = 'nui.customizing.idslu.alertMessage';
        message = self.translate.instant(messageKey);
        message = message == 'alertMessage' || message.length <= 1 ? '' : message;
      }
      if (message.length > 0) {
        let toastConfig = {
          parent: document.body,
          controllerAs: 'ctrl',
          controller: function () {
            var _this = this;
            this.actionLabel = actionLabel;
            this.onClose = () => {
              self.mdToast.hide();
            };
            if (action) {
              this.onAction = function () {
                let $event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                action.call(_this);
                self.mdToast.hide();
              };
            }
            if (scope) {
              //this.message = self.sce.trustAsHtml(self.compile(`<span>${message}</span>`)(self.rootScope).html());
              this.message = self.sce.trustAsHtml(self.compile(`<span>${message}</span>`)(scope).html());
            } else {
              this.message = self.sce.trustAsHtml(message);
            }
          },
          template: _messageService_html__WEBPACK_IMPORTED_MODULE_0__["default"],
          position: 'top center',
          hideDelay: hideDelay
        };
        self.mdToast.show(toastConfig);
      } else {
        console.log('No message to display');
      }
    }, 2000);
  }
}
MessageService.$inject = ['$rootScope', '$compile', '$mdToast', '$sce', '$translate', '$timeout'];

/***/ }),

/***/ "./src/loader.js":
/*!***********************!*\
  !*** ./src/loader.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var _components_alertMessage_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components\alertMessage\index */ "./src/components/alertMessage/index.js");
/* harmony import */ var _components_altmetric_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components\altmetric\index */ "./src/components/altmetric/index.js");
/* harmony import */ var _components_archivesGetit_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components\archivesGetit\index */ "./src/components/archivesGetit/index.js");
/* harmony import */ var _components_archivesGetit_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_archivesGetit_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_author_display_collections_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components\author_display_collections\index */ "./src/components/author_display_collections/index.js");
/* harmony import */ var _components_browzine_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components\browzine\index */ "./src/components/browzine/index.js");
/* harmony import */ var _components_dotTest_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components\dotTest\index */ "./src/components/dotTest/index.js");
/* harmony import */ var _components_journalsStartPage_eth_journals_startpage_eth_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components\journalsStartPage\eth-journals-startpage\eth-config.service */ "./src/components/journalsStartPage/eth-journals-startpage/eth-config.service.js");
/* harmony import */ var _components_journalsStartPage_eth_journals_startpage_eth_journals_startpage_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components\journalsStartPage\eth-journals-startpage\eth-journals-startpage.config */ "./src/components/journalsStartPage/eth-journals-startpage/eth-journals-startpage.config.js");
/* harmony import */ var _components_journalsStartPage_eth_journals_startpage_eth_journals_startpage_config_original__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components\journalsStartPage\eth-journals-startpage\eth-journals-startpage.config_original */ "./src/components/journalsStartPage/eth-journals-startpage/eth-journals-startpage.config_original.js");
/* harmony import */ var _components_journalsStartPage_eth_journals_startpage_eth_journals_startpage_controller__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components\journalsStartPage\eth-journals-startpage\eth-journals-startpage.controller */ "./src/components/journalsStartPage/eth-journals-startpage/eth-journals-startpage.controller.js");
/* harmony import */ var _components_journalsStartPage_eth_journals_startpage_eth_journals_startpage_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components\journalsStartPage\eth-journals-startpage\eth-journals-startpage.module */ "./src/components/journalsStartPage/eth-journals-startpage/eth-journals-startpage.module.js");
/* harmony import */ var _components_journalsStartPage_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components\journalsStartPage\index */ "./src/components/journalsStartPage/index.js");
/* harmony import */ var _components_libInfo_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components\libInfo\index */ "./src/components/libInfo/index.js");
/* harmony import */ var _components_libInfo_info_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components\libInfo\info\index */ "./src/components/libInfo/info/index.js");
/* harmony import */ var _components_libInfo_openHour_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components\libInfo\openHour\index */ "./src/components/libInfo/openHour/index.js");
/* harmony import */ var _components_libInfo_seed_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components\libInfo\seed\index */ "./src/components/libInfo/seed/index.js");
/* harmony import */ var _components_links_e_container_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components\links\e-container\index */ "./src/components/links/e-container/index.js");
/* harmony import */ var _components_links_link_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components\links\link\index */ "./src/components/links/link/index.js");
/* harmony import */ var _components_links_p_container_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components\links\p-container\index */ "./src/components/links/p-container/index.js");
/* harmony import */ var _components_onCampus_index__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components\onCampus\index */ "./src/components/onCampus/index.js");
/* harmony import */ var _components_openingHours_component_index__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components\openingHours\component\index */ "./src/components/openingHours/component/index.js");
/* harmony import */ var _components_openingHours_index__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components\openingHours\index */ "./src/components/openingHours/index.js");
/* harmony import */ var _components_openingHours_seed_index__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components\openingHours\seed\index */ "./src/components/openingHours/seed/index.js");
/* harmony import */ var _components_openUrlILL_index__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components\openUrlILL\index */ "./src/components/openUrlILL/index.js");
/* harmony import */ var _components_openUrlILL_openurl_ill_config__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components\openUrlILL\openurl-ill.config */ "./src/components/openUrlILL/openurl-ill.config.js");
/* harmony import */ var _components_personCard_index__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components\personCard\index */ "./src/components/personCard/index.js");
/* harmony import */ var _components_requestMessage_index__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components\requestMessage\index */ "./src/components/requestMessage/index.js");
/* harmony import */ var _components_searchAlso_index__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components\searchAlso\index */ "./src/components/searchAlso/index.js");
/* harmony import */ var _components_searchAlsoBody_index__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components\searchAlsoBody\index */ "./src/components/searchAlsoBody/index.js");
const _dirImport = {};
/*
    Primo component loader.
    Will load all defined components in the src/components directory. 

    (c)2020 KULeuven/LIBIS 
    Mehmet Celik
*/





























for (let key in _components_searchAlsoBody_index__WEBPACK_IMPORTED_MODULE_28__) {
  _dirImport[key === 'default' ? "index" : key] = _components_searchAlsoBody_index__WEBPACK_IMPORTED_MODULE_28__[key];
}
for (let key in _components_searchAlso_index__WEBPACK_IMPORTED_MODULE_27__) {
  _dirImport[key === 'default' ? "index" : key] = _components_searchAlso_index__WEBPACK_IMPORTED_MODULE_27__[key];
}
for (let key in _components_requestMessage_index__WEBPACK_IMPORTED_MODULE_26__) {
  _dirImport[key === 'default' ? "index" : key] = _components_requestMessage_index__WEBPACK_IMPORTED_MODULE_26__[key];
}
for (let key in _components_personCard_index__WEBPACK_IMPORTED_MODULE_25__) {
  _dirImport[key === 'default' ? "index" : key] = _components_personCard_index__WEBPACK_IMPORTED_MODULE_25__[key];
}
for (let key in _components_openUrlILL_openurl_ill_config__WEBPACK_IMPORTED_MODULE_24__) {
  _dirImport[key === 'default' ? "openurlIllConfig" : key] = _components_openUrlILL_openurl_ill_config__WEBPACK_IMPORTED_MODULE_24__[key];
}
for (let key in _components_openUrlILL_index__WEBPACK_IMPORTED_MODULE_23__) {
  _dirImport[key === 'default' ? "index" : key] = _components_openUrlILL_index__WEBPACK_IMPORTED_MODULE_23__[key];
}
for (let key in _components_openingHours_seed_index__WEBPACK_IMPORTED_MODULE_22__) {
  _dirImport[key === 'default' ? "index" : key] = _components_openingHours_seed_index__WEBPACK_IMPORTED_MODULE_22__[key];
}
for (let key in _components_openingHours_index__WEBPACK_IMPORTED_MODULE_21__) {
  _dirImport[key === 'default' ? "index" : key] = _components_openingHours_index__WEBPACK_IMPORTED_MODULE_21__[key];
}
for (let key in _components_openingHours_component_index__WEBPACK_IMPORTED_MODULE_20__) {
  _dirImport[key === 'default' ? "index" : key] = _components_openingHours_component_index__WEBPACK_IMPORTED_MODULE_20__[key];
}
for (let key in _components_onCampus_index__WEBPACK_IMPORTED_MODULE_19__) {
  _dirImport[key === 'default' ? "index" : key] = _components_onCampus_index__WEBPACK_IMPORTED_MODULE_19__[key];
}
for (let key in _components_links_p_container_index__WEBPACK_IMPORTED_MODULE_18__) {
  _dirImport[key === 'default' ? "index" : key] = _components_links_p_container_index__WEBPACK_IMPORTED_MODULE_18__[key];
}
for (let key in _components_links_link_index__WEBPACK_IMPORTED_MODULE_17__) {
  _dirImport[key === 'default' ? "index" : key] = _components_links_link_index__WEBPACK_IMPORTED_MODULE_17__[key];
}
for (let key in _components_links_e_container_index__WEBPACK_IMPORTED_MODULE_16__) {
  _dirImport[key === 'default' ? "index" : key] = _components_links_e_container_index__WEBPACK_IMPORTED_MODULE_16__[key];
}
for (let key in _components_libInfo_seed_index__WEBPACK_IMPORTED_MODULE_15__) {
  _dirImport[key === 'default' ? "index" : key] = _components_libInfo_seed_index__WEBPACK_IMPORTED_MODULE_15__[key];
}
for (let key in _components_libInfo_openHour_index__WEBPACK_IMPORTED_MODULE_14__) {
  _dirImport[key === 'default' ? "index" : key] = _components_libInfo_openHour_index__WEBPACK_IMPORTED_MODULE_14__[key];
}
for (let key in _components_libInfo_info_index__WEBPACK_IMPORTED_MODULE_13__) {
  _dirImport[key === 'default' ? "index" : key] = _components_libInfo_info_index__WEBPACK_IMPORTED_MODULE_13__[key];
}
for (let key in _components_libInfo_index__WEBPACK_IMPORTED_MODULE_12__) {
  _dirImport[key === 'default' ? "index" : key] = _components_libInfo_index__WEBPACK_IMPORTED_MODULE_12__[key];
}
for (let key in _components_journalsStartPage_index__WEBPACK_IMPORTED_MODULE_11__) {
  _dirImport[key === 'default' ? "index" : key] = _components_journalsStartPage_index__WEBPACK_IMPORTED_MODULE_11__[key];
}
for (let key in _components_journalsStartPage_eth_journals_startpage_eth_journals_startpage_module__WEBPACK_IMPORTED_MODULE_10__) {
  _dirImport[key === 'default' ? "ethJournalsStartpageModule" : key] = _components_journalsStartPage_eth_journals_startpage_eth_journals_startpage_module__WEBPACK_IMPORTED_MODULE_10__[key];
}
for (let key in _components_journalsStartPage_eth_journals_startpage_eth_journals_startpage_controller__WEBPACK_IMPORTED_MODULE_9__) {
  _dirImport[key === 'default' ? "ethJournalsStartpageController" : key] = _components_journalsStartPage_eth_journals_startpage_eth_journals_startpage_controller__WEBPACK_IMPORTED_MODULE_9__[key];
}
for (let key in _components_journalsStartPage_eth_journals_startpage_eth_journals_startpage_config_original__WEBPACK_IMPORTED_MODULE_8__) {
  _dirImport[key === 'default' ? "ethJournalsStartpageConfigOriginal" : key] = _components_journalsStartPage_eth_journals_startpage_eth_journals_startpage_config_original__WEBPACK_IMPORTED_MODULE_8__[key];
}
for (let key in _components_journalsStartPage_eth_journals_startpage_eth_journals_startpage_config__WEBPACK_IMPORTED_MODULE_7__) {
  _dirImport[key === 'default' ? "ethJournalsStartpageConfig" : key] = _components_journalsStartPage_eth_journals_startpage_eth_journals_startpage_config__WEBPACK_IMPORTED_MODULE_7__[key];
}
for (let key in _components_journalsStartPage_eth_journals_startpage_eth_config_service__WEBPACK_IMPORTED_MODULE_6__) {
  _dirImport[key === 'default' ? "ethConfigService" : key] = _components_journalsStartPage_eth_journals_startpage_eth_config_service__WEBPACK_IMPORTED_MODULE_6__[key];
}
for (let key in _components_dotTest_index__WEBPACK_IMPORTED_MODULE_5__) {
  _dirImport[key === 'default' ? "index" : key] = _components_dotTest_index__WEBPACK_IMPORTED_MODULE_5__[key];
}
for (let key in _components_browzine_index__WEBPACK_IMPORTED_MODULE_4__) {
  _dirImport[key === 'default' ? "index" : key] = _components_browzine_index__WEBPACK_IMPORTED_MODULE_4__[key];
}
for (let key in _components_author_display_collections_index__WEBPACK_IMPORTED_MODULE_3__) {
  _dirImport[key === 'default' ? "index" : key] = _components_author_display_collections_index__WEBPACK_IMPORTED_MODULE_3__[key];
}
for (let key in _components_archivesGetit_index__WEBPACK_IMPORTED_MODULE_2__) {
  _dirImport[key === 'default' ? "index" : key] = _components_archivesGetit_index__WEBPACK_IMPORTED_MODULE_2__[key];
}
for (let key in _components_altmetric_index__WEBPACK_IMPORTED_MODULE_1__) {
  _dirImport[key === 'default' ? "index" : key] = _components_altmetric_index__WEBPACK_IMPORTED_MODULE_1__[key];
}
for (let key in _components_alertMessage_index__WEBPACK_IMPORTED_MODULE_0__) {
  _dirImport[key === 'default' ? "index" : key] = _components_alertMessage_index__WEBPACK_IMPORTED_MODULE_0__[key];
}
const Components = _dirImport;
String.prototype.toCamelCase = function () {
  return this.split('-').map((d, i, a) => i > 0 ? d.charAt(0).toUpperCase() + d.slice(1) : d).join('');
};
class Loader {
  constructor() {}
  load(modType) {
    this._injectComponentPlaceHoldersIntoAfterComponents(modType);
  }

  /**
   * 
   * 
   **/
  _importComponents() {
    let components = [];
    Object.keys(Components).forEach(component_def => {
      components.push(Components[component_def]);
    });
    return components.filter(component => component.enabled && new RegExp(component.enableInView).test(window.appConfig.vid));
  }

  /**
   * 
   * 
   **/
  _createComponents(modType) {
    let components = this._importComponents();
    let afterComponents = {};

    //Create all components and determine in which after component these need to be
    //injected
    console.log('Loading components');
    components.forEach(component => {
      console.log(component.name);
      if (component.enabled) {
        if (component.appendTo) {
          let elements = afterComponents[component.appendTo] || [];
          elements.push({
            'name': component.name,
            'enableInView': component.enableInView
          });
          if (Array.isArray(component.appendTo)) {
            component.appendTo.forEach(appendTo => {
              afterComponents[appendTo] = elements;
            });
          } else {
            afterComponents[component.appendTo] = elements;
          }
        }
        angular.module(modType).constant('afterComponents', afterComponents);
        angular.module(modType).component(component.name.toCamelCase(), component.config);
      }
    });
    return afterComponents;
  }

  /**
   * 
   * 
   **/
  _injectComponentPlaceHoldersIntoAfterComponents(modType) {
    let afterComponents = this._createComponents(modType);
    //Inject place holders into the after components
    Object.keys(afterComponents).forEach((component, i) => {
      let subComponents = afterComponents[component];
      angular.module(modType).component(component.toCamelCase(), {
        bindings: {
          parentCtrl: '<'
        },
        template: subComponents.map(m => `<${m.name} parent-ctrl="$ctrl"></${m.name}>`).join("")
      });
    });
  }
}

/***/ }),

/***/ "./src/modules/altmetric/almetric.js":
/*!*******************************************!*\
  !*** ./src/modules/altmetric/almetric.js ***!
  \*******************************************/
/***/ (() => {

/*
  KULeuven/LIBIS (c) 2022
  Mehmet Celik mehmet(dot)celik(at)kuleuven(dot)be
*/
angular.module('altmetric', ['ng', 'angularLoad']).run(['angularLoad', angularLoad => {
  angularLoad.loadScript('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js?' + Date.now()).then(function () {
    console.log('altmerics.js loaded');
  });
}]);

/***/ }),

/***/ "./src/modules/altmetric/index.js":
/*!****************************************!*\
  !*** ./src/modules/altmetric/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _almetric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./almetric */ "./src/modules/altmetric/almetric.js");
/* harmony import */ var _almetric__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_almetric__WEBPACK_IMPORTED_MODULE_0__);
/*
  KULeuven/LIBIS (c) 2022
  Mehmet Celik mehmet(dot)celik(at)kuleuven(dot)be
*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('altmetric');

/***/ }),

/***/ "./src/modules/bibtip/bibtip.js":
/*!**************************************!*\
  !*** ./src/modules/bibtip/bibtip.js ***!
  \**************************************/
/***/ (() => {

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

/***/ }),

/***/ "./src/modules/bibtip/index.js":
/*!*************************************!*\
  !*** ./src/modules/bibtip/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bibtip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bibtip */ "./src/modules/bibtip/bibtip.js");
/* harmony import */ var _bibtip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bibtip__WEBPACK_IMPORTED_MODULE_0__);
/*
  KULeuven/LIBIS (c) 2022
  Mehmet Celik mehmet(dot)celik(at)kuleuven(dot)be
*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('bibtip');

/***/ }),

/***/ "./src/modules/browzine/browzine.js":
/*!******************************************!*\
  !*** ./src/modules/browzine/browzine.js ***!
  \******************************************/
/***/ (() => {

/*
  KULeuven/LIBIS (c) 2022
  Mehmet Celik mehmet(dot)celik(at)kuleuven(dot)be
*/
angular.module('browzine', ['angularLoad']).run(['angularLoad', '$rootScope', '$translate', (angularLoad, $rootScope, $translate) => {
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
      let article = $translate.instant('nui.customization.browzine.article');
      let downloadEnabled = $translate.instant('nui.customization.browzine.download_enable') == '1';
      let download = $translate.instant('nui.customization.browzine.download');
      let articlePDFDownloadViaUnpaywallText = $translate.instant('nui.customization.browzine.articlePDFDownloadViaUnpaywallText');
      let articleLinkViaUnpaywallText = $translate.instant('nui.customization.browzine.articleLinkViaUnpaywallText');
      let articleAcceptedManuscriptPDFViaUnpaywallText = $translate.instant('nui.customization.browzine.articleAcceptedManuscriptPDFViaUnpaywallText');
      let articleAcceptedManuscriptArticleLinkViaUnpaywallText = $translate.instant('nui.customization.browzine.articleAcceptedManuscriptArticleLinkViaUnpaywallText');
      window.browzine = {
        api: `https://public-api.thirdiron.com/public/v1/libraries/${apiId}`,
        apiKey: apikey,
        journalBrowZineWebLinkText: journal,
        articleBrowZineWebLinkText: issue,
        articlePDFDownloadLinkEnabled: downloadEnabled,
        articlePDFDownloadLinkText: download,
        articleLinkText: article,
        articlePDFDownloadViaUnpaywallText: articlePDFDownloadViaUnpaywallText,
        articleLinkViaUnpaywallText: articleLinkViaUnpaywallText,
        articleAcceptedManuscriptPDFViaUnpaywallText: articleAcceptedManuscriptPDFViaUnpaywallText,
        articleAcceptedManuscriptArticleLinkViaUnpaywallText: articleAcceptedManuscriptArticleLinkViaUnpaywallText
      };
      angularLoad.loadScript('https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js').then(() => {
        console.log('browzine-primo-adapter.js loaded');
      });
      watcher();
    }
  });
}]);

// .run(($translate, $rootScope, angularLoad) => {
//     let watcher = $rootScope.$watch(() => {
//       try {
//         if ($translate.instant('nui.customization.browzine.id') == 'nui.customization.browzine.id') {
//           return false;
//         } else {
//           return true;
//         }
//       } catch (e) {
//         return false;
//       }
//     }, (n, o) => {
//       if (n == true) {
//         let apiId = $translate.instant('nui.customization.browzine.id');
//         let apikey = $translate.instant('nui.customization.browzine.apikey');
//         let journal = $translate.instant('nui.customization.browzine.journal');
//         let issue = $translate.instant('nui.customization.browzine.issue');
//         let downloadEnabled = $translate.instant('nui.customization.browzine.download_enable') == '1';
//         let download = $translate.instant('nui.customization.browzine.download');

//         window.browzine = {
//           api: `https://public-api.thirdiron.com/public/v1/libraries/${apiId}`,
//           apiKey: apikey,
//           journalBrowZineWebLinkText: journal,
//           articleBrowZineWebLinkText: issue,
//           articlePDFDownloadLinkEnabled: downloadEnabled,
//           articlePDFDownloadLinkText: download,
//           articleLinkText: "Read Article",
//           articlePDFDownloadViaUnpaywallText: "Download PDF (via Unpaywall)",
//           articleLinkViaUnpaywallText: "Read Article (via Unpaywall)",
//           articleAcceptedManuscriptPDFViaUnpaywallText: "Download PDF (Accepted Manuscript via Unpaywall)",
//           articleAcceptedManuscriptArticleLinkViaUnpaywallText: "Read Article (Accepted Manuscript via Unpaywall)"
//         };

//         angularLoad.loadScript('https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js').then(() => {
//           console.log('browzine-primo-adapter.js loaded');
//         });

//         watcher();
//       }
//     });
//   });

/***/ }),

/***/ "./src/modules/browzine/index.js":
/*!***************************************!*\
  !*** ./src/modules/browzine/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _browzine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browzine */ "./src/modules/browzine/browzine.js");
/* harmony import */ var _browzine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_browzine__WEBPACK_IMPORTED_MODULE_0__);
/*
  KULeuven/LIBIS (c) 2022
  Mehmet Celik mehmet(dot)celik(at)kuleuven(dot)be
*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('browzine');

/***/ }),

/***/ "./src/modules/matomo/index.js":
/*!*************************************!*\
  !*** ./src/modules/matomo/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _matomo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matomo */ "./src/modules/matomo/matomo.js");
/* harmony import */ var _matomo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_matomo__WEBPACK_IMPORTED_MODULE_0__);
/*
  KULeuven/LIBIS (c) 2023
  Mehmet Celik mehmet(dot)celik(at)kuleuven(dot)be
*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('mamoto');

/***/ }),

/***/ "./src/modules/matomo/matomo.js":
/*!**************************************!*\
  !*** ./src/modules/matomo/matomo.js ***!
  \**************************************/
/***/ (() => {

angular.module('matomo', ['angularLoad']).run(['angularLoad', '$rootScope', '$translate', function (angularLoad, $rootScope, $translate) {
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
      matomoURL = 'https://' + matomoURL + '/'; //Maybe put complete URL in labels

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

/***/ }),

/***/ "./src/modules/pubSubInterceptor/index.js":
/*!************************************************!*\
  !*** ./src/modules/pubSubInterceptor/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pubSubInterceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubSubInterceptor */ "./src/modules/pubSubInterceptor/pubSubInterceptor.js");
/*
  KULeuven/LIBIS (c) 2022
  Mehmet Celik mehmet(dot)celik(at)kuleuven(dot)be
*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('pubSubInterceptor');

/***/ }),

/***/ "./src/modules/pubSubInterceptor/interceptors/0_pubSub.js":
/*!****************************************************************!*\
  !*** ./src/modules/pubSubInterceptor/interceptors/0_pubSub.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pubSub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pubSub */ "./src/modules/pubSubInterceptor/pubSub.js");
//Must be loaded first can't change order because of how babel-plugin-import-directory works.

window.pubSub = new _pubSub__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "./src/modules/pubSubInterceptor/interceptors/itempolicy/index.js":
/*!************************************************************************!*\
  !*** ./src/modules/pubSubInterceptor/interceptors/itempolicy/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _itempolicy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itempolicy */ "./src/modules/pubSubInterceptor/interceptors/itempolicy/itempolicy.js");
/* harmony import */ var _itempolicy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_itempolicy__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('itempolicy');

/***/ }),

/***/ "./src/modules/pubSubInterceptor/interceptors/itempolicy/itempolicy.js":
/*!*****************************************************************************!*\
  !*** ./src/modules/pubSubInterceptor/interceptors/itempolicy/itempolicy.js ***!
  \*****************************************************************************/
/***/ (() => {

//http://localhost:8003/primaws/rest/priv/ILSServices/holdings/9336266850005505?record-institution=41SLSP_RZS&lang=de&lang=de

pubSub.subscribe('after-ILSServicesBaseURL', reqRes => {
  reqRes.data.data.itemInfo.locations.forEach(location => {
    location.items.forEach(item => {
      item.itempolicy = item.itempolicy.replace(/^\d* /, '');
    });
  });
  return reqRes;
});

/***/ }),

/***/ "./src/modules/pubSubInterceptor/pubSub.js":
/*!*************************************************!*\
  !*** ./src/modules/pubSubInterceptor/pubSub.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PrimoPubSub)
/* harmony export */ });
/*
  KULeuven/LIBIS (c) 2022
  Mehmet Celik mehmet(dot)celik(at)kuleuven(dot)be
*/
class PrimoPubSub {
  constructor() {
    this.topics = {};
    this.hOP = this.topics.hasOwnProperty;
    this.isReady = false;
    this.watcherId = this._watcher();
  }
  _watcher() {
    let count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    let self = this;
    setTimeout(() => {
      try {
        count++;
        if (count > 10) {
          console.error('pubSub not ready');
          self.isReady = false;
          self.fireEvent('pubSubInterceptorsNOTReady', {});
          clearTimeout(this.watcherId);
          return;
        }

        //                if ( document.querySelector('primo-explore div.graphic') == null && Object.keys(this.restBaseURLs).length > 0 && (typeof this.translate) === 'function' ) {
        if (Object.keys(this.restBaseURLs).length > 0) {
          console.log('pubSub is ready to load interceptors');
          self.isReady = true;
          self.fireEvent('pubSubInterceptorsReady', {});
          clearTimeout(this.watcherId);
        } else {
          this.watcherId = self._watcher(count);
        }
      } catch (e) {
        console.log(e);
        this.watcherId = self._watcher(count);
      }
    }, 500);
  }

  //* get all WebService base urls
  get restBaseURLs() {
    try {
      let baseURLs = angular.element(document.querySelector('primo-explore')).injector().get('restBaseURLs');
      baseURLs.fulldisplay = '/discovery/fulldisplay';
      return baseURLs;
    } catch (e) {
      console.error('restBaseURLs: ', e);
      return {};
    }
  }

  //* get translate function
  get translate() {
    try {
      return angular.element(document.querySelector('primo-explore')).injector().get('$translate');
    } catch (e) {
      console.error('translate: ', e.message);
      return {};
    }
  }

  //* subscribe to a topic a restBaseURL
  subscribe(topic, listener) {
    try {
      if (!this.hOP.call(this.topics, topic)) this.topics[topic] = []; //init
      let index = this.topics[topic].push(listener) - 1; //add

      console.log('SUBSCRIBING to: "%s" with id "%s", topic has %d functions', topic, index, this.topics[topic].length);
      return {
        remove: function () {
          this.topics[topic].splice(index, 1); //delete
        }
      };
    } catch (e) {
      console.error('subscribe: ', e.message);
    }
  }
  get listEvents() {
    try {
      return Object.keys(this.restBaseURLs).map(m => `${m}Event`);
    } catch (e) {
      console.error('events: ', e.message);
    }
  }
  get listBeforeTopics() {
    try {
      return Object.keys(this.restBaseURLs).map(m => `before-${m}`);
    } catch (e) {
      console.error('before-topics: ', e.message);
    }
  }
  get listAfterTopics() {
    try {
      return Object.keys(this.restBaseURLs).map(m => `after-${m}`);
    } catch (e) {
      console.error('after-topics: ', e.message);
    }
  }

  //* determine topic by URL
  findTopicKeyByURLValue(v) {
    try {
      let urlV = new URL(v, window.location.origin);
      //return Object.keys(this.restBaseURLs).find(k => this.restBaseURLs[k] === urlV.pathname);
      return Object.keys(this.restBaseURLs).find(k => urlV.pathname.startsWith(this.restBaseURLs[k]));
    } catch (e) {
      console.error('findTopicKeyByURLValue: ', e.message);
      return undefined;
    }
  }
  delegateTopic(prefix, reqRes) {
    try {
      let responseData = reqRes;
      let topicName = this.findTopicKeyByURLValue(reqRes.url || reqRes.config.url);
      if (topicName) {
        let delegateTopic = `${prefix}-${topicName}`;
        if (this.hOP.call(this.topics, delegateTopic)) {
          this.topics[delegateTopic].forEach(subscription => {
            let newReqRes = subscription(reqRes);
            responseData = newReqRes != undefined ? newReqRes : reqRes;
          });
        }
      }
      return responseData;
    } catch (e) {
      console.error('delegateTopic: ', reqRes.url || reqRes.config.url, e.message);
      return reqRes;
    }
  }
  fireEvent(url, data) {
    try {
      switch (url) {
        case 'pubSubInterceptorsReady':
          let event = new CustomEvent(url, {
            detail: data,
            bubbles: true,
            cancelable: true,
            composed: false
          });
          document.dispatchEvent(event);
        default:
          let topicName = this.findTopicKeyByURLValue(url);
          if (topicName) {
            let eventName = `${topicName}Event`;
            let event = new CustomEvent(eventName, {
              detail: data,
              bubbles: true,
              cancelable: true,
              composed: false
            });
            document.dispatchEvent(event);
          } else if (/\.local$/.test(url)) {
            let event = new CustomEvent(url, {
              detail: data,
              bubbles: true,
              cancelable: true,
              composed: false
            });
            document.dispatchEvent(event);
          }
      }
    } catch (e) {
      console.error('fireEvent: ', url, e.message);
    }
  }
}

/***/ }),

/***/ "./src/modules/pubSubInterceptor/pubSubInterceptor.js":
/*!************************************************************!*\
  !*** ./src/modules/pubSubInterceptor/pubSubInterceptor.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interceptors_0_pubSub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interceptors\0_pubSub */ "./src/modules/pubSubInterceptor/interceptors/0_pubSub.js");
/* harmony import */ var _interceptors_itempolicy_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interceptors\itempolicy\index */ "./src/modules/pubSubInterceptor/interceptors/itempolicy/index.js");
/* harmony import */ var _interceptors_itempolicy_itempolicy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interceptors\itempolicy\itempolicy */ "./src/modules/pubSubInterceptor/interceptors/itempolicy/itempolicy.js");
/* harmony import */ var _interceptors_itempolicy_itempolicy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_interceptors_itempolicy_itempolicy__WEBPACK_IMPORTED_MODULE_2__);
const _dirImport = {};
/*
  KULeuven/LIBIS (c) 2022
  Mehmet Celik mehmet(dot)celik(at)kuleuven(dot)be
*/
// import PrimoPubSub from './pubSub';
// window.pubSub = new PrimoPubSub();



for (let key in _interceptors_itempolicy_itempolicy__WEBPACK_IMPORTED_MODULE_2__) {
  _dirImport[key === 'default' ? "itempolicy" : key] = _interceptors_itempolicy_itempolicy__WEBPACK_IMPORTED_MODULE_2__[key];
}
for (let key in _interceptors_itempolicy_index__WEBPACK_IMPORTED_MODULE_1__) {
  _dirImport[key === 'default' ? "index" : key] = _interceptors_itempolicy_index__WEBPACK_IMPORTED_MODULE_1__[key];
}
for (let key in _interceptors_0_pubSub__WEBPACK_IMPORTED_MODULE_0__) {
  _dirImport[key === 'default' ? "0PubSub" : key] = _interceptors_0_pubSub__WEBPACK_IMPORTED_MODULE_0__[key];
}
const interceptors = _dirImport;
angular.module('pubSubInterceptor', ['ng']).config(['$httpProvider', $httpProvider => {
  $httpProvider.interceptors.push(['$q', $q => {
    return {
      'request': request => {
        request = pubSub.delegateTopic('before', request);
        pubSub.fireEvent(request.url, request);
        return request;
      },
      'requestError': request => {
        return $q.reject(request);
      },
      'responseError': response => {
        return $q.reject(response);
      },
      'response': response => {
        response = pubSub.delegateTopic('after', response);
        pubSub.fireEvent(response.config.url, response.data);
        return response;
      }
    };
  }]);
}]);

/***/ }),

/***/ "./src/modules/remoteUrl/index.js":
/*!****************************************!*\
  !*** ./src/modules/remoteUrl/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _remoteUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remoteUrl */ "./src/modules/remoteUrl/remoteUrl.js");
/* harmony import */ var _remoteUrl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_remoteUrl__WEBPACK_IMPORTED_MODULE_0__);
/*
  KULeuven/LIBIS (c) 2022
  Mehmet Celik mehmet(dot)celik(at)kuleuven(dot)be
*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('remoteUrl');

/***/ }),

/***/ "./src/modules/remoteUrl/remoteUrl.js":
/*!********************************************!*\
  !*** ./src/modules/remoteUrl/remoteUrl.js ***!
  \********************************************/
/***/ (() => {

/*
  KULeuven/LIBIS (c) 2022
  Mehmet Celik mehmet(dot)celik(at)kuleuven(dot)be
*/
angular.module('remoteUrl', []).config(["$sceDelegateProvider", $sceDelegateProvider => {
  $sceDelegateProvider.resourceUrlWhitelist(['**']);
}]);

/***/ }),

/***/ "./src/primo/common/index.js":
/*!***********************************!*\
  !*** ./src/primo/common/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Common)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components */ "./src/primo/components/index.js");

class Common {
  /**
   * Helper class points to primo-explore element
   * 
   * @returns object
   */
  static get app() {
    let element = _components__WEBPACK_IMPORTED_MODULE_0__["default"].element('primo-explore');
    if (element && element.length == 1) {
      return element[0];
    }
    return element;
  }
  static get injector() {
    let app = this.app;
    if (app) {
      let injector = angular.element(app).injector();
      if (injector) {
        return injector;
      }
    }
    return null;
  }

  /**
   * Helper class points to controller of element primo-explore
   * 
   * @returns object
   */
  static get appCtrl() {
    let controller = _components__WEBPACK_IMPORTED_MODULE_0__["default"].controller('primo-explore');
    if (controller && controller.length == 1) {
      return controller[0];
    }
    return controller;
  }

  /** 
   * Helper points to userSessionManagerService
   * 
   * @returns object 
   */
  static get userSession() {
    return this.appCtrl.userSessionManagerService;
  }

  /**
   * Helper points to decoded JWT token
   * 
   * @returns object
   */
  static get jwt() {
    return this.userSession.jwtUtilService.getDecodedToken();
  }

  /**
   * Interface to components
   * 
   * @returns Components class
   */
  static get components() {
    return _components__WEBPACK_IMPORTED_MODULE_0__["default"];
  }

  /**
   * Is the current page a full view page. 
   * This happens when you load a full view page url directly.
   * 
   * @returns boolean
   */
  static isFullView() {
    try {
      return this.components.controller('prm-full-view-page') == null ? false : true;
    } catch (e) {
      return false;
    }
  }

  /**
   * Is the current page a full view page overlayed on top of the result set
   * 
   * @returns boolean     
   */
  static isFullViewOverlay() {
    try {
      return this.components.controller('prm-full-view') && !this.components.controller('prm-full-view-page') ? true : false;
    } catch (e) {
      return false;
    }
  }

  /**
   * shortcut to facet service
   * 
   * @returns object
   */
  static get facetService() {
    try {
      return Common.components.controller('prm-facet')[0].facetService;
    } catch (e) {
      return {
        results: []
      };
    }
  }
  static get restBaseURLs() {
    return this.injector.get('restBaseURLs');
  }
  static get http() {
    let injector = this.injector;
    if (injector) {
      let h = injector.get('$http');
      if (h) {
        return h;
      }
    }
    return null;
  }
}

/***/ }),

/***/ "./src/primo/components/index.js":
/*!***************************************!*\
  !*** ./src/primo/components/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
class Component {
  /**
   * Get a List of all components
   * 
   * @returns [component]
   */
  static get list() {
    let tags = document.getElementsByTagName('*');
    let components = [];
    for (let tag of tags) {
      let tagName = tag.localName;
      if (/^prm-|primo-|rzs-|slsp-/.test(tagName)) {
        let component = {
          name: tagName,
          obj: angular.element(tag)
        };
        components.push(component);
      }
    }
    return components;
  }

  /**
   * Get component as an element
   * 
   * @param {string} componentName - name of the component 
   * @returns component element
   */
  static element(componentName) {
    let el = this.list.filter(f => f.name === componentName).map(m => angular.element(m.obj[0]));
    if (el && el.length > 0) {
      return el;
      //return el.length == 1 ? el[0] : el;
    }
    return null;
  }

  /**
   * Get scope of component
   * 
   * @param {string} componentName - name of the component
   * @returns scope of component
   */
  static scope(componentName) {
    return this.element(componentName).map(m => m.scope());
  }

  /**
   * Get controller of component
   * 
   * @param {string} componentName - name of the component
   * @returns controller of component
   */
  static controller(componentName) {
    let controllers = this.list.filter(f => f.name === componentName).map(m => angular.element(m.obj).controller(componentName));
    if (controllers.length > 0) {
      return controllers;
      //return controllers.length == 1 ? controllers[0] : controllers;
    }
    return null;
  }

  /**
   * Get a component by name. 
   * Difference with .element(componentName)
   *      This method returns a DOM the latter an angular.element object
   * 
   * @param {string} componentName - name of the component
   * @returns component
   */
  static get(componentName) {
    return this.list.filter(f => componentName === f.name).map(m => m.obj[0]);
  }
}

/***/ }),

/***/ "./src/primo/facet/index.js":
/*!**********************************!*\
  !*** ./src/primo/facet/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Facet)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "./src/primo/common/index.js");

class Facet {
  static get all() {
    try {
      return _common__WEBPACK_IMPORTED_MODULE_0__["default"].facetService.results;
    } catch (e) {
      console.error(e);
      return [];
    }
  }
}

/***/ }),

/***/ "./src/primo/index.js":
/*!****************************!*\
  !*** ./src/primo/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session */ "./src/primo/session/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/primo/components/index.js");
/* harmony import */ var _record__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./record */ "./src/primo/record/index.js");
/* harmony import */ var _facet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facet */ "./src/primo/facet/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common */ "./src/primo/common/index.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state */ "./src/primo/state/index.js");






window.Primo = {
  session: _session__WEBPACK_IMPORTED_MODULE_0__["default"],
  components: _components__WEBPACK_IMPORTED_MODULE_1__["default"],
  record: _record__WEBPACK_IMPORTED_MODULE_2__["default"],
  facet: _facet__WEBPACK_IMPORTED_MODULE_3__["default"],
  common: _common__WEBPACK_IMPORTED_MODULE_4__["default"],
  state: _state__WEBPACK_IMPORTED_MODULE_5__["default"],
  version: (() => {
    let version = "0.0.3";
    return `Library:${version} - ALMA:${window.appConfig['system-configuration'].Alma_Version}`;
  })()
};

/***/ }),

/***/ "./src/primo/library/index.js":
/*!************************************!*\
  !*** ./src/primo/library/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Library)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "./src/primo/common/index.js");

class Library {
  /**
   * Get access to all libraries controllers of a record in view
   * 
   * @returns object
   */
  static get all() {
    try {
      return _common__WEBPACK_IMPORTED_MODULE_0__["default"].components.controller('prm-library');
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  /**
   * Get access to all libraries elements of a record in view
   * 
   * @returns object
   */

  static get allAsElement() {
    try {
      return _common__WEBPACK_IMPORTED_MODULE_0__["default"].components.element('prm-library');
    } catch (e) {
      console.error(e);
      return null;
    }
  }
  static elementVisible() {
    if (_common__WEBPACK_IMPORTED_MODULE_0__["default"].components.get('prm-library').length > 0) {
      return !(window.getComputedStyle(_common__WEBPACK_IMPORTED_MODULE_0__["default"].components.get('prm-library')[0]).visibility == 'hidden');
    }
    return false;
  }
}

/***/ }),

/***/ "./src/primo/location/index.js":
/*!*************************************!*\
  !*** ./src/primo/location/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Location)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "./src/primo/common/index.js");

class LocationItem {
  /**
   * Get access to all items controllers of a record in view
   * 
   * @returns object
   */
  static get all() {
    try {
      return _common__WEBPACK_IMPORTED_MODULE_0__["default"].components.controller('prm-location-items');
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  /**
   * returns item object elements instead of controller
   * usefull when HTML needs to be changed
   * 
   * @returns object
   */
  static get allAsElement() {
    try {
      return _common__WEBPACK_IMPORTED_MODULE_0__["default"].components.element('prm-location-items');
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  /**
   * returns item object 
   * 
   * @returns object
   */
  static get current() {
    try {
      if (this.elementVisible()) {
        return _common__WEBPACK_IMPORTED_MODULE_0__["default"].components.controller('prm-location-items')[0];
      }
      return null;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
  static elementVisible() {
    if (_common__WEBPACK_IMPORTED_MODULE_0__["default"].components.get('prm-location-items').length > 0) {
      return !(window.getComputedStyle(_common__WEBPACK_IMPORTED_MODULE_0__["default"].components.get('prm-location-items')[0]).visibility == 'hidden');
    }
    return false;
  }
}
class Location {
  /**
   * Get access to all location controllers of a record in view
   * 
   * @returns object
   */
  static get all() {
    try {
      return _common__WEBPACK_IMPORTED_MODULE_0__["default"].components.controller('prm-location');
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  /**
   * returns location object on items page
   * 
   * @returns object
   */
  static get current() {
    try {
      if (this.elementVisible()) {
        return _common__WEBPACK_IMPORTED_MODULE_0__["default"].components.controller('prm-location')[0];
      }
      return null;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  /**
   * returns location object elements instead of controller
   * usefull when HTML needs to be changed
   * 
   * @returns object
   */
  static get allAsElement() {
    try {
      return _common__WEBPACK_IMPORTED_MODULE_0__["default"].components.element('prm-location');
    } catch (e) {
      console.error(e);
      return null;
    }
  }
  static get item() {
    return LocationItem;
  }
  static elementVisible() {
    if (_common__WEBPACK_IMPORTED_MODULE_0__["default"].components.get('prm-location').length > 0) {
      return !(window.getComputedStyle(_common__WEBPACK_IMPORTED_MODULE_0__["default"].components.get('prm-location')[0]).visibility == 'hidden');
    }
    return false;
  }
}

/***/ }),

/***/ "./src/primo/record/index.js":
/*!***********************************!*\
  !*** ./src/primo/record/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Record)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "./src/primo/common/index.js");
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../location */ "./src/primo/location/index.js");
/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../library */ "./src/primo/library/index.js");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../session */ "./src/primo/session/index.js");





/**
 * Helper class to access record currently in full view
 */
class CurrentRecord {
  static get record() {
    try {
      if (_common__WEBPACK_IMPORTED_MODULE_0__["default"].isFullViewOverlay()) {
        return _common__WEBPACK_IMPORTED_MODULE_0__["default"].components.controller('prm-full-view')[0].item;
      } else if (_common__WEBPACK_IMPORTED_MODULE_0__["default"].isFullView()) {
        return _common__WEBPACK_IMPORTED_MODULE_0__["default"].components.controller('prm-full-view-page')[0].currentItem;
      } else {
        return _common__WEBPACK_IMPORTED_MODULE_0__["default"].userSession.searchStateService.resultObject.data[0];
      }
      return null;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
  static get location() {
    return _location__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
  static get library() {
    return _library__WEBPACK_IMPORTED_MODULE_2__["default"];
  }
  static get source() {
    let that = this;
    let load = async recordId => {
      let text = await (await fetch(`${_common__WEBPACK_IMPORTED_MODULE_0__["default"].restBaseURLs.sourceRecord}?docId=${recordId}&vid=${_session__WEBPACK_IMPORTED_MODULE_3__["default"].view.code}`)).text();
      return text;
    };
    return (async () => {
      return await load(that.record.pnx.control.recordid[0]);
    })();
  }
  static get showSource() {
    let that = this;
    return (async () => {
      let d = document.createElement('dialog');
      d.style.height = '100vh';
      d.style.width = '100vw';
      d.id = 'sourceRecord';
      d.innerHTML = `
            <textarea style='width:100%;height:90%'>${await that.source}</textarea>
            <form method="dialog">
              <button formmethod="dialog" onclick='javascript:Array.from(document.querySelectorAll("#sourceRecord")).map(m => m.remove())'>close</button>
            </form>`;
      document.body.appendChild(d);
      d.showModal();
    })();
  }
}
class Record {
  /**
   * Get all records
   * 
   * @returns records
   */
  static get all() {
    try {
      if (_common__WEBPACK_IMPORTED_MODULE_0__["default"].isFullView()) {
        [_common__WEBPACK_IMPORTED_MODULE_0__["default"].components.controller('prm-full-view-page')[0].fullViewPageService.currentItem];
      } else {
        return _common__WEBPACK_IMPORTED_MODULE_0__["default"].userSession.searchStateService.resultObject.data;
      }
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  /**
   * Get current record, location and library
   */
  static get current() {
    return CurrentRecord;
  }
}

/***/ }),

/***/ "./src/primo/session/index.js":
/*!************************************!*\
  !*** ./src/primo/session/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Session)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "./src/primo/common/index.js");

class Session {
  /**
   * User object
   */
  static get user() {
    let isLoggedIn = _common__WEBPACK_IMPORTED_MODULE_0__["default"].jwt.signedIn == null ? false : true;
    let onCampus = _common__WEBPACK_IMPORTED_MODULE_0__["default"].jwt.onCampus == 'false' ? false : true;
    let userFines = [];
    if (!Primo.state.get('finesLoading')) {
      userFines = (async () => {
        return await this.#userFines();
      })();
    }
    return {
      email: _common__WEBPACK_IMPORTED_MODULE_0__["default"].jwt.email || '',
      display_name: _common__WEBPACK_IMPORTED_MODULE_0__["default"].userSession.getUserNameForDisplay(),
      user_name: _common__WEBPACK_IMPORTED_MODULE_0__["default"].jwt.userName,
      isLoggedIn: isLoggedIn,
      isOnCampus: onCampus,
      fines: userFines
    };
  }

  /**
   * View object
   */
  static get view() {
    return {
      code: _common__WEBPACK_IMPORTED_MODULE_0__["default"].appCtrl.viewId || window.appConfig['vid'],
      institution: {
        code: _common__WEBPACK_IMPORTED_MODULE_0__["default"].userSession.inst,
        name: window.appConfig['primo-view']['attributes-map'].institution
      },
      interfaceLanguage: _common__WEBPACK_IMPORTED_MODULE_0__["default"].userSession.getUserLanguage() || window.appConfig['primo-view']['attributes-map'].interfaceLanguage,
      ip: _common__WEBPACK_IMPORTED_MODULE_0__["default"].userSession.ip || _common__WEBPACK_IMPORTED_MODULE_0__["default"].jwt.userIp
    };
  }
  static async #userFines() {
    Primo.state.set('finesLoading', true);
    let userFines = await _common__WEBPACK_IMPORTED_MODULE_0__["default"].http.get(`${_common__WEBPACK_IMPORTED_MODULE_0__["default"].restBaseURLs.myAccountBaseURL}/fines`);
    try {
      let data = userFines.data;
      if (data.status == 'ok') {
        let fines = data.data.fines;
        Primo.state.set('fines', fines.fine);
        return fines.fine;
      } else {
        console.log('No fines');
        Primo.state.set('fines', []);
        return [];
      }
    } catch (error) {
      Primo.state.set('fines', []);
      return [];
    }
  }
}

/***/ }),

/***/ "./src/primo/state/index.js":
/*!**********************************!*\
  !*** ./src/primo/state/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let instance;
let globalState = {};
class State {
  constructor() {
    if (instance) {
      throw new Error("State is a singleton");
    }
    instance = this;
  }
  get(state) {
    if (Object.keys(globalState).includes(state)) {
      return globalState[state];
    } else {
      return null;
    }
  }
  set(state, value) {
    globalState[state] = value;
  }
}
let stateInstance = Object.freeze(new State());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stateInstance);

/***/ }),

/***/ "./node_modules/primo-explore-eth-openurl-interlibrary/js/eth-openurl-interlibrary.config.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/primo-explore-eth-openurl-interlibrary/js/eth-openurl-interlibrary.config.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ethOpenurlInterlibraryConfig: () => (/* binding */ ethOpenurlInterlibraryConfig)
/* harmony export */ });
const ethOpenurlInterlibraryConfig = function(){
    return {
        label: {
            text:{
                de: 'Artikel/Medium in Region Zentralschweiz RZS nicht vorhanden. <a href=" https://swisscovery.slsp.ch/discovery/search?vid=41SLSP_NETWORK:VU1_UNION" target="_blank">Suche schweizweit in swisscovery</a> oder kontaktieren Sie ',
                en: 'Article/medium not available in region Central Switzerland RZS. <a href=" https://swisscovery.slsp.ch/discovery/search?vid=41SLSP_NETWORK:VU1_UNION&lang=en" target="_blank">Search Switzerland-wide</a> in swisscovery or contact '
            },
            linktext:{
                de: 'Ihre Bibliothek.',
                en: 'your library.'
            }
        },
        url:{
            link: {
                de: 'https://www.rzsinfo.ch/bibliotheken',
                en: 'https://www.rzsinfo.ch/bibliotheken'
            }
        }
    }
}


/***/ }),

/***/ "./node_modules/primo-explore-eth-openurl-interlibrary/js/eth-openurl-interlibrary.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/primo-explore-eth-openurl-interlibrary/js/eth-openurl-interlibrary.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div ng-if=\"$ctrl.openurl\" class=\"layout-row eth-ill-container\">\r\n    <div class=\"eth-ill\">\r\n        <span ng-bind-html=\"::$ctrl.ethConfigService.getLabel($ctrl.config, 'text')\"></span>\r\n        <a href=\"{{::$ctrl.ethConfigService.getUrl($ctrl.config, 'link')}}{{$ctrl.qs}}\" target=\"_blank\" rel=\"noopener\">\r\n            <span>{{::$ctrl.ethConfigService.getLabel($ctrl.config, 'linktext')}}</span>\r\n            <prm-icon external-link icon-type=\"svg\" svg-icon-set=\"primo-ui\" icon-definition=\"open-in-new\"></prm-icon>\r\n        </a>        \r\n    </div>\r\n</div>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/primo-explore-eth-person-card/js/eth-person-card.html":
/*!****************************************************************************!*\
  !*** ./node_modules/primo-explore-eth-person-card/js/eth-person-card.html ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div ng-if=\"$ctrl.persons\">\r\n    <div ng-repeat=\"person in $ctrl.persons\" ng-if=\"(person.entityfacts && person.entityfacts.preferredName) || (person.wiki && person.wiki.links) || (person.metagridLinks && person.metagridLinks.length > 0) || (person.findbuchLinks && person.findbuchLinks.length > 0)\">\r\n        <a class=\"eth-personcard-anchor\" name=\"personcard{{person.gnd}}-anchor\"></a>\r\n        <div id=\"personcard{{person.gnd}}\" class=\"eth-person__facts\" ng-if=\"(person.entityfacts && person.entityfacts.preferredName) || (person.wiki && person.wiki.label)\" aria-live=\"polite\">\r\n            <md-card>\r\n                <md-card-title class=\"eth-person__facts-title\">\r\n                  <md-card-title-text>\r\n                    <h2>\r\n                        <span ng-if=\"person.entityfacts.preferredName\" class=\"md-headline\">{{person.entityfacts.preferredName}}:</span>\r\n                        <span ng-if=\"!person.entityfacts.preferredName && person.wiki.label\" class=\"md-headline\">{{person.wiki.label}}:</span>\r\n                        <span class=\"md-headline\">{{::$ctrl.ethConfigService.getLabel($ctrl.config, 'moreInformations')}}</span>\r\n                    </h2>\r\n                  </md-card-title-text>\r\n                </md-card-title>\r\n                <div class=\"eth-person__facts-content\" layout=\"row\" layout-xs=\"column\">\r\n                    <md-button class=\"eth-personcard__close md-primary\" ng-click=\"$ctrl.toggleCard(person.gnd)\">\r\n                        <span class=\"accessible-only\">{{::$ctrl.ethConfigService.getLabel($ctrl.config, 'closePersonCard')}}</span>\r\n                    </md-button>\r\n                    <div ng-if=\"person.entityfacts.depiction\" class=\"eth-person__image-container\">\r\n                        <img class=\"eth-person__image\" ng-src=\"{{person.entityfacts.depiction.thumbnail['@id']}}\" alt=\"{{person.entityfacts.preferredName}}\">\r\n                    </div>\r\n                    <div ng-if=\"!person.entityfacts.depiction && person.wiki.image_url\" class=\"eth-person__image-container\">\r\n                        <img class=\"eth-person__image\" ng-src=\"{{person.wiki.image_url}}\" alt=\"{{person.wiki.label}}\">\r\n                    </div>\r\n                    <div class=\"eth-person__facts-text\">\r\n                        <md-card-content>\r\n                            <h3 class=\"md-subhead eth-person__subhead eth-person__subhead-first\">{{::$ctrl.ethConfigService.getLabel($ctrl.config, 'infoGndWd')}}</h3>\r\n                            <p ng-if=\"person.entityfacts.professionOrOccupation\">{{person.entityfacts.professionOrOccupation}}</p>\r\n                            <p ng-if=\"person.wiki.description\">{{person.wiki.description}}</p>\r\n                            <p ng-if=\"person.entityfacts.dateOfBirth\">{{::$ctrl.ethConfigService.getLabel($ctrl.config, 'born')}}: {{person.entityfacts.dateOfBirth}}<span ng-if=\"person.entityfacts.placeOfBirth\">, {{person.entityfacts.placeOfBirth}}</span></p>\r\n                            <p ng-if=\"person.entityfacts.dateOfDeath\">{{::$ctrl.ethConfigService.getLabel($ctrl.config, 'died')}}: {{person.entityfacts.dateOfDeath}}<span ng-if=\"person.entityfacts.placeOfDeath\">, {{person.entityfacts.placeOfDeath}}</span></p>\r\n                            <p ng-if=\"person.entityfacts.biographicalOrHistoricalInformation\">{{person.entityfacts.biographicalOrHistoricalInformation}}</p>\r\n                            <p ng-if=\"person.entityfacts.depiction || person.wiki.image_url\"><span>{{::$ctrl.ethConfigService.getLabel($ctrl.config, 'imgLicense')}}</span> <a target=\"_blank\" ng-href=\"{{person.entityfacts.depiction.url}}\">\r\n                                Wikimedia Commons\r\n                                <prm-icon external-link icon-type=\"svg\" svg-icon-set=\"primo-ui\" icon-definition=\"open-in-new\"></prm-icon>\r\n                            </a>.</p>\r\n                        </md-card-content>\r\n                    </div>\r\n                </div>\r\n            </md-card>\r\n\r\n            <div ng-if=\"person.wikiArchivesAtLinks && person.wikiArchivesAtLinks.length > 0\">\r\n                <h3 class=\"md-subhead eth-person__subhead\">{{::$ctrl.ethConfigService.getLabel($ctrl.config, 'archiveLinks')}}</h3>\r\n                <p ng-repeat=\"link in person.wikiArchivesAtLinks\">\r\n                    <a ng-if=\"link.url\" class=\"arrow-link md-primoExplore-theme\" ng-href=\"{{link.url}}\" target=\"_blank\" rel=\"noopener\">\r\n                        <span ng-if=\"link.label\">{{link.label}}</span><span ng-if=\"link.inventoryno\"> (Inventarnummer: {{link.inventoryno}})</span>\r\n                        <prm-icon external-link icon-type=\"svg\" svg-icon-set=\"primo-ui\" icon-definition=\"open-in-new\"></prm-icon>\r\n                        <prm-icon link-arrow external-link icon-type=\"svg\" svg-icon-set=\"primo-ui\" icon-definition=\"chevron-right\"></prm-icon>\r\n                    </a>\r\n                    <span ng-if=\"!link.url\">\r\n                        <span>{{link.label}}</span>\r\n                        <span ng-if=\"object.inventoryno\"> (Inventarnummer: {{link.inventoryno}})</span>\r\n                    </span>\r\n                </p>\r\n            </div>\r\n            <div ng-if=\"person.wiki && person.wiki.links && person.wiki.links.length > 0\">\r\n                <h3 class=\"md-subhead eth-person__subhead\">{{::$ctrl.ethConfigService.getLabel($ctrl.config, 'linksWD')}}</h3>\r\n                <p ng-repeat=\"link in person.wiki.links\"><a class=\"arrow-link md-primoExplore-theme\" ng-href=\"{{link.url}}\" target=\"_blank\" rel=\"noopener\">\r\n                    <span>{{link.label}}</span>\r\n                    <prm-icon external-link icon-type=\"svg\" svg-icon-set=\"primo-ui\" icon-definition=\"open-in-new\"></prm-icon>\r\n                    <prm-icon link-arrow external-link icon-type=\"svg\" svg-icon-set=\"primo-ui\" icon-definition=\"chevron-right\"></prm-icon>\r\n                </a></p>\r\n            </div>\r\n            <div ng-if=\"person.wiki && person.wiki.profiles && person.wiki.profiles.length > 0\">\r\n                <h3 class=\"md-subhead eth-person__subhead\">{{::$ctrl.ethConfigService.getLabel($ctrl.config, 'researcherProfile')}}</h3>\r\n                <p ng-repeat=\"link in person.wiki.profiles\"><a class=\"arrow-link md-primoExplore-theme\" ng-href=\"{{link.url}}\" target=\"_blank\" rel=\"noopener\">\r\n                    <span>{{link.label}}</span>\r\n                    <prm-icon external-link icon-type=\"svg\" svg-icon-set=\"primo-ui\" icon-definition=\"open-in-new\"></prm-icon>\r\n                    <prm-icon link-arrow external-link icon-type=\"svg\" svg-icon-set=\"primo-ui\" icon-definition=\"chevron-right\"></prm-icon>\r\n                </a></p>\r\n            </div>\r\n            <div ng-if=\"person.metagridLinks && person.metagridLinks.length > 0\">\r\n                <h3 class=\"md-subhead eth-person__subhead\">{{::$ctrl.ethConfigService.getLabel($ctrl.config, 'linksMetagrid')}}</h3>\r\n                <p class=\"eth-person__links-hint\">Links powered by <a target=\"_blank\" href=\"https://www.metagrid.ch/\" class=\"wikidata-person__links-source md-default-theme\">\r\n                    Metagrid\r\n                    <prm-icon external-link icon-type=\"svg\" svg-icon-set=\"primo-ui\" icon-definition=\"open-in-new\"></prm-icon>\r\n                </a></p>\r\n                <p ng-repeat=\"link in person.metagridLinks\"><a class=\"arrow-link md-primoExplore-theme\" ng-href=\"{{link.url}}\" target=\"_blank\" rel=\"noopener\">\r\n                    <span>{{link.label}}</span>\r\n                    <prm-icon external-link icon-type=\"svg\" svg-icon-set=\"primo-ui\" icon-definition=\"open-in-new\"></prm-icon>\r\n                    <prm-icon link-arrow external-link icon-type=\"svg\" svg-icon-set=\"primo-ui\" icon-definition=\"chevron-right\"></prm-icon>\r\n                </a></p>\r\n            </div>\r\n            <div ng-if=\"person.findbuchLinks && person.findbuchLinks.length > 0\">\r\n                <h3 class=\"md-subhead eth-person__subhead\">{{::$ctrl.ethConfigService.getLabel($ctrl.config, 'linksFindbuch')}}</h3>\r\n                <p class=\"eth-person__links-hint\">\r\n                    {{::$ctrl.ethConfigService.getLabel($ctrl.config, 'linksFindbuchHint1')}}\r\n                    <a target=\"_blank\" href=\"http://beacon.findbuch.de/seealso/pnd-aks\" class=\"wikidata-person__links-source md-default-theme\">pnd-aks\r\n                        <prm-icon external-link icon-type=\"svg\" svg-icon-set=\"primo-ui\" icon-definition=\"open-in-new\"></prm-icon>\r\n                    </a>,\r\n                    {{::$ctrl.ethConfigService.getLabel($ctrl.config, 'linksFindbuchHint2')}}\r\n                    <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Wikipedia:BEACON\" class=\"wikidata-person__links-source md-default-theme\">BEACON\r\n                        <prm-icon external-link icon-type=\"svg\" svg-icon-set=\"primo-ui\" icon-definition=\"open-in-new\"></prm-icon>\r\n                    </a>\r\n                    {{::$ctrl.ethConfigService.getLabel($ctrl.config, 'linksFindbuchHint3')}}\r\n                </p>\r\n                <p ng-repeat=\"link in person.findbuchLinks\"><a class=\"arrow-link md-primoExplore-theme\" ng-href=\"{{link.url}}\" target=\"_blank\" rel=\"noopener\">\r\n                    <span>{{link.label}}</span>\r\n                    <prm-icon external-link icon-type=\"svg\" svg-icon-set=\"primo-ui\" icon-definition=\"open-in-new\"></prm-icon>\r\n                    <prm-icon link-arrow external-link icon-type=\"svg\" svg-icon-set=\"primo-ui\" icon-definition=\"chevron-right\"></prm-icon>\r\n                </a></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/altmetric/altmetric.html":
/*!*************************************************!*\
  !*** ./src/components/altmetric/altmetric.html ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div id=\"altmetric-doi-{{$ctrl.id}}\" class=\"eth-altmetric-container layout-row\">\r\n  <div aria-label=\"Altmetric\" ng-if=\"$ctrl.doi != ''\"  ng-click=\"$event.stopPropagation();\"\r\n        data-link-target=\"_blank\"\r\n        rel=\"noopener\"\r\n        class=\"altmetric-embed\"\r\n        data-hide-no-mentions=\"true\"\r\n        data-badge-type=\"4\" data-badge-popover=\"right\" data-doi=\"{{$ctrl.doi}}\">\r\n </div>\r\n <div id=\"altmetric-isbn-{{$ctrl.id}}\" aria-label=\"Altmetric\" ng-if=\"$ctrl.isbn != ''\"\r\n      ng-click=\"$event.stopPropagation();\"\r\n      data-link-target=\"_blank\" rel=\"noopener\"\r\n      class=\"altmetric-embed\" data-hide-no-mentions=\"true\" data-badge-type=\"4\"\r\n      data-badge-popover=\"right\" data-isbn=\"{{$ctrl.isbn}}\">\r\n </div>\r\n</div>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/author_display_collections/author_display_collections.html":
/*!***********************************************************************************!*\
  !*** ./src/components/author_display_collections/author_display_collections.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div ng-if=\"$ctrl.showAuthor();\">{{$ctrl.author}}</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/journalsStartPage/eth-journals-startpage/eth-journals-startpage.html":
/*!*********************************************************************************************!*\
  !*** ./src/components/journalsStartPage/eth-journals-startpage/eth-journals-startpage.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"eth-journals\" layout-gt-sm=\"row\" flex=\"100\" layout-padding layout-align=\"center start\">\r\n    <div flex-gt-sm=\"50\" flex=\"100\" layout=\"column\">\r\n        <md-card class=\"default-card eth-card eth-card-journals\">\r\n            <md-card-title flex=\"none\" class=\"eth-card-title\">\r\n                <md-card-title-text>\r\n                    <span class=\"md-headline\" role=\"heading\" aria-level=\"2\">{{::$ctrl.ethConfigService.getLabel($ctrl.config, 'heading')}}</span>\r\n                </md-card-title-text>\r\n            </md-card-title>\r\n            <md-card-content>\r\n                <p>\r\n                    {{::$ctrl.ethConfigService.getLabel($ctrl.config, 'p1')}}\r\n                </p>\r\n                <p>\r\n                    {{::$ctrl.ethConfigService.getLabel($ctrl.config, 'p2')}}\r\n                    <a target=\"_blank\" href=\"{{::$ctrl.ethConfigService.getUrl($ctrl.config, 'ill')}}\" class=\"arrow-link\" rel=\"external\">\r\n                        {{::$ctrl.ethConfigService.getLabel($ctrl.config, 'ill')}}\r\n                        <prm-icon external-link icon-type=\"svg\" svg-icon-set=\"primo-ui\" icon-definition=\"open-in-new\"></prm-icon>\r\n                    </a>.   \r\n                </p>\r\n                <!--md-card-title-text>\r\n                    <span class=\"md-headline\" role=\"heading\" aria-level=\"3\">{{::$ctrl.ethConfigService.getLabel($ctrl.config, 'h3')}}</span>\r\n                </md-card-title-text-->\r\n                <!--ul>\r\n                    <li>\r\n                        <strong>{{::$ctrl.ethConfigService.getLabel($ctrl.config, 'option1a')}}</strong>\r\n                        <br>\r\n                        {{::$ctrl.ethConfigService.getLabel($ctrl.config, 'option1b')}}\r\n                        <a target=\"_blank\" href=\"{{::$ctrl.ethConfigService.getUrl($ctrl.config, 'ill')}}\" class=\"arrow-link\" rel=\"external\">\r\n                            {{::$ctrl.ethConfigService.getLabel($ctrl.config, 'ill')}}\r\n                            <prm-icon external-link icon-type=\"svg\" svg-icon-set=\"primo-ui\" icon-definition=\"open-in-new\"></prm-icon>\r\n                        </a>.\r\n                    </li>\r\n                    <li>\r\n                        <strong>{{::$ctrl.ethConfigService.getLabel($ctrl.config, 'option2a')}}</strong>\r\n                        <br>\r\n                        {{::$ctrl.ethConfigService.getLabel($ctrl.config, 'option2b')}}\r\n                    </li>\r\n                    <li>\r\n                        <strong>{{::$ctrl.ethConfigService.getLabel($ctrl.config, 'option3a')}}</strong>\r\n                        <br>\r\n                        {{::$ctrl.ethConfigService.getLabel($ctrl.config, 'option3b')}}\r\n                    </li>\r\n                    <li>\r\n                        <strong>{{::$ctrl.ethConfigService.getLabel($ctrl.config, 'option4a')}}</strong>\r\n                        <br>\r\n                        {{::$ctrl.ethConfigService.getLabel($ctrl.config, 'option4b')}}\r\n                        <a target=\"_blank\" href=\"{{::$ctrl.ethConfigService.getUrl($ctrl.config, 'ill')}}\" class=\"arrow-link\" rel=\"external\">\r\n                            {{::$ctrl.ethConfigService.getLabel($ctrl.config, 'ill')}}\r\n                            <prm-icon external-link icon-type=\"svg\" svg-icon-set=\"primo-ui\" icon-definition=\"open-in-new\"></prm-icon>\r\n                        </a>.\r\n                    </li>\r\n                </ul -->\r\n            </md-card-content>\r\n        </md-card>\r\n    </div>\r\n</div>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/libInfo/info/info.html":
/*!***********************************************!*\
  !*** ./src/components/libInfo/info/info.html ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<style>\r\n    @media screen and (max-width:600px) {\r\n        prm-stack-map span {\r\n            display: none !important;\r\n        }    \r\n\r\n        .hide-mobile {            \r\n            display: none !important;\r\n        }\r\n    }\r\n</style>\r\n<a ng-if=\"$ctrl.libid\" ng-href=\"{{$ctrl.libid}}\" target=\"_blank\" \r\n   class='zero-margin button-with-icon button-link md-button md-primoExplore-theme md-ink-ripple'>\r\n    <prm-icon icon-type=\"svg\" svg-icon-set=\"primo-actions\" icon-definition=\"info\"></prm-icon>\r\n    <span class=\"hide-mobile\" translate='nui.customizing.idslu.informationtooltip'></span>    \r\n</a>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/libInfo/openHour/openhour.html":
/*!*******************************************************!*\
  !*** ./src/components/libInfo/openHour/openhour.html ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<md-button ng-click=\"$ctrl.getInfo()\" class=\"libinfo md-raised\" ng-if=\"$ctrl.mainLocation != 'EMPTY'\" ng-hide=\"$ctrl.showLib\">\r\n    <span>{{$ctrl.mainLocation}}</span>\r\n    <md-icon>\r\n    <svg class=\"md-secondary status-\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\">\r\n        <path fill=\"currentColor\" d=\"M 32,4 C 16.537113,4 4,16.541629 4,32 4,47.467403 16.537113,60 32,60 47.462887,60 60,47.467403 60,32 60,16.541629 47.462887,4 32,4 Z m 0,50.580646 C 19.52058,54.580646 9.4193545,44.483597 9.4193545,32 9.4193545,19.524758 19.521033,9.4193545 32,9.4193545 44.47479,9.4193545 54.580646,19.52092 54.580646,32 54.580646,44.479193 44.483597,54.580646 32,54.580646 Z m 0,-38.161292 c 2.618903,0 4.741936,2.123033 4.741936,4.741936 0,2.618903 -2.123033,4.741936 -4.741936,4.741936 -2.618903,0 -4.741936,-2.123033 -4.741936,-4.741936 0,-2.618903 2.123033,-4.741936 4.741936,-4.741936 z m 6.32258,28.67742 c 0,0.74821 -0.606628,1.354839 -1.354838,1.354839 h -9.935484 c -0.74821,0 -1.354838,-0.606629 -1.354838,-1.354839 v -2.709677 c 0,-0.74821 0.606628,-1.354839 1.354838,-1.354839 h 1.354839 v -7.225806 h -1.354839 c -0.74821,0 -1.354838,-0.606629 -1.354838,-1.354839 v -2.709677 c 0,-0.74821 0.606628,-1.354839 1.354838,-1.354839 h 7.225806 c 0.74821,0 1.354839,0.606629 1.354839,1.354839 v 11.290322 h 1.354839 c 0.748209,0 1.354838,0.606629 1.354838,1.354839 z\"></path>\r\n    </svg>\r\n    </md-icon>\r\n</md-button>\r\n<div id=\"libinfo\" ng-show=\"$ctrl.showLib\">\r\n    <div layout=\"row\" layout-wrap=\"\">\r\n        <div flex=\"100\"><h4>{{$ctrl.library.name}}</h4></div>\r\n        <div flex=\"100\" flex-gt-sm=\"50\">\r\n            <md-button class=\"button-confirm\" ng-if=\"$ctrl.library.is_open\"><span translate=\"nui.customizing.openhours.open\"></span></md-button>\r\n            <md-button class=\"button-notice\" ng-if=\"$ctrl.library.is_open === false\"><span translate=\"nui.customizing.openhours.closed\"></span></md-button>\r\n            <md-button class=\"button-notice\" ng-if=\"$ctrl.library.is_open === null\"><span translate=\"nui.customizing.openhours.request\"></span></md-button>\r\n            \r\n            <p>{{$ctrl.library.street}}<br>{{$ctrl.library.postcode}}&nbsp;{{$ctrl.library.place}}</p>\r\n            <p>\r\n                <a href=\"tel:+41{{$ctrl.library.phone.substr(1)}}\">\r\n                <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\" width=\"1em\">\r\n                        <path fill=\"currentColor\" d=\"M 6.034333,6.6917509 17.409102,4.0668064 c 1.235912,-0.284369 2.504637,0.3609298 3.007751,1.5202803 l 5.249894,12.2497413 c 0.459365,1.071853 0.153121,2.329638 -0.754673,3.062435 l -6.62799,5.424886 c 3.93742,8.388885 10.816968,15.366863 19.380856,19.380841 l 5.42489,-6.627985 c 0.743734,-0.907794 1.990584,-1.214037 3.062437,-0.754672 l 12.249751,5.249889 c 1.170289,0.514052 1.815588,1.782775 1.531219,3.018686 l -2.624946,11.37476 C 57.034859,59.146893 55.98488,60 54.748968,60 26.7386,60 4,37.305167 4,9.2510718 4,8.0260977 4.84217,6.9651826 6.034333,6.6917509 z\"></path>\r\n                    </svg>\r\n                    +41 {{$ctrl.library.phone.substr(1,2)}} {{$ctrl.library.phone.substr(3,3)}} {{$ctrl.library.phone.substr(6,2)}} {{$ctrl.library.phone.substr(8,2)}}\r\n                </a>\r\n                <br>\r\n                <a href=\"mailto:{{$ctrl.library.email}}\">\r\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\" width=\"1em\">\r\n                        <path fill=\"currentColor\" d=\"M 54.75,11 H 9.25 C 6.3504687,11 4,13.350469 4,16.25 v 31.5 C 4,50.64953 6.3504687,53 9.25,53 h 45.5 C 57.649531,53 60,50.64953 60,47.75 V 16.25 C 60,13.350469 57.649531,11 54.75,11 Z m 0,5.25 v 4.463047 C 52.297594,22.710125 48.387875,25.8155 40.029547,32.360391 38.187562,33.809281 34.538812,37.290141 32,37.249563 29.461625,37.290578 25.811672,33.808734 23.970453,32.360391 15.613437,25.816484 11.702734,22.710453 9.25,20.713047 V 16.25 Z M 9.25,47.75 V 27.449781 c 2.506219,1.996203 6.060359,4.797406 11.477594,9.039406 2.390609,1.881797 6.577156,6.035969 11.272406,6.010704 4.672172,0.02526 8.805672,-4.068641 11.271422,-6.009829 5.417125,-4.24189 8.97225,-7.043859 11.478578,-9.040171 V 47.75 z\"></path>\r\n                    </svg>\r\n                    {{$ctrl.library.email}}\r\n                </a>\r\n                <br>\r\n                <a href=\"{{$ctrl.library.url}}\" target=\"_blank\">\r\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\" width=\"1em\">\r\n                        <path fill=\"currentColor\" d=\"M 32,4 C 16.532258,4 4,16.532258 4,32 4,47.467742 16.532258,60 32,60 47.467742,60 60,47.467742 60,32 60,16.532258 47.467742,4 32,4 Z m -3.612903,5.735484 v 1.275806 c 0,1.343549 -1.41129,2.212903 -2.619355,1.614517 l -2.709678,-1.35484 c 1.682259,-0.72258 3.466129,-1.230644 5.329033,-1.535483 z M 32,51.487097 v 3.093549 C 19.546774,54.580645 9.4193549,44.453226 9.4193549,32 c 0,-3.285484 0.7225801,-6.401613 1.9870971,-9.224193 1.117742,1.659677 2.845161,4.22258 3.906451,5.769354 0.587097,0.858065 1.264517,1.648387 2.043549,2.337097 l 0.09032,0.07903 c 1.07258,0.970969 2.280646,1.806452 3.567742,2.46129 1.580645,0.790323 3.883871,2.05484 5.509677,2.946775 1.151614,0.632258 1.862904,1.840322 1.862904,3.161291 v 3.612903 c 0,0.959677 0.38387,1.874193 1.06129,2.551613 C 31.141936,47.4 32.191936,50.064516 32,51.487097 Z M 36.820967,54.05 38.785484,48.754839 c 0.225806,-0.620968 0.37258,-1.264516 0.541936,-1.908065 0.124193,-0.451613 0.36129,-0.869354 0.7,-1.208064 l 1.275806,-1.275807 C 42.296774,43.380645 42.85,42.037097 42.85,40.637097 c 0,-0.914517 -0.36129,-1.795161 -1.004839,-2.43871 l -1.546774,-1.546774 c -0.67742,-0.67742 -1.591936,-1.06129 -2.551613,-1.06129 h -7.553225 c -1.061291,-0.530646 -2.42742,-3.612903 -3.612903,-3.612903 -1.185485,0 -2.359679,-0.282259 -3.420969,-0.812904 l -1.253225,-0.620968 c -0.451613,-0.225806 -0.745162,-0.699999 -0.745162,-1.208064 0,-0.575807 0.372581,-1.095161 0.925807,-1.275807 l 3.52258,-1.174193 c 0.609678,-0.203226 1.275807,-0.06774 1.75,0.35 l 1.05,0.914516 c 0.169356,0.146774 0.372581,0.225807 0.587097,0.225807 h 0.632259 c 0.677419,0 1.106451,-0.711291 0.812903,-1.309678 l -1.761291,-3.52258 c -0.180645,-0.35 -0.101612,-0.779033 0.180645,-1.05 l 1.117743,-1.083872 C 30.148387,21.240323 30.374193,21.15 30.61129,21.15 h 1.01613 c 0.237096,0 0.474193,-0.09032 0.643547,-0.259677 l 0.903226,-0.903226 c 0.35,-0.35 0.35,-0.925807 0,-1.275807 l -0.530644,-0.530645 c -0.350001,-0.349999 -0.350001,-0.925806 0,-1.275806 l 1.162902,-1.162903 0.530646,-0.530646 c 0.7,-0.7 0.7,-1.851613 0,-2.551613 L 31.141936,9.464516 C 31.424193,9.453226 31.706451,9.419356 32,9.419356 c 8.829033,0 16.46129,5.103226 20.175807,12.498387 l -1.467743,0.733871 c -0.417741,0.214516 -0.779031,0.530646 -1.03871,0.914516 l -2.212903,3.319356 c -0.609677,0.914516 -0.609677,2.1 0,3.003225 L 49.48871,32.9371 c 0.37258,0.564515 0.948387,0.959677 1.591935,1.129031 l 3.296775,0.824194 C 53.158064,44.374193 46.033871,52.040323 36.820967,54.05 Z\"></path>\r\n                    </svg>\r\n                    {{$ctrl.library.url}}\r\n                </a>\r\n            </p>\r\n            <div class=\"openings\" ng-if=\"$ctrl.library.is_open !== null\">\r\n                <p><strong><span translate=\"nui.customizing.openhours.openings\"></span></strong></p>\r\n            <p ng-repeat=\"day in $ctrl.library.openings\">\r\n                <span class=\"day\">{{$ctrl.weekdayText(day)}}</span>\r\n                <span ng-repeat=\"time in day.times\"  ng-if=\"day.times.length>0\">\r\n                    <span class=\"opening\" ng-if=\"time.open\">{{time.open}} - {{time.closed}}</span>\r\n                    <span ng-if=\"!time.open\">closed</span>\r\n                </span>\r\n                <span ng-if=\"day.times.length==0\">closed</span></p>\r\n            </div>\r\n        </div>\r\n        <div flex=\"100\" flex-gt-sm=\"50\">\r\n            <img src=\"{{$ctrl.library.image}}\" style=\"height:90%; width:90%;\">\r\n            \r\n        </div>\r\n    </div>\r\n</div>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/links/e-container/linksContainer.html":
/*!**************************************************************!*\
  !*** ./src/components/links/e-container/linksContainer.html ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<rzs-link class=\"idslu-e-help\" url=\"{{('nui.customizing.idslu.ehelpurl' | translate)}}\" text=\"{{('nui.customizing.idslu.ehelptext' | translate)}}\"></rzs-link>\r\n<rzs-link class=\"idslu-elibraries\" url=\"{{('nui.customizing.idslu.elibrariesurl' | translate)}}\" text=\"{{('nui.customizing.idslu.elibrariestext' | translate)}}\"></rzs-link>\r\n<rzs-link class=\"idslu-eclosures\" url=\"{{('nui.customizing.idslu.eclosuresurl' | translate)}}\" text=\"{{('nui.customizing.idslu.eclosurestext' | translate)}}\"></rzs-link>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/links/link/link.html":
/*!*********************************************!*\
  !*** ./src/components/links/link/link.html ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div ng-hide=\"{{$ctrl.linkText == ''}}\" class=\"prm-notice {{$ctrl.linkClass}}\">\r\n  <a class=\"arrow-link\" ng-href=\"{{$ctrl.linkUrl}}\" target=\"_blank\">\r\n    <span>{{$ctrl.linkText}}</span>\r\n    <prm-icon external-link icon-type=\"svg\" svg-icon-set=\"primo-ui\" icon-definition=\"open-in-new\"></prm-icon>\r\n    <prm-icon external-link link-arrow icon-type=\"svg\" svg-icon-set=\"primo-ui\" icon-definition=\"chevron-right\"></prm-icon>\r\n  </a>\r\n</div>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/links/p-container/linksContainer.html":
/*!**************************************************************!*\
  !*** ./src/components/links/p-container/linksContainer.html ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<rzs-link class=\"idslu-p-help\" url=\"{{('nui.customizing.idslu.phelpurl' | translate)}}\" text=\"{{('nui.customizing.idslu.phelptext' | translate)}}\"></rzs-link>\r\n<rzs-link class=\"idslu-plibraries\" url=\"{{('nui.customizing.idslu.plibrariesurl' | translate)}}\" text=\"{{('nui.customizing.idslu.plibrariestext' | translate)}}\"></rzs-link>\r\n<rzs-link class=\"idslu-pclosures\" url=\"{{('nui.customizing.idslu.pclosuresurl' | translate)}}\" text=\"{{('nui.customizing.idslu.pclosurestext' | translate)}}\"></rzs-link>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/onCampus/onCampus.html":
/*!***********************************************!*\
  !*** ./src/components/onCampus/onCampus.html ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!-- \r\n    This is a null component meaning you can put this in any HTML and it will be rendered.\r\n    Look in your VIEW/html/homepage/homepage_xx.html file to see how it is used.\r\n-->\r\n<div ng-if='$ctrl.onCampus' class=\"hsg-on-campus-info layout-row\" layout=\"row\">\r\n\t<svg height=\"24\" viewBox=\"0 0 64 64\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t\t<path d=\"M 32,4 C 16.537113,4 4,16.541629 4,32 4,47.467403 16.537113,60 32,60 47.462887,60 60,47.467403 60,32 60,16.541629 47.462887,4 32,4 Z m 0,50.580645 C 19.520581,54.580645 9.419355,44.483597 9.419355,32 9.419355,19.524758 19.521032,9.419355 32,9.419355 44.47479,9.419355 54.580645,19.520919 54.580645,32 54.580645,44.479194 44.483597,54.580645 32,54.580645 Z M 36.741935,42.83871 c 0,2.614725 -2.127209,4.741935 -4.741935,4.741935 -2.614726,0 -4.741935,-2.12721 -4.741935,-4.741935 0,-2.614726 2.127209,-4.741936 4.741935,-4.741936 2.614726,0 4.741935,2.12721 4.741935,4.741936 z M 27.555,18.970855 28.322742,34.325694 c 0.03602,0.721112 0.631242,1.287209 1.353145,1.287209 h 4.648226 c 0.721903,0 1.317129,-0.566097 1.353145,-1.287209 L 36.445,18.970855 c 0.03873,-0.773839 -0.57829,-1.422468 -1.353145,-1.422468 h -6.18371 c -0.774855,0 -1.391871,0.648629 -1.353145,1.422468 z\"></path>\r\n\t</svg>\r\n    <div>\r\n    <p>Lizenzierte elektronische Ressourcen sind im Netzwerk der Universtät, der PH und der Hochschule zugänglich.</p>\r\n    </div>     \r\n</div>\r\n<div ng-if='$ctrl.offCampus' class=\"hsg-off-campus-info layout-row\" layout=\"row\">\r\n\t<svg height=\"24\" viewBox=\"0 0 64 64\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t\t<path d=\"M 32,4 C 16.537113,4 4,16.541629 4,32 4,47.467403 16.537113,60 32,60 47.462887,60 60,47.467403 60,32 60,16.541629 47.462887,4 32,4 Z m 0,50.580645 C 19.520581,54.580645 9.419355,44.483597 9.419355,32 9.419355,19.524758 19.521032,9.419355 32,9.419355 44.47479,9.419355 54.580645,19.520919 54.580645,32 54.580645,44.479194 44.483597,54.580645 32,54.580645 Z M 36.741935,42.83871 c 0,2.614725 -2.127209,4.741935 -4.741935,4.741935 -2.614726,0 -4.741935,-2.12721 -4.741935,-4.741935 0,-2.614726 2.127209,-4.741936 4.741935,-4.741936 2.614726,0 4.741935,2.12721 4.741935,4.741936 z M 27.555,18.970855 28.322742,34.325694 c 0.03602,0.721112 0.631242,1.287209 1.353145,1.287209 h 4.648226 c 0.721903,0 1.317129,-0.566097 1.353145,-1.287209 L 36.445,18.970855 c 0.03873,-0.773839 -0.57829,-1.422468 -1.353145,-1.422468 h -6.18371 c -0.774855,0 -1.391871,0.648629 -1.353145,1.422468 z\"></path>\r\n\t</svg>\r\n    <div>\r\n    <p>Sie sind off-campus. Bitte aktivieren Sie VPN um auf lizenzierte elektronische Ressourcen zugreifen zu können.</p>\r\n    </div>     \r\n</div>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/openingHours/component/openingHours.html":
/*!*****************************************************************!*\
  !*** ./src/components/openingHours/component/openingHours.html ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!-- if the location is visible show next block  -->\r\n<div ng-show=\"$ctrl.visible\" aria-hidden=\"false\" id=\"libinfo\">\r\n    <!-- if the button was not clicked then show next block -->\r\n     <!-- divke rond ? -->\r\n    <div ng-if=\"!$ctrl.show\" layout=\"row\" layout-wrap=\"\" class=\"layout-wrap layout-row\">\r\n        <!-- $ctrl.toggle wil flip the boolean from true <-> false -->\r\n         <!-- when the service return data then show occupancy when available-->\r\n            <button ng-if=\"$ctrl.hasData()\" ng-click=\"$ctrl.toggle()\" class=\"libinfo md-raised md-button md-primoExplore-theme md-ink-ripple\" type=\"button\">\r\n                <!--span translate='nui.customizing.idslu.informationtooltip'></span-->\r\n                <span>{{ $ctrl.data.name }}</span>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"library-info\" x=\"0px\" y=\"0px\" width=\"38px\" height=\"38px\" viewBox=\"0 0 100 100\" xml:space=\"preserve\">\r\n                    <g>\r\n                        <path d=\"M50,95C25.187,95,5,74.813,5,50C5,25.187,25.187,5,50,5c24.813,0,45,20.187,45,45C95,74.813,74.813,95,50,95z M50,10.625   c-21.711,0-39.375,17.664-39.375,39.375c0,21.711,17.664,39.375,39.375,39.375c21.712,0,39.375-17.664,39.375-39.375   C89.375,28.289,71.712,10.625,50,10.625z\"></path>\r\n                    </g>\r\n                    <g>\r\n                        <g>\r\n                            <path d=\"M61.516,67.309l2.288,1.063c-4.021,3.073-7.879,5.476-11.577,7.208c-3.698,1.733-6.748,2.599-9.149,2.599    c-1.342,0-2.322-0.255-2.947-0.767c-0.623-0.512-0.937-1.319-0.937-2.424c0-2.73,1.145-7.004,3.432-12.819    c2.288-5.815,3.432-9.933,3.432-12.349c0-0.446-0.127-0.787-0.382-1.024c-0.254-0.236-0.612-0.355-1.074-0.355    c-0.74,0-1.641,0.223-2.704,0.67c-1.063,0.447-2.379,1.156-3.951,2.127l-2.149-1.182c4.297-2.888,8.25-5.146,11.854-6.775    c3.604-1.627,6.422-2.441,8.456-2.441c1.341,0,2.333,0.236,2.98,0.709c0.647,0.472,0.971,1.181,0.971,2.126    c0,0.919-0.739,3.874-2.218,8.862c-0.51,1.681-0.901,3.007-1.179,3.979c-0.971,3.256-1.733,5.961-2.288,8.113    c-0.554,2.153-0.831,3.454-0.831,3.9c0,0.551,0.15,0.959,0.45,1.222c0.301,0.263,0.773,0.394,1.421,0.394    c0.646,0,1.478-0.237,2.495-0.71C58.927,68.963,60.129,68.254,61.516,67.309z\"></path>\r\n                        </g>\r\n                        <g>\r\n                            <circle cx=\"56.198\" cy=\"29.933\" r=\"8.004\"></circle>\r\n                        </g>\r\n                    </g>\r\n                </svg>\r\n                <span ng-if=\"$ctrl.data.data.occupancy.value.maximum > 0\">\r\n                    Occupancy: {{$ctrl.data.data.occupancy.value.current}} / {{$ctrl.data.data.occupancy.value.maximum  }} \r\n                    <!-- <i class=\"fa fa-chevron-right\" id=\"\" ></i> -->\r\n                    <svg id=\"chevron-right_cache340\" width=\"100%\" height=\"100%\" viewBox=\"0 0 20 20\" y=\"384\" xmlns=\"http://www.w3.org/2000/svg\"  fill=\"#3bbfad\" fit=\"\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" >\r\n                        <path d=\"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z\"></path>\r\n                    </svg>\r\n                </span>\r\n                <span ng-if=\"$ctrl.data.data.occupancy.value.maximum == 0\">\r\n                    Opening Hours\r\n                </span--> \r\n\r\n            </button>\r\n            <!-- dont show link -->\r\n            <div ng-if=\"$ctrl.hasData()\">\r\n                <style>\r\n                    div.i-button.neutralized-button.arrow-link-button.md-button.md-primoExplore-theme.md-ink-ripple > a.md-primoExplore-theme {\r\n                        display: none;\r\n                    }\r\n                </style>  \r\n\r\n            </div> \r\n            <!-- when the service dit NOT return data then show next message-->\r\n            <button ng-if=\"!$ctrl.hasData()\" class=\"button-confirm md-button md-primoExplore-theme md-ink-ripple\" type=\"button\">\r\n                <span>\r\n                    No opening hours data found\r\n                </span>                     \r\n            </button>\r\n    </div>\r\n\r\n    <!-- if the button was clicked (toggle button) then show next block -->\r\n    <div ng-if=\"$ctrl.show\" layout=\"row\" layout-wrap=\"\" class=\"layout-wrap layout-row\">\r\n        <div flex=\"100\" flex-gt-sm=\"50\" class=\"flex-gt-sm-50 flex-100\">\r\n            <button ng-click=\"$ctrl.toggle()\" class=\"libinfo md-raised md-button md-primoExplore-theme md-ink-ripple\" type=\"button\">\r\n                <!--span translate='nui.customizing.idslu.informationtooltip'></span-->\r\n                <span>{{ $ctrl.data.name }}</span>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"library-info\" x=\"0px\" y=\"0px\" width=\"38px\" height=\"38px\" viewBox=\"0 0 100 100\" xml:space=\"preserve\">\r\n                    <g>\r\n                        <path d=\"M50,95C25.187,95,5,74.813,5,50C5,25.187,25.187,5,50,5c24.813,0,45,20.187,45,45C95,74.813,74.813,95,50,95z M50,10.625   c-21.711,0-39.375,17.664-39.375,39.375c0,21.711,17.664,39.375,39.375,39.375c21.712,0,39.375-17.664,39.375-39.375   C89.375,28.289,71.712,10.625,50,10.625z\"></path>\r\n                    </g>\r\n                    <g>\r\n                        <g>\r\n                            <path d=\"M61.516,67.309l2.288,1.063c-4.021,3.073-7.879,5.476-11.577,7.208c-3.698,1.733-6.748,2.599-9.149,2.599    c-1.342,0-2.322-0.255-2.947-0.767c-0.623-0.512-0.937-1.319-0.937-2.424c0-2.73,1.145-7.004,3.432-12.819    c2.288-5.815,3.432-9.933,3.432-12.349c0-0.446-0.127-0.787-0.382-1.024c-0.254-0.236-0.612-0.355-1.074-0.355    c-0.74,0-1.641,0.223-2.704,0.67c-1.063,0.447-2.379,1.156-3.951,2.127l-2.149-1.182c4.297-2.888,8.25-5.146,11.854-6.775    c3.604-1.627,6.422-2.441,8.456-2.441c1.341,0,2.333,0.236,2.98,0.709c0.647,0.472,0.971,1.181,0.971,2.126    c0,0.919-0.739,3.874-2.218,8.862c-0.51,1.681-0.901,3.007-1.179,3.979c-0.971,3.256-1.733,5.961-2.288,8.113    c-0.554,2.153-0.831,3.454-0.831,3.9c0,0.551,0.15,0.959,0.45,1.222c0.301,0.263,0.773,0.394,1.421,0.394    c0.646,0,1.478-0.237,2.495-0.71C58.927,68.963,60.129,68.254,61.516,67.309z\"></path>\r\n                        </g>\r\n                        <g>\r\n                            <circle cx=\"56.198\" cy=\"29.933\" r=\"8.004\"></circle>\r\n                        </g>\r\n                    </g>\r\n                </svg>\r\n                <span ng-if=\"$ctrl.data.data.occupancy.value.maximum > 0\">\r\n                    Occupancy: {{$ctrl.data.data.occupancy.value.current}} / {{$ctrl.data.data.occupancy.value.maximum  }} \r\n                    <!-- added roation 90degrees to have chevron downwords -->\r\n                    <svg id=\"chevron-right_cache340\" width=\"100%\" height=\"100%\" viewBox=\"0 0 20 20\" y=\"384\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#3bbfad\" fit=\"\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" transform=\"rotate(90)\" >\r\n                        <path d=\"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z\"></path>\r\n                    </svg>\r\n                </span>\r\n            </button>\r\n\r\n            <!-- dont show link  -->\r\n            <style>\r\n                div.i-button.neutralized-button.arrow-link-button.md-button.md-primoExplore-theme.md-ink-ripple > a.md-primoExplore-theme {\r\n                    display: none;\r\n                }\r\n            </style>  \r\n\r\n\r\n            <!-- Infobutton when open -->\r\n                <!-- <button ng-if=\"$ctrl.isOpen\" ng-click=\"$ctrl.toggle()\" class=\"button-confirm md-button md-primoExplore-theme md-ink-ripple\" type=\"button\">\r\n                    <span>Bibliothek ist offen fast immer</span>\r\n                </button>  -->\r\n            <!-- Infobutton when closed -->\r\n             <button ng-if=\"!$ctrl.isOpen && $ctrl.data.data.useage\" ng-click=\"$ctrl.toggle()\" class=\"button-warn md-button md-primoExplore-theme md-ink-ripple\" type=\"button\">\r\n                <span>Bibliothek ist geschlossen</span>\r\n            </button> \r\n            <!-- Infobutton when no opening hours data in database -->\r\n             <button ng-if=\"!$ctrl.isOpen && !$ctrl.data.data.useage\" ng-click=\"$ctrl.toggle()\" class=\"button-notice md-button md-primoExplore-theme md-ink-ripple\" type=\"button\">\r\n                <span>Öffnungszeiten auf Anfrage</span>\r\n            </button> \r\n\r\n            <p ng-if='$ctrl.data.data.address'>{{ $ctrl.data.data.address.value[$ctrl.language] }}<br>{{ $ctrl.data.data.city.value[$ctrl.language] }}</p>\r\n            <p>\r\n                <span ng-if='$ctrl.data.data.phone'>\r\n                    <a href=\"tel:{{ $ctrl.data.data.phone.value }}\" class=\"md-primoExplore-theme\">\r\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\">\r\n                            <path fill=\"currentColor\" d=\"M 6.034333,6.6917509 17.409102,4.0668064 c 1.235912,-0.284369 2.504637,0.3609298 3.007751,1.5202803 l 5.249894,12.2497413 c 0.459365,1.071853 0.153121,2.329638 -0.754673,3.062435 l -6.62799,5.424886 c 3.93742,8.388885 10.816968,15.366863 19.380856,19.380841 l 5.42489,-6.627985 c 0.743734,-0.907794 1.990584,-1.214037 3.062437,-0.754672 l 12.249751,5.249889 c 1.170289,0.514052 1.815588,1.782775 1.531219,3.018686 l -2.624946,11.37476 C 57.034859,59.146893 55.98488,60 54.748968,60 26.7386,60 4,37.305167 4,9.2510718 4,8.0260977 4.84217,6.9651826 6.034333,6.6917509 z\"></path>\r\n                        </svg>\r\n                        {{ $ctrl.data.data.phone.value }}\r\n                    </a>\r\n                </span>                \r\n                <br>\r\n                <span ng-if='$ctrl.data.data.email'> \r\n                    <a href=\"mailto:{{ $ctrl.data.data.email.value }}\" class=\"md-primoExplore-theme\">\r\n                        <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\">\r\n                            <path fill=\"currentColor\" d=\"M 54.75,11 H 9.25 C 6.3504687,11 4,13.350469 4,16.25 v 31.5 C 4,50.64953 6.3504687,53 9.25,53 h 45.5 C 57.649531,53 60,50.64953 60,47.75 V 16.25 C 60,13.350469 57.649531,11 54.75,11 Z m 0,5.25 v 4.463047 C 52.297594,22.710125 48.387875,25.8155 40.029547,32.360391 38.187562,33.809281 34.538812,37.290141 32,37.249563 29.461625,37.290578 25.811672,33.808734 23.970453,32.360391 15.613437,25.816484 11.702734,22.710453 9.25,20.713047 V 16.25 Z M 9.25,47.75 V 27.449781 c 2.506219,1.996203 6.060359,4.797406 11.477594,9.039406 2.390609,1.881797 6.577156,6.035969 11.272406,6.010704 4.672172,0.02526 8.805672,-4.068641 11.271422,-6.009829 5.417125,-4.24189 8.97225,-7.043859 11.478578,-9.040171 V 47.75 z\"></path>\r\n                        </svg>\r\n                        {{ $ctrl.data.data.email.value }}\r\n                    </a>\r\n                </span>\r\n                <br>\r\n                <span ng-if='$ctrl.data.data.homepage'> \r\n                    <a target=\"_blank\" class=\"md-primoExplore-theme\" href=\"{{ $ctrl.data.data.homepage.value[$ctrl.language] }}\">\r\n                        <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\">\r\n                            <path fill=\"currentColor\" d=\"M 32,4 C 16.532258,4 4,16.532258 4,32 4,47.467742 16.532258,60 32,60 47.467742,60 60,47.467742 60,32 60,16.532258 47.467742,4 32,4 Z m -3.612903,5.735484 v 1.275806 c 0,1.343549 -1.41129,2.212903 -2.619355,1.614517 l -2.709678,-1.35484 c 1.682259,-0.72258 3.466129,-1.230644 5.329033,-1.535483 z M 32,51.487097 v 3.093549 C 19.546774,54.580645 9.4193549,44.453226 9.4193549,32 c 0,-3.285484 0.7225801,-6.401613 1.9870971,-9.224193 1.117742,1.659677 2.845161,4.22258 3.906451,5.769354 0.587097,0.858065 1.264517,1.648387 2.043549,2.337097 l 0.09032,0.07903 c 1.07258,0.970969 2.280646,1.806452 3.567742,2.46129 1.580645,0.790323 3.883871,2.05484 5.509677,2.946775 1.151614,0.632258 1.862904,1.840322 1.862904,3.161291 v 3.612903 c 0,0.959677 0.38387,1.874193 1.06129,2.551613 C 31.141936,47.4 32.191936,50.064516 32,51.487097 Z M 36.820967,54.05 38.785484,48.754839 c 0.225806,-0.620968 0.37258,-1.264516 0.541936,-1.908065 0.124193,-0.451613 0.36129,-0.869354 0.7,-1.208064 l 1.275806,-1.275807 C 42.296774,43.380645 42.85,42.037097 42.85,40.637097 c 0,-0.914517 -0.36129,-1.795161 -1.004839,-2.43871 l -1.546774,-1.546774 c -0.67742,-0.67742 -1.591936,-1.06129 -2.551613,-1.06129 h -7.553225 c -1.061291,-0.530646 -2.42742,-3.612903 -3.612903,-3.612903 -1.185485,0 -2.359679,-0.282259 -3.420969,-0.812904 l -1.253225,-0.620968 c -0.451613,-0.225806 -0.745162,-0.699999 -0.745162,-1.208064 0,-0.575807 0.372581,-1.095161 0.925807,-1.275807 l 3.52258,-1.174193 c 0.609678,-0.203226 1.275807,-0.06774 1.75,0.35 l 1.05,0.914516 c 0.169356,0.146774 0.372581,0.225807 0.587097,0.225807 h 0.632259 c 0.677419,0 1.106451,-0.711291 0.812903,-1.309678 l -1.761291,-3.52258 c -0.180645,-0.35 -0.101612,-0.779033 0.180645,-1.05 l 1.117743,-1.083872 C 30.148387,21.240323 30.374193,21.15 30.61129,21.15 h 1.01613 c 0.237096,0 0.474193,-0.09032 0.643547,-0.259677 l 0.903226,-0.903226 c 0.35,-0.35 0.35,-0.925807 0,-1.275807 l -0.530644,-0.530645 c -0.350001,-0.349999 -0.350001,-0.925806 0,-1.275806 l 1.162902,-1.162903 0.530646,-0.530646 c 0.7,-0.7 0.7,-1.851613 0,-2.551613 L 31.141936,9.464516 C 31.424193,9.453226 31.706451,9.419356 32,9.419356 c 8.829033,0 16.46129,5.103226 20.175807,12.498387 l -1.467743,0.733871 c -0.417741,0.214516 -0.779031,0.530646 -1.03871,0.914516 l -2.212903,3.319356 c -0.609677,0.914516 -0.609677,2.1 0,3.003225 L 49.48871,32.9371 c 0.37258,0.564515 0.948387,0.959677 1.591935,1.129031 l 3.296775,0.824194 C 53.158064,44.374193 46.033871,52.040323 36.820967,54.05 Z\"></path>\r\n                        </svg>\r\n                        {{ $ctrl.data.data.homepage.value[$ctrl.language] }}\r\n                    </a>\r\n                </span>\r\n            </p>\r\n            <!-- render the opening hours - but only if there are any-->\r\n            <!--div class=\"opening\"-->\r\n            <div ng-if=\"$ctrl.data.data.useage\" class=\"hours\">\r\n                <!--p><strong>Opening Hours for week #{{$ctrl.data.week.number}} // <br>{{$ctrl.data.week.start}} through {{$ctrl.data.week.end}} </strong></p-->\r\n                <p><strong>Öffnungszeiten für die aktuelle Woche</strong></p>\r\n                <!-- render the opening hour for a day in the current data object-->\r\n                <p ng-repeat=\"day in $ctrl.data.current\">\r\n                    <span class=\"day\">{{$ctrl.weekdayText(day.date)}}</span>\r\n                    <span ng-repeat=\"time in day.hours\" ng-if=\"day.hours.length>0 && day.hours[0].open != ''\">\r\n                        <span class=\"opening\" ng-if=\"time.open\">{{time.open}} - {{time.closed}}</span>                    \r\n                    </span>           \r\n                    <span ng-if=\"day.hours.length==0 || (day.hours.length>0 && day.hours[0].open == '')\" class=\"opening\">Geschlossen</span>\r\n                </p>                \r\n            </div>\r\n            <div>\r\n                <span ng-if='$ctrl.data.data.textinfo1'> \r\n                    <p>\r\n                        {{ $ctrl.data.data.textinfo1.value[$ctrl.language] }}\r\n                    </p>\r\n                </span>\r\n            </div>\r\n   \r\n            <div>\r\n                <span ng-if='$ctrl.data.data.infourl'> \r\n                    <p>\r\n                        <a target=\"_blank\" class=\"md-primoExplore-theme\" href=\"{{ $ctrl.data.data.infourl.value[$ctrl.language] }}\"> Weitere Information zu den Öffnungszeiten</a>\r\n                    </p>\r\n                </span>\r\n            </div>                     \r\n            <div ng-if=\"$ctrl.data.data.occupancy.value.maximum > 0\" class=\"occupancy\">\r\n                <div>\r\n                    <hr>\r\n                    <p><strong>Auslastung Arbeitsplätze: {{$ctrl.data.data.occupancy.value.current}} von {{$ctrl.data.data.occupancy.value.maximum}}</strong></p>\r\n                    <p><a href=\"https://rauminfo.zhbluzern.ch/\" target=\"_blank\">Rauminfo ZHB Luzern</a></p>\r\n                </div>\r\n            \r\n            </div>   \r\n\r\n        </div>\r\n        <div ng-if='$ctrl.data.data.image' flex=\"100\" flex-gt-sm=\"50\" class=\"flex-gt-sm-50 flex-100\">\r\n            <img style=\"width:90%;\" src=\"{{$ctrl.data.data.image.value[$ctrl.language]}}\">            \r\n        </div>\r\n         \r\n    </div>\r\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/searchAlsoBody/searchAlsoBody.html":
/*!***********************************************************!*\
  !*** ./src/components/searchAlsoBody/searchAlsoBody.html ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div ng-if=\"$ctrl.name === 'search_also'\" class=\"idslu-furthersearch\">\r\n    <div ng-hide=\"$ctrl.parentCtrl.parentCtrl.facetGroup.facetGroupCollapsed\">\r\n      <div class=\"section-content animate-max-height-variable\">\r\n        <div class=\"md-chips md-chips-wrap\">\r\n          <div ng-repeat=\"target in $ctrl.targets\" aria-live=\"polite\" class=\"md-chip animate-opacity-and-scale facet-element-marker-local4\">\r\n            <div class=\"md-chip-content layout-row\" role=\"button\" tabindex=\"9\">\r\n              <strong dir=\"auto\" title=\"{{ target.name }}\">\r\n                <a ng-href=\"{{ target.url + target.mapping($ctrl.search) }}\" target=\"_blank\"  title=\"{{ (target.tooltip | translate )}}\">\r\n                  <img ng-src=\"{{ target.img }}\" width=\"22\" height=\"22\" style=\"vertical-align:middle;padding-right:2px;\"> {{ target.name }}\r\n                </a>\r\n              </strong>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  ";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/factories/messageService.html":
/*!*******************************************!*\
  !*** ./src/factories/messageService.html ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div layout=\"row\" class=\"bar alert-bar lbs-message-service\" layout-align=\"center center\">\r\n  <span class=\"bar-text\" ng-bind-html=\"ctrl.message\" style=\"display:flex\"></span>\r\n  <md-button ng-show=\"ctrl.onAction\" (click)=\"ctrl.onAction()\" class=\"dismiss-alert-button zero-margin\" ng-class=\"md-icon-button\">\r\n    <!--span hide-xs>{{ctrl.actionLabel}}</span-->\r\n    <span>{{ctrl.actionLabel}}</span>\r\n  </md-button>\r\n  <md-divider></md-divider>\r\n  <md-button aria-label=\"{{::('nui.message.dismiss' | translate)}}\" (click)=\"ctrl.onClose()\" class=\"dismiss-alert-button zero-margin\" ng-class=\"md-icon-button\">\r\n    <span translate=\"nui.message.dismiss\"></span>\r\n    <!--span translate=\"nui.message.dismiss\" hide-xs></span-->\r\n  </md-button>\r\n</div>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/primo-explore-eth-openurl-interlibrary/js/eth-openurl-interlibrary.controller.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/primo-explore-eth-openurl-interlibrary/js/eth-openurl-interlibrary.controller.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ethOpenurlInterlibraryController: () => (/* binding */ ethOpenurlInterlibraryController)
/* harmony export */ });
class ethOpenurlInterlibraryController {

    constructor( $location, ethConfigService, ethOpenurlInterlibraryConfig ) {
        this.$location = $location;
        this.ethConfigService = ethConfigService;
        this.config = ethOpenurlInterlibraryConfig;
    }

    $onInit() {
        try{
            this.openurl = false;
            this.qs = '?';
            if (!this.$location.$$path) {
                console.error("***ETH*** ethOpenurlInterlibraryController.$onInit: $$path not available");
                return;
            }
            if(this.$location.$$path.indexOf('openurl')>-1){
                let s = this.$location.$$search;
                this.openurl = true;

                let oQs = {};
                if(s['rft.jtitle']){
                    oQs = {
                        'jtitle': s['rft.jtitle'],
                        'au': s['rft.aufirst'] + ' ' + s['rft.aulast'],
                        'atitle': s['rft.atitle'],
                        'date': s['rft.date'],
                        'issn': s['rft.issn'],
                        'volume': s['rft.volume'],
                        'pages': s['rft.pages'],
                        'rft_id': s['rft_id']
                    }
                }
                else if(s['title']){
                    let pages = '';
                    if(s['pages'] && s['pages'] != ''){
                        pages = s['pages'];
                    }
                    else if(s['spages'] && s['epages']){
                        pages = s['spages'] + '-' + s['epages'];
                    }

                    let issnOrIsbn = '';
                    if(s['issn'] && s['issn'] != ''){
                        issnOrIsbn = s['issn'];
                    }
                    else if(s['isbn'] && s['isbn'] != ''){
                        issnOrIsbn = s['isbn'];
                    }

                    oQs = {
                        'jtitle': s['title'],
                        'au': s['aufirst'] + ' ' + s['aulast'],
                        'atitle': s['atitle'],
                        'date': s['date'],
                        'issn': issnOrIsbn,
                        'volume': s['volume'],
                        'pages': pages,
                        'rft_id': s['id'],
                    }
                }
                let aQs = [];
                for (const item in oQs) {
                    if(oQs[item]){
                        aQs.push(item + '=' + encodeURIComponent(oQs[item]));
                    }
                }
                this.qs += aQs.join('&');
                document.querySelector('alma-htgi-svc').classList.add('eth-servicepage');
            }
        }
        catch(e){
            console.error("***ETH*** an error occured: ethOpenurlInterlibraryController $onInit\n\n");
            console.error(e.message);
        }
    }
}

ethOpenurlInterlibraryController.$inject = ['$location', 'ethConfigService', 'ethOpenurlInterlibraryConfig' ];


/***/ }),

/***/ "./node_modules/primo-explore-eth-openurl-interlibrary/js/eth-openurl-interlibrary.module.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/primo-explore-eth-openurl-interlibrary/js/eth-openurl-interlibrary.module.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ethOpenurlInterlibraryModule: () => (/* binding */ ethOpenurlInterlibraryModule)
/* harmony export */ });
/* harmony import */ var _services_eth_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/eth-config.service */ "./node_modules/primo-explore-eth-openurl-interlibrary/js/services/eth-config.service.js");
/* harmony import */ var _eth_openurl_interlibrary_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eth-openurl-interlibrary.config */ "./node_modules/primo-explore-eth-openurl-interlibrary/js/eth-openurl-interlibrary.config.js");
/* harmony import */ var _eth_openurl_interlibrary_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eth-openurl-interlibrary.controller */ "./node_modules/primo-explore-eth-openurl-interlibrary/js/eth-openurl-interlibrary.controller.js");
/* harmony import */ var _eth_openurl_interlibrary_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eth-openurl-interlibrary.html */ "./node_modules/primo-explore-eth-openurl-interlibrary/js/eth-openurl-interlibrary.html");
/**
* @ngdoc module
* @name ethOpenurlInterlibraryModule
*
* @description
*
* Customization of the "how to getit" section:<br>
* - add link to an interlibrary loan form, if page is a service page (openurl)
*
* <b>AngularJS Dependencies</b><br>
* Service /ja/services/eth-config.service.js {@link ETH.ethConfigService}<br>
*
* <b>CSS Dependencies</b><br>
* CSS /css/eth-openurl-interlibrary.css
*
*/





const ethOpenurlInterlibraryModule = angular
    .module('ethOpenurlInterlibraryModule', [])
        .factory('ethConfigService', _services_eth_config_service__WEBPACK_IMPORTED_MODULE_0__.ethConfigService)
        .factory('ethOpenurlInterlibraryConfig', _eth_openurl_interlibrary_config__WEBPACK_IMPORTED_MODULE_1__.ethOpenurlInterlibraryConfig)
        .controller('ethOpenurlInterlibraryController', _eth_openurl_interlibrary_controller__WEBPACK_IMPORTED_MODULE_2__.ethOpenurlInterlibraryController)
        .component('ethOpenurlInterlibraryComponent', {
            bindings: {afterCtrl: '<'},
            controller: 'ethOpenurlInterlibraryController',
            template: _eth_openurl_interlibrary_html__WEBPACK_IMPORTED_MODULE_3__.ethOpenurlInterlibraryHtml
        })


/***/ }),

/***/ "./node_modules/primo-explore-eth-openurl-interlibrary/js/services/eth-config.service.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/primo-explore-eth-openurl-interlibrary/js/services/eth-config.service.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ethConfigService: () => (/* binding */ ethConfigService)
/* harmony export */ });
/**
* @ngdoc service
* @key ethConfigService
*
* @description
*
* Service to get and handle informations from a module config:
* - getLabel()
* - getUrl()
* - getLanguage()
*
 */
const ethConfigService = ['$rootScope', function( $rootScope ){

    function getLanguage(){
        try{
            let sms = $rootScope.$$childHead.$ctrl.userSessionManagerService;
            if (!sms) {
                console.error("***ETH*** ethConfigService: userSessionManagerService not available");
                return 'en';
            }
            else{
                return sms.getUserLanguage() || $window.appConfig['primo-view']['attributes-map'].interfaceLanguage;
            }
        }
        catch(e){
            console.error("***ETH*** an error occured: ethConfigService.getLanguage():");
            console.error(e.message);
            return 'en';
        }
    }


    function getLabel(config, key) {
        try{
            let lang = this.getLanguage();
            if (!config.label[key]) {
                console.error("***ETH*** ethConfigService.getLabel: '" + key + "' not in config");
                return key;
            }
            if(config.label[key][lang]){
                return config.label[key][lang];
            }
            else{
                return config.label[key]['en'];
            }
        }
        catch(e){
            console.error("***ETH*** an error occured: ethConfigService.getLabel():");
            console.error(e.message);
            return '';
        }
    }

    function getUrl(config, key) {
        try{
            let lang = this.getLanguage();
            if (!config.url[key]) {
                console.error("***ETH*** ethConfigService.getUrl: '" + key + "' not in config");
                return '';
            }
            if(config.url[key][lang]){
                return config.url[key][lang];
            }
            else{
                return config.url[key]['en'];
            }
        }
        catch(e){
            console.error("***ETH*** an error occured: ethConfigService.getUrl():");
            console.error(e.message);
            return '';
        }
    }

    return {
        getLanguage: getLanguage,
        getLabel: getLabel,
        getUrl: getUrl
    };
}]


/***/ }),

/***/ "./node_modules/primo-explore-eth-person-card/js/eth-person-card.config.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/primo-explore-eth-person-card/js/eth-person-card.config.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ethPersonCardConfig: () => (/* binding */ ethPersonCardConfig)
/* harmony export */ });
const ethPersonCardConfig = function(){
    return {
        whitelistFindbuch:["ba.e-pics.ethz.ch","e-codices.unifr.ch",
                                "deutsche-biographie.de", "deutsche-digitale-bibliothek.de",
                                "www.hdg.de/lemo/html/biografien/","beacon.findbuch.de/gnd-resolver/pw_tls/", "www.perlentaucher.de/autor/","archinform.net/gnd/",
                                "www.gutenberg.org/ebooks/author/","beacon.findbuch.de/gnd-resolver/pw_mactut/","beacon.findbuch.de/gnd-resolver/pw_imdb/"
                            ],
        whitelistMetagrid: ["hallernet", "fotostiftung", "sikart","elites-suisses-au-xxe-siecle","bsg", "dodis", "helveticarchives", "helveticat", "hls-dhs-dss", "histoirerurale","lonsea","ssrq","alfred-escher","geschichtedersozialensicherheit"],
        sourcesMetagrid: {
            label: {
                'hallernet': {
                    de: 'Editions- und Forschungsplattform hallerNet',
                    en: 'Editions- und Forschungsplattform hallerNet',
                    fr: 'Editions- und Forschungsplattform hallerNet',
                    it: 'Editions- und Forschungsplattform hallerNet'
                },
                'fotostiftung': {
                    de: 'Fotostiftung Schweiz',
                    en: 'Fotostiftung Schweiz',
                    fr: 'Fotostiftung Schweiz',
                    it: 'Fotostiftung Schweiz'
                },
                'sikart': {
                    de: 'SIKART',
                    en: 'SIKART',
                    fr: 'SIKART',
                    it: 'SIKART'
                },
                'elites-suisses-au-xxe-siecle': {
                    de: 'Schweizerische Eliten im 20. Jahrhundert',
                    en: 'Swiss elites database',
                    fr: 'Elites suisses au XXe siècle',
                    it: 'Elites suisses au XXe siècle'
                },
                'bsg': {
                    de: 'Bibliographie der Schweizergeschichte',
                    en: 'Bibliography on Swiss History',
                    fr: 'Bibliographie de l\'histoire suisse',
                    it: 'Bibliografia della storia svizzera'

                },
                'dodis': {
                    de: 'Diplomatische Dokumente der Schweiz',
                    en: 'Diplomatic Documents of Switzerland',
                    fr: 'Documents diplomatiques suisses',
                    it: 'Documenti diplomatici svizzeri'
                },
                'helveticat': {
                    de: 'Helveticat',
                    en: 'Helveticat',
                    fr: 'Helveticat',
                    it: 'Helveticat'
                },
                'hls-dhs-dss': {
                    de: 'Historisches Lexikon der Schweiz',
                    en: 'Historical Dictionary of Switzerland',
                    fr: 'Dictionnaire historique de la Suisse',
                    it: 'Dizionario storico della Svizzera'
                },
                'histoirerurale': {
                    de: 'Archiv für Agrargeschichte',
                    en: 'Archives of rural history',
                    fr: 'Archives de l\'histoire rurale',
                    it: 'Archivio della storia rurale'
                },
                'lonsea': {
                    de: 'Lonsea',
                    en: 'Lonsea',
                    fr: 'Lonsea',
                    it: 'Lonsea'
                },
                'ssrq': {
                    de: 'Sammlung Schweizerischer Rechtsquellen',
                    en: 'Collection of Swiss Law Sources',
                    fr: 'Collection des sources du droit suisse',
                    it: 'Collana Fonti del diritto svizzero'
                },
                'alfred-escher': {
                    de: 'Alfred Escher-Briefedition',
                    en: 'Alfred Escher letters edition',
                    fr: 'Edition des lettres Alfred Escher',
                    it: 'Edizione lettere Alfred Escher'
                },
                'geschichtedersozialensicherheit': {
                    de: 'Geschichte der sozialen Sicherheit',
                    en: 'Geschichte der sozialen Sicherheit',
                    fr: 'Histoire de la sécurité sociale',
                    it: 'Storia della sicurezza sociale'
                }
            }
        },
        label: {
            personCardLink: {
                de: 'Mehr Informationen zur Person',
                en: 'More informations'
            },
            closePersonCard: {
                de: 'Personenkarte schliessen',
                en: 'Close personcard'
            },
            imgLicense: {
                de: 'Lizenz für das Bild siehe',
                en: 'Information regarding the license status of embedded media files',
            },
            moreInformations: {
                de: 'Mehr Informationen zur Person',
                en: 'More information about the person'
            },
            infoGndWd: {
                de: 'Informationen aus Wikidata und der GND',
                en: 'Information from Wikidata and the GND'
            },
            archiveLinks: {
                de: 'Links in Archive',
                en: 'Links in archives'
            },
            researcherProfile: {
                de: 'Forscherprofile via IDs aus Wikidata',
                en: 'Researcher profiles via IDs from Wikidata'
            },
            linkOrcid: {
                de: 'ORCID Profil',
                en: 'ORCID record'
            },
            linkPublon: {
                de: 'Publons Profil',
                en: 'Publons profile'
            },
            linkScholar: {
                de: 'Google Scholar Profil',
                en: 'Google Scholar profile'
            },
            linkScopus: {
                de: 'Scopus author details',
                en: 'Scopus author details'
            },
            linkResearchgate: {
                de: 'ResearchGate Profil',
                en: 'ResearchGate profile'
            },
            linkMendeley: {
                de: 'Mendeley Profil',
                en: 'Mendeley profile'
            },
            linkDimension: {
                de: 'Dimensions Profil',
                en: 'Dimensions profile'
            },
            linksWD: {
                de: 'Links aus Wikidata',
                en: 'Links from Wikidata'
            },
            linksMetagrid: {
                de: 'Links von Metagrid',
                en: 'Links from Metagrid'
            },
            linksFindbuch: {
                de: 'Links von beacon.findbuch',
                en: 'Links from beacon.findbuch'
            },
            linksFindbuchHint1: {
                de: 'Links von dem SeeAlso-Service',
                en: 'Links from the SeeAlso-Service'
            },
            linksFindbuchHint2: {
                de: 'der auf',
                en: 'which is based on'
            },
            linksFindbuchHint3: {
                de: 'basiert',
                en: ''
            },
            born: {
                de: 'Geboren',
                en: 'Born'
            },
            died: {
                de: 'Gestorben',
                en: 'Died'
            }
        }
    }
}


/***/ }),

/***/ "./node_modules/primo-explore-eth-person-card/js/eth-person-card.controller.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/primo-explore-eth-person-card/js/eth-person-card.controller.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ethPersonCardController: () => (/* binding */ ethPersonCardController)
/* harmony export */ });
class ethPersonCardController {
    // 99117239392005503 - multiple persons External Data
    // 990066667580205503 or 991130796959705501 - Alma
    // 991102492829705501 - multiple persons Alma
    constructor( ethConfigService, ethPersonCardConfig, ethPersonCardService, $scope, $compile, $anchorScroll, $location) {
        this.ethConfigService = ethConfigService;
        this.config = ethPersonCardConfig;
        this.ethPersonCardService = ethPersonCardService;
        this.$scope = $scope;
        this.$compile = $compile;
        this.$anchorScroll = $anchorScroll;
        this.$location = $location;
    }

    $onInit() {
        try{
            this.parentCtrl = this.afterCtrl.parentCtrl;
            this.lang = this.ethConfigService.getLanguage();
            this.doCheck = true;
            // array of gnd ids in the details section
            this.gndIds = [];
            // array of person objects
            this.persons = [];
        }
        catch(e){
            console.error("***ETH*** an error occured: ethPersonCardController.$onInit()\n\n");
            console.error(e.message);
        }
    }

    $doCheck() {
        try{
            // wait until details informations are loaded
            if(!this.parentCtrl._details || !this.doCheck)
            {
                return;
            }
            // parentCtrl._details is loaded -> work should be done only once
            this.doCheck = false;
            let linktext = this.ethConfigService.getLabel(this.config, 'personCardLink');

            // filter gnd links (Alma) and texts (ED: name: gndid)
            let aLds03Details = this.parentCtrl._details.filter( d => {
                if(d.label === 'lds03'){return true;}
                else {return false;}
            })
            // no gnd links or texts in details section
            if(aLds03Details.length === 0){return;}

            // extract gndids from links or texts
            // and push it to array this.gndIds
            aLds03Details[0].values[0].values.forEach( l => {
                // gnd link
                if(l.indexOf('href="http://d-nb.info/gnd/')>-1){
                    let href1 = l.substring(l.indexOf('href="') + 6);
                    let href = href1.substring(0,href1.indexOf('"'));
                    let gnd = href.substring(href.lastIndexOf('/') + 1)
                    this.gndIds.push(gnd);
                }
                // gnd text (name: gndid)
                else if (l.indexOf(': ') > -1) {
                    let part = l.substring(l.indexOf(': ') + 2);
                    if(part.indexOf('(DE-588)') > -1){
                        this.gndIds.push(part.replace('(DE-588)',''));
                    }
                    else{
                        this.gndIds.push(part);
                    }
                }
            })
            // request for informations from various providers
            this.gndIds.forEach(gnd => {
                this.ethPersonCardService.getPerson(gnd, this.lang)
                    .then((data) => {
                        try{
                            if(!data || !data.gnd || !data.results || data.results.length === 0)
                            {
                                return;
                            }
                            // construct a person object from different data sources
                            let p = this.ethPersonCardService.processPersonsResponse(data.results, this.ethConfigService, this.config, this.lang);
                            // is p realy a person (or a subject ...)?
                            if(p.gnd && ((p.entityfacts && p.entityfacts.preferredName) || (p.wiki &&p.wiki.links) || (p.findbuchLinks && p.findbuchLinks.length > 0) || (p.metagridLinks && p.metagridLinks.length > 0))  && !document.getElementById('personcard' + p.gnd)){
                                // push to person object array
                                // which is used for template rendering
                                this.persons.push(p);
                                // insert a person card toggle link next to the GND link
                                // ALMA: GND Link
                                let aGNDLinks = document.querySelectorAll(".item-details-element a[href='http://d-nb.info/gnd/" + p.gnd + "']");
                                if(aGNDLinks.length > 0){
                                    aGNDLinks.forEach(a => {
                                        a.parentNode.classList.add("eth-personcard-link-row");
                                        p.detailsGndLink = a;
                                    });
                                    if(p.detailsGndLink){
                                        let html = `
                                        <md-button id="personcardlink${p.gnd}" class="eth-personcard-link md-primary" ng-click="$ctrl.toggleCard('${p.gnd}')" aria-controls="personcard${p.gnd}" aria-expanded="false">
                                            <span>${linktext}</span>
                                            <prm-icon link-arrow external-link icon-type="svg" svg-icon-set="primo-ui" icon-definition="chevron-right"></prm-icon>
                                            <div class="personcard-link__down"/>
                                        </md-button>
                                        `;
                                        angular.element(p.detailsGndLink).after(this.$compile(html)(this.$scope));
                                    }
                                }
                                else{
                                    // External Data: Gnd part of text
                                    let aDetailsParts = Array.from(document.querySelectorAll('prm-service-details div[ng-repeat]'));
                                    let aGNDParts = aDetailsParts.filter(e => {
                                        let label = e.querySelector("[data-details-label]");
                                        if(label && label.getAttribute("data-details-label") === "lds03"){
                                            return true;
                                        }
                                        else{
                                            return false;
                                        }
                                    })
                                    if(aGNDParts.length === 0){
                                        return;
                                    }
                                    let aSpan = aGNDParts[0].querySelectorAll(".item-details-element [ng-show='!value.isLinkable']  span");
                                    aSpan.forEach(s => {
                                        if(s && s.textContent && s.textContent.indexOf(p.gnd) > -1){
                                            if(!document.getElementById('personpage' + p.gnd)){
                                                s.parentNode.classList.add("eth-personcard-link-row");
                                                p.detailsGndLink = s;
                                                let html = `
                                                <md-button id="personcardlink${p.gnd}" class="eth-personcard-link md-primary" ng-click="$ctrl.toggleCard('${p.gnd}')" aria-controls="personcard${p.gnd}" aria-expanded="false">
                                                    <span>${linktext}</span>
                                                    <prm-icon link-arrow external-link icon-type="svg" svg-icon-set="primo-ui" icon-definition="chevron-right"></prm-icon>
                                                    <div class="personcard-link__down"/>
                                                </md-button>
                                                `;
                                                angular.element(p.detailsGndLink).after(this.$compile(html)(this.$scope));
                                            }
                                        }
                                    })
                                }
                            }
                        }
                        catch(e){
                            console.error("***ETH*** an error occured: ethPersonCardController:ethPersonCardService.getPerson(): \n\n");
                            console.error(e.message);
                            throw(e);
                        }
                    });
            });
        }
        catch(e){
            console.error("***ETH*** an error occured: ethPersonCardController.$doCheck()\n\n");
            console.error(e.message);
        }
    }

    toggleCard(gnd){
        let cont = document.getElementById('personcard' + gnd);
        if(!cont)return;
        let link = document.getElementById('personcardlink' + gnd);
        angular.element(cont).toggleClass('eth-person__facts-visible');
        angular.element(link).toggleClass('eth-personcard-link-opened');
        if(angular.element(link).hasClass('eth-personcard-link-opened')){
            this.scrollTo('personcard' + gnd + '-anchor');
            angular.element(link).attr('aria-expanded','true');
        }
        else{
            angular.element(link).attr('aria-expanded','false');
        }
        return;
    }

    scrollTo(anchorName){
        this.$anchorScroll.yOffset = 200;
        this.$anchorScroll(anchorName);
        return;
    }
}

ethPersonCardController.$inject = ['ethConfigService', 'ethPersonCardConfig', 'ethPersonCardService', '$scope', '$compile', '$anchorScroll', '$location'];


/***/ }),

/***/ "./node_modules/primo-explore-eth-person-card/js/eth-person-card.module.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/primo-explore-eth-person-card/js/eth-person-card.module.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ethPersonCardModule: () => (/* binding */ ethPersonCardModule)
/* harmony export */ });
/* harmony import */ var _services_eth_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/eth-config.service */ "./node_modules/primo-explore-eth-person-card/js/services/eth-config.service.js");
/* harmony import */ var _eth_person_card_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eth-person-card.config */ "./node_modules/primo-explore-eth-person-card/js/eth-person-card.config.js");
/* harmony import */ var _eth_person_card_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eth-person-card.html */ "./node_modules/primo-explore-eth-person-card/js/eth-person-card.html");
/* harmony import */ var _eth_person_card_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eth-person-card.service */ "./node_modules/primo-explore-eth-person-card/js/eth-person-card.service.js");
/* harmony import */ var _eth_person_card_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eth-person-card.controller */ "./node_modules/primo-explore-eth-person-card/js/eth-person-card.controller.js");
/**
* @ngdoc module
* @name ethPersonCardModule
*
* @description
*
* - enhances fullview by person cards
* - based on gnd id in lds03
* - checks beacon.findbuch, metagrid, entityfacts (DNB), wikidata for person informations and links
*
* <b>AngularJS Dependencies</b><br>
* Service ./services {@link ETH.ethConfigService}<br>
* Service {@link ETH.ethPersonCardConfig}<br>
* Service {@link ETH.ethPersonCardService}<br>
*
*
* <b>CSS/Image Dependencies</b><br>
* CSS css/eth-person-card.css
* IMG img/chevron_down.png
* IMG img/close1.png
* IMG img/close2.png
*
*
*/






const ethPersonCardModule = angular
    .module('ethPersonCardModule', [])
        .factory('ethConfigService', _services_eth_config_service__WEBPACK_IMPORTED_MODULE_0__.ethConfigService)
        .factory('ethPersonCardConfig', _eth_person_card_config__WEBPACK_IMPORTED_MODULE_1__.ethPersonCardConfig)
        .factory('ethPersonCardService', _eth_person_card_service__WEBPACK_IMPORTED_MODULE_3__.ethPersonCardService)
        .controller('ethPersonCardController', _eth_person_card_controller__WEBPACK_IMPORTED_MODULE_4__.ethPersonCardController)
        .component('ethPersonCardComponent',{
            bindings: {afterCtrl: '<'},
            controller: 'ethPersonCardController',
            template: _eth_person_card_html__WEBPACK_IMPORTED_MODULE_2__.ethPersonCardHtml
        })
        .config(['$sceDelegateProvider', ($sceDelegateProvider) => {
            let whitelist = $sceDelegateProvider.resourceUrlWhitelist();
            $sceDelegateProvider.resourceUrlWhitelist( whitelist.concat([
                        'https://beacon.findbuch.de/seealso/pnd-aks**'
                    ]));
          }]);


/***/ }),

/***/ "./node_modules/primo-explore-eth-person-card/js/eth-person-card.service.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/primo-explore-eth-person-card/js/eth-person-card.service.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ethPersonCardService: () => (/* binding */ ethPersonCardService)
/* harmony export */ });
const ethPersonCardService = ['$http', '$q', function($http, $q){

    function getPerson(gnd, lang){
        // promise for Metagrid
        let url1 = "https://api.metagrid.ch/search?group=1&skip=0&take=50&provider=gnd&query=" + gnd;
        let promise1 = $http.get(url1)
            .then(function (response) {
                return response;
            });

        // promise for Entityfacts
        let url2 = "https://hub.culturegraph.org/entityfacts/" + gnd;
        let promise2 = $http.get(url2)
            .then(function (response) {
                return response;
            });

        // promise for beacon.findbuch - only jsonp, not get
        const url3 = "https://beacon.findbuch.de/seealso/pnd-aks?format=seealso&id=" + gnd;
        let promise3 = $http.jsonp(url3)
        .then(function (response) {
            return response;
        });

        // promise for Wikidata
        let sparqlQuery1 = `SELECT ?item ?itemLabel ?itemDescription ?birth ?death ?birthplaceLabel ?deathplaceLabel ?image ?gnd ?sfa ?hls ?loc ?archived ?wc ?orcid ?publonid ?scholar ?scopus ?researchgate ?mendeley ?dimension ?ordinal
                (group_concat(DISTINCT(?aliasLabel) ;separator = "|") as ?aliasList )
        WHERE {
          ?item wdt:P227 "${gnd}".
          ?item wdt:P31 wd:Q5.
          OPTIONAL {?item wdt:P569 ?birth.}
          OPTIONAL {?item wdt:P19 ?birthplace.}
          OPTIONAL {?item wdt:P570 ?death.}
          OPTIONAL {?item wdt:P20 ?deathplace.}
          OPTIONAL {?item wdt:P18 ?image.}
          OPTIONAL {?item wdt:P227 ?gnd.}
          OPTIONAL {?item wdt:P3889 ?sfa.}
          OPTIONAL {?item wdt:P902 ?hls.}
          OPTIONAL {?item wdt:P244 ?loc.}
          OPTIONAL {?item wdt:P485 ?archived.}
          OPTIONAL {?item wdt:P373 ?wc.}
          OPTIONAL {?item wdt:P496 ?orcid.}
          OPTIONAL {?item wdt:P3829 ?publonid.}
          OPTIONAL {?item wdt:P1960 ?scholar.}
          OPTIONAL {?item wdt:P1153 ?scopus.}
          OPTIONAL {?item wdt:P2038 ?researchgate.}
          OPTIONAL {?item wdt:P3835 ?mendeley.}
          OPTIONAL {?item wdt:P6178 ?dimension.}

          OPTIONAL {?item (rdfs:label|skos:altLabel|wdt:P1449) ?alias.}
          SERVICE wikibase:label { bd:serviceParam wikibase:language "${lang}".
                                  ?alias rdfs:label ?aliasLabel .
                                  ?item schema:description ?itemDescription .
                                  ?item rdfs:label ?itemLabel .}
        }
        GROUP BY ?item ?itemLabel ?itemDescription ?birth ?death ?birthplaceLabel ?deathplaceLabel ?image ?gnd ?sfa ?hls ?loc ?archived ?wc ?orcid ?publonid ?scholar ?scopus ?researchgate ?mendeley ?dimension ?ordinal
         ORDER BY ASC(?ordinal)
         LIMIT 100
        `;
        let url4 = "https://query.wikidata.org/sparql?query=" + sparqlQuery1;
        let promise4 = $http.get(url4)
            .then(function (response) {
                return response;
            });

        // promise for Wikidata 'archived at'
        let sparqlQuery2 = `
        SELECT ?gnd ?statement ?archived ?archivedLabel ?refnode  ?ref ?inventoryno
        where{
            ?item wdt:P227 "${gnd}".
            ?item p:P485 ?statement.
            ?item wdt:P227 ?gnd.
            ?statement ps:P485 ?archived.
            OPTIONAL{?statement pq:P217 ?inventoryno.}
            OPTIONAL{ ?statement prov:wasDerivedFrom ?refnode.
              ?refnode pr:P854 ?ref.
            }
            SERVICE wikibase:label { bd:serviceParam wikibase:language "${lang}". }
        }`;
        let url5 = "https://query.wikidata.org/sparql?query=" + sparqlQuery2;
        let promise5 = $http.get(url5)
            .then(function (response) {
                return response;
            });

        // a rejected promise (e.g. 404) should not reject all promises
        // https://gist.github.com/mzipay/78ce922b717d60899953
        return $q(function(resolve, reject) {
            $q.all(
                [
                promise1.then(keepResponse).catch(keepError),
                promise2.then(keepResponse).catch(keepError),
                promise3.then(keepResponse).catch(keepError),
                promise4.then(keepResponse).catch(keepError),
                promise5.then(keepResponse).catch(keepError)
                ]
            )
            .then(function(responses) {
                resolve(responses);
            })
        })
        .then(function(responses) {
            let resp = {};
            resp.gnd = gnd;
            resp.qid = [];
            resp.results = [];
            responses.forEach(r => {
                let o = {'provider':'','gnd':'','resp':{},'status':''};
                // entityfacts
                if(r.data && r.data['@context'] && r.data['@context'].indexOf('hub.culturegraph.org') > -1){
                    o.resp = r.data;
                    o.status = r.status;
                    o.gnd = r.data['@id'].substring(r.data['@id'].lastIndexOf('/') + 1);
                    o.provider = 'hub.culturegraph.org';
                    resp.results.push(o);
                }
                // metagrid
                else if(r.data && r.data.meta && r.data.meta.uri && r.data.meta.uri.indexOf('api.metagrid.ch') > -1){
                    o.resp = r.data;
                    o.status = r.status;
                    o.gnd = r.data.meta.uri.substring(r.data.meta.uri.indexOf('query=') + 6);
                    o.gnd = o.gnd.substring(0, o.gnd.indexOf('&'));
                    o.provider = 'api.metagrid.ch';
                    resp.results.push(o);
                }
                // findbuch pnd-aks
                else if(r.data && r.data.length === 4 && r.data[0] && r.data[0].indexOf('d-nb.info/gnd') > -1){
                    o.resp = r.data;
                    o.status = r.status;
                    o.gnd = r.data[0].substring(r.data[0].indexOf('gnd/') + 4);
                    o.provider = 'beacon.findbuch.de/seealso/pnd-aks';
                    resp.results.push(o);

                }
                // wikidata query service
                else if(r.data && r.data.head && r.data.head.vars) {
                    o.provider = 'query.wikidata.org';
                    o.status = r.status;
                    if(r.data.results.bindings.length > 0){
                        o.resp = r.data;
                        if(r.data.results.bindings[0].gnd){
                            o.gnd = r.data.results.bindings[0].gnd.value;
                        }
                        if(r.data.results.bindings[0].birth && r.data.results.bindings[0].item){
                            resp.qid.push(r.data.results.bindings[0].item.value.substring(r.data.results.bindings[0].item.value.lastIndexOf('/')+1));
                        }
                        resp.results.push(o);
                    }
                }

            })
            return resp;
        })
        .catch(function(e) {
            console.error("***ETH*** an error occured: ethPersonCardsService.getPerson(): \n\n");
            console.error(e.message);
            throw(e);
            return null;
        })

    }

    function processFindbuchResponse(findbuchResult, ethConfigService, config){
        try{
            let sourcesWhitelist = config.whitelistFindbuch;
            let whitelistedFindbuchLinks = [];
            let alreadyFoundUrls = [];

            for(var j = 0; j < findbuchResult[0].resp[1].length; j++){
                let isWhitelisted = false;
                let url = findbuchResult[0].resp[3][j];
                let path = url;
                if (url.indexOf("?")>-1){
                    path = url.substring(0, url.indexOf("?"));
                }
                // Für NDB und ADB nur einen Link
                if (url.indexOf("#ndbcontent")>-1){
                    path = url.substring(0, url.indexOf("#ndbcontent"))
                }
                else if (url.indexOf("#adbcontent")>-1){
                    path = url.substring(0, url.indexOf("#adbcontent"));
                }
                else if (url.indexOf("#allcontent")>-1){
                    path = url.substring(0, url.indexOf("#allcontent"));
                }
                else if (url.indexOf("#indexcontent")>-1){
                    path = url.substring(0, url.indexOf("#indexcontent"));
                }
                if (path.indexOf("http://www.deutsche-biographie.de")>-1){
                    path = path.replace(/http:/,'https:');
                }
                if (url.indexOf("gnd-resolver/pw_tls/")>-1){
                    path = url.substring(0, url.indexOf("pw_tls/") + 7);
                }
                for(var k=0;k<sourcesWhitelist.length;k++){
                    if(url.indexOf(sourcesWhitelist[k])>-1)
                            isWhitelisted = true;
                }
                if (!isWhitelisted || alreadyFoundUrls.indexOf(path)>-1)
                        continue;

                let label = findbuchResult[0].resp[1][j];
                whitelistedFindbuchLinks.push({'url': url, 'label': label});
                alreadyFoundUrls.push(path);
            }
            return whitelistedFindbuchLinks;
        }
        catch(e){
            console.error("***ETH*** an error occured: ethPersonCardsService.processFindbuchResponse(): \n\n");
            console.error(e.message);
            throw(e);
        }
    }

    function processEntityfactsResponse(entityfactsResult){
        try{
            let entityfacts = {};
            if (entityfactsResult[0].resp['@type'] !== 'person')return null;
            if(entityfactsResult[0].resp.preferredName)entityfacts.preferredName = entityfactsResult[0].resp.preferredName;
            if(entityfactsResult[0].resp.biographicalOrHistoricalInformation)entityfacts.biographicalOrHistoricalInformation = entityfactsResult[0].resp.biographicalOrHistoricalInformation;
            if(entityfactsResult[0].resp.professionOrOccupation)entityfacts.professionOrOccupation = entityfactsResult[0].resp.professionOrOccupation[0].preferredName;
            if(entityfactsResult[0].resp.placeOfBirth)entityfacts.placeOfBirth = entityfactsResult[0].resp.placeOfBirth[0].preferredName;
            if(entityfactsResult[0].resp.dateOfBirth)entityfacts.dateOfBirth = entityfactsResult[0].resp.dateOfBirth;
            if(entityfactsResult[0].resp.placeOfDeath)entityfacts.placeOfDeath = entityfactsResult[0].resp.placeOfDeath[0].preferredName;
            if(entityfactsResult[0].resp.dateOfDeath)entityfacts.dateOfDeath = entityfactsResult[0].resp.dateOfDeath;
            if(entityfactsResult[0].resp.depiction)entityfacts.depiction = entityfactsResult[0].resp.depiction;
            return entityfacts;
        }
        catch(e){
            console.error("***ETH*** an error occured: ethPersonCardsService.processEntityfactsResponse(): \n\n");
            console.error(e.message);
            throw(e);
        }
    }

    function processWikiResponse(wikiResult, ethConfigService, config){
        try{
            if(!wikiResult[0] || !wikiResult[0].resp.results.bindings || wikiResult[0].resp.results.bindings.length === 0){
                return;
            }
            let wiki = {};
            let binding = wikiResult[0].resp.results.bindings[0];
            wiki.qid = binding.item ? binding.item.value.substring(binding.item.value.lastIndexOf('/')+1) : null;
            wiki.label = binding.itemLabel ? binding.itemLabel.value : null;
            wiki.image_url = binding.image ? binding.image.value : null;
            wiki.description = binding.itemDescription ? binding.itemDescription.value : null;
            wiki.gnd = binding.gnd ? binding.gnd.value : null;
            wiki.birth = binding.birth ? binding.birth.value : null;
            wiki.death = binding.death ? binding.death.value : null;
            wiki.birthplace = binding.birthplaceLabel ? binding.birthplaceLabel.value : null;
            wiki.deathplace = binding.deathplaceLabel ? binding.deathplaceLabel.value : null;
            wiki.aVariants = binding.aliasList ? binding.aliasList.value.split('|') : null;
            if(wiki.aVariants && wiki.aVariants.indexOf(wiki.label) === -1){
                wiki.aVariants.unshift(wiki.label);
            }
            wiki.links = [];
            if(binding.item && binding.item.value)wiki.links.push({'url': binding.item.value, 'label': 'Wikidata'});
            if(binding.wc && binding.wc.value)wiki.links.push({'url': 'https://commons.wikimedia.org/wiki/Category:' + binding.wc.value , 'label': 'Wikimedia Commons'});
            if(binding.hls && binding.hls.value)wiki.links.push({'url': 'http://www.hls-dhs-dss.ch/textes/d/D' + binding.hls.value + '.php', 'label': 'Historisches Lexikon der Schweiz'});
            if(binding.gnd && binding.gnd.value)wiki.links.push({'url': 'https://d-nb.info/gnd/' + binding.gnd.value, 'label': 'GND (Gemeinsame Normdatei der Deutschen Nationalbibliothek)'});
            if(binding.sfa && binding.sfa.value)wiki.links.push({'url': 'https://www.swiss-archives.ch/archivplansuche.aspx?ID=' + binding.sfa.value, 'label': 'Schweizerisches Bundesarchiv'});
            if(binding.loc && binding.loc.value)wiki.links.push({'url': 'http://id.loc.gov/authorities/names/' + binding.loc.value + '.html', 'label': 'Library of Congress'});
            wiki.profiles = [];
            if(binding.orcid && binding.orcid.value)wiki.profiles.push({'url': 'https://orcid.org/' + binding.orcid.value, 'label': ethConfigService.getLabel(config, 'linkOrcid')});
            if(binding.publonid && binding.publonid.value)wiki.profiles.push({'url': 'https://publons.com/researcher/' + binding.publonid.value, 'label': ethConfigService.getLabel(config, 'linkPublon')});
            if(binding.scholar && binding.scholar.value)wiki.profiles.push({'url': 'https://scholar.google.com/citations?user=' + binding.scholar.value, 'label': ethConfigService.getLabel(config, 'linkScholar')});
            if(binding.scopus && binding.scopus.value)wiki.profiles.push({'url': 'https://www.scopus.com/authid/detail.uri?authorId=' + binding.scopus.value, 'label': ethConfigService.getLabel(config, 'linkScopus')});
            if(binding.researchgate && binding.researchgate.value)wiki.profiles.push({'url': 'https://www.researchgate.net/profile/' + binding.researchgate.value, 'label': ethConfigService.getLabel(config, 'linkResearchgate')});
            if(binding.mendeley && binding.mendeley.value)wiki.profiles.push({'url': 'https://mendeley.com/profiles/' + binding.mendeley.value, 'label': ethConfigService.getLabel(config, 'linkMendeley')});
            if(binding.dimension && binding.dimension.value)wiki.profiles.push({'url': 'https://app.dimensions.ai/discover/publication?and_facet_researcher=ur.' + binding.dimension.value, 'label': ethConfigService.getLabel(config, 'linkDimension')});
            return wiki;
        }
        catch(e){
            console.error("***ETH*** an error occured: ethPersonCardsService.processWikiResponse(): \n\n");
            console.error(e.message);
            throw(e);
        }
    }

    function processwikiArchivesAtResponse(wikiResult){
        try{
            let wikiArchivesAtLinks = [];
            let bindings = wikiResult[0].resp.results.bindings;
            for(let i = 0; i < bindings.length; i++){
                let url = bindings[i].ref ? bindings[i].ref.value: null;
                let label =  bindings[i].archivedLabel ? bindings[i].archivedLabel.value : null;
                let inventoryno =  bindings[i].inventoryno ? bindings[i].inventoryno.value : null;
                wikiArchivesAtLinks.push({'url': url, 'label': label, 'inventoryno': inventoryno});
            }
            return wikiArchivesAtLinks;
        }
        catch(e){
            console.error("***ETH*** an error occured: ethPersonCardsService.processwikiArchivesAtResponse(): \n\n");
            console.error(e.message);
            throw(e);
        }
    }

    function processMetagridResponse(metagridResult, ethConfigService, config){
        try{
            let sourcesWhitelist = config.whitelistMetagrid;
            let resources = metagridResult[0].resp.concordances[0].resources;
            let whitelistedMetagridLinks = [];
            let whitelistedMetagridLinksSorted = [];

            if (!!resources[0] && resources.length > 0) {
                let name = resources[0].last_name + ', ' + resources[0].first_name;

                for(var j = 0; j < resources.length; j++){
                    let resource = resources[j];
                    // https://api.metagrid.ch/providers.json
                    let slug = resource.provider.slug;
                    let url = resource.link.uri;
                    if (sourcesWhitelist.indexOf(slug) === -1) {
                        continue;
                    }
                    let label = slug;
                    try{
                        label = ethConfigService.getLabel(config.sourcesMetagrid, slug);
                    }
                    catch(e){}
                    whitelistedMetagridLinks.push({'slug': slug,'url': url, 'label': label});
                }
                // Dodis and HLS first
                let dodis = whitelistedMetagridLinks.filter(e => {
                    return e.slug === 'dodis';
                });
                whitelistedMetagridLinksSorted = whitelistedMetagridLinksSorted.concat(dodis);
                let hls = whitelistedMetagridLinks.filter(e => {
                    return e.slug === 'hls-dhs-dss';
                });
                whitelistedMetagridLinksSorted = whitelistedMetagridLinksSorted.concat(hls);
                let rest = whitelistedMetagridLinks.filter(e => {
                    return e.slug !== 'hls-dhs-dss' && e.slug !== 'dodis';
                });
                whitelistedMetagridLinksSorted = whitelistedMetagridLinksSorted.concat(rest);
            }
            return whitelistedMetagridLinksSorted;
        }
        catch(e){
            console.error("***ETH*** an error occured: ethPersonCardsService.processMetagridResponse(): \n\n");
            console.error(e.message);
            throw(e);
        }
    }

    function processPersonsResponse(results, ethConfigService, config, lang){
        try{
            if(!lang)lang = 'de';
            let person = {};
            person.gnd = "";
            let resultWithGnd = results.filter(e=>{
                return e.gnd && e.gnd != "";
            })
            if(resultWithGnd.length > 0){
                person.gnd = resultWithGnd[0].gnd;
            }
            // DNB Entityfacts
            let entityfactsResult = results.filter(e => {
                return e.provider === 'hub.culturegraph.org';
            });
            if(entityfactsResult.length > 0){
                person.entityfacts = this.processEntityfactsResponse(entityfactsResult);
            }

            // Metagrid
            let metagridResult = results.filter(e => {
                return e.provider === 'api.metagrid.ch';
            });
            if(metagridResult.length > 0 && metagridResult[0].resp.concordances && metagridResult[0].resp.concordances.length > 0){
                person.metagridLinks = this.processMetagridResponse(metagridResult, ethConfigService, config);
            }

            // Findbuch
            let findbuchResult = results.filter(e => {
                return e.provider === 'beacon.findbuch.de/seealso/pnd-aks';
            });
            if(findbuchResult.length > 0 && findbuchResult[0].resp && findbuchResult[0].resp[1]){
                person.findbuchLinks = this.processFindbuchResponse(findbuchResult, ethConfigService, config);
            }
            // Wikidata bio and Links
            let wikiResult = results.filter(e => {
                return e.provider === 'query.wikidata.org' && e.resp.head.vars.indexOf("birth") > -1;
            });
            if(wikiResult.length > 0){
                person.wiki = this.processWikiResponse(wikiResult, ethConfigService, config);
            }

            // Wikidata archives at
            let wikiArchivesAtResult = results.filter(e => {
                return e.provider === 'query.wikidata.org' && e.resp.head.vars.indexOf("refnode") > -1;
            });

            if(wikiArchivesAtResult.length > 0){
                person.wikiArchivesAtLinks = this.processwikiArchivesAtResponse(wikiArchivesAtResult);
            }
            return person;
        }
        catch(e){
            console.error("***ETH*** an error occured: ethPersonCardsService.processPersonsResponse(): \n\n");
            console.error(e.message);
            throw(e);
        }
    }

    /** @private */
    function keepResponse(response) {
        return response;
    }

    /** @private */
    function keepError(e) {
        console.error("ethPersonCardsService: rejected query: \n\n" + e.config.url);
        return e;
    }

    return {
        getPerson: getPerson,
        processWikiResponse: processWikiResponse,
        processwikiArchivesAtResponse: processwikiArchivesAtResponse,
        processFindbuchResponse: processFindbuchResponse,
        processEntityfactsResponse: processEntityfactsResponse,
        processMetagridResponse: processMetagridResponse,
        processPersonsResponse: processPersonsResponse
    };

}]


/***/ }),

/***/ "./node_modules/primo-explore-eth-person-card/js/services/eth-config.service.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/primo-explore-eth-person-card/js/services/eth-config.service.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ethConfigService: () => (/* binding */ ethConfigService)
/* harmony export */ });
/**
* @ngdoc service
* @key ethConfigService
*
* @description
*
* Service to get and handle informations from a module config:
* - getLabel()
* - getUrl()
* - getLanguage()
*
 */
const ethConfigService = ['$rootScope', function( $rootScope ){

    function getLanguage(){
        try{
            let sms = $rootScope.$$childHead.$ctrl.userSessionManagerService;
            if (!sms) {
                console.error("***ETH*** ethConfigService: userSessionManagerService not available");
                return 'en';
            }
            else{
                return sms.getUserLanguage() || $window.appConfig['primo-view']['attributes-map'].interfaceLanguage;
            }
        }
        catch(e){
            console.error("***ETH*** an error occured: ethConfigService.getLanguage():");
            console.error(e.message);
            return 'en';
        }
    }


    function getLabel(config, key) {
        try{
            let lang = this.getLanguage();
            if (!config.label[key]) {
                console.error("***ETH*** ethConfigService.getLabel: '" + key + "' not in config");
                return key;
            }
            if(config.label[key][lang]){
                return config.label[key][lang];
            }
            else{
                return config.label[key]['en'];
            }
        }
        catch(e){
            console.error("***ETH*** an error occured: ethConfigService.getLabel():");
            console.error(e.message);
            return '';
        }
    }

    function getUrl(config, key) {
        try{
            let lang = this.getLanguage();
            if (!config.url[key]) {
                console.error("***ETH*** ethConfigService.getUrl: '" + key + "' not in config");
                return '';
            }
            if(config.url[key][lang]){
                return config.url[key][lang];
            }
            else{
                return config.url[key]['en'];
            }
        }
        catch(e){
            console.error("***ETH*** an error occured: ethConfigService.getUrl():");
            console.error(e.message);
            return '';
        }
    }

    return {
        getLanguage: getLanguage,
        getLabel: getLabel,
        getUrl: getUrl
    };
}]


/***/ }),

/***/ "./src/components/libInfo/info/libInfo.json":
/*!**************************************************!*\
  !*** ./src/components/libInfo/info/libInfo.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"LULSO":{"url":"https://www.rzsinfo.ch/bibliotheken/zhb-uni/#Wzg3MDNd/","label":"Luzern ZHB Lesesaal Sondersammlung"},"LULES":{"url":"https://www.rzsinfo.ch/bibliotheken/zhb-uni/#Wzg3MDNd/","label":"Luzern ZHB Lesesaal Sempacherstrasse"},"LUHSW":{"url":"https://www.rzsinfo.ch/bibliotheken/hslu/#Wzg3MDVd/","label":"Luzern ZHB HSLU Wirtschaft"},"LUHSI":{"url":"https://www.rzsinfo.ch/bibliotheken/hslu/#Wzg3MTBd/","label":"Luzern ZHB HSLU Campus Zug-Rotkreuz"},"LUZHB":{"url":"https://www.rzsinfo.ch/bibliotheken/zhb-uni/#Wzg3MDNd/","label":"Luzern ZHB Sempacherstrasse"},"LUSBI":{"url":"https://www.rzsinfo.ch/bibliotheken/zhb-uni/#Wzg3MDFd/","label":"Luzern ZHB Speicherbibliothek"},"LUUHL":{"url":"https://www.rzsinfo.ch/bibliotheken/universitaet-luzern/#Wzg3MDJd/","label":"Luzern ZHB Uni/PH-Gebäude"},"LUNI3":{"url":"https://www.rzsinfo.ch/bibliotheken/universitaet-luzern/#Wzg3MDJd/","label":"Luzern ZHB Uni/PH-Gebäude (LUNI3)"},"LUPHL":{"url":"https://www.rzsinfo.ch/bibliotheken/universitaet-luzern/#Wzg3MDJd/","label":"Luzern ZHB Uni/PH-Gebäude (LUPHL)"},"LUHTA":{"url":"https://www.rzsinfo.ch/bibliotheken/hslu/#Wzg3MDZd/","label":"Luzern HSLU Technik & Architektur (LUHTA)"},"LUMHS":{"url":"https://www.rzsinfo.ch/bibliotheken/hslu/#Wzg3MDld/","label":"Luzern HSLU Musik (LUMHS)"},"LUHSA":{"url":"https://www.rzsinfo.ch/bibliotheken/hslu/#Wzg3MDRd/","label":"Luzern HSLU Soziale Arbeit (LUHSA)"},"LUHGK":{"url":"https://www.rzsinfo.ch/bibliotheken/hslu/#Wzg3MTFd/","label":"Luzern HSLU Design & Kunst (LUHGK)"},"LUPML":{"url":"https://www.rzsinfo.ch/bibliotheken/ph-pmz/#Wzg3MTVd/","label":"Luzern PMZ Luzern (LUPML)"},"LUPIL":{"url":"https://www.rzsinfo.ch/bibliotheken/ph-pmz/#Wzg3MTRd/","label":"Luzern Bilderbuchsammlung PH Luzern (LUPIL)"},"LUPHZ":{"url":"https://www.rzsinfo.ch/bibliotheken/ph-pmz/#Wzg3MTNd/","label":"Luzern Mediothek PH Zug (LUPHZ)"},"LUPHS":{"url":"https://www.rzsinfo.ch/bibliotheken/ph-pmz/#Wzg3MTJd/","label":"Luzern Medienzentrum PH Schwyz (LUPHS)"},"LUPHP":{"url":"https://www.rzsinfo.ch/bibliotheken/ph-pmz/#Wzg3MTJd/","label":"Luzern Medienzentrum PH Schwyz - Standort Pfäffikon (LUPHP)"},"LUDAL":{"url":"https://www.rzsinfo.ch/bibliotheken/spezialbibliotheken/#Wzg3Mjdd/","label":"Luzern Denkmalpflege & Archäologie Kanton Luzern (LUDAL)"},"LUDOL":{"url":"https://www.rzsinfo.ch/bibliotheken/spezialbibliotheken/#Wzg3MjZd/","label":"Luzern Haus zum Dolder Beromünster (LUDOL)"},"LUHLB":{"url":"https://www.rzsinfo.ch/bibliotheken/spezialbibliotheken/#Wzg3MjVd/","label":"Luzern Hugo-Loetscher-Bibliothek (LUHLB)"},"LUSSB":{"url":"https://www.rzsinfo.ch/bibliotheken/spezialbibliotheken/#Wzg3MjRd/","label":"Luzern Seminar St. Beat, Luzern (LUSSB)"},"LUKBW":{"url":"https://www.rzsinfo.ch/bibliotheken/spezialbibliotheken/#Wzg3MjRd/","label":"Luzern Kapuzinerbibliothek Wesemlin (LUKBW)"},"LUKBS":{"url":"https://www.rzsinfo.ch/bibliotheken/spezialbibliotheken/#Wzg3MjNd/","label":"Luzern Klosterbibliothek Sursee (LUKBS)"},"LUXUN":{"url":"https://www.rzsinfo.ch/bibliotheken/spezialbibliotheken/#Wzg3MjFd/","label":"Luzern Mediothek XUND (LUXUN)"},"LUNML":{"url":"https://www.rzsinfo.ch/bibliotheken/spezialbibliotheken/#Wzg3MjBd/","label":"Luzern Natur-Museum Luzern (LUNML)"},"LUSTA":{"url":"https://www.rzsinfo.ch/bibliotheken/spezialbibliotheken/#Wzg3MThd/","label":"Luzern Staatsarchiv Luzern (LUSTA)"},"LUSAR":{"url":"https://www.rzsinfo.ch/bibliotheken/spezialbibliotheken/#Wzg3MTdd/","label":"Luzern Stadtarchiv Luzern (LUSAR)"},"LUVOG":{"url":"https://www.rzsinfo.ch/bibliotheken/spezialbibliotheken/#Wzg3MTZd/","label":"Luzern Vogelwarte Sempach (LUVOG)"}}');

/***/ }),

/***/ "./src/components/libInfo/openHour/library_info.json":
/*!***********************************************************!*\
  !*** ./src/components/libInfo/openHour/library_info.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"name":"Luzern ZHB Sempacherstrasse","code":"LUSBI","is_open":true,"library_class":"bcu","library_type":[{"library_type":"Bibliothèque de lecture publique"},{"library_type":"Bibliothèque scientifique"},{"library_type":"Bibliothèque de l\'Université"},{"library_type":"Bibliothèque membre BiblioFR"}],"street":"Sempacherstrasse 10","addition":"CP","postcode":"6002","place":"Luzern","phone":"041 349 75 00","phone_2":"","email":"info@zhbluzern.ch","url":"https://www.zhbluzern.ch/","GPS":"46.8032625,7.1455338","image":"https://svw-uo1061bcu.unifr.ch/bcu_api/libraries/getLibraryImage/BCU","note":"La Bibliothèque cantonale et universitaire (BCU) de Fribourg est un lieu ouvert d’apprentissage, de valorisation du savoir et de ré-création.\\r\\n Au service de la population du canton de Fribourg et de la communauté universitaire, la BCU contribue à l’épanouissement de la vie intellectuelle et culturelle. Fondée en 1848, elle se compose d’une bibliothèque centrale ainsi que de 19 bibliothèques décentralisées sises à l’Université, et accessibles à l’ensemble des usagers.\\r\\n En 1976, le bâtiment de la BCU-Centrale datant de 1910 fait l’objet d’une première extension, qui à l’heure actuelle ne répond plus aux besoins croissants de la population estudiantine et du canton.","current_alerts":[],"openings":[{"date":"2022-08-09","weekday":1,"times":[{"open":"08:00","closed":"22:00"}]},{"date":"2022-08-10","weekday":2,"times":[{"open":"08:00","closed":"22:00"}]},{"date":"2022-08-11","weekday":3,"times":[{"open":"08:00","closed":"22:00"}]},{"date":"2022-08-12","weekday":4,"times":[{"open":"08:00","closed":"22:00"}]},{"date":"2022-08-13","weekday":5,"times":[{"open":"08:00","closed":"16:00"}]},{"date":"2022-08-14","weekday":6,"times":[]},{"date":"2022-08-15","weekday":0,"times":[{"open":"08:00","closed":"08:00","exception":"partly closed"}]}]}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _primo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./primo */ "./src/primo/index.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader */ "./src/loader.js");
/* harmony import */ var _factories_messageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/messageService */ "./src/factories/messageService.js");
/* harmony import */ var primo_explore_eth_openurl_interlibrary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primo-explore-eth-openurl-interlibrary */ "./node_modules/primo-explore-eth-openurl-interlibrary/js/eth-openurl-interlibrary.module.js");
/* harmony import */ var primo_explore_eth_person_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primo-explore-eth-person-card */ "./node_modules/primo-explore-eth-person-card/js/eth-person-card.module.js");
/* harmony import */ var _modules_pubSubInterceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/pubSubInterceptor */ "./src/modules/pubSubInterceptor/index.js");
/* harmony import */ var _modules_altmetric__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/altmetric */ "./src/modules/altmetric/index.js");
/* harmony import */ var _modules_matomo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/matomo */ "./src/modules/matomo/index.js");
/* harmony import */ var _modules_bibtip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/bibtip */ "./src/modules/bibtip/index.js");
/* harmony import */ var _modules_browzine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/browzine */ "./src/modules/browzine/index.js");
/* harmony import */ var _modules_remoteUrl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/remoteUrl */ "./src/modules/remoteUrl/index.js");
/*
  General entry to Primo custom methods

  (c)2020 KULeuven/LIBIS
  Mehmet Celik
*/














/* import './modules/userlike'; */

/* import 'primo-explore-eth-archives-getit'; */

/* import './swisscovery/41SLSP_NETWORK-VU1_UNION/js/slsp-edit-personal-details'; */
/* import './swisscovery/41SLSP_NETWORK-VU1_UNION/js/slsp-http-intercept-requests'; */

(function () {
  //let customType = 'centralCustom';
  let customType = 'viewCustom';
  let moduleList = ['remoteUrl', 'pubSubInterceptor', 'oc.lazyLoad', 'ngMaterial', 'angularLoad', 'matomo', 'browzine', 'altmetric', 'bibtip', 'ethOpenurlInterlibraryModule',, 'ethJournalsStartpageModule', 'ethPersonCardModule'];
  /* let moduleList = ['remoteUrl', 'pubSubInterceptor', 'oc.lazyLoad', 'ngMaterial', 'angularLoad',
                    'matomo', 'browzine', 'altmetric', 'bibtip', 'ethOpenurlInterlibraryModule',
                    'userlike', 'ethJournalsStartpageModule', 'ethPersonCardModule']; */

  let app = angular.module(customType, moduleList).service('MessageService', _factories_messageService__WEBPACK_IMPORTED_MODULE_2__["default"]);

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
  new _loader__WEBPACK_IMPORTED_MODULE_1__["default"]().load(customType);
  console.log(`Done initializing ${customType}`);
})();
})();

/******/ })()
;
//# sourceMappingURL=custom.js.map