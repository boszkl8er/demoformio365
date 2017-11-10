﻿'use strict';
angular.module('LfApp')
.controller('calcCtrl', ['$scope', 'adalAuthenticationService', function ($scope, adalService) {
	$scope.getTokenCalc = function(){
		 var resource = adalService.getClientID();
		 console.log('ClientID = '+resource);
		 var tokenVal = adalService.getCachedToken(resource);
		 return tokenVal;
	};

}]);