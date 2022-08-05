import { Component } from 'app/component'
import './subtitle.css'

/**
 * A div element containing a h2 subtitle with an animated underline.
 */
export class Subtitle extends Component<HTMLDivElement> {
    /**
     *
     * @param text - The subtitle.
     */
    public constructor(text: string) {
        super('div', {
            children: [
                new Component('h2', { children: [text] }),
                new Component('div'),
            ],
            classList: ['subtitle'],
        })
    }
}

