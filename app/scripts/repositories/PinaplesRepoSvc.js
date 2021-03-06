'use strict';

angular.module('pifarmApp')
  .factory('PinaplesRepoSvc',
  ['Restangular',
  function (Restangular) {

    var Repo = {};
    var route = 'pinaples';

    Restangular.extendModel( route, function (model) {
      return model;
    });

    Repo.query = function () {
      return Restangular.all( route ).getList();
    };

    Repo.find = function (id) {
      return Restangular.one( route, id ).get();
    };

    Repo.create = function (pinaple) {
      return Restangular.all( route ).post( pinaple );
    };

    Repo.remove = function (pinaple) {
      return Restangular.one( route, pinaple.id ).remove();
    };

    return Repo;

  }]);