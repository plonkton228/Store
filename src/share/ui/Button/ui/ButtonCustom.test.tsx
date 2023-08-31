import { render, screen } from '@testing-library/react'
import { ButtonCustom, ButtonTheme } from './ButtonCustom'

describe('ButtonTest', () => {
    test('Children test', () => {
        render(<ButtonCustom>Button</ButtonCustom>)
        expect(screen.getByTestId('btn-test')).toBeInTheDocument()
    })
    test('ClassTestButton', () => {
        render(<ButtonCustom theme= {ButtonTheme.PRIMARY}>Button</ButtonCustom>)
        expect(screen.getByTestId('btn-test')).toHaveClass('primary')
    })
})
