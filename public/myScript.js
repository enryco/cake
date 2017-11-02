const c = document.getElementById('c');
c.addEventListener("mousemove", e => handleEvent(e));
const ctx = c.getContext('2d');
const dpr = window.devicePixelRatio;
const cw = window.innerWidth;
const ch = window.innerHeight;
c.width = cw * dpr;
c.height = ch * dpr;
ctx.scale(dpr, dpr);
ctx.translate(c.width / 2, c.height / 2)
ctx.rect(-2, -20, 4, 60)
ctx.fillStyle = 'grey'
ctx.fill()

function flame(topX = 0, topY = -150, baseX = 0, baseY = 0, width = 160) {
    ctx.clearRect(-c.width / 2, -c.height / 2, c.width, c.height)
    ctx.beginPath()
    ctx.moveTo(topX, topY);
    ctx.quadraticCurveTo(width / 2, 0, baseX, baseY);
    ctx.quadraticCurveTo(-width / 2, 0, topX, topY);
    ctx.fillStyle = 'orange'
    ctx.fill()
    ctx.closePath()
}

flame(-5, -180)

let w = [-5, -180];
let currentAnimation = 0
function handleWiggle() {
    clearInterval(currentAnimation);
    let rand = () => Math.random() - 0.5;
    let dX,
        dY,
        i = 1;
    while (i) {
        dX = rand() * 2;
        dY = rand() * 2;
        if (
            Math.sqrt(Math.pow(w[0] + dX * 50, 2) + Math.pow(w[1] + dY * 50, 2)) < 200      // make shure wiggle stays in radius
        )
            i = 0;
    }
    currentAnimation = setInterval(function () {
        //...   
        w[0] = w[0] + dX;
        w[1] = w[1] + dY;

        flame(w[0], w[1])
    }, 30);
}





setInterval(handleWiggle, 1020);


function handleEvent(e) {
    //...
    // flame(e.clientX-c.width/2,e.clientY-c.height/2)
}