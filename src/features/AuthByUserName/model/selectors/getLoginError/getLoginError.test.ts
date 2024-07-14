import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
    describe('should return error', () => {
        it.each([
            // [state, expectedError]
            [{ loginForm: { error: 'Some error' } }, 'Some error'],
            [{ loginForm: { error: '' } }, ''],
            [{ loginForm: {} }, ''],
            [{}, ''],
            [null, ''],
            [undefined, ''],
        ])('given state %j should return %s', (state, expectedError) => {
            expect(getLoginError(state)).toBe(expectedError);
        });
    });
});
