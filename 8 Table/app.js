var app = angular.module('table-app', []);
app.controller('table-controller', function($scope){
                                    $scope.topics = [
                                        {name: "Spring Boot", description: "Boot your application with single click!"},
                                        {name: "Java 8", description: "Lambda expressions, Streams, Optionals"},
                                        {name: "Git", description: "Store all your code repository with Git"},
                                        {name: "AWS", description: "Amazon webservice"}
                                    ];
                                });