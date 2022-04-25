const initialState:  CounterStateType = {
    value: 0
}

type CounterStateType = {
    value: number
}

export const  counterReducer = (state: CounterStateType = initialState, action: ActionType): CounterStateType => {
  switch (action.type) {
      case 'INC-VALUE':
          return {...state, value: state.value + 1}
      default:
          return state
  }
}

type ActionType = ReturnType<typeof incValueAC>

export const incValueAC = () => ({type: 'INC-VALUE'} as const)