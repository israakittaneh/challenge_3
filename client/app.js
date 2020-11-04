import React from "react";

import { Steps, Step } from "react-step-builder";
import Step1 from "./f1";
import Step2 from "./f2";
import Step3 from "./f3";
import FinalStep from "./finalstep";

function App() {
  return (
    <div className="App">
      <Steps>
        <Step component={Step1} />
        <Step component={Step2} />
        <Step component={Step3} />
        <Step component={FinalStep} />
      </Steps>
    </div>
  );
}

export default App;