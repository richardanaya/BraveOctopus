import React from "react";
import {listen,publish,component} from "../core/utils"
import {Card, CardTitle, CardText, CardActions, Button} from "react-mdl";
import fetch from "isomorphic-fetch"

listen("save",function *(data){
  window.__firebase__.set(data);
})

export default component((props,refs) => {
  return <div className="page-container">
  <Card shadow={0} className="card-center">
    <CardTitle>Welcome</CardTitle>
    <CardText>
        This is a website for writing simple choose your own adventure stories! Login and have fun!
    </CardText>
  </Card>
  </div>;
});
