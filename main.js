document.addEventListener("DOMContentLoaded", function() {
  let form = document.querySelector("form");
  let _subject = "Novo cliente!";
  
  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      let dialog = document.querySelector("dialog");
      if (dialog) {
        dialog.innerHTML = "Aguarde...";
      }

     
      let orçamento = document.getElementById("orçamento").value;
      let tel = document.getElementById("wp").value
      let menssagem = document.getElementById("msg").value;
      
      fetch("https://formsubmit.co/ajax/scaio5428@gmail.com", {
        method: "post",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          menssagem, _subject,tel,orçamento
        })
      })
      .then(response => response.json())
      .then(data => {
        if (dialog) {
          dialog.innerHTML = "<h2>Enviado com sucesso!</h2>";
        }
      })
      .catch(error => {
        if (dialog) {
          dialog.innerHTML = "<h2>Erro ao enviar!</h2>";
        }
        console.error("Erro:", error);
      });
    });
  }

  window.Pedir = function() {
    let dialog = document.querySelector("dialog");
    if (dialog) {
      dialog.showModal();
    }
  };

  window.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  });
});