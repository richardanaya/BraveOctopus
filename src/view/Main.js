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
    <CardTitle>Data Card</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
        <input ref="imp"></input>
    </CardText>
    <CardActions border>
        <Button onClick={()=>publish("save",refs.imp.value)} colored>save</Button>
    </CardActions>
  </Card>
  </div>;
});
