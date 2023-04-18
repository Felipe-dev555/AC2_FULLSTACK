import React from "react";
import { Link } from "react-router-dom";
import './index.css';

export default function Usuario() {
    return(
        <div>
            <h1>Carros Dísponiveis:</h1>
            <Link to='/'>Retornar a pagina Inicial</Link>
            <article>
                <h2>Carros</h2>
                <ul>
                    <li>1-McLaren Artura.</li>
                    <li>2-Koenigsegg CC850.</li>
                    <li>3-Pagani Utopia.</li>
                    <li>4-Bugatti Centodieci.</li>
                    <li>5-Lamborghini Aventador SVJ.</li>
                    <li>6-Ferrari SF90 Stradale.</li>
                    <li>7-Bentley Batur.</li>
                    <li>8-Rolls-Royce Boat Tail.</li>
                </ul>
            </article>
            <article>
                <h2 class="titulo-article">Motores de Cada Carros</h2>
                <p>Motores potentes são dispositivos que transformam energia em movimento de alta potência. 
                    Eles são usados em várias aplicações, desde carros esportivos até aeronaves 
                    de alta performance.</p>
                <h3>Motores</h3>
                <ul>
                    <li>1-3,0 l V6</li>
					<li>2-V8 5.0 biturbo</li>
					<li>3-6.0 V12 biturbo</li>
					<li>4-W16 8.0 com quatro turbos</li>
					<li>5-6,5 l V12</li>
                    <li>6-4,0 l V8</li>
                    <li>7-W12 de 6,0 litros biturbo</li>
                    <li>8-6.7 V12</li>
                </ul>
            </article>
            <footer>
                Carros de Luxos - Todos os direitos reservados®.
	        </footer> 
        </div>
        

    );

}