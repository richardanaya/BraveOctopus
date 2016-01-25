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
	publish("navigateTo",`/book/`)
})

listen("savePage",function *(info){
	console.log(info);
})
