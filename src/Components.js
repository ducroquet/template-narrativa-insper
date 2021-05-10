import React from "react";
import Paragraph from "./Components/Paragraph";
import Header from "./Components/Header";
import Image from "./Components/Image";
import Scrollama from "./Components/Scrollama"
import Flourish from "./Components/Flourish"
 
const Components = {
  paragraph: Paragraph,
  header: Header,
  image: Image,
  flourishScroll: Scrollama,
  flourishEmbed: Flourish
};
 
export default block => {
  // component does exist
  if (typeof Components[block.component] !== "undefined") {
    return React.createElement(Components[block.component], {
      key: Math.floor(Math.random() * 1000),
      block: block
    });
  }
  // component doesn't exist yet
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: Math.floor(Math.random() * 1000) }
  );
}