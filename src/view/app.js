require("babel-polyfill");
import React from "react";
import {listen,publish,component} from "../core/utils"
import {FABButton, Icon} from "react-mdl";
import {Link} from 'react-router'

export default component((props) => {
  var links = props.sessionState.get("user")==null?(
    <ul className="link-list">
      <li><Link to="/"><Icon name="search"/>Discover</Link></li>
      <li onClick={()=>publish("login")}><Icon name="edit"/>Login</li>
    </ul>
  ):
  (
    <ul className="link-list">
      <li><Link to="/"><Icon name="search"/>Discover</Link></li>
      <li><Link to="/book"><Icon name="edit"/>Write</Link></li>
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
