let NewYearDate = new Date(new Date().getFullYear() + 1, 0, 1);
const Day = document.querySelector(".day");
const Hour = document.querySelector(".hour");
const Minute = document.querySelector(".min");
const Second = document.querySelector(".sec");
const NewYear = document.querySelector(".new-year");
function newYear() {
    let Now = new Date().getTime();
    let gap = NewYearDate - Now;
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let d = Math.floor(gap / day);
    let h = Math.floor((gap % day) / hour);
    let m = Math.floor((gap % hour) / minute);
    let s = Math.floor((gap % minute) / second);
    if (d < 10) d = "0" + d;
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;
    Day.innerHTML = d;
    Hour.innerHTML = h;
    Minute.innerHTML = m;
    Second.innerHTML = s;
    NewYear.innerHTML = new Date().getFullYear() + 1;
}
newYear();
setInterval(newYear, 1000);
particlesJS("particles-js", {
    particles: {
        number: {
            value: 400,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#ffffff",
        },
        shape: {
            type: "image",
            stroke: {
                width: 3,
                color: "#fff",
            },
            polygon: {
                nb_sides: 5,
            },
            image: {
                src: "./starburst_white_300_drop_2.png",
                width: 100,
                height: 100,
            },
        },
        opacity: {
            value: 0.7,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: false,
                speed: 20,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: false,
            distance: 50,
            color: "#ffffff",
            opacity: 0.6,
            width: 1,
        },
        move: {
            enable: true,
            speed: 5,
            direction: "bottom",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: true,
                rotateX: 300,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false,
                mode: "bubble",
            },
            onclick: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 150,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 200,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.2,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
});
