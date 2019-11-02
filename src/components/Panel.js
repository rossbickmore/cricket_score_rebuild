import React from 'react';
import { updateScore, updateTeam } from '../reducers/scoreReducer';

function Panel({ store }) {
//   const state = store.getState();
//   const team = state.team;

  return (
    <div>
      <button onClick={(e) => store.dispatch(updateTeam("home"))}>Home</button>
      <button onClick={(e) => store.dispatch(updateTeam("away"))}>Away</button>
      <button onClick={(e) => store.dispatch(updateScore('one', 'home'))}>1</button>
      <button onClick={(e) => store.dispatch(updateScore('two', 'home'))}>2</button>
      <button onClick={(e) => store.dispatch(updateScore('three', 'home'))}>3</button>
      <button onClick={(e) => store.dispatch(updateScore('four', 'home'))}>4</button>
      <button onClick={(e) => store.dispatch(updateScore('five', 'home'))}>5</button>
      <button onClick={(e) => store.dispatch(updateScore('six', 'home'))}>6</button>
    </div>
  );
 }

export default Panel;
