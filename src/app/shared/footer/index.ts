import {
  Component,
} from 'app/component'
import {
  getContact,
} from './components/contact'
import {
  copyright,
} from './components/copyright'
import classes from './footer.css'

type GetFooter = () => Promise<Component<HTMLElement>>

/**
 * Returns the main footer component.
 */
export const getFooter: GetFooter = async () => new Component(
  'footer',
  {
    children: [
      copyright,
      await getContact(),
    ],
    classList: [classes['footer']],
  },
)
