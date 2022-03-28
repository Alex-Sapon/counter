import React, {FC, useState} from 'react';
import Button from '../UI/Button/Button';
import Output from './Output/Output';
import styles from './Counter.module.css'

type CounterProps = {
    disable?: boolean
}

const Counter: FC<CounterProps> = ({disable}) => {
    const maxValue: number = JSON.parse(localStorage.getItem('maxValue') || '0')
    const startValue: number = JSON.parse(localStorage.getItem('startValue') || '0')

    const [value, setValue] = useState<number>(startValue)

    const incrementHandler = () => value <= maxValue && setValue(prev => prev + 1)
    const resetHandler = () => setValue(startValue)

    const incrementValue = value === maxValue || disable
    const resetValue = value <= maxValue && value === startValue || disable

    return (
        <div className={styles.container_output}>
            <Output value={value} maxValue={maxValue} disable={disable}/>
            <div className={styles.buttons}>
                <Button disabled={incrementValue} title={'incr'} onClick={incrementHandler}/>
                <Button disabled={resetValue} title={'reset'} onClick={resetHandler}/>
            </div>
        </div>
    );
};

export default Counter;