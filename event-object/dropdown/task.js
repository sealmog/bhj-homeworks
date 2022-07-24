const dropDown = document.getElementsByClassName('dropdown');
const dropDownValue = document.getElementsByClassName('dropdown__value');
const dropDownList = document.getElementsByClassName('dropdown__list');

for(let i=0; i < dropDownValue.length; i++) {
    dropDownValue[i].addEventListener('click', function(){
        dropDownList[i].classList.toggle('dropdown__list_active');
    });

    const dropDownItem = dropDown[i].querySelectorAll('li.dropdown__item');
    const dropDownLink = dropDown[i].querySelectorAll('a.dropdown__link');

    for(let j=0; j < dropDownItem.length; j++) {
        dropDownItem[j].addEventListener('click', function(){
            dropDownValue[i].textContent = dropDownLink[j].textContent;
        });
        dropDownItem[j].addEventListener('click', function(){
            dropDownList[i].classList.toggle('dropdown__list_active');
        });

        dropDownLink[j].onclick = function(){return false};
    }
}
