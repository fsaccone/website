type T =
    | boolean
    | number
    | string

/**
 * Returns given value removing trailing and leading whitespace, normalizing it and replacing
 * multiple whitespace and newlines with a single space character.
 */
export const getFormattedString = (value: T): string => String(value)
    .trim()
    .normalize()
    .replaceAll(/[\s\n]+/ug, ' ')
