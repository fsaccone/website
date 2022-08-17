type AboutMe = {
  icon_url: string,
  description: string,
  contact_email: string,
}

const endpoint = 'https://fsaccone.github.io/data/me/about-me/'
const get = async (): Promise<AboutMe> => {
  const res = await fetch(endpoint)

  return await res.json() as AboutMe
}

export {
  type AboutMe,
  get,
}
