//GLOBALS
let CANVAS
let SPACING

function main() {
    CANVAS = document.getElementById("myCanvas")
    fitToScreen()
    window.addEventListener('resize', fitToScreen)
    drawScene()
}

function drawNote(ctx, location) {
    ctx.fillStyle="black"
    ctx.strokeStyle="black"
    ctx.lineWidth=1

    ctx.beginPath()
    ctx.moveTo(location.x+SPACING, location.y)
    ctx.lineTo(location.x+SPACING, location.y-SPACING*5)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(location.x+SPACING, location.y-SPACING*5)
    ctx.bezierCurveTo(
        location.x+SPACING*2, location.y-SPACING*3, 
        location.x+SPACING*2.5, location.y-SPACING*3, 
        location.x+SPACING*2.5, location.y-SPACING*1, 
    )
    ctx.bezierCurveTo(
        location.x+SPACING*2.5, location.y-SPACING*2.7, 
        location.x+SPACING*2, location.y-SPACING*2.7, 
        location.x+SPACING, location.y-SPACING*4.5, 
    )
    ctx.stroke()
    ctx.fill()

    ctx.beginPath()
    ctx.save()
    ctx.translate(location.x, location.y)
    ctx.rotate(-0.2)
    ctx.scale(1.05, 0.8)
    ctx.arc(0,0, SPACING, 0, Math.PI*2)
    ctx.fill()
    ctx.stroke()
    ctx.restore()
}

function drawScene() {
    let ctx=CANVAS.getContext("2d")
    ctx.strokeStyle="black"
    ctx.lineWidth=1
    for (let i=-2; i<=2; i++) {
        let y=CANVAS.height/2+i*SPACING*2
        ctx.beginPath()
        ctx.moveTo(0,y)
        ctx.lineTo(CANVAS.width,y)
        ctx.stroke()
    }
    let location = {
        x:CANVAS.width/2,
        y:CANVAS.height/2
    }
    drawNote(ctx, location)
}

function fitToScreen() {
    CANVAS.width=window.innerWidth
    CANVAS.height=window.innerHeight
    SPACING = CANVAS.height/20
    drawScene()
}