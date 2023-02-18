let table: HTMLTableElement
let playerinfo: HTMLInputElement
let wins: HTMLInputElement

function showTable(html: string) {
    table.innerHTML = html
}

function Action() {
    const name = playerinfo.value
    const winsnum = wins.valueAsNumber
    info.add({playername: name, wins: winsnum})

}

function Initial() {
    info.data = []
    info.save()
    info.load()
    playerinfo.value = ''
    wins.value = ''
    showTable(info.getHtml())
}

type PlayerInfo = {
    playername: string,
    wins: number,
}

class Data {
    data: PlayerInfo[] = []

    add(add_data: PlayerInfo): void {
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
            html += '<tr><td>' + item.playername + '</td><td>'
                + item.wins.toLocaleString + '</td></tr>'
        }
        return html + '</tbody>'
    }
}

const info = new Data()

window.addEventListener('load', ()=>{
    table = document.querySelector('#table')
    playerinfo = document.querySelector('#playerinfo')
    wins = document.querySelector('#wins')
    document.querySelector('#btn').addEventListener('click', Action)
    document.querySelector('#initial').addEventListener('click', Initial)
    info.load()
    showTable(info.getHtml())
})