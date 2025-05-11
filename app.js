const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");
document.addEventListener("DOMContentLoaded", () => {
    let load = 0;
    let blur = 100;


    const interval = setInterval(() => {
        load++;


        if (load > 99) {
            clearInterval(interval);
        }
        loadingText.innerText = `${load}%`;
        loadingText.style.opacity = scale(load, 0, 100, 1, 0);
        bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`;

    }, 100);

    function scale(number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }
})