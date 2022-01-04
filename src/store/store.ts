import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import { locationsReducer, uiReducer, weatherReducer } from '../reducers';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducers = combineReducers({
    weather: weatherReducer,
    location : locationsReducer,
    ui: uiReducer
});

export const store = createStore( 
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);