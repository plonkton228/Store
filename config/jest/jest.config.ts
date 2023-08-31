import type { Config } from 'jest'

const config: Config = {
    clearMocks: true,
    testEnvironment: 'jsdom',
    rootDir: '/Web/Solopharma',
    roots: ['<rootDir>'],
    moduleDirectories: ['node_modules'],
    modulePaths: ['<rootDir>src'],
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node'
    ],
    testMatch: [
        // Обнаружил разницу между МАК ОС и ВИНДОУС!!!
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
    ],
    moduleNameMapper: { '\\.(css|scss)$': 'src/share/ui/Button/ui/ButtonCustom.tsx' }
}

export default config
