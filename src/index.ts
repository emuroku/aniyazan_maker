let table: HTMLTableElement
let inputplayer: HTMLInputElement
let inputwinnum: HTMLInputElement
let inputusername: HTMLInputElement

// 描画用位置指定パラメータ
const start_x: number = 240
const start_y: number = 300
const item_width: number = 420
const item_height: number = 150
const name_max_width: number = 160
const win_max_width: number = 100


// 画像描画
let bgImg = new Image()
bgImg.src = 'resource/img/aniyazan_maker_template.png'

// canvasとcontext
const canvas = <HTMLCanvasElement> document.querySelector('#cv')
const ctx = canvas.getContext('2d')

bgImg.onload = () => {
    ctx.drawImage(bgImg, 0, 0)
}

function showTable(html: string) {
    table.innerHTML = html
}

function showCreatedImg() {

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
    inputusername.value = ''
    showTable(player.getHtml())
    ctx.clearRect
    ctx.drawImage(bgImg, 0, 0)
}

// 描画処理
function Draw(player_name: string, win_num: string, order: number) {

    const user_name = inputusername.value

    // 選手名の描画
    ctx.font = "bold 65px 'M PLUS 1'"
    ctx.textAlign = "center"
    ctx.fillStyle = "#666666";
    ctx.textBaseline = "bottom";
    ctx.strokeText(player_name, start_x+(order%3)*item_width, start_y+(Math.floor(order/3) *item_height), name_max_width);
    ctx.fillText(player_name, start_x+(order%3)*item_width, start_y+(Math.floor(order/3) *item_height), name_max_width);

    // 勝利数の描画
    ctx.font = "bold 80px 'M PLUS 1'"
    ctx.fillStyle = "#ff0000";
    ctx.strokeText(win_num, start_x+name_max_width+(order%3)*item_width, start_y+(Math.floor(order/3) *item_height), win_max_width);
    ctx.fillText(win_num, start_x+name_max_width+(order%3)*item_width, start_y+(Math.floor(order/3) *item_height), win_max_width);
    
    ctx.font = "bold 50px 'M PLUS 1'"
    ctx.fillStyle = "#666666";
    ctx.fillText('勝', start_x+name_max_width+win_max_width+(order%3)*item_width, start_y+(Math.floor(order/3) *item_height), 100);
    
    // ユーザー名の描画
    ctx.font = "bold 40px 'M PLUS 1'"
    ctx.fillStyle = "#000000";
    ctx.fillText(user_name, 1030, 95, 300);
    ctx.fillText('の安仁屋算が公開', 1375, 95, 800);

    // 下線の描画
    ctx.beginPath();
    ctx.moveTo(start_x+(order%3)*item_width-70, 
                start_y+(Math.floor(order/3) *item_height+10));
    ctx.lineTo(start_x+(order%3)*item_width+name_max_width+win_max_width+20, 
                start_y+(Math.floor(order/3) *item_height+10));
                ctx.stroke();  

} 

function DrawTotal(total: string){
        // 合計勝利数の描画
        ctx.font = "bold 160px 'M PLUS 1'"
        ctx.textAlign = "center"
        ctx.fillStyle = "#ff0000";
        ctx.fillText(total, 900, 830, 300);
        ctx.fillText(total, 900, 830, 300);
}


function Create() {

    player.createImg()
    showCreatedImg()
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
        let total = this.getTotal()
        html += '</tbody>' + '<tr><td>' + '合計' + '</td><td>'
            + total + '</td></tr>'
            
        return html
    }

    getTotal(): string {
        let total_num = 0
        for (let item of this.data){
            total_num += item.wins
        }
        return total_num.toLocaleString()
    }

    createImg(): void{
        this.data.reverse()
        for(let i=0; i<this.data.length; i++){
            Draw(this.data[i].name, this.data[i].wins.toLocaleString(), i)
        }
        DrawTotal(this.getTotal())
    }


}

const player = new PlayerData()


window.addEventListener('load', ()=>{
    table = document.querySelector('#table')
    inputplayer = document.querySelector('#player')
    inputwinnum = document.querySelector('#wins')
    inputusername = document.querySelector('#username')
    document.querySelector('#btn').addEventListener('click', Action)
    document.querySelector('#initial').addEventListener('click', Initial)
    document.querySelector('#create').addEventListener('click', Create)
    player.load()
    showTable(player.getHtml())
})