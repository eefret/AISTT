"use strict";

const electron = require('electron');
/**
 * Created by eefret on 4/21/16.
 */
angular.module('app').controller('ProjectTypeController', ['$location', ProjectTypeController]);

function ProjectTypeController($location) {
    var vm = this;
    vm.types = [{ 'name': 'Android', 'logo': 'content/img/android-logo.jpg', 'alt': 'Android Project' }, { 'name': 'Ios', 'logo': 'content/img/ios_logo.jpg', 'alt': 'IOS Project' }];
    vm.selectedType = false;
    vm.alerts = [];

    vm.setType = function (type) {
        if (type.name == 'Ios') {
            vm.alerts.push({ 'type': 'Error', message: 'Still not available Coming Soon!.' });
            return;
        }
        vm.selectedType = type;
        vm.alerts.push({ 'type': 'Success', message: type.name + ' selected.' });
    };

    vm.onPrevious = function () {
        vm.alerts.push({ 'type': 'Info', message: 'Good Bye!' });
        electron.app.quit();
    };
    vm.onNext = function () {
        if (!selectedType) {
            vm.alerts.push({ 'type': 'Error', message: 'You have to select a type.' });
            return;
        }
        $location.path('/main');
    };
}

//# sourceMappingURL=project-type.controller-compiled.js.map