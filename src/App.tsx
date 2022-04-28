import {useSelector} from 'react-redux';
import './App.css';
import {CounterStateType} from './bll/counter-reducer';
import {RootStateType} from './bll/store';
import {Counter} from './components/Counter/Counter';
import {Setter} from './components/Setter/Setter';

export const App = () => {    
    const {value, minValue, maxValue, isDisable} = useSelector<RootStateType, CounterStateType>(state => state.counter);

    return (
        <div className={'app'}>
            <div className={'container'}>
                <Setter minValue={minValue} maxValue={maxValue} isDisable={isDisable}/>
                <Counter value={value} minValue={minValue} maxValue={maxValue} isDisable={isDisable}/>
            </div>
        </div>
    );
};
