let departureDateEntry = prompt("Digite a data de partida (formato DD/MM/YYYY):")
let departureDate = moment(departureDateEntry, "DD/MM/YYYY")
let today = moment()

let dateDiff = today - departureDateEntry

let chosenOption = prompt("Escolha o formato para exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")

if(chosenOption == "1") {
    let secsOfDeparture = Math.round(dateDiff / 1000) //Math.round arredonda o valor quebrado para inteiro
    alert("Tempo de vôo: "+secsOfDeparture+" segundos.")
} else if(chosenOption == "2") {
    let minsOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert("Tempo de vôo: "+minsOfDeparture+" minutos.")
} else if(chosenOption == "3") {
    let hoursOfDeparture = math.round(dateDiff / 1000 / 3600)
    alert("Tempo de vôo: "+hoursOfDeparture+" horas.")
} else if(chosenOption == "4") {
    let daysOfDeparture = math.round(dateDiff / 1000 / 3600 / 24)
    alert("Tempo de vôo: "+daysOfDeparture+" dias.")
} else {
    alert("Opção inválida.")
}
