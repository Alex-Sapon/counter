import React, {FC} from 'react';
import styles from './Button.module.css'

type DefaultButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button: FC<DefaultButtonProps> = (
    {
        className, onClick,
        disabled, title
    }) => {

    return (
        <button className={`${styles.button} ${className}`} disabled={disabled} onClick={onClick}>
            {title}
        </button>
    );
};

export default Button;