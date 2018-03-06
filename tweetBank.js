const _ = require('lodash');

var data = [];

module.exports = {
  add: function (name, content) {
    data.push({name: name, content: content});
  },

  list: function () {
    return _.cloneDeep(data);
  },

  find: function (properties) {
    return _.cloneDeep(_.filter(data, properties));
  }
};
