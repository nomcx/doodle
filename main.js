function generate() {
    document.getElementById("address").style.display = "none";
    document.getElementById("click-me-button").style.display = "none";
    var canvas = document.getElementById('drawing');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.canvas.width = 150;
        ctx.canvas.height = 150;

        ctx.fillStyle = 'aquamarine';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);
      }
}

window.onload = function () {
    document.getElementById("click-me-button").addEventListener('click', generate);
}