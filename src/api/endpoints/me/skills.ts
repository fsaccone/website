type Skill = {
  title: string,
  percentage: number,
}

const endpoint = 'https://fsaccone.github.io/data/me/skills/'
const get = async (): Promise<Skill[]> => {
  const res = await fetch(endpoint)

  return await res.json() as Skill[]
}

export {
  type Skill,
  get,
}
