(function() {
    'use strict';

    angular.module('gh')
        .directive('ghRepo', ghRepo);

    function ghRepo() {

        return {
            templateUrl: 'repos/gh-repo.template.html',
            restrict: 'E',
            scope: {
              repo: '='
            }
        };

    }


}());
