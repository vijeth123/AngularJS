var app = angular.module('shoppingApp', []);
app.controller('ShoppingController', function($scope, $http){

                                        $http({
                                            url : 'http://localhost:8080/shopping/company',
                                            method : 'GET',
                                        }).then(function(response){
                                                         $scope.company = response.data;
                                                   },
                                                   function(response){
                                                         console.log("Error Occurred......");
                                                         console.log("response is: "+response);
                                                   }
                                                  );

                                        $http({
                                            url : 'http://localhost:8080/shopping/items',
                                            method : 'GET',
                                        }).then(function(response){
                                                         console.log("Hello world items!");
                                                         $scope.items = response.data;
                                                   },
                                                   function(response){
                                                         console.log("Error Occurred......");
                                                         console.log("response is: "+response);
                                                   }
                                                  );
                                     });