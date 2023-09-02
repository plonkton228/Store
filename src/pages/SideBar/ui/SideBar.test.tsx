import { fireEvent, screen } from '@testing-library/react'
import { SideBar } from './SideBar'
import { i18nextProvider } from 'share/libs/i18nextProvider/i18nextProvider'

describe('Sidebar', () => {
    test('Initila Test', () => {
        i18nextProvider(<SideBar/>)
        expect(screen.getByTestId('SidebarId')).toBeInTheDocument()
    })

    test('Collapse Test', () => {
        i18nextProvider(<SideBar/>)
        const button = screen.getByTestId('btn')
        expect(screen.getByTestId('SidebarId')).toBeInTheDocument()
        fireEvent.click(button)
        expect(screen.getByTestId('SideBarContainer')).toHaveClass('collapsed')
    })
})
