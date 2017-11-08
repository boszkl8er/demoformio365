'use strict';
angular.module('LfApp', ['ngRoute','AdalAngular'])
.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalProvider) {

    $routeProvider.when("/Home", {
        controller: "homeCtrl",
        templateUrl: "/App/Views/Home.html",
    }).when("/Calc", {
        controller: "calcCtrl",
        templateUrl: "/App/Views/Calc.html",
		requireADLogin: true,
    }).when("/UserData", {
        controller: "userDataCtrl",
        templateUrl: "/App/Views/UserData.html",
    }).when("/Second", {
        controller: "SecondCDNCtrl",
        templateUrl: "/App/Views/sub/second.html",
    }).when("/Proxy", {
        controller: "proxyCtrl",
        templateUrl: "/App/Views/proxy.html",
    }).otherwise({ redirectTo: "/Home" });

    adalProvider.init(
		{
            instance: 'https://login.microsoftonline.com/', 
            tenant: 'together.at',
			//clientId: '84a30349-7c6d-42fc-a92e-fa7b774f66e9',
			clientId: '8307d66e-184f-437f-af73-88729009b293',
			//clientId: 'ca9d6d1c-5a98-4e34-98b5-89d2e179a01f',
			//clientId: 'c34b49f1-2cd5-400f-83c2-37f6efa9c63b', tun
            extraQueryParameter: 'nux=1',
		},
        $httpProvider
    );
   
}]);
