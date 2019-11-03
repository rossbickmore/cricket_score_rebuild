import React from 'react';
import ScoreBoard from './components/ScoreBoard';
import Panel from './components/Panel'

function App({store}) {
  const state = store.getState()
  const home = state.teamScores.find( (t) => t.name === "home")
  const away = state.teamScores.find( (t) => t.name === "away")
  return (
    <div className="App">
      <ScoreBoard team={home} />
      <ScoreBoard team={away} />
      <Panel store={store} />
    </div>
  );
}

export default App;
