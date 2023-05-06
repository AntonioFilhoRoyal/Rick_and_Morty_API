console.log('Estou aqui !');

fetch('https://rickandmortyapi.com/api/character')
    .then(respost => respost.json())
    .then(json => apiTreatment(json));



function apiTreatment(json) {
    const { results } = json;
    console.log(results[7])
    const submitCharacter = document.querySelector('.btn-submit').addEventListener('click', e => {
        e.preventDefault();

        const input = document.querySelector('input');
        const img = document.querySelector('img');
        const name = document.querySelector('.name');
        const specie = document.querySelector('.specie');
        let status = document.querySelector('.statu');
        const origin = document.querySelector('.origin');

        for(let i = 0; i < results.length; i++){
            if(input.value === results[i].name){

                img.src = results[i].image;
                img.width = "250";
                img.height = "250";
                name.innerText = results[i].name;
                specie.innerHTML = results[i].species;
                status.innerHTML = results[i].status;
                status.style.color = status.innerHTML == 'Alive' ? status.style.color = 'green' : status.style.color = 'red';
                origin.innerHTML = results[i].origin.name;
            }
        }

    })
}

