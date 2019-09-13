import React from 'react';
import ReactDOM from 'react-dom';
import RouterIndex from './routers/RouterIndex'
import * as serviceWorker from './serviceWorker';
import "antd/dist/antd.css";
import './index.css'



ReactDOM.render(
    <RouterIndex />
    ,
    document.getElementById('root')
);

serviceWorker.unregister();
