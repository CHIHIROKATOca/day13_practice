/* Liked function */
const likedButton = document.querySelector('#liked-button');
function clickedButton() {
    document.body.classList.toggle('liked')
}
likedButton.onclick = clickedButton;

/* Modal Function */
const btnShowModal = document.body.querySelector('#btn-modal-show');
const btnCloseModal = document.body.querySelector('#btn-modal-close');
const modalBG = document.body.querySelector('#modal-bg');
const modal = document.body.querySelector('#modal');
const btnSubmit = document.body.querySelector('#btn-submit');
const userName=document.body.querySelector('#username');

btnShowModal.addEventListener('click', function() {
    document.body.classList.remove('close-modal');
    modalBG.classList.add('enabled-animation');
    modal.classList.add('enabled-animation');
    document.body.classList.toggle('show-modal');
});

btnCloseModal.addEventListener('click', function() {
    document.body.classList.remove('show-modal');
    document.body.classList.toggle('close-modal')
});

btnSubmit.addEventListener('click', function(e){
    e.preventDefault();

    if(userName.value.length != 0){
        document.body.classList.remove('Show-modal');
        btnShowModal.innerHTML = "Hello" + userName.value;
    }else{
        const error = document.createElement('p');
        const errorText= document.body.createTextNode('Please enter again');
        error.style.color = 'red';
        error.style.fontSize = '12px';

        error.appendChild(errorText);
        modal.appendChild(error);
    }
    
})