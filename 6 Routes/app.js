var app = angular.module('tutorial',["ngRoute"]);

app.controller('SpringBootController', function($scope){
                                            $scope.topics = [
                                                {name: "Intro", description: "Spring Boot is an open source Java-based framework used to create a Micro Service"},
                                                {name: "Bootstrapping", description: "One of the ways to Bootstrapping a Spring Boot application is by using Spring Initializer."},
                                                {name: "Tomcat", description: "By using Spring Boot application, we can create a war file to deploy into the web server."}
                                            ];
                                       });

app.controller('Java8Controller', function($scope){
                                            $scope.topics = [
                                                {name: "Intro", description: "Java 8 is the most awaited and is a major feature release of Java programming language."},
                                                {name: "Lambda Expressions", description: "Lambda expression facilitates functional programming, and simplifies the development a lot."},
                                                {name: "Method References", description: "Method references help to point to methods by their names. A method reference is described using \"::\" symbol."}
                                            ];
                                  });

app.config(function($routeProvider){
                $routeProvider.when('/spring_boot', {templateUrl: 'spring_boot.html',controller: 'SpringBootController'})
                              .when('/java8', {templateUrl: 'java8.html', controller: 'Java8Controller'})
                              ;

           });