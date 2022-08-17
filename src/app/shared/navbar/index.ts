import {
  Component,
} from 'app/component'
import {
  getIconComponent,
} from './components/icon'
import {
  getSocialMediaComponent,
} from './components/social-media'
import {
  themeSwitcher,
} from './components/theme-switcher'
import classes from './navbar.css'

type GetNavbar = () => Promise<Component<HTMLElement>>

/**
 * Returns the main navbar component.
 */
export const getNavbar: GetNavbar = async () => new Component(
  'header',
  {
    children: [
      await getIconComponent(),
      await getSocialMediaComponent(),
      themeSwitcher,
    ],
    classList: [classes['navbar']],
  },
)
