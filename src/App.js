/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Panel from './components/Panel'
import Settings from './components/Settings'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import ScoreBoard from './components/ScoreBoard';

function App({ store }) {
  const state = store.getState();
  const home = state.scores.find((t) => t.name === 'home');
  const away = state.scores.find((t) => t.name === 'away');
  return (
    <div className="App">
      <Container>
        <Navbar bg="light" expand="lg" className="mb-5">
          <h1 className="text-center">My cricket scorboard</h1>
        </Navbar>
        <Settings store={store}/>
        <Row className="justify-content-center mt-5">
          <Col><ScoreBoard team={home} overs={state.overs} /></Col>
          <Col><Panel store={store} /></Col>
          <Col><ScoreBoard team={away} overs={state.overs} /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
