import { get } from 'api/endpoints/me/about-me'
import { Component } from 'app/component'
import { Link } from 'app/shared/link'
import { getFormattedString } from 'utils'
import './contact.css'

type GetContact = () => Promise<Component<HTMLDivElement>>

/**
 * Returns a container of contact information.
 */
export const getContact: GetContact = async () => {
    const email = (await get()).contact_email

    return new Component('div', {
        children: [
            new Component('h2', { children: ['CONTACT'] }),
            new Component('span', { children: ['Contact me on'] }),
            new Link(`mailto:${email}`, getFormattedString(email)),
        ],
        classList: ['footer-contact'],
    })
}
