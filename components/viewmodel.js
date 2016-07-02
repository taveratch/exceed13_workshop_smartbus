(function() {
  'use strict';

    var vm = function(state, action) {
        switch(action.type) {
          case 'init':
            return {
              incoming: {
                value: 0
              },
              outgoing: {
                value: 0
              },
              status: 'green'
            };
          case 'update':
            return _.merge(state, action.data);
          default:
            return state;
        }
    };
    function calculateTotal(incoming, outgoing) {
        return incoming.value - outgoing.value;
    }

    function isStatus(currentStatus, status) {
      return currentStatus === status;
    }
    vm.isStatus = isStatus;
    vm.calculateTotal = calculateTotal;
    module.exports = vm;

}());
