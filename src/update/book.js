import Book from "model/book"
import {publish,listen} from "core/utils"

listen("createBook",function *(title){
	var bookKey = Book.create(title);
  publish("navigateTo",`/book/${bookKey}/0`)
})

listen("editBook",function *(bookKey){
  publish("navigateTo",`/book/${bookKey}/0`)
})

listen("deleteBook",function *(key){
	Book.delete(key);
})

listen("savePage",function *({bookId,pageNum,title,text}){
	Book.savePage(bookId,pageNum,title,text);
})
