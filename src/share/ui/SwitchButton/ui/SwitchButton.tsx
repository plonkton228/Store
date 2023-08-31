import useTheme from 'share/libs/Theme/useTheme'
import { ButtonCustom } from 'share/ui/Button'
import { ButtonTheme } from 'share/ui/Button/ui/ButtonCustom'
import Moon from '../imgs/Moon.png'
import Sun from '../imgs/Sun.png'
import { Theme } from 'app/providers/Themes/lib/ThemeContext'
import cls from '../ui/SwitchButton.module.scss'
interface SwithcButtonProps {
    classNames?: string
    children?: React.ReactNode
}

export const SwitchButton: React.FC<SwithcButtonProps> = ({ children }: SwithcButtonProps) => {
    const { theme, toggleTheme } = useTheme()
    return (<>
        <ButtonCustom data-testid= 'ButtonSwitch' onClick={() => { toggleTheme(theme) }} theme= {ButtonTheme.RESET} classNames= {cls.left}>
            {theme === Theme.DARK ? <img className= {cls.img} src= {Moon}/> : <img className= {cls.img} src= {Sun}/>}
            {children}
        </ButtonCustom>

    </>)
}
