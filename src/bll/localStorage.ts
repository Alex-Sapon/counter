import {RootStateType} from "./store"

export const saveState = (state: RootStateType) => {
    try {
        localStorage.setItem('counter_state', JSON.stringify(state))
    } catch(error) {
        return undefined
    }
}

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('counter_state')
        if (serializedState === null) return
        return JSON.parse(serializedState) as RootStateType
    } catch(error) {
        return undefined
    }
}