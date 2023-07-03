import { conexaoAPI } from "./requisicoes.js";
const formulario = document.querySelector("[data-formulario]");
const descricao = numeroAleatorio();

formulario.addEventListener("submit", (evento)=>{
evento.preventDefault();
enviarParaAPI()
})


async function enviarParaAPI(){
    const imagem = document.querySelector("[data-imagem]").value
    const url = document.querySelector("[data-url]").value
    const nome = document.querySelector("[data-nome]").value
try{
    await conexaoAPI.requisicaoPost(nome, url, imagem, descricao)
    window.location.href="../pages/envio-concluido.html"
}catch(e){
    alert(e)
}

}
function numeroAleatorio(){
    const numero = Math.floor(Math.random()*10 +1).toString();
    return numero;
}