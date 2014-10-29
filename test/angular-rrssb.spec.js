'use strict';

describe('angular-rrssb', function () {
  var scope, $compile, $rootScope, element;

  function createDirective(template) {
    var elm;
    elm = angular.element(template);
    angular.element(document.body).prepend(elm);
    $compile(elm)($rootScope);
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

        expect(element.text()).toContain('class="rrssb"');
      });
    });
  }

});