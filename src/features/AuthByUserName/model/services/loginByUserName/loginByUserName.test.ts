import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { userActions } from 'entities/User';
import { loginByUsername } from './loginByUserName';
import { StateSchema } from '../../../../../app/providers/StoreProvider';
import { TestAsyncFunk } from '../../../../../shared/lib/test/TestAsyncFunk/TestAsyncFunk';

describe('loginByUserName.test', () => {
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;
    //
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });
    //
    // test('success', async () => {
    //     const userValue = { username: 'test', id: '1' };
    //     mockedAxios.post.mockResolvedValue({ data: userValue });
    //     const action = loginByUsername({ username: '123', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    // });
    //
    // test('reject', async () => {
    //     mockedAxios.post.mockRejectedValue({ status: 403 });
    //     const action = loginByUsername({ username: '123', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(result.type).toBe('login/loginByUserName/rejected');
    //     expect(result.payload).toBe('error');
    // });

    test('success', async () => {
        const userValue = { username: 'test', id: '1' };

        const thunk = new TestAsyncFunk(loginByUsername);
        thunk.api.post.mockResolvedValue({ data: userValue });
        const result = await thunk.callThunk({ username: '123', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(result.meta.requestStatus).toBe('fulfilled');
    });

    test('reject', async () => {
        const thunk = new TestAsyncFunk(loginByUsername);
        thunk.api.post.mockRejectedValue({ status: 403 });
        const result = await thunk.callThunk({ username: '123', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.type).toBe('login/loginByUserName/rejected');
        expect(result.payload).toBe('error');
    });
});
