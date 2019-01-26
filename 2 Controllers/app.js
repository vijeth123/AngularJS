var app = angular.module('MyApp', []);
app.controller('MyController', function($scope){
                                    $scope.myFirstName = 'Vijeth';
                                    $scope.myLastName = 'Kumar';
                                    $scope.myComments = "This is an Employee Registration form of the company XYZ.\nKindly request you to fill the form at the earliest.\n\nThank you"
                                    $scope.myTopicNames =["Spring Boot", "REST", "JMS",	"Java 8", "AWS"];
                                    $scope.getFullName = function(firstName, lastName){return firstName + ' ' + lastName};
                               })