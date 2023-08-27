import { ButtonCustom } from 'share/ui/Button'
import { useTranslation } from 'react-i18next'
import { ButtonTheme } from 'share/ui/Button/ui/ButtonCustom'
import cls from './SwitchLanguage.module.scss'
interface SwitchLanguageProps {
    classNames?: string
    children?: React.ReactNode
}
export const SwitchLanguage: React.FC<SwitchLanguageProps> = ({ classNames, children }: SwitchLanguageProps) => {
    const { t, i18n } = useTranslation()
    const toggle = (): void => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (<>
        <ButtonCustom classNames= {cls.left} onClick={() => { toggle() } } theme= {ButtonTheme.SWITCHLANGUAGE}>{t('En')}</ButtonCustom>
    </>)
}
