import {
  Component,
} from 'app/component'
import {
  getSectionLists,
} from './models/section-lists'
import classes from './section-container.css'

type GetSectionContainer = () => Promise<Component<HTMLDivElement>>

/**
 * Returns a container of two columns containing all the sections, gotten from
 * ./models.
 */
const getSectionContainer: GetSectionContainer = async () => new Component(
  'div',
  {
    children: (await getSectionLists())
      .map((sectionList) => new Component(
        'div',
        {
          children: sectionList,
          classList: [classes['home-section-list']],
        },
      )),
    classList: [classes['home-section-container']],
  },
)

export {
  getSectionContainer,
}
