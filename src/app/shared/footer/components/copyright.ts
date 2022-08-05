import { Component } from 'app/component'
import { FULL_NAME } from 'contants'

const year = new Date(Date.now()).getFullYear()

/**
 * Returns a paragraph containing the copyright notice.
 */
export const copyright = new Component('p', {
    children: [`Copyright (c) ${year} ${FULL_NAME}. All Rights Reserved.`],
    classList: ['copyright'],
})
