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
            ],
            classList: [classes['social-media']],
            properties: { href: social.url },
          },
        )),
      classList: [classes['social-media-container']],
      immediately(node) {
        let lastTheme: 'dark' | 'light' | null = null

        // Controls 60 times a second if the theme changed, then changes the CSS
        // variable.
        setInterval(
          () => {
            if (document.body.dataset['theme'] === lastTheme) {
              return
            }

            if (document.body.dataset['theme'] === 'dark') {
              lastTheme = 'dark'
              node.style.setProperty(
                '--is-white',
                '1',
              )
            } else {
              lastTheme = 'light'
              node.style.setProperty(
                '--is-white',
                '0',
              )
            }
          },
          1000 / 60,
        )
      },
    },
  )
