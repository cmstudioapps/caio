let dialog = document.querySelector("dialog")

function Pedir() {
   
   dialog.showModal()
   
   
}


function concluir() {
   
   let _subject = "🔴 Novo cliente!"
   
   let contato = `https://wa.me/${Number(document.getElementById("wp").value)}`
   
   let orçamento = document.getElementById("orçamento").value
   
   let mensagem = document.getElementById("msg").value + " O orçamento é de "+orçamento
   
   dialog.innerHTML = "<h2>Aguarde um pouco...</h2>"
   
   fetch("https://formsubmit.co/ajax/scaio5428@gmail.com", {
      
      method: "post",
      body: new URLSearchParams({
         
       _subject,  mensagem, contato
         
      })
      
      
      
   })

   .then(response => response.json())
   .then(data => {
      
      dialog.innerHTML = "<h2>Tudo pronto!<br>Entraremos em contato assim que possivel!😊</h2>"
      
   })
   .catch(error => {
      
      dialog.innerHTML = "<h2>Ocorreu um erro, tente mais uma vez...</h2>"
      console.error(error)
      
   })
}

function compartilhar() {
   
   navigator.share({
      
      title: "Caio multiversando",
      text: "Precisando de um aplicativo para sua loja, barbearia ou qualquer outro negocio? *É SÓ PEDIR!* >Acesse agora o site e peça! " + window.location.href
      
      
   })
   .then(() => {
      
      alert("Muito obrigado por compartilhar nossos serviços!!")
      
      
   })
   
   
}