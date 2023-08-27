import { LinkCustom } from 'share/ui/Links/index'
import { Themes } from 'share/ui/Links/ui/LinkCustom'
import classesStyle from './NavBar.module.scss'
import useClassName from 'share/libs/ClassNames/useClassName'
import { SwitchButton } from 'share/ui/SwitchButton'
import { useTranslation } from 'react-i18next'
import { SwitchLanguage } from 'share/ui/SwitchLanguage'
interface NavBarProps {
    classNames?: string
}
export const NavBar: React.FC<NavBarProps> = ({ classNames }: NavBarProps) => {
    const { t } = useTranslation('translation')

    return (<>
        <div className= {useClassName({ cls: classesStyle.NavBar, mode: {}, classes: [] })}>
            <div className= {useClassName({ cls: classesStyle.container, mode: {}, classes: [] })}>
                <LinkCustom to = '/' theme= {Themes.SECONDARY}>{t('Главная')}</LinkCustom>
                <LinkCustom to = '/about' theme= {Themes.SECONDARY} classNames={classesStyle.Left}>{t('О нас')}</LinkCustom>
                <SwitchLanguage/>
                <SwitchButton></SwitchButton>
            </div>
        </div>
    </>)
}
