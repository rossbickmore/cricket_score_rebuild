import React from 'react';
import { updateScore, updateTeam } from '../reducers/scoreReducer';

function Panel({ store }) {
  const state = store.getState();
  const team = state.teamBatting;

  return (
    <div>
      <button onClick={(e) => store.dispatch(updateTeam("home"))}>Home</button>
      <button onClick={(e) => store.dispatch(updateTeam("away"))}>Away</button>
      <button onClick={(e) => store.dispatch(updateScore('one', team))}>1</button>
      <button onClick={(e) => store.dispatch(updateScore('two', team))}>2</button>
      <button onClick={(e) => store.dispatch(updateScore('three', team))}>3</button>
      <button onClick={(e) => store.dispatch(updateScore('four', team))}>4</button>
      <button onClick={(e) => store.dispatch(updateScore('five', team))}>5</button>
      <button onClick={(e) => store.dispatch(updateScore('six', team))}>6</button>
      <button onClick={(e) => store.dispatch(updateScore('wicket', team))}>Wicket</button>
    </div>
  );
 }

export default Panel;
