// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
require("angular");

var app = angular.module("st3-app", []);

var salesTax = [
  { income: 0, diff: 50 },
  { income: 15, diff: 65 },
  { income: 25, diff: 81 },
  { income: 35, diff: 94 },
  { income: 45, diff: 111 },
  { income: 55, diff: 131 },
  { income: 70, diff: 152 },
  { income: 85, diff: 179 },
  { income: 105, diff: 214 },
  { income: 140, diff: 330 }
];

var controller = app.controller("CalcController", function($scope) {
  $scope.property = 0;
  $scope.income = 0;
  $scope.rta = 0;

  $scope.propertyTaxIncrease = function() {
    var prop = typeof $scope.property != "number" ? $scope.property.replace(/,/g, "") * 1 : $scope.property;
    return prop * .00025;
  };

  $scope.salesTaxIncrease = function() {
    var income = typeof $scope.income != "number" ? $scope.income.replace(/,/g, "") * 1 : $scope.income;
    income /= 1000;
    if (income == 0) return 0;
    for (var i = salesTax.length - 1; i >= 0; i--) {
      var bracket = salesTax[i];
      if (income > bracket.income) return bracket.diff;
    }
  };

  $scope.carTabIncrease = function() {
    var rta = typeof $scope.rta != "number" ? $scope.rta.replace(/,/g, "") * 1 : $scope.rta;
    return rta * (8 / 3) * .93;
  }
});

controller.$inject = ["$scope"];