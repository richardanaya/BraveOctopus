import React from "react";
import {listen,publish,component} from "../core/utils"
import {Card, CardTitle, CardText, CardActions, Button} from "react-mdl";

export default component((props,refs) => {
  return <div className="page-container">
  <Card shadow={0} className="card-center">
    <CardTitle>Create Your Story</CardTitle>
    <CardText>
        What would you like the title to be?
        <input ref="title" style={{width:"100%"}}></input>
    </CardText>
    <CardActions border>
        <Button onClick={()=>publish("createBook",refs.title.value)} colored>Create</Button>
    </CardActions>
  </Card>
  </div>;
});
