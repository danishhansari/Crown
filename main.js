const buttons = document.querySelectorAll('button');
let list = document.querySelector('.items .list')
buttons.forEach((button) => {
button.addEventListener('click',() => { 
    const CurrentState = button.getAttribute('data-state');   
    if(!CurrentState || CurrentState === 'closed'){
        button.setAttribute('aria-expanded', 'true');
        button.setAttribute('data-state','opened')
        list.classList.add('open');
    }
    else{
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('data-state','closed');
        list.classList.remove('open');
    }
})
})
