import React, {FC} from 'react';
import styles from './Header.module.css';

type HeaderProps = {
    value: number
}

const Header: FC<HeaderProps> = ({value}) => {
    return (
        <div className={`${styles.window} ${value === 5 && styles.window_color}`}>
            {value}
        </div>
    );
};

export default Header;