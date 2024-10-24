import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const increment = () => ({ type: 'INCREMENT' });
const decrement = () => ({ type: 'DECREMENT' });

const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

const store = createStore(counterReducer);

const CounterComponent = ({ count, increment, decrement }) => {
    return (
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
        </div>
    );
};

const mapStateToProps = (state) => ({ count: state.count });
const mapDispatchToProps = { increment, decrement };

const ConnectedCounterComponent = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

export const CounterApp = () => (
    <Provider store={store}>
        <ConnectedCounterComponent />
    </Provider>
);
