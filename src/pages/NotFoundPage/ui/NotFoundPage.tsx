import { useTranslation } from 'react-i18next'
import cls from './NotFoundPage.module.scss'

export const NotFoundPage: React.FC = () => {
    const { t } = useTranslation()
    return (<>
        <div className= {cls.container}>
            {t('Страница не найдена')}
        </div>
    </>)
}
