interface IRoute {

    /**
     * The url needed for the route to load.
     */
    path: string

    /**
     * The method called if the url corresponds to the path.
     */
    main(root: HTMLElement): Promise<void>
}

type INotFound = Omit<IRoute, 'path'>

export type {
    IRoute,
    INotFound,
}
