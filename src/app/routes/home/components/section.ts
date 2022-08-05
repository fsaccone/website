import { Component } from 'app/component'
import { Subtitle } from 'app/shared'
import './section.css'

/**
 * A component containing a Subtitle component for the title and a div component for its content.
 */
export class Section extends Component<HTMLDivElement> {
    /**
     *
     * @param title - The content of the Subtitle component.
     * @param content - The div component containing the content.
     */
    public constructor(title: string, content: Component<HTMLDivElement> | string) {
        super('section', {
            children: [
                new Subtitle(title),
                new Component(
                    'div',
                    {
                        children: typeof content === 'string'
                            ? [new Component('p', { children: [content] })]
                            : content.dom.children,
                        classList: typeof content === 'string'
                            ? ['home-section-content']
                            : ['home-section-content', ...content.dom.classList],
                    },
                ),
            ],
            classList: ['home-section'],
        })
    }
}
