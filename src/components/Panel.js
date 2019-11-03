import React from 'react';
import { updateScore, updateTeam } from '../reducers/scoreReducer';

function Panel({ store }) {
  const state = store.getState();
  const team = state.teamBatting;

  const onTeamChange = (action) => {
    alert('You have changed the team to ' + action)
    store.dispatch(updateTeam(action))
  }

  const onScoreChange = (action, team) => {
    store.dispatch(updateScore(action, team))
  }

  return (
    <div>
      <button onClick={() => onTeamChange("home")}>Home</button>
      <button onClick={() => onTeamChange("away")}>Away</button>
      <button onClick={() => onScoreChange("one", team)}>1</button>
      <button onClick={() => onScoreChange("two", team)}>2</button>
      <button onClick={() => onScoreChange("three", team)}>3</button>
      <button onClick={() => onScoreChange("four", team)}>4</button>
      <button onClick={() => onScoreChange("five", team)}>5</button>
      <button onClick={() => onScoreChange("six", team)}>6</button>
      <button onClick={() => onScoreChange("wicket", team)}>Wicket</button>
    </div>
  );
 }

export default Panel;
