import React from 'react';

const GoodAfternoon = props => <h1>Good afternoon {props.name}!</h1>; // could write here 'export default'

const GoodEvening = props => <h1>Good night {props.name}!</h1>;  // could write here 'export'

export { GoodEvening } // to a property
export default { GoodAfternoon }; // to a object


// in the index.js

// import Multi, { GoodEvening } from './components/Multiples';


// ReactDOM.render(
//   <div>
//     <Multi.GoodAfternoon name='Ana'/>
//     <GoodEvening name='Bia'/>
//   </div>
// , document.getElementById('root'));