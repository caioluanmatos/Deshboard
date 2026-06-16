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
    const main = document.querySelector("main")

     main.innerHTML = `
        <h1> Dashboard </h1>
        <p> Painel principal </p>

    <div class="js-cards">
        <div class="card-dashboard">
            <h3>Vendas</h3>
            <p>R$ 1.250</p>
        </div>

        <div class="card-dashboard">
            <h3>Clientes</h3>
            <p>45</p>
        </div>

        <div class="card-dashboard">
        <h3>Produtos</h3>
        <p>120</p>
    </div>

    <div class="card-dashboard">
        <h3>Pedidos</h3>
        <p>32</p>
    </div>

    </div>

<h2 id="tex1-js">Últimas Vendas</h2>

<table>
    <tr>
        <th>Cliente</th>
        <th>Produto</th>
        <th>Valor</th>
    </tr>

    <tr>
        <td>João</td>
        <td>Notebook</td>
        <td>R$ 2.500</td>
    </tr>

    <tr>
        <td>Maria</td>
        <td>Mouse</td>
        <td>R$ 120</td>
    </tr>
</table>
        <div class="card-dashboard-mes">
            <h3>Lucro do Mês</h3>
            <p>R$ 8.750</p>
        </div>


`
}

function vendas () {
    const main = document.querySelector("main")

   main.innerHTML = `
        <h1>Vendas</h1>
        <p>Total vendido hoje: R$ 1.250</p>
        <button>Novo Pedido</button>
    `;
}


function estoque () {
    const main = document.querySelector("main")

    main.innerHTML = `
        <h1> Estoque </h1>
        <p> Lista de Produtos </p>
`
    
}


function orçamento() {
      const main = document.querySelector("main")

    main.innerHTML = `
        <h1> Orcamento </h1>
        <p> Mes </p>
        `
}


function configuração () {
    console.log('deu certo')
}


function conta () {
    console.log('deu certo')
}



function dark() {


    const main = document.querySelector("main");

    const WHITE = 'white'
    const BLACK = '#0d0d0d'

    console.log(main.style.backgroundColor);

            if(main.style.backgroundColor == "rgb(13, 13, 13)"){
                main.style.backgroundColor = '#f5f5f5'
            }else {
                main.style.backgroundColor = "rgb(13, 13, 13)"
            }


            // Menu Lateral //

            const  menu = document.querySelector ("aside")

                    if(menu.style.backgroundColor == 'black'){
                            menu.style.backgroundColor = '#f5f5f5'
                    }    else {
                        menu.style.backgroundColor = 'black'
                    }  
}





