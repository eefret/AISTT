angular
.module('app')
.directive('fileInput', fileInput);

function fileInput($compile) {
    var directive = {
        restrict: 'AE',
        link: link

    };
    return directive;
}

function link($scope, element, attrs) {
    element.bind('click', function(e){
        chooser = document.getElementById('file-chooser');
        chooser.click();
    })
    element = document.getElementById('file-chooser');
    element.onchange = function() {
        $scope.vm.projectPathChanged(element.files[0].path);
        $scope.$apply();
    }
}