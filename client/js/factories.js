angular.module('CapitalGroup.factories', [])


    .factory('Apply', ['$resource', function ($resource) {
        return $resource('/api/apply/:id', { id: '@id' }, {
            'update': { method: 'PUT' }
        });
    }])

    .factory('Agents', ['$resource', function ($resource) {
        return $resource('/api/agents/:id', { id: '@id' }, {
        });
    }])
    .factory('Mailing', ['$resource', function ($resource) {
        return $resource('/api/mailing/:id', { id: '@id' }, {
            'update': { method: 'PUT' },
            'post': { method: 'POST' }
        })
    }])
    .factory("Gallery", ["$resource", function ($resource) {
		return $resource("/api/galleries/:id", { id: "@id" },
			{
				"update": { method: "PUT" },
				"get": { method: "GET" }
			});
    }]);
    


 
