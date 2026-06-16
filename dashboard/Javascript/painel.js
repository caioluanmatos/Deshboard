// Graficos //
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
            label: 'Vendas',
            data: [12, 19, 8, 15, 10, 20],
            backgroundColor: 'greenyellow',
            borderColor: 'greenyellow',
            borderWidth: 1,
            borderRadius: 8
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: 'white'
                },
                grid: {
                    color: '#333'
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'white'
                },
                grid: {
                    color: '#333'
                }
            }
        }
    }
});
    //fim de Graficos //



function abriDashbaord () {
    console.log('deu certo')
}

function vendas () {
    console.log('deu certo')
}


function Estoque () {
    console.log('deu certo')
}


function Orçamento() {
    console.log('deu certo')
}


function Configuração () {
    console.log('deu certo')
}


function Conta () {
    console.log('deu certo')
}

function btn () {

    const but = document.querySelector("body")

            if(but.style.background =='#111'){
                    but.style.background = 'white'
            }else {
                    but.style.background = '#111'
            }

}
