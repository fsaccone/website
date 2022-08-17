import {
  getFormattedString,
  createIdComponent,
  deleteIdComponent,
} from 'utils'

type ElementTag = keyof HTMLElementTagNameMap
type State = Record<string, unknown>
type Immediately = (node: HTMLElement) => void
type ComponentPropertiesConstructor<
  Element extends HTMLElement,
> = Partial<Omit<ComponentDomProperties<Element>, 'node'>> & {

  /**
   * A record of custom values.
   */
  state?: State,

  /**
   * A function that gets called when the component is created.
   */
  immediately?: Immediately,

}
type ComponentDomProperties<
  Element extends HTMLElement,
> = {

  /**
   * An array containing all the DOM childrens, which can be strings or
   * Components.
   */
  children: (Component<HTMLElement> | string)[],

  /**
   * An array containing all the class names which will be formatted.
   */
  classList: (string | undefined)[],

  /**
   * The id of the DOM node and the component itself. Its possible to get a
   * component by its ID.
   */
  id: string,

  /**
   * A record containing all the event listeners of the DOM node.
   */
  events: Partial<Record<
  keyof HTMLElementEventMap,
  (node: HTMLElement, state: State, ev: Event) => void
  >>,

  /**
   * All the HTML properties of the DOM node.
   */
  properties: Partial<Element>,

  /**
   * The DOM node.
   */
  node: Element,
}

/**
 * Represents a reusable DOM Node.
 */
class Component<
  Element extends HTMLElement,
> {
  /**
   * All of the component properties relative to DOM.
   */
  public dom: ComponentDomProperties<Element>
  public state: State
  private readonly _immediately: Immediately

  /**
   *
   * @param elementTag - The tag of the node to create. e.g. 'div'
   * @param properties - A record of useful properties.
   */
  public constructor(
      elementTag: ElementTag,
      properties?: ComponentPropertiesConstructor<Element>,
  ) {
    this.dom = {
      node: document.createElement(elementTag) as Element,
      children: properties?.children ?? [],
      classList: properties?.classList ?? [],
      id: properties?.id ? properties.id : '',
      properties: properties?.properties ?? {},
      events: properties?.events ?? {},
    }
    this.state = properties?.state ?? {}
    this._immediately = properties?.immediately ?? (() => {})
    this.setupDom()

    if (properties?.id) {
      createIdComponent(
        properties.id,
        this,
      )
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
    const className = this.dom.classList.filter((c) => c).join(' ')
    const { id } = this.dom

    this.dom.node.append(...children.map((child) => (
      typeof child === 'string'
        ? getFormattedString(child)
        : child.dom.node
    )))

    if (className) {
      this.dom.node.className = className
    }

    if (id) {
      this.dom.node.id = id
    }

    for (const [event, listener] of Object.entries(this.dom.events)) {
      this.dom.node.addEventListener(
        event,
        (ev) => {
          listener(
            ev.target as Element,
            this.state,
            ev,
          )
        },
      )
    }

    for (const [key, value] of Object.entries(this.dom.properties)) {
      this.dom.node[key as keyof Element] = value
    }
  }
}

export {
  type ComponentPropertiesConstructor,
  type ComponentDomProperties,
  Component,
}
