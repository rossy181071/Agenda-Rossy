import { LitElement, html, css } from "lit";


export class AutosSedan extends LitElement {
    static get properties() {
        return {
            name: { type: String },
            title0: { type: String },
            paragraph0: { type: String },
            imgUrl0: { type: String },

            title1: { type: String },
            paragraph1: { type: String },
            imgUrl1: { type: String },

            title2: { type: String },
            paragraph2: { type: String },
            imgUrl2: { type: String },

            title3: { type: String },
            paragraph3: { type: String },
            imgUrl3: { type: String },

            title4: { type: String },
            paragraph4: { type: String },
            imgUrl4: { type: String },

            title5: { type: String },
            paragraph5: { type: String },
            imgUrl5: { type: String },

            title6: { type: String },
            paragraph6: { type: String },
            imgUrl6: { type: String },


        }
    }

    constructor() {
        super()
        this.name = "ROSSY"

        this.title0 = `Carro Sedan `
        this.paragraph0 = " Contamos con Autos Sedan y de  Gama alta  "
        this.imgUrl0 = "  https://assets.volkswagen.com/is/image/volkswagenag/auto-sedan-vw?Zml0PWNyb3AlMkMxJndpZD04MDAmaGVpPTQ1MCZhbGlnbj0tMC44NDk5OTk5JTJDMC4wJmZtdD1wbmctYWxwaGEmYzVjZQ=="

        this.title1 = "Sentra 2025  5 puertas "
        this.paragraph1 = "Motor de 2.0 litros y 4 cilindros ,149 caballos de fuerza a 6,000 RPM ,146 libras-pie de torque,Transmisión Xtronic CVT ,Sistema de control de tracción (TCS) ,Pantalla táctil a color de 7 con integración Apple CarPlay® & Android Auto™ ,Sistema Idle Stop/Start ,Modo de manejo ECO y Sport ,Suspensión trasera deportiva multienlace ,Dirección avanzada ,El Sentra 2025 también cuenta con tecnologías para la conducción dinámica, como: Freno inteligente de motor, Control inteligente de trazo, Control de marcha activo, Asistente de subida y bajada en pendiente "
        this.imgUrl1 = " https://i.ytimg.com/vi/X2F9JNcsUDk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCZoRa2DAJLJEpdkPmz9Wqv3w08iQ "

        this.title2 = "Versa 2025 "
        this.paragraph2 = "El Nissan Versa 2025 es un sedán pequeño con un diseño audaz, amplio espacio interior y características de seguridad y tecnología estándar. Entre sus características se encuentran: Diseño,Parrilla V-Motion, faros LED, llantas de aleación de 17 pulgadas y techo flotante ,Seguridad,Alerta de colisión frontal, frenado frontal de emergencia, 6 bolsas de aire, monitor inteligente de visión periférica, control inteligente de velocidad crucero, alerta de tráfico cruzado trasero, alerta inteligente de atención al conductor y alerta de punto ciego ,Conectividad, Apple CarPlay® y Android Auto® ,Interior, Volante forrado en cuero, asientos delanteros calefaccionados y panel de instrumentos Prima-Tex , Paquete Nissan Safety Shield 360,Incluye tecnologías avanzadas de seguridad que vienen de serie en todas las versiones. "
        this.imgUrl2 = " https://i.ytimg.com/vi/-6pZ9TcOCB8/sddefault.jpg"

        this.title3 = "Note Nissan 2025 "
        this.paragraph3 = "Aviso de olvido de llave, luces encendidas y nivel bajo de combustible,Botón de arranque,Computadora de abordo,Control de velocidad crucero (ASCD) Intelligent Key,Levanta cristales eléctricos delanteros y traseros,Radio con reproductor de CD, MP3, AUX-In, Regulación interna de faros, Tablero Fine Vision , Volante regulable en altura con comando de cruise control, Llantas de aleación de 15″ ,Cubiertas 185/65 R15 "
        this.imgUrl3 = "https://acnews.blob.core.windows.net/imgnews/large/NAZ_2dd92717df604ff28f86b3729f346cf5.webp"

        this.title4 = "Peugeot 2022"
        this.paragraph4 = "Este modelo cuenta con dos motores turbo de tres cilindros, uno de 100 hp y otro de 130 hp. El primero está disponible en la variante Active, mientras que el segundo está disponible en los modelos Allure y GT. Este modelo cuenta con un interior Peugeot i-Cockpit 3D, volante de diámetro reducido, cuadro de instrumentos digital 3D Quartz, llave inteligente, entre otros "
        this.imgUrl4 = "https://img.remediosdigitales.com/ff45af/2560_3000/1366_2000.jpg"

        this.title5 = "Mercedes benz de Alta Gama"
        this.paragraph5 = " El Mercedes-Maybach GLS 600 tiene 550 caballos de fuerza y 538 lb-ft de torque. Este SUV cuenta con un motor V8 biturbo de 4.0 litros y una transmisión automática de 9 velocidades. Además, el motor está asistido por un sistema híbrido de 48 voltios que le da un empujón extra. El Mercedes-Maybach GLS 600 es un SUV de lujo con un diseño distintivo, un interior opulento y una avanzada tecnología. Entre sus características se encuentran: Tracción integral 4MATIC, Sistemas de seguridad, Asientos traseros con función de masaje, Asistente de distancia DISTRONIC, Estribos iluminados de noche"
        this.imgUrl5 = "https://acnews.blob.core.windows.net/imgnews/medium/NAZ_ead5d5c2c06c454790b4540f638f06d3.jpg"

        this.title6 = "Jaguar 2025 de Alta Gama"
        this.paragraph6 = "El Jaguar GT EV, que se presentará a finales de 2024 y se empezará a producir a principios de 2025, tendrá una potencia de salida superior a 575 CV. Se espera que este modelo tenga dos motores eléctricos, uno por cada eje, y que pueda acelerar de 0 a 100 km/h en menos de 3 segundos. Jaguar también está trabajando en sistemas de recarga de alto rendimiento que permitan recuperar más de 300 kilómetros en 15 minutos "
        this.imgUrl6 = "https://i.ytimg.com/vi/VmVARlG5yJ4/maxresdefault.jpg"



    }

    static get styles() {
        return css`
        #autos-sedan{
            background-color: #308730;

            padding: 2vw;
        }
        .car-img {
            width: 300px
        }
        `
    }

    render() {
        return html`
        <div id="autos-sedan">
             
            <h1>${this.title0}</h1>
            <p>${this.paragraph0}</p>
            <img class="car-img" src="${this.imgUrl0}" >

<ol>
            
            <li><h1>${this.title1}</h1></li>
            <p>${this.paragraph1}</p>
            <img class="car-img" src="${this.imgUrl1}" >

            <li><h1>${this.title2}</h1></li>
            <img class="car-img" src="${this.imgUrl2}">
            <p>${this.paragraph2}</p>

            <li><h1>${this.title3}</h1></li>
            <img class="car-img" src="${this.imgUrl3}">
            <p>${this.paragraph3}</p>
                
            <li><h1>${this.title4}</h1></li>
            <img class="car-img" src="${this.imgUrl4}">
            <p>${this.paragraph4}</p>
                
            <li><h1>${this.title5}</h1></li>
            <img class="car-img" src="${this.imgUrl5}">
            <p>${this.paragraph5}</p> 

            <li><h1>${this.title6}</h1></li>
            <img class="car-img" src="${this.imgUrl6}">
            <p>${this.paragraph6}</p>
    
    </ol>

        </div>
        `
    }
}




window.customElements.define('autos-sedan', AutosSedan)