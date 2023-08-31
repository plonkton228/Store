import type { Config } from 'jest'

const config: Config = {
    clearMocks: true,
    testEnvironment: 'jsdom',
    rootDir: '',
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
    setupFilesAfterEnv: [
        '<rootDir>/config/jest/setupTest.ts'
    ],
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',

        '\\.(svg|png)': '<rootDir>/config/jest/mockSvg.ts'
    }
}

export default config
