import { Component } from 'app/component'
import { GITHUB_USERNAME } from 'contants'
import { getProjects } from '../../models/projects'
import { Section } from '../section'
import { Project } from './project'

/**
 * Returns an array of git projects, gotten from ~/app/routes
 */
const getProjectsList = async (): Promise<Project[]> => {
    const projects = await getProjects(GITHUB_USERNAME)

    return projects.map(p => new Project(p.name, p.html_url, p.description, p.homepage, p.archived))
}
const getSectionContent = async (): Promise<Component<HTMLDivElement>> => new Component(
    'div',
    { children: await getProjectsList() },
)
const getProjectsComponent
= async (): Promise<Section> => new Section(
    'Projects',
    await getSectionContent(),
)

export {

    /**
     * Gets a section containing a list of git projects gotten from the Github API.
     */
    getProjectsComponent,
}
