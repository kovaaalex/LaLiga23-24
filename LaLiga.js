async function getTeams() {
    try {
        const response = await fetch("http://localhost:3000/teams")

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`)
        }

        const data = await response.json()
        displayTeams(data.teams)
    } catch (error) {
        console.error('Fetch error: ', error)
        alert(`Error: ${error.message}`)
    }
}

function displayTeams(teams) {
    const teamsContainer = document.getElementById('teams')
    teamsContainer.innerHTML = ''

    teams.forEach(team => {
        const teamDiv = document.createElement('div')
        teamDiv.className = 'team'
        teamDiv.innerHTML = `<img src = "${team.crest}" alt="emblem">"${team.name}"`
        teamsContainer.appendChild(teamDiv)
    })
}

getTeams()