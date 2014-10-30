'use strict';

describe('angular-rrssb', function () {
  var scope, $compile, $rootScope, element;

  function createDirective(template) {
    var elm;
    elm = angular.element(template);
    angular.element(document.body).prepend(elm);
    var a = $compile(elm);
    a(scope);
    scope.$digest();

    return elm;
  }

  beforeEach(module('mvsouza.angular-rrssb'));
  beforeEach(inject(function(_$rootScope_, _$compile_) {
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();
    $compile = _$compile_;
  }));

  afterEach(function () {
    if (element) element.remove();
  });

  describe('as an element', function(){ runTestsWithTemplate('<rrssb></rrssb>'); });
  describe('as an attribute', function(){ runTestsWithTemplate('<div rrssb></div>'); });

  function runTestsWithTemplate(template) {
    describe('when created', function () {

      it('should initialise', function () {
        element = createDirective(template);

        expect(element.text()).toContain('class=');
      });
    });
  }

});
describe('sample component test', function() {
    // a single test
    it('ensure addition is correct', function() {
        // sample expectation
        expect(1+1).toEqual(2);
        //                  `--- the expected value (2)
        //             `--- the matcher method (equality)
        //       `-- the actual value (2)
    });
    // another test
    it('ensure substraction is correct', function() {
        expect(1-1).toEqual(0);
    });
});