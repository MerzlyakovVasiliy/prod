import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter()', () => {
    describe('getCounter', () => {
        it.each([
            [{ counter: 5 }, 5],
            [{}, undefined],
            [{ counter: 10, otherProperty: 'test' }, 10],
        ])('should return the correct counter value for state %o', (
            state: StateSchema,
            expected: number | undefined,
        ) => {
            expect(getCounter(state)).toBe(expected);
        });
    });
});
