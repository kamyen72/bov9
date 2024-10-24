﻿'use strict';

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
            
            // Generate mock data
            for (let i = 0; i < 200000; i++) {
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

        // Call the init function after a short timeout
        $timeout($scope.init, 100);
    }
]);