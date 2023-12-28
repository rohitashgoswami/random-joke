const jokeContent = document.getElementById("joke");
const btn = document.getElementById("btn");
const emoji = document.getElementById("emoji");
const happyEmoji = "https://media.giphy.com/media/YNDLZBTq8hGPDJkmYo/giphy.gif"
const sadEmoji = "https://media.giphy.com/media/xYJhVe7tIy8KUZCwkW/giphy.gif"
const apiKey = "<Get the api key from website>"


btn.addEventListener("click", randomJoke);

function randomJoke(){
    btn.innerHTML = "Geting a joke for you...";
    btn.disabled = true;
    const apiUrl = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';
    const apiHeaders = new Headers();
    apiHeaders.append('X-Api-Key', apiKey);

    const apiOptions = {
        headers: apiHeaders, 
        method: "GET"
    }
    fetch(apiUrl, apiOptions)
    .then(response =>{
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data =>{
        console.log("joke: ", data);
        jokeContent.innerHTML = data[0].joke;
        emoji.setAttribute("src", happyEmoji);
        btn.innerHTML = "Generate a joke";
        btn.disabled = false;
    })
    .catch((error)=> {
        console.error("Something went wrong! ", error.message);
        jokeContent.innerHTML = "Oops! It seems like our joke-fetching hamster is on a break. 🐹 Please try again and see if it gets back from its tiny vacation.";
        emoji.setAttribute("src",sadEmoji);
        btn.innerHTML = "Generate a joke";
        btn.disabled = false;
    });
    
}

