const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');


const getDadJoke = async () => {
    try{
        const config = { headers: { Accept: "application/json",} } 
        const respond = await axios.get("https://icanhazdadjoke.com/", config);
        return respond.data.joke;
    } catch (e) {
        return "No jokes Available...Sorry :(";
    }
    
}

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

button.addEventListener('click', addNewJoke)