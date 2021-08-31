function changeClass() {
    document.body.classList.contains('bg-aquamarine')
        ? document.body.classList.remove('bg-aquamarine')
        : document.body.classList.add('bg-aquamarine');
}

window.onload = function () {
    document.getElementById("click-me-button").addEventListener('click', changeClass);
}