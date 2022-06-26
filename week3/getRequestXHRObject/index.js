// XMLHttpRequest

// xhr.onreadystatechange
// xhr.readyState
// xhr.status
// xhr.open
// xhr.send

const xhr = new XMLHttpRequest()
         // Method   // URL                    // Async?
xhr.open("GET", "https://swapi.dev/api/people", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        console.log(xhr.responseText)
        let data = JSON.parse(xhr.responseText)
        //console.log(data) /*moved console.log(data) to below showData function*/
        //console.log(data.results)
        showData(data.results)
    } else if(xhr.readyState === 4 && xhr.status !== 200)
        console.log(xhr.responseText)
}

    /* DON'T PUT THIS IN THE (ABOVE) FUNCTION; 
    YOUR FUNCTION SHOULD ONLY DO ONE THING WELL;
    PUT THIS IN NEW FUNCTION (BELOW)

    const character = document.createElement('h1')
    character.textContent = data.name
    document.appendChild(character)
    */


function showData(data){
    console.log(data)
    for(let i = 0; i < data.length; i++){
        const character = document.createElement('h1')
        character.textContent = data[i].name
        document.body.appendChild(character)
    }
}
