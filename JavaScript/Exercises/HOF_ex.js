// 1



/*function desacelerar (velocity, printer) {
    console.log("Reduzindo velocidade")
    for (let i = velocity; i>=0; i-= 20) {
        printer(i)
    }
    alert("Nave parada. Comportas sendo abertas.")
}

let printVelocity = desacelerar(160, velocity => {
    console.log("Estamos a "+ velocity +" km/s")
}) */



// 2

function slowDown(velocity, printer) {
    let deceleration = 20

    while(velocity>0) {
        printer(velocity)
        velocity -= deceleration
    }

    alert("Nave parada. Comportas sendo abertas.")
}

let spaceshipVelocity = 150

slowDown(spaceshipVelocity, velocity => {
    console.log("Estamos a "+ velocity +" km/s")
})

