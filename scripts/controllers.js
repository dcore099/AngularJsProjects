 // create the controller and inject Angular's $scope
    angular.module('scotcheApp')
    .controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look yoo !';
    });

    angular.module('scotcheApp')
    .controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    angular.module('scotcheApp')
    .controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

    angular.module('scotcheApp')
    .controller('formController', function($scope){
        $scope.message = "Form filler in bootstrap"
    });