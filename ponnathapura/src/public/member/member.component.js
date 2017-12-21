(function (){
  "use strict";

  angular.module('public')
  .component('member', {
    templateUrl : 'src/public/member/member.html',
    bindings: {
        category: '<'
    }
  })
})();
