import React, {ChangeEvent, useEffect} from 'react';
import Input from '../../UI/Input/Input';
import styles from './Setter.module.css'
import Button from '../../UI/Button/Button'
import {useDispatch} from 'react-redux';
import {saveState} from '../../bll/localStorage';
import {changeMaxValueAC, changeMinValueAC, isDisableAC, resetValueAC} from '../../bll/counter-reducer';
import {store} from '../../bll/store';

type SetterType = {
    minValue: number
    maxValue: number
    isDisable: boolean
};

export const Setter = React.memo(({minValue, maxValue, isDisable} : SetterType) => {
    const dispatch = useDispatch();

    useEffect(() => {
        maxValue <= minValue || minValue < 0
        ? dispatch(isDisableAC(true)) 
        : dispatch(isDisableAC(false))
    }, [minValue, maxValue]);

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => dispatch(changeMaxValueAC(+e.currentTarget.value));
    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => dispatch(changeMinValueAC(+e.currentTarget.value));

    const setLocalStorageHandler = () => {
        dispatch(resetValueAC(minValue))
        saveState({counter: store.getState().counter})
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
                    <Input value={minValue} onChange={onChangeMinHandler} error={isDisable}/>
                </div>
            </form>
            <div className={styles.setter_buttons}>
                <Button title={'set'} onClick={setLocalStorageHandler} disabled={isDisable}/>
            </div>
        </div>
    );
});