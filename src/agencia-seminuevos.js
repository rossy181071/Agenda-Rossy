import { LitElement, html, css } from "lit";

export class AgenciaSeminuevos extends LitElement {
    static get properties() {
        return {
            title: { type: String },
            name: { type: String },
            paragraph: { type: String }
        }
    }

    constructor() {
        super()
        this.title = "Bienvenidos a su Agencia de autos de confianza tenemos varias opciones para Ustedes tanto de Autos Sedan, Sub, Camionetas de lujo y Pick up    "
        this.name = "Rossy"
        this.paragraph = html`Soy <strong>${this.name}</strong> Su Agente de confiaza para quue pueda adquirir con nosotros los autos ultimo modelo 2025 tanto de lujo como de trabajo para su nueva adquisicion`
    }

    static get styles() {
        return css`
        #agenciaseminuevos-container {
            background-color: #6666cc;

            padding: 2vw;
        }
        `
    }


    render() {
        return html`
        <div id="agenciaseminuevos-container">
            <h1>${this.title}</h1>
            <p>${this.paragraph}</p>
        </div>`
    }
}

window.customElements.define('agencia-seminuevos', AgenciaSeminuevos)
