import React from 'react';
import ReactDOM from 'react-dom';
import { ContextProvider } from './contexts/ContextProvider';

import './index.css';
import App from './App';

// to hook our react application to our root div
ReactDOM.render(
    // make sure to wrap you App with the context provider to let all it;s children use it
    <ContextProvider>
        <App />
    </ContextProvider>,
    document.getElementById('root')
);