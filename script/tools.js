/**
 * Created by ning on 2016/4/1.
 */
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return r[2];
    return null;
}

function httpget(app,url,index) {
    app.controller('customersCtrl', function($scope, $http) {

        $http.get(url)
            .success(function(response) {$scope[index]=response;});});
}