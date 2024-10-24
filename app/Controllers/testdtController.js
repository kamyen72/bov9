'use strict';

angular.module('BackDeskView').controller('testdtController', [
    '$scope',
    '$rootScope',
    '$location',
    '$timeout',
    'localStorageService',
    'blockUI',
    'ngAuthSettings',
    'authService',
    'memberShipService',
    'systemConfigService',
    'transactionsService',
    'statementService',
    function ($scope, $rootScope, $location, $timeout, localStorageService, blockUI, ngAuthSettings, authService,
              memberShipService, systemConfigService, transactionsService, statementService) {

        $scope.changeConsole = function () {
            // Your function logic here
        };

        $scope.dataSource = []; // Initialize as an empty array

        $scope.init = function () {
            console.log("Data source before initialization:", $scope.dataSource);
            
            for (let i = 0; i < 200; i++) {
                var me = {
                    ID: i,
                    name: "name-" + i,
                    position: "position-" + i,
                    office: "office-" + i,
                    age: "age-" + i,
                    start_date: "start_date-" + i,
                    salary: "salary-" + i
                };
                $scope.dataSource.push(me);
            }

            // Log the number of records
            console.log("Now, my records:", $scope.dataSource.length);
        };

        $scope.init();

        // Call the init function after a short timeout
        $timeout(function() {
        $('#myDataTable').DataTable({
                // Use the AngularJS dataSource directly
                data: $scope.dataSource,
                columns: [
                    { data: 'ID' },
                    { data: 'name' },
                    { data: 'age' }
                ],
                pageLength: 10,
                lengthMenu: [
                    [10, 100, 1000, -1],
                    [10, 100, 1000, "All"]
                ]
            });
        }, 100);
    }
]);