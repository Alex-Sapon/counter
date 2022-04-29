import {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

import {saveState} from '../../bll/localStorage';
import {
    changeMaxValueAC,
    changeMinValueAC,
    CounterStateType,
    isDisableAC,
    resetValueAC
} from '../../bll/counter-reducer';
import {RootStateType, store} from '../../bll/store';

import styles from './Setter.module.css';

export const Setter = () => {
    const {minValue, maxValue, isDisable} = useSelector<RootStateType, CounterStateType>(state => state.counter);
    const [startValue, setStartValue] = useState<number>(minValue);
    const dispatch = useDispatch();

    useEffect(() => {
        maxValue <= startValue || startValue < 0
            ? dispatch(isDisableAC(true))
            : dispatch(isDisableAC(false))
    }, [startValue, maxValue]);

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => dispatch(changeMaxValueAC(+e.currentTarget.value));
    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => setStartValue(+e.currentTarget.value);

    const setLocalStorageHandler = () => {
        dispatch(changeMinValueAC(startValue));
        dispatch(resetValueAC(startValue));
        saveState({counter: store.getState().counter});
    };

    return (
        <div className={styles.setter_container}>
            <form className={styles.setter_inputs}>
                <div>
                    <span className={styles.setter_text}>max value:</span>
                    <Input value={maxValue} onChange={onChangeMaxHandler} error={isDisable}/>
                </div>
                <div>
                    <span className={styles.setter_text}>start value:</span>
                    <Input value={startValue} onChange={onChangeMinHandler} error={isDisable}/>
                </div>
            </form>
            <div className={styles.setter_buttons}>
                <Button title={'set'} onClick={setLocalStorageHandler} disabled={isDisable}/>
            </div>
        </div>
    );
};