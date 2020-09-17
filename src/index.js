import Loader from './loader';

let componentLoader = new Loader();
let app = angualar.module('centralCustom', ['angularLoad'])
.run(($translate, $rootScope, $templateCache) => {
    console.log('in run');
});

componentLoader.load(app);