let data = {
    "name": "Lama Su",
    "height": "229",
    "mass": "88",
    "hair_color": "none",
    "skin_color": "grey",
    "eye_color": "black",
    "birth_year": "unknown",
    "gender": "male",
    "homeworld": "https://swapi.dev/api/planets/10/",
    "films": [
        "https://swapi.dev/api/films/5/"
    ],
    "species": [
        "https://swapi.dev/api/species/32/"
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T17:30:50.416000Z",
    "edited": "2014-12-20T21:17:50.473000Z",
    "url": "https://swapi.dev/api/people/72/"
}

console.log(data.name)

let nameElement = document.createElement('h2')
nameElement.textContent = data.name
document.body.appendChild(nameElement)

console.log(data.height)

let heightElement = document.createElement('p')
heightElement.textContent = data.height
document.body.appendChild(heightElement)