document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event){

let square = event.target;
let postion = square.id;

if (handelMovie(postion)){
setTimeout(() => {
    alert('Quem ganhou foi o Jogador ' + playerTime)
}, 20);

}
updateSquare(postion);

}

function updateSquare(postion) {
    let square = document.getElementById(postion.toString());
    let symbol = board[postion]
    square.innerHTML = `<div class='${symbol}'></div>`;
}




function updateSquares() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      let position = square.id;
      let symbol = board[position];
      square.innerHTML = symbol !== '' ? `<div class='${symbol}'></div>` : '';
    });
  }
  

