/**
 * Replaces the initial hashes and the following slashes, if any, with a single
 * slash.
 */
export const formatPath = (path: string): string => path
  // Replaces backslashes (`\`) with slashes (`/`)
  .replaceAll(
    '\\',
    '/',
  )
  // Replaces all multiple slashes with just one
  .replaceAll(
    /\/+/ug,
    '/',
  )
  // Removes initial hash(es)
  .replace(
    /^#+/u,
    '',
  )
