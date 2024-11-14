import React from 'react';
// import { Link } from 'react-router-dom';
import '../santos/sobree.css';
import Imagem2 from "../Imagem/logos_para _sites.png";

const Sob = () => {
    return (
        <div id="sobre" className='primeira'>
            <p className='aprensentacao'>
            Nós somos a ZEN, um app que será sua melhor amiga no cuidado da saúde feminina. Nosso objetivo é estar ao seu lado em todas as etapas da sua jornada, oferecendo uma experiência personalizada que vai além do básico. Com o ZEN, você entenderá melhor seu corpo, acompanhará o ciclo menstrual com precisão e cuidará da sua saúde de forma intuitiva. Acreditamos que o autoconhecimento é o primeiro passo para uma vida mais saudável e equilibrada. O ZEN é mais que um app; é uma ferramenta de apoio, um espaço de autoconhecimento e uma rede de suporte pronta para te ajudar.
            </p>
         
            <div className="logos">
          <img src={Imagem2} className="logos" alt="Logos" />
        </div>
        </div>

    );
};

export default Sob;