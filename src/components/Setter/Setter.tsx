import React, {ChangeEvent, useEffect, useState} from 'react';
import Input from '../../UI/Input/Input';
import styles from './Setter.module.css'
import Button from '../../UI/Button/Button'
import {useDispatch} from 'react-redux';
import {saveState} from '../../bll/localStorage';
import {changeMaxValueAC, changeMinValueAC, isDisableAC} from '../../bll/counter-reducer';
import {store} from '../../bll/store';

type SetterType = {
    minValue: number
    maxValue: number
    isDisable: boolean
}

export const Setter = React.memo(({minValue, maxValue, isDisable} : SetterType) => {
    const [endValue, setEndValue] = useState(maxValue)
    const [startValue, setStartValue] = useState(minValue)

    useEffect(() => {
        endValue <= startValue || startValue < 0
            ? dispatch(isDisableAC(true))
            : dispatch(isDisableAC(false))
    }, [startValue, endValue])

    const dispatch = useDispatch()

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => setEndValue(+e.currentTarget.value)
    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => setStartValue(+e.currentTarget.value)

    const setLocalStorageHandler = () => {
        dispatch(changeMaxValueAC(endValue))
        dispatch(changeMinValueAC(startValue))
        saveState({counter: store.getState().counter})
    }

    return (
        <div className={styles.setter_container}>
            <form className={styles.setter_inputs}>
                <div>
                    <span className={styles.setter_text}>max value:</span>
                    <Input value={endValue} onChange={onChangeMaxHandler} error={isDisable}/>
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
})