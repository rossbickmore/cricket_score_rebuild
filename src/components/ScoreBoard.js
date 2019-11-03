import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function ScoreBoard({team, overs}) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title className="text-center"><Badge variant="secondary"><h2>{team.name}</h2></Badge></Card.Title>
            <Card.Text>
                <p >Score {team.name} {team.score} - {team.wickets} </p>
                <p>Overs bowled: {Math.floor(team.balls / 6)} </p>
                <p>Overs left: {overs - Math.floor(team.balls / 6) }</p>
            </Card.Text>
            </Card.Body>
         </Card>
    );
}

export default ScoreBoard;
