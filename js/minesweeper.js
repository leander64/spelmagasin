var board = [];
var rows = 8;
var columns = 8;

var minesCount = 5;
var minesLocation = [];

var tilesClicked = 0; //mål å trykke alle tiles utenom dei som har mines
var flagEnabled = false;

var gameOver = false;

window.onload = function() {
    startGame();
}

function startGame() {
    document.getElementById("mines-count").innerText = minesCount;

    // fylle ut spel-bordet
    for (let r = 0; r < rows; r++)
        let row = [];
        for(let c = 0; c < columns; c++) {
            //<div></div>
            let tile = document.createElement("div");
            tile.id = r.toString(0) + "-" + c.toString();
            document.getElementById("board").append(tile);
            row.push(tile);
        }
        board.push(row);

        console.log(board);
}