var app = angular.module('libraryApp', ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider.when('/new',
                    {
                        templateUrl: 'newBooks.html',
                        controller: 'NewArrivalController'
                    })
                    .when('/exising',
                     {
                         templateUrl: 'existingBooks.html',
                         controller: 'ExistingBooksController'
                     })
                     .otherwise({redirectTo: '/exising'});
 });

 app.controller('ExistingBooksController', function($scope){
                                            $scope.myTopicNames =[
                                                                  {name: "Spring Boot"},
                                                                  {name: "REST Webservices"},
                                                                  {name: "JMS"},
                                                                  {name: "Java 8"}];
                                        });

 app.controller('NewArrivalController', function($scope){
                                            $scope.myTopicNames =[
                                                                  {name: "Artificial Intelligence"},
                                                                  {name: "Machine Learning"},
                                                                  {name: "Spring Cloud"},
                                                                  {name: "AWS"}
                                                                 ];
                                        });