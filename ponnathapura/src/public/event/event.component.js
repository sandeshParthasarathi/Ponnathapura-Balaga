(function () {
  "use strict";

  angular.module('public')
  .component('event', {
    templateUrl: 'src/public/event/event.html',
    bindings: {
      category: '<'
    }
  })
})();
