import React from 'react';

import Son from './Son';

export default props => 
  <div>
    <h1>{props.name} {props.lastName}</h1>
    <h2>Filhos</h2>
    <ul>
      <Son name='Pedro' lastName={props.lastName}/>
      <Son {...props}/> 
      {/* All father's properties will go to the SON, if they have the same name ...props 'Spread'*/}
      <Son {...props} name='Carla'/>
      {/* Stay the last name and change the Name*/}
    </ul>
  </div>