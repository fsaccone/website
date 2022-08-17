import {
  Component,
} from 'app/component'
import {
  getFooter,
} from 'app/shared'
import {
  getNavbar,
} from 'app/shared/navbar'
import {
  formatPath,
} from 'utils'
import {
  ErrorComponent,
} from './components/error'
import type {
  INotFound,
} from '../route'

/**
 * The route called if none of the others corresponds to the url.
 */
export const notFound: INotFound = {
  async main(root) {
    const rootComponent = new Component(
      'main',
      {
        children: [new ErrorComponent(formatPath(location.hash))],
        classList: ['route'],
      },
    )
    const navbar = await getNavbar()
    const footer = await getFooter()

    return [
      rootComponent.dom.node,
      [
        navbar.dom.node,
        footer.dom.node,
      ],
    ]
  },
}
