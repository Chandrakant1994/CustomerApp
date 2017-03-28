
/*var myapp = angular.module('customer',[]);
 

myapp.controller('c1',angController = function($scope){
    $scope.message = "This is Angular !!"; 
}); */

angular.module('test', []).controller('testCtrl', function($scope) {
  $scope.editMode = false;
  $scope.name = "John Doe";
});