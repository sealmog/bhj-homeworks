const block = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', function() {
    for (let i = 0; i < block.length; i++) {
        const { top, bottom } = block[i].getBoundingClientRect();
        if (top > 0 && bottom < window.innerHeight) {
            block[i].classList.add('reveal_active');
        } else {
            block[i].classList.remove('reveal_active');
        }
    }
})
