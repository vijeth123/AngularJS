    var app=angular.module('SubmitApp',['jcs-autoValidate']);
    app.controller('SubmitController', function($scope){
                                             $scope.topics = [];
                                             $scope.mySubmit = function(){
                                                                    $scope.topics.push($scope.topic);
                                                               }
                                        });