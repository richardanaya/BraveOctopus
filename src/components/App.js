require("babel-polyfill");
import React from "react";
import {listen,publish,component} from "../core/utils"
import {FABButton, Icon} from "react-mdl";

export default component((props) => {
  return <div>
    <div className="header">
      <ul className="link-list"><li><Icon name="search"/>Discover</li><li><Icon name="edit"/>Write</li></ul>
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
