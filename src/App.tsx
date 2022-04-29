import './App.css';
import {Counter} from './components/Counter/Counter';
import {Setter} from './components/Setter/Setter';

export const App = () => {
    return (
        <div className={'app'}>
            <div className={'container'}>
                <Setter/>
                <Counter/>
            </div>
        </div>
    );
};
