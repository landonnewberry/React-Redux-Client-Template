import React from 'react';
import { render } from 'react-dom';
import Menu from './components/Menu';

import data from 'json-loader!./assets/data.json';

console.log(data)

render(
    <Menu recipes={ data } />,
    document.getElementById('app')
)