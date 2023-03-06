const pokecontainer = document.querySelector('.box');
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');

const URL = 'https://pokeapi.co/api/v2/pokemon/'


btn.addEventListener('click', handleboton);
// input.addEventListener('input', handleText);


async function handleboton(){

  

   



try{

    const response = await fetch(URL + search.value.toLowerCase())

    if (!response.ok){

        pokecontainer.classList.add('poke')

        pokecontainer.innerHTML = "El pokemon que buscaste no se encontro"

        return;
    }


    pokecontainer.classList.add('poke')


    const data = await response.json();

   
   
    pokecontainer.innerHTML = `
    
    <h1>El pokemon es: ${data.name}</h1>
    <img src= '${data.sprites.front_default}'>
    <p>Numero: ${data.id}</p>
    <p>Altura ${data.height/10} metros</p>
    <p>Peso ${data.weight/10} Kg</p>
    
    
    
    `

   

}catch(error){

    pokecontainer.innerHTML = "No haz ingresado ningun dato"

}
}


