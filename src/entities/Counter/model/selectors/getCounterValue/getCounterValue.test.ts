import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    it.each([
        [{ counter: { value: 5 } }, 5],
        [{ counter: { value: 10 } }, 10],
        [{ counter: { value: 0 } }, 0],
    ])('should return the correct counter value for state %o', (state: StateSchema, expected: number) => {
        expect(getCounterValue(state)).toBe(expected);
    });
});
