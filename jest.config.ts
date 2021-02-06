export default {
    clearMocks: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    rootDir: './',
    moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\ts$': 'ts-jest'
    },
    testMatch: ['**/src/**/*.test.ts']
};
