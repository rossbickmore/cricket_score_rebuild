import React from 'react';
import { updateOvers } from '../actions/actions';

function Settings({ store }) {
  const state = store.getState()
  return (
    <div className="text-center">
       Length of game:
      <select name="overs" value={state.overs} onChange={(event) => store.dispatch(updateOvers(event.target.value))}>
         <option value="10">10</option>
         <option value="20">20</option>
         <option value="30">30</option>
         <option value="40">40</option>
         <option value="50">50</option>
      </select>
    </div>
  );
}

export default Settings;
