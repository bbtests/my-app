'use client';
import styles from './Button.module.scss';
const Button = ({word}:any) => {
    return <button className={`${styles.btn} px-4  py-2`} type= "submit">{word}</button>
}

export default Button;