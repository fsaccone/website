import { getFormattedString } from 'utils'
import { createIdComponent, deleteIdComponent } from 'utils/id-component'

type ElementTag = keyof HTMLElementTagNameMap

type State = Record<string, unknown>

type Immediately = (node: HTMLElement) => void

interface IComponentPropertiesConstructor<
    Element extends HTMLElement,
> extends Partial<Omit<IComponentDomProperties<Element>, 'node'>> {

    /**
     * A record of custom values.
     */
    state?: State

    /**
     * A function that gets called when the component is created.
     */
    immediately?: Immediately

}

interface IComponentDomProperties<
    Element extends HTMLElement,
> {

    /**
     * An array containing all the DOM childrens, which can be strings or Components.
     */
    children: (Component<HTMLElement> | string)[]

    /**
     * An array containing all the class names which will be formatted.
     */
    classList: string[]

    /**
     * The id of the DOM node and the component itself. Its possible to get a component by its ID.
     */
    id: string

    /**
     * A record containing all the event listeners of the DOM node.
     */
    events: Partial<Record<
    keyof HTMLElementEventMap,
    (node: HTMLElement, state: State, ev: Event) => void
    >>

    /**
     * All the HTML properties of the DOM node.
     */
    properties: Partial<Element>

    /**
     * The DOM node.
     */
    node: Element
}

const formatToKebabCase = (...values: string[]): string => values
    .map(c => c
        .toLowerCase()
        .trim()
        .normalize()
        .replaceAll(/[\s\n]+/ug, '-'))
    .join(' ')

/**
 * Represents a reusable DOM Node.
 */
class Component<
    Element extends HTMLElement,
> {
    /**
     * All of the component properties relative to DOM.
     */
    public dom: IComponentDomProperties<Element>
    public state: State
    private readonly _immediately: Immediately

    /**
     *
     * @param elementTag - The tag of the node to create. e.g. 'div'
     * @param properties - A record of useful properties.
     */
    public constructor(
            elementTag: ElementTag,
            properties?: IComponentPropertiesConstructor<Element>,
    ) {
        this.dom = {
            node: document.createElement(elementTag) as Element,
            children: properties?.children ?? [],
            classList: properties?.classList ?? [],
            id: properties?.id ? formatToKebabCase(properties.id) : '',
            properties: properties?.properties ?? {},
            events: properties?.events ?? {},
        }
        this.state = properties?.state ?? {}
        this._immediately = properties?.immediately ?? (() => {})
        this.setupDom()

        if (properties?.id) {
            createIdComponent(properties.id, this)
        }

        this._immediately(this.dom.node)
    }

    /**
     * Deletes the component and its DOM Node.
     */
    public delete(): void {
        this.dom.node.remove()
        deleteIdComponent(this.dom.id)
    }

    private setupDom(): void {
        const { children } = this.dom

        this.dom.node.append(...children.map(child => (
            typeof child === 'string'
                ? getFormattedString(child)
                : child.dom.node
        )))
        this.dom.node.className = formatToKebabCase(...this.dom.classList)
        this.dom.node.id = this.dom.id

        for (const [event, listener] of Object.entries(this.dom.events)) {
            this.dom.node.addEventListener(event, ev => {
                listener(ev.target as Element, this.state, ev)
            })
        }

        for (const [key, value] of Object.entries(this.dom.properties)) {
            this.dom.node[key as keyof Element] = value
        }
    }
}

export {
    type IComponentPropertiesConstructor as IComponentDomPropertiesConstructor,
    Component,
}
