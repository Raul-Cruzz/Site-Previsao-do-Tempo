
const key = "29527ed16786117d9347288c7467a4ba"

const colocarDadosNaTela = (dados) => {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".clima").innerHTML = "Temperatura:" 
    document.querySelector(".tempo").innerHTML = "Max    " + Math.floor(dados.main.temp_max) + " °C  " + "<br>Min  " + Math.floor(dados.main.temp_min) + " °C "
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + " %"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    console.log(dados)
}

async function buscarCidade (cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())
    
    colocarDadosNaTela(dados)
}

const cliqueiNoBotao = () => {
    const cidade = document.querySelector(".input-cidade").value
   
    buscarCidade(cidade)
}