import { I18nextProvider } from 'react-i18next'
import i18n from '../i18next/i18nextTest'
import { render } from '@testing-library/react'
export const i18nextProvider = (component: React.ReactNode) => {
    return (render(<>
        <I18nextProvider i18n={i18n}>
            {component}
        </I18nextProvider>
    </>))
}
