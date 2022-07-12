// const getMultiplier = multiplier => aNumber => aNumber * multiplier

function getMultiplier(multiplier) {
    return function (aNumber) {
        return aNumber* multiplier
    }
}

const double = getMultiplier(2)
const triple = getMultiplier(3)
const quad = getMultiplier(4)

console.log(double(9))











function doubleVelocity(velocity, printer) { // 2
    console.log("Entrei em doubleVelocity") // 3
    let newVelocity = velocity*2 // 4
    printer(newVelocity) // 5 se tornou uma função, pois irá virar o printVelocity. Será passado o parâmetro para a função printVelocity. O printer virou printVelocity.
    return newVelocity // 6
  }
  
  let printVelocity = velocity => { //7 
    console.log("Nova velocidade: "+ velocity + " km/s") //8
  }
  
  let newVelocity = doubleVelocity(60, printVelocity) //1 
  console.log(newVelocity) //9