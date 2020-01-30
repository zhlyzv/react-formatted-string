const formattedString = require('./index');

const testString = 'Hello {0}';

test('Returns single string replacement', () => {
    const result = formattedString(testString, 'world!');
    expect(result).toContain('world!');
});

test('Returns multiple string replacements', () => {
    const result = formattedString(
        'The {0} brown {1} jumps over the lazy {2}.',
        'quick',
        'fox',
        'dog'
    );
    expect(result).toContain('quick');
    expect(result).toContain('fox');
    expect(result).toContain('dog');
});

test('Returns initial value with no arguments provided', () => {
    const result = formattedString(testString);
    expect(result).toEqual(testString);
});

test('Throws an error if first argument is not a string', () => {
    expect(() => {
        formattedString({ foo: 'bar' });
    }).toThrowError();
});

test('Returns an array', () => {
    const result = formattedString(testString, 'world!');
    expect(() => Array.isArray(result)).toBeTruthy();
});
