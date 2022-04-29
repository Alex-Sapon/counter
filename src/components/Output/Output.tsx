import React from 'react';
import styles from './Output.module.css';

type HeaderType = {
    value: number
    maxValue: number
    isDisable: boolean
};

export const Output = React.memo(({value, maxValue, isDisable}: HeaderType) => {
    const headerStyles = `
        ${styles.output_window} 
        ${value === maxValue && styles.output_limit}
        ${isDisable && styles.output_error}
    `

    return (
        <div className={headerStyles}>
            {isDisable ? 'You entered an invalid value!' : value}
        </div>
    )
});