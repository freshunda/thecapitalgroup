var app = angular.module('CapitalGroup', ['ngRoute', 'ngResource', 'ngStorage', 'ngAnimate', 'CapitalGroup.controllers', 'CapitalGroup.factories', 'CapitalGroup.services']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl: 'views/welcome.html',
            controller: 'WelcomeController'
        })
        .when('/product', {
            templateUrl: 'views/product.html',
            controller: 'ProductController'
        })
        .when('/leadership', {
            templateUrl: 'views/leadership.html',
            controller: 'LeadershipController'
        })
        .when('/gallery', {
            templateUrl: 'views/gallery.html',
            controller: 'GalleryController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        })
        .when('/training', {
            templateUrl: 'views/training.html',
            controller: 'TrainingController'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .when('/admin', {
            templateUrl: 'views/admin.html',
            controller: 'AdminController'
        })
        .when('/careers', {
            templateUrl: 'views/careers.html',
            controller: 'CareersController'
        })
        .when('/apply', {
            templateUrl: 'views/apply.html',
            controller: 'ApplyController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
