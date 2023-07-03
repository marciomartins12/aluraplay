import {conexaoAPI} from "./requisicoes.js"
import {criarCardVideo} from "./colocaVideosNaTela.js"
const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");
const lista = document.querySelector("[data-lista]")

botaoPesquisa.addEventListener("click", evento=>{pesquisa(evento)})

async function pesquisa(evento){
evento.preventDefault();
const textoDaPesquisa = document.querySelector("[data-pesquisa]").value
while(lista.firstChild){
    lista.removeChild(lista.firstChild);
}
const reultadoDaPesquisa = await conexaoAPI.pesquisaAPI(textoDaPesquisa);
reultadoDaPesquisa.forEach(element => {
    criarCardVideo(element)
});
if(reultadoDaPesquisa == ""){
    lista.innerHTML=`<h2 class="mensagem__titulo">Não tem nenhum video com esse termo. Tente novamente</h2>`
}
}