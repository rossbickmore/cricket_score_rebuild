import React from 'react';
import ScoreBoard from './components/ScoreBoard';
import Panel from './components/Panel'

function App({store}) {
  const state = store.getState()

  return (
    <div className="App">
      <ScoreBoard team="home" score={state.score.home} />
      <ScoreBoard team="away" score={state.score.away} />
      <Panel store={store}/>
    </div>
  );
}

export default App;
