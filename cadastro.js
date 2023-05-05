// Importe as funções necessárias de outros arquivos aqui
import { carregarUFs, carregarCidades, carregarBairros } from './localidades.js';

// Obtenha as referências aos elementos do formulário
const cadastroForm = document.querySelector('#cadastro-form');
const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const enderecoInput = document.querySelector('#endereco');
const numeroInput = document.querySelector('#numero');
const ufSelect = document.querySelector('#uf');
const cidadeSelect = document.querySelector('#cidade');
const bairroSelect = document.querySelector('#bairro');

// Carregue as UFs disponíveis na API do IBGE e preencha o select UF
carregarUFs(ufSelect);

// Quando o usuário selecionar uma UF, carregue as cidades daquele estado e preencha o select Cidade
ufSelect.addEventListener('change', (event) => {
  carregarCidades(event.target.value, cidadeSelect);
});

// Quando o usuário selecionar uma cidade, carregue os bairros daquela cidade e preencha o select Bairro
cidadeSelect.addEventListener('change', (event) => {
carregarBairros(ufSelect.value, event.target.value, bairroSelect);
});

// Adicione um listener para o evento de submit do formulário
cadastroForm.addEventListener('submit', (event) => {
// Verifique se todos os campos foram preenchidos
const camposVazios = [];
if (firstNameInput.value === '') {
camposVazios.push('Primeiro nome');
}
if (lastNameInput.value === '') {
camposVazios.push('Último nome');
}
if (emailInput.value === '') {
camposVazios.push('E-mail');
}
if (passwordInput.value === '') {
camposVazios.push('Senha');
}
if (enderecoInput.value === '') {
camposVazios.push('Endereço');
}
if (numeroInput.value === '') {
camposVazios.push('Número');
}
if (ufSelect.value === '') {
camposVazios.push('UF');
}
if (cidadeSelect.value === '') {
camposVazios.push('Cidade');
}
if (bairroSelect.value === '') {
camposVazios.push('Bairro');
}

// Se houver campos vazios, exiba uma mensagem de erro e impeça o envio do formulário
if (camposVazios.length > 0) {
const erroDiv = document.createElement('div');
erroDiv.classList.add('alert', 'alert-danger');
//erroDiv.textContent = ("Os seguintes campos são obrigatórios: " + camposVazios.join(', '));
cadastroForm.insertBefore(erroDiv, cadastroForm.firstChild);
event.preventDefault();
}
});