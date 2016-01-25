require("babel-polyfill");
import React from "react";
import sessionState from "./sessionState";
import {component} from "./utils"
import AppComponent from "../view/app"

class App extends React.Component {
  constructor(){
    super()
    sessionState.on('swap',this.onNewData.bind(this))
  }

  onNewData(newData) {
    this.forceUpdate();
  }

  render() {
     //clone our elements with cursor as prop
     var rootChildren = React.Children.map(this.props.children, (element)=>{
       return React.cloneElement(element, {sessionState: sessionState.get()});
     });
     return (
       <AppComponent sessionState={sessionState.get()}>
         {rootChildren}
       </AppComponent>
     );
  }
}

export default App
