import {
  Component,
} from 'app/component'
import {
  Link,
} from 'app/shared'
import classes from './project.css'

/**
 * A div component containing the data of a Git Repository.
 */
export class Project extends Component<HTMLDivElement> {
  public constructor(
      title: string,
      url: string,
      description: string,
      attachedLink: string,
      isArchived: boolean,
  ) {
    super(
      'div',
      {
        children: [
          isArchived
            ? new Component(
              'span',
              { children: ['ARCHIVED'] },
            )
            : '',
          new Component(
            'h3',
            {
              children: [
                new Component<HTMLAnchorElement>(
                  'a',
                  {
                    children: [title],
                    classList: [classes['home-project-link']],
                    properties: { href: url },
                  },
                ),
              ],
            },
          ),
          new Component(
            'p',
            {
              children: [
                description
                  ? `"${description}"`
                  : 'No description.',
              ],
              immediately(node) {
                if (description) {
                  return
                }

                node.style.fontStyle = 'italic'
              },
            },
          ),
          attachedLink
            ? new Link(
              attachedLink,
              'Website',
            )
            : '',
        ],
        classList: [classes['home-project']],
      },
    )
  }
}
