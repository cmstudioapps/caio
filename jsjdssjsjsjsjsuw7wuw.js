function postar() {
   
   if(vezes <= 5) {
   
   
   
    caracteresAleatorios = gerarCaracteresAleatorios(tamanho);
 let mensagem = document.getElementById("input").value
   
   
let postagem = {
   source: "https://cmstudioapps.github.io/An-nimos/", 
   poster: mensagem,
   nome: caracteresAleatorios
   
}

if(!mensagem || mensagem == "" || mensagem == " ") {
   
   
   alert("Escreva algo primeiro")
   
} else {

fetch("https://feed-78c44-default-rtdb.firebaseio.com/"+caracteresAleatorios+".json", {
   
   
   method: "put",
   headers: {
      
   "Content-type":  "application/json"
      
   },
   body: JSON.stringify(postagem)
   
   
   
})

.then(response => response.json())
.then(data => {
   
   vezes = vezes+1
   localStorage.setItem("vezes",vezes.toString())
   
   alert("Publicado com sucesso!")
   
   
   
})

.catch(erro => alert("Ocorreu um erro no envio..."))
   
}
} else {
   
   alert("você  atingiu o limite de postagens por dia.")
   
   
}
}