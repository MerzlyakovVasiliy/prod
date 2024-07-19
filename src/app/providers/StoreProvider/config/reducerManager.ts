import {
    combineReducers, Reducer, ReducersMapObject, UnknownAction,
} from '@reduxjs/toolkit';
import { StateSchemaKye, StateSchema, ReducersManager } from './StateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducersManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: StateSchemaKye[] = [];

    return {
        getReducerMap: () => reducers,
        reduce: (state: StateSchema | Partial<StateSchema> | undefined, action: UnknownAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    delete state![key];
                });

                keysToRemove = [];
            }

            // @ts-ignore
            return combinedReducer(state, action);
        },
        add: (key: StateSchemaKye, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            reducers[key] = reducer;

            combinedReducer = combineReducers(reducers);
        },
        remove: (key: StateSchemaKye) => {
            if (!key || !reducers[key]) {
                return;
            }

            delete reducers[key];

            keysToRemove.push(key);

            combinedReducer = combineReducers(reducers);
        },
    };
}
