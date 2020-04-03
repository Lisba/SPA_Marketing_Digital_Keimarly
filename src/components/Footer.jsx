import React from 'react'
import SocialNetworks from './SocialNetworks'
import NavButtons from './NavButtons'

const Footer = () => {
    return(
        <div className="footer">
            <div className="name">
                <h3>Keimarly Márquez Cisnero</h3>
                <p>Profesional del Marketing Digital - Técnico universitario en Administración y Gerencia</p>
            </div>
            <div className="navButtons">
                <h3>Navegacion</h3>
                <NavButtons />
            </div>
            <div className="socialNetworks">
                <h3>Sígueme:</h3>
                <div>
                    <SocialNetworks />
                </div>
            </div>
            <div className="finalFooter">
                <p>Copyright ©2020 All rights reserved | Esta web fue hecha con <span className="heart"><i class="fas fa-heart"></i></span> por Lisbaldy Ojeda <span><a className="wapp" href="https://api.whatsapp.com/send?phone=5491132307105&text=%C2%A1Qu%C3%A9%20maravilloso%20es%20que%20nadie%20necesite%20esperar%20ni%20un%20solo%20momento%20antes%20de%20comenzar%20a%20mejorar%20el%20mundo!%20" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i></a></span> <span><a className="linkedin" href="https://www.linkedin.com/in/lisbaldyojeda/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a></span></p>
            </div>
        </div>
    )
}

export default Footer;