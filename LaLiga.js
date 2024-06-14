class League{
    static displayTeams(teams) {
        teams.forEach(team => new Team(team))
    }
    static async getTeams() {
        try {
            const response = await fetch("http://localhost:3000/teams")

            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`)
            }

            const data = await response.json()
            this.displayTeams(data.teams)
        } catch (error) {
            console.error('Fetch error: ', error)
            alert(`Error: ${error.message}`)
        }
    }

}
class Team{
    constructor(element){
        this.element = element
        this.addEachTeam()
        this.addListeners()
    }
    addEachTeam(){
        const teamsContainer = document.getElementById('teams')
        const teamDiv = document.createElement('div')
            teamDiv.className = 'team'
            teamDiv.innerHTML += `<img src = "${this.element.crest}" alt="emblem">"${this.element.name}"`
            teamsContainer.appendChild(teamDiv)
            this.teamDiv = teamDiv
    }
    addListeners(){
        this.teamDiv.addEventListener('click', () => {
            const squadEl = document.querySelector('#squad')
            const sqd = this.element.squad
            sqd.forEach(player => alert(player.name))
            
        })
    }
}
class Player{
    constructor(element){
        this.element = element
    }
}
League.getTeams()