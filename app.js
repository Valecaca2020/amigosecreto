let listaDeAmigos=[]

function adicionarNomeDeAmigos(){
        amigosnome = inputAmigo.value.trim(); 

        if (nome === '') {
            alert('Por favor, digite um nome de um amigo.'); 
            return; 
    }

amigos.push(amigos)

    const itemLista = document.createElement('li'); 
    itemLista.textContent = nome; 
    listaAmigos.appendChild(itemLista); 

    inputAmigo.value = '';
    inputAmigo.focus(); 

    function sortearNomeDeAmigo (){
        if (nomes.length === 0) {
            alert('A lista está vazia! Adicione nomes antes de sortear.');
            return;
    }

         indiceAleatorio = Math.floor(Math.random() * nomes.length);{
    
         const nomeDeAmigoSorteado = amigos[indiceAleatorio];

         resultado.textContent = `O amigo secreto sorteado é: ${nomeSorteado}`;

        
