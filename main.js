const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

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
  location.reload()
  /*   screen2.classList.add("hide")
    screen1.classList.remove("hide")
    inputNumber.value = ""
    xAttempts = 1 */
}

const btnTry = document.querySelector("#btnTry")
const btnAgain = document.querySelector("#btnAgain")

btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handleAgainClick)