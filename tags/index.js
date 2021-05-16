const tagColors = {
    Presentation: 'cyan',
    Training: 'green',
    Conference: 'purple',
    Programming: 'orange',
    'Frontend Development': 'orange darken-2',
    'Backend Development': 'orange darken-2',
    'Programming Challenge': '#8B4513',
    'CyberSecurity': '#CABB1E',
    'Voluntary Work': 'deep-purple'
}

function getTagColor(tag) {
    return tagColors[tag]
}

export default getTagColor
