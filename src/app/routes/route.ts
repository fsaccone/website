type Route = {

  /**
   * The url needed for the route to load.
   */
  path: string,

  /**
   * The method called if the url corresponds to the path. Returns an array
   * containing the main node of the route and the additional nodes.
   */
  main(root: HTMLElement): Promise<[HTMLElement, HTMLElement[]]>,
}
type INotFound = Omit<Route, 'path'>

export type {
  Route,
  INotFound,
}
