let registros = [];
let meuChart = null;

function registrar() {
  const nome = document.getElementById('nome').value;
  const valor = parseFloat(document.getElementById('valor').value);
  const status = document.getElementById('status').value;

  if(nome && !isNaN(valor)) {
    registros.push({ nome, valor, status });
    atualizarLista();
    atualizarGrafico();
  } else {
    alert("Preencha todos os campos corretamente!");
  }
}

function atualizarLista() {
  const lista = document.getElementById('lista-dados');
  lista.innerHTML = '';

  registros.forEach((item, index) => {
    lista.innerHTML += `
      <div class="card">
        ${index + 1}. ${item.nome}: ${item.valor} - 
        <span style="color:${item.status === 'Ativo' ? 'green' : 'red'}">${item.status}</span>
      </div>
    `;
  });
}

function gerarRelatorio() {
  const relatorio = JSON.stringify(registros, null, 2);
  document.getElementById('relatorio').textContent = relatorio;
}

function atualizarGrafico() {
  const ctx = document.getElementById('meuGrafico').getContext('2d');

  const labels = registros.map(item => item.nome);
  const data = registros.map(item => item.valor);

  if(meuChart) {
    meuChart.destroy();  
  }

  meuChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Valores Registrados',
        data: data,
        backgroundColor: 'rgba(54, 162, 235, 0.6)'
      }]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false
    }
  });
}
