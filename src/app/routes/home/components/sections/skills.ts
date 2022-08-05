import { Component } from 'app/component'
import { shuffle } from 'utils/shuffle-array'
import { getSkills } from '../../models/skills'
import { Section } from '../section'
import './skills.css'

type GetSkillsComponent = () => Promise<Section>

/**
 * Returns a section containing a list of skills with visualized percent values.
 */
export const getSkillsComponent: GetSkillsComponent = async () => new Section(
    'Skills',
    new Component('div', {
        children: shuffle(await getSkills())
            .map(skill => new Component('div', {
                children: [
                    new Component('h3', { children: [skill.title] }),
                    new Component('div', {
                        children: [
                            new Component('div', {
                                classList: ['skill-percentage-bar'],
                                immediately(node) {
                                    node.style.setProperty('--percentage', `${skill.percentage}%`)
                                },
                                children: [
                                    new Component(
                                        'div',
                                        { classList: ['skill-hover-percentage-bar'] },
                                    ),
                                ],
                            }),
                        ],
                    }),
                ],
                classList: ['skill'],
            })),
        classList: ['skills'],
    }),
)
