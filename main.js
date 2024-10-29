window.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    e.preventDefault();
  }
});

window.addEventListener("submit", (e) => {
  alert("Formulário enviado com sucesso!");
  e.preventDefault();
  e.target.reset();
});
