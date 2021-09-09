function generate() {
    document.getElementById("address").style.display = "none";
    document.getElementById("click-me-button").style.display = "none";
    var canvas = document.getElementById('drawing');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.canvas.width = 200;
        ctx.canvas.height = 200;

        ctx.fillStyle = 'aquamarine';
        ctx.fillRect(20, 10, 75, 75);

        ctx.fillStyle = 'aquamarine';
        ctx.fillRect(115, 10, 75, 75);

        ctx.fillStyle = 'aquamarine';
        ctx.fillRect(25, 95, 160, 40);
      }
}

window.onload = function () {
    document.getElementById("click-me-button").addEventListener('click', generate);
}