import React, {useState, useEffect} from 'react';
import './App.css';
import Counter from './components/Counter';
import {Setter} from './components/Setter/Setter';

const App = () => {
    const max: number = JSON.parse(localStorage.getItem('maxValue') || '0')
    const start: number = JSON.parse(localStorage.getItem('startValue') || '0')

    const [maxValue, setMaxValue] = useState<number>(max)
    const [startValue, setStartValue] = useState<number>(start)

    const setLocalStorageHandler = () => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        setMaxValue(max)
        setStartValue(start)
    }

    useEffect(() => {
        setMaxValue(max)
        setStartValue(start)
    }, [max, start])

    const disable = maxValue <= startValue || startValue < 0

    return (
        <div className="app">
            <div className={'container'}>
                <Setter
                    maxValue={maxValue}
                    startValue={startValue}
                    setStartValue={setStartValue}
                    setMaxValue={setMaxValue}
                    setLocalStorageHandler={setLocalStorageHandler}
                />
                <Counter
                    max={max}
                    start={start}
                    disable={disable}
                />
            </div>
        </div>
    );
}

export default App;
