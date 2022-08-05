/**
 * Replaces the initial hashes and the following slashes, if any, with a single slash.
 */
export const formatPath = (path: string): string => path
    .replace(/^#+\/*/u, '/')
