'use strict';

angular.module('landscapesApp')
    .controller('LoginCtrl', function ($scope, AuthService, $location) {
        $scope.user = {};
        $scope.errors = {};

        $scope.login = function(form) {
            $scope.submitted = true;

            if(form.$valid) {
                AuthService.login({
                    email: $scope.user.email,
                    password: $scope.user.password
                })
                    .then( function() {
                        // Logged in, redirect to home
                        $location.path('/');
                    })
                    .catch( function(err) {
                        err = err.data;
                        $scope.errors.other = err.message;
                    });
            }
        };
    });