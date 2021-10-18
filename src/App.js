import React from 'react';
import Split from './composition/Split';
import './App.css';

function App() {
  return (
    <main className="App">
      <Split className="left" flexBasis={2}>
        This is the content for the left `Split`. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Incidunt ex velit suscipit facere
        officia?
      </Split>
      <Split className="right">
        This is the content for the right `Split`. Inventore aliquid cupiditate
        suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus
        id soluta aspernatur.
      </Split>
    </main>
  );
}

export default App;
