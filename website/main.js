const uselessButtons = document.getElementsByClassName("useless");
for (let i = 0; i < uselessButtons.length; i++) {
    uselessButtons[i].addEventListener("click", function() {
        alert("Don't pouch me with your dirty fingers! I am resting.");
    })
}