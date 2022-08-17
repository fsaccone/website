import {
  formatPath,
} from './format-path'

const input = '#/a//b/c\\d'

describe(
  'format path',
  () => {
    const formatted = formatPath(input)

    it(
      'should replace backslashes with slashes',
      () => {
        // Should not contain any backslash.
        expect(formatted).not.toMatch(/^.*(\\).*$/um)
      },
    )
    it(
      'should replace multiple slashes',
      () => {
        // Should not contain more than 2 consecutive slashes
        expect(formatted).not.toMatch(/^.*(\/{2,}).*$/um)
      },
    )
    it(
      'shoudl remove initial hash(es)',
      () => {
        // Should not start with `#`
        expect(formatted).not.toMatch(/^(#+)/um)
      },
    )
  },
)
