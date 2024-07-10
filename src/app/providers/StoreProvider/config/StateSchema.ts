import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName';
import {
    EnhancedStore, Reducer, ReducersMapObject, UnknownAction,
} from '@reduxjs/toolkit';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,

    // Async reducers
    loginForm?: LoginSchema,
}

export type StateSchemaKye = keyof StateSchema;

export interface ReducersManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: UnknownAction) => StateSchema;
    add: (key: StateSchemaKye, reducer: Reducer) => void;
    remove: (key: StateSchemaKye) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager:ReducersManager;
}
