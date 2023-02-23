let table: HTMLTableElement
let inputplayer: HTMLInputElement
let inputwinnum: HTMLInputElement

function showTable(html: string) {
    table.innerHTML = html
}

function Action() {
    const player_name = inputplayer.value
    const wins_num = inputwinnum.valueAsNumber
    player.add({name: player_name, wins: wins_num})
    player.save()
    player.load()
    showTable(player.getHtml())
}

function Initial() {
    player.data = []
    player.save()
    player.load()
    inputplayer.value = ''
    inputwinnum.value = ''
    showTable(player.getHtml())
}

type Player = {
    name: string,
    wins: number,
}

class PlayerData {
    data: Player[] = []

    add(add_data: Player): void {
        this.data.unshift(add_data)
    }

    save(): void {
        localStorage.setItem('player_data', JSON.stringify(this.data))
    }

    load(): void{
        const readed = JSON.parse(localStorage.getItem('player_data'))
        this.data = readed ? readed : []
    }

    getHtml(): string {
        let html = '<thead><th>投手名</th><th>勝利数</th></thead><tbody>'
        for(let item of this.data){
            html += '<tr><td>' + item.name + '</td><td>'
                + item.wins.toLocaleString() + '</td></tr>'
        }
        return html + '</tbody>'
    }
}

const player = new PlayerData()

window.addEventListener('load', ()=>{
    table = document.querySelector('#table')
    inputplayer = document.querySelector('#player')
    inputwinnum = document.querySelector('#wins')
    document.querySelector('#btn').addEventListener('click', Action)
    document.querySelector('#initial').addEventListener('click', Initial)
    player.load()
    showTable(player.getHtml())
})