(function() {
  'use strict';

  angular.module('gh')
    .filter('fileSize', fileSize);

  function fileSize() {

    /**
     * Converts file size from kilobytes to megabytes
     * @param  {Number} size    The file size to convert
     * @return {String}         The converted file size
     */
    return function doFileSize(size) {

      return (size / 1000) + 'MB';

    };

  }

}());
