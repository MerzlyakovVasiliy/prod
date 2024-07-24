import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
    describe('should return isLogin', () => {
        it.each([
            [{ loginForm: { isLoading: true } }, true],
            [{ loginForm: { isLoading: false } }, false],
            [{ loginForm: {} }, false],
        ])('given state %j should return %s', (state, expectedIsLogin) => {
            expect(getLoginIsLoading(state as StateSchema)).toBe(expectedIsLogin);
        });
    });
});
