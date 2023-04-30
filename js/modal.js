function openModalWindow(){
    let modalWindow = document.querySelector('.modal-window-background')
    modalWindow.classList.remove('modal-window-close')
}
function closeModalWindow(){
    let modalWindow = document.querySelector('.modal-window-background')
    modalWindow.classList.add('modal-window-close')
}

$('.sliderTest').slick();