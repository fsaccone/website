/**
 * Returns the current age given the birth date.
 */
export const getAge = (birthday: Date): number => {
  const now = Date.now()
  const difference = now - birthday.getTime()

  return new Date(difference).getFullYear() - 1970
}
