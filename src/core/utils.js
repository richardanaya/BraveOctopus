import co from "co";
import Channel from "co-chan";
import React from "react";
var ReactCursorMixin = require('react-cursor-mixin');

var stream = function (ch,fn){
  co(function *(){
    while (!ch.done()) {
      try {
        var val = yield ch;
        var gen = fn(val);
        if(gen != null){
            yield gen;
        }
      } catch (err) {
        console.log(String(err));
      }

    }
  })
}

var namedSubscriptions = [];

var subscribe = function(name){
    var subscriptions = namedSubscriptions[name]
    if(!subscriptions){
      subscriptions = namedSubscriptions[name] = []
    }
    var c = Channel();
    subscriptions.push(c);
    return c;
}

var publish = function(name,val){
  var subscriptions = namedSubscriptions[name]
  if(!subscriptions){
    return
  }
  subscriptions.forEach(s=>s(val))
}

var listen = function(name,fn){
  var ch = subscribe(name);
  stream(ch,fn);
}

var component = function(f){
  return React.createClass({
    mixins: [ReactCursorMixin],
    render() {
       return f.call(this,this.props,this.refs)
    }
  });
}

function getQueryString(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

export {stream,subscribe,publish,listen,component,getQueryString}
