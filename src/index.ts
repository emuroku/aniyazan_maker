import { error } from "console"

let table: HTMLTableElement
let input_player: HTMLInputElement
let input_win_num: HTMLInputElement
let input_username: HTMLInputElement

const max_item = 9 // 登録最大人数

// 描画用位置指定パラメータ
const start_x: number = 240 // 1人目の描画開始位置 x
const start_y: number = 300 // 1人目の描画開始位置 y
const item_width: number = 420 // 1人分の描画幅 x 
const item_height: number = 150 // 1人分の描画幅 y
const name_max_width: number = 160 // 1人分の投手部分の描画幅 x 
const win_max_width: number = 100 // 1人分の投手部分の描画幅 y

// エラーメッセージ
let errorMessage = document.getElementById('error_msg')

// 画像描画
let bgImg = new Image()
bgImg.src = 'resource/img/aniyazan_maker_template.png'

// canvasとcontext
const canvas = <HTMLCanvasElement>document.querySelector('#cv')
const ctx = canvas.getContext('2d')

// リストの表示
function showTable(html: string) {
    table.innerHTML = html
}

// リストにアイテムを追加
function AddItem() {
    const player_name = input_player.value
    const wins_num = input_win_num.valueAsNumber
    try {
        player.checkInput({ name: player_name, wins: wins_num }) // validation
        player.add({ name: player_name, wins: wins_num })
        player.save()
        player.load()
        showTable(player.getHtml())
    } catch (e) {
        errorMessage.textContent = e.message
    }
}

// リスト初期化
function Initial() {
    player.data = []
    player.save()
    player.load()
    input_player.value = ''
    input_win_num.value = ''
    input_username.value = '名無しさん'
    errorMessage.textContent = ''
    showTable(player.getHtml())
    ctx.clearRect
    ctx.drawImage(bgImg, 0, 0)
}

// 描画処理
bgImg.onload = function () {
    ctx.drawImage(bgImg, 0, 0)
    player.createImg()
}

function Draw(player_name: string, win_num: string, order: number) {

    const user_name = input_username.value

    // 選手名の描画
    ctx.font = "bold 65px 'M PLUS 1'"
    ctx.textAlign = "center"
    ctx.fillStyle = "#666666";
    ctx.textBaseline = "bottom";
    ctx.strokeText(player_name, start_x + (order % 3) * item_width, start_y + (Math.floor(order / 3) * item_height), name_max_width);
    ctx.fillText(player_name, start_x + (order % 3) * item_width, start_y + (Math.floor(order / 3) * item_height), name_max_width);

    // 勝利数の描画
    ctx.font = "bold 80px 'M PLUS 1', sans-serif, #ff0000"
    ctx.fillStyle = "#ff0000";
    ctx.strokeText(win_num, start_x + name_max_width + (order % 3) * item_width, start_y + (Math.floor(order / 3) * item_height), win_max_width);
    ctx.fillText(win_num, start_x + name_max_width + (order % 3) * item_width, start_y + (Math.floor(order / 3) * item_height), win_max_width);

    ctx.font = "bold 50px 'M PLUS 1'"
    ctx.fillStyle = "#666666";
    ctx.fillText('勝', start_x + name_max_width + win_max_width + (order % 3) * item_width, start_y + (Math.floor(order / 3) * item_height), 100);

    // ユーザー名の描画
    ctx.font = "bold 40px 'M PLUS 1'"
    ctx.fillStyle = "#000000";
    ctx.fillText(user_name, 1030, 95, 300);
    ctx.fillText('の安仁屋算が公開', 1375, 95, 800);

    // 下線の描画
    ctx.beginPath();
    ctx.moveTo(start_x + (order % 3) * item_width - 70,
        start_y + (Math.floor(order / 3) * item_height + 10));
    ctx.lineTo(start_x + (order % 3) * item_width + name_max_width + win_max_width + 20,
        start_y + (Math.floor(order / 3) * item_height + 10));
    ctx.stroke();

}

function DrawTotal(total: string) {
    // 合計勝利数の描画
    ctx.font = "bold 160px 'M PLUS 1'"
    ctx.textAlign = "center"
    ctx.fillStyle = "#ff0000";
    ctx.fillText(total, 900, 830, 300);
    ctx.fillText(total, 900, 830, 300);
}


function Create() {
    player.createImg()
}

// 画像DLのため、Canvasを合成
let createImage = function () {
    var image = new Image();
    image.src = canvas.toDataURL();
    return image;
}

// 画像のダウンロード
function downloadCanvas() {
    // canvasのstyleにborderを追加
    canvas.style.border = "2px solid #222222";

    // URL取得用のa要素を生成
    let link = document.createElement("a");

    link.href = canvas.toDataURL("image/png");

    link.download = "image.png";
    link.click();
}

type Player = {
    name: string,
    wins: number,
}

class PlayerData {
    data: Player[] = []

    // validation
    checkInput(add_data: Player): void {
        if(add_data.name == '' || isNaN(add_data.wins)){
            console.log(add_data)
            throw new Error('正しく入力してください')
        }
    }

    // アイテムの追加
    add(add_data: Player): void {
        if (this.data.length < max_item) {
            this.data.push(add_data)
            errorMessage.textContent = ''
        } else {
            throw new Error('登録できるのは9人までです')
        }

    }

    // Jsonデータに追加アイテムを保存
    save(): void {
        localStorage.setItem('player_data', JSON.stringify(this.data))
    }

    // 保存されたアイテムを読み込み
    load(): void {
        const readed = JSON.parse(localStorage.getItem('player_data'))
        this.data = readed ? readed : []
    }

    // リスト表示用のHTMLを取得
    getHtml(): string {
        let html = '<thead><th>投手名</th><th>勝利数</th></thead><tbody>'
        for (let item of this.data) {
            html += '<tr><td>' + item.name + '</td><td>'
                + item.wins.toLocaleString() + '</td></tr>'
        }
        let total = this.getTotal()
        html += '</tbody>' + '<tr><td>' + '合計' + '</td><td>'
            + total + '</td></tr>'
        return html
    }

    // 勝利数の合計値を算出
    getTotal(): string {
        let total_num = 0
        for (let item of this.data) {
            total_num += item.wins
        }
        return total_num.toLocaleString()
    }

    // 登録したリストを画像へ出力
    createImg(): void {
        ctx.drawImage(bgImg, 0, 0)
        for (let i = 0; i < this.data.length; i++) {
            Draw(this.data[i].name, this.data[i].wins.toLocaleString(), i)
        }
        DrawTotal(this.getTotal())
    }

}

const player = new PlayerData()

window.addEventListener('load', () => {
    table = document.querySelector('#table')
    input_player = document.querySelector('#player')
    input_win_num = document.querySelector('#wins')
    input_username = document.querySelector('#username')
    showTable(player.getHtml())

    document.querySelector('#btn').addEventListener('click', AddItem) // 追加ボタン
    document.querySelector('#initial').addEventListener('click', Initial) // やりなおすボタン
    document.querySelector('#create').addEventListener('click', Create) // 画像を作成するボタン
    document.getElementById('btn_dl').addEventListener('click', downloadCanvas) // 画像をダウンロードボタン
    
    player.load()
    showTable(player.getHtml())
})