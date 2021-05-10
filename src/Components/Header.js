import React from "react";
 
export default props => (
  <div className="header">
    <h1>{props.block.titulo}</h1>
    <h2>{props.block.linhafina}</h2>
    <h3>{props.block.autor}</h3>
    <h4>{props.block.data}</h4>
  </div>
);