const jokeContent = document.getElementById("joke");
const btn = document.getElementById("btn");


btn.addEventListener("click", randomJoke);

function randomJoke(){
    const apiUrl = 'https://api.api-ninjas.com/v1/dadjokes?limit=';
    const headers = new Headers();
    headers.append('X-Api-Key', 'de1qa0ewLFML0PbqhaAQHw==5mapcUAZVwEGDm0J');


    fetch(apiUrl, {headers})
    .then(response =>{
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data =>{
        console.log("joke: ", data);
        jokeContent.innerHTML = data[0].joke;
    })
    .catch((error)=> {
        console.error("Something went wrong! ", error.message);
    });
    
}

