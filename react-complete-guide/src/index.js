import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/Persons/Person/Person.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App appTitle="Person Manager" />, document.getElementById('root'));
registerServiceWorker();
