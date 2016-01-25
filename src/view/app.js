require("babel-polyfill");
import React from "react";
import {listen,publish,component} from "../core/utils"
import {FABButton, Icon} from "react-mdl";
import {Link} from 'react-router'

export default component((props) => {
  if(!props.sessionState.get("ready")){
    return <div>Loading</div>
  }

  var links = props.sessionState.get("user")==null?(
    <ul className="link-list">
      <li onClick={()=>publish("navigateTo","/")}><Icon name="search"/>Discover</li>
      <li onClick={()=>publish("login")}><Icon name="edit"/>Login</li>
    </ul>
  ):
  (
    <ul className="link-list">
      <li onClick={()=>publish("navigateTo","/")}><Icon name="search"/>Discover</li>
      <li onClick={()=>publish("navigateTo","/book")}><Icon name="edit"/>Write</li>
      <li onClick={()=>publish("logout")}><Icon name="edit"/>Logout</li>
    </ul>
  );

  return <div>
    <div className="header">
      {links}
      <div className="title">
        <FABButton colored>
          <Icon name="add" />
        </FABButton>
        <span className="text">Brave Octopus</span>
      </div>
    </div>
    {props.children}
</div>
});
