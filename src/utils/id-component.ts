import type {
  Component,
} from 'app/component'

/**
 * A map containing all the components with an id, stored with the id as the
 * key.
 */
const idComponents = new Map<string, Component<HTMLElement>>()
const createIdComponent = <
  E extends HTMLElement,
>(id: string, component: Component<E>): Component<E> | null => {
  idComponents.set(
    id,
    component,
  )
  return component
}
const deleteIdComponent = (id: string): void => {
  const idComponent = idComponents.get(id)

  if (!idComponent) {
    return
  }

  idComponents.delete(id)
}
const getComponentById
  = (id: string): Component<HTMLElement> | null => idComponents.get(id) ?? null

export {
  createIdComponent,
  deleteIdComponent,
  getComponentById,
}
