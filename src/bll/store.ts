import {combineReducers, legacy_createStore as createStore} from 'redux';
import {counterReducer} from './counter-reducer';
import {loadState, saveState} from '../bll/localStorage'

const rootReducer = combineReducers({
    counter: counterReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, loadState())

// store.subscribe(() => {
//     saveState({
//         counter: store.getState().counter
//     })
// })

// @ts-ignore
window.store = store