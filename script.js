const botaoLogin = document.getElementById('botaoEntrar');
const buttonSubmit = document.getElementById('submit-btn');
const checkboxSubmit = document.getElementById('agreement');

function verificaLogin() {
  const email = document.getElementById('emailLogin');
  const senha = document.getElementById('senhaLogin');
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

botaoLogin.addEventListener('click', verificaLogin);

const divAvaliation = document.getElementById('avaliation-container');

// Ajuda de Raphael Martins
function radio() {
  for (let i = 1; i < 11; i += 1) {
    const label = document.createElement('label');
    const radiosAvaliation = document.createElement('input');
    radiosAvaliation.type = 'radio';
    radiosAvaliation.value = i;
    radiosAvaliation.name = 'rate';
    radiosAvaliation.id = `rate-${i}`;
    if (i === 1) radiosAvaliation.checked = true;
    label.for = radiosAvaliation.id;
    label.innerHTML = i;
    label.appendChild(radiosAvaliation);
    divAvaliation.appendChild(label);
  }
}
radio();

function submit() {
  if (!checkboxSubmit.checked) {
    buttonSubmit.disabled = true;
  } else {
    buttonSubmit.disabled = false;
  }
}

checkboxSubmit.addEventListener('click', submit);

const textArea = document.getElementById('textarea');
function countCaractere() {
  const texto = document.getElementById('counter');
  const count = 500;
  texto.innerHTML = count - textArea.value.length;
}
textArea.addEventListener('keypress', countCaractere);
textArea.addEventListener('keyup', countCaractere);

function capturaNomeCompleto() {
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const elemento = document.createElement('p');
  elemento.innerText = `Nome: ${nome} ${sobrenome}`;
  return elemento;
}

function capturaEmail() {
  const email = document.getElementById('input-email').value;
  const elemento = document.createElement('p');
  elemento.innerText = `Email: ${email}`;
  return elemento;
}

function capturaCasa() {
  let casa = document.getElementById('house');
  const indexCasa = casa.selectedIndex;
  casa = casa.item(indexCasa).innerText;
  const elemento = document.createElement('p');
  elemento.innerText = `Casa: ${casa}`;
  return elemento;
}

function capturaFamilia() {
  const familia = document.getElementsByName('family');
  for (let index = 0; index < familia.length; index += 1) {
    if (familia[index].checked) {
      const textoFamilia = familia[index].parentElement.innerText;
      const textoFinal = textoFamilia.split(' ');
      const elemento = document.createElement('p');
      elemento.innerText = `Família: ${textoFinal[1]}`;
      return elemento;
    }
  }
}

function capturaMaterias() {
  const materias = document.getElementsByClassName('subject');
  const elemento = document.createElement('p');
  const arrayMateriasSelecionadas = [];
  let textoFinal = 'Matérias:';
  for (let index = 0; index < materias.length; index += 1) {
    if (materias[index].checked) {
      arrayMateriasSelecionadas.push(materias[index].parentElement.innerText);
    }
  }
  textoFinal += arrayMateriasSelecionadas;
  elemento.innerText = textoFinal;
  return elemento;
}

function capturaObservacoes() {
  const elemento = document.createElement('p');
  elemento.innerText = `Observações: ${textArea.value}`;
  return elemento;
}

function capturaAvaliacao() {
  const avaliacao = document.getElementsByName('rate');
  for (let index = 0; index < avaliacao.length; index += 1) {
    if (avaliacao[index].checked) {
      const textoAvaliacao = avaliacao[index].parentElement.innerText;
      const elemento = document.createElement('p');
      elemento.innerText = `Avaliação: ${textoAvaliacao}`;
      return elemento;
    }
  }
}

function capturaInfos() {
  return [
    capturaNomeCompleto(),
    capturaEmail(),
    capturaCasa(),
    capturaFamilia(),
    capturaAvaliacao(),
    capturaMaterias(),
    capturaObservacoes(),
  ];
}

function enviarForm(event) {
  event.preventDefault();
  const form = document.getElementById('evaluation-form');
  const arrElementos = capturaInfos();
  form.innerHTML = '';
  for (let index = 0; index < arrElementos.length; index += 1) {
    form.appendChild(arrElementos[index]);
  }
}

buttonSubmit.addEventListener('click', enviarForm);

// querySelectorAll(‘input[name=family]’)
