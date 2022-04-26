import { useSelector } from 'react-redux';
import './App.css';
import { RootStateType } from './bll/store';
import {Counter} from './components/Counter';
import {Setter} from './components/Setter/Setter';

const App = () => {
    const maxValue = useSelector<RootStateType, number>(state => state.counter.maxValue)
    const minValue = useSelector<RootStateType, number>(state => state.counter.minValue)

    const disable = maxValue <= minValue || minValue < 0

    return (
        <div className="app">
            <div className={'container'}>
                <Setter disable={disable} minValue={minValue} maxValue={maxValue}/>
                <Counter minValue={minValue} maxValue={maxValue}/>
            </div>
        </div>
    );
}

export default App;
