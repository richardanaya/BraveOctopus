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
  },
  savePage: function(key,pageNum,title,text){
    var ref = window.__firebase__.child(key).child("pages").child(pageNum)
    ref.child("title").set(title);
    ref.child("text").set(text);
    /*sessionState.get().get("books").get(key).get("pages").update(function(x){
      var page = x.get(0);
      page = page.set("title","blah")
      page = page.set("text","blah")
      return x.set(0,page)
    });*/
    sessionState.get().get("books").get(key).get("pages").get(0).update(x=>x.set("title",title).set("text",text))
  }
}
