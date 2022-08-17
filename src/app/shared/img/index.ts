import {
  Component,
  type ComponentPropertiesConstructor,
} from 'app/component'
import classes from './img.css'

type Options = {

  /**
   * True if the given source is a SVG file.
   */
  svg: boolean,
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
  public constructor(src: string, name: string, options?: Options) {
    const config: ComponentPropertiesConstructor<HTMLImageElement> = {
      properties: {
        src,
        alt: name,
      },
    }
    const svgConfig: ComponentPropertiesConstructor<HTMLImageElement> = {
      ...config,
      classList: [classes['svg']],
    }

    super(
      'img',
      options?.svg ? svgConfig : config,
    )
    this.dom.node.draggable = false
  }
}
