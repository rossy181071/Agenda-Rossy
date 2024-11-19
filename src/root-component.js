import { LitElement, html, css, nothing } from 'lit'

import { NavbarComponent } from './navbar-component'

import { AgenciaSeminuevos  } from './agencia-seminuevos'

import { AutosSedan } from './autos-sedan'

import { PickUp } from './pick-up'

import { CamionesTrabajo } from './camiones-trabajo'

export class RootComponent extends LitElement {
    static get properties() {
        return {
            currentPage: {
                type: String
            },
        }
    }

    static get styles() {
        return css`
        #root-container {
            background-color: #666666;
        }
        `
    }

    constructor() {
        super()
        this.currentPage = "pick-up"
    }

    handlePageChange(e) {
        this.currentPage = e.detail
    }

    render() {
        let pageTemplate = nothing

        switch (this.currentPage) {
            case 'seminuevos': 
                pageTemplate = html`<agencia-seminuevos></agencia-seminuevos>`
                break;
            case 'sedan':
                pageTemplate = html`<autos-sedan></autos-sedan>`
                break;
            case 'pick-up':
                pageTemplate = html`<pick-up></pick-up>`
                break;
            case 'camiones':
                pageTemplate = html`<camiones-trabajo></camiones-trabajo>`
                break;    

        }
        return html`
        <div id="root-container">
            <navbar-component @change-page="${this.handlePageChange}"></navbar-component>
            <h1>AGENCIA DE SEMINUEVOS ROSSY</h1>
             ${pageTemplate}
            </div>`
    }

}

window.customElements.define('root-component', RootComponent)