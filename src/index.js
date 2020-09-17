import angular from 'angular';
import Loader from './loader';

let componentLoader = new Loader();
let app = angular.module('centralCustom', ['angularLoad']);
componentLoader.load(app);