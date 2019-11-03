import React from 'react';
import ScoreBoard from './components/ScoreBoard';
import Panel from './components/Panel'
import Settings from './components/Settings'

function App({store}) {
  const state = store.getState()
  const home = state.scores.find( (t) => t.name === "home")
  const away = state.scores.find( (t) => t.name === "away")
  return (
    <div className="App">
      <Settings store={store}/>
      <ScoreBoard team={home} overs={state.overs}/>
      <ScoreBoard team={away} overs={state.overs}/>
      <Panel store={store} />
    </div>
  );
}

export default App;
