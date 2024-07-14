import { getLoginPassword } from './getLoginPassword';
import { StateSchema } from '../../../../../app/providers/StoreProvider';

describe('getLoginPassword.test', () => {
    describe('should return password', () => {
        it.each([
            // [state, expectedPassword]
            [{ loginForm: { password: 'password123' } }, 'password123'],
            [{ loginForm: { password: '' } }, ''],
            [{ loginForm: {} }, ''],
            [{}, ''],
            [null, ''],
            [undefined, ''],
        ])('given state %j should return %s', (state, expectedPassword) => {
            expect(getLoginPassword(state as StateSchema)).toBe(expectedPassword);
        });
    });
});
