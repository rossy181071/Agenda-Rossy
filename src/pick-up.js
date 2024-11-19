import { LitElement,html, css } from "lit";

export class PickUp extends LitElement { 
static get properties( ){
    return {
        title0: {type: String } ,
        paragraph0: { type: String } ,
        imgUrl0: { type: String},

        title1: {type: String},
        paragraph1: {type: String },
        imgUrl1: {type: String },

        title2: {type: String },
        paragraph2: {type: String},
        imgUrl2: {type: String},

        title3: {type: String},
        paragraph3: {type: String},
        imgUrl3: {type: String }


    }
}

static get styles() {
    return css`
    #pickup-container {
        background-color: #886666;

        padding: 2vw;
    }
    .car-img {
        width: 300px
    }
    `
}
constructor () {
    super()
    this.title0 = "Pick Up"
    this.paragraph0 = "Tenemos Pick Up 4 puertas, Cabina Sencilla, y Pick Up Diesel"
    

    this.title1="Pick Up 2025 Cabina sencilla"
    this.paragraph1 = "La cantidad de caballos de fuerza de una camioneta pick up cabina sencilla 2025 varía según el modelo, Nissan Frontier 2025: Tiene 310 caballos de fuerza y 281 lb-ft de torque."
    this.imgUrl1 = "https://i.ytimg.com/vi/kxqxEedz-EI/maxresdefault.jpg"
    
    this.title2= "Pick Up 2025 Doble Cabina"
    this.paragraph2= "La Nissan Frontier 2025 tiene 310 caballos de fuerza. Este motor V6 de 3.8 litros ofrece 281 lb-ft de torque y una inyección directa que brinda una respuesta rápida y eficiencia de combustible.La Nissan Frontier 2025 también cuenta con capacidad todoterreno 4x4 disponible. Se espera que la Nissan Frontier Pro-4X 2025 inicie ventas en las últimas semanas de 2024 o bien a inicios de 2025."
    this.imgUrl2 = "https://www.nissan.com.mx/content/dam/Nissan/mexico/assets/frontier/my24/vap/nissan-2024-frontier_pro_4x_4x4_ta-d.jpg.ximg.l_12_m.smart.jpg"

    this.title3 = "Pick Up 2025 Doble Cabina Diesel "
    this.paragraph3= "La Nissan Frontier 2025 tiene 310 caballos de fuerza estándar. Esto se debe a que cuenta con un motor V6 de 3.8 litros. Además, la Frontier 2025 tiene una inyección directa que le permite tener una respuesta rápida y una eficiencia de combustible de hasta 19 mpg en ciudad y 24 mpg en carretera. La Nissan Frontier 2025 también cuenta con la capacidad todoterreno 4x4 disponible."
    this.imgUrl3 = "https://img.asmedia.epimg.net/resizer/v2/J3R6NUXWLZBCZP7M5GWQR4I74A.jpg?auth=6cc42f3c5fd7384c780d3af64b319630bfa1166c318d569a3a9e71a5c7204264&width=1472&height=1104&smart=true"
}

render (){
    return html`
    <div id="pickup-container">
    <h1>${this.title0}</h1>
    <p>${this.paragraph0}</p>
 
    
    <ol>
        <li><h1>${this.title1}</h1></li>        
         <p>${this.paragraph1}</p>
         <img class="car-img" src="${this.imgUrl1}">

         <li><h1>${this.title2}</h1></li>
         <p>${this.paragraph2}</p>
         <img class="car-img" src="${this.imgUrl2}">
         
         <li><h1>${this.title3}</h1></li>
         <p>${this.paragraph3}</p>
         <img class="car-img" src="${this.imgUrl3}">
        
        
    </ol>
    </div>
    `
}
}

window.customElements.define('pick-up', PickUp)