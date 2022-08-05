interface ISkill {
    title: string
    percentage: number
}

export const getSkills = async (): Promise<ISkill[]> => [
    {
        title: 'TypeScript (and JavaScript)',
        percentage: 90,
    },
    {
        title: 'HTML/CSS',
        percentage: 75,
    },
    {
        title: 'Node.js',
        percentage: 80,
    },
    {
        title: 'Design and creativity',
        percentage: 45,
    },
    {
        title: 'Data structures and algorithms',
        percentage: 60,
    },
]
