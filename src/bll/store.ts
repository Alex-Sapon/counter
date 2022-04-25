import {combineReducers, legacy_createStore as createStore} from 'redux';
import {counterReducer} from './counter-reducer';

const rootReducer = combineReducers({
    counter: counterReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store