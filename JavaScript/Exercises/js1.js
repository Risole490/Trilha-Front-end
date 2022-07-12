/* ex1
let uOld = prompt("Nome da pessoa mais velha: ")
let uOldAge = prompt("Idade da pessoa mais velha: ")

let uNew = prompt("Nome da pessoa mais nova: ")
let uNewAge = prompt("Idade da pessoa mais nova: ")

var ageDif = uOldAge - uNewAge

alert("Pessoa mais velha: "+uOld+", "+uOldAge+" anos."+
      "\nPessoa mais nova: "+uNew+", "+uNewAge+" anos."+
      "\nDiferença de idade: "+ageDif+" anos.") 
*/

/* let velocity = 0

let uName = prompt("Seu nome, piloto?")
let uVelocity = prompt("Qual velocidade gostaria de acelerar a nave, "+uName+" ?")
velocity = uVelocity

let velConfirm = confirm("Estamos indo para a velocidade de "+velocity+"km/s, podemos prosseguir?")

if (velConfirm == false) {
      let uVelocity2 = prompt("Qual a nova velocidade, então?")
      velocity = uVelocity2
} 

if (velocity < 0) {
      alert("Nave está parada. Considere partir e aumentar a velocidade.")
} else if(velocity < 40) {
      alert("Você está devagar, podemos aumentar mais.")
} else if(velocity >= 40 && velocity < 80) {
      alert("Parece uma boa velocidade para manter")
} else if(velocity >= 80 && velocity < 100) {
      alert("Velocidade alta. Considere diminuir.")
} else if(velocity >= 100) {
      alert("Velocidade perigosa. Controle automático forçado.")
}

alert("Piloto: "+uName+"\nVelocidade atual: "+velocity+" km/s") */

/* let distLuz = prompt("Informe a distância em anos-luz:")
let distOpt = prompt("Deseja converter para qual método?\n1- Parsec(pc)\n2- Unidade astronômica(AU)\n3- Quilômetros(km):")

let thisUnity
let convDist

switch (distOpt) {
      case "1":
      thisUnity = "Parsec"
      convDist = distLuz * 0.306601
      break
      case "2":
      thisUnity = "Unidade Astronômica"
      convDist = distLuz * 63241.1
      break
      case "3":
      thisUnity = "Quilômetros"
      convDist = distLuz * 9.5 * Math.pow(10,12)
      break
      default:
      thisUnity = "Unidade não identificada"
      convDist = "Conversão fora do escopo"
}

alert("Distância em Anos-luz: "+distLuz+"\n"+thisUnity+": "+convDist) */

/*let countDob = 0
let enterDob = ""

let navName = prompt("Informe o nome da nave:")
enterDob = prompt("Deseja entrar em dobra espacial?\n1- Sim\n2- Não")

while(enterDob == "1") {
      countDob += 1
      enterDob = prompt("Deseja realizar a próxima dobra?\n1- Sim\n2- Não")
}

alert("Nave: "+navName+"\n"+"Dobra realizada "+countDob+" vezes.") */

/* let newSpaceship = ""

let uSpaceship = prompt("Informe o nome da nave: ")

let subCarac = prompt("Qual caractere você quer substituir?")
let repCarac = prompt("Qual caractere quer que substitua?")

for(let pos = 0; pos < uSpaceship.length; pos++) {
      if(uSpaceship[pos] == subCarac){
            newSpaceship += repCarac
      } else {
            newSpaceship += uSpaceship[pos]
      }
}

alert("O novo nome da nave é: "+newSpaceship) */


/* let invSpaceship = "" 
let spaceship = prompt("Informe o nome da nave: ")

for(let pos = spaceship.length -1; pos >= 0; pos--) {
      if(spaceship[pos] == "e") {
          break
      } 
      invSpaceship += spaceship[pos]
}

alert("Nome original da nave: "+spaceship+"\nNome após ocultação: "+invSpaceship) */


let velocity = 0
let acceleration = 5

let spaceship = prompt("Informe o nome da nave: ")

menu()

function menu() {
      let optMenu = prompt("Escolha uma opção do menu:\n1- Acelerar nave em 5km/s\n2- Desacelerar em 5km/s\n3- Imprimir dados de bordo\n4- Sair")
      switch(optMenu) {
            case "1":
            acelerar()
            menu()
            break
            case "2":
            desacelerar()
            menu()
            break
            case "3":
            dadosBordo(spaceship, velocity)
            menu()
            break
            case "4":
            break
            default:
            alert("Opção inválida.")
            menu()
            break
      }
}

function acelerar() {
      velocity += acceleration
}

function desacelerar() {
      velocity -= acceleration
      if (velocity < 0 ) {
            velocity = 0
      }
}

function dadosBordo() {
      alert("Nome da nave: "+spaceship+"\nVelocidade atual: "+velocity+" km/s")
}
