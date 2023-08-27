import useClassName from './useClassName'

describe('testClassNames', () => {
    test('AddMainScssClass', () => {
        expect(useClassName({ cls: 'df', mode: {}, classes: ['dfg'] })).toBe('df dfg')
    })

    test('AddModeScssClass', () => {
        expect(useClassName({ cls: 'df', mode: { hover: true }, classes: ['dfg'] })).toBe('df hover dfg')
    })

    test('WithoutMainCssClass', () => {
        expect(useClassName({ cls: '', mode: { hover: false }, classes: ['dfg'] })).toBe(' dfg')
    })
})
