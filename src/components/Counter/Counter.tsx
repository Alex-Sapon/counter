import React from 'react';
import Button from '../../UI/Button/Button';
import {Output} from './../Output/Output';
import {useDispatch} from 'react-redux';
import {incValueAC, resetValueAC} from '../../bll/counter-reducer';
import styles from './Counter.module.css';

type CounterType = {
    value: number
    minValue: number
    maxValue: number
    isDisable: boolean
};

export const Counter = React.memo(({value, minValue, maxValue, isDisable}: CounterType) => {
    const dispatch = useDispatch();

    const incrementHandler = () => dispatch(incValueAC());
    const resetHandler = () => dispatch(resetValueAC(minValue));

    const increment = value === maxValue || isDisable;
    const reset = minValue === value || isDisable;

    return (
        <div className={styles.container_output}>
            <Output value={value} maxValue={maxValue} isDisable={isDisable}/>
            <div className={styles.buttons}>
                <Button disabled={increment} title={'incr'} onClick={incrementHandler}/>
                <Button disabled={reset} title={'reset'} onClick={resetHandler}/>
            </div>
        </div>
    );
});