import React from 'react';

function ScoreBoard({team, overs}) {
    return (
        <div>
         <p>Score {team.name} {team.score} - {team.wickets} </p>
         <p>Overs bowled: {Math.floor(team.balls / 6)} </p>
         <p>Overs left: {overs - Math.floor(team.balls / 6) }</p>         
        </div>
    );
}

export default ScoreBoard;