import React, {FC} from 'react';
import Input from '../../UI/Input/Input';
import styles from './Setter.module.css'
import Button from '../../UI/Button/Button'

type SetterProps = {
    startValue: number
    maxValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
}

const Setter: FC<SetterProps> = ({startValue, maxValue, setMaxValue, setStartValue}) => {
    const setLocalStorageHandler = () => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }

    const onChangeMaxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+event.currentTarget.value)
    }

    const onChangeStartHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStartValue(+event.currentTarget.value)
    }

    const disable = maxValue <= startValue || startValue < 0

    return (
        <div className={styles.setter_container}>
            <form className={styles.setter_inputs}>
                <div>
                    <span className={styles.setter_text}>max value:</span>
                    <Input value={maxValue} onChange={onChangeMaxHandler} error={disable}/>
                </div>
                <div>
                    <span className={styles.setter_text}>start value:</span>
                    <Input value={startValue} onChange={onChangeStartHandler} error={disable}/>
                </div>
            </form>
            <div className={styles.setter_buttons}>
                <Button title={'set'} onClick={setLocalStorageHandler} disabled={disable}/>
            </div>
        </div>
    );
};

export default Setter;