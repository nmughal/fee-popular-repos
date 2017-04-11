(function() {
    'use strict';

    angular.module('gh')
        .directive('ghRepo', ghRepo);

    function ghRepo() {
        let $ = angular.element;

        return {
            templateUrl: 'repos/gh-repo.template.html',
            restrict: 'E',
            link: setupCollapse,
            scope: {
              repo: '='
            }
        };

        function setupCollapse(scope, element) {
            $(element)
                .find('header')
                .on('click', function hidePanelBody() {
                  $(element).find('section').toggleClass('hidden');
                });
        }

    }


}());
