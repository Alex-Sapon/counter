import React from 'react';
import styles from './Output.module.css';

type HeaderType = {
    minValue: number
    maxValue: number
    isDisable: boolean
}

export const Output = React.memo(({minValue, maxValue, isDisable}: HeaderType) => {    
    const headerStyles = `
        ${styles.output_window} 
        ${minValue === maxValue && styles.output_limit}
        ${isDisable && styles.output_error}
    `

    return (
        <div className={headerStyles}>
            {isDisable ? 'You entered an invalid value!' : minValue}
        </div>
    );
})