const initialState: CounterStateType = {
    value: 0,
    minValue: 0,
    maxValue: 1,
    isDisable: false,
};

export type CounterStateType = {
    value: number
    minValue: number
    maxValue: number
    isDisable: boolean
};

export const counterReducer = (state: CounterStateType = initialState, action: ActionType): CounterStateType => {
    switch (action.type) {
        case 'INC-VALUE':
            return {...state, value: state.value + 1};
        case 'RESET-VALUE':
            return {...state, value: action.value};
        case 'CHANGE-MIN-VALUE':
            return {...state, minValue: action.minValue};
        case 'CHANGE-MAX-VALUE':
            return {...state, maxValue: action.maxValue};
        case 'IS-DISABLE':
            return {...state, isDisable: action.isDisable};
        default:
            return state;
    };
};

type ActionType = ReturnType<typeof incValueAC> | ReturnType<typeof resetValueAC> 
| ReturnType<typeof changeMinValueAC> | ReturnType<typeof changeMaxValueAC>
| ReturnType<typeof isDisableAC>

export const incValueAC = () => ({type: 'INC-VALUE'}) as const;
export const resetValueAC = (value: number) => ({type: 'RESET-VALUE', value}) as const;
export const changeMinValueAC = (minValue: number) => ({type: 'CHANGE-MIN-VALUE', minValue}) as const;
export const changeMaxValueAC = (maxValue: number) => ({type: 'CHANGE-MAX-VALUE', maxValue}) as const;
export const isDisableAC = (isDisable: boolean) => ({type: 'IS-DISABLE', isDisable}) as const;