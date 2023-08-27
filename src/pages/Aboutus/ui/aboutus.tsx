import styleClasses from '../models/about.module.scss'
import { useTranslation } from 'react-i18next'
const AboutUs: React.FC = () => {
    const { t } = useTranslation('about')
    return (<>
        <h1 className= {styleClasses.some}>{t('Страница о нас')}</h1>
    </>)
}
export default AboutUs
