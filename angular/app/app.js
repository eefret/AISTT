(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'LocalStorageModule', 'ui.grid'])
        .config(routeConfig)
        .config(localStorageConfig);

    routeConfig.$inject = ['$routeProvider'];


    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', {
                title: 'Location Select',
                templateUrl: 'app/setup/location-selector.html',
                controller: 'LocationSelectorController',
                controllerAs: 'vm'
            })
            .when('/main', {
                    templateUrl: 'app/main/main.html',
                    controller: 'MainController',
                    controllerAs: 'vm'
                }
            )
    }

    function localStorageConfig(localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('AISTT');
    }
})();