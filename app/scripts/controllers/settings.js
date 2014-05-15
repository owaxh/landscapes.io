'use strict';

angular.module('landscapesApp')
    .controller('SettingsCtrl', function ($scope, User, AuthService) {
        $scope.errors = {};

        $scope.changePassword = function (form) {
            $scope.submitted = true;

            if (form.$valid) {
                AuthService.changePassword($scope.user.oldPassword, $scope.user.newPassword)
                    .then(function () {
                        $scope.message = 'Password successfully changed.';
                    })
                    .catch(function () {
                        form.password.$setValidity('mongoose', false);
                        $scope.errors.other = 'Incorrect password';
                    });
            }
        };
    });