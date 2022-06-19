import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';
import Counter from './components/Counter';
import counter from './reducers';

const store = createStore(counter);
const root = ReactDOM.createRoot(document.getElementById('root'));

const render = () => root.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />
);

render();
store.subscribe(render);
