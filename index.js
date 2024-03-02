let canHandle = true;
document.addEventListener('DOMContentLoaded', function () {
    let no = document.getElementById("no_button");
    no.style.left = no.style.left + 1 + "px";
    no.style.left = no.style.left - 1 + "px";
    
    document.addEventListener('mousemove', function (event) {
        if (!canHandle)
            return;
        let mouseX = event.clientX;
        let mouseY = event.clientY;

        let buttonRect = no.getBoundingClientRect();
        let buttonX = buttonRect.left;
        let buttonY = buttonRect.top;
        let buttonWidth = buttonRect.width;
        let buttonHeight = buttonRect.height

        // write code to move the button to another position from cursor (about 400 distance), but inside the window
        if (mouseX > buttonX - 5 && mouseX < buttonX + buttonWidth + 5 && mouseY > buttonY - 5 && mouseY < buttonY + buttonHeight + 5) {
            let distance = 0;
            let newX = 0;
            let newY = 0;
            while (distance <= 400) {
                newX = Math.random() * 800;
                newY = 375 - Math.random() * 750;
                distance = Math.sqrt((newX - mouseX) ** 2 + (newY - mouseY) ** 2);
            }
            no.style.left = newX + "px";
            no.style.top = newY + "px";
            canHandle = false;
            setTimeout(() => { canHandle = true; }, 100);
        }
    });
});

function onSuccess() {
    let no = document.getElementById("no_button");
    no.style.display = "none";
    let yes = document.getElementById("yes_button");
    yes.style.display = "none";
    let text = document.getElementById("text");
    text.textContent = "Рад правильному выбору!";
}