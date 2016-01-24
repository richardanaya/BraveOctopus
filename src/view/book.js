import React from "react";
import {listen,publish,component,getQueryString} from "../core/utils"
import {Card, CardTitle, CardText, CardActions, Button} from "react-mdl";

export default component((props,refs) => {
  var bookId = props.params.bookId;
  var page = getQueryString("page");
  console.log(bookId+" "+page);
  return <div className="page-container">
  <Card shadow={0} className="card-center">
    <CardTitle>Page Title</CardTitle>
    <CardText>
        Page
    </CardText>
    <CardActions border>
        <Button onClick={()=>publish("createBook",refs.title.value)} colored>Save</Button>
    </CardActions>
  </Card>
  </div>;
});
