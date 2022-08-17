import {
  routes, notFound,
} from 'app/routes'
import {
  DEFAULT_THEME,
} from 'contants'
import 'global.css'
import 'index.css'
import 'theme.css'
import {
  formatPath,
} from 'utils'
import routeClasses from './route.css'

const rootNode = document.getElementById('root')

if (!rootNode) {
  throw new Error('Missing root div in body.')
}

let latestRoutePath: string | null = null

document.body.dataset['theme'] = localStorage['theme'] ?? DEFAULT_THEME

/**
 * Clears the body content and calls the main method of the route specified in
 * the url. If the url did not match any of the route, a "Not found" route is
 * called instead.
 *
 * @param path - The URL.
 */
const loadRoute = async (path: string): Promise<void> => {
  if (path === latestRoutePath) {
    return
  }

  const route = routes
    .filter((r) => formatPath(r.path) === formatPath(path))[0] ?? notFound

  latestRoutePath = path
  location.hash = formatPath(path)
  rootNode.innerText = ''

  const [mainNode, additionalNodes] = await route.main(rootNode)

  mainNode.classList.add(routeClasses['route-main'] ?? '')
  rootNode.append(
    mainNode,
    ...additionalNodes,
  )
}
const runHashRouteGuard = (): void => {
  if (!formatPath(location.hash)) {
    location.hash = '/'
  }
}

window.onhashchange = async () => {
  runHashRouteGuard()
  await loadRoute(formatPath(location.hash))
}

window.onload = async () => {
  runHashRouteGuard()
  await loadRoute(formatPath(location.hash))
}
