import React, {FC} from 'react';
import styles from './Output.module.css';

type HeaderProps = {
    value: number
}

const Output: FC<HeaderProps> = ({value}) => {
    return (
        <div className={`${styles.output_window} ${value === 5 && styles.output_window_color}`}>
            {value}
        </div>
    );
};

export default Output;