import { Component } from 'app/component'
import { Img } from 'app/shared/img'
import { changeTheme } from 'utils'
import { lightTheme, darkTheme } from '../images'
import './theme-switcher.css'

/**
 * A button that changes the theme between light and dark when clicked.
 */
export const themeSwitcher = new Component('button', {
    children: [
        new Img(lightTheme, 'Light', { svg: true }),
        new Img(darkTheme, 'Dark', { svg: true }),
    ],
    classList: ['navbar-button', 'theme-switcher'],
    state: { theme: document.body.dataset['theme'] ?? 'dark' },
    events: {
        click(node, state, ev) {
            ev.preventDefault()
            changeTheme(document.body.dataset['theme'] === 'dark' ? 'light' : 'dark')
            state['theme'] = state['theme'] === 'dark' ? 'light' : 'dark'
        },
    },
})
