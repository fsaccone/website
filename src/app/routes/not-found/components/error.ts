import { Component } from 'app/component'
import { Link } from 'app/shared'
import { getFormattedString } from 'utils'
import './error.css'

/**
 * The main content of the "Not found" page. Tells the client the given url did not match any route.
 */
export class ErrorComponent extends Component<HTMLDivElement> {
    public constructor(requestPath: string) {
        super('div', {
            children: [
                new Component('h1', {
                    children: [`No match for "${getFormattedString(requestPath)}".`],
                    classList: ['error-alert'],
                }),
                new Link('#', 'Return to home.'),
            ],
            classList: ['error'],
        })
    }
}
