angular
    .module('app')
    .service('xml', xml);

function xml() {
    return {
        toJSON: function (xml) {
            var x2js = new x2js();
            return x2js.xml2js(xml);
        }
    }
}