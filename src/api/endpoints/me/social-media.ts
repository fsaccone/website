type SocialMedia = {
  name: string,
  url: string,
  image_path: string,
}

const endpoint = 'https://fsaccone.github.io/data/me/social-media/'
const get = async (): Promise<SocialMedia[]> => {
  const res = await fetch(endpoint)

  return await res.json() as SocialMedia[]
}

export {
  type SocialMedia,
  get,
}
