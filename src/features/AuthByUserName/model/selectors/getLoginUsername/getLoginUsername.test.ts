import { getLoginUsername } from './getLoginUsername';
import { StateSchema } from '../../../../../app/providers/StoreProvider';

describe('getLoginUsername.test', () => {
    describe('should return username', () => {
        it.each([
            // [state, expectedUsername]
            [{ loginForm: { username: 'user123' } }, 'user123'],
            [{ loginForm: { username: '' } }, ''],
            [{ loginForm: {} }, ''],
            [{}, ''],
            [null, ''],
            [undefined, ''],
        ])('given state %j should return %s', (state, expectedUsername) => {
            expect(getLoginUsername(state as StateSchema)).toBe(expectedUsername);
        });
    });
});
