function mostrar(secao) {
  let secoes = document.querySelectorAll("section");

  secoes.forEach(s => {
    s.classList.remove("ativo");
  });

  setTimeout(() => {
    document.getElementById(secao).classList.add("ativo");
  }, 100);
}

// GARANTE QUE O HTML CARREGOU
document.addEventListener("DOMContentLoaded", function() {

  const form = document.getElementById("form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    // VALIDAÇÃO CAMPOS
    if(nome === "" || email === "" || mensagem === "") {
      alert("Preencha todos os campos!");
      return;
    }

    // VALIDAÇÃO DE EMAIL (OBRIGATÓRIO)
    if(!email.includes("@") || !email.includes(".")) {
      alert("Digite um email válido!");
      return;
    }

    alert("Mensagem enviada com sucesso!");

    form.reset();
  });

});