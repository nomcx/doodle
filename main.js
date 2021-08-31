function changeClass() {
    document.body.classList.add('bg-aquamarine');
}

window.onload = function () {
    document.getElementById("click-me-button").addEventListener('click', changeClass);
}