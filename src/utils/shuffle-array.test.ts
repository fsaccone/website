import {
  shuffle,
} from './shuffle-array'

const input = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
]

describe(
  'shuffle array',
  () => {
    const shuffled = shuffle(input)

    it(
      'should return the same number of elements',
      () => {
        expect(shuffled).toHaveLength(input.length)
      },
    )
  },
)
