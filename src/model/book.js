import sessionState from "core/sessionState"
var Immutable = require('immutable');

export default {
  create: function(title){
    var book = {title: title, pages:[{title:"My Story", text:"My text."}]};
    var result = window.__firebase__.push(book);
    var key = result.key();
    sessionState.get().update("books",x=>x.set(key,Immutable.fromJS(book)));
    return key;
  },
  delete: function(key){
    var ref = window.__firebase__.child(key)
    ref.remove();
    sessionState.get().update("books",x=>x.delete(key));
  }
}
