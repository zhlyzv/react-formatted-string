const braceRegex = new RegExp(/(\{\d\})/g);
const getReplaceableMatches = string => string.match(braceRegex);
const isString = string => Object.prototype.toString.call(string) === '[object String]';

/**
 * Replaces placeholders in a string with either another string or a React component
 * @example
 * formattedString('Click {0}', <a href='https://google.com'>here.</a>);
 * // Click <a href="https://google.com">here.</a>
 * @param {String} string The string you want to format
 * @param {...(String|React.Component)} args Replacement values for the string placeholders({0}, {1}, ..)
 * @returns {(String|React.Component)[]}
 */
function formattedString(string, ...args) {
    if (!string || !isString(string)) {
        throw new TypeError('Type mismatch: provided argument is not a string.');
    }
    if (string === '' || args.length === 0) {
        return string;
    }
    const replaceableMatches = getReplaceableMatches(string);
    if (!replaceableMatches) return string;
    // Turn the string into an array and remove any empty values
    const stringArray = string.split(braceRegex).filter(Boolean);

    return stringArray.map(str => {
        const shouldBeReplaced = replaceableMatches.includes(str);
        if (shouldBeReplaced) {
            // Return the argument which corresponds to the matches found
            return args[replaceableMatches.indexOf(str)];
        }
        return str;
    });
}

module.exports = formattedString;
