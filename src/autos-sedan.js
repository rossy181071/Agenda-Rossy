import { LitElement, html, css } from "lit";


export class AutosSedan extends LitElement {
    static get properties() {
        return {
            name: { type: String },
            title: { type: String },
            moviesParagraph: { type: String }
        }
    }

    constructor() {
        super()
        this.name = "ROSSY"
        this.title = `Modelo 2025 cuatro cilindros 5 puertas  ${this.name}`
        this.moviesParagraph = " Contamos con Autos Sedan y de  Gama alta  "
    }

    static get styles() {
        return css`
        #bio-container {
            background-color: #308730;

            padding: 2vw;
        }
        .movie-poster {
            width: 300px
        }
        `
    }

    render() {
        return html`
        <div id="Autos-Sedan">
            <h1>${this.title}</h1>
            <p>${this.moviesParagraph}</p>
            
            <ol>
                <li><h3>Sentra 2025  5 puertas</h3><img class="movie-poster" src="https://i.ytimg.com/vi/X2F9JNcsUDk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCZoRa2DAJLJEpdkPmz9Wqv3w08iQ"></li>
                <h3>Motor de 2.0 litros y 4 cilindros ,149 caballos de fuerza a 6,000 RPM ,146 libras-pie de torque,Transmisión Xtronic CVT ,Sistema de control de tracción (TCS) ,Pantalla táctil a color de 7" con integración Apple CarPlay® & Android Auto™ ,Sistema Idle Stop/Start ,Modo de manejo "ECO" y "Sport" ,Suspensión trasera deportiva multienlace ,Dirección avanzada ,El Sentra 2025 también cuenta con tecnologías para la conducción dinámica, como: Freno inteligente de motor, Control inteligente de trazo, Control de marcha activo, Asistente de subida y bajada en pendiente.</h3> 
                <li><h3>Versa 2025</h3><img class="movie-poster" src="https://i.ytimg.com/vi/-6pZ9TcOCB8/sddefault.jpg"></li>
                <h3>El Nissan Versa 2025 es un sedán pequeño con un diseño audaz, amplio espacio interior y características de seguridad y tecnología estándar. Entre sus características se encuentran: Diseño,Parrilla V-Motion, faros LED, llantas de aleación de 17 pulgadas y techo flotante ,Seguridad,Alerta de colisión frontal, frenado frontal de emergencia, 6 bolsas de aire, monitor inteligente de visión periférica, control inteligente de velocidad crucero, alerta de tráfico cruzado trasero, alerta inteligente de atención al conductor y alerta de punto ciego ,Conectividad, Apple CarPlay® y Android Auto® ,Interior, Volante forrado en cuero, asientos delanteros calefaccionados y panel de instrumentos Prima-Tex , Paquete Nissan Safety Shield 360,Incluye tecnologías avanzadas de seguridad que vienen de serie en todas las versiones. </h3>
                <li><h3>Note Nissan 2025</h3><img class="movie-poster" src="https://acnews.blob.core.windows.net/imgnews/large/NAZ_2dd92717df604ff28f86b3729f346cf5.webp"></li>
                <h3>Aviso de olvido de llave, luces encendidas y nivel bajo de combustible,Botón de arranque,Computadora de abordo,Control de velocidad crucero (ASCD) Intelligent Key,Levanta cristales eléctricos delanteros y traseros,Radio con reproductor de CD, MP3, AUX-In, Regulación interna de faros, Tablero Fine Vision , Volante regulable en altura con comando de cruise control, Llantas de aleación de 15″ ,Cubiertas 185/65 R15. </h3>
                <li><h3>Peugeot 2022</h3><img class="movie-poster" src="https://img.remediosdigitales.com/ff45af/2560_3000/1366_2000.jpg"></li>
                <h3>Este modelo cuenta con dos motores turbo de tres cilindros, uno de 100 hp y otro de 130 hp. El primero está disponible en la variante Active, mientras que el segundo está disponible en los modelos Allure y GT. Este modelo cuenta con un interior Peugeot i-Cockpit 3D, volante de diámetro reducido, cuadro de instrumentos digital 3D Quartz, llave inteligente, entre otros.</h3>
                <li><h3>Mercedes benz de Alta Gama</h3><img class="movie-poster" src="https://acnews.blob.core.windows.net/imgnews/medium/NAZ_ead5d5c2c06c454790b4540f638f06d3.jpg"></li>
                <h3>El Mercedes-Maybach GLS 600 tiene 550 caballos de fuerza y 538 lb-ft de torque. Este SUV cuenta con un motor V8 biturbo de 4.0 litros y una transmisión automática de 9 velocidades. Además, el motor está asistido por un sistema híbrido de 48 voltios que le da un empujón extra. El Mercedes-Maybach GLS 600 es un SUV de lujo con un diseño distintivo, un interior opulento y una avanzada tecnología. Entre sus características se encuentran: Tracción integral 4MATIC, Sistemas de seguridad, Asientos traseros con función de masaje, Asistente de distancia DISTRONIC, Estribos iluminados de noche. </h3>
                <li><h3>Jaguar 2025 de Alta Gama </h3><img class="movie-poster" src="https://i.ytimg.com/vi/VmVARlG5yJ4/maxresdefault.jpg"></li>
                <h3>El Jaguar GT EV, que se presentará a finales de 2024 y se empezará a producir a principios de 2025, tendrá una potencia de salida superior a 575 CV. Se espera que este modelo tenga dos motores eléctricos, uno por cada eje, y que pueda acelerar de 0 a 100 km/h en menos de 3 segundos. Jaguar también está trabajando en sistemas de recarga de alto rendimiento que permitan recuperar más de 300 kilómetros en 15 minutos. </h3>
            </ol>
        </div>
        `
    }
}




window.customElements.define('autos-sedan', AutosSedan)