angular
    .module('app')
    .controller('MainController', ['$scope', 'language-selector', 'localStorageService', '$location', '$xml', LocationSelectorController]);

function LocationSelectorController($scope, languageSelector, localStorageService, $location, $xml) {
    var vm = this;

    vm.selectedLanguages = [];
    vm.sampleLanguageJson = '';
    vm.projectPath = '';
    vm.defaultLanguage = [];

    vm.onBack = function() {
        $location.path('/');
    }

    var init = function($scope) {
        vm.projectPath = localStorageService.get('projectLocation');
        vm.selectedLanguages = localStorageService.get('languagesMap');
        languageObj = JSON.parse(vm.selectedLanguages[1]);
        console.log(languageObj.fileName)
        staticPath = vm.projectPath + '/app/src/main/res/values/strings.xml';
        $xml.toJSON(staticPath).then(function(data){
            vm.defaultLanguage = data;
        });
        staticPath = vm.projectPath + languageObj.fileName;
        $xml.toJSON(staticPath).then(function(data){
            vm.currentLanguage = data;
            vm.gridOptions = {  data: vm.defaultLanguage.resources.string};
        });
        vm.gridOptions = {data: null}
    }

    init();
}