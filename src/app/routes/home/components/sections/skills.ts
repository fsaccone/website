import {
  get,
} from 'api/endpoints/me/skills'
import {
  Component,
} from 'app/component'
import {
  Img,
} from 'app/shared'
import {
  shuffle,
} from 'utils/shuffle-array'
import {
  Section,
} from '../section'
import classes from './skills.css'

type GetSkillsComponent = () => Promise<Section>

/**
 * Returns a section containing a list of skills with visualized percent values.
 */
export const getSkillsComponent: GetSkillsComponent = async () => new Section(
  'Skills',
  new Component(
    'div',
    {
      children: shuffle(await get())
        .map((skill) => new Component(
          'div',
          {
            children: [
              new Component(
                'h3',
                { children: [skill.title] },
              ),
              new Img(
                skill.image_url,
                skill.title,
              ),
            ],
            classList: [classes['skill']],
          },
        )),
      classList: [classes['skills']],
    },
  ),
)
