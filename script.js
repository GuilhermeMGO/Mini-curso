const imagem = document.querySelector('img');
const botao = document.querySelector('botao');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');


pegarPersonagem = () => {
    return fetch('https://rickandmortyapi.com/api/character', {
        method:'GET',
        headers:{
            Accept: 'application/json',
            "Content-type": 'application-jason'
        }
    }).then((Response) =>Response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.especies;
        condicao.innerHTML = data.status;

    });
}

botao.onclick = pegarPersonagem;

