// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var App = angular.module('scotcheApp', ['ngRoute']);

    App.config(function($routeProvider) {
            $routeProvider

                // route for the home page
                .when('/', {
                    templateUrl : 'pages/home.html',
                    controller  : 'mainController'
                })

                // route for the about page
                .when('/about', {
                    templateUrl : 'pages/about.html',
                    controller  : 'aboutController'
                })

                // route for the contact page
                .when('/contact', {
                    templateUrl : 'pages/contact.html',
                    controller  : 'contactController'
                })

                //route for the form
                .when('/forms', {
                    templateUrl :   'pages/form.html',
                    controller  :   'formController'
                });
        });