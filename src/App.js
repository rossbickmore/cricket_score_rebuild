import React from 'react';
import ScoreBoard from './components/ScoreBoard';
import Panel from './components/Panel'

function App({store}) {
  return (
    <div className="App">
      <ScoreBoard team="home" state={store.getState()} />
      <ScoreBoard team="away" state={store.getState()}  />
      <Panel store={store}/>
    </div>
  );
}

export default App;
