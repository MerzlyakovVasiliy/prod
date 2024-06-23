/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';
import path from 'path';

const config: Config = {
    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true,
    // The test environment that will be used for testing
    testEnvironment: 'jsdom',
    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: [
        'node_modules',
    ],

    modulePaths: [
        '<rootDir>src',
    ],

    // An array of file extensions your modules use
    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],

    // The root directory that Jest should scan for tests and modules within
    rootDir: '../../',

    // The glob patterns Jest uses to detect test files
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[tj]s?(x)',
    ],

    // A list of paths to directories that Jest should use to search for files in
    roots: [
        '<rootDir>',
    ],

    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],

    moduleNameMapper: {
        '\\.(css|scss)$': '<rootDir>config/jest/identity-obj-proxy-esm.js',
        '\\.(svg)': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },
};

export default config;
