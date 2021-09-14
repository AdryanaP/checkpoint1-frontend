const modalForm = document.getElementById("modal-form");
const modalInfo = document.getElementById("modal-info");
const modalContato = document.getElementById("modal-contato");
let estado = JSON.parse(localStorage.getItem("crachas")) || [];

function adicionar() {
  modalForm.style.display = "block";
}

function cancelar() {
  modalForm.style.display = "none";
}

function abrirInfo() {
  modalInfo.style.display = "block";
}

function abrirContato() {
  modalContato.style.display = "block";
}

function fecharContato() {
  modalContato.style.display = "none";
}

function enviarContato() {
  fecharContato();
  alert("Enviado!");
}

window.onclick = function (evento) {
  if (evento.target === modalForm) {
    modalForm.style.display = "none";
  } else if (evento.target === modalInfo) {
    modalInfo.style.display = "none";
  } else if (evento.target === modalContato) {
    modalContato.style.display = "none";
  }
};

function postar() {
  const id = gerarId();
  const empresa = document.getElementById("empresa").value;
  const nome = document.getElementById("nome").value;
  const cargo = document.getElementById("cargo").value;
  const urlImg = document.getElementById("url").value;

  const card = document.getElementById("card");

  estado.push({
    id,
    nome,
    cargo,
    empresa,
    urlImg,
  });

  localStorage.setItem("crachas", JSON.stringify(estado));

  renderizar(empresa, urlImg, cargo, nome, id);

  modalForm.style.display = "none";
}

function renderizar(empresa, urlImg, cargo, nome, id) {
  card.innerHTML += `<div class="cracha" id="${id}">
  <span class="buraco"></span>
  <h2>${empresa}</h2>
  <img src="${urlImg}">
  <h3>${nome}</h3>
  <p>${cargo}</p>
  </div>`;
}

function gerarId() {
  return `cracha_${Math.ceil(Math.random() * 999999999)}`;
}

function apagar() {
  localStorage.removeItem("crachas");
  card.innerHTML = "";
  estado = [];
}

for (let cracha of estado) {
  renderizar(
    cracha.empresa,
    cracha.urlImg,
    cracha.cargo,
    cracha.nome,
    cracha.id
  );
}

document.querySelector("#apagar").addEventListener("click", apagar);
document.querySelector("#postar").addEventListener("click", postar);
document.querySelector("#adicionar").addEventListener("click", adicionar);
document.querySelector("#cancelar").addEventListener("click", cancelar);
document.querySelector("#abrir-info").addEventListener("click", abrirInfo);
document
  .querySelector("#abrir-contato")
  .addEventListener("click", abrirContato);
document
  .querySelector("#cancelar-contato")
  .addEventListener("click", fecharContato);
document
  .querySelector("#postar-contato")
  .addEventListener("click", enviarContato);
