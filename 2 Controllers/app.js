var app = angular.module('MyApp', []);
app.controller('MyController', function($scope){
                                    $scope.myFirstName = 'Vijeth';
                                    $scope.myLastName = 'Kumar';
                                    $scope.myComments = "This is an Employee Registration form of the company XYZ.\nKindly request you to fill the form at the earliest.\n\nThank you"

                                    $scope.myTopicNames =[
                                    		{name: "Spring Boot"},
                                    		{name: "REST Webservices"},
                                    		{name: "JMS"},
                                    		{name: "Java 8"}];

                                    $scope.getFullName = function(firstName, lastName){return firstName + ' ' + lastName};
                               })