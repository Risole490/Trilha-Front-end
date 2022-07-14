const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false],
]

// plataforma de engate da nave parada = (índice da nave no array +1)

let morethan9 = hitchedSpaceships.filter(currentSpaceship => { return currentSpaceship[1] >= 9}).map(element => { return element[0]})
// percorre o array hitchedSpaceships, acessa o primeiro subarray e filtra o elemento de index 1 que seja maior que 9 e retorna para a variável morethan9. Depois, retornados os resultados, o .map cria um array com apenas o nome da nave, e não todos os dados do subarray.

let pendantPlatform = hitchedSpaceships.findIndex(currentSpaceship => { return currentSpaceship[2] == false})+1
// percorre o array hitchedSpaceships, acessa os subarrays até achar o primeiro que tiver o 2 index com o valor "false" e retorna o número do index do array.

let upcasedSpaceships = hitchedSpaceships.map(currentSpaceship => {
    let upcased = currentSpaceship[0].toUpperCase()
    return upcased
})
// percorre o array hitchedSpaceships, acessa os subarrays no index 0 e deixa toda a string em caps lock. Retorna para a variável upcased o valor em caps lock, e armazena no upcasedSpaceships para ir para a proxima subarray.

alert("Naves com mais de 9 tripulantes: "+ morethan9.join(", ") + "\nPlataforma com engate pendente: "+ pendantPlatform + "\nNaves: " + upcasedSpaceships.join(", "))