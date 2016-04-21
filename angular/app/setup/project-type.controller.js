/**
 * Created by eefret on 4/21/16.
 */
"use strict";
angular
    .module('app')
    .controller('ProjectTypeController', ['$location', LocationSelectorController]);

function LocationSelectorController($location) {
    var vm = this;
    var types = [
        {'name': 'Android', 'logo': 'app/content/img/android-logo.jpg'},
        {'name': 'Ios', 'logo': 'app/content/img/ios-logo.jpg'}];

    vm.onPrevious = function () {
        
    };
    vm.onNext = function () {
        $location.path('/main');
    };

}