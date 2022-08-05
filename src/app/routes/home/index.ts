import { Component } from 'app/component'
import { getFooter, getNavbar } from 'app/shared'
import { getSectionContainer } from './components/section-container'
import type { IRoute } from '../route'

/**
 * The main route, that corresponds to the root ("/").
 */
export const home: IRoute = {
    path: '/',
    async main(root) {
        const rootComponent = new Component('div', {
            children: [
                await getSectionContainer(),
                await getFooter(),
            ],
            classList: ['route', 'home'],
        })
        const navbar = await getNavbar()

        root.append(navbar.dom.node, rootComponent.dom.node)
    },
}
