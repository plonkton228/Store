import useClassName from 'share/libs/ClassNames/useClassName'
import classesStyle from './ButtonCustom.module.scss'
import { type ButtonHTMLAttributes } from 'react'

export enum ButtonTheme {
    PRIMARY = 'primary',
    SWITCHLANGUAGE = 'SwitchLanguage',
    RESET = 'reset'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    classNames?: string
    theme?: ButtonTheme
    children: React.ReactNode
}

export const ButtonCustom: React.FC<ButtonProps> = ({ classNames, theme, children, ...otherProps }: ButtonProps) => {
    return (<>
        <button
            data-testid='btn-test'
            {...otherProps}
            className= {useClassName({ cls: classesStyle.btn, mode: {}, classes: [classNames, classesStyle[theme]] })}
        >{children}</button>
    </>)
}
