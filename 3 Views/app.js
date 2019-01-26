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
                                                                  "Spring Boot",
                                                                  "REST Webservices",
                                                                  "JMS",
                                                                  "Java 8"
                                                                  ];
                                        });

 app.controller('NewArrivalController', function($scope){
                                            $scope.myTopicNames =[
                                                                  "Artificial Intelligence",
                                                                  "Machine Learning",
                                                                  "Spring Cloud",
                                                                  "AWS"
                                                                 ];
                                        });