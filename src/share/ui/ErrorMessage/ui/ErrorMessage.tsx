import { useTranslation } from 'react-i18next'
import { ButtonCustom } from 'share/ui/Button'
import { ButtonTheme } from 'share/ui/Button/ui/ButtonCustom'
import cls from './ErrorMessage.module.scss'
interface ErrorMessageProps {
    classNames?: string
    children?: React.ReactNode
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ children, classNames }: ErrorMessageProps) => {
    const { t } = useTranslation()
    const Reload = (): void => {
        location.reload()
    }
    return (<>
        <div className= { cls.container }>
            <h1>{t('Похоже что-то пошло не так!')}</h1>
            <ButtonCustom onClick={ Reload } classNames={cls.btn} theme= {ButtonTheme.PRIMARY}>{t('Перезагрузить страницу')}</ButtonCustom>
        </div>
    </>)
}
