import React from 'react';
import ReactDOM from 'react-dom';
import RouterIndex from './routers/RouterIndex';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<RouterIndex />, document.getElementById('root'));


serviceWorker.unregister();
