async function verDetalhe(){
    let procura = await fetch("exemplo-02.json")
    let produtos = await procura.json()

    let piramideURL = new URLSearchParams(window.location.search)
    let idProduto = piramideURL.get("id")

    let inProduto = null
    for (let x in produtos){
        if (produtos[x].id == idProduto){
            inProduto = x
        }
    }
    
    document.title=produtos[inProduto].nome

    document.getElementById("detalhes").innerHTML += `
        <h3>${produtos[inProduto].nome}</h3>
        <div class="video">
            <img src="${produtos[inProduto].img[0]}" id="img-frame" height="280" width="auto" style="border: 2px solid #000; border-radius:10px" >
        <iframe width="501" height="284" src="${produtos[inProduto].video}" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
        </iframe>
        </div>
        <div class="mini-img" id="mini-img"> </div>   
    `
  
    for(let x of produtos[inProduto].img){
        document.getElementById("mini-img").innerHTML+=`
        <img src="${x}" class="miniatura" height="80" width="auto" style= "border: 2px solid #000; border-radius:5px" >
    `
    }

    let listaMiniaturas= document.getElementsByClassName("miniatura")
    for(let card of listaMiniaturas){
        card.addEventListener("mouseover",alteraImg)
    }
}

function alteraImg(){
    document.getElementById("img-frame").src = this.getAttribute("src")
}

verDetalhe()

/*const  fundoID =document.getElementById("moto");
fundoID.style.backgroundImage="url('https://i.pinimg.com/736x/11/95/63/11956381796b638c599e78813dc98f1d.jpg')"
    <p> ${produtos[inProduto].PotenciaMaxima}</p>
    <p> ${produtos[inProduto].TorqueMaximo}</p>
    <div class="grupoValores">
        <span>R$ ${(produtos[inProduto].valorsemDesconto).toFixed(2).replace("." , ",")}</span>        
    </div>*/

 /*
         document.getElementById("detalhes").innerHTML +=`
        <div class="hello">
            <div class="principal01">
                <div class="product-image">
                    <img src="https://www.honda.com.br/motos/honda-store/sites/honda_store/files/styles/preview_product/public/2023-01/AMARELO_1.jpg.webp?itok=jE-10jBe"  height="350px">
                </div>
                <div class="oii">
                        <p class="product-title">Capacete Honda Twister Special Edition</p>
                    <div class="valor">
                        <p class="product-price">R$ 780,00</p>
                    </div>
                </div> 
            </div>

            <div class="principal01">
                <div class="product-image">
                    <img src="https://m.media-amazon.com/images/I/81ms0JZ+TJL._AC_SX679_.jpg" width="280px" height="300px">
                </div>
                    <div class="oii">
                        <p class="product-title">Suporte de telefone para motocicleta</p>
                    <div class="valor">
                        <p class="product-price">R$ 139,00</p>
                    </div>
                </div>
            </div>

            <div class="principal01">
                <div class="product-image">
                    <img src="https://m.media-amazon.com/images/I/61xWm3G7E3L._AC_UL320_.jpg" width="290px" height="300px">
                </div>
                <div class="oii">
                        <p class="product-title"> jaqueta e calça para chuva com bolsa de armazenamento</p>
                    <div class="valor">
                        <p class="product-price">R$ 349,20</p>
                    </div>
                </div>
            </div>

            <div class="principal01">
                <div class="product-image">
                <img src="https://m.media-amazon.com/images/I/61Z0fwrZGFL._AC_SX569_.jpg"  height="350px">
                </div>
                <div class="oii">
                        <p class="product-title">Luva X11 Protetora Blackout 2 Masculina</p>
                    <div class="valor">
                        <p class="product-price">R$ 86,89 </p>
                    </div>
                </div>
            </div>

            <div class="principal01">
                <div class="product-image">
                    <img src="https://www.honda.com.br/motos/honda-store/sites/honda_store/files/styles/preview_product/public/2022-09/CAPACETE%20HONDA%20DLX%20HFS%20PTOF-GRA_1.jpg.webp?itok=-quqRK_z"  height="350px">
                    <div class="oii">
                        <p class="product-title">Capacete Honda DLX HFS</p>
                        <p class="valor">R$ 242,80</p>
                        </div>
                </div>
            </div>
            
            <div class="principal01">
                <div class="product-image">
                    <img src="https://th.bing.com/th?id=OPHS.8V5Keeh5W9xOqw474C474&w=592&h=550&o=5&pid=21.1" width="250px" height="300px">
                    <div class="oii">
                        <p class="product-title">Par Intercomunicador Capacete Moto V6 1200m Radio Comunicado Interphone</p>
                        <p class="valor">R$ 394,00</p>
                    </div>
                </div> 
            </div>

            <div class="principal01">
                <div class="product-image">
                    <img src="https://www.honda.com.br/motos/honda-store/sites/honda_store/files/styles/preview_product/public/2022-10/2_0.jpg.webp?itok=b1VRyLl4"  height="350px">
                    <div class="oii">
                        <p class="product-title">Capacete linha Especial CG HF3</p>
                        <p class="valor">R$ 583,51</p>
                    </div>
                </div>
            </div>
        </div>
    `      
*/ 