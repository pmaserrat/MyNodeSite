/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  	.when("", {templateUrl: "partials/home.html", controller: "PageCtrl"})
  	.when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Home
    .when("/index.html", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/family", {templateUrl: "partials/family.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
  
	$('.nav a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});
  	$(document).on('click',function(){
		$('.navbar-collapse').collapse('hide');
	});
  	
  	/**
  	 * Author: Heather Corey
  	 * jQuery Simple Parallax Plugin
  	 *
  	 */
  	 
  	(function($) {
  	 
  	    $.fn.parallax = function(options) {
  	 
  	        var windowHeight = $(window).height();
  	 
  	        // Establish default settings
  	        var settings = $.extend({
  	            speed        : 0.15
  	        }, options);
  	 
  	        // Iterate over each object in collection
  	        return this.each( function() {
  	 
  	        	// Save a reference to the element
  	        	var $this = $(this);
  	 
  	        	// Set up Scroll Handler
  	        	$(document).scroll(function(){
  	 
  	    		        var scrollTop = $(window).scrollTop();
  	            	        var offset = $this.offset().top;
  	            	        var height = $this.outerHeight();
  	 
  	    		// Check if above or below viewport
  				if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
  					return;
  				}
  	 
  				var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
  	 
  	                 // Apply the Y Background Position to Set the Parallax Effect
  	    			$this.css('background-position', 'center ' + yBgPosition + 'px');
  	                
  	        	});
  	        });
  	    }
  	}(jQuery));

  	$('.bg-1,.bg-3').parallax({
  		speed :	0.15
  	});

  	$('.bg-2').parallax({
  		speed :	0.25
  	});
  	
  	
  	
});




