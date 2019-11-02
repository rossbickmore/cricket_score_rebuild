export const scoreReducer = (state = [{ name: 'home', score: 0 }, { name: 'away', score: 0 }], action) => {
  const team = state.find(((t) => t.name === action.name));
  switch (action.type) {
    case 'one':
      const newScore = { ...team, score: team.score + 1 };
      return state.map(team =>
        team.name !== action.name ? team : newScore
      )
    case 'two':
            const newScore = { ...team, score: team.score + 2 };
            return state.map(team =>
              team.name !== action.name ? team : newScore
            )
    case 'three':
            const newScore = { ...team, score: team.score + 3 };
            return state.map(team =>
              team.name !== action.name ? team : newScore
            )
    case 'four':
            const newScore = { ...team, score: team.score + 4 };
            return state.map(team =>
              team.name !== action.name ? team : newScore
            )
    case 'five':
            const newScore = { ...team, score: team.score + 5 };
            return state.map(team =>
              team.name !== action.name ? team : newScore
            )
    case 'six':
            const newScore = { ...team, score: team.score + 6 };
            return state.map(team =>
              team.name !== action.name ? team : newScore
            )
    default: // if none of the above matches, code comes here
      return state;
  }
};

export const teamReducer = (state = 'home', action) => {
  switch (action.type) {
    case 'home':
      return state = 'home';
    case 'away':
      return state = 'away';
    default: // if none of the above matches, code comes here
      return state;
  }
};


export const updateScore = (score, name) => ({
  type: score,
  name,
});

export const updateTeam = (team) => ({
  type: team,
});
