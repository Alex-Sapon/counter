import {useSelector} from 'react-redux';
import './App.css';
import {CounterStateType} from './bll/counter-reducer';
import {RootStateType} from './bll/store';
import {Counter} from './components/Counter/Counter';
import {Setter} from './components/Setter/Setter';

export const App = () => {    
    const counter = useSelector<RootStateType, CounterStateType>(state => state.counter)

    return (
        <div className="app">
            <div className={'container'}>
                <Setter minValue={counter.minValue} maxValue={counter.maxValue} isDisable={counter.isDisable}/>
                <Counter minValue={counter.minValue} maxValue={counter.maxValue} isDisable={counter.isDisable}/>
            </div>
        </div>
    )
}
