import React from "react";
import {listen,publish,component,getQueryString} from "../core/utils"
import {Card, CardTitle, CardText, CardActions, Button} from "react-mdl";

export default component((props,context) => {
  var bookId = props.params.bookId;
  var pageNum = props.params.page;

  var page = props.sessionState.get("books").get(bookId).get("pages").get(pageNum)
  var title = page.get("title");
  var text = page.get("text");

  return <div className="page-container">
  <Card shadow={0} className="card-center">
    <CardTitle><input ref="title" type="text" defaultValue={title}/></CardTitle>
    <CardText>
        <input ref="text" type="text" defaultValue={text}/>
    </CardText>
    <CardActions border>
        <Button onClick={()=>publish("savePage",{bookId,pageNum,title:context.refs.title.value,text:context.refs.text.value})} colored>Save Page</Button>
    </CardActions>
  </Card>
  </div>;
});
