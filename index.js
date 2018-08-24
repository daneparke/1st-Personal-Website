var paragraph = document.getElementById("paragraph")
var image = document.getElementById("image")
var button1 = document.getElementById("MyButton")
var button2 = document.getElementById("newbtn")
button1.addEventListener("click", buttons )
function buttons(){
  paragraph.textContent = "Now that's a cuteness overload"
  image.src="https://i.ytimg.com/vi/PqweYCDi3uc/maxresdefault.jpg"
}
button2.addEventListener("click", newButton)
function newButton(){
    alert("I told you it wasn't a puppy!");
}

