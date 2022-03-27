import React from 'react';
import './App.css';
import Counter from './components/Counter';
import ValueSetter from './components/ValueSetter/ValueSetter';

function App() {
    return (
        <div className="app">
            <div className={'container'}>
                <ValueSetter/>
                <Counter/>
            </div>
        </div>
    );
}

export default App;
