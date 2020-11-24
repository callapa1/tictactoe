var buttons = Array.from(document.getElementsByClassName("square"));
const grid = {
  a1: document.getElementById("a1"),
  a2: document.getElementById("a2"),
  a3: document.getElementById("a3"),
  b1: document.getElementById("b1"),
  b2: document.getElementById("b2"),
  b3: document.getElementById("b3"),
  c1: document.getElementById("c1"),
  c2: document.getElementById("c2"),
  c3: document.getElementById("c3")
}
const resetBtn = document.getElementById("reset");

var count = 0
const symbol = "XO"

var horizontalWin = false
var verticalWin = false
var diagonalWin = false

play = function(){
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      if (button.textContent == ''){
        button.textContent = symbol[count];
        check();
        count % 2 == 0 ? count++ : count --;
      }
    });
  });
}

check = function(){
  horizontalCheck();
  verticalCheck();
  diagonalCheck();
  if(horizontalWin == true || verticalWin == true || diagonalWin == true){
    alert(`${symbol[count]} wins`);
    horizontalWin = false;
    verticalWin = false;
    diagonalWin = false;
    reset();
  }else{
    console.log('nada')
  }
}

horizontalCheck = function(){
  if (a1.textContent == a2.textContent && a2.textContent == a3.textContent && a1.textContent != '' ||
      b1.textContent == b2.textContent && b2.textContent == b3.textContent && b1.textContent != '' ||
      c1.textContent == c2.textContent && c2.textContent == c3.textContent && c1.textContent != '' ){
        horizontalWin = true
      }
}

verticalCheck = function(){
  if (a1.textContent == b1.textContent && b1.textContent == c1.textContent && a1.textContent != '' ||
      a2.textContent == b2.textContent && b2.textContent == c2.textContent && a2.textContent != '' ||
      a3.textContent == b3.textContent && b3.textContent == c3.textContent && a3.textContent != '' ){
        verticalWin = true
      }
}

diagonalCheck = function(){
  if (a1.textContent == b2.textContent && b2.textContent == c3.textContent && a1.textContent != '' ||
      a3.textContent == b2.textContent && b2.textContent == c1.textContent && a3.textContent != '' ){
        diagonalWin = true
      }
}

play();

reset = function(){
  buttons.forEach((button) => {
    button.textContent = '';
  })
}

resetBtn.addEventListener('click', reset)

