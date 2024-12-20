import  { LitElement, html, css } from "lit";

export class NavbarComponent extends LitElement { 
    static get properties() {
        return {
            pages: { type: Array }
        }

    }
    constructor () {
        super()
        this.pages = [
        {
            url: 'seminuevos',
            title:'Agencia Seminuevos'
        },
        {
            url: 'sedan',
            title: 'Autos Sedan'
        },
        {
            url: 'pick-up',
            title: 'Pick Up'
        },
        {
            url: 'camiones',
            title: 'Camiones'
        }
        
        ]
    }

    static get styles() {
        return css`
        #navbar-container {
            background-color: #225897;

            display: table;
            width: 100%;
            table-layout: fixed;
        }
        
        #navbar-container h2 {
            display: table-cell;
            text-align: center;

            background-color: #f35454;
            padding: 20 px;
        }
       
       `

    }

    triggerPageChange(e) {
        this.dispatchEvent(new CustomEvent('change-page', {
            detail: e.target.id
        }))
    }
    render() {
        return html`
        <div id="navbar-container">
          ${this.pages.map(page => html`<h2 id="${page.url}" @click="${this.triggerPageChange}">${page.title}</h2>`)}
        </div>
        `
    }
}

window.customElements.define('navbar-component', NavbarComponent)