'use strict';

describe('ImplicitTest.version module', function() {
  beforeEach(module('ImplicitTest.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
