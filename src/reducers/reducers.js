export const scoreReducer = (state = [
  {
  name: 'home', score: 0, wickets: 0, balls: 0
  },
  {
  name: 'away', score: 0, wickets: 0, balls: 0
  }],
  action) => {
  const teamToChange = state.find((t) => t.name === action.name);
  switch (action.type) {
    case 'one':
      const updatedTeamOne = { ...teamToChange, score: teamToChange.score + 1, balls: teamToChange.balls + 1 };
      return state.map((t) => (t.name !== action.name ? t : updatedTeamOne));
    case 'two':
      const updatedTeamTwo = { ...teamToChange, score: teamToChange.score + 2, balls: teamToChange.balls + 1 };
      return state.map((t) => (t.name !== action.name ? t : updatedTeamTwo));
    case 'three':
      const updatedTeamThree = { ...teamToChange, score: teamToChange.score + 3, balls: teamToChange.balls + 1 };
      return state.map((t) => (t.name !== action.name ? t : updatedTeamThree));
    case 'four':
      const updatedTeamFour = { ...teamToChange, score: teamToChange.score + 4, balls: teamToChange.balls + 1 };
      return state.map((t) => (t.name !== action.name ? t : updatedTeamFour));
    case 'five':
      const updatedTeamFive = { ...teamToChange, score: teamToChange.score + 5, balls: teamToChange.balls + 1 };
      return state.map((t) => (t.name !== action.name ? t : updatedTeamFive));
    case 'six':
      const updatedTeamSix = { ...teamToChange, score: teamToChange.score + 6, balls: teamToChange.balls + 1 };
      return state.map((t) => (t.name !== action.name ? t : updatedTeamSix));
    case 'wicket':
      const updatedTeamWicket = { ...teamToChange, wickets: teamToChange.wickets + 1, balls: teamToChange.balls + 1 };
      return state.map((t) => (t.name !== action.name ? t : updatedTeamWicket));
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

export const oversReducer = (state = 50, action) => {
  switch (action.type) {
    case '10':
      return state = 10;
    case '20':
      return state = 20;
    case '30':
      return state = 30;
    case '40':
      return state = 40;
    case '50':
      return state = 50;
    default: // if none of the above matches, code comes here
      return state;
  }
};


export const updateScore = (type, name) => ({
  type,
  name,
});

export const updateTeam = (team) => ({
  type: team,
});

export const updateOvers = (type) => ({
  type,
})