import React, {useState, useEffect} from 'react';
import './App.css';
import Counter from './components/Counter';
import Setter from './components/Setter/Setter';

function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)

    useEffect(() => {
        setMaxValue(JSON.parse(localStorage.getItem('maxValue') || '0'))
        setStartValue(JSON.parse(localStorage.getItem('startValue') || '0'))
    }, [])

    const disable = maxValue <= startValue || startValue < 0

    return (
        <div className="app">
            <div className={'container'}>
                <Setter
                    maxValue={maxValue}
                    startValue={startValue}
                    setStartValue={setStartValue}
                    setMaxValue={setMaxValue}
                />
                <Counter disable={disable}/>
            </div>
        </div>
    );
}

export default App;
