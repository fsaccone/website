import {
  Component,
} from 'app/component'
import {
  getFooter, getNavbar,
} from 'app/shared'
import {
  getSectionContainer,
} from './components/section-container'
import type {
  Route,
} from '../route'

/**
 * The main route, that corresponds to the root ("/").
 */
export const home: Route = {
  path: '/',
  async main(root) {
    const rootComponent = new Component(
      'main',
      { children: [await getSectionContainer()] },
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
