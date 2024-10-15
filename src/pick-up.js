import { LitElement,html, css } from "lit";

export class PickUp extends LitElement { 
static get properties( ){
    return {
        title: {type: String } ,
        paragraph: { type: String } ,
        imgUrl: { type: String}
    }
}

static get styles() {
    return css`
    #lit-container {
        background-color: #886666;

        padding: 2vw;
    }
    .movie-poster {
        width: 300px
    }
    `
}
constructor () {
    super()
    this.title = "Pick Up"
    this.paragraph = "Tenemos Pick Up 4 puertas, Cabina Sencilla, y Pick Up Diesel"
    
}

render (){
    return html`
    <div id="lit-container">
    <h1>${this.title}</h1>
    <p>${this.movieparagraph}</p>
    
    <ol>
        <li><h3>Pick Up 2025 Cabina sencilla</h3><img class=  "movie-poster" src= "https://i.ytimg.com/vi/kxqxEedz-EI/maxresdefault.jpg"></li>
        <h3>La cantidad de caballos de fuerza de una camioneta pick up cabina sencilla 2025 varía según el modelo, Nissan Frontier 2025: Tiene 310 caballos de fuerza y 281 lb-ft de torque. </h3> 
        <li><h3>Pick Up 2025 Doble Cabina </h3><img class=  "movie-poster" src= "https://www.nissan.com.mx/content/dam/Nissan/mexico/assets/frontier/my24/vap/nissan-2024-frontier_pro_4x_4x4_ta-d.jpg.ximg.l_12_m.smart.jpg"></li>
        <h3>La Nissan Frontier 2025 tiene 310 caballos de fuerza. Este motor V6 de 3.8 litros ofrece 281 lb-ft de torque y una inyección directa que brinda una respuesta rápida y eficiencia de combustible.La Nissan Frontier 2025 también cuenta con capacidad todoterreno 4x4 disponible. Se espera que la Nissan Frontier Pro-4X 2025 inicie ventas en las últimas semanas de 2024 o bien a inicios de 2025. </h3> 
        <li><h3>Pick Up 2025 Doble Cabina Diesel </h3><img class=  "movie-poster" src= "https://img.asmedia.epimg.net/resizer/v2/J3R6NUXWLZBCZP7M5GWQR4I74A.jpg?auth=6cc42f3c5fd7384c780d3af64b319630bfa1166c318d569a3a9e71a5c7204264&width=1472&height=1104&smart=true"></li>
        <h3>La Nissan Frontier 2025 tiene 310 caballos de fuerza estándar. Esto se debe a que cuenta con un motor V6 de 3.8 litros. Además, la Frontier 2025 tiene una inyección directa que le permite tener una respuesta rápida y una eficiencia de combustible de hasta 19 mpg en ciudad y 24 mpg en carretera. La Nissan Frontier 2025 también cuenta con la capacidad todoterreno 4x4 disponible. </h3> 
    </ol>
    </div>
    `
}
}

window.customElements.define('pick-up', PickUp)