type Image = {
  title: string,
  url: string,
}
type Skill = {
  title: string,
  images: Image[],
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
