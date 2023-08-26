const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnAgain = document.querySelector("#btnAgain")

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handleAgainClick)
document.addEventListener('keypress', function (event) {
  if (event.key == 'Enter' && screen1.classList.contains('hide')) {
    handleAgainClick()
  }
})

function handleTryClick(event) {

  console.log(randomNumber)

  event.preventDefault()

  let inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")

    document.querySelector(".screen2 h2").innerText = (`Acertou em ${xAttempts} vezes`)
  } else {
    inputNumber.value = ""
  }

  xAttempts++
}

function handleAgainClick(event) {
  event.preventDefault()
  screen2.classList.add("hide")
  screen1.classList.remove("hide")
  inputNumber.value = ""
  xAttempts = 1
}