import {combineReducers, legacy_createStore as createStore} from 'redux';
import {counterReducer} from './counter-reducer';
import {loadState} from '../bll/localStorage'

const rootReducer = combineReducers({
    counter: counterReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, loadState())

// @ts-ignore
window.store = store