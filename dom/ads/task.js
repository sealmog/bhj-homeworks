const cases = Array.from(document.getElementsByClassName("rotator__case"));
let i = 1;

function rotator() {
    const activeCase = document.querySelector(".rotator__case_active");
    activeCase.classList.remove("rotator__case_active");
    if (activeCase.nextElementSibling) {
        activeCase.nextElementSibling.classList.add("rotator__case_active");
    } else {
        cases[0].classList.add("rotator__case_active");
    }
    for (let i = 0; i < cases.length; i++) {
        cases[i].style.color = cases[i].dataset.color;
    }
}

setTimeout(function run() {
    rotator(i);
    setTimeout(run, 1000);
}, 1000);