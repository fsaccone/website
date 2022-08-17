import {
  get,
} from 'api/endpoints/me/about-me'
import {
  Component,
} from 'app/component'
import {
  Img,
} from 'app/shared/img'
import classes from './icon.css'

const getImagePath = async (): Promise<string> => (await get()).icon_url

type GetLogoComponent = () => Promise<Component<HTMLAnchorElement>>

/**
 * Returns an anchor element containing an image of the logo.
 */
export const getIconComponent: GetLogoComponent
  = async () => new Component<HTMLAnchorElement>(
    'a',
    {
      children: [
        new Img(
          await getImagePath(),
          'Icon',
          { svg: true },
        ),
      ],
      classList: [
        classes['icon'],
        classes['navbar-button'],
      ],
      properties: { href: '#/' },
    },
  )
