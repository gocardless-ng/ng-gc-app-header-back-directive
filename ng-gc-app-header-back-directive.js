/**
 * @license ng-gc-app-header-back-directive v0.1.0
 * (c) 2013-2013 GoCardless, Ltd.
 * https://github.com/gocardless-ng/ng-gc-app-header-back-directive.git
 * License: MIT
 */
(function(){
'use strict';

'use strict';

angular.module('gc.appHeaderBackController', [])
.controller('AppHeaderBackController', [
  '$scope', '$window',
  function AppHeaderBackController($scope, $window) {

    $scope.navigateBack = function navigateBack() {
      $window.history.back();
    };

  }
]);

'use strict';

angular.module('gc.appHeaderBack', [
  'gc.appHeaderBackController',
  'app-header-back-template.html'
]).directive('appHeaderBack', [
  function appHeaderBackDirective() {

    return {
      restrict: 'E',
      templateUrl: 'app-header-back-template.html',
      transclude: true,
      replace: true,
      controller: 'AppHeaderBackController',
      scope: {
        title: '@',
        subheading: '@',
        showBackBtn: '@'
      }
    };

  }
]);

angular.module('app-header-back-template.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('app-header-back-template.html',
    '<div class="stripe stripe--base page__outer-header"><header class="page__header site__container"><div class="center-header"><div class="center-header__side"><button class="btn btn--hollow" ng-click="navigateBack()" ng-show="showBackBtn"><i class="btn-icon btn-icon--centered icon-back-arrow"></i></button></div><div class="center-header__title"><h1 class="u-text-heading page__header__title" ng-class="{ \'page__header__title--with-subheading\': subheading }">{{ subheading || title }}</h1><h2 ng-show="subheading" class="u-text-h4 u-text-heading page__header__subheading">{{ title }}</h2></div><div class="center-header__side center-header__side--end"><div class="center-header__side--end__inner"><div class="u-pull-end" ng-transclude=""></div></div></div></div></header></div>');
}]);
})();