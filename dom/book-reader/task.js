const fontSizes = Array.from(document.getElementsByClassName('font-size'));
const books = Array.from(document.getElementsByClassName('book'));
const bookControlColor = document.querySelector(".book__control_color");
const textColors = Array.from(bookControlColor.querySelectorAll(".color"));
const bookControlBackground = document.querySelector(".book__control_background");
const backgroundColors = Array.from(bookControlBackground.querySelectorAll(".color"));


fontSizes.forEach((item) => {

    item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        item.classList.add('font-size_active');

        for (let book of books) {
            book.classList.remove('book_fs-big');
            book.classList.remove('book_fs-small');

            if (item.dataset.size === "small") {
                book.classList.add('book_fs-small');
            } else if (item.dataset.size === "big") {
                book.classList.add('book_fs-big');
            }
        }
    })
})


textColors.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.color_active').classList.remove('color_active');
        item.classList.add('color_active');

        for (let book of books) {

            book.classList.remove('book_color-gray');
            book.classList.remove('book_color-whitesmoke');
            book.classList.remove('book_color-black');

            if (item.dataset.textColor === "black") {
                book.classList.add('book_color-black');
            } else if (item.dataset.textColor === "gray") {
                book.classList.add('book_color-gray');
            } else {
                book.classList.add('book_color-whitesmoke');
            }
        }
    })
})


backgroundColors.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.color_active').classList.remove('color_active');
        item.classList.add('color_active');

        for (let book of books) {
            book.classList.remove('bg_color_black');
            book.classList.remove('bg_color_gray');
            book.classList.remove('bg_color_white');

            if (item.dataset.bgColor === "black") {
                book.classList.add('bg_color_black');
            } else if (item.dataset.bgColor === "gray") {
                book.classList.add('bg_color_gray');
            } else {
                book.classList.add('bg_color_white');
            }
        }
    })
})
