var promiseApp = angular.module('promiseApp', []);

promiseApp.controller('MainController', function ($scope) {
    $scope.name = "PROMISE";
    $scope.modalActive = false;
    $scope.openModal = function(event) {
        /* Open new entry dialog on pressing the 'n' key */
        if (event && event.keyCode == 78 && !$scope.modalActive) {
            $('#newentry-button').click();
        }
    };

    $('#form').on('hidden.bs.modal', function(event) {
       $scope.modalActive = false;
       console.log('Modal Closed');
    });

    $('#form').on('show.bs.modal', function(event) {
        $scope.modalActive = true;
        console.log('Modal Opened');
    });

    $scope.event_details = {
        eventquestions : 5
    };

    $scope.evaluation_data = {
        responses: [],
        questions: $scope.eventquestions
    };

    $scope.blankEntry = {
        response :[]
    };

    $scope.entry = {
        response :[]
    };
    $scope.range = function(min, max, step){
        step = step || 1;
        var input = [];
        for (var i = min; i <= max; i += step) input.push(i);
        return input;
    };

    $scope.addEntry = function() {
        console.log($scope.entry);
        $scope.evaluation_data.responses.push($scope.entry);
        $scope.entry = angular.copy($scope.blankEntry);
        $('#newentry-button').click();
    }

});