import useClassName from 'share/libs/ClassNames/useClassName'
import cls from '../models/styles/SideBar.module.scss'
import { useState } from 'react'
import { ButtonCustom } from 'share/ui/Button'
import { ButtonTheme } from 'share/ui/Button/ui/ButtonCustom'
import { useTranslation } from 'react-i18next'

interface SideBarProps {
    classNames?: string
    children?: React.ReactNode
}

export const SideBar: React.FC<SideBarProps> = ({ children }: SideBarProps) => {
    const { t } = useTranslation()
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const toggle = (): void => {
        setCollapsed(prev => !prev)
    }
    return (<>
        <div className= {useClassName({ cls: cls.Sidebar, mode: {}, classes: [] })}>
            <div className = {useClassName({ cls: cls.left, mode: { [cls.collapsed]: collapsed }, classes: [] })}>
                <ButtonCustom theme= {ButtonTheme.PRIMARY} onClick={() => { toggle() }}>{t('Свернуть')}</ButtonCustom>
            </div>
            <div className = {useClassName({ cls: cls.right, mode: {}, classes: [] })}>
                {children}
            </div>
        </div>
    </>)
}
