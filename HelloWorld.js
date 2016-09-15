var app = angular.module("helloWorldApp",["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider.when("/", {
		controller: "HomeCtrl",
		templateUrl: "Templates/Home.html",
	}).when("/AboutMe", {
		controller: "AboutMeCtrl",
		templateUrl: "Templates/AboutMe.html",
	}).when("/Portfolio",{
		controller: "PortfolioCtrl",
		templateUrl: "Templates/Portfolio.html",
	}).when("/Interests",{
		controller:"InterestsCtrl",
		templateUrl: "Templates/Interests.html"
	}).when("/Travel",{
		controller:"TravelCtrl",
		templateUrl: "Templates/Travel.html"
	}).when("/Thirty_Before_Thirty",{
		controller:"ThirtyCtrl",
		templateUrl: "Templates/Thirty.html"
	})
});

app.controller("HomeCtrl", function($scope){
	$scope.Welcome = true;
	$scope.exitWelcome = function(){
		$scope.Welcome = false;
	}
});

app.controller("AboutMeCtrl", function($scope){
	$scope.wantFooter = true;
});

app.controller("PortfolioCtrl", function($scope){
	$scope.Resume = false;
	$scope.Guide = false;
	$scope.Infographic = false;
	$scope.Niccan = false;
	$scope.Advertorial = false;
	$scope.GPC = false;
	$scope.Blog = false;
	$scope.Passport = false;
	$scope.Volleyball = false;

	$scope.showResume = function(){
		$scope.Resume = true;
	}
	$scope.showGuide = function(){
		$scope.Guide = true;
	}
	$scope.showInfographic = function(){
		$scope.Infographic = true;
	}
	$scope.showNiccan = function(){
		$scope.Niccan = true;
	}
	$scope.showAdvertorial = function(){
		$scope.Advertorial = true;
	}
	$scope.showGPC = function(){
		$scope.GPC = true;
	}
	$scope.showBlog = function(){
		$scope.Blog = true;
	}
	$scope.showFacebookPost = function(){
		$scope.Post = true;
	}
	$scope.showVolleyball = function(){
		$scope.Volleyball = true;
	}

	$scope.closePortfolioItem = function(){
		$scope.Resume = false;
		$scope.Guide = false;
		$scope.Infographic = false;
		$scope.Niccan = false;
		$scope.Advertorial = false;
		$scope.GPC = false;
		$scope.Blog = false;
		$scope.Post = false;
		$scope.Volleyball = false;
	}
})

app.controller("InterestsCtrl", function($scope){
	$scope.wantFooter = true;
})

app.controller("TravelCtrl", function($scope){
	$scope.wantFooter = true;
})

app.controller("ThirtyCtrl", function($scope){
	$scope.wantFooter = false;
	$scope.AfricaPostTab = false;
	$scope.AfricaPost = function(){
		$scope.AfricaPostTab = true;
	}
})
