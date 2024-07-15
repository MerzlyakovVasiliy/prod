import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
    describe('should return isLogin', () => {
        it.each([
            // [state, expectedIsLogin]
            [{ loginForm: { isLogin: true } }, true],
            [{ loginForm: { isLogin: false } }, false],
            [{ loginForm: {} }, false],
            [{}, false],
            [null, false],
            [undefined, false],
        ])('given state %j should return %s', (state, expectedIsLogin) => {
            expect(getLoginIsLoading(state as StateSchema)).toBe(expectedIsLogin);
        });
    });
});
