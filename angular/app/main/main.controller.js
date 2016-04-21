angular
    .module('app')
    .controller('MainController', ['$scope', 'language-selector', 'localStorageService', '$location', '$xml', LocationSelectorController]);

function LocationSelectorController($scope, languageSelector, localStorageService, $location, $xml) {
    var vm = this;

    vm.selectedLanguages = [];
    vm.sampleLanguageJson = '';
    vm.projectPath = '';

    vm.onBack = function() {
        $location.path('/');
    }

    var init = function($scope) {
        vm.projectPath = localStorageService.get('projectLocation');
        vm.selectedLanguages = localStorageService.get('languagesMap');
        languageObj = JSON.parse(vm.selectedLanguages[0]);
        staticPath = vm.projectPath + languageObj.fileName;
        $xml.toJSON(staticPath).then(function(data){
            vm.sampleLanguageJson = data;
        });
    }

    init();
}