angular
    .module('app')
    .controller('LocationSelectorController', ['$scope', 'language-selector', 'localStorageService', '$location', LocationSelectorController]);

function LocationSelectorController($scope, languageSelector, localStorageService, $location) {
    var vm = this;
    vm.projectPath = "";
    vm.languages = [];
    vm.selectedLanguages = [];
    vm.isValidProjectPath = false;
    vm.alerts = [];
    vm.translationsRoot = '/app/src/main/res/';

    vm.projectPathChanged = function (file) {
        vm.isValidProjectPath = false;
        vm.languages = [];
        vm.selectedLanguages = [];
        if (file != null) {
            vm.projectPath = file;
        }
        if (vm.projectPath != '') {
            localStorageService.set('projectLocation', vm.projectPath);
            languageSelector.getAvailableLanguages(vm.projectPath, vm.translationsRoot).then(function (languages) {
                vm.languages = languages;
                vm.isValidProjectPath = true;
            });
        }
    };
    vm.onLanguagesSelected = function() {
        localStorageService.set('languagesMap', vm.selectedLanguages);
    };

    vm.onPrevious = function() {
        localStorageService.clearAll();
        $location.path('/');
    };

    vm.onFinish = function() {
        vm.alerts = [];
        if (vm.selectedLanguages.length <= 0) {
            console.error('Should select at least one language');
            vm.alerts.push({'type': 'Error', message: 'You have to select at least one language.'});
        } else if(vm.projectPath.length <= 0) {
            vm.alerts.push({'type': 'Error', message: 'Your project path is not valid.'});
        }
        else {
            $location.path('/main');
        }
    };

    $scope.$watch('vm.projectPath', function(){
        vm.projectPathChanged(null);
    }, true);
}