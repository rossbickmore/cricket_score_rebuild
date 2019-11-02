import React from 'react';

function Panel( {store}) {
  return (
    <div>
      <button onClick={(e) => store.dispatch({ type: 'one' })}>1</button>
      <button onClick={(e) => store.dispatch({ type: 'two' })}>2</button>
      <button onClick={(e) => store.dispatch({ type: 'three' })}>3</button>
      <button onClick={(e) => store.dispatch({ type: 'four' })}>4</button>
      <button onClick={(e) => store.dispatch({ type: 'five' })}>5</button>
      <button onClick={(e) => store.dispatch({ type: 'six' })}>6</button>
    </div>
  );
}

export default Panel;
