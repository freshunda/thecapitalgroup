angular.module('CapitalGroup.controllers', [])
    .controller('WelcomeController', ['$scope', '$http', '$location', 'SEOService', function ($scope, $http, $location, SEOService) {
        SEOService.setSEO({
            title: 'The Capital Group',
            image: 'http://' + $location.host() + '/images/CG_logo.png',
            url: $location.url(),
            description: 'The Capital Group'
        });

        $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
            window.scrollSuperReveal = new scrollReveal({reset: true});  
        });


    }])
    .controller("GalleryController", ["$scope", "Gallery", "$location", "SEOService", function ($scope, Gallery, $location, SEOService) {
        //$scope.galleries = Gallery.query();
		SEOService.setSEO({
			title: 'The Capital Group Gallery',
			image: 'http://' + $location.host() + '/images/CG_logo.png',
			url: $location.url(),
			description: 'The Capital Group Galleries'
		});
    }])
    
    .controller("ContactController", ["$scope", "$location", "SEOService", function ($scope, $location, SEOService) {
		SEOService.setSEO({
			title: 'The Capital Group Contact',
			image: 'http://' + $location.host() + '/images/CG_logo.png',
			url: $location.url(),
			description: 'The Capital Group Contact'
		});
	}])

    .controller('AboutController', ['$scope', '$http', '$location', 'SEOService', function ($scope, $http, $location, SEOService) {
        SEOService.setSEO({
            title: 'The Capital Group About',
            image: 'http://' + $location.host() + '/images/CG_logo.png',
            url: $location.url(),
            description: 'The Capital Group About'
        });
    }])

    .controller('LeadershipController', ['$scope', '$http', '$location', 'SEOService', function ($scope, $http, $location, SEOService) {
        SEOService.setSEO({
            title: 'The Capital Group Leadership',
            image: 'http://' + $location.host() + '/images/CG_logo.png',
            url: $location.url(),
            description: 'The Capital Group Leadership'
        });
    }])

    .controller('ProductController', ['$scope', '$location', '$window', 'SEOService', function ($scope, $location, $window, SEOService) {
        SEOService.setSEO({
            title: 'The Capital Group Our Product',
            image: 'http://' + $location.host() + '/images/CG_logo.png',
            url: $location.url(),
            description: 'The Capital Group Product'
        });

        $scope.goToLH = function() {
            $window.location.href = 'https://www.lhlic.com/program-details/';
        };
    }])

    .controller('CareersController', ['$scope', '$location', 'SEOService', function ($scope, $location, SEOService) {
        SEOService.setSEO({
            title: 'The Capital Group Careers',
            image: 'http://' + $location.host() + '/images/CG_logo.png',
            url: $location.url(),
            description: 'The Capital Group Careers'
        });

        $scope.goToApply = function () {
            $location.path('/apply');
        };
    }])

    .controller('ApplyController', ['$scope', '$http', '$location', 'SEOService', '$routeParams', 'Apply', function ($scope, $http, $location, SEOService, $routeParams, Apply) {
        SEOService.setSEO({
            title: 'The Capital Group Apply',
            image: 'http://' + $location.host() + '/images/CG_logo.png',
            url: $location.url(),
            description: 'The Capital Group Apply Now'
        });

        $scope.addProspect = function() {
            var newProspect = new Apply({
                userid: $scope.userid,
                firstname: $scope.firstname,
                lastname: $scope.lastname,
                email: $scope.email,
                phone: $scope.phone,
                subject: $scope.subject
            });
            newProspect.$save(function (success) {
                alert('Thank you for your inquiry.  Someone from our office will contact you soon.');
                $location.path('/careers');
            });
        };
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
        SEOService.setSEO({
            title: 'Login',
            image: 'http://' + $location.host() + '/images/CG_logo.png',
            url: $location.url(),
            description: 'Login Page'
        });

        $scope.facebook = {
            username: "",
            email: ""
        };

        $scope.onFBLogin = function() {
            FB.login(function(response) {
                if(response.authResponse) {
                    FB.api('/me', 'GET', {fields: 'email, first_name, name, id'}, function(response){
                        $scope.$apply(function() {
                            $scope.facebook.username = response.name;
                            $scope.facebook.email = response.email;
                        });
                    });
                } else {
                    // error
                }

            });
        };

        

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{2081805008502256}',
      cookie     : true,
      xfbml      : true,
      version    : '{v2.12}',
      status     : true
    });  

    FB.getLoginStatus(function(response){
        if(response.status === 'connected') {
            // we are connected
        } else if(response.status === 'not_authorized') {
            // not auth
        } else {
            // we are not logged in to facebook
        };
    });
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


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
