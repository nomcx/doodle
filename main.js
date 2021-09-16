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
    var elem = document.createElement("img");
    elem.setAttribute("src", "https://media.distractify.com/brand-img/4ssYqjdeI/2160x1130/what-happens-if-you-lick-a-frog-1592843320719.jpg");
    elem.setAttribute("height", "314");
    elem.setAttribute("width", "600");
    elem.setAttribute("alt", "toad");
    document.getElementById("div2").appendChild(elem);
}

window.onload = function () {
    document.getElementById("click-me-button").addEventListener('click', generate);
}