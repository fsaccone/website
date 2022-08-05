import { Component } from 'app/component'
import './link.css'

/**
 * A simple styled anchor element
 */
export class Link extends Component<HTMLAnchorElement> {
    /**
     *
     * @param path - The href of the anchor.
     * @param text - The content of the element.
     */
    public constructor(path: string, text: string) {
        super('a', {
            children: [text],
            classList: ['link'],
            properties: { href: path },
        })
    }
}

