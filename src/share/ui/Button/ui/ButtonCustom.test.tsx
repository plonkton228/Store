import { render, screen } from '@testing-library/react'
import { ButtonCustom, ButtonTheme } from './ButtonCustom'

describe('ButtonTest', () => {
    test('Children test', () => {
        render(<ButtonCustom>Button</ButtonCustom>)
        expect(screen.getByText('Button')).toBeInTheDocument()
    })
    test('ClassTestButton', () => {
        render(<ButtonCustom theme= {ButtonTheme.PRIMARY}>Button</ButtonCustom>)
        expect(screen.getByText('Button')).toHaveClass('primary')
    })
})
