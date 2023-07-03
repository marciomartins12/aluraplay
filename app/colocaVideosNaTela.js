import {conexaoAPI} from "./requisicoes.js"

const listaDeVideos = document.querySelector("[data-lista]")


export function criarCardVideo(evento){
const video = document.createElement("li");
video.classList.add("videos__item");

video.innerHTML=`<iframe width="100%" height="72%" src="${evento.url}"
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>
<div class="descricao-video">
<img src="${evento.imagem}" alt="logo canal alura">
<h3>${evento.titulo}</h3>
<p>${evento.descricao}</p>
</div>`
listaDeVideos.appendChild(video)
}

async function pegarVideoAPI(){
    try{

        const  recebido = await conexaoAPI.requisicaoGet()
        recebido.forEach(element => {
            criarCardVideo(element)
        });
    }catch{
        listaDeVideos.innerHTML=`<h2 class="mensagem__titulo">Não foi possivel encontrar os videos.</h2>`;
    }
}
pegarVideoAPI()