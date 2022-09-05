type Skill = {
  title: string,
  image_url: string,
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
