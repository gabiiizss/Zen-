import React from 'react';
import { Link } from 'react-router-dom';
import '../santos/car.css';
import Imagem1 from '../Imagem/pessoas-removebg-preview.png';
import Imagem2 from '../Imagem/olho-removebg-preview.png';
import Imagem3 from '../Imagem/cadeado-removebg-preview.png';

const Cards = () => {
  return (
    <>
      <div id='informacoes' className='cartao'>
        <div className="card">
          <div className='tit'>
            <div><img src={Imagem2} className="img" alt="olho" /></div>
            <b>De Olho no Ciclo Menstrual</b>
          </div>
          Com o ZEN, você pode registrar e acompanhar todos os detalhes do seu ciclo menstrual, incluindo sintomas, humor e fluxo. Com base nessas informações, o ZEN ajuda a prever menstruações, períodos férteis e ovulações, facilitando o planejamento do seu dia a dia com mais confiança e tranquilidade.
        </div>
        <div className="card">
          <div className='tit'>
            <div><img src={Imagem1} className="img" alt="pessoas" /></div>
            <b>Conectando Você com Outras Mulheres</b>
          </div>
          No ZEN, você faz parte de uma comunidade global de mulheres que compartilham experiências e aprendizados. Participe dos fóruns, tire dúvidas com especialistas e encontre apoio emocional. Aqui, a gente cria um espaço acolhedor onde você pode se sentir compreendida e apoiada sempre que precisar.
        </div>
        <div className="card">
          <div className='tit'>
            <div className='imge'><img src={Imagem3} className="img" alt="cadeado" /></div>
            <b>Privacidade é Tudo</b>
          </div>
          A gente sabe que as suas informações pessoais são super importantes. Por isso, garantimos que todos os seus dados são tratados com o maior cuidado e segurança. Tudo é protegido por criptografia, e você tem total controle sobre o que compartilha e com quem compartilha.
        </div>
      </div>
      <center>
        <div id='cadastro' className='botao'>
          <Link to="/Survey">
            <button className="button">
              <div className='cad'>Entre no Zen hoje!</div>
              <div className="hoverEffect">
                <div></div>
              </div>
            </button>
          </Link>
        </div>
      </center>
    </>
  );
};

export default Cards;
