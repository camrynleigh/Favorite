var app = angular.module("MyApp", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
            templateUrl: "Views/home.html",
            controller: "MainController",
        }).when("/about", {
            templateUrl: "Views/about.html",
            controller: "SecondController",
        }).when("/love", {
            templateUrl: "Views/love.html",
            controller: "ThirdController"
        })
        .otherwise({
            redirectTo: "/",
        })
});

app.controller("MainController", ["$scope", function ($scope) {

}])

app.controller("SecondController", ["$scope", function ($scope) {

}])

app.controller("ThirdController", ["$scope", function ($scope) {

}])