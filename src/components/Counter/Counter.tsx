import React from 'react';
import Button from '../../UI/Button/Button';
import {Output} from './../Output/Output';
import styles from './Counter.module.css'
import {useDispatch} from 'react-redux';
import {incValueAC, resetValueAC} from '../../bll/counter-reducer';
import {loadState} from '../../bll/localStorage';

type CounterType = {
    minValue: number
    maxValue: number
    isDisable: boolean
}

export const Counter = React.memo(({minValue, maxValue, isDisable}: CounterType) => {
    const dispatch = useDispatch()

    const minDefaultValue = loadState()?.counter.minValue || minValue

    const incrementHandler = () => dispatch(incValueAC())
    const resetHandler = () => dispatch(resetValueAC(minDefaultValue))

    const increment = minValue === maxValue || isDisable
    const reset = minValue === minDefaultValue

    return (
        <div className={styles.container_output}>
            <Output minValue={minValue} maxValue={maxValue} isDisable={isDisable}/>
            <div className={styles.buttons}>
                <Button disabled={increment} title={'incr'} onClick={incrementHandler}/>
                <Button disabled={reset} title={'reset'} onClick={resetHandler}/>
            </div>
        </div>
    );
})