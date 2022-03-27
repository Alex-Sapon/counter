import React, {FC} from 'react'
import styles from './Input.module.css'

type DefaultInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputProps = DefaultInputProps & {

}

const Input: FC<InputProps> = (
    {
        className,
        onChange,
        ...restProps
    }) => {

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event)
    }

    return (
        <input
            type="number"
            placeholder={'value'}
            onChange={onChangeHandler}
            className={`${styles.input} ${className}`}
            {...restProps}
        />
    )
}

export default Input

