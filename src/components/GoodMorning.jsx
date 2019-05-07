import React from 'react';

export default props => [
    <h1 key='h1'>Good morning {props.name} {props.teste}!</h1>,
    <h2 key='h2'>See you later!</h2>
];

// import React, { Fragment } from 'react';
// export default props =>
//   <Fragment>
//     <h1>Good morning {props.name}!</h1>
//     <h2>See you later!</h2>
//   </Fragment>


// int the index.js

// import GoodMorning from './components/GoodMorning';

// ReactDOM.render(<GoodMorning name='Fabio' teste='Tester'/>, document.getElementById('root'));
