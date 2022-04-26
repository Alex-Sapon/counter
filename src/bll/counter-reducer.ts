const initialState: CounterStateType = {
    minValue: 0,
    maxValue: 1
}

export type CounterStateType = {
    minValue: number
    maxValue: number
}

export const counterReducer = (state: CounterStateType = initialState, action: ActionType): CounterStateType => {
    switch (action.type) {
        case 'INC-VALUE':
            return {...state, minValue: state.minValue + 1}
        case 'RESET-VALUE':
            return {...state, minValue: action.value}
        case 'CHANGE-MIN-VALUE':
            return {...state, minValue: action.minValue}
        case 'CHANGE-MAX-VALUE':
            return {...state, maxValue: action.maxValue}
        default:
            return state
    }
}

type ActionType = ReturnType<typeof incValueAC> 
| ReturnType<typeof resetValueAC> 
| ReturnType<typeof changeMinValueAC> 
| ReturnType<typeof changeMaxValueAC>

export const incValueAC = () => ({type: 'INC-VALUE'} as const)
export const resetValueAC = (value: number) => ({type: 'RESET-VALUE', value} as const)
export const changeMinValueAC = (minValue: number) => ({type: 'CHANGE-MIN-VALUE', minValue} as const)
export const changeMaxValueAC = (maxValue: number) => ({type: 'CHANGE-MAX-VALUE', maxValue} as const)