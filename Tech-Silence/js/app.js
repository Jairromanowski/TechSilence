const item = { nome: 'Turma 3º ADS', status: 'Ativo' };

document.addEventListener('DOMContentLoaded', () => {
  const lista = document.getElementById('lista-dados');
  if(lista) {
    lista.innerHTML = `
      <div class="card">
        <span>${item.nome}: 60</span><br>
        <span style="color:red;">${item.status}</span>
      </div>
    `;
  }

  const grafico = document.getElementById('meuGrafico');
  if(grafico) {
    const ctx = grafico.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['A', 'B', 'C'],
        datasets: [{
          label: 'Exemplo',
          data: [10, 20, 30],
          backgroundColor: 'rgba(54, 162, 235, 0.6)'
        }]
      }
    });
  }
});