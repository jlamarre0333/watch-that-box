document.getElementById("button1").addEventListener("click", function () {
    document.getElementById("box").style.height = "250px"
    console.log('grow button clicked')
})

document.getElementById("button2").addEventListener("click", function () {
    document.getElementById("box").style.backgroundColor = "blue"
    console.log('Blue button clicked')
})

document.getElementById("button3").addEventListener("click", function () {
    document.getElementById("box").style.opacity = "25%"
    console.log('Fade button clicked')
})
document.getElementById("border").addEventListener("click", function () {
    document.getElementById("box").style.borderRadius = "25%"
    console.log('Fade button clicked')
})

document.getElementById("text").addEventListener("click", function () {
    document.getElementById("box").textContent = 'Im a box'
    document.getElementById("box").style.textAlign = 'center'
    console.log('Fade button clicked')
})

document.getElementById("button4").addEventListener("click", function () {
    document.getElementById("box").style = "height:150px; width:150px; background-color:orange; margin:25px"
    document.getElementById("box").textContent = ''

    console.log('Reset button clicked')
})