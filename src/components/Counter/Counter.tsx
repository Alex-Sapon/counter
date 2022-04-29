import Button from '../../UI/Button/Button';
import {Output} from './../Output/Output';
import {useDispatch, useSelector} from 'react-redux';
import {CounterStateType, incValueAC, resetValueAC} from '../../bll/counter-reducer';
import styles from './Counter.module.css';
import {RootStateType} from '../../bll/store';

export const Counter = () => {
    const {value, minValue, maxValue, isDisable} = useSelector<RootStateType, CounterStateType>(state => state.counter);
    const dispatch = useDispatch();

    const incrementHandler = () => dispatch(incValueAC());
    const resetHandler = () => dispatch(resetValueAC(minValue));

    const increment = value === maxValue || isDisable;
    const reset = value === minValue || isDisable;

    return (
        <div className={styles.container_output}>
            <Output value={value} maxValue={maxValue} isDisable={isDisable}/>
            <div className={styles.buttons}>
                <Button disabled={increment} title={'incr'} onClick={incrementHandler}/>
                <Button disabled={reset} title={'reset'} onClick={resetHandler}/>
            </div>
        </div>
    );
};