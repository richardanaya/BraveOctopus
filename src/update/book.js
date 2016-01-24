import Book from "model/book"
import {publish,listen} from "core/utils"

listen("createBook",function *(title){
	var result = yield Book.create(title);
  console.log(result);
  publish("navigateTo","/")
})
