/**
 * Created by ning on 2016/3/30.
 */

function httpget(app,url,index) {
    app.controller('customersCtrl', function($scope, $http) {

        $http.get(url)
            .success(function(response) {$scope[index] = response;});});
}
var app = angular.module('myApp', []);
httpget(app,getHttpFiles("md"),"files");

