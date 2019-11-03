import React from 'react';
import { updateScore, updateTeam } from '../reducers/scoreReducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Panel({ store }) {
  const state = store.getState();
  const team = state.teamBatting;
  const notify = () => toast("Wow so easy !")

  const onTeamChange = (action) => {
    alert('You have changed the team to ' + action)
    store.dispatch(updateTeam(action))
  }

  const onScoreChange = (action, team) => {
    if (action == "wicket") return toast(action + ' unlucky' + team + ' team')
    toast(action + ' runs! good going ' + team + ' team')
    store.dispatch(updateScore(action, team))
  }

  return (
    <div>
      <ToastContainer autoClose={2000}/>
      <ButtonToolbar
        className="justify-content-center m-2"
        aria-label="Toolbar with Button groups"
      >
        <ButtonGroup size="lg">
          <Button variant="dark" onClick={() => onTeamChange("home")}>Home</Button>
          <Button variant="light" onClick={() => onTeamChange("away")}>Away</Button>
        </ButtonGroup>
      </ButtonToolbar>
      <ButtonToolbar
        className="justify-content-center m-2"
        aria-label="Toolbar with Button groups"
      >
      <ButtonGroup size="lg" className="justify-content-space-between">
        <Button variant="success" onClick={() => onScoreChange("one", team)}>1</Button>
        <Button variant="success" onClick={() => onScoreChange("two", team)}>2</Button>
        <Button variant="success" onClick={() => onScoreChange("three", team)}>3</Button>
        <Button variant="success" onClick={() => onScoreChange("four", team)}>4</Button>
        <Button variant="success" onClick={() => onScoreChange("five", team)}>5</Button>
        <Button variant="success" onClick={() => onScoreChange("six", team)}>6</Button>
      </ButtonGroup>
      </ButtonToolbar>
      <ButtonToolbar
        className="justify-content-center m-2"
        aria-label="Toolbar with Button groups"
      >
      <ButtonGroup size="lg">
        <Button variant="danger" onClick={() => onScoreChange("wicket", team)}>Wicket</Button>
      </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
 }

export default Panel;
