const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnAgain = document.querySelector("#btnAgain")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handleAgainClick)
document.addEventListener('keypress', enterPressed)

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function enterPressed(event) {
  if (event.key == 'Enter' && screen1.classList.contains('hide')) {
    handleAgainClick()
  }
}

function handleTryClick(event) {

  console.log(randomNumber)

  event.preventDefault()

  let inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 || Number(inputNumber.value) == '') {
    alert('Você precisar escolher um número entre 0 e 10')
  } if (Number(inputNumber.value) > 0 && Number(inputNumber.value) < 10 && Number(inputNumber.value) != '') {
    xAttempts++
  } if (Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screen2 h2").innerText = (`Acertou em ${xAttempts} vezes`)
    toggleScreen()
  } else {
    inputNumber.value = ""
  }

}

function handleAgainClick(event) {
  event.preventDefault()
  toggleScreen()
  inputNumber.value = ""
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}