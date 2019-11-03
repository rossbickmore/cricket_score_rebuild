import React from 'react';

function ScoreBoard({team}) {
    return (
        <div>
         Score {team.name} {team.score} - {team.wickets}
        </div>
    );
}

export default ScoreBoard;