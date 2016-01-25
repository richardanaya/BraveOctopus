import React from "react";
import {listen,publish,component} from "../core/utils"
import {Card, CardTitle, CardText, CardActions, Button} from "react-mdl";

export default component((props,context)=>{
  var names = props.sessionState.get("books").map((x,key)=>{
    return (
      <Card shadow={0} className="card-center">
        <CardTitle>{x.get("title")}</CardTitle>
        <CardActions border>
            <Button onClick={()=>{publish("editBook",key)}} colored>Edit Book</Button>
            <Button onClick={()=>{publish("deleteBook",key)}} colored>Delete Book</Button>
        </CardActions>
      </Card>
    );
  })

  return <div className="page-container">
  <Card shadow={0} className="card-center">
    <CardTitle>Create Your Story</CardTitle>
    <CardText>
        What would you like the title to be?
        <input ref="title" style={{width:"100%"}}></input>
    </CardText>
    <CardActions border>
        <Button onClick={()=>{publish("createBook",context.refs.title.value)}} colored>Create</Button>
    </CardActions>
  </Card>
  {names}
  </div>;
});
