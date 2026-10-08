
var app = angular.module('smockinWebsiteHelp', ['ngSanitize', 'ui.bootstrap']);

app.controller('helpController', function($scope, $location) {


    //
    // Constants


    //
    // Labels
    $scope.helpHeading = 'Help Guide';
    $scope.videosHeading = 'Videos';


    //
    // Data
    $scope.isOpen = false;


	//
	// Scoped function
	$scope.trackHelpSectionClick = function (section, version, status) {
		trackHelpSectionClickJS('help: ' + section, version, status);
	};

    $scope.doOpenVideo = function(name, id) {
        
        trackHelpSectionClickJS('video:' + name, '1.0.0', false);

        window.open('video.html?vid=' + id);

    };

});
