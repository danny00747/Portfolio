const tagColors = {
    Presentation: 'cyan',
    Formation: 'green',
    English: 'teal',
    Conference: 'purple',
    Programming: 'orange',
    'Frontend Development': 'orange lighten-2',
    'Backend Development': 'orange darken-2',
    'Programming Challenge': '#8B4513',
    'Portes ouvertes': 'deep-purple'
}

function getTagColor(tag) {
    return tagColors[tag]
}

export default getTagColor
