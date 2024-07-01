import { CounterSchema } from 'entities/Counter';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice', () => {
    it('should handle initial state', () => {
        const initialState: CounterSchema = { value: 0 };
        expect(counterReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });

    it('should handle increment', () => {
        const initialState: CounterSchema = { value: 0 };
        const expectedState: CounterSchema = { value: 1 };
        expect(counterReducer(initialState, counterActions.increment())).toEqual(expectedState);
    });

    it('should handle decrement', () => {
        const initialState: CounterSchema = { value: 1 };
        const expectedState: CounterSchema = { value: 0 };
        expect(counterReducer(initialState, counterActions.decrement())).toEqual(expectedState);
    });
});
