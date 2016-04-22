"use strict";
const electron = require('electron');
/**
 * Created by eefret on 4/21/16.
 */
angular
    .module('app')
    .controller('ProjectTypeController', ['$location',  ProjectTypeController]);

function ProjectTypeController($location) {
    var vm = this;
    var types = [
        {'name': 'Android', 'logo': 'app/content/img/android-logo.jpg', 'alt': 'Android Project'},
        {'name': 'Ios', 'logo': 'app/content/img/ios-logo.jpg', 'alt': 'IOS Project'}];
    let  selectedType;

    vm.setType = function(type){
        if(type.name == 'Ios'){
            //TODO give message
            return;
        }
        selectedType = type;
    };

    vm.onPrevious = function () {
        //TODO say goodbye
        electron.app.quit();
    };
    vm.onNext = function () {
        if(selectedType){
            $location.path('/main');
        }
    };

}