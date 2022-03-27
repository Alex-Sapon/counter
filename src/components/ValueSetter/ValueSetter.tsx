import React, {FC, useEffect, useState} from 'react';
import Input from '../../UI/Input/Input';
import styles from './ValueSetter.module.css'
import Button from '../../UI/Button/Button';

type ValueSetterProps = {}

const ValueSetter: FC<ValueSetterProps> = () => {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)

    useEffect(() => {
        setMaxValue(JSON.parse(localStorage.getItem('maxValue') || '') as number);
    }, [])

    useEffect(() => {
        setStartValue(JSON.parse(localStorage.getItem('startValue') || '') as number);
    }, [])

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])

    const setLocalStorageHandler = () => {}

    const onChangeMaxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+event.currentTarget.value)
    }

    const onChangeStartHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStartValue(+event.currentTarget.value)
    }

    const disable = maxValue <= startValue && startValue < 0
    console.log(disable)

    return (
        <div className={styles.setter_container}>
            <div className={styles.setter_inputs}>
                <div>
                    <span className={styles.setter_text}>max value:</span>
                    <Input
                        value={maxValue}
                        onChange={onChangeMaxHandler}
                    />
                </div>
                <div>
                    <span className={styles.setter_text}>start value:</span>
                    <Input
                        value={startValue}
                        onChange={onChangeStartHandler}
                    />
                </div>
            </div>
            <div className={styles.setter_buttons}>
                <Button
                    title={'set'}
                    onClick={setLocalStorageHandler}
                    disabled={disable}
                />
            </div>
        </div>
    );
};

export default ValueSetter;