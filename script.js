let state = false;

const body = document.body;
const lightSwitch = document.querySelector("#switch");
const bulb = document.querySelector("#bulb");
const audio = document.querySelector("#audio");

lightSwitch.addEventListener("click", () => {
    audio.play();

    if (state) {
        lightSwitch.src = "./assets/switch-off.png";
        bulb.src = "./assets/lamp-off.png";
        state = false;
        body.style.background = "#222";
    } else {
        lightSwitch.src = "./assets/switch-on.png";
        bulb.src = "./assets/lamp-on.png";
        body.style.background = "#f0ead6";
        state = true;
    }
})