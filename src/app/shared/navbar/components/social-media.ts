import {
  get, type SocialMedia,
} from 'api/endpoints/me/social-media'
import {
  Component,
} from 'app/component'
import {
  Img,
} from 'app/shared/img'
import classes from './social-media.css'

const getSocialMedia = async (): Promise<SocialMedia[]> => await get()

type GetSocialMediaComponent = () => Promise<Component<HTMLDivElement>>

/**
 * Returns a div containing the social media links in the form of anchor
 * elements.
 */
export const getSocialMediaComponent: GetSocialMediaComponent
  = async () => new Component(
    'div',
    {
      children: (await getSocialMedia())
        .map((social) => new Component<HTMLAnchorElement>(
          'a',
          {
            children: [
              new Img(
                social.image_path,
                social.name,
              ),
              new Component('div'),
            ],
            classList: [classes['social-media']],
            properties: { href: social.url },
          },
        )),
      classList: [classes['social-media-container']],
    },
  )
