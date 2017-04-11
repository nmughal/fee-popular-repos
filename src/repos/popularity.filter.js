(function() {
  'use strict';

  angular.module('gh')
    .filter('popularityOrdering', popularityOrdering);

  function popularityOrdering() {

    /**
     * Orders the array of repos from most popular to least
     * @param  {Array}  repos The array of repos from a given Github account
     * @return {Array}        It returns the sorted array
     */
    return function doPopularityOrdering(repos) {
      if(!Array.isArray(repos)) {
        return repos;
      }

      let workingRepos = [].concat(repos);

      return workingRepos.sort(function doPopularityOrdering(a, b) {
        return calculatePopularity(b) - calculatePopularity(a);
      });

      /**
       * Calculates the popularity of one repo
       * @param  {Object} repo  Takes in one repo
       * @return {Number}       It returns the popularity number
       */
      function calculatePopularity(repo) {
        return (repo.stargazers_count + (2 * repo.forks) + (0.5 * repo.open_issues_count));
      }

    };

  }

}());
