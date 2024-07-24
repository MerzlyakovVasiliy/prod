import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName';
import {
    EnhancedStore, Reducer, ReducersMapObject, UnknownAction,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import type { To } from '@remix-run/router';
import type { NavigateOptions } from 'react-router/dist/lib/context';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    loginForm?: LoginSchema,
    profile?: ProfileSchema,
}

export type StateSchemaKye = keyof StateSchema;

export interface ReducersManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema | Partial<StateSchema> | undefined, action: UnknownAction) => StateSchema;
    add: (key: StateSchemaKye, reducer: Reducer) => void;
    remove: (key: StateSchemaKye) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager:ReducersManager;
}
export interface ThunkExtraArg {
    api: AxiosInstance,
    navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
