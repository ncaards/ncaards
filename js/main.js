const login = document.querySelector('.user');
const showcase = document.querySelector('.showcase-form')

login.addEventListener('click', () => {
    login.classList.toggle('active');
    showcase.classList.toggle('active');
})

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}