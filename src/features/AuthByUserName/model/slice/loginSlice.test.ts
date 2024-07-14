import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    let initialState: LoginSchema;

    beforeEach(() => {
        initialState = {
            isLogin: false,
            password: '',
            username: '',
        };
    });

    test('should handle initial state', () => {
        expect(loginReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });

    test('should handle setUserName', () => {
        const actual = loginReducer(initialState, loginActions.setUserName('testUser'));
        expect(actual.username).toEqual('testUser');
    });

    test('should handle setPassword', () => {
        const actual = loginReducer(initialState, loginActions.setPassword('testPassword'));
        expect(actual.password).toEqual('testPassword');
    });
});
