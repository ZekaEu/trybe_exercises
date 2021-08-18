const stateSel = document.getElementById('sel-state');
let allStates = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato rosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

function genStates(); {
  for (let i = 0; i < allStates.length; i += 1) {
    const state = document.createElement('option');
    stateSel.appendChild(state);
    state.innerHTML = allStates[i];
  }
}

stateSel.addEventListener('click', genStates());
