import React, {FC, ChangeEvent, useState} from 'react';
import Input from '../../UI/Input/Input';
import styles from './Setter.module.css'
import Button from '../../UI/Button/Button'
import {useDispatch} from 'react-redux';
import {saveState} from '../../bll/localStorage';
import {changeMaxValueAC, changeMinValueAC} from '../../bll/counter-reducer';
import {store} from '../../bll/store';

type SetterType = {
    disable: boolean
    minValue: number
    maxValue: number
}

export const Setter: FC<SetterType> = ({disable, minValue, maxValue}) => {
    const [endValue, setEndValue] = useState(maxValue)
    const [startValue, setStartValue] = useState(minValue)

    const dispatch = useDispatch()

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => setEndValue(+e.currentTarget.value)
    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => setStartValue(+e.currentTarget.value)

    const setLocalStorageHandler = () => {
        dispatch(changeMaxValueAC(endValue))
        dispatch(changeMinValueAC(startValue))

        saveState({counter: store.getState().counter})
    }

    const disabled = endValue <= startValue || startValue < 0

    return (
        <div className={styles.setter_container}>
            <form className={styles.setter_inputs}>
                <div>
                    <span className={styles.setter_text}>max value:</span>
                    <Input value={endValue} onChange={onChangeMaxHandler} error={disabled}/>
                </div>
                <div>
                    <span className={styles.setter_text}>start value:</span>
                    <Input value={startValue} onChange={onChangeMinHandler} error={disabled}/>
                </div>
            </form>
            <div className={styles.setter_buttons}>
                <Button title={'set'} onClick={setLocalStorageHandler} disabled={disabled}/>
            </div>
        </div>
    );
};