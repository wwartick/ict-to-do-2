const fakeCheckbox = document.querySelectorAll('.fake-checkbox');


const changeCheck = function(e) {
    let target = e.target;
    if(target.textContent === '✓' ? target.textContent='' : target.textContent = '✓' );
}

fakeCheckbox.forEach((checkbox) => checkbox.addEventListener('click', changeCheck));