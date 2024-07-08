let arrButton = document.querySelectorAll(".drum");

for (let btn of arrButton)
    btn.addEventListener("click", () => {
        makeSound(btn.innerHTML);
    });

document.addEventListener("keypress", (event)=>{
    makeSound(event.key);
});


function makeSound(key) {
    let path = "sounds/";

    switch (key) {
        case "w":
            path += "tom-1.mp3";
            break;
        case "a":
            path += "tom-2.mp3";
            break;
        case "s":
            path += "tom-3.mp3";
            break;
        case "d":
            path += "tom-4.mp3";
            break;
        case "j":
            path += "snare.mp3";
            break;
        case "k":
            path += "crash.mp3";
            break;
        case "l":
            path += "kick-bass.mp3";
            break;
        default:
            console.log("invalid key press", key);
            return;
    }
    buttonAnimation(key);
    let sound = new Audio(path);
    sound.play();
}

function buttonAnimation(key){
    let button = document.querySelector("."+key);
    button.classList.add("pressed");

    setTimeout(() => {
        button.classList.remove("pressed");
    }, 100)

}