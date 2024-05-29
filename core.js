async function busca(){
    let procura = await fetch("exemplo-02.json")
    let produtos = await procura.json()

    let listaDiv = document.getElementById("lista-card")

    for(let produto of produtos){
        listaDiv.innerHTML += `
            <div class="card" data-id="${produto.id}">
            <div class="textos">
                <h4> ${produto.nome} </h4>
            </div>
                <div class="grupo-img">
                    <img src="${produto.img[0]}" width="250" height="auto">
                </div>
                <span class="hello">
                <span class="from">A partir de</span><br>
                <span class="semDesconto">R$ ${(produto.valorsemDesconto).toFixed(2).replace("." , ",")} </span><br>

                <span class="public-price installments">Preço público sugerido.</span><br>
                <span class="public-price installments">Frete não incluso.</span><br>
                </span>       
            </div>   
        `
    }
    let carrosCard = document.querySelectorAll(".card")

    for(let card of carrosCard){
        card.addEventListener("click",CliqueiCard)
    }    

   
}
busca()

function CliqueiCard(){
    let BMW = this.getAttribute("data-id")
    window.location.href="detalhes.html?id=" + BMW
}
var valorNumerico = 1234.56;
var valorFormatado = formatarNumero(valorNumerico);
console.log(valorFormatado);
/*const  fundoID =document.getElementById("moto");
fundoID.style.backgroundImage="url('https://i.pinimg.com/736x/11/95/63/11956381796b638c599e78813dc98f1d.jpg')"
    <p> Cilindrada: ${produto.Cilindrada}.</p>
    <p>  Potência Máxima: ${produto.PotenciaMaxima}.</p>
    <p> Torque Máximo: ${produto.TorqueMaximo}.</p>
    <p> Combustível: ${produto.Combustivel} .</p>   */
