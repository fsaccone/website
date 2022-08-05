type Theme =
    | 'dark'
    | 'light'

/**
 * Sets the theme to the given one and saves it to the localStorage.
 */
export const changeTheme = (theme: Theme): void => {
    document.body.dataset['theme'] = theme
    localStorage['theme'] = theme
}
