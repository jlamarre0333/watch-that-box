
const box = document.getElementById("box")
const grow = document.getElementById('grow')
const blue = document.getElementById('blue')
const fade = document.getElementById('fade')
const border = document.getElementById('border')
const textButton = document.getElementById('text')
const resetButton = document.getElementById('reset')

grow.addEventListener("click", function () {
    box.style.height = "250px"
    console.log('grow button clicked')
})

blue.addEventListener("click", function () {
    box.style.backgroundColor = "blue"
    console.log('Blue button clicked')
})

fade.addEventListener("click", function () {
    box.style.opacity = "25%"
    console.log('Fade button clicked')
})
border.addEventListener("click", function () {
    box.style.borderRadius = "25%"
    console.log('Border button clicked')
})

textButton.addEventListener("click", function () {
    box.textContent = 'Im a box'
    box.style.textAlign = 'center'
    console.log('Text button clicked')
})

resetButton.addEventListener("click", function () {
    box.style = "height:150px; width:150px; background-color:orange; margin:25px"
    box.textContent = ''

    console.log('Reset button clicked')
})