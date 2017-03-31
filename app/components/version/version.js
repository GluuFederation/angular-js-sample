'use strict';

angular.module('ImplicitTest.version', [
  'ImplicitTest.version.interpolate-filter',
  'ImplicitTest.version.version-directive'
])

.value('version', '0.1');
