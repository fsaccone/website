/**
 * Returns the shuffled given array, randomizing its items positions.
 */
export const shuffle = <T>(array: T[]): T[] => {
    const result: T[] = []
    const shuffledKeys: number[] = []

    while (shuffledKeys.length < array.length) {
        const randomKey = Math.floor(Math.random() * array.length)

        if (shuffledKeys.includes(randomKey)) {
            continue
        }

        shuffledKeys.push(randomKey)
    }

    for (const [index, value] of array.entries()) {
        result[shuffledKeys[index]!] = value
    }

    return result
}
