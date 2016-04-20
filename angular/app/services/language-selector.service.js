angular
    .module('app')
    .factory('language-selector', languageSelector);

function languageSelector($http, $filter, $q) {
    return {
        getAvailableLanguages: function (projectPath, translationsRoot) {
            resFolder = projectPath + translationsRoot;
            var deferred = $q.defer();
            $http.get('content/assets/countries.js').success(function (data) {
                var countriesData = data[0];
                var languagesData = data[1];
                var languages = [];
                var fs = require('fs');
                var file = fs.readdirSync(resFolder).forEach(function (file) {
                    if (file.startsWith('values-')) {
                        var country = '';
                        languageCode = file.split('values-')[1];
                        languageCodePrefix = languageCode.split('-')[0];
                        if (languageCode.split('-').length > 1) {
                            var languageCodeSufix = languageCode.split('-')[1];
                            languageCodeSufix = languageCodeSufix.replace('r', '');
                            console.log(languageCodeSufix);
                            country = $filter('filter')(countriesData.countries, {code: languageCodeSufix})[0];
                            if (country) {
                                country = country.name;
                            }
                        }
                        var language = $filter('filter')(languagesData.languages, {code:languageCodePrefix})[0];
                        if (language) {
                            languages.push({'name':language.name, 'code':languageCode, 'country': country, fileName: translationsRoot+file+'/strings.xml'});
                        }
                    }
                });
                console.log(languages);
                deferred.resolve(languages);
            });
            return deferred.promise;
        }
    }
}