import React, {FC} from 'react';
import styles from './Output.module.css';

type HeaderProps = {
    minValue: number
    maxValue: number
    disable: boolean
}

export const Output: FC<HeaderProps> = ({minValue, maxValue, disable}) => {
    const headerStyles = `
        ${styles.output_window} 
        ${minValue === maxValue && styles.output_limit}
        ${disable && styles.output_error}
    `

    return (
        <div className={headerStyles}>
            {disable ? 'You entered an invalid value!' : minValue}
        </div>
    );
};