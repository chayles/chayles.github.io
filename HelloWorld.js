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
	})
});

app.controller("HomeCtrl", function($scope){

});

app.controller("AboutMeCtrl", function($scope){
});

app.controller("PortfolioCtrl", function($scope){
	
})

app.controller("InterestsCtrl", function($scope){
	
})

app.controller("TravelCtrl", function($scope){
	
})