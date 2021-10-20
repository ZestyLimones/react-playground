import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';

const firstTooltip = (
  <Tooltip color="hotpink" message="tooltip message">
    Some text would go here for the tooltip message
  </Tooltip>
);

const secondTooltip = (
  <Tooltip color="#126BCC" message="another tooltip message">
    more tooltip messaging here for the second message
  </Tooltip>
);

function App() {
  return (
    <main className="App">
      <Split className="left" flexBasis={2}>
        {firstTooltip}
        This is the content for the left `Split`. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Incidunt ex velit suscipit facere
        officia?
        <br />
        {/* make another tooltip directly inside the App */}
        <Tooltip message="one more tooltip message">Necessitatibus?</Tooltip>
      </Split>
      <Split className="right">
        {secondTooltip}
        This is the content for the right `Split`. Inventore aliquid cupiditate
        suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus
        id soluta aspernatur.
      </Split>
    </main>
  );
}

export default App;
