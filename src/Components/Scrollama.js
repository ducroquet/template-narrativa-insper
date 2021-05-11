import React, { useEffect, useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';

const ScrollamaDemo = (props) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);
  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <div style={{ margin: '10vh 0', border: '2px dashed skyblue' }}>
      <div style={{ position: 'sticky', top: 0, border: '1px solid orchid' }}>
      <iframe src={'https://flo.uri.sh/story/'+ props.block.storyID +'/embed#slide-' + currentStepIndex} scrolling='yes' style={{width:'100%',height:'600px'}} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
        {/* I'm sticky. The current triggered step index is: {currentStepIndex} */}
      </div>
      <Scrollama onStepEnter={onStepEnter} offset='0.8'>
        {props.block.texts.map((text, stepIndex) => (
          <Step data={stepIndex} key={stepIndex}>
            <div
              style={{
                margin: '50vh 0',
                border: '1px solid gray',
                // opacity: currentStepIndex === stepIndex ? 1 : 0.2,
              }}
            >
              {text}
            </div>
          </Step>
        ))}
      </Scrollama>
    </div>
  );
};

export default ScrollamaDemo;