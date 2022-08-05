import { Component } from 'app/component'
import { getSectionLists } from './models/section-lists'
import './section-container.css'

type GetSectionContainer = () => Promise<Component<HTMLDivElement>>

/**
 * Returns a container of two columns containing all the sections, gotten from ./models.
 */
export const getSectionContainer: GetSectionContainer = async () => new Component('div', {
    children: (await getSectionLists())
        .map(sectionList => new Component('div', {
            children: sectionList,
            classList: ['home-section-list'],
        })),
    classList: ['home-section-container'],
})
