require("babel-polyfill");
import React from "react";
import sessionState from "../core/sessionState";
import {listen,publish,component} from "../core/utils"
import {FABButton, Icon} from "react-mdl";
import {Link} from 'react-router'

class App extends React.Component {
  constructor(){
    super()
    sessionState.on('swap',this.onNewData.bind(this))
  }

  onNewData(newData) {
    this.forceUpdate();
  }

  render() {
    var props = this.props;
    if(!sessionState.get("ready")){
      return <div>Loading</div>
    }

    var links = sessionState.get("user")==null?(
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

      var rootChildren = React.Children.map(this.props.children, (element)=>{
        return React.cloneElement(element, {sessionState: sessionState.get()});
      });
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
        {rootChildren}
      </div>
  }
}

export default App
