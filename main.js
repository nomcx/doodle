function generate() {
    document.getElementById("address").placeholder = ":)"
}

window.onload = function () {
    document.getElementById("click-me-button").addEventListener('click', generate);
}