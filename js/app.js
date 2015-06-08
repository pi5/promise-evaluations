var promiseApp = angular.module('promiseApp', []);

promiseApp.controller('MainController', function ($scope) {
    $scope.name = "PROMISE";
    $scope.openModal = function(event) {

        /* Open new entry dialog on pressing the 'n' key */
        if (event && event.keyCode == 78) {
            $('#newentry-button').click();
        }
    };

    $scope.evaluation_data = {
        responses: []
    };
});