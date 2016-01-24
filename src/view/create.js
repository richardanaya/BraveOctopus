import React from "react";
import {listen,publish,component} from "../core/utils"

export default component((props,refs) => {
  return <div>test<button onClick={()=>publish("createBook","hey")}></button></div>;
});
