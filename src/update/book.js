import Book from "model/book"
import {publish,listen} from "core/utils"

listen("createBook",function *(title){
	Book.create(title);
})
