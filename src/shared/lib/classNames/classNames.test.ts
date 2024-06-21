import classNames from './classNames';

describe('classNames', () => {
    // test('className should be defined', () => {
    //     expect(classNames('someClass')).toBe('someClass');
    // });

    test.each([
        {
            name: 'className',
            obj: {},
            arrClass: [],
            expected: 'className',
        },
        {
            name: 'className',
            obj: {},
            arrClass: ['class1', 'class2'],
            expected: 'className class1 class2',
        },
        {
            name: 'className',
            obj: { hoverd: true, scrollable: true },
            arrClass: ['class1', 'class2'],
            expected: 'className class1 class2 hoverd scrollable',
        },
        {
            name: 'className',
            obj: { hoverd: true, scrollable: false },
            arrClass: ['class1', 'class2'],
            expected: 'className class1 class2 hoverd',
        },
    ])('className should be defined', ({
        name,
        obj,
        arrClass,
        expected,
    }) => {
        expect(classNames(name, obj, arrClass)).toBe(expected);
    });
});
