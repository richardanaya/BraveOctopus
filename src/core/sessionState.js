var Immutable = require('immutable');
var immstruct = require('immstruct');

var state = null;

export default {
  set: function(st){
    state = immstruct(st);
  },
  get: function(){
    return state.cursor();
  },
  on: function(event,listener){
    return state.on(event,listener);
  },
  toString: function(){
    return JSON.stringify(state.cursor().deref().toJSON());
  }
};
