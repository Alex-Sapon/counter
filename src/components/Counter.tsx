import React, {useState} from 'react';
import Button from '../UI/Button';
import styles from './Counter.module.css'
import Header from './Header/Header';

const Counter = () => {
    const [value, setValue] = useState<number>(0)

    const incrementHandler = () => setValue(prev => prev + 1) // value <= 5 &&
    const resetHandler = () => setValue(0)

    const incrementValue = value >= 5
    const resetValue = value < 1 && value < 6

    return (
        <div className={styles.container}>
            <Header value={value}/>
            <div className={styles.buttons}>
                <Button disabled={incrementValue} title={'incr'} onClick={incrementHandler}/>
                <Button disabled={resetValue} title={'reset'} onClick={resetHandler}/>
            </div>
        </div>
    );
};

export default Counter;