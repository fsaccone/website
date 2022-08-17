import {
  get,
} from 'api/endpoints/me/about-me'
import {
  getFormattedString,
} from 'utils'
import {
  getAge,
} from '../../models/age'
import {
  Section,
} from '../section'

const getDescription = async (): Promise<string> => (await get()).description
const age = getAge(new Date(
  2007,
  8,
  27,
))

/**
 * Returns a Section containing my description.
 */
export const getAboutMe = async (): Promise<Section> => new Section(
  'About me',
  (await getDescription()).replaceAll(
    '{age}',
    getFormattedString(String(age)),
  ),
)
