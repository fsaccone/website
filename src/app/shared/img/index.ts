import { Component, type IComponentDomPropertiesConstructor } from 'app/component'

interface IOptions {

    /**
     * True if the given source is a SVG file.
     */
    svg: boolean
}

/**
 * An img HTML element.
 */
export class Img extends Component<HTMLImageElement> {
    /**
     *
     * @param src - The path to the image.
     * @param name - The name of the image which will be used as an alt.
     * @param options - A record of useful options.
     */
    public constructor(src: string, name: string, options?: IOptions) {
        const config: IComponentDomPropertiesConstructor<HTMLImageElement> = {
            properties: {
                src,
                alt: name,
            },
        }
        const svgConfig: IComponentDomPropertiesConstructor<HTMLImageElement> = {
            ...config,
            classList: ['svg'],
        }

        super('img', options?.svg ? svgConfig : config)
        this.dom.node.draggable = false
    }
}
