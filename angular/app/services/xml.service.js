var X2JS = require('x2js');
var fs = require('fs');

angular
    .module('app')
    .service('$xml', $xml);

function $xml($q) {
    return {
        toJSON: function (path) {
            var deferred = $q.defer();
            fs.readFile(path, 'utf8', function (err, data) {
                if (err) throw err;
                var x2js = new X2JS();
                deferred.$$resolve(x2js.xml2js(data));
            });
            return deferred.promise;
        }
    }
}