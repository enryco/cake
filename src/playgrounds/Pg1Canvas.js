let request = require('request')

export default function canvas() {
    const c = document.getElementById('c');
    c.addEventListener("mousemove", e => handleEvent(e));
    c.addEventListener("click", e => handleClick(e));
    const ctx = c.getContext('2d');
    const dpr = window.devicePixelRatio;
    const cw = window.innerWidth;
    const ch = window.innerHeight;
    c.width = cw * dpr;
    c.height = ch * dpr;
    ctx.scale(dpr, dpr);
    ctx.translate(c.width / 2, c.height / 2)

    let body = document.getElementsByTagName('canvas')[0]
    let dec = document.getElementById('desc')

    let colors = [
        "#8CC084",
        "#8CC084",
        "#968E85",
        "#C1D7AE",
        "#C1D7AE"
    ]
    let nextColors = colors

    function getNewColors() {
        return new Promise((resolve, reject) => {
            request.post(
                {
                    url: "http://colormind.io/api/",
                    body: JSON.stringify({
                        model: "default"
                    })
                },
                function (error, response, body) {
                    if (!error) {
                        const result = JSON.parse(body)
                        const arr = result.result
                        nextColors = arr.map(e => `rgb(${e[0]},${e[1]},${e[2]})`)
                        resolve()
                    } else {
                        reject()
                    }
                }
            )

            setTimeout(() => reject('Timeout'), 5000)
        })
    }

    function wick() {
        ctx.beginPath()
        ctx.rect(-2, -20, 4, 60)
        ctx.fillStyle = 'grey'
        ctx.fill()
        ctx.closePath()
    }

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

    flame()

    function circle(x, y, R) {
        ctx.beginPath()
        ctx.arc(x, y, R, 0, 2 * 3.14152962)
        ctx.fillStyle = colors[3]
        ctx.fill()
        ctx.closePath()
    }

    // flame(-5, -180)

    let w = [-5, -180];
    let currentAnimation = 0
    function handleWiggle() {
        return new Promise((resolve, reject) => {
            const FRAMES = 3
            const DIST = 50 * Math.random() + 20
            let rand = () => Math.random() - 0.5;
            let dX,
                dY,
                i = 1;
            while (i) {
                dX = rand() * 2;
                dY = rand() * 2;
                Math.sqrt(Math.pow(w[0] + dX * DIST, 2) + Math.pow(w[1] + dY * DIST, 2)) < 200 ? i = 0 : i++
                if (i > 100) return console.error(':<')
            }

            // w[0] = w[0] + dX * DIST;
            // w[1] = w[1] + dY * DIST;
            ctx.lineTo(w[0], w[1])
            ctx.strokeStyle = colors[2]
            ctx.stroke()
            // flame(w[0], w[1])

            let currentAnimation = setInterval(() => {
                function animate() {
                    //...   
                    w[0] = w[0] + dX * DIST / FRAMES;
                    w[1] = w[1] + dY * DIST / FRAMES;

                    // flame(w[0], w[1])
                    // wick()
                    ctx.lineTo(w[0], w[1])
                    ctx.strokeStyle = colors[2]
                    ctx.stroke()

                }
                animate()
            }, 100 / FRAMES
            )


            setTimeout(() => {
                clearInterval(currentAnimation);
                console.log('timeout')
                resolve()
            }, 100)

            // for (let j = 0; j<FRAMES; j++) {
            //     
            // }
        })
    }

    // setInterval(handleWiggle, 30);

    let tick = .02
    function animate(t) {
        // console.log(t)
        // if (t > tick * 1000) {
        //     handleWiggle()
        // }

        handleWiggle().then(() => {
            hehe = requestAnimationFrame(animate)
        }).catch(e => {
            console.log(e)
        })

        // console.log(t)
    }

    let click = false;
    function handleClick(params) {
        // !click ? cancelAnimationFrame(hehe) : hehe = requestAnimationFrame(animate)
        // click = click ? false : true
        init()
    }

    let hehe = 0

    function init() {
        colors = nextColors
        body.style.backgroundColor = colors[0]
        dec.style.color = colors[2]
        ctx.closePath()
        ctx.clearRect(-c.width / 2, -c.height / 2, c.width, c.height)
        circle(0, 0, 150+25*(Math.random()-0.5))
        ctx.moveTo(0,0)
        w = [0,0]
        ctx.beginPath()
        hehe = requestAnimationFrame(animate)
        console.log(hehe)
        getNewColors()
    }

    getNewColors().then( () => init())

    function handleEvent(e) {
        //...
        // flame(e.clientX-c.width/2,e.clientY-c.height/2)
    }
}