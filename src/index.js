import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import App from  './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchAnimals } from './reducers';
import 'tachyons';


const store = createStore(searchAnimals)

ReactDOM.render(
                <Provider store={store}>
                  <App  />
                </Provider>, document.getElementById('root'));  
registerServiceWorker();
