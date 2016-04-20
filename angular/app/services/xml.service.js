angular
    .module('app')
    .service('xml', xml);

function xml() {
    return {
        toJSON: function (xml) {
            return 'Testing'
        }
    }
}