const lista =
document.getElementById('lista');
const nomeInput = 
document.getElementById('nome');
const valorInput = 
document.getElementById('valor');

const dados = [];

const ctx = 
document.getElementById('grafico').
getContext('2d');
const grafico = new Chart(ctx, { 
    type:'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Valores',
            data: [],
            backgroundColor: 'rgba(54, 162, 235, 0.7)', 
            borderColor: 'rgba(54, 162, 235, 1)', 
            borderWidth: 1
        }]
    }, 
    options: {
        scales: {
            y: { beginAtZero: true }
        }
    }
});

function adicionarDado() {
    const nome = nomeInput.value;
    const valor = 
    Number(valorInput.value);

    if (nome && !isNaN(valor)) {
        dados.push({ nome, valor });
        atualizarLista();
        atualizarGrafico();
        nomeInput.value = '';
        valorInput.value = '';
    }
}

function atualizarLista() {
    lista.innerHTML = '';
    dados.forEach(item => { 
        const li = 
        document.createElement('li');
        li.textContent = `${ item.nome }:
        ${item.valor}`;
        lista.appendChild(li);
    });
}

function atualizarGrafico() {
    grafico.data.labels = dados.map(d => d.nome);
    grafico.data.datasets[0].data = 
    dados.map(d => d.valor);
    grafico.update();
}
