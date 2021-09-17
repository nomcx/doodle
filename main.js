function generate() {
    document.getElementById("address").style.display = "none";
    document.getElementById("click-me-button").style.display = "none";

    // var canvas = document.getElementById('drawing');
    
    // if (canvas.getContext) {
    //     var ctx = canvas.getContext('2d');
    //     ctx.canvas.width = 200;
    //     ctx.canvas.height = 200;

    //     ctx.fillStyle = 'aquamarine';
    //     ctx.fillRect(20, 10, 75, 75);

    //     ctx.fillStyle = 'aquamarine';
    //     ctx.fillRect(115, 10, 75, 75);

    //     ctx.fillStyle = 'aquamarine';
    //     ctx.fillRect(25, 95, 160, 40);
    //   }

    var div2 = document.getElementById('div2'); // horrible naming div2
    var svg = "<svg width=\"102px\" height=\"102px\" class=\"svg-grid\" viewBox=\"0 0 102 102\" version=\"1.1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\">\r\n    <title>grid_25px_4x4<\/title>\r\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n        <g id=\"grid_25px_4x4\" transform=\"translate(1.000000, 1.000000)\" stroke=\"#979797\">\r\n            <rect id=\"Rectangle-Copy-15\" x=\"75\" y=\"75\" width=\"25\" height=\"25\"><\/rect>\r\n            <rect id=\"Rectangle-Copy-14\" x=\"50\" y=\"75\" width=\"25\" height=\"25\"><\/rect>\r\n            <rect id=\"Rectangle-Copy-13\" x=\"25\" y=\"75\" width=\"25\" height=\"25\"><\/rect>\r\n            <rect id=\"Rectangle-Copy-12\" x=\"0\" y=\"75\" width=\"25\" height=\"25\"><\/rect>\r\n            <rect id=\"Rectangle-Copy-11\" x=\"75\" y=\"50\" width=\"25\" height=\"25\"><\/rect>\r\n            <rect id=\"Rectangle-Copy-10\" x=\"50\" y=\"50\" width=\"25\" height=\"25\"><\/rect>\r\n            <rect id=\"Rectangle-Copy-9\" x=\"25\" y=\"50\" width=\"25\" height=\"25\"><\/rect>\r\n            <rect id=\"Rectangle-Copy-8\" x=\"0\" y=\"50\" width=\"25\" height=\"25\"><\/rect>\r\n            <rect id=\"Rectangle-Copy-7\" x=\"75\" y=\"25\" width=\"25\" height=\"25\"><\/rect>\r\n            <rect id=\"Rectangle-Copy-6\" x=\"50\" y=\"25\" width=\"25\" height=\"25\"><\/rect>\r\n            <rect id=\"Rectangle-Copy-5\" x=\"25\" y=\"25\" width=\"25\" height=\"25\"><\/rect>\r\n            <rect id=\"Rectangle-Copy-4\" x=\"0\" y=\"25\" width=\"25\" height=\"25\"><\/rect>\r\n            <rect id=\"Rectangle-Copy-3\" x=\"75\" y=\"0\" width=\"25\" height=\"25\"><\/rect>\r\n            <rect id=\"Rectangle-Copy-2\" x=\"50\" y=\"0\" width=\"25\" height=\"25\"><\/rect>\r\n            <rect id=\"Rectangle-Copy-1\" x=\"25\" y=\"0\" width=\"25\" height=\"25\"><\/rect>\r\n            <rect id=\"Rectangle-0\" x=\"0\" y=\"0\" width=\"25\" height=\"25\"><\/rect>\r\n        <\/g>\r\n    <\/g>\r\n<\/svg>";
    var title = "<h3 class=\"grid-title\">coming soon</h3>"
    div2.innerHTML = title + "\n" + svg;
}

window.onload = function () {
    document.getElementById("click-me-button").addEventListener('click', generate);
}