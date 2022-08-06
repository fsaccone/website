import { routes, notFound } from 'app/routes'
import { DEFAULT_THEME } from 'contants'
import 'global.css'
import 'index.css'
import 'theme.css'
import { formatPath } from 'utils'

let latestRoutePath: string | null = null

document.body.dataset['theme'] = localStorage['theme'] ?? DEFAULT_THEME

/**
 * Clears the body content and calls the main method of the route specified in the url.
 * If the url did not match any of the route, a "Not found" route is called instead.
 *
 * @param path - The URL.
 */
const loadRoute = async (path: string): Promise<void> => {
    if (path === latestRoutePath) {
        return
    }

    const route = routes.filter(r => formatPath(r.path) === formatPath(path))[0] ?? notFound

    latestRoutePath = path
    location.hash = formatPath(path)
    document.body.innerText = ''
    await route.main(document.body)
}

window.onhashchange = async () => {
    if (!location.hash) {
        location.hash = '/'
    }

    await loadRoute(location.hash)
}

window.onload = async () => {
    if (!location.hash) {
        location.hash = '/'
    }

    await loadRoute(location.hash)
}
