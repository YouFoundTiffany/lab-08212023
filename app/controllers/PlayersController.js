import { AppState } from "../AppState.js";




export class PlayersController {
    constructor() {
        console.log('player controller loaded')
        this.drawPlayers()
    }
    drawPlayers() {
        // needs the players,
        // generate content (html) to display
        // inject html to page
        let content = ''
        AppState.players.forEach(player => {
            //     // div template
            //     content += `<div class="col-12 p-3 bg-light rounded elevetion-2">
            //     ${this.name} <span onclick="app.PlayerController.scorePoint" >mdi-plus</span>${this.points} <span>mdi-minus</span>
            //   </div>`
            content += player.cardTemplate
        })
        const elem = document.getElementById('players')
        if (elem) {
            elem.innerHTML = content
        }
    }
    scorePoint(playerName) {
        console.log('clicked', playerName)
    }
}