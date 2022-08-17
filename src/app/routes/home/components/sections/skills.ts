import {
  get,
} from 'api/endpoints/me/skills'
import {
  Component,
} from 'app/component'
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
              new Component(
                'div',
                {
                  children: [
                    new Component(
                      'div',
                      {
                        classList: [classes['skill-percentage-bar']],
                        immediately(node) {
                          node.style.setProperty(
                            '--percentage',
                            `${skill.percentage}%`,
                          )
                        },
                        children: [
                          new Component(
                            'div',
                            { classList: [classes['skill-hover-bar']] },
                          ),
                        ],
                      },
                    ),
                  ],
                },
              ),
            ],
            classList: [classes['skill']],
          },
        )),
      classList: [classes['skills']],
    },
  ),
)
