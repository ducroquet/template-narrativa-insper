import React from "react";
 
export default props => (
    <iframe src={'https://flo.uri.sh/visualisation/' + props.block.storyID +'/embed'} title='Interactive or visual content' frameBorder='0' scrolling='no' style={{width:'100%',height:'600px'}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
);