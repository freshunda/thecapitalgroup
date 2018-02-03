angular.module('CapitalGroup.controllers', [])
    .controller('WelcomeController', ['$scope', '$http', '$location', 'SEOService', function ($scope, $http, $location, SEOService) {
        SEOService.setSEO({
            title: 'The Capital Group',
            image: 'http://' + $location.host() + '/images/CG_logo.png',
            url: $location.url(),
            description: 'The Capital Group'
        });

    }])
    .controller("GalleryController", ["$scope", "Gallery", "$location", "SEOService", function ($scope, Gallery, $location, SEOService) {
        $scope.galleries = Gallery.query();
		SEOService.setSEO({
			title: 'Gallery',
			image: 'http://' + $location.host() + '/images/CG_logo.png',
			url: $location.url(),
			description: 'The Capital Group Galleries'
		});
    }])
    
    .controller("ContactController", ["$scope", "$location", "SEOService", function ($scope, $location, SEOService) {
		SEOService.setSEO({
			title: 'Contact',
			image: 'http://' + $location.host() + '/images/CG_logo.png',
			url: $location.url(),
			description: 'The Capital Group Contact'
		});
	}])

    .controller('AboutController', ['$scope', '$http', '$location', 'SEOService', function ($scope, $http, $location, SEOService) {
        SEOService.setSEO({
            title: 'About',
            image: 'http://' + $location.host() + '/images/CG_logo.png',
            url: $location.url(),
            description: 'The Capital Group About'
        });
    }])

    .controller('LeadershipController', ['$scope', '$http', '$location', 'SEOService', function ($scope, $http, $location, SEOService) {
        SEOService.setSEO({
            title: 'Leadership',
            image: 'http://' + $location.host() + '/images/CG_logo.png',
            url: $location.url(),
            description: 'The Capital Group Leadership'
        });
    }])

    .controller('ProductController', ['$scope', '$location', 'SEOService', function ($scope, $location, SEOService) {
        SEOService.setSEO({
            title: 'Our Product',
            image: 'http://' + $location.host() + '/images/CG_logo.png',
            url: $location.url(),
            description: 'The Capital Group Product'
        });
    }])

    .controller('CareersController', ['$scope', '$location', 'SEOService', function ($scope, $location, SEOService) {
        SEOService.setSEO({
            title: 'Careers',
            image: 'http://' + $location.host() + '/images/CG_logo.png',
            url: $location.url(),
            description: 'The Capital Group Careers'
        });

        $scope.goToApply = function () {
            $location.path('/apply');
        }
    }])

    .controller('ApplyController', ['$scope', '$location', 'SEOService', function ($scope, $location, SEOService) {
        SEOService.setSEO({
            title: 'Apply',
            image: 'http://' + $location.host() + '/images/CG_logo.png',
            url: $location.url(),
            description: 'The Capital Group Apply Now'
        });
    }])

    .controller('MailingController', ['$scope', '$http', '$location', 'Mailing', 'SEOService', function ($scope, $http, $location, Mailing, SEOService) {
        SEOService.setSEO({
            title: 'Mailing List',
            image: 'http://' + $location.host() + '/images/CG_logo.png',
            url: $location.url(),
            description: 'The Capital Group Mailing List'
        });
        $scope.newContact = {
            firstname: '',
            lastname: '',
            fromEmail: '',
            phone: ''
        }
        $scope.mailingList = function () {
            var contact = new Mailing({
                firstname: $scope.newContact.firstname,
                lastname: $scope.newContact.lastname,
                fromEmail: $scope.newContact.fromEmail,
                phone: $scope.newContact.phone,
                subject: 'The Capital Group',
                content: 'Thank you for joining our mailing list.  Stay tuned for exciting information about The Capital Group'
            })
            contact.$save(function (success) {
                alert('Thank you for joining our mailing list');
                $location.path('/about');
            });
        }
    }])

    .controller('LoginController', ['$scope', '$location', 'UserService', 'SEOService', function ($scope, $location, UserService, SEOService) {
        UserService.me().then(function (success) {
            // redirect();
            console.log(success);
        })
        function redirect() {
            var dest = $location.search().p;
            if (!dest) { dest = '/admin'; }
            $location.search('p', null).path(dest);
        }

        // function redirect() {
        //     var dest = $location.search().p;
        //     if (!dest && success.role === 'admin') { dest = '/admin'; }
        //     else {
        //         { dest = '/'; }
        //     }
        //     $location.path(dest).search('p', null);
        // }


        $scope.login = function () {
            UserService.login($scope.email, $scope.password)
                .then(function () {
                    redirect();
                }, function (err) {
                    console.log(err);
                });
        }
        SEOService.setSEO({
            title: 'Login',
            image: 'http://' + $location.host() + '/images/CG_logo.png',
            url: $location.url(),
            description: 'Admin Login Page'
        });
    }])

    .controller('AdminController', ['$scope', '$location', 'UserService', 'SEOService', function ($scope, $location, UserService, SEOService) {
        UserService.requireLogin(true);
       

        SEOService.setSEO({
            title: 'Compose',
            image: 'http://' + $location.host() + '/images/CG_logo.png',
            url: $location.url(),
            description: 'The Capital Group'
        });
        $scope.logout = function () {
            UserService.logout().then(function () {
                $location.path('/');
            }), function (err) {
                console.log(err);
            }
        }
    }]);
