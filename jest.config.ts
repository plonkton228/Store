import type { Config } from 'jest'
const config: Config = {
    clearMocks: true,
    testEnvironment: 'jsdom',
    rootDir: '',
    roots: ['<rootDir>src'],
    moduleDirectories: ['node_modules', '<rootDir>src'],
    modulePaths: ['<rootDir>'],
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
        '<rootDir>/config/jest/setup/setupTest.ts'
    ],
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',

        '\\.(svg|png)': '<rootDir>/config/jest/setup/mockSvg.ts'

    }

}

export default config
