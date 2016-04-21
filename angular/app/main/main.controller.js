angular
    .module('app')
    .controller('MainController', ['$scope', 'language-selector', 'localStorageService', '$location', LocationSelectorController]);

function LocationSelectorController($scope, languageSelector, localStorageService, $location) {
    var vm = this;

    vm.selectedLanguages = localStorageService.get('languagesMap');

    vm.onBack = function() {
        $location.path('/');
    }
}