// Função responsável por carregar as UFs e preencher o select UF
export async function carregarUFs(ufSelect) {
  const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  const ufs = await response.json();

  ufs.forEach((uf) => {
    const option = document.createElement('option');
    option.value = uf.sigla;
    option.textContent = uf.nome;
    ufSelect.appendChild(option);
  });
}

// Função responsável por carregar as cidades de uma determinada UF e preencher o select Cidade
export async function carregarCidades(uf, cidadeSelect) {
  const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
  const cidades = await response.json();

  // Limpe as opções anteriores antes de preencher o select com as novas cidades
  cidadeSelect.innerHTML = '<option value="">Selecione uma cidade</option>';

  cidades.forEach((cidade) => {
    const option = document.createElement('option');
    option.value = cidade.nome;
    option.textContent = cidade.nome;
    cidadeSelect.appendChild(option);
  });
}

// Função responsável por carregar os bairros de uma determinada cidade e preencher o select Bairro
export async function carregarBairros(uf, cidade, bairroSelect) {
  const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios/${cidade}/distritos`);
const bairros = await response.json();

// Limpe as opções anteriores antes de preencher o select com os novos bairros
bairroSelect.innerHTML = '<option value="">Selecione um bairro</option>';

bairros.forEach((bairro) => {
const option = document.createElement('option');
option.value = bairro.nome;
option.textContent = bairro.nome;
bairroSelect.appendChild(option);
});
}