var promiseApp = angular.module('promiseApp', []);

promiseApp.controller('MainController', function ($scope) {
    $scope.name = "PROMISE";
    $scope.openModal = function(event) {

        /* Open new entry dialog on pressing the 'n' key */
        if (event && event.keyCode == 78) {
            $('#newentry-button').click();
        }
    };

    $scope.eventquestions = 5;

    $scope.evaluation_data = {
        responses: [],
        questions: $scope.eventquestions
    };

    $scope.range = function(min, max, step){
        step = step || 1;
        var input = [];
        for (var i = min; i <= max; i += step) input.push(i);
        return input;
    };


});