require("babel-polyfill");
import React from "react";
import {listen,publish,component} from "../core/utils"
import {FABButton, Icon} from "react-mdl";
import {Link} from 'react-router'

export default component((props) => {
  var authComponent = props.sessionState.get("user")==null?
  <li onClick={()=>publish("login")}><Icon name="edit"/>Login</li>:
  <li onClick={()=>publish("logout")}><Icon name="edit"/>Logout</li>;

  return <div>
    <div className="header">
      <ul className="link-list">
        <li><Icon name="search"/>Discover</li>
        <li><Link to="/book"><Icon name="edit"/>Write</Link></li>
        {authComponent}
      </ul>
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
