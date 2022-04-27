import {changeMaxValueAC, changeMinValueAC, counterReducer, CounterStateType, incValueAC, isDisableAC, resetValueAC} from '../bll/counter-reducer'

test('min value should be incremented plus one', () => {
    const initialState: CounterStateType = {
        minValue: 0,
        maxValue: 1,
        isDisable: false
    }

    const endState = counterReducer(initialState, incValueAC())

    expect(initialState.minValue).toBe(0)
    expect(endState.minValue).toBe(1)
})

test('min value should be reseted to start min value', () => {
    const initialState: CounterStateType = {
        minValue: 5,
        maxValue: 1,
        isDisable: false
    }

    const endState = counterReducer(initialState, resetValueAC(0))

    expect(endState.minValue).toBe(0)
})

test('min value should be changed', () => {
    const initialState: CounterStateType = {
        minValue: 0,
        maxValue: 1,
        isDisable: false
    }

    const endState = counterReducer(initialState, changeMinValueAC(4))
    
    expect(endState.minValue).toBe(4)
})

test('max value should be changed', () => {
    const initialState: CounterStateType = {
        minValue: 0,
        maxValue: 1,
        isDisable: false
    }

    const endState = counterReducer(initialState, changeMaxValueAC(8))
    
    expect(endState.maxValue).toBe(8)
})

test('disable should be changed from false to true', () => {
    const initialState: CounterStateType = {
        minValue: 0,
        maxValue: 1,
        isDisable: false
    }

    const endState = counterReducer(initialState, isDisableAC(true))
    
    expect(endState.isDisable).toBe(true)
})