

async function requisicaoGet(){
    const getrequisicao = await fetch("http://localhost:3000/videos");
    const getConvertida = await getrequisicao.json();
    return await getConvertida;
}
async function requisicaoPost( titulo, url, imagem, descricao){
    const requisicaoPost = await fetch("http://localhost:3000/video", {
        method: "POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url:url,
            imagem: imagem
        })
        
    })
    if(!requisicaoPost.ok){
        throw new Error("Não foi possivel enviar este video.")
    }
    const requisicaoPostConvertida = await requisicaoPost.json();
    return await requisicaoPostConvertida;
}
async function pesquisaAPI(conteudoDaPesquisa){
    const pesquisandoAPI = await fetch(`http://localhost:3000/videos?q=${conteudoDaPesquisa}`);
    const pesquisaConvertida = await pesquisandoAPI.json();
    return await pesquisaConvertida;
}


export const conexaoAPI={
    requisicaoGet,
    requisicaoPost,
    pesquisaAPI
}