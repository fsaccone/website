import {
  getFormattedString,
} from './format-string'

const input = ' Lorem ipsum  dolor sit  amet, consectetur   adipiscing elit.  '

describe(
  'format string',
  () => {
    const formatted = getFormattedString(input)

    it(
      'should remove leading and traling whitespace',
      () => {
        // Should NOT start with any whitespace.
        expect(formatted).not.toMatch(/^\s+/um)
        // Should NOT end with any whitespace.
        expect(formatted).not.toMatch(/\s+$/um)
      },
    )
    it(
      'should replace multiple whitespaces with a space character',
      () => {
        // Should NOT contain more than 2 consecutive slashes
        expect(formatted).not.toMatch(/^.*(\s{2,}).*$/u)
      },
    )
  },
)
