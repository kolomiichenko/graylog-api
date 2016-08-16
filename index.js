var request = require('request');
var methods = require('./api-methods');

function serializeObjToUri(obj) {
  return Object.keys(obj).map(function(key) {
    return key + '=' + encodeURIComponent(obj[key]);
  }).join('&');
}

var Api = function(config) {
  this._protocol = config.protocol || 'http'; // or https
  this._auth = (config.basicAuth) ? config.basicAuth.username + ':' + config.basicAuth.password + '@' : '';
  this._host = config.host || 'localhost';
  this._port = config.port || '12900';
  this._uri = this._protocol + '://' + this._auth + this._host + ':' + this._port;
};

Object.keys(methods).forEach(function(mName) {

  var m = methods[mName];

  Api.prototype[mName] = function(parameters, path, callback) {

    if (arguments.length === 1) callback = parameters;
    if (arguments.length === 2) callback = path;

    var computedPath = m.basePath;
    if (typeof arguments[1] === 'object') {
      computedPath = m.basePath.replace(/{([^}]*)}/g, function(s, p) {
        return path[p];
      });
    }

    var reqUri = this._uri + computedPath;

    if (m.method === 'GET' && parameters) {
      reqUri = reqUri + '?' + serializeObjToUri(parameters);
    }

    var opts = {
      url: reqUri,
      method: m.method,
      headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json'
      },
      body: (m.method !== 'GET' && parameters) ? parameters : null,
      json: false
    };

    request(opts, function(error, response, body) {
      if (error) {
        return callback([error, body]);
      }

      try {
        callback(null, JSON.parse(body));
      }
      catch (err) {
        callback(['Bad response', err, reqUri]);
      }
    });
  };

});

var connect = function(config, callback) {
  var that = new Api(config);
  return that;
};

connect.connect = connect; // backwards compatible
connect.Api = Api;
module.exports = connect;
