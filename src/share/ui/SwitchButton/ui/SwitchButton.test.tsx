import { render, screen } from '@testing-library/react'
import { SwitchButton } from './SwitchButton'

describe('TestSwitchButton', () => {
    test('FirstTest', () => {
        render(<SwitchButton></SwitchButton>)
        expect(screen.getByTestId('ButtonSwitch')).toBeInTheDocument()
    })
})
