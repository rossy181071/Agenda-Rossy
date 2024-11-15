import { LitElement, html, css } from 'lit';

export class CamionesTrabajo extends LitElement {
    static get properties() {
        return {
            title0: { type: String },
            paragraph0: { type: String },
            
            title1: { type: String },
            paragraph1: { type: String },
            ImgUrl1: { type: String },

            title2: { type: String },
            paragraph2: { type: String },
            ImgUrl2: { type: String },
        }
    }

    constructor() {
        super()
        this.title0 = "Camiones"
        this.paragraph0 = "Camiones Doble Rodada "

        this.title1 = "Camiones 2025 Doble rodada Carga"
        this.paragraph1 = "Motor de 2.0 litros y 4 cilindros ,149 caballos de fuerza a 6,000 RPM ,146 libras-pie de torque,Transmisión Xtronic CVT ,Sistema de control de tracción (TCS) ,Pantalla táctil a color de 7pulgadas con integración Apple CarPlay® & Android Auto™ ,Sistema Idle Stop/Start ,Modo de manejo ECOy Sport ,Suspensión trasera deportiva multienlace ,Dirección avanzada ,El Sentra 2025 también cuenta con tecnologías para la conducción dinámica, como: Freno inteligente de motor, Control inteligente de trazo, Control de marcha activo, Asistente de subida y bajada en pendiente."
        this.ImgUrl1 = "https://http2.mlstatic.com/D_NQ_NP_733400-MLM69701547614_052023-O.webp"

        this.title2 = "Camiones 2025 Transportacion personal"
        this.paragraph2 = "La capacidad de la Mercedes-Benz Sprinter varía según el modelo y su uso: Capacidad de pasajeros, La Sprinter de pasajeros puede tener capacidad para 12 o 15 pasajeros, dependiendo de la distancia entre ejes. Sin embargo, se puede personalizar para transportar hasta 20 pasajeros. La Sprinter 515 SUSI CDI puede transportar 18 pasajeros en servicio intermunicipal o 19 en servicio especial. Capacidad de carga, La Sprinter puede transportar hasta 7,5 m3 en su interior, con una superficie de carga de 4 m2. La capacidad media es de 11 m3, mientras que la larga y extra larga es de 14 y 15,5 m3, respectivamente. Capacidad de remolque, La Sprinter puede remolcar hasta 2,000 kg con frenos. Capacidad de combustible , El tanque de combustible de la Sprinter Minivan 516 Extra Larga (2022) es de 93 litros. Camioneta para 20 pasajeros: Mercedes-Benz Sprinter - Kavak,24 jun 2023 — En las versiones de pasajeros de la Sprinter, con una distancia entre ejes de 144 pulgadas, caben"
        this.ImgUrl2 = "https://http2.mlstatic.com/D_NQ_NP_823982-MLM72773110011_112023-O.webp"

    
    }

    static get styles() {
        return css`
        #camiones-container {
            background-color: #66ccee;

            padding: 2vw;
        }
        .car-poster {
            width: 300px
        }
        `
    }

    render() {
        return html`
        <div id="camiones">
            <h1>${this.title0}</h1>
            <p>${this.paragraph0}</p>

            <ol>
                <li><h1>${this.title1}</h1>
                <p>${this.paragraph1}</p>
                <img class="car-poster" src="${this.ImgUrl1}"></li> 
                
                
                
                <li><h1>${this.title2}</h1>
                <p>${this.paragraph2}</p>
                <img class="car-poster" src="${this.ImgUrl2}"></li> 
                
                
                
            
            </ol>
        </div>
        `
    }
}

window.customElements.define('camiones-trabajo', CamionesTrabajo)