import {
  getAboutMe,
} from '../sections/about-me'
import {
  getProjectsComponent,
} from '../sections/projects'
import {
  getSkillsComponent,
} from '../sections/skills'
import type {
  Component,
} from 'app/component'

type SectionLists = () => Promise<
[(Component<HTMLElement> | string)[], (Component<HTMLElement> | string)[]]
>

/**
 * Returns an array containing two arrays of sections.
 * This is to divide the sections in two columns when the screen is in \
 * landscape.
 */
export const getSectionLists: SectionLists = async () => [
  [
    await getAboutMe(),
    await getSkillsComponent(),
  ],
  [await getProjectsComponent()],
]
